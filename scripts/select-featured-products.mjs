import { readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";

const root = process.cwd();
const products = JSON.parse(await readFile(join(root, "data", "products.json"), "utf8"));

const quotas = new Map([
  ["floor-springs", 24],
  ["door-closers", 8],
  ["panic-exit-devices", 2],
  ["glass-door-hardware", 4],
  ["pull-handles", 2],
]);

function score(product) {
  const specs = product.specifications || {};
  const primary = ["capacity", "doorWidth", "dimensions", "netWeight", "material", "finish", "openingAngle", "glassThickness"];
  const verified = primary.filter((key) => specs[key] !== "" && specs[key] !== null && specs[key] !== undefined).length;
  const other = Object.values(specs.otherVerifiedFields || {}).filter(Boolean).length;
  const imageBonus = product.media?.main?.endsWith(".avif") ? 2 : 0;
  return verified * 5 + Math.min(other, 8) + imageBonus + (product.model ? 4 : 0);
}

const selected = [];
for (const [category, quota] of quotas) {
  const bestByModel = new Map();
  products.filter((product) => product.category === category).forEach((product) => {
    const modelKey = String(product.model || product.slug).trim().toUpperCase();
    const current = bestByModel.get(modelKey);
    if (!current || score(product) > score(current)) bestByModel.set(modelKey, product);
  });
  const chosen = [...bestByModel.values()]
    .sort((a, b) => score(b) - score(a) || String(a.model).localeCompare(String(b.model)))
    .slice(0, quota);
  if (chosen.length !== quota) throw new Error(`${category}: expected ${quota} unique models, found ${chosen.length}`);
  selected.push(...chosen.map((product, index) => ({
    id: product.id,
    slug: product.slug,
    category: product.category,
    model: product.model,
    rankInCategory: index + 1,
    evidenceScore: score(product),
  })));
}

if (selected.length !== 40) throw new Error(`Expected 40 featured products, found ${selected.length}`);

const output = {
  generatedFrom: "data/products.json",
  methodology: "One strongest listing per model, ranked by completeness of existing verified specification fields and local product imagery.",
  quotas: Object.fromEntries(quotas),
  products: selected,
};
await writeFile(join(root, "data", "featured-products.json"), `${JSON.stringify(output, null, 2)}\n`);
console.log(JSON.stringify({ featuredProducts: selected.length, quotas: output.quotas }, null, 2));
