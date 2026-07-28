import { access, readFile } from "node:fs/promises";
import { join } from "node:path";

const root = process.cwd();
const products = JSON.parse(await readFile(join(root, "data", "products.json"), "utf8"));
const categories = JSON.parse(await readFile(join(root, "data", "categories.json"), "utf8"));
const allowedConfidence = new Set(["verified", "partially-verified", "unclear"]);
const errors = [];

function duplicates(values) {
  const seen = new Set();
  const repeated = new Set();
  values.forEach((value) => {
    if (seen.has(value)) repeated.add(value);
    seen.add(value);
  });
  return [...repeated];
}

const duplicateSlugs = duplicates(products.map((product) => product.slug));
const duplicateIds = duplicates(products.map((product) => product.id));
const duplicateSourceIds = duplicates(products.map((product) => product.source.sourceId));
if (duplicateSlugs.length) errors.push(`Duplicate slugs: ${duplicateSlugs.join(", ")}`);
if (duplicateIds.length) errors.push(`Duplicate IDs: ${duplicateIds.join(", ")}`);
if (duplicateSourceIds.length) errors.push(`Duplicate source IDs: ${duplicateSourceIds.join(", ")}`);

const categorySlugs = new Set(categories.map((category) => category.slug));
for (const product of products) {
  if (!product.id || !product.slug || !product.title?.en || !product.source?.sourceId || !product.source?.url) {
    errors.push(`Missing required field: ${product.id || product.slug || "unknown product"}`);
  }
  if (!categorySlugs.has(product.category)) errors.push(`Unknown category ${product.category}: ${product.id}`);
  if (!allowedConfidence.has(product.source.dataConfidence)) errors.push(`Invalid confidence: ${product.id}`);
  if (!product.source.detailVerifiedAt) errors.push(`Unverified detail page: ${product.id}`);
  if (!Array.isArray(product.media.sourceGallery) || product.media.sourceGallery.length === 0) {
    errors.push(`No source gallery: ${product.id}`);
  }
  if (!product.specifications?.otherVerifiedFields || Object.keys(product.specifications.otherVerifiedFields).length === 0) {
    errors.push(`No verified attributes: ${product.id}`);
  }
  const publicParameters = JSON.stringify({
    model: product.model,
    specifications: product.specifications,
  });
  if (/(?:KINDERS|JIANDASI|FANSALA)/i.test(publicParameters)) {
    errors.push(`Legacy brand in public parameters: ${product.id}`);
  }
  if (product.media.main) {
    if (product.media.main.includes("/placeholders/")) errors.push(`Placeholder image: ${product.id}`);
    try {
      await access(join(root, product.media.main));
    } catch {
      errors.push(`Missing image: ${product.media.main}`);
    }
  } else {
    errors.push(`No main image: ${product.id}`);
  }
  const page = join(root, "products", product.category, `${product.slug}.html`);
  try {
    await access(page);
  } catch {
    errors.push(`Missing detail page: ${page}`);
  }
}

const summary = {
  products: products.length,
  categories: categories.length,
  duplicateCandidates: products.filter((product) => product.duplicateCandidate).length,
  verified: products.filter((product) => product.source.dataConfidence === "verified").length,
  partiallyVerified: products.filter((product) => product.source.dataConfidence === "partially-verified").length,
  unclear: products.filter((product) => product.source.dataConfidence === "unclear").length,
  errors: errors.length,
};
console.log(JSON.stringify(summary, null, 2));
if (errors.length) {
  console.error(errors.slice(0, 100).join("\n"));
  process.exitCode = 1;
}
