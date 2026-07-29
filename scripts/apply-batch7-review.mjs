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

const lockKd168a = productBySourceId("1601581463448", "KD-168A");
lockKd168a.specifications.otherVerifiedFields["Lock-half size"] = "88 × 75 mm";
lockKd168a.specifications.otherVerifiedFields["Glass gap"] = "4–8 mm";
lockKd168a.notes = "The source gallery explicitly labels model KD-168A and confirms two 88 × 75 mm lock halves, a 4–8 mm glass gap, non-drilling installation and 10–15 mm glass compatibility. No overall assembled width was stated, so the dimensions field remains blank.";

const lockKd138b = productBySourceId("1601581519108", "KD-138B");
lockKd138b.specifications.dimensions = "150 × 88 mm";
lockKd138b.notes = "The source gallery explicitly labels model KD-138B and confirms two 75 mm-wide lock halves, 88 mm height, non-drilling installation and 10–15 mm glass compatibility.";

const lockKd228aPrior = productBySourceId("1601452767263", "KD-228A");
const lockKd228a = productBySourceId("1601581592143", "KD-228A");
lockKd228a.specifications.dimensions = "98 × 52 × 65 mm";
for (const [index, product] of [lockKd228aPrior, lockKd228a].entries()) {
  product.duplicateCandidate = true;
  product.duplicateOf = index === 0 ? "" : lockKd228aPrior.id;
}
lockKd228aPrior.notes = "The source gallery explicitly labels model KD-228A and confirms a 98 × 52 × 65 mm non-drilling glass lock for 10–15 mm glass. Another listing uses the same model and technical values, so both remain flagged for factory duplicate confirmation.";
lockKd228a.notes = lockKd228aPrior.notes;

const lockKd118b = productBySourceId("1601636191673", "KD-118B");
lockKd118b.specifications.dimensions = "85 × 95 mm";
lockKd118b.notes = "The source gallery explicitly labels model KD-118B and confirms an 85 × 95 mm surface-mounted, non-drilling glass-to-wall lock for 10–12 mm glass.";

const panelAsp030 = productBySourceId("1601808755861", "ASP030");
panelAsp030.category = "aluminum-panels";
panelAsp030.family = "Aluminum Architectural Panels";
panelAsp030.title.en = "Decorative Aluminum Panel";
panelAsp030.title.zh = "装饰雕花铝板";
panelAsp030.notes = "The source title, Type field and six-image gallery identify ASP030 as a carved/perforated aluminum curtain-wall panel, not a ceiling system. It was moved to the aluminum-panel series. The source states powder coating and available thickness values but no overall panel dimensions.";

const panelAsp029 = productBySourceId("1601808740990", "ASP029");
panelAsp029.title.en = "Laser-cut Aluminum Facade Panel";
panelAsp029.title.zh = "激光切割铝制幕墙板";
panelAsp029.notes = "The source title and six-image gallery identify ASP029 as a laser-cut decorative facade panel. The source states aluminum, powder coating and available thickness values but no overall panel dimensions.";

const panelReviews = [
  ["1601808770794", "ASP028"],
  ["1601808756879", "ASP027"],
  ["1601808870267", "ASP026"],
  ["1601808865314", "ASP025"],
].map(([sourceId, model]) => productBySourceId(sourceId, model));
for (const product of panelReviews) {
  product.notes = `The source title, model field and six-image gallery confirm ${product.model} as a laser-cut decorative or perforated aluminum facade panel. The source states powder coating and available thickness values but no overall panel dimensions, so dimensions remain blank.`;
}

const reviewed = [
  lockKd168a,
  lockKd138b,
  lockKd228a,
  lockKd118b,
  panelAsp030,
  panelAsp029,
  ...panelReviews,
];
for (const product of [...reviewed, lockKd228aPrior]) updateMissingFields(product);

await writeFile(productsPath, `${JSON.stringify(products, null, 2)}\n`);

console.log(JSON.stringify({
  reviewed: reviewed.length,
  structuredFieldsAdded: 3,
  titleCorrections: 2,
  categoryCorrections: 1,
  imagesReplaced: 0,
  duplicateCandidates: products.filter((product) => product.duplicateCandidate).length,
}, null, 2));
