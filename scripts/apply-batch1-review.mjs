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

const hinge6018 = productBySourceId("1601828463243", "Kd-6018");
hinge6018.notes = "Batch 1 review confirmed the model-specific hinge image, stainless-steel material and 90° opening angle. The listed 4 mm thickness describes the hinge body, not glass thickness, so the glass-thickness field remains blank.";

const spring600 = productBySourceId("1601824312588", "KD.3001-600");
spring600.specifications.capacity = 600;
spring600.specifications.openingAngle = "360°";
spring600.source.selectedGalleryIndex = 0;
spring600.source.mediaStatus = "approved-product-specific-gallery-image";
spring600.source.mediaCrop = "none";
spring600.source.mediaEdit = "resized and padded to 896 × 896";
spring600.source.mediaSha256 = await sha256(spring600.media.main);
spring600.notes = "The source title and model-labeled gallery image identify a 600 kg version with a 360° maximum opening angle. The gallery graphic writes the model as KD-3001.600 while the listing model field uses KD.3001-600; the listing model field is retained.";

const comboSet = productBySourceId("1601868884547", "KD-CS-01");
comboSet.notes = "Batch 1 review confirmed the source-specific combo-set image and steel material. The source listing does not provide a confirmed load, door width, dimensions, net weight, finish, opening angle, hold-open function or glass thickness; those fields remain blank.";

const pivotNew = productBySourceId("1601885011406", "KD-1063");
pivotNew.specifications.openingAngle = "125°";

const pivot180Title = productBySourceId("1601664684789", "KD-1063");
pivot180Title.specifications.openingAngle = "";

const pivot125 = productBySourceId("11000031636340", "KD-1063");

const pivot150Range = productBySourceId("1601666231343", "KD-1063");
pivot150Range.specifications.capacity = 150;

const pivot150Max = productBySourceId("11000031607422", "KD-1063");
pivot150Max.specifications.capacity = 150;

const pivotGroup = [pivotNew, pivot180Title, pivot125, pivot150Range, pivot150Max];
for (const [index, product] of pivotGroup.entries()) {
  product.duplicateCandidate = true;
  product.duplicateOf = index === 0 ? "" : pivotNew.id;
}
pivotNew.notes = "The source title explicitly identifies a 125° no-dig pivot hinge. Five source listings use model KD-1063 with different titles, applications or specifications, so the records remain separate and are flagged for factory datasheet confirmation.";
pivot180Title.notes = "The source title says 180°, while the captured detailed specification says 125°. Because the same source page conflicts, the public opening-angle field was cleared. Five KD-1063 records remain flagged for factory datasheet confirmation.";
pivot125.notes = "The source title and captured detailed specification both state 125°. Five source listings use model KD-1063 with different titles, applications or specifications, so the records remain separate and are flagged for factory datasheet confirmation.";
pivot150Range.notes = "The source title states a 60–150 kg range, so the structured maximum door weight is recorded as 150 kg. Five KD-1063 records remain separate and flagged for factory datasheet confirmation.";
pivot150Max.notes = "The source title explicitly states a maximum door weight of 150 kg. Five KD-1063 records remain separate and flagged for factory datasheet confirmation.";

const spring400 = productBySourceId("1601824330219", "KD.3001-400");
spring400.specifications.capacity = 400;
spring400.specifications.openingAngle = "360°";
spring400.source.selectedGalleryIndex = 0;
spring400.source.mediaStatus = "approved-product-specific-gallery-image";
spring400.source.mediaCrop = "none";
spring400.source.mediaEdit = "resized and padded to 896 × 896";
spring400.source.mediaSha256 = await sha256(spring400.media.main);
spring400.notes = "The source title and model-labeled gallery image identify a 400 kg version; the source title states a 360° opening angle. The gallery graphic writes the model as KD-3001.400 while the listing model field uses KD.3001-400; the listing model field is retained.";

const hingePl102 = productBySourceId("1600991360730", "PL-102");
hingePl102.notes = "Batch 1 review confirmed the model-specific product image and existing dimensions, material, finish, 90° opening angle and 6–12 mm glass thickness. Gross weight is not relabeled as net weight, and unsupported fields remain blank.";

const reviewed = [
  hinge6018,
  spring600,
  comboSet,
  pivotNew,
  pivot180Title,
  pivot125,
  pivot150Range,
  pivot150Max,
  spring400,
  hingePl102,
];
for (const product of reviewed) updateMissingFields(product);

for (const product of [spring600, spring400]) {
  const record = mediaReview.products.find(
    (candidate) => candidate.sourceId === product.source.sourceId,
  );
  if (!record) throw new Error(`Missing media review record ${product.source.sourceId}`);
  record.sourceMediaUrl = product.media.sourceGallery[0];
  record.selectedGalleryIndex = 0;
  record.edit = "resized and padded to 896 × 896";
  record.outputBytes = (await stat(join(root, product.media.main))).size;
  record.sha256 = product.source.mediaSha256;
}

await writeFile(productsPath, `${JSON.stringify(products, null, 2)}\n`);
await writeFile(mediaReviewPath, `${JSON.stringify(mediaReview, null, 2)}\n`);

console.log(JSON.stringify({
  reviewed: reviewed.length,
  structuredFieldsAdded: 7,
  conflictingFieldsCleared: 1,
  imagesReplaced: 2,
  duplicateCandidates: products.filter((product) => product.duplicateCandidate).length,
}, null, 2));
