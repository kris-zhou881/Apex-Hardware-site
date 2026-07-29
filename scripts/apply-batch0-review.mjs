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

function productBySourceId(sourceId) {
  const product = products.find((candidate) => candidate.source.sourceId === sourceId);
  if (!product) throw new Error(`Missing product ${sourceId}`);
  return product;
}

function confirmModel(sourceId, expectedModel) {
  const product = productBySourceId(sourceId);
  if (product.model !== expectedModel) {
    throw new Error(`Unexpected model for ${sourceId}: ${product.model}`);
  }
  return product;
}

function clearDuplicate(sourceId, expectedModel) {
  const product = confirmModel(sourceId, expectedModel);
  product.duplicateCandidate = false;
  product.duplicateOf = "";
}

function updateMissingFields(product) {
  product.missingFields = requiredFields.filter(
    (field) => product.specifications[field] === "" || product.specifications[field] === null,
  );
}

const modelMissing = confirmModel("11000024212760", "");
modelMissing.title.en = "Shower Door Pull Handle";
modelMissing.title.zh = "淋浴门拉手";
modelMissing.notes = "The source title and Type identify this item as a pull handle. The source page does not provide an explicit model, so the Alibaba product ID remains the public reference.";

clearDuplicate("1601807265553", "ASP010");
clearDuplicate("1601807290245", "ASP002");

for (const [sourceId, model] of [
  ["1601503864604", "KD-081"],
  ["1601504091154", "KD-063"],
]) {
  const product = confirmModel(sourceId, model);
  product.specifications.doorWidth = "600–900 mm";
  product.notes = "The source listing explicitly states a 600–900 mm door width. The distinct model and product image were retained as a separate product.";
  clearDuplicate(sourceId, model);
}

for (const sourceId of ["1601459906755", "1601469042069"]) {
  const product = confirmModel(sourceId, "KD-080");
  product.specifications.doorWidth = "600–900 mm";
  product.notes = "The source listing explicitly states a 600–900 mm door width. Two source listings use model KD-080 but show materially different product images, so both remain flagged for factory datasheet confirmation.";
}

for (const sourceId of ["1601458803544", "1601456179452", "1601460397171", "1601461949956"]) {
  const product = confirmModel(sourceId, "KD-62");
  product.notes = "Multiple source listings use model KD-62 but show different images and conflicting capacity or opening-angle values. No specifications were copied between listings; factory datasheet confirmation is required.";
}

for (const [sourceId, model] of [
  ["1601802400769", "ABC016"],
  ["1601802413683", "ABC014"],
]) {
  const product = confirmModel(sourceId, model);
  product.specifications.dimensions = "Width 50–300 mm; height 14 mm; length ≤ 6000 mm";
  product.notes = "The source listing explicitly states width 50–300 mm, height 14 mm and length ≤ 6000 mm. The distinct model and installation image were retained as a separate product.";
  clearDuplicate(sourceId, model);
}

for (const product of products) updateMissingFields(product);

await writeFile(productsPath, `${JSON.stringify(products, null, 2)}\n`);

console.log(JSON.stringify({
  reviewed: 13,
  remainingDuplicateCandidates: products.filter((product) => product.duplicateCandidate).length,
  missingExplicitModels: products.filter((product) => !product.model).length,
}, null, 2));
