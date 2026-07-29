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

const fenceReviews = [
  ["1601808760114", "AGP005"],
  ["1601808629879", "AGP004"],
  ["1601808702518", "AGP003"],
  ["1601808720367", "AGP002"],
].map(([sourceId, model]) => productBySourceId(sourceId, model));
for (const product of fenceReviews) {
  product.notes = `The source title, Fence Accessories type and six-image gallery confirm ${product.model} as an outdoor powder-coated aluminum fence. The source width specification is truncated after 'common width less than 1200', so no structured width was added.`;
}

const gateAgp001 = productBySourceId("1601808598919", "AGP001");
gateAgp001.category = "aluminum-fencing";
gateAgp001.family = "Aluminum Fencing & Garden Gates";
gateAgp001.title.en = "Aluminum Garden Gate";
gateAgp001.title.zh = "铝制花园门";
gateAgp001.specifications.finish = "Powder coated";
gateAgp001.notes = "The source title identifies AGP001 as an aluminum garden gate with hinges and lock hardware, while the Type field and gallery place it within the fencing system. It was moved from architectural hinges to Aluminum Fencing & Garden Gates. The truncated width text was not imported.";

const honeycombReviews = [
  ["1601807373514", "AHP010"],
  ["1601807440137", "AHP009"],
  ["1601807413330", "AHP008"],
  ["1601807310889", "AHP007"],
  ["1601807390449", "AHP006"],
].map(([sourceId, model]) => productBySourceId(sourceId, model));

for (const product of honeycombReviews) {
  product.notes = `The source title, detail fields and six-image gallery confirm ${product.model} as a 1220 × 2440 mm aluminum honeycomb panel with customizable thickness and PVC-film or custom finish. No net weight was stated.`;
}

for (const product of honeycombReviews.filter((candidate) => ["AHP008", "AHP007"].includes(candidate.model))) {
  product.title.en = "Aluminum Honeycomb Panel";
  product.title.zh = "铝蜂窝板";
}

const reviewed = [...fenceReviews, gateAgp001, ...honeycombReviews];
for (const product of reviewed) updateMissingFields(product);

await writeFile(productsPath, `${JSON.stringify(products, null, 2)}\n`);

console.log(JSON.stringify({
  reviewed: reviewed.length,
  structuredFieldsAdded: 1,
  titleCorrections: 3,
  categoryCorrections: 1,
  imagesReplaced: 0,
  duplicateCandidates: products.filter((product) => product.duplicateCandidate).length,
}, null, 2));
