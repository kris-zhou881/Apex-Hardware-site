import { mkdir, readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";
import { SITE_URL, localizedCategoryTitle, localizedProductTitle } from "./catalog-utils.mjs";
import { escapeHtml, inquiry, jsonScript, languageAlternates, pageScripts } from "./page-templates.mjs";

const root = process.cwd();
const products = JSON.parse(await readFile(join(root, "data", "products.json"), "utf8"));
const categories = JSON.parse(await readFile(join(root, "data", "categories.json"), "utf8"));
const featuredData = JSON.parse(await readFile(join(root, "data", "featured-products.json"), "utf8"));
const productMap = new Map(products.map((product) => [product.id, product]));
const categoryMap = new Map(categories.map((category) => [category.slug, category]));
const featured = featuredData.products.map((item) => productMap.get(item.id)).filter(Boolean);

const categoryOrder = ["floor-springs", "door-closers", "panic-exit-devices", "glass-door-hardware", "pull-handles"];
const categoryCounts = Object.fromEntries(categoryOrder.map((slug) => [slug, featured.filter((product) => product.category === slug).length]));

function specBits(product, language = "en") {
  const specs = product.specifications;
  const bits = [];
  if (specs.capacity) bits.push(language === "ar" ? `حتى ${specs.capacity} كجم` : `Up to ${specs.capacity} kg`);
  if (specs.doorWidth) bits.push(specs.doorWidth);
  if (specs.material) bits.push(specs.material);
  if (specs.glassThickness) bits.push(specs.glassThickness);
  if (specs.openingAngle) bits.push(specs.openingAngle);
  return bits.slice(0, 3);
}

function englishCard(product) {
  const category = categoryMap.get(product.category);
  return `<article class="catalog-product-card is-featured reveal">
  <a class="catalog-product-media" href="../${product.category}/${product.slug}.html"><img src="../../${product.media.main}" width="900" height="900" loading="lazy" decoding="async" alt="${escapeHtml(product.title.en)}"></a>
  <div class="catalog-product-copy"><p class="featured-badge">FEATURED 40</p><p class="catalog-product-family">${escapeHtml(category.en)}</p><h2><a href="../${product.category}/${product.slug}.html">${escapeHtml(product.title.en)}</a></h2><p class="model-chip" dir="ltr">Model ${escapeHtml(product.model || product.source.sourceId)}</p><p class="catalog-spec-line" dir="ltr">${escapeHtml(specBits(product).join(" · ") || "Specifications on request")}</p><a class="text-link" href="../${product.category}/${product.slug}.html">View verified details <span aria-hidden="true">→</span></a></div>
</article>`;
}

const featuredCollection = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Apex Hardware Featured 40",
  description: "A focused shortlist of floor springs and complementary architectural door hardware selected from reviewed catalog data.",
  url: `${SITE_URL}/products/featured/`,
  mainEntity: {
    "@type": "ItemList",
    numberOfItems: featured.length,
    itemListElement: featured.map((product, index) => ({ "@type": "ListItem", position: index + 1, url: `${SITE_URL}/products/${product.category}/${product.slug}.html`, name: product.title.en })),
  },
};

const featuredHtml = `<!doctype html><html lang="en" dir="ltr"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover"><title>Featured 40 Architectural Door Hardware | Apex Hardware</title><meta name="description" content="A focused shortlist of 40 reviewed floor springs, door closers, panic exit devices and glass door hardware models for project enquiries."><link rel="canonical" href="${SITE_URL}/products/featured/">${languageAlternates(`${SITE_URL}/products/featured/`, `${SITE_URL}/ar/products/featured/`)}<link rel="icon" href="../../assets/favicon.svg" type="image/svg+xml"><link rel="stylesheet" href="../../assets/styles.css?v=20260801a"><script type="application/ld+json">${jsonScript(featuredCollection)}</script><script src="../../assets/app.js?v=20260731a" defer></script><script src="../../assets/catalog.js?v=20260731a" defer></script>${pageScripts("../../")}</head><body><div class="scroll-progress" aria-hidden="true"></div>
<header class="site-header"><nav class="nav-shell"><a class="brand brand-logo" href="../../" aria-label="Apex Hardware"><img class="brand-logo-image" src="../../assets/apex-hardware-logo.png" width="560" height="430" alt="Apex Hardware"></a><div class="desktop-nav"><a href="../">Products</a><a href="./" aria-current="page">Featured 40</a><a href="../floor-springs/">Floor Springs</a><a href="../../#contact">Contact</a></div><div class="nav-actions"><a class="button button-small" href="#contact">Get a quote</a><a class="text-link" href="../../ar/products/featured/" lang="ar" dir="rtl">العربية</a></div></nav></header>
<main class="subpage-main catalog-main"><section class="page-hero catalog-page-hero featured-hero"><div class="container reveal visible"><p class="eyebrow">APEX HARDWARE · PROJECT SHORTLIST</p><h1>Featured 40</h1><p>Forty distinct models, selected for clearer specifications and stronger project relevance. Floor springs lead the range, supported by door closers, panic exit devices and glass door hardware.</p><div class="proof-strip"><span><strong>${categoryCounts["floor-springs"]}</strong> floor springs</span><span><strong>${categoryCounts["door-closers"]}</strong> door closers</span><span><strong>${categoryCounts["panic-exit-devices"]}</strong> panic devices</span><span><strong>${categoryCounts["glass-door-hardware"] + categoryCounts["pull-handles"]}</strong> glass &amp; entrance hardware</span></div></div></section><section class="section"><div class="container"><div class="catalog-product-grid">${featured.map(englishCard).join("\n")}</div></div></section>${inquiry("../../", "Apex Hardware Featured 40 inquiry")}</main><footer class="site-footer"><div class="container footer-inner"><a class="brand brand-logo" href="../../"><img class="brand-logo-image" src="../../assets/apex-hardware-logo.png" width="560" height="430" alt="Apex Hardware"></a><p>Focused architectural hardware selection for projects worldwide.</p><p>© 2026 Apex Hardware</p></div></footer></body></html>`;
await mkdir(join(root, "products", "featured"), { recursive: true });
await writeFile(join(root, "products", "featured", "index.html"), featuredHtml);

function arabicHeader(prefix, current = "") {
  return `<header class="site-header"><nav class="nav-shell" aria-label="التنقل الرئيسي"><a class="brand brand-logo" href="${prefix}ar/" aria-label="Apex Hardware"><img class="brand-logo-image" src="${prefix}assets/apex-hardware-logo.png" width="560" height="430" alt="Apex Hardware"></a><div class="desktop-nav"><a href="${prefix}ar/products/">المنتجات</a><a href="${prefix}ar/products/featured/"${current === "featured" ? ' aria-current="page"' : ""}>أفضل 40 منتجاً</a><a href="${prefix}products/floor-springs/">Floor Springs</a><a href="#contact">طلب عرض سعر</a></div><div class="nav-actions"><a class="text-link" href="${prefix}">English</a><a class="button button-small" href="#contact">طلب عرض سعر</a></div></nav></header>`;
}

function arabicInquiry(prefix, subject) {
  return `<section class="section contact-section" id="contact"><div class="container"><div class="contact-card contact-card-form"><div class="contact-copy"><p class="eyebrow">استفسارات المشاريع</p><h2>أرسل متطلبات مشروعك.</h2><p>اذكر الموديل والكمية ووزن الباب وعرضه والوجهة. سنساعدك في تأكيد المواصفات قبل الطلب.</p><a class="text-link" href="mailto:985064609l@gmail.com?subject=${encodeURIComponent(subject)}">التواصل بالبريد الإلكتروني ↗</a></div><form class="inquiry-form"><input type="hidden" name="product" value="${escapeHtml(subject)}"><div class="form-grid"><label><span>الاسم *</span><input name="name" autocomplete="name" required></label><label><span>الشركة</span><input name="company" autocomplete="organization"></label><label><span>الدولة / المنطقة *</span><input name="country" autocomplete="country-name" required></label><label><span>الكمية المتوقعة</span><input name="quantity"></label></div><label><span>وزن الباب / عرضه</span><input name="door"></label><label><span>متطلبات المشروع *</span><textarea name="requirements" rows="4" required></textarea></label><button class="button" type="submit">إرسال عبر WhatsApp <span aria-hidden="true">←</span></button><p class="form-note">لا تُنقل بياناتك إلا عند فتح WhatsApp.</p><p class="form-status" aria-live="polite"></p></form></div></div></section><a class="floating-whatsapp" href="https://wa.me/8618027164672?text=${encodeURIComponent(subject)}" target="_blank" rel="noopener noreferrer"><span aria-hidden="true">WA</span><b>WhatsApp</b></a>`;
}

function arabicFooter(prefix) {
  return `<footer class="site-footer"><div class="container footer-inner"><a class="brand brand-logo" href="${prefix}ar/"><img class="brand-logo-image" src="${prefix}assets/apex-hardware-logo.png" width="560" height="430" alt="Apex Hardware"></a><p>حلول التحكم بالأبواب والتجهيزات المعمارية للمشاريع الدولية.</p><p>© 2026 Apex Hardware</p></div></footer>`;
}

function arabicCard(product, linkPrefix = "", rootPrefix = "../../") {
  const category = categoryMap.get(product.category);
  const title = `${localizedProductTitle(product, "ar")}${product.model ? ` — ${product.model}` : ""}`;
  return `<article class="catalog-product-card is-featured"><a class="catalog-product-media" href="${linkPrefix}${product.category}/${product.slug}.html"><img src="${rootPrefix}${product.media.main}" width="900" height="900" loading="lazy" decoding="async" alt="${escapeHtml(title)}"></a><div class="catalog-product-copy"><p class="featured-badge">ضمن أفضل 40 منتجاً</p><p class="catalog-product-family">${escapeHtml(localizedCategoryTitle(category, "ar"))}</p><h2><a href="${linkPrefix}${product.category}/${product.slug}.html">${escapeHtml(title)}</a></h2><p class="catalog-spec-line" dir="ltr">${escapeHtml(specBits(product, "ar").join(" · ") || "تُؤكد المواصفات عند الطلب")}</p><a class="text-link" href="${linkPrefix}${product.category}/${product.slug}.html">عرض التفاصيل الموثقة <span aria-hidden="true">←</span></a></div></article>`;
}

const arHome = `<!doctype html><html lang="ar" dir="rtl"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover"><title>أبيكس هاردوير | تجهيزات الأبواب المعمارية</title><meta name="description" content="مفصلات أرضية وغوالق أبواب وتجهيزات زجاج للمشاريع، مع مواصفات موثقة وطلب عرض سعر مباشر."><link rel="canonical" href="${SITE_URL}/ar/">${languageAlternates(`${SITE_URL}/`, `${SITE_URL}/ar/`)}<link rel="icon" href="../assets/favicon.svg" type="image/svg+xml"><link rel="stylesheet" href="../assets/styles.css?v=20260801a">${pageScripts("../")}</head><body>${arabicHeader("../")}<main><section class="home-hero home-hero-split"><div class="hero-copy reveal visible"><p class="eyebrow">APEX HARDWARE · تحكم دقيق بالأبواب</p><h1><span>تجهيزات أبواب</span><span>محددة لمشروعك.</span></h1><p class="hero-intro">ابدأ بوزن الباب وعرضه ونوع التطبيق. استعرض 40 موديلًا مختارًا ببيانات يمكن التحقق منها، ثم اطلب عرض سعر مباشر.</p><div class="button-row"><a class="button" href="products/featured/">استعرض أفضل 40 منتجاً ←</a><a class="button button-secondary" href="#contact">طلب عرض سعر</a></div><div class="hero-proof"><span>اختيار حسب وزن الباب</span><span>مواصفات خاصة بكل موديل</span><span>تواصل مباشر عبر WhatsApp</span></div></div><figure class="hero-product"><img src="../assets/images/floor-springs/floor-spring-series-hero.webp" width="1600" height="1000" alt="مفصلة أرضية هيدروليكية من Apex Hardware"></figure></section><section class="section trust-section"><div class="container"><header class="section-heading"><p class="eyebrow">معلومات يمكن التحقق منها</p><h2>دعم المواصفات من تشاوتشينغ، غوانغدونغ.</h2><p>لا نعرض ادعاءات غير موثقة عن الشهادات أو الطاقة الإنتاجية. نركز على بيانات المنتجات الموجودة فعليًا في الكتالوج والتواصل المباشر لتأكيد متطلبات المشروع.</p></header><div class="trust-grid"><article><strong>385</strong><span>سجل منتج تمت مراجعته</span></article><article><strong>12</strong><span>فئة من تجهيزات الأبواب والعمارة</span></article><article><strong>40</strong><span>موديلًا مختارًا كبداية عملية</span></article><article><strong>غوانغدونغ</strong><span>الموقع المدرج: حي غاوياو، تشاوتشينغ</span></article></div></div></section>${arabicInquiry("../", "استفسار مشروع Apex Hardware")}</main>${arabicFooter("../")}</body></html>`;
await mkdir(join(root, "ar"), { recursive: true });
await writeFile(join(root, "ar", "index.html"), arHome);

const arProducts = `<!doctype html><html lang="ar" dir="rtl"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover"><title>أفضل منتجات تجهيزات الأبواب | Apex Hardware</title><meta name="description" content="مجموعة عربية مستقلة من أفضل 40 موديلًا من المفصلات الأرضية وغوالق الأبواب وتجهيزات المخارج والزجاج."><link rel="canonical" href="${SITE_URL}/ar/products/">${languageAlternates(`${SITE_URL}/products/`, `${SITE_URL}/ar/products/`)}<link rel="stylesheet" href="../../assets/styles.css?v=20260801a">${pageScripts("../../")}</head><body>${arabicHeader("../../")}<main class="subpage-main"><section class="page-hero catalog-page-hero"><div class="container"><p class="eyebrow">APEX HARDWARE · كتالوج عربي</p><h1>المنتجات المختارة</h1><p>مجموعة مركزة للمشاريع الدولية، تقودها المفصلات الأرضية وتكملها غوالق الأبواب وأجهزة مخارج الطوارئ وتجهيزات الزجاج.</p><a class="button" href="featured/">عرض أفضل 40 منتجاً</a></div></section><section class="section"><div class="container catalog-product-grid">${featured.map((product) => arabicCard(product)).join("\n")}</div></section>${arabicInquiry("../../", "استفسار عن منتجات Apex Hardware")}</main>${arabicFooter("../../")}</body></html>`;
await mkdir(join(root, "ar", "products"), { recursive: true });
await writeFile(join(root, "ar", "products", "index.html"), arProducts);

const arFeatured = `<!doctype html><html lang="ar" dir="rtl"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover"><title>أفضل 40 منتجاً لتجهيزات الأبواب | Apex Hardware</title><meta name="description" content="أربعون موديلًا مميزًا من المفصلات الأرضية وغوالق الأبواب وتجهيزات المخارج والزجاج، مختارة من بيانات الكتالوج المراجع."><link rel="canonical" href="${SITE_URL}/ar/products/featured/">${languageAlternates(`${SITE_URL}/products/featured/`, `${SITE_URL}/ar/products/featured/`)}<link rel="stylesheet" href="../../../assets/styles.css?v=20260801a">${pageScripts("../../../")}</head><body>${arabicHeader("../../../", "featured")}<main class="subpage-main"><section class="page-hero catalog-page-hero featured-hero"><div class="container"><p class="eyebrow">APEX HARDWARE · قائمة المشاريع المختارة</p><h1>أفضل 40 منتجاً</h1><p>موديلات مميزة ومنفصلة، اختيرت لوضوح مواصفاتها وصلتها بالمشاريع. تتصدر المفصلات الأرضية المجموعة، وتكملها غوالق الأبواب وأجهزة مخارج الطوارئ وتجهيزات الزجاج.</p><div class="proof-strip"><span><strong>${categoryCounts["floor-springs"]}</strong> مفصلة أرضية</span><span><strong>${categoryCounts["door-closers"]}</strong> غوالق أبواب</span><span><strong>${categoryCounts["panic-exit-devices"]}</strong> أجهزة طوارئ</span><span><strong>${categoryCounts["glass-door-hardware"] + categoryCounts["pull-handles"]}</strong> تجهيزات زجاج ومداخل</span></div></div></section><section class="section"><div class="container catalog-product-grid">${featured.map((product) => arabicCard(product, "../", "../../../")).join("\n")}</div></section>${arabicInquiry("../../../", "استفسار عن أفضل 40 منتجاً من Apex Hardware")}</main>${arabicFooter("../../../")}</body></html>`;
await mkdir(join(root, "ar", "products", "featured"), { recursive: true });
await writeFile(join(root, "ar", "products", "featured", "index.html"), arFeatured);

for (const product of featured) {
  const category = categoryMap.get(product.category);
  const specs = product.specifications;
  const title = `${localizedProductTitle(product, "ar")}${product.model ? ` — ${product.model}` : ""}`;
  const enUrl = `${SITE_URL}/products/${product.category}/${product.slug}.html`;
  const arUrl = `${SITE_URL}/ar/products/${product.category}/${product.slug}.html`;
  const rows = [
    ["الموديل", product.model || product.source.sourceId],
    ["أقصى وزن للباب", specs.capacity ? `${specs.capacity} kg` : "يُؤكد عند الطلب"],
    ["عرض الباب", specs.doorWidth || "يُؤكد عند الطلب"],
    ["الأبعاد", specs.dimensions || "يُؤكد عند الطلب"],
    ["المادة", specs.material || "يُؤكد عند الطلب"],
    ["التشطيب", specs.finish || "يُؤكد عند الطلب"],
    ["زاوية الفتح", specs.openingAngle || "يُؤكد عند الطلب"],
    ["سماكة الزجاج", specs.glassThickness || "يُؤكد عند الطلب"],
  ];
  const ld = { "@context": "https://schema.org", "@type": "Product", name: title, sku: product.model || product.source.sourceId, brand: { "@type": "Brand", name: "Apex Hardware" }, category: localizedCategoryTitle(category, "ar"), image: `${SITE_URL}/${product.media.main}`, url: arUrl };
  const html = `<!doctype html><html lang="ar" dir="rtl"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover"><title>${escapeHtml(title)} | Apex Hardware</title><meta name="description" content="${escapeHtml(title)} مع عرض البيانات الموثقة المتاحة وطلب تأكيد متطلبات المشروع."><link rel="canonical" href="${arUrl}">${languageAlternates(enUrl, arUrl)}<link rel="stylesheet" href="../../../assets/styles.css?v=20260801a"><script type="application/ld+json">${jsonScript(ld)}</script>${pageScripts("../../../")}</head><body data-page-type="product">${arabicHeader("../../../", "featured")}<main class="subpage-main"><section class="product-detail-hero catalog-detail-hero"><div class="container"><a class="back-link" href="../featured/">← العودة إلى أفضل 40 منتجاً</a><div class="detail-hero-grid"><div class="detail-copy"><p class="eyebrow">${escapeHtml(localizedCategoryTitle(category, "ar"))}</p><p class="featured-badge">ضمن أفضل 40 منتجاً</p><h1>${escapeHtml(title)}</h1><p>اختير هذا السجل لأن هوية الموديل وبيانات المواصفات المتاحة فيه أوضح من البدائل المكررة في الكتالوج.</p></div><figure class="detail-media"><img src="../../../${product.media.main}" width="900" height="900" alt="${escapeHtml(title)}"></figure></div></div></section><section class="detail-section detail-section-alt"><div class="container"><h2>المواصفات الفنية المتاحة</h2><dl class="specification-list">${rows.map(([label, value]) => `<div><dt>${label}</dt><dd dir="ltr">${escapeHtml(value)}</dd></div>`).join("")}</dl><p class="data-confidence-note">نعرض فقط البيانات الموجودة في السجل المراجع. يجب تأكيد أي حقل ناقص ومدى ملاءمة المنتج للمشروع قبل الطلب.</p></div></section>${arabicInquiry("../../../", title)}</main>${arabicFooter("../../../")}</body></html>`;
  const dir = join(root, "ar", "products", product.category);
  await mkdir(dir, { recursive: true });
  await writeFile(join(dir, `${product.slug}.html`), html);
}

const urls = [
  `${SITE_URL}/`, `${SITE_URL}/products/`, `${SITE_URL}/products/featured/`,
  ...categories.map((category) => `${SITE_URL}/products/${category.slug}/${category.slug === "floor-springs" ? "" : ""}`),
  ...products.map((product) => `${SITE_URL}/products/${product.category}/${product.slug}.html`),
  `${SITE_URL}/ar/`, `${SITE_URL}/ar/products/`, `${SITE_URL}/ar/products/featured/`,
  ...featured.map((product) => `${SITE_URL}/ar/products/${product.category}/${product.slug}.html`),
];
const uniqueUrls = [...new Set(urls)];
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${uniqueUrls.map((url) => `  <url><loc>${url.replaceAll("&", "&amp;")}</loc></url>`).join("\n")}\n</urlset>\n`;
await writeFile(join(root, "sitemap.xml"), sitemap);
await writeFile(join(root, "robots.txt"), `User-agent: *\nAllow: /\nDisallow: /data/\nDisallow: /docs/\nDisallow: /scripts/\nDisallow: /.github/\n\nSitemap: ${SITE_URL}/sitemap.xml\n`);

console.log(JSON.stringify({ featuredPage: 1, arabicPages: featured.length + 3, sitemapUrls: uniqueUrls.length }, null, 2));
