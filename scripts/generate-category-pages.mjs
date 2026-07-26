import { mkdir, readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";
import { SITE_URL, localizedCategoryTitle, localizedProductTitle } from "./catalog-utils.mjs";
import { breadcrumbs, escapeHtml, footer, header, inquiry, jsonScript } from "./page-templates.mjs";

const root = process.cwd();
const products = JSON.parse(await readFile(join(root, "data", "products.json"), "utf8"));
const categories = JSON.parse(await readFile(join(root, "data", "categories.json"), "utf8"));

function imagePath(product, prefix) {
  return product.media.main ? `${prefix}${product.media.main}` : `${prefix}assets/favicon.svg`;
}

const localizedLanguages = ["en", "zh", "es", "ar", "fr", "de", "pt", "ru"];
const titleAttributes = (values) => localizedLanguages.map((language) => `data-title-${language}="${escapeHtml(values(language))}"`).join(" ");

const categoryCards = categories.map((category) => {
  const representative = products.find((product) => product.category === category.slug && product.media.main.endsWith(".avif"))
    || products.find((product) => product.slug === category.representativeProduct);
  return `<article class="catalog-family-card reveal">
  <a class="catalog-family-media" href="${category.slug}/">
    <img src="${imagePath(representative, "../")}" width="900" height="900" loading="lazy" decoding="async" alt="${escapeHtml(category.en)} product family">
  </a>
  <div class="catalog-family-copy">
    <p class="catalog-count">${category.count} products</p>
    <h2><a href="${category.slug}/" ${titleAttributes((language) => localizedCategoryTitle(category, language))}>${escapeHtml(category.en)}</a></h2>
    <p data-description-en="${escapeHtml(category.description)}" data-description-zh="${escapeHtml(category.descriptionZh)}">${escapeHtml(category.description)}</p>
    <a class="text-link" href="${category.slug}/"><span data-catalog-text="explore">Explore</span><span aria-hidden="true">→</span></a>
  </div>
</article>`;
}).join("\n");

const itemList = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Apex Hardware Products",
  url: `${SITE_URL}/products/`,
  mainEntity: {
    "@type": "ItemList",
    itemListElement: categories.map((category, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: `${SITE_URL}/products/${category.slug}/`,
      name: category.en,
    })),
  },
};

const productsIndex = `<!DOCTYPE html>
<html lang="en" dir="ltr">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
  <title>Architectural Hardware Products | Apex Hardware</title>
  <meta name="description" content="Explore Apex Hardware floor springs, door closers, glass hardware, locks, handles, aluminum panels and architectural door systems.">
  <meta name="theme-color" content="#ffffff">
  <link rel="canonical" href="${SITE_URL}/products/">
  <link rel="icon" href="../assets/favicon.svg" type="image/svg+xml">
  <meta property="og:type" content="website">
  <meta property="og:title" content="Architectural Hardware Products | Apex Hardware">
  <meta property="og:description" content="A clear product system for architectural doors, glass and aluminum applications.">
  <meta property="og:url" content="${SITE_URL}/products/">
  <link rel="stylesheet" href="../assets/styles.css?v=20260727c">
  <script type="application/ld+json">${jsonScript(itemList)}</script>
  <script src="../assets/app.js?v=20260727c" defer></script>
  <script src="../assets/catalog.js?v=20260727c" defer></script>
</head>
<body data-catalog-mode="index">
  <div class="scroll-progress" aria-hidden="true"></div>
  ${header("../", "products")}
  <main class="subpage-main catalog-main">
    <section class="page-hero catalog-page-hero">
      <div class="container reveal visible">
        <p class="eyebrow" data-catalog-text="productsEyebrow">APEX HARDWARE · PRODUCT SYSTEMS</p>
        <h1 data-catalog-text="productsTitle">Products</h1>
        <p data-catalog-text="productsIntro">Choose a product family, then narrow the specification for your application.</p>
      </div>
    </section>
    <section class="section catalog-family-section" aria-label="Product families">
      <div class="container catalog-family-grid">${categoryCards}</div>
    </section>
    ${inquiry("../", "Apex Hardware product inquiry")}
  </main>
  ${footer("../")}
</body>
</html>`;
await mkdir(join(root, "products"), { recursive: true });
await writeFile(join(root, "products", "index.html"), productsIndex);

for (const category of categories) {
  const categoryProducts = products.filter((product) => product.category === category.slug);
  const categoryImage = categoryProducts.find((product) => product.media.main.endsWith(".avif"))?.media.main
    || categoryProducts[0]?.media.main
    || "assets/favicon.svg";
  const categoryPageUrl = `${SITE_URL}/products/${category.slug}/${category.slug === "floor-springs" ? "catalog.html" : ""}`;
  const productCards = categoryProducts.map((product) => {
    const specs = product.specifications;
    const specBits = [
      specs.capacity ? `${specs.capacity} kg` : "",
      specs.material,
      specs.openingAngle,
      specs.glassThickness,
    ].filter(Boolean);
    return `<article class="catalog-product-card reveal" data-search="${escapeHtml(`${product.title.en} ${product.title.zh} ${product.model} ${product.source.sourceId}`.toLowerCase())}" data-material="${escapeHtml(specs.material || "Unspecified")}" data-slug="${escapeHtml(product.slug)}" data-model="${escapeHtml(product.model || product.source.sourceId)}" data-title="${escapeHtml(product.title.en)}" data-capacity="${specs.capacity || ""}" data-angle="${escapeHtml(specs.openingAngle)}" data-thickness="${escapeHtml(specs.glassThickness)}">
  <a class="catalog-product-media" href="${product.slug}.html">
    <img src="../../${product.media.main}" width="900" height="900" loading="lazy" decoding="async" alt="${escapeHtml(product.title.en)}">
  </a>
  <div class="catalog-product-copy">
    <p class="catalog-product-family">${escapeHtml(category.en)}</p>
    <h2><a href="${product.slug}.html" ${titleAttributes((language) => localizedProductTitle(product, language))}>${escapeHtml(product.title.en)}</a></h2>
    ${product.model ? `<p class="model-chip" dir="ltr">Model ${escapeHtml(product.model)}</p>` : ""}
    <p class="catalog-spec-line" dir="ltr">${escapeHtml(specBits.join(" · ") || "Specifications on request")}</p>
    <div class="catalog-card-actions">
      <a class="text-link" href="${product.slug}.html"><span data-catalog-text="details">View details</span><span aria-hidden="true">→</span></a>
      <button class="catalog-compare-button" type="button" data-compare="${escapeHtml(product.slug)}" aria-pressed="false" data-catalog-text="compare">Compare</button>
    </div>
  </div>
</article>`;
  }).join("\n");

  const collection = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: `${category.en} | Apex Hardware`,
    description: category.description,
    url: categoryPageUrl,
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: categoryProducts.length,
      itemListElement: categoryProducts.map((product, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: `${SITE_URL}/products/${category.slug}/${product.slug}.html`,
        name: product.title.en,
      })),
    },
  };
  const crumb = breadcrumbs([
    { name: "Home", url: `${SITE_URL}/` },
    { name: "Products", url: `${SITE_URL}/products/` },
    { name: category.en, url: categoryPageUrl },
  ]);

  const html = `<!DOCTYPE html>
<html lang="en" dir="ltr">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
  <title>${escapeHtml(category.en)} | Apex Hardware</title>
  <meta name="description" content="${escapeHtml(category.description)} Browse ${categoryProducts.length} product listings and request confirmed specifications.">
  <meta name="theme-color" content="#ffffff">
  <link rel="canonical" href="${categoryPageUrl}">
  <link rel="icon" href="../../assets/favicon.svg" type="image/svg+xml">
  <meta property="og:type" content="website">
  <meta property="og:title" content="${escapeHtml(category.en)} | Apex Hardware">
  <meta property="og:description" content="${escapeHtml(category.description)}">
  <meta property="og:url" content="${categoryPageUrl}">
  <meta property="og:image" content="${SITE_URL}/${categoryImage}">
  <link rel="stylesheet" href="../../assets/styles.css?v=20260727c">
  <script type="application/ld+json">${jsonScript(collection)}</script>
  <script type="application/ld+json">${jsonScript(crumb)}</script>
  <script src="../../assets/app.js?v=20260727c" defer></script>
  <script src="../../assets/catalog.js?v=20260727c" defer></script>
</head>
<body data-catalog-mode="category" data-category="${category.slug}">
  <div class="scroll-progress" aria-hidden="true"></div>
  ${header("../../", category.slug === "floor-springs" ? "floor-springs" : "products")}
  <main class="subpage-main catalog-main">
    <section class="page-hero catalog-category-hero">
      <div class="container reveal visible">
        <a class="back-link" href="../"><span aria-hidden="true">←</span><span data-catalog-text="backProducts">Back to Products</span></a>
        <p class="eyebrow">APEX HARDWARE · ${escapeHtml(category.en.toUpperCase())}</p>
        <h1 ${titleAttributes((language) => localizedCategoryTitle(category, language))}>${escapeHtml(category.en)}</h1>
        <p data-description-en="${escapeHtml(category.description)}" data-description-zh="${escapeHtml(category.descriptionZh)}">${escapeHtml(category.description)}</p>
        <p class="catalog-total"><strong>${categoryProducts.length}</strong> <span data-catalog-text="productsFound">products</span></p>
      </div>
    </section>
    <section class="catalog-toolbar-section">
      <div class="container">
        <div class="catalog-toolbar reveal">
          <label class="catalog-search"><span class="sr-only" data-catalog-text="searchLabel">Search products</span><input type="search" id="catalog-search" placeholder="Search products" data-catalog-placeholder="searchPlaceholder"></label>
          <div class="catalog-filters" id="catalog-filters" role="group" aria-label="Filter by material"></div>
        </div>
        <p class="catalog-results" id="catalog-results" aria-live="polite"></p>
      </div>
    </section>
    <section class="catalog-grid-section" aria-label="${escapeHtml(category.en)} products">
      <div class="container catalog-product-grid" id="catalog-product-grid">${productCards}</div>
      <div class="container catalog-empty" id="catalog-empty" hidden data-catalog-text="noResults">No matching products.</div>
    </section>
    <aside class="compare-drawer" id="compare-drawer" hidden aria-labelledby="compare-title">
      <div class="container">
        <div class="compare-drawer-head"><h2 id="compare-title" data-catalog-text="compareTitle">Compare products</h2><button type="button" id="compare-clear" data-catalog-text="clear">Clear</button></div>
        <div class="compare-table-wrap" id="compare-table-wrap"></div>
      </div>
    </aside>
    ${inquiry("../../", `${category.en} inquiry`)}
  </main>
  ${footer("../../")}
</body>
</html>`;
  const directory = join(root, "products", category.slug);
  await mkdir(directory, { recursive: true });
  if (category.slug !== "floor-springs") await writeFile(join(directory, "index.html"), html);
  else await writeFile(join(directory, "catalog.html"), html);
}

console.log(JSON.stringify({ productIndex: 1, categoryPages: categories.length }, null, 2));
