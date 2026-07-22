function getCurrentProduct() {
  const products = Array.isArray(window.APEX_PRODUCTS)
    ? window.APEX_PRODUCTS
    : [];
  const slug = document.body.dataset.product;
  return products.find((product) => product.slug === slug) || products[0];
}

function updateMeta(selector, value) {
  const element = document.querySelector(selector);
  if (element) element.setAttribute("content", value);
}

document.addEventListener("DOMContentLoaded", () => {
  const product = getCurrentProduct();
  if (!product) return;

  const description = `${product.model} hydraulic floor spring for ${product.weight} maximum door weight and ${product.width} recommended door width. Contact Apex Hardware for specifications and quotation.`;
  document.title = `${product.model} Hydraulic Floor Spring | Apex Hardware`;
  updateMeta('meta[name="description"]', description);
  updateMeta('meta[property="og:title"]', `${product.model} | Apex Hardware`);
  updateMeta('meta[property="og:description"]', description);

  document.querySelectorAll("[data-v]").forEach((element) => {
    const key = element.dataset.v;
    if (key === "image") {
      element.src = `../assets/images/${product.image}`;
      element.alt = `${product.model} hydraulic floor spring`;
      return;
    }
    if (Object.hasOwn(product, key)) element.textContent = product[key];
  });

  const mailLink = document.querySelector("#mail");
  if (mailLink) {
    mailLink.href = `mailto:985064609l@gmail.com?subject=${encodeURIComponent(`${product.model} floor spring inquiry`)}`;
  }

  const whatsappLink = document.querySelector("#wa");
  if (whatsappLink) {
    const message = `Hello Apex Hardware, I am interested in ${product.model}.`;
    whatsappLink.href = `https://wa.me/8618027164672?text=${encodeURIComponent(message)}`;
  }
});
