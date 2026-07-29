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

const closerKd063 = productBySourceId("1601715762414", "KD-063");
closerKd063.specifications.doorWidth = "600–900 mm";
closerKd063.specifications.otherVerifiedFields["Applicable door weight"] = "40–60 kg";
closerKd063.specifications.otherVerifiedFields["Installation size"] = "202 × 19 mm";
closerKd063.notes = "The source gallery specification graphic confirms model KD-063, a 40–60 kg door-weight range, 600–900 mm door width, 202 × 19 mm installation size and 160° maximum opening. The existing cleaned model-specific image was retained.";

const closerKd071 = productBySourceId("1601715857357", "KD-071");
closerKd071.specifications.doorWidth = "800–1000 mm";
closerKd071.specifications.dimensions = "202 × 44 × 68 mm";
closerKd071.specifications.otherVerifiedFields["Applicable door weight"] = "60–85 kg";
closerKd071.title.en = "Hydraulic Door Closer · Up to 85 kg";
closerKd071.title.zh = "液压闭门器 · 最大 85 kg";
closerKd071.notes = "The source gallery specification graphic confirms model KD-071, a 60–85 kg door-weight range, 800–1000 mm door width and 160° maximum opening. Its dimension drawing confirms a 202 × 44 × 68 mm body and 188 × 19 mm mounting-hole spacing.";

const panelReviews = [
  ["1601807200873", "ASP009"],
  ["1601807280462", "ASP008"],
  ["1601807333154", "ASP007"],
  ["1601807354006", "ASP006"],
  ["1601807193915", "ASP005"],
  ["1601807322177", "ASP004"],
  ["1601807318218", "ASP003"],
  ["1601807181946", "ASP001"],
].map(([sourceId, model]) => productBySourceId(sourceId, model));

for (const product of panelReviews) {
  product.notes = `The source detail fields identify model ${product.model}, aluminum material, 1.5–6.0 mm available thickness and anodized, foil-decorated, PE-coated or PVDF-coated finishes. Its six-image gallery shows a distinct solid aluminum curtain-wall panel selection. No overall panel dimensions were stated, so the dimensions field remains blank.`;
}

const panelAsp007 = productBySourceId("1601807333154", "ASP007");
panelAsp007.title.en = "Aluminum Solid Panel";
panelAsp007.title.zh = "铝合金实心板";

const panelAsp003 = productBySourceId("1601807318218", "ASP003");
panelAsp003.category = "aluminum-panels";
panelAsp003.family = "Aluminum Architectural Panels";
panelAsp003.title.en = "Aluminum Curtain Wall Panel";
panelAsp003.title.zh = "铝制幕墙板";
panelAsp003.notes = "The source title, detail fields and six-image gallery identify model ASP003 as an aluminum curtain-wall panel, not a door accessory. It was moved to the aluminum-panel series. The source states 1.5–6.0 mm available thickness and anodized, foil-decorated, PE-coated or PVDF-coated finishes; no overall dimensions were stated.";

// Batch 0 already confirmed that ASP010 and ASP002 are distinct records.
// Restore their review notes after the later detail import replaced the notes.
const panelAsp010 = productBySourceId("1601807265553", "ASP010");
panelAsp010.notes = "The explicit ASP010 model and its product image are distinct from ASP002, so it remains a separate product. No specifications were copied between models.";
const panelAsp002 = productBySourceId("1601807290245", "ASP002");
panelAsp002.notes = "The explicit ASP002 model and its product image are distinct from ASP010, so it remains a separate product. No specifications were copied between models.";

const reviewed = [closerKd063, closerKd071, ...panelReviews];
for (const product of [...reviewed, panelAsp010, panelAsp002]) {
  updateMissingFields(product);
}

await writeFile(productsPath, `${JSON.stringify(products, null, 2)}\n`);

console.log(JSON.stringify({
  reviewed: reviewed.length,
  structuredFieldsAdded: 3,
  titleCorrections: 3,
  categoryCorrections: 1,
  imagesReplaced: 0,
  duplicateCandidates: products.filter((product) => product.duplicateCandidate).length,
}, null, 2));
