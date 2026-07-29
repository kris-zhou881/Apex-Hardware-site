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

function setGalleryOperatingData(product, {
  doorWidth,
  closingForce,
  variants = "90° / 125°; hold-open or non-hold-open",
}) {
  product.specifications.doorWidth = doorWidth;
  if (closingForce) product.specifications.otherVerifiedFields["Closing force"] = closingForce;
  if (variants) product.specifications.otherVerifiedFields["Opening / hold-open variants"] = variants;
}

const springKd84Conflict = productBySourceId("1601677587332", "KD-84");
springKd84Conflict.specifications.capacity = null;
springKd84Conflict.title.en = "Hydraulic Floor Spring";
springKd84Conflict.title.zh = "液压地弹簧";
setGalleryOperatingData(springKd84Conflict, {
  doorWidth: "≤ 1300 mm",
  closingForce: "38 Nm",
});
springKd84Conflict.notes = "The source title states 150 kg, while its source gallery specification graphic states 130 kg. Because the same page conflicts, the public maximum door weight and capacity-based title were cleared. The graphic explicitly confirms 1300 mm maximum gate width, 38 Nm and 90° / 125° variants.";

const springKd80A = productBySourceId("1601616381661", "KD-80");
const springKd80B = productBySourceId("1601484390473", "KD-80");
for (const product of [springKd80A, springKd80B]) {
  setGalleryOperatingData(product, {
    doorWidth: "≤ 1500 mm",
    closingForce: "",
  });
}
springKd80A.notes = "The source title and gallery graphic confirm 300 kg, 1500 mm maximum gate width and 180° maximum opening. The source graphic also lists 90° / 125° hold-open or non-hold-open variants. The same model appears on another listing, so both remain flagged for factory confirmation.";
springKd80B.notes = "The source title and gallery graphic confirm 300 kg, 1500 mm maximum gate width and 180° maximum opening. The source graphic also lists 90° / 125° hold-open or non-hold-open variants. The same model appears on another listing, so both remain flagged for factory confirmation.";

const springKd75 = productBySourceId("1601459464728", "KD-75");
setGalleryOperatingData(springKd75, {
  doorWidth: "≤ 1300 mm",
  closingForce: "38 Nm",
  variants: "90° hold-open or non-hold-open; maximum opening 175°",
});
springKd75.notes = "The source title and gallery graphic confirm 150 kg. The gallery graphic also states 1300 mm maximum gate width, 38 Nm closing force, a 175° maximum opening and 90° hold-open or non-hold-open variants.";

const springKd65A = productBySourceId("1601671238402", "KD-65");
const springKd65B = productBySourceId("1601616322650", "KD-65");
const springKd65Bst = productBySourceId("1600271828976", "KD-65");
for (const product of [springKd65A, springKd65B, springKd65Bst]) {
  setGalleryOperatingData(product, {
    doorWidth: "≤ 1200 mm",
    closingForce: "38 Nm",
  });
}
springKd65Bst.specifications.capacity = 120;
springKd65A.notes = "The source title and gallery graphic confirm 120 kg. The gallery graphic also states 1200 mm maximum gate width, 38 Nm and 90° / 125° hold-open or non-hold-open variants. Three listings use model KD-65 and remain flagged for factory confirmation.";
springKd65B.notes = "The source title and gallery graphic confirm 120 kg, 1200 mm maximum gate width, 38 Nm and 90° / 125° hold-open or non-hold-open variants. Three listings use model KD-65 and remain flagged for factory confirmation.";
springKd65Bst.notes = "The source title states a 120 kg BST 65 version, while the captured listing model field is KD-65. The detailed field and gallery graphic confirm 1200 mm maximum gate width; the graphic also states 38 Nm and 90° / 125° variants. The explicit listing model is retained pending factory confirmation.";

const handleKd7021 = productBySourceId("1601466804194", "KD-7021");
handleKd7021.specifications.finish = "Satin, polished, black, gold";
handleKd7021.notes = "The source Color field and gallery graphic explicitly list satin, polished, black and gold options. The existing 600 × 562 mm dimensions, 201/304 material and 38 mm tube size were retained.";

const springKd310a = productBySourceId("1601680539308", "KD-310A");
springKd310a.specifications.doorWidth = "≤ 1100 mm";
springKd310a.specifications.dimensions = "216 × 90 × 35 mm";
springKd310a.specifications.holdOpen = true;
springKd310a.specifications.otherVerifiedFields["Hold-open angle"] = "90°";
springKd310a.notes = "The source gallery specification graphic explicitly states 110 kg, 1100 mm maximum gate width, 216 × 90 × 35 mm body dimensions and hold-open at 90°. The existing 150° maximum opening value was retained.";

const springKd63 = productBySourceId("1601671170707", "KD-63");
springKd63.specifications.capacity = 95;
setGalleryOperatingData(springKd63, {
  doorWidth: "≤ 900 mm",
  closingForce: "38 Nm",
});
springKd63.specifications.otherVerifiedFields["Maximum gate size"] = "90 cm (width) × 200 cm (height)";
springKd63.notes = "The source title confirms 95 kg. The source gallery graphic states a 90 × 200 cm maximum gate size, 38 Nm and 90° / 125° hold-open or non-hold-open variants. Three listings use model KD-63 and remain flagged for factory confirmation.";

const springKd84Prior = productBySourceId("1601435107304", "KD-84");
for (const [index, product] of [springKd84Prior, springKd84Conflict].entries()) {
  product.duplicateCandidate = true;
  product.duplicateOf = index === 0 ? "" : springKd84Prior.id;
}
springKd84Prior.notes = "The source gallery graphic confirms 130 kg, 1300 mm maximum gate width, 38 Nm and 90° / 125° variants. Another KD-84 listing has an internal 150 kg versus 130 kg conflict, so both records remain flagged for factory confirmation.";

for (const group of [
  [springKd80A, springKd80B],
  [springKd65A, springKd65B, springKd65Bst],
]) {
  for (const [index, product] of group.entries()) {
    product.duplicateCandidate = true;
    product.duplicateOf = index === 0 ? "" : group[0].id;
  }
}

const springKd63Group = [
  productBySourceId("60763886206", "KD-63"),
  productBySourceId("1601453705558", "KD-63"),
  springKd63,
];
for (const [index, product] of springKd63Group.entries()) {
  product.duplicateCandidate = true;
  product.duplicateOf = index === 0 ? "" : springKd63Group[0].id;
}

const reviewed = [
  springKd84Conflict,
  springKd80A,
  springKd80B,
  springKd75,
  springKd65A,
  handleKd7021,
  springKd310a,
  springKd65B,
  springKd65Bst,
  springKd63,
];
for (const product of new Set([...reviewed, springKd84Prior, ...springKd63Group])) {
  updateMissingFields(product);
}

await writeFile(productsPath, `${JSON.stringify(products, null, 2)}\n`);

console.log(JSON.stringify({
  reviewed: reviewed.length,
  structuredFieldsAdded: 14,
  conflictingFieldsCleared: 1,
  titleCorrections: 1,
  imagesReplaced: 0,
  duplicateCandidates: products.filter((product) => product.duplicateCandidate).length,
}, null, 2));
