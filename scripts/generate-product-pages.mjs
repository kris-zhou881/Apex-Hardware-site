import { mkdir, readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";
import { SITE_URL, localizedProductTitle } from "./catalog-utils.mjs";
import { breadcrumbs, escapeHtml, footer, header, inquiry, jsonScript, productJsonLd } from "./page-templates.mjs";

const root = process.cwd();
const products = JSON.parse(await readFile(join(root, "data", "products.json"), "utf8"));
const categories = JSON.parse(await readFile(join(root, "data", "categories.json"), "utf8"));
const categoryMap = new Map(categories.map((category) => [category.slug, category]));
const confirmText = "Contact us to confirm";
const localizedLanguages = ["en", "zh", "es", "ar", "fr", "de", "pt", "ru"];

function specRow(label, value, key) {
  return `<div><dt data-catalog-text="${key}">${label}</dt><dd dir="ltr"${value ? "" : ' data-catalog-text="confirm"'}>${escapeHtml(value || confirmText)}</dd></div>`;
}

for (const product of products) {
  const category = categoryMap.get(product.category);
  const specs = product.specifications;
  const related = products.filter((candidate) => candidate.category === product.category && candidate.id !== product.id).slice(0, 3);
  const featureBits = [
    specs.capacity ? { label: "Maximum door weight", value: `${specs.capacity} kg`, key: "capacity" } : null,
    specs.doorWidth ? { label: "Door width", value: specs.doorWidth, key: "doorWidth" } : null,
    specs.dimensions ? { label: "Dimensions", value: specs.dimensions, key: "dimensions" } : null,
    specs.material ? { label: "Material", value: specs.material, key: "material" } : null,
    specs.openingAngle ? { label: "Opening angle", value: specs.openingAngle, key: "openingAngle" } : null,
    specs.glassThickness ? { label: "Glass thickness", value: specs.glassThickness, key: "glassThickness" } : null,
  ].filter(Boolean).slice(0, 3);
  if (!featureBits.length) {
    featureBits.push({ label: "Specification", value: confirmText, key: "specification" });
  }

  const relatedCards = related.map((item) => `<article class="related-product">
  <a href="${item.slug}.html"><img src="../../${item.media.main}" width="900" height="900" loading="lazy" decoding="async" alt="${escapeHtml(item.title.en)}"></a>
  <h3><a href="${item.slug}.html">${escapeHtml(item.title.en)}</a></h3>
  ${item.model ? `<p dir="ltr">Model ${escapeHtml(item.model)}</p>` : ""}
</article>`).join("\n");

  const productLd = productJsonLd(product, category);
  const categoryBackHref = category.slug === "floor-springs" ? "catalog.html" : "./";
  const categoryPageUrl = `${SITE_URL}/products/${category.slug}/${category.slug === "floor-springs" ? "catalog.html" : ""}`;
  const crumb = breadcrumbs([
    { name: "Home", url: `${SITE_URL}/` },
    { name: "Products", url: `${SITE_URL}/products/` },
    { name: category.en, url: categoryPageUrl },
    { name: product.title.en, url: `${SITE_URL}/products/${category.slug}/${product.slug}.html` },
  ]);
  const description = `${product.title.en} from Apex Hardware. Verified listing details are shown; contact us to confirm missing project specifications.`;
  const modelLine = product.model
    ? `<span class="model-chip" dir="ltr">Model ${escapeHtml(product.model)}</span>`
    : `<span class="model-chip" dir="ltr">Reference ${escapeHtml(product.source.sourceId)}</span>`;
  const preloadType = product.media.main.endsWith(".avif") ? "image/avif" : "image/svg+xml";
  const localizedTitleAttributes = localizedLanguages
    .map((language) => `data-title-${language}="${escapeHtml(localizedProductTitle(product, language))}"`)
    .join(" ");
  const html = `<!DOCTYPE html>
<html lang="en" dir="ltr">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
  <title>${escapeHtml(product.title.en)} | Apex Hardware</title>
  <meta name="description" content="${escapeHtml(description)}">
  <meta name="theme-color" content="#ffffff">
  <link rel="canonical" href="${SITE_URL}/products/${category.slug}/${product.slug}.html">
  <link rel="icon" href="../../assets/favicon.svg" type="image/svg+xml">
  <meta property="og:type" content="product">
  <meta property="og:title" content="${escapeHtml(product.title.en)} | Apex Hardware">
  <meta property="og:description" content="${escapeHtml(description)}">
  <meta property="og:url" content="${SITE_URL}/products/${category.slug}/${product.slug}.html">
  <meta property="og:image" content="${SITE_URL}/${product.media.main}">
  <link rel="preload" href="../../${product.media.main}" as="image" type="${preloadType}">
  <link rel="stylesheet" href="../../assets/styles.css?v=20260727d">
  <script type="application/ld+json">${jsonScript(productLd)}</script>
  <script type="application/ld+json">${jsonScript(crumb)}</script>
  <script src="../../assets/app.js?v=20260727c" defer></script>
  <script src="../../assets/catalog.js?v=20260727d" defer></script>
</head>
<body data-catalog-mode="detail">
  <div class="scroll-progress" aria-hidden="true"></div>
  ${header("../../", category.slug === "floor-springs" ? "floor-springs" : "products")}
  <main class="subpage-main catalog-main">
    <section class="product-detail-hero catalog-detail-hero">
      <div class="container">
        <a class="back-link" href="${categoryBackHref}"><span aria-hidden="true">←</span><span data-catalog-text="backSeries">Back to series</span></a>
        <div class="detail-hero-grid">
          <div class="detail-copy reveal visible">
            <p class="eyebrow">${escapeHtml(category.en.toUpperCase())}</p>
            <h1 ${localizedTitleAttributes}>${escapeHtml(product.title.en)}</h1>
            <p class="detail-position">${escapeHtml(category.description)}</p>
            ${modelLine}
          </div>
          <figure class="detail-media reveal"><img src="../../${product.media.main}" width="900" height="900" alt="${escapeHtml(product.title.en)}" fetchpriority="high" decoding="async"></figure>
        </div>
      </div>
    </section>
    <section class="detail-section" aria-labelledby="features-title">
      <div class="container">
        <h2 id="features-title" data-catalog-text="verifiedHighlights">Verified highlights</h2>
        <div class="key-feature-grid">${featureBits.map((feature) => `<article class="key-feature"><span data-catalog-text="${feature.key}">${feature.label}</span><strong dir="ltr">${escapeHtml(feature.value)}</strong></article>`).join("")}</div>
      </div>
    </section>
    <section class="detail-section detail-section-alt" aria-labelledby="specs-title">
      <div class="container">
        <h2 id="specs-title" data-catalog-text="technicalSpecs">Technical specifications</h2>
        <dl class="specification-list">
          ${specRow("Model", product.model, "model")}
          ${specRow("Maximum door weight", specs.capacity ? `${specs.capacity} kg` : "", "capacity")}
          ${specRow("Door width", specs.doorWidth, "doorWidth")}
          ${specRow("Dimensions", specs.dimensions, "dimensions")}
          ${specRow("Net weight", specs.netWeight, "netWeight")}
          ${specRow("Material", specs.material, "material")}
          ${specRow("Finish", specs.finish, "finish")}
          ${specRow("Opening angle", specs.openingAngle, "openingAngle")}
          ${specRow("Glass thickness", specs.glassThickness, "glassThickness")}
          ${specRow("Hold-open function", specs.holdOpen === null ? "" : specs.holdOpen ? "Yes" : "No", "holdOpen")}
        </dl>
        <p class="data-confidence-note" data-catalog-text="dataNote">Only explicitly confirmed listing data is shown. Contact us to verify missing fields before specification.</p>
      </div>
    </section>
    ${related.length ? `<section class="detail-section related-section" aria-labelledby="related-title"><div class="container"><h2 id="related-title" data-catalog-text="related">Related products</h2><div class="related-grid">${relatedCards}</div></div></section>` : ""}
    ${inquiry("../../", `${product.title.en}${product.model ? ` — ${product.model}` : ""}`)}
  </main>
  ${footer("../../")}
</body>
</html>`;
  const directory = join(root, "products", category.slug);
  await mkdir(directory, { recursive: true });
  await writeFile(join(directory, `${product.slug}.html`), html);
}

console.log(JSON.stringify({ productPages: products.length }, null, 2));
