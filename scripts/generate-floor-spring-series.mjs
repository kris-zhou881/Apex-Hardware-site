import { readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";

const root = process.cwd();
const products = JSON.parse(await readFile(join(root, "data", "products.json"), "utf8"));
const supportedCapacities = new Set([90, 95, 120, 160]);

function hasValue(value) {
  return value !== "" && value !== null && value !== undefined && value !== false;
}

function recordScore(product) {
  const specifications = product.specifications || {};
  const structured = [
    "capacity",
    "doorWidth",
    "dimensions",
    "material",
    "finish",
    "openingAngle",
    "glassThickness",
  ].filter((key) => hasValue(specifications[key])).length;
  const additional = Object.keys(specifications.otherVerifiedFields || {}).length;
  return structured * 100 + additional;
}

const representatives = new Map();
for (const product of products) {
  const capacity = product.specifications?.capacity;
  const model = String(product.model || "").trim();
  if (
    product.category !== "floor-springs" ||
    !supportedCapacities.has(capacity) ||
    !model ||
    !product.media?.main
  ) {
    continue;
  }
  const key = `${capacity}:${model.toUpperCase()}`;
  const current = representatives.get(key);
  if (!current || recordScore(product) > recordScore(current)) {
    representatives.set(key, product);
  }
}

const variants = [...representatives.values()]
  .sort((a, b) => {
    const capacityDifference = a.specifications.capacity - b.specifications.capacity;
    return capacityDifference || a.model.localeCompare(b.model, "en", { numeric: true });
  })
  .map((product) => {
    const specifications = product.specifications;
    return {
      key: `catalog-${product.source.sourceId}`,
      model: product.model,
      capacity: specifications.capacity,
      weight: `${specifications.capacity} kg`,
      width: specifications.doorWidth || "",
      angle: specifications.openingAngle || "",
      size: specifications.dimensions || "",
      material: specifications.material || "",
      use: product.applications?.filter(Boolean).join(", ") || "",
      position: product.title.en,
      image: `../../${product.media.main}`,
      href: `${product.slug}.html`,
      sourceId: product.source.sourceId,
    };
  });

const output = `window.APEX_FLOOR_SPRING_MODELS = ${JSON.stringify(variants, null, 2)};\n`;
await writeFile(join(root, "assets", "floor-spring-models.js"), output);
console.log(JSON.stringify({ floorSpringModelVariants: variants.length }, null, 2));
