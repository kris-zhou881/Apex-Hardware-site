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

function arabicSpecValue(value = "") {
  return String(value)
    .replace(/stainless steel/gi, "فولاذ مقاوم للصدأ")
    .replace(/magnesium aluminium alloy|magnesium aluminum alloy/gi, "سبائك المغنيسيوم والألومنيوم")
    .replace(/aluminium alloy|aluminum alloy/gi, "سبائك الألومنيوم")
    .replace(/zinc alloy/gi, "سبائك الزنك")
    .replace(/carbon steel/gi, "فولاذ كربوني")
    .replace(/cast iron/gi, "حديد مصبوب")
    .replace(/stoving finish/gi, "طلاء حراري")
    .replace(/matt black/gi, "أسود مطفي")
    .replace(/other colors/gi, "ألوان أخرى")
    .replace(/customized/gi, "مخصص")
    .replace(/polish(?:ed)?/gi, "مصقول")
    .replace(/\bsatin\b/gi, "ساتان")
    .replace(/\biron\b/gi, "حديد")
    .replace(/\bbrass\b/gi, "نحاس")
    .replace(/\bglass\b/gi, "زجاج")
    .replaceAll("镁铝合金", "سبائك المغنيسيوم والألومنيوم")
    .replaceAll("黑色", "أسود")
    .replaceAll("金色", "ذهبي");
}

function specBits(product, language = "en") {
  const specs = product.specifications;
  const bits = [];
  if (specs.capacity) bits.push(language === "ar" ? `حتى ${specs.capacity} كجم` : `Up to ${specs.capacity} kg`);
  if (specs.doorWidth) bits.push(specs.doorWidth);
  if (specs.material) bits.push(language === "ar" ? arabicSpecValue(specs.material) : specs.material);
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
<main class="subpage-main catalog-main"><section class="page-hero catalog-page-hero featured-hero"><div class="container reveal visible"><p class="eyebrow">APEX HARDWARE · PROJECT SHORTLIST</p><h1>Featured 40</h1><p>Forty distinct models, selected for clearer specifications and stronger project relevance. Floor springs lead the range, supported by door closers, panic exit devices and glass door hardware.</p><div class="proof-strip"><a href="../floor-springs/"><strong>${categoryCounts["floor-springs"]}</strong> floor springs</a><a href="../door-closers/"><strong>${categoryCounts["door-closers"]}</strong> door closers</a><a href="../panic-exit-devices/"><strong>${categoryCounts["panic-exit-devices"]}</strong> panic devices</a><a href="../glass-door-hardware/"><strong>${categoryCounts["glass-door-hardware"]}</strong> glass door hardware</a><a href="../pull-handles/"><strong>${categoryCounts["pull-handles"]}</strong> pull handles</a></div></div></section><section class="section"><div class="container"><div class="catalog-product-grid">${featured.map(englishCard).join("\n")}</div></div></section>${inquiry("../../", "Apex Hardware Featured 40 inquiry")}</main><footer class="site-footer"><div class="container footer-inner"><a class="brand brand-logo" href="../../"><img class="brand-logo-image" src="../../assets/apex-hardware-logo.png" width="560" height="430" alt="Apex Hardware"></a><p>Focused architectural hardware selection for projects worldwide.</p><p>© 2026 Apex Hardware</p></div></footer></body></html>`;
await mkdir(join(root, "products", "featured"), { recursive: true });
await writeFile(join(root, "products", "featured", "index.html"), featuredHtml);

function arabicHeader(prefix, current = "") {
  return `<header class="site-header"><nav class="nav-shell" aria-label="التنقل الرئيسي"><a class="brand brand-logo" href="${prefix}ar/" aria-label="Apex Hardware"><img class="brand-logo-image" src="${prefix}assets/apex-hardware-logo.png" width="560" height="430" alt="Apex Hardware"></a><div class="desktop-nav"><a href="${prefix}ar/">الرئيسية</a><a href="${prefix}ar/products/">المنتجات</a><a href="${prefix}ar/products/featured/"${current === "featured" ? ' aria-current="page"' : ""}>أفضل 40 منتجاً</a><a href="${prefix}ar/#products">فئات المنتجات</a><a href="#contact">طلب عرض سعر</a></div><div class="nav-actions"><a class="text-link" href="${prefix}" lang="en" dir="ltr">English</a><a class="button button-small" href="#contact">طلب عرض سعر</a></div></nav></header>`;
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

function arabicFeaturedGroups() {
  return categoryOrder.map((slug) => {
    const category = categoryMap.get(slug);
    const categoryProducts = featured.filter((product) => product.category === slug);
    return `<section class="featured-category-group" id="${slug}"><header class="section-heading"><p class="eyebrow">${categoryProducts.length} موديلات مختارة</p><h2>${escapeHtml(localizedCategoryTitle(category, "ar"))}</h2></header><div class="catalog-product-grid">${categoryProducts.map((product) => arabicCard(product, "../", "../../../")).join("\n")}</div></section>`;
  }).join("\n");
}

const arHome = `<!doctype html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">
  <title>أبيكس هاردوير | تجهيزات الأبواب المعمارية</title>
  <meta name="description" content="مفصلات أرضية وغوالق أبواب وتجهيزات زجاج للمشاريع، مع مواصفات موثقة وطلب عرض سعر مباشر.">
  <link rel="canonical" href="${SITE_URL}/ar/">
  ${languageAlternates(`${SITE_URL}/`, `${SITE_URL}/ar/`)}
  <link rel="icon" href="../assets/favicon.svg" type="image/svg+xml">
  <link rel="stylesheet" href="../assets/styles.css?v=20260801a">
  ${pageScripts("../")}
</head>
<body>
${arabicHeader("../")}
<main>
  <section class="home-hero home-hero-split" aria-labelledby="ar-hero-title">
    <div class="hero-copy reveal visible">
      <p class="eyebrow">APEX HARDWARE · تحكم دقيق بالأبواب</p>
      <h1 id="ar-hero-title"><span>تجهيزات أبواب.</span><span>محددة لمشروعك.</span></h1>
      <p class="hero-intro">ابدأ بوزن الباب وعرضه ونوع التطبيق. استعرض 40 موديلًا مميزًا وغير مكرر ببيانات يمكن التحقق منها، ثم أرسل استفسار مشروع واضحًا.</p>
      <div class="button-row"><a class="button" href="products/featured/">استعرض أفضل 40 منتجاً ←</a><a class="button button-secondary" href="#contact">أرسل متطلبات المشروع</a></div>
      <div class="hero-proof"><span>اختيار حسب وزن الباب</span><span>مواصفات خاصة بكل موديل</span><span>عرض سعر مباشر عبر WhatsApp</span></div>
    </div>
    <figure class="hero-product"><img src="../assets/images/floor-springs/floor-spring-series-hero.webp" width="1600" height="1000" alt="مفصلة أرضية هيدروليكية من Apex Hardware"></figure>
  </section>

  <section class="section trust-section" aria-labelledby="ar-trust-title">
    <div class="container">
      <header class="section-heading"><p class="eyebrow">كتالوج قابل للتحقق ودعم محلي</p><h2 id="ar-trust-title">دعم المواصفات من تشاوتشينغ، غوانغدونغ.</h2><p>نستخدم المعلومات الموثقة في الكتالوج المراجع فقط، من دون ادعاءات غير مؤكدة عن الشهادات أو الطاقة الإنتاجية أو شعارات العملاء.</p></header>
      <div class="trust-grid"><article><strong>385</strong><span>سجل منتج تمت مراجعته</span></article><article><strong>12</strong><span>فئة من التجهيزات المعمارية</span></article><article><strong>40</strong><span>موديلًا مميزًا وغير مكرر</span></article><article><strong>غوانغدونغ</strong><span>الموقع المدرج في حي غاوياو، تشاوتشينغ</span></article></div>
    </div>
  </section>

  <section class="section home-products-section" id="products" aria-labelledby="ar-products-title">
    <div class="container">
      <header class="section-heading"><p class="eyebrow">APEX HARDWARE · أنظمة المنتجات</p><h2 id="ar-products-title">فئات المنتجات</h2><p>اختر فئة المنتج أولًا، ثم طابق الوزن والعرض والمادة مع متطلبات التطبيق.</p></header>
      <div class="home-products-grid">
        <a class="home-product-family" href="products/featured/#door-closers"><img src="../assets/images/products/door-closers/hydraulic-door-closer-1601710695032/main.avif" width="896" height="896" loading="lazy" decoding="async" alt="غالق باب هيدروليكي من Apex Hardware"><span>غوالق الأبواب</span><i aria-hidden="true">←</i></a>
        <a class="home-product-family" href="products/featured/#glass-door-hardware"><img src="../assets/images/products/shower-hardware/stainless-steel-shower-door-hinge-1600991360730/main.avif" width="896" height="896" loading="lazy" decoding="async" alt="تجهيزات زجاج من Apex Hardware"><span>تجهيزات الأبواب الزجاجية</span><i aria-hidden="true">←</i></a>
        <a class="home-product-family" href="products/featured/#pull-handles"><img src="../assets/images/products/pull-handles/pull-handle-62105283156/main.avif" width="896" height="896" loading="lazy" decoding="async" alt="مقبض سحب من Apex Hardware"><span>مقابض السحب</span><i aria-hidden="true">←</i></a>
      </div>
      <a class="text-link centered-link" href="products/">عرض المنتجات العربية <span aria-hidden="true">←</span></a>
    </div>
  </section>

  <section class="section shortlist-section" id="engineering" aria-labelledby="ar-selection-title">
    <div class="container">
      <header class="section-heading"><p class="eyebrow">مطابقة أوضح للمشروع</p><h2 id="ar-selection-title">من متطلبات الباب إلى الموديل المناسب.</h2><p>نرتب المعلومات بنفس التسلسل في الصفحات العربية والإنجليزية لتسهيل المقارنة وتقليل الحقول الناقصة.</p></header>
      <div class="shortlist-grid"><article><strong>01</strong><span>حدد وزن الباب وعرضه</span></article><article><strong>02</strong><span>اختر نوع الباب والاستخدام</span></article><article><strong>03</strong><span>راجع مواصفات الموديل المتاحة</span></article><article><strong>04</strong><span>أكد الكمية والتشطيب والوجهة</span></article></div>
    </div>
  </section>

  <section class="section oem-section" id="quality" aria-labelledby="ar-oem-title">
    <div class="container"><div class="oem-card"><div><p class="eyebrow">OEM / ODM</p><h2 id="ar-oem-title">دعم متطلبات مشروعك.</h2></div><div><p>ناقش اختيار الموديل والتشطيب والكمية ومتطلبات التسليم مباشرة مع Apex Hardware.</p><a class="text-link" href="#contact">اطلب عرض سعر <span aria-hidden="true">←</span></a></div></div></div>
  </section>

  ${arabicInquiry("../", "استفسار مشروع Apex Hardware")}

  <section class="section location-section" id="location" aria-labelledby="ar-location-title">
    <div class="container location-layout">
      <div class="location-copy"><p class="eyebrow">APEX HARDWARE · غوانغدونغ، الصين</p><h2 id="ar-location-title">اعثر علينا في تشاوتشينغ.</h2><address><p>على بُعد 240 مترًا شمال غرب تقاطع شارع تشوجيانغ وشارع جينشا، حي غاوياو، تشاوتشينغ، غوانغدونغ، الصين</p></address><a class="button button-secondary" href="https://www.google.com/maps/search/?api=1&amp;query=%E5%B9%BF%E4%B8%9C%E7%9C%81%E8%82%87%E5%BA%86%E5%B8%82%E9%AB%98%E8%A6%81%E5%8C%BA%E7%8F%A0%E6%B1%9F%E5%A4%A7%E9%81%93%E4%B8%8E%E9%87%91%E6%B2%99%E5%A4%A7%E9%81%93%E4%BA%A4%E5%8F%89%E5%8F%A3%E8%A5%BF%E5%8C%97240%E7%B1%B3" target="_blank" rel="noopener noreferrer">عرض على خرائط Google ↗</a><dl class="location-contact"><div><dt>البريد الإلكتروني</dt><dd><a href="mailto:985064609l@gmail.com">985064609l@gmail.com</a></dd></div><div><dt>WhatsApp</dt><dd><a href="https://wa.me/8618027164672" target="_blank" rel="noopener noreferrer"><bdi>+86 180 2716 4672</bdi></a></dd></div></dl></div>
      <div class="map-wrap"><iframe title="موقع Apex Hardware في تشاوتشينغ، غوانغدونغ" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps?q=%E5%B9%BF%E4%B8%9C%E7%9C%81%E8%82%87%E5%BA%86%E5%B8%82%E9%AB%98%E8%A6%81%E5%8C%BA%E7%8F%A0%E6%B1%9F%E5%A4%A7%E9%81%93%E4%B8%8E%E9%87%91%E6%B2%99%E5%A4%A7%E9%81%93%E4%BA%A4%E5%8F%89%E5%8F%A3%E8%A5%BF%E5%8C%97240%E7%B1%B3&amp;output=embed"></iframe><div class="map-label" aria-hidden="true"><strong>APEX HARDWARE</strong><span>حي غاوياو · تشاوتشينغ</span></div></div>
    </div>
  </section>
</main>
${arabicFooter("../")}
</body>
</html>`;
await mkdir(join(root, "ar"), { recursive: true });
await writeFile(join(root, "ar", "index.html"), arHome);

const arProducts = `<!doctype html><html lang="ar" dir="rtl"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover"><title>أفضل منتجات تجهيزات الأبواب | Apex Hardware</title><meta name="description" content="مجموعة عربية مستقلة من أفضل 40 موديلًا من المفصلات الأرضية وغوالق الأبواب وتجهيزات المخارج والزجاج."><link rel="canonical" href="${SITE_URL}/ar/products/">${languageAlternates(`${SITE_URL}/products/`, `${SITE_URL}/ar/products/`)}<link rel="stylesheet" href="../../assets/styles.css?v=20260801a">${pageScripts("../../")}</head><body>${arabicHeader("../../")}<main class="subpage-main"><section class="page-hero catalog-page-hero"><div class="container"><p class="eyebrow">APEX HARDWARE · كتالوج عربي</p><h1>المنتجات المختارة</h1><p>مجموعة مركزة للمشاريع الدولية، تقودها المفصلات الأرضية وتكملها غوالق الأبواب وأجهزة مخارج الطوارئ وتجهيزات الزجاج.</p><a class="button" href="featured/">عرض أفضل 40 منتجاً</a></div></section><section class="section"><div class="container catalog-product-grid">${featured.map((product) => arabicCard(product)).join("\n")}</div></section>${arabicInquiry("../../", "استفسار عن منتجات Apex Hardware")}</main>${arabicFooter("../../")}</body></html>`;
await mkdir(join(root, "ar", "products"), { recursive: true });
await writeFile(join(root, "ar", "products", "index.html"), arProducts);

const arFeatured = `<!doctype html>
<html lang="ar" dir="rtl">
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover"><title>أفضل 40 منتجاً لتجهيزات الأبواب | Apex Hardware</title><meta name="description" content="أربعون موديلًا مميزًا من المفصلات الأرضية وغوالق الأبواب وتجهيزات المخارج والزجاج، مختارة من بيانات الكتالوج المراجع."><link rel="canonical" href="${SITE_URL}/ar/products/featured/">${languageAlternates(`${SITE_URL}/products/featured/`, `${SITE_URL}/ar/products/featured/`)}<link rel="stylesheet" href="../../../assets/styles.css?v=20260801a">${pageScripts("../../../")}</head>
<body>${arabicHeader("../../../", "featured")}
<main class="subpage-main"><section class="page-hero catalog-page-hero featured-hero"><div class="container"><p class="eyebrow">APEX HARDWARE · قائمة المشاريع المختارة</p><h1>أفضل 40 منتجاً</h1><p>أربعون موديلًا مميزًا وغير مكرر، مرتبة حسب الفئة لتطابق طريقة الاستعراض في النسخة الإنجليزية مع بقاء التفاصيل والاستفسار باللغة العربية.</p><div class="proof-strip"><a href="#floor-springs"><strong>${categoryCounts["floor-springs"]}</strong> مفصلة أرضية</a><a href="#door-closers"><strong>${categoryCounts["door-closers"]}</strong> غوالق أبواب</a><a href="#panic-exit-devices"><strong>${categoryCounts["panic-exit-devices"]}</strong> أجهزة طوارئ</a><a href="#glass-door-hardware"><strong>${categoryCounts["glass-door-hardware"]}</strong> تجهيزات زجاج</a><a href="#pull-handles"><strong>${categoryCounts["pull-handles"]}</strong> مقابض سحب</a></div></div></section><div class="section"><div class="container featured-category-list">${arabicFeaturedGroups()}</div></div>${arabicInquiry("../../../", "استفسار عن أفضل 40 منتجاً من Apex Hardware")}</main>${arabicFooter("../../../")}</body>
</html>`;
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
    ["عرض الباب", arabicSpecValue(specs.doorWidth) || "يُؤكد عند الطلب"],
    ["الأبعاد", arabicSpecValue(specs.dimensions) || "يُؤكد عند الطلب"],
    ["المادة", arabicSpecValue(specs.material) || "يُؤكد عند الطلب"],
    ["التشطيب", arabicSpecValue(specs.finish) || "يُؤكد عند الطلب"],
    ["زاوية الفتح", arabicSpecValue(specs.openingAngle) || "يُؤكد عند الطلب"],
    ["سماكة الزجاج", arabicSpecValue(specs.glassThickness) || "يُؤكد عند الطلب"],
  ];
  const ld = { "@context": "https://schema.org", "@type": "Product", name: title, sku: product.model || product.source.sourceId, brand: { "@type": "Brand", name: "Apex Hardware" }, category: localizedCategoryTitle(category, "ar"), image: `${SITE_URL}/${product.media.main}`, url: arUrl };
  const html = `<!doctype html><html lang="ar" dir="rtl"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover"><title>${escapeHtml(title)} | Apex Hardware</title><meta name="description" content="${escapeHtml(title)} مع عرض البيانات الموثقة المتاحة وطلب تأكيد متطلبات المشروع."><link rel="canonical" href="${arUrl}">${languageAlternates(enUrl, arUrl)}<link rel="stylesheet" href="../../../assets/styles.css?v=20260801a"><script type="application/ld+json">${jsonScript(ld)}</script>${pageScripts("../../../")}</head><body data-page-type="product">${arabicHeader("../../../", "featured")}<main class="subpage-main"><section class="product-detail-hero catalog-detail-hero"><div class="container"><a class="back-link" href="../featured/">← العودة إلى أفضل 40 منتجاً</a><div class="detail-hero-grid"><div class="detail-copy"><p class="eyebrow">${escapeHtml(localizedCategoryTitle(category, "ar"))}</p><p class="featured-badge">ضمن أفضل 40 منتجاً</p><h1>${escapeHtml(title)}</h1><p>اختير هذا السجل لأن هوية الموديل وبيانات المواصفات المتاحة فيه أوضح من البدائل المكررة في الكتالوج.</p></div><figure class="detail-media"><img src="../../../${product.media.main}" width="900" height="900" alt="${escapeHtml(title)}"></figure></div></div></section><section class="detail-section detail-section-alt"><div class="container"><h2>المواصفات الفنية المتاحة</h2><dl class="specification-list">${rows.map(([label, value]) => `<div><dt>${label}</dt><dd dir="auto">${escapeHtml(value)}</dd></div>`).join("")}</dl><p class="data-confidence-note">نعرض فقط البيانات الموجودة في السجل المراجع. يجب تأكيد أي حقل ناقص ومدى ملاءمة المنتج للمشروع قبل الطلب.</p></div></section>${arabicInquiry("../../../", title)}</main>${arabicFooter("../../../")}</body></html>`;
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
