import { createHash } from "node:crypto";
import { mkdir, readFile, stat, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { spawn } from "node:child_process";

const root = process.cwd();
const selectionPath = process.env.APEX_MEDIA_SELECTION;
const sourceRoot = process.env.APEX_MEDIA_ROOT;
if (!selectionPath || !sourceRoot) {
  throw new Error("Set APEX_MEDIA_SELECTION and APEX_MEDIA_ROOT.");
}

const productsPath = join(root, "data", "products.json");
const products = JSON.parse(await readFile(productsPath, "utf8"));
const productsBySourceId = new Map(products.map((product) => [String(product.source.sourceId), product]));
const selections = JSON.parse(await readFile(selectionPath, "utf8"));
const legacy = /(?:[KAI]?INDER[SG8]|J[I1]?ANDAS[I1]|FANSALA|ALIBABA(?:\.COM)?|MADE[\s-]*IN[\s-]*CHINA)/i;

function run(command, args) {
  return new Promise((resolve, reject) => {
    const child = spawn(command, args, { stdio: ["ignore", "ignore", "pipe"] });
    let stderr = "";
    child.stderr.on("data", (chunk) => {
      stderr += chunk;
    });
    child.on("error", reject);
    child.on("close", (code) => {
      if (code === 0) resolve();
      else reject(new Error(`${command} exited ${code}: ${stderr.slice(-1200)}`));
    });
  });
}

function runCapture(command, args) {
  return new Promise((resolve, reject) => {
    const child = spawn(command, args, { stdio: ["ignore", "pipe", "pipe"] });
    let stdout = "";
    let stderr = "";
    child.stdout.on("data", (chunk) => {
      stdout += chunk;
    });
    child.stderr.on("data", (chunk) => {
      stderr += chunk;
    });
    child.on("error", reject);
    child.on("close", (code) => {
      if (code === 0) resolve(stdout);
      else reject(new Error(`${command} exited ${code}: ${stderr.slice(-1200)}`));
    });
  });
}

async function imageDimensions(path) {
  const output = await runCapture("ffprobe", [
    "-v", "error", "-select_streams", "v:0",
    "-show_entries", "stream=width,height", "-of", "csv=p=0", path,
  ]);
  const [width, height] = output.trim().split(",").map(Number);
  if (!width || !height) throw new Error(`Unable to read dimensions: ${path}`);
  return { width, height };
}

async function sha256(path) {
  return createHash("sha256").update(await readFile(path)).digest("hex");
}

async function processOne(selection) {
  const product = productsBySourceId.get(String(selection.sourceId));
  if (!product) throw new Error(`Unknown product ${selection.sourceId}`);
  if (!selection.selected?.sourcePath) throw new Error(`No selected image ${selection.sourceId}`);

  const sourcePath = join(sourceRoot, selection.selected.sourcePath);
  const relativeOutput = `assets/images/products/${product.category}/${product.slug}/main.avif`;
  const outputPath = join(root, relativeOutput);
  await mkdir(dirname(outputPath), { recursive: true });

  const legacyBoxes = (selection.selected.legacyBoxes || []).filter((box) => legacy.test(box.text || ""));
  const dimensions = legacyBoxes.length ? await imageDimensions(sourcePath) : null;
  const brandFilters = legacyBoxes.map((box) => {
    const paddingX = 0.012;
    const paddingY = 0.012;
    const x = Math.max(0, box.x - paddingX);
    const y = Math.max(0, 1 - box.y - box.height - paddingY);
    const width = Math.min(1 - x, box.width + paddingX * 2);
    const height = Math.min(1 - y, box.height + paddingY * 2);
    const pixelX = Math.max(1, Math.floor(x * dimensions.width));
    const pixelY = Math.max(1, Math.floor(y * dimensions.height));
    const pixelWidth = Math.max(1, Math.min(
      dimensions.width - pixelX - 1,
      Math.ceil(width * dimensions.width),
    ));
    const pixelHeight = Math.max(1, Math.min(
      dimensions.height - pixelY - 1,
      Math.ceil(height * dimensions.height),
    ));
    return `delogo=x=${pixelX}:y=${pixelY}:w=${pixelWidth}:h=${pixelHeight}`;
  });
  const filter = [
    ...brandFilters,
    "scale=896:896:force_original_aspect_ratio=decrease",
    "pad=896:896:(ow-iw)/2:(oh-ih)/2:color=white",
  ].join(",");
  await run("ffmpeg", [
    "-hide_banner", "-loglevel", "error", "-y", "-i", sourcePath,
    "-vf", filter,
    "-frames:v", "1", "-c:v", "libsvtav1", "-crf", "34", "-preset", "8",
    "-pix_fmt", "yuv420p", outputPath,
  ]);

  product.media.main = relativeOutput;
  product.media.list = relativeOutput;
  product.media.thumbnail = relativeOutput;
  product.media.gallery = [relativeOutput];
  product.source.mediaStatus = brandFilters.length
    ? "approved-old-brand-mark-removed"
    : "approved-product-specific-gallery-image";
  product.source.selectedGalleryIndex = selection.selected.index;
  product.source.mediaCrop = "none";
  product.source.mediaEdit = brandFilters.length ? "old brand mark area interpolated" : "none";
  product.source.mediaSha256 = await sha256(outputPath);

  return {
    sourceId: product.source.sourceId,
    product: product.title.en,
    model: product.model,
    publicFile: relativeOutput,
    sourceProductUrl: product.source.url,
    sourceMediaUrl: selection.selected.url,
    selectedGalleryIndex: selection.selected.index,
    edit: product.source.mediaEdit,
    outputBytes: (await stat(outputPath)).size,
    sha256: product.source.mediaSha256,
  };
}

const results = new Array(selections.length);
const failures = [];
let cursor = 0;
const workers = Array.from({ length: 6 }, async () => {
  while (true) {
    const index = cursor++;
    if (index >= selections.length) return;
    try {
      results[index] = await processOne(selections[index]);
    } catch (error) {
      failures.push({ sourceId: selections[index].sourceId, error: error.message });
    }
    if ((index + 1) % 50 === 0) console.log(`${index + 1}/${selections.length}`);
  }
});
await Promise.all(workers);

await writeFile(productsPath, `${JSON.stringify(products, null, 2)}\n`);
await writeFile(join(root, "data", "media-review.json"), `${JSON.stringify({
  generatedAt: new Date().toISOString(),
  products: results.filter(Boolean),
  failures,
}, null, 2)}\n`);

const rows = [
  "# Media Source Manifest",
  "",
  `Reviewed: ${new Date().toISOString()}`,
  "",
  `- Product-specific local images: ${results.filter(Boolean).length}`,
  `- Old seller brand areas excluded: ${results.filter((item) => item?.edit !== "none").length}`,
  `- Failed media: ${failures.length}`,
  "- Source: the public Alibaba seller listings supplied by the user.",
  "- Processing: selected gallery frame, optional old-brand-area interpolation, proportional resize, white canvas, AVIF.",
  "- No third-party supplier media, generated product imagery, or hotlinked media is used.",
  "",
  "| Public file | Product | Model | Source ID | Gallery image | Edit | Bytes | Source |",
  "|---|---|---|---|---:|---|---:|---|",
  ...results.filter(Boolean).map((item) =>
    `| ${item.publicFile} | ${item.product.replaceAll("|", "\\|")} | ${item.model || "—"} | ${item.sourceId} | ${item.selectedGalleryIndex + 1} | ${item.edit} | ${item.outputBytes} | [product](${item.sourceProductUrl}) |`,
  ),
  "",
];
if (failures.length) rows.push("## Failures", "", ...failures.map((item) => `- ${item.sourceId}: ${item.error}`), "");
await writeFile(join(root, "docs", "media-source-manifest.md"), rows.join("\n"));

console.log(JSON.stringify({ processed: results.filter(Boolean).length, failures: failures.length }, null, 2));
if (failures.length) process.exitCode = 1;
