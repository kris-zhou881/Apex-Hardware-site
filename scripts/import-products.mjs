import { cp, mkdir, readFile, writeFile } from "node:fs/promises";
import { homedir } from "node:os";
import { dirname, join } from "node:path";
import {
  CATEGORY_DEFINITIONS,
  csvEscape,
  fingerprint,
  productFromSource,
} from "./catalog-utils.mjs";

const root = process.cwd();
const stagingRoot = process.env.APEX_STAGING || join(homedir(), "Desktop", "健达斯", "apex-import-staging");
const rawPath = join(stagingRoot, "manifests", "store-products-raw.json");
const raw = JSON.parse(await readFile(rawPath, "utf8"));
const verifiedAt = raw.capturedAt.slice(0, 10);
const products = raw.products.map((source) => productFromSource(source, verifiedAt));

const titleGroups = new Map();
products.forEach((product) => {
  const key = fingerprint(product.sourceTitle.toLowerCase().replace(/[^\p{L}\p{N}]+/gu, ""));
  const group = titleGroups.get(key) || [];
  group.push(product);
  titleGroups.set(key, group);
});
titleGroups.forEach((group) => {
  if (group.length < 2) return;
  group.forEach((product, index) => {
    product.duplicateCandidate = true;
    if (index > 0) product.duplicateOf = group[0].id;
  });
});

const counts = new Map();
products.forEach((product) => counts.set(product.category, (counts.get(product.category) || 0) + 1));
const categories = CATEGORY_DEFINITIONS.map((category) => ({
  ...category,
  count: counts.get(category.slug) || 0,
  representativeProduct: products.find((product) => product.category === category.slug)?.slug || "",
})).filter((category) => category.count > 0);

const families = categories.map((category) => ({
  id: category.slug,
  category: category.slug,
  title: { en: category.en, zh: category.zh },
  productIds: products.filter((product) => product.category === category.slug).map((product) => product.id),
}));

await mkdir(join(root, "data"), { recursive: true });
await mkdir(join(root, "docs", "backups"), { recursive: true });

for (const file of ["products.json", "categories.json", "product-families.json"]) {
  try {
    await cp(join(root, "data", file), join(root, "docs", "backups", `${file}.${Date.now()}.bak`));
  } catch {
    // The first import has no previous data to back up.
  }
}

await writeFile(join(root, "data", "products.json"), `${JSON.stringify(products, null, 2)}\n`);
await writeFile(join(root, "data", "categories.json"), `${JSON.stringify(categories, null, 2)}\n`);
await writeFile(join(root, "data", "product-families.json"), `${JSON.stringify(families, null, 2)}\n`);

const preview = products.map((product) => ({
  sourceId: product.source.sourceId,
  sourceUrl: product.source.url,
  sourceTitle: product.sourceTitle,
  proposedSlug: product.slug,
  proposedCategory: product.category,
  proposedSubcategory: product.subcategory,
  proposedProductFamily: product.family,
  model: product.model,
  specifications: product.specifications,
  mainImage: product.media.main,
  galleryImages: product.media.gallery,
  dimensionImages: product.media.dimensions,
  installationImages: product.media.installation,
  applicationImages: product.media.applications,
  videos: product.media.videos,
  videoPoster: product.media.videoPoster,
  duplicateCandidate: product.duplicateCandidate,
  dataConfidence: product.source.dataConfidence,
  missingFields: product.missingFields,
  notes: product.notes,
}));
await writeFile(join(root, "data", "all-products-preview.json"), `${JSON.stringify(preview, null, 2)}\n`);

const csvHeaders = [
  "sourceId", "sourceUrl", "sourceTitle", "proposedSlug", "proposedCategory",
  "proposedSubcategory", "proposedProductFamily", "model", "specifications",
  "mainImage", "duplicateCandidate", "dataConfidence", "missingFields", "notes",
];
const csv = [
  csvHeaders.map(csvEscape).join(","),
  ...preview.map((product) => csvHeaders.map((key) => csvEscape(product[key])).join(",")),
].join("\n");
await writeFile(join(root, "data", "all-products-preview.csv"), `${csv}\n`);

const previewMarkdown = [
  "# All Products Preview",
  "",
  `Captured: ${raw.capturedAt}`,
  "",
  `Products: ${products.length}`,
  "",
  "| Source ID | Proposed product | Category | Model | Confidence | Missing fields | Source |",
  "|---|---|---|---|---|---|---|",
  ...products.map((product) =>
    `| ${product.source.sourceId} | ${product.title.en.replaceAll("|", "\\|")} | ${product.category} | ${product.model || ""} | ${product.source.dataConfidence} | ${product.missingFields.join(", ")} | [Public listing](${product.source.url}) |`,
  ),
  "",
];
await writeFile(join(root, "docs", "all-products-preview.md"), previewMarkdown.join("\n"));

const categoryMarkdown = [
  "# Category Mapping",
  "",
  "The public store exposes 17 top-level and 11 second-level categories. The website consolidates them into the series below to avoid fragmented one-product categories.",
  "",
  "| Website series | Chinese | Products | Rule |",
  "|---|---|---:|---|",
  ...categories.map((category) => `| ${category.en} | ${category.zh} | ${category.count} | Product title and public category terminology |`),
  "",
  "Store second-level categories: Aluminum Door Locks, Mortise Handles, Glass Door Locks, Shower Handles, Door Handles, Stainless Sliding Doors, Automatic Sliding Doors, Semi-automatic Aluminum Sliding Doors, Brass Shower Hinges, Stainless Steel Shower Hinges, Zinc Shower Hinges.",
  "",
  "No public third-level category was found.",
  "",
];
await writeFile(join(root, "docs", "category-mapping.md"), categoryMarkdown.join("\n"));

const familyMarkdown = [
  "# Product Family Mapping",
  "",
  "| Family | Product count | Parent relationship |",
  "|---|---:|---|",
  ...families.map((family) => `| ${family.title.en} | ${family.productIds.length} | One parent family with products retained as independent source listings |`),
  "",
  "Products with identical normalized titles are marked as duplicate candidates, not automatically merged. No product is merged solely because its image or wording is similar.",
  "",
];
await writeFile(join(root, "docs", "product-family-mapping.md"), familyMarkdown.join("\n"));

const duplicateCount = products.filter((product) => product.duplicateCandidate).length;
const review = [
  "# Product Data Review",
  "",
  `- Public product pages discovered: ${products.length}`,
  `- Website product series: ${categories.length}`,
  `- Exact normalized-title duplicate candidates: ${duplicateCount}`,
  `- Verified records: 0`,
  `- Partially verified records: ${products.filter((product) => product.source.dataConfidence === "partially-verified").length}`,
  `- Unclear records: ${products.filter((product) => product.source.dataConfidence === "unclear").length}`,
  "",
  "Only values explicitly present in the public product-list title are populated. Door width, dimensions, net weight, finish, hold-open function and other unavailable fields remain empty or null. Product pages display “Contact us to confirm” for missing values.",
  "",
  "The four existing Apex floor-spring detail pages remain the source of truth for AH-200, AH-60, AH-7315AZ and AH-7300. Imported listings are not merged with them without an explicit model match and formal datasheet confirmation.",
  "",
  "Source titles containing old brands, promotional claims, prices, MOQ, warranty claims or certification claims are retained only in review data and are not used as public page titles.",
  "",
];
await writeFile(join(root, "docs", "product-data-review.md"), review.join("\n"));

console.log(JSON.stringify({ products: products.length, categories: categories.length, duplicateCandidates: duplicateCount }, null, 2));
