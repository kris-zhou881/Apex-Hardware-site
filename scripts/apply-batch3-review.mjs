import { createHash } from "node:crypto";
import { readFile, stat, writeFile } from "node:fs/promises";
import { join } from "node:path";

const root = process.cwd();
const productsPath = join(root, "data", "products.json");
const mediaReviewPath = join(root, "data", "media-review.json");
const products = JSON.parse(await readFile(productsPath, "utf8"));
const mediaReview = JSON.parse(await readFile(mediaReviewPath, "utf8"));
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

async function sha256(relativePath) {
  return createHash("sha256").update(await readFile(join(root, relativePath))).digest("hex");
}

const springKd220 = productBySourceId("1601830920368", "KD-220");
springKd220.specifications.capacity = 90;
springKd220.notes = "The source title explicitly states a 90 kg hydraulic floor spring. The source-specific 896 × 896 image and existing material, finish options and 8–12 mm glass range were retained; package gross weight is not net weight.";

const hingeJds103s = productBySourceId("1601834349647", "JDS-103S");
hingeJds103s.title.en = "Stainless steel Soft-close Shower Door Hinge · 90°";
hingeJds103s.title.zh = "不锈钢缓闭淋浴门铰链 · 90°";
hingeJds103s.notes = "The source Product Name, Function, Usage and Features identify a 90° wall-to-glass soft-close shower hinge. The 5 mm value is hinge body thickness, and package gross weight is not net weight.";

const stripJds1400 = productBySourceId("1600993825658", "JDS-1400");
stripJds1400.specifications.finish = "Blue, transparent, black";
stripJds1400.notes = "The source Color field explicitly lists blue, transparent and black options for this PVC H-type waterproof strip. The existing 6 / 8 / 10 / 12 mm glass compatibility values were retained; package gross weight is not net weight.";

const lockKd9007aHandle = productBySourceId("1601053545704", "KD-9007A");
const lockKd9007aCentral = productBySourceId("1601838122744", "KD-9007A");
for (const [index, product] of [lockKd9007aHandle, lockKd9007aCentral].entries()) {
  product.duplicateCandidate = true;
  product.duplicateOf = index === 0 ? "" : lockKd9007aHandle.id;
}
lockKd9007aHandle.notes = "This source listing uses model KD-9007A for a frameless glass-door lock with a pull handle. Another source listing uses the same model for a materially different central lock, so both remain separate and flagged for factory confirmation.";
lockKd9007aCentral.notes = "This source listing uses model KD-9007A for a central glass-door lock. Another source listing uses the same model for a materially different pull-handle lock, so both remain separate and flagged for factory confirmation.";

const springD3001 = productBySourceId("1601819101341", "D-3001");
springD3001.source.selectedGalleryIndex = 0;
springD3001.source.mediaStatus = "approved-product-specific-gallery-image";
springD3001.source.mediaCrop = "none";
springD3001.source.mediaEdit = "resized and padded to 896 × 896";
springD3001.source.mediaSha256 = await sha256(springD3001.media.main);
springD3001.notes = "The generic product image was replaced with the source gallery graphic labeled D-3001. The source listing does not state a confirmed load, door width, dimensions, net weight, finish, opening angle, hold-open option or glass thickness, so those fields remain blank.";

const springKd63A = productBySourceId("60763886206", "KD-63");
const springKd63B = productBySourceId("1601453705558", "KD-63");
springKd63A.specifications.doorWidth = "≤ 900 mm";
springKd63B.specifications.doorWidth = "≤ 900 mm";
springKd63A.specifications.otherVerifiedFields["Closing force"] = "38 Nm";
springKd63B.specifications.otherVerifiedFields["Closing force"] = "38 Nm";
springKd63A.specifications.otherVerifiedFields["Opening / hold-open variants"] = "90° / 125°; hold-open or non-hold-open";
springKd63B.specifications.otherVerifiedFields["Opening / hold-open variants"] = "90° / 125°; hold-open or non-hold-open";
springKd63B.specifications.otherVerifiedFields["Maximum gate size"] = "90 cm (width) × 200 cm (height)";
for (const [index, product] of [springKd63A, springKd63B].entries()) {
  product.duplicateCandidate = true;
  product.duplicateOf = index === 0 ? "" : springKd63A.id;
}
springKd63A.notes = "The source gallery specification graphic states 95 kg, 900 mm maximum gate width, 38 Nm closing force and 90° / 125° hold-open or non-hold-open variants. The same model appears on another listing, so both records remain flagged for factory confirmation.";
springKd63B.notes = "The source gallery specification graphic states 95 kg, a 90 × 200 cm maximum gate size, 38 Nm closing force and 90° / 125° hold-open or non-hold-open variants. The same model appears on another listing, so both records remain flagged for factory confirmation.";

const springKd84 = productBySourceId("1601435107304", "KD-84");
springKd84.specifications.capacity = 130;
springKd84.specifications.doorWidth = "≤ 1300 mm";
springKd84.specifications.otherVerifiedFields["Closing force"] = "38 Nm";
springKd84.specifications.otherVerifiedFields["Opening / hold-open variants"] = "90° / 125°; hold-open or non-hold-open";
springKd84.notes = "The source gallery specification graphic states 130 kg maximum gate weight, 1300 mm maximum gate width, 38 Nm closing force and 90° / 125° hold-open or non-hold-open variants. The existing cleaned product image was retained.";

const springKd73 = productBySourceId("1601677506942", "KD-73");
springKd73.specifications.doorWidth = "≤ 1300 mm";
springKd73.specifications.otherVerifiedFields["Closing force"] = "38 Nm";
springKd73.specifications.otherVerifiedFields["Opening / hold-open variants"] = "90° / 125°; hold-open or non-hold-open";
springKd73.notes = "The source title confirms 130 kg. The source gallery specification graphic also states 1300 mm maximum gate width, 38 Nm closing force and 90° / 125° hold-open or non-hold-open variants. Package gross weight is not net weight.";

const lockKd198b = productBySourceId("1601639170993", "KD-198B");
lockKd198b.notes = "Batch 3 review confirmed the source-specific glass-to-wall central-lock image and the existing stainless-steel material, finish options and 10–15 mm glass range. Package gross weight is not net product weight.";

const mediaRecord = mediaReview.products.find(
  (candidate) => candidate.sourceId === springD3001.source.sourceId,
);
if (!mediaRecord) throw new Error(`Missing media review record ${springD3001.source.sourceId}`);
mediaRecord.sourceMediaUrl = springD3001.media.sourceGallery[0];
mediaRecord.selectedGalleryIndex = 0;
mediaRecord.edit = "resized and padded to 896 × 896";
mediaRecord.outputBytes = (await stat(join(root, springD3001.media.main))).size;
mediaRecord.sha256 = springD3001.source.mediaSha256;

const reviewed = [
  springKd220,
  hingeJds103s,
  stripJds1400,
  lockKd9007aHandle,
  springD3001,
  springKd63A,
  springKd63B,
  springKd84,
  springKd73,
  lockKd198b,
];
for (const product of reviewed) updateMissingFields(product);
updateMissingFields(lockKd9007aCentral);

await writeFile(productsPath, `${JSON.stringify(products, null, 2)}\n`);
await writeFile(mediaReviewPath, `${JSON.stringify(mediaReview, null, 2)}\n`);

console.log(JSON.stringify({
  reviewed: reviewed.length,
  structuredFieldsAdded: 7,
  titleCorrections: 1,
  imagesReplaced: 1,
  duplicateCandidates: products.filter((product) => product.duplicateCandidate).length,
}, null, 2));
