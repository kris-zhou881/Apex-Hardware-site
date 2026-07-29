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

const panelAsp024 = productBySourceId("1601808801671", "ASP024");
const panelAsp023 = productBySourceId("1601808825531", "ASP023");
const panelAsp021 = productBySourceId("1601808849373", "ASP021");
for (const product of [panelAsp024, panelAsp023, panelAsp021]) {
  product.notes = `The source title, Type field and six-image gallery confirm ${product.model} as a carved or perforated aluminum curtain-wall panel. Powder coating and the listed thickness ranges were retained; no overall panel dimensions were stated.`;
}

const panelAsp022 = productBySourceId("1601808786711", "ASP022");
panelAsp022.category = "aluminum-panels";
panelAsp022.family = "Aluminum Architectural Panels";
panelAsp022.title.en = "Decorative Aluminum Panel";
panelAsp022.title.zh = "装饰雕花铝板";
panelAsp022.notes = "The source Type field and all six gallery images identify ASP022 as a decorative aluminum curtain-wall panel, not a complete ceiling system. It was moved to the aluminum-panel series. Powder coating and listed thickness ranges were retained; no overall dimensions were stated.";

const panelAsp020 = productBySourceId("1601807296725", "ASP020");
panelAsp020.category = "aluminum-panels";
panelAsp020.family = "Aluminum Architectural Panels";
panelAsp020.title.en = "Decorative Aluminum Panel";
panelAsp020.title.zh = "装饰雕花铝板";
panelAsp020.notes = "The source title, Type field and all six gallery images identify ASP020 as a decorative aluminum facade/partition panel, not a door accessory. It was moved to the aluminum-panel series. No overall dimensions were stated.";

const fenceAgp010 = productBySourceId("1601808730410", "AGP010");
fenceAgp010.notes = "The source title, Fence Accessories type and six-image gallery confirm AGP010 as a powder-coated aluminum privacy fence. The source specification text is truncated after 'common width less than 1200', so no width value was promoted to the structured field.";

const fenceAgp008 = productBySourceId("1601808689530", "AGP008");
fenceAgp008.specifications.finish = "Powder coated";
fenceAgp008.notes = "The source title, Fence Accessories type and six-image gallery confirm AGP008 as a powder-coated aluminum privacy fence. The source width specification is truncated, so no width value was promoted.";

const screenAgp007 = productBySourceId("1601808646834", "AGP007");
screenAgp007.category = "aluminum-fencing";
screenAgp007.family = "Aluminum Fencing & Garden Gates";
screenAgp007.title.en = "Perforated Aluminum Privacy Screen";
screenAgp007.title.zh = "穿孔铝制隐私屏风";
screenAgp007.specifications.finish = "Powder coated";
screenAgp007.notes = "The source Fence Accessories type, outdoor-use fields and six-image gallery identify AGP007 as a perforated aluminum privacy screen, not a building facade panel. It was moved to the aluminum-fencing series. The width specification is truncated and remains blank.";

const screenAgp006 = productBySourceId("1601808679676", "AGP006");
screenAgp006.category = "aluminum-fencing";
screenAgp006.family = "Aluminum Fencing & Garden Gates";
screenAgp006.title.en = "Laser-cut Aluminum Privacy Screen";
screenAgp006.title.zh = "激光切割铝制隐私屏风";
screenAgp006.notes = "The source title, Fence Accessories type and six-image gallery identify AGP006 as a laser-cut outdoor privacy screen. It was moved from architectural panels to aluminum fencing. The source width specification is truncated and remains blank.";

const ceilingAgp009 = productBySourceId("1601808755186", "AGP009");
ceilingAgp009.notes = "The source title calls AGP009 an outdoor aluminum sandwich ceiling, while its Type field says Fence Accessories and its gallery shows decorative screen panels. Because the same listing conflicts, the existing category is retained pending factory confirmation and no dimensions were added.";

const reviewed = [
  panelAsp024,
  panelAsp023,
  panelAsp022,
  panelAsp020,
  panelAsp021,
  fenceAgp010,
  ceilingAgp009,
  fenceAgp008,
  screenAgp007,
  screenAgp006,
];
for (const product of reviewed) updateMissingFields(product);

await writeFile(productsPath, `${JSON.stringify(products, null, 2)}\n`);

console.log(JSON.stringify({
  reviewed: reviewed.length,
  structuredFieldsAdded: 2,
  titleCorrections: 4,
  categoryCorrections: 4,
  sourceConflictsRetained: 1,
  imagesReplaced: 0,
  duplicateCandidates: products.filter((product) => product.duplicateCandidate).length,
}, null, 2));
