import { readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";

const root = process.cwd();
const productsPath = join(root, "data", "products.json");
const products = JSON.parse(await readFile(productsPath, "utf8"));
const requiredFields = [
  "capacity",
  "doorWidth",
  "dimensions",
  "netWeight",
  "material",
  "finish",
  "openingAngle",
  "holdOpen",
  "glassThickness",
];

function productBySourceId(sourceId, expectedModel) {
  const product = products.find((candidate) => candidate.source.sourceId === sourceId);
  if (!product) throw new Error(`Missing product ${sourceId}`);
  if (product.model !== expectedModel) {
    throw new Error(`Unexpected model for ${sourceId}: ${product.model}`);
  }
  return product;
}

function updateMissingFields(product) {
  product.missingFields = requiredFields.filter(
    (field) => product.specifications[field] === "" || product.specifications[field] === null,
  );
}

const honeycombReviews = [
  ["1601807378446", "AHP005"],
  ["1601807464005", "AHP004"],
  ["1601807316831", "AHP003"],
  ["1601807340676", "AHP002"],
  ["1601807292982", "AHP001"],
].map(([sourceId, model]) => productBySourceId(sourceId, model));
for (const product of honeycombReviews) {
  product.specifications.finish = "PVC film coated / customized";
  product.notes = `The source title, detail fields and six-image gallery confirm ${product.model} as a 1220 × 2440 mm aluminum honeycomb panel with customizable thickness and PVC-film or custom finish. No net weight was stated.`;
}

const columnReviews = [
  ["1601802428739", "ACC005", "Custom Aluminum Column Cladding", "定制铝制包柱板"],
  ["1601802545081", "ACC004", "Aluminum Column Cladding", "铝制包柱板"],
  ["1601802455588", "ACC003", "Aluminum Column Cladding", "铝制包柱板"],
  ["1601802530206", "ACC002", "Perforated Aluminum Column Cladding", "穿孔铝制包柱板"],
  ["1601802492378", "ACC001", "Aluminum Column Cladding", "铝制包柱板"],
].map(([sourceId, model, titleEn, titleZh]) => ({
  product: productBySourceId(sourceId, model),
  titleEn,
  titleZh,
}));

for (const { product, titleEn, titleZh } of columnReviews) {
  product.title.en = titleEn;
  product.title.zh = titleZh;
  product.notes = `The source title, curtain-wall Type field and six-image gallery confirm ${product.model} as aluminum column cladding. The listing states 1.5 / 2 / 3 / 4 / 5 / 6 mm available thickness and customized width, but no single overall product dimension, so dimensions remain blank.`;
}

const reviewed = [...honeycombReviews, ...columnReviews.map(({ product }) => product)];
for (const product of reviewed) updateMissingFields(product);

await writeFile(productsPath, `${JSON.stringify(products, null, 2)}\n`);

console.log(JSON.stringify({
  reviewed: reviewed.length,
  finishNormalizations: 5,
  titleCorrections: 5,
  categoryCorrections: 0,
  imagesReplaced: 0,
  duplicateCandidates: products.filter((product) => product.duplicateCandidate).length,
}, null, 2));
