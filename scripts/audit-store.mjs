import { access, readFile, writeFile } from "node:fs/promises";
import { homedir } from "node:os";
import { join } from "node:path";

const stagingRoot = process.env.APEX_STAGING || join(homedir(), "Desktop", "健达斯", "apex-import-staging");
const productManifest = join(stagingRoot, "manifests", "store-products-raw.json");
const categoryManifest = join(stagingRoot, "manifests", "store-categories-raw.json");

await Promise.all([access(productManifest), access(categoryManifest)]);
const products = JSON.parse(await readFile(productManifest, "utf8"));
const categories = JSON.parse(await readFile(categoryManifest, "utf8"));

const ids = new Set();
const urls = new Set();
const duplicateIds = [];
const duplicateUrls = [];
products.products.forEach((product) => {
  if (ids.has(product.sourceId)) duplicateIds.push(product.sourceId);
  if (urls.has(product.url)) duplicateUrls.push(product.url);
  ids.add(product.sourceId);
  urls.add(product.url);
});

const report = {
  checkedAt: new Date().toISOString(),
  effectivePages: products.effectivePages,
  emptyPageVerified: products.emptyPageVerified,
  products: products.products.length,
  uniqueIds: ids.size,
  uniqueUrls: urls.size,
  topLevelCategories: categories.topLevel.length,
  secondLevelCategories: categories.topLevel.reduce((sum, category) => sum + (category.children?.length || 0), 0),
  thirdLevelCategories: 0,
  duplicateIds,
  duplicateUrls,
};

await writeFile(join(stagingRoot, "logs", "store-audit.json"), JSON.stringify(report, null, 2));
console.log(JSON.stringify(report, null, 2));

