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

const hingeJds102 = productBySourceId("1601006950137", "JDS-102");
hingeJds102.notes = "Batch 2 review confirmed the source-specific stainless-steel wall-to-glass hinge image, 90° function, 45 × 90 mm dimensions and 8–12 mm glass range. Gross package weight is not relabeled as net weight.";

const hingeJds112 = productBySourceId("1601005946624", "JDS-112");
hingeJds112.title.en = "Stainless steel Shower Door Hinge · 90°";
hingeJds112.title.zh = "不锈钢淋浴门铰链 · 90°";
hingeJds112.notes = "The captured detailed fields identify a 90° glass-to-glass hinge for 8–12 mm glass. The separate 5 mm value describes the hinge body thickness and is not used as glass thickness. Gross package weight is not relabeled as net weight.";

const fittingJds102 = productBySourceId("1601006206755", "JDS-102");
fittingJds102.title.en = "Stainless steel Shower Door Hinge · 90°";
fittingJds102.title.zh = "不锈钢淋浴门铰链 · 90°";
fittingJds102.notes = "The source Product name, Type, function and product image identify this item as a 90° stainless-steel shower door hinge rather than a generic fitting. The 5 mm value describes hinge body thickness; the captured glass range remains 8–12 mm.";

const hingeJds109 = productBySourceId("1600973404398", "JDS-109");
hingeJds109.notes = "Batch 2 review confirmed the source-specific SS304 hinge image, 45 × 90 mm dimensions, matt-black finish and 180° glass-to-glass function. The listed 5 mm value is hinge body thickness; no numeric glass-thickness range is confirmed.";

const fittingKd640 = productBySourceId("1600966555256", "KD-640");
fittingKd640.notes = "Batch 2 review confirmed the source-specific double patch connector image and the existing 105 × 51 mm dimensions, aluminum/steel material, finish options and 8–12 mm glass range. Gross package weight is not relabeled as net weight.";

const hingeJds105 = productBySourceId("1601006928427", "JDS-105");
hingeJds105.notes = "Batch 2 review confirmed the source-specific 180° glass-to-glass hinge image and the existing dimensions, stainless-steel material, finish options and 8–12 mm glass range. Gross package weight is not relabeled as net weight.";

const fittingJds02 = productBySourceId("1600965637827", "JDS-02");
fittingJds02.notes = "Batch 2 review confirmed the source-specific stainless-steel patch-fitting image, finish options and 8–12 mm glass range. The listed 7.5/8.5 mm values describe fitting thickness and are not published as overall dimensions or glass thickness.";

const hingeKb135b = productBySourceId("1601867275243", "KB-135B");
hingeKb135b.notes = "Batch 2 review confirmed the source-specific adjustable stainless-steel hinge image and 180° function. The listed 5 mm value is hinge body thickness; gross package weight is not net weight, and unsupported fields remain blank.";

const zincJds102 = productBySourceId("1601002655399", "JDS-102");
zincJds102.notes = "Batch 2 review confirmed the source-specific zinc-alloy wall-to-glass hinge image, 90° function, 45 × 90 mm dimensions and 8–12 mm glass range. The 4/5 mm values describe hinge body variants, not glass thickness.";

const lockKd9007a = productBySourceId("1601838122744", "KD-9007A");
lockKd9007a.notes = "Batch 2 review confirmed the source-specific central glass-door-lock image, stainless-steel material, finish codes and 8–12 mm glass range. The 15 kg value is gross package weight and is not published as net product weight.";

const jds102Group = [hingeJds102, fittingJds102, zincJds102];
for (const [index, product] of jds102Group.entries()) {
  product.duplicateCandidate = true;
  product.duplicateOf = index === 0 ? "" : hingeJds102.id;
}

const reviewed = [
  hingeJds102,
  hingeJds112,
  fittingJds102,
  hingeJds109,
  fittingKd640,
  hingeJds105,
  fittingJds02,
  hingeKb135b,
  zincJds102,
  lockKd9007a,
];
for (const product of reviewed) updateMissingFields(product);

await writeFile(productsPath, `${JSON.stringify(products, null, 2)}\n`);

console.log(JSON.stringify({
  reviewed: reviewed.length,
  structuredFieldsAdded: 0,
  titlesCorrected: 2,
  imagesReplaced: 0,
  duplicateCandidates: products.filter((product) => product.duplicateCandidate).length,
}, null, 2));
