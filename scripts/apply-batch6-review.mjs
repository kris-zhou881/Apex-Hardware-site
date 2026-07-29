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

const springKd632 = productBySourceId("1601458907419", "KD-63/2");
springKd632.category = "floor-springs";
springKd632.family = "Floor Springs";
springKd632.title.en = "Hydraulic Floor Spring";
springKd632.title.zh = "液压地弹簧";
springKd632.specifications.capacity = 150;
springKd632.specifications.doorWidth = "≤ 1500 mm";
springKd632.specifications.dimensions = "293 × 95 × 57 mm";
springKd632.specifications.otherVerifiedFields["Closing force"] = "42 Nm";
springKd632.specifications.otherVerifiedFields["Opening / hold-open variants"] = "90° / 105°; hold-open or non-hold-open";
springKd632.notes = "The complete source gallery identifies KD-63/2 as a concealed floor spring, not a surface door closer. The specification graphic and dimension drawing confirm 150 kg maximum gate weight, 1500 mm maximum gate width, 42 Nm, 90° / 105° variants and a 293 × 95 × 57 mm body.";

const closerKd061 = productBySourceId("1601710695032", "KD-061");
closerKd061.title.en = "Hydraulic Door Closer · Up to 65 kg";
closerKd061.title.zh = "液压闭门器 · 最大 65 kg";
closerKd061.specifications.doorWidth = "600–900 mm";
closerKd061.specifications.otherVerifiedFields["Applicable door weight"] = "45–65 kg";
closerKd061.specifications.otherVerifiedFields["Installation size"] = "162 × 19 mm";
closerKd061.notes = "The source gallery graphic confirms model KD-061, a 45–65 kg door-weight range, 600–900 mm door width, 162 × 19 mm installation size and 150° maximum opening.";

const closerKd051 = productBySourceId("1601710607597", "KD-051");
closerKd051.specifications.doorWidth = "500–800 mm";
closerKd051.specifications.dimensions = "145.5 × 37 × 56 mm";
closerKd051.specifications.otherVerifiedFields["Applicable door weight"] = "25–45 kg";
closerKd051.specifications.otherVerifiedFields["Mounting-hole spacing"] = "132 × 19 mm";
closerKd051.notes = "The source gallery graphic and dimension drawing confirm model KD-051, a 25–45 kg door-weight range, 500–800 mm door width, 145.5 × 37 × 56 mm body, 132 × 19 mm mounting-hole spacing and 135° maximum opening.";

const springKd882 = productBySourceId("1601577274690", "KD-882");
springKd882.specifications.doorWidth = "≤ 1500 mm";
springKd882.specifications.dimensions = "338 × 138 × 72 mm";
springKd882.specifications.otherVerifiedFields["Opening / hold-open variants"] = "90° / 125° hold-open";
springKd882.notes = "The source gallery graphic and dimension drawing confirm model KD-882, 300 kg maximum door weight, 1500 mm maximum door width, 125° maximum opening, 90° / 125° hold-open positions and a 338 × 138 × 72 mm body.";

const lockKd228a = productBySourceId("1601452767263", "KD-228A");
lockKd228a.specifications.dimensions = "98 × 52 × 65 mm";
lockKd228a.notes = "The source gallery explicitly labels model KD-228A and confirms a 98 × 52 × 65 mm lock body, non-drilling installation and suitability for 10–15 mm frameless glass doors. The existing material and finish options were retained.";

const fittingKd090 = productBySourceId("1601579476128", "KD-090");
fittingKd090.specifications.dimensions = "106 × 106 × 31 mm";
fittingKd090.specifications.glassThickness = "10–12 mm";
fittingKd090.notes = "The source gallery explicitly labels model KD-090 and confirms a 106 × 106 × 31 mm L-shaped patch fitting, 10–12 mm glass compatibility, an aluminum or iron inner body and a SUS201 or optional SUS304 cover.";

const lockKd348aA = productBySourceId("1601452830921", "KD-348A");
const lockKd348aB = productBySourceId("1601496939804", "KD-348A");
for (const product of [lockKd348aA, lockKd348aB]) {
  product.specifications.dimensions = "60 × 47 × 60 mm";
  product.notes = "The source gallery explicitly labels model KD-348A and confirms a 60 × 47 × 60 mm non-drilling glass lock for 10–15 mm glass. Two source listings use the same model and technical values, so both remain flagged for factory duplicate confirmation.";
}

const lockKd138aA = productBySourceId("1601636957455", "KD-138A");
const lockKd138aB = productBySourceId("1601581115636", "KD-138A");
for (const product of [lockKd138aA, lockKd138aB]) {
  product.specifications.dimensions = "150 × 88 mm";
  product.notes = "The source gallery explicitly labels model KD-138A and confirms two 75 mm-wide lock halves, 88 mm height, non-drilling installation and 10–12 mm glass compatibility. Two source listings use the same model and technical values, so both remain flagged for factory duplicate confirmation.";
}

for (const group of [
  [lockKd348aA, lockKd348aB],
  [lockKd138aA, lockKd138aB],
]) {
  for (const [index, product] of group.entries()) {
    product.duplicateCandidate = true;
    product.duplicateOf = index === 0 ? "" : group[0].id;
  }
}

const reviewed = [
  springKd632,
  closerKd061,
  closerKd051,
  springKd882,
  lockKd228a,
  fittingKd090,
  lockKd348aA,
  lockKd138aA,
  lockKd348aB,
  lockKd138aB,
];
for (const product of reviewed) updateMissingFields(product);

await writeFile(productsPath, `${JSON.stringify(products, null, 2)}\n`);

console.log(JSON.stringify({
  reviewed: reviewed.length,
  structuredFieldsAdded: 14,
  capacityCorrections: 1,
  titleCorrections: 2,
  categoryCorrections: 1,
  imagesReplaced: 0,
  duplicateCandidates: products.filter((product) => product.duplicateCandidate).length,
}, null, 2));
