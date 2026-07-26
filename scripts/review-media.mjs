import { mkdir, readFile, rm, writeFile } from "node:fs/promises";
import { join } from "node:path";
import { csvEscape } from "./catalog-utils.mjs";

const root = process.cwd();
const productsPath = join(root, "data", "products.json");
const categories = JSON.parse(await readFile(join(root, "data", "categories.json"), "utf8"));
const products = JSON.parse(await readFile(productsPath, "utf8"));
const approvedIndices = new Set([
  9, 10, 11, 12, 13, 14, 15,
  17, 18, 19, 20, 22, 23, 24, 27,
  36, 37, 55, 56,
  79, 80, 81, 82, 83, 84, 85, 86, 87, 88,
  99, 100, 101, 102, 103,
  121, 123, 124, 125, 126, 127, 128, 129,
  153, 163, 295, 297,
]);
const categoryMap = new Map(categories.map((category) => [category.slug, category]));
const placeholderRoot = join(root, "assets", "images", "products", "placeholders");
await mkdir(placeholderRoot, { recursive: true });

for (const category of categories) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="896" height="896" viewBox="0 0 896 896" role="img" aria-labelledby="title desc">
  <title id="title">Product image pending</title>
  <desc id="desc">Contact Apex Hardware for original product media.</desc>
  <rect width="896" height="896" fill="#f5f5f7"/>
  <circle cx="448" cy="354" r="92" fill="none" stroke="#c7c7cc" stroke-width="3"/>
  <path d="M404 354h88M448 310v88" stroke="#86868b" stroke-width="5" stroke-linecap="round"/>
  <text x="448" y="520" text-anchor="middle" font-family="-apple-system,BlinkMacSystemFont,Arial,sans-serif" font-size="30" font-weight="650" fill="#1d1d1f">Product image pending</text>
  <text x="448" y="566" text-anchor="middle" font-family="-apple-system,BlinkMacSystemFont,Arial,sans-serif" font-size="19" fill="#6e6e73">${category.en.replaceAll("&", "&amp;")}</text>
  <text x="448" y="608" text-anchor="middle" font-family="-apple-system,BlinkMacSystemFont,Arial,sans-serif" font-size="17" fill="#86868b">Contact us for original media</text>
</svg>`;
  await writeFile(join(placeholderRoot, `${category.slug}.svg`), svg);
}

const approved = [];
const rejected = [];
for (const [index, product] of products.entries()) {
  if (approvedIndices.has(index)) {
    product.source.mediaStatus = "approved-clean-listing-image";
    approved.push(product);
    continue;
  }
  const generatedPath = product.media.main;
  if (generatedPath.startsWith("assets/images/products/") && generatedPath.endsWith(".avif")) {
    await rm(join(root, generatedPath), { force: true });
  }
  const placeholder = `assets/images/products/placeholders/${product.category}.svg`;
  product.media.main = placeholder;
  product.media.list = placeholder;
  product.media.thumbnail = placeholder;
  product.source.mediaStatus = "not-used-legacy-branding-or-baked-copy";
  rejected.push(product);
}
await writeFile(productsPath, `${JSON.stringify(products, null, 2)}\n`);

const previewPath = join(root, "data", "all-products-preview.json");
const preview = JSON.parse(await readFile(previewPath, "utf8"));
const productBySource = new Map(products.map((product) => [product.source.sourceId, product]));
preview.forEach((item) => {
  const product = productBySource.get(item.sourceId);
  item.mainImage = product.media.main;
  item.notes = `${product.notes} Media status: ${product.source.mediaStatus}.`;
});
await writeFile(previewPath, `${JSON.stringify(preview, null, 2)}\n`);
const csvHeaders = [
  "sourceId", "sourceUrl", "sourceTitle", "proposedSlug", "proposedCategory",
  "proposedSubcategory", "proposedProductFamily", "model", "specifications",
  "mainImage", "duplicateCandidate", "dataConfidence", "missingFields", "notes",
];
const csv = [
  csvHeaders.map(csvEscape).join(","),
  ...preview.map((item) => csvHeaders.map((key) => csvEscape(item[key])).join(",")),
].join("\n");
await writeFile(join(root, "data", "all-products-preview.csv"), `${csv}\n`);

const rows = [
  "# Media Source Manifest",
  "",
  `Reviewed: ${new Date().toISOString()}`,
  "",
  `- Clean localized product images used: ${approved.length}`,
  `- Source images not published: ${rejected.length}`,
  "- Product videos used: 0",
  "- Copyright status of clean images: authorized (user-supplied company store)",
  "- Unused images remain in the staging directory until deployment verification.",
  "",
  "Images were rejected when the visual review found a KINDERS/JIANDASI legacy mark, orange promotional overlay, baked marketing text, specification panel, or another composition unsuitable for the Apex site. Rejected images are not published; affected pages use a clearly labeled neutral placeholder.",
  "",
  "| Public file | Product | Source ID | Processing | Copyright | Uploaded | Verified | Source |",
  "|---|---|---|---|---|---|---|---|",
  ...approved.map((product) => `| ${product.media.main} | ${product.title.en} | ${product.source.sourceId} | Resize, white canvas, AVIF; no structural edit | authorized | no | no | [product](${product.source.url}) |`),
  "",
  "## Unused source media",
  "",
  "| Source ID | Product | Reason | Source |",
  "|---|---|---|---|",
  ...rejected.map((product) => `| ${product.source.sourceId} | ${product.title.en} | Legacy branding, promotional overlay, or baked copy; original clean file required | [product](${product.source.url}) |`),
  "",
];
await writeFile(join(root, "docs", "media-source-manifest.md"), rows.join("\n"));

console.log(JSON.stringify({ approved: approved.length, rejected: rejected.length, placeholders: categories.length }, null, 2));
