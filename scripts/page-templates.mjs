import { SITE_URL } from "./catalog-utils.mjs";

export function escapeHtml(value = "") {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

export function jsonScript(value) {
  return JSON.stringify(value).replaceAll("<", "\\u003c");
}

export function header(rootPrefix, current = "") {
  const productsCurrent = current === "products" ? ' aria-current="page"' : "";
  const floorCurrent = current === "floor-springs" ? ' aria-current="page"' : "";
  return `<header class="site-header">
  <nav class="nav-shell" aria-label="Primary navigation">
    <a class="brand brand-logo" href="${rootPrefix}" aria-label="Apex Hardware"><img class="brand-logo-image" src="${rootPrefix}assets/apex-hardware-logo.png" width="560" height="430" alt="Apex Hardware"></a>
    <div class="desktop-nav">
      <a href="${rootPrefix}products/"${productsCurrent} data-t="navProducts">Products</a>
      <a href="${rootPrefix}products/floor-springs/"${floorCurrent} data-t="navFloorSprings">Floor Springs</a>
      <a href="${rootPrefix}#engineering" data-t="engineering">Engineering</a>
      <a href="${rootPrefix}#quality" data-t="quality">Quality</a>
      <a href="${rootPrefix}#location" data-t="location">Location</a>
    </div>
    <div class="nav-actions">
      <label class="language-wrap">
        <span class="sr-only" data-t="selectLanguage">Select language</span>
        <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"></circle><path d="M3 12h18M12 3c2.5 2.5 3.8 5.5 3.8 9s-1.3 6.5-3.8 9c-2.5-2.5-3.8-5.5-3.8-9S9.5 5.5 12 3Z"></path></svg>
        <select id="language" aria-label="Select language"></select>
      </label>
      <a class="button button-small desktop-quote" href="${rootPrefix}#contact"><span data-t="quote">Get a quote</span></a>
      <button class="menu-toggle" id="menu-toggle" type="button" aria-expanded="false" aria-controls="mobile-menu" aria-label="Open navigation"><span></span><span></span></button>
    </div>
    <div class="mobile-menu" id="mobile-menu" hidden>
      <a href="${rootPrefix}products/" data-t="navProducts">Products</a>
      <a href="${rootPrefix}products/floor-springs/" data-t="navFloorSprings">Floor Springs</a>
      <a href="${rootPrefix}#engineering" data-t="engineering">Engineering</a>
      <a href="${rootPrefix}#quality" data-t="quality">Quality</a>
      <a href="${rootPrefix}#location" data-t="location">Location</a>
      <a class="button" href="${rootPrefix}#contact"><span data-t="quote">Get a quote</span></a>
    </div>
  </nav>
</header>`;
}

export function footer(rootPrefix) {
  return `<footer class="site-footer">
  <div class="container footer-inner">
    <a class="brand brand-logo" href="${rootPrefix}" aria-label="Apex Hardware"><img class="brand-logo-image" src="${rootPrefix}assets/apex-hardware-logo.png" width="560" height="430" alt="Apex Hardware"></a>
    <p>Architectural hardware for projects worldwide.</p>
    <p>© 2026 Apex Hardware</p>
  </div>
</footer>`;
}

export function inquiry(rootPrefix, subject = "Product inquiry") {
  const encodedSubject = encodeURIComponent(subject);
  const whatsappText = encodeURIComponent(`Hello Apex Hardware, I am interested in ${subject}.`);
  return `<section class="section contact-section catalog-contact" id="contact" aria-labelledby="catalog-contact-title">
  <div class="container">
    <div class="contact-card reveal">
      <p class="eyebrow" data-catalog-text="inquiryEyebrow">PROJECT INQUIRIES</p>
      <h2 id="catalog-contact-title" data-catalog-text="inquiryTitle">Build the right specification.</h2>
      <p data-catalog-text="inquiryText">Share the application, dimensions and project requirements. We will help confirm the right product.</p>
      <div class="button-row">
        <a class="button" href="mailto:985064609l@gmail.com?subject=${encodedSubject}"><span data-catalog-text="email">Email us</span><span aria-hidden="true">↗</span></a>
        <a class="button button-secondary" href="https://wa.me/8618027164672?text=${whatsappText}" target="_blank" rel="noopener noreferrer"><span>WhatsApp</span><span aria-hidden="true">↗</span></a>
      </div>
    </div>
  </div>
</section>`;
}

export function productJsonLd(product, category) {
  const data = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.title.en,
    image: product.media.main ? `${SITE_URL}/${product.media.main}` : undefined,
    sku: product.model || product.source.sourceId,
    brand: { "@type": "Brand", name: "Apex Hardware" },
    category: category.en,
    url: `${SITE_URL}/products/${category.slug}/${product.slug}.html`,
    additionalProperty: [],
  };
  const specs = product.specifications;
  const propertyMap = [
    ["Maximum door weight", specs.capacity ? `${specs.capacity} kg` : ""],
    ["Door width", specs.doorWidth],
    ["Dimensions", specs.dimensions],
    ["Net weight", specs.netWeight],
    ["Material", specs.material],
    ["Finish", specs.finish],
    ["Opening angle", specs.openingAngle],
    ["Glass thickness", specs.glassThickness],
    ["Hold-open function", specs.holdOpen === null ? "" : specs.holdOpen ? "Yes" : "No"],
    ...Object.entries(specs.otherVerifiedFields || {}),
  ];
  propertyMap.forEach(([name, value]) => {
    if (value) data.additionalProperty.push({ "@type": "PropertyValue", name, value });
  });
  if (!data.additionalProperty.length) delete data.additionalProperty;
  return data;
}

export function breadcrumbs(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
