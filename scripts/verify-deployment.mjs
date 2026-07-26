import { readFile } from "node:fs/promises";
import { join } from "node:path";

const base = (process.env.APEX_SITE_URL || "https://kris-zhou881.github.io/Apex-Hardware-site").replace(/\/$/, "");
const root = process.cwd();
const products = JSON.parse(await readFile(join(root, "data", "products.json"), "utf8"));
const categories = JSON.parse(await readFile(join(root, "data", "categories.json"), "utf8"));
const urls = [
  `${base}/`,
  `${base}/products/`,
  `${base}/products/floor-springs/`,
  ...categories.map((category) => `${base}/products/${category.slug}/${category.slug === "floor-springs" ? "catalog.html" : ""}`),
  ...products.map((product) => `${base}/products/${product.category}/${product.slug}.html`),
  ...products.map((product) => `${base}/${product.media.main}`),
  `${base}/assets/styles.css`,
  `${base}/assets/app.js`,
  `${base}/assets/catalog.js`,
  `${base}/data/products.json`,
];

const failures = [];
let cursor = 0;
let checked = 0;
const workers = Array.from({ length: 12 }, async () => {
  while (true) {
    const index = cursor++;
    if (index >= urls.length) return;
    const url = urls[index];
    try {
      const response = await fetch(url, { redirect: "follow", cache: "no-store" });
      if (!response.ok) failures.push({ url, status: response.status });
      else checked += 1;
    } catch (error) {
      failures.push({ url, error: error.message });
    }
  }
});
await Promise.all(workers);

console.log(JSON.stringify({ base, requested: urls.length, checked, failures: failures.length }, null, 2));
if (failures.length) {
  console.error(failures.slice(0, 100));
  process.exitCode = 1;
}

