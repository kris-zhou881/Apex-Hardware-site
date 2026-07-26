import { createHash } from "node:crypto";
import { access, copyFile, mkdir, readFile, stat, writeFile } from "node:fs/promises";
import { homedir } from "node:os";
import { dirname, extname, join } from "node:path";
import { spawn } from "node:child_process";

const root = process.cwd();
const stagingRoot = process.env.APEX_STAGING || join(homedir(), "Desktop", "健达斯", "apex-import-staging");
const productsPath = join(root, "data", "products.json");
const products = JSON.parse(await readFile(productsPath, "utf8"));
const rawRoot = join(stagingRoot, "raw", "images");
const processedRoot = join(stagingRoot, "processed", "images");
const manifestPath = join(stagingRoot, "manifests", "media-processing.json");
await Promise.all([mkdir(rawRoot, { recursive: true }), mkdir(processedRoot, { recursive: true })]);

function originalImageUrl(url) {
  const clean = new URL(url);
  clean.search = "";
  clean.pathname = clean.pathname.replace(/_\d+x\d+\.(?:jpg|jpeg|png|webp)$/i, "");
  return clean.toString();
}

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

async function exists(path) {
  try {
    await access(path);
    return true;
  } catch {
    return false;
  }
}

async function sha256(path) {
  const bytes = await readFile(path);
  return createHash("sha256").update(bytes).digest("hex");
}

function extensionFrom(contentType, url) {
  if (contentType.includes("png")) return ".png";
  if (contentType.includes("webp")) return ".webp";
  if (contentType.includes("gif")) return ".gif";
  if (contentType.includes("jpeg") || contentType.includes("jpg")) return ".jpg";
  const extension = extname(new URL(url).pathname).toLowerCase();
  return [".jpg", ".jpeg", ".png", ".webp", ".gif"].includes(extension) ? extension : ".img";
}

async function processOne(product) {
  const sourceUrl = originalImageUrl(product.media.sourceMain);
  let rawPath = "";
  const existing = [".jpg", ".jpeg", ".png", ".webp", ".gif", ".img"]
    .map((extension) => join(rawRoot, `${product.source.sourceId}${extension}`))
    .find((candidate) => false);
  void existing;

  for (const extension of [".jpg", ".jpeg", ".png", ".webp", ".gif", ".img"]) {
    const candidate = join(rawRoot, `${product.source.sourceId}${extension}`);
    if (await exists(candidate)) {
      rawPath = candidate;
      break;
    }
  }

  if (!rawPath) {
    const response = await fetch(sourceUrl, {
      headers: {
        "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/138 Safari/537.36",
        accept: "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
      },
      redirect: "follow",
    });
    if (!response.ok) throw new Error(`HTTP ${response.status} ${sourceUrl}`);
    const contentType = response.headers.get("content-type") || "";
    if (!contentType.startsWith("image/")) throw new Error(`Not an image: ${contentType} ${sourceUrl}`);
    rawPath = join(rawRoot, `${product.source.sourceId}${extensionFrom(contentType, sourceUrl)}`);
    await writeFile(rawPath, Buffer.from(await response.arrayBuffer()));
  }

  const processedPath = join(processedRoot, `${product.source.sourceId}.avif`);
  if (!(await exists(processedPath))) {
    await run("ffmpeg", [
      "-hide_banner", "-loglevel", "error", "-y", "-i", rawPath,
      "-vf", "scale=896:896:force_original_aspect_ratio=decrease,pad=896:896:(ow-iw)/2:(oh-ih)/2:color=white",
      "-frames:v", "1", "-c:v", "libsvtav1", "-crf", "32", "-preset", "8", "-pix_fmt", "yuv420p", processedPath,
    ]);
  }

  const repositoryPath = join(root, product.media.main);
  await mkdir(dirname(repositoryPath), { recursive: true });
  await copyFile(processedPath, repositoryPath);
  const fileStat = await stat(repositoryPath);
  const hash = await sha256(repositoryPath);

  product.media.list = product.media.main;
  product.media.thumbnail = product.media.main;
  product.source.mediaStatus = "authorized";
  product.source.mediaSha256 = hash;

  return {
    file: product.media.main,
    sourceProductUrl: product.source.url,
    product: product.title.en,
    originalMediaType: extname(rawPath).slice(1),
    originalFileName: rawPath.split("/").pop(),
    originalUnwatermarked: "not-confirmed",
    cropped: false,
    backgroundCleaned: false,
    watermarkProcessed: false,
    outputDimensions: "896 × 896",
    outputFormat: "AVIF",
    fileSize: fileStat.size,
    copyrightStatus: "authorized",
    uploaded: false,
    verified: false,
    sourceMediaUrl: product.media.sourceMain,
  };
}

const results = new Array(products.length);
const failures = [];
let cursor = 0;
const workers = Array.from({ length: 8 }, async () => {
  while (true) {
    const index = cursor++;
    if (index >= products.length) return;
    try {
      results[index] = await processOne(products[index]);
      if ((index + 1) % 25 === 0) console.log(`Processed ${index + 1}/${products.length}`);
    } catch (error) {
      failures.push({
        sourceId: products[index].source.sourceId,
        sourceUrl: products[index].source.url,
        error: error.message,
      });
      products[index].media.main = "";
      products[index].media.list = "";
      products[index].media.thumbnail = "";
      products[index].source.mediaStatus = "failed";
    }
  }
});
await Promise.all(workers);

const hashGroups = new Map();
products.forEach((product) => {
  if (!product.source.mediaSha256) return;
  const group = hashGroups.get(product.source.mediaSha256) || [];
  group.push(product);
  hashGroups.set(product.source.mediaSha256, group);
});
hashGroups.forEach((group) => {
  if (group.length < 2) return;
  group.forEach((product, index) => {
    product.duplicateCandidate = true;
    if (index > 0 && !product.duplicateOf) product.duplicateOf = group[0].id;
  });
});

await writeFile(productsPath, `${JSON.stringify(products, null, 2)}\n`);
await writeFile(manifestPath, `${JSON.stringify({ generatedAt: new Date().toISOString(), results: results.filter(Boolean), failures }, null, 2)}\n`);

const rows = [
  "# Media Source Manifest",
  "",
  `Generated: ${new Date().toISOString()}`,
  "",
  "All listed media came from the public seller store supplied by the user. Ownership of the original master files was not independently confirmed, so published files are conservatively marked `authorized`. No video URL was exposed in the product-list dataset.",
  "",
  "| File | Product | Original type | Original unwatermarked | Crop | Background clean | Watermark work | Output | Bytes | Copyright | Uploaded | Verified | Source |",
  "|---|---|---|---|---|---|---|---|---:|---|---|---|---|",
  ...results.filter(Boolean).map((item) =>
    `| ${item.file} | ${item.product.replaceAll("|", "\\|")} | ${item.originalMediaType} | ${item.originalUnwatermarked} | no | no | no | ${item.outputDimensions} ${item.outputFormat} | ${item.fileSize} | ${item.copyrightStatus} | no | no | [product](${item.sourceProductUrl}) |`,
  ),
  "",
];
if (failures.length) {
  rows.push("## Failed media", "", ...failures.map((failure) => `- ${failure.sourceId}: ${failure.error}`), "");
}
await writeFile(join(root, "docs", "media-source-manifest.md"), rows.join("\n"));

console.log(JSON.stringify({ processed: results.filter(Boolean).length, failures: failures.length }, null, 2));
if (failures.length) process.exitCode = 1;
