(() => {
  "use strict";

  const slug = document.body.dataset.product;
  const product = (window.APEX_PRODUCTS || []).find((item) => item.slug === slug);
  if (!product) return;

  document.querySelectorAll("[data-v]").forEach((element) => {
    const field = element.dataset.v;
    if (!(field in product)) return;
    if (element instanceof HTMLImageElement && field === "detailImage") {
      element.src = `../assets/images/${product.detailImage}`;
      element.alt = `Apex Hardware hydraulic floor spring for doors ${product.weightLabel.toLowerCase()}`;
      return;
    }
    element.textContent = product[field];
  });

  document.querySelectorAll("[data-model-label]").forEach((element) => {
    element.textContent = `Model: ${product.model}`;
  });

  const netWeightRow = document.querySelector("[data-net-weight-row]");
  if (netWeightRow && product.netWeight === "—") {
    netWeightRow.hidden = true;
  }

  const subject = encodeURIComponent(`Floor spring inquiry — ${product.model}`);
  const body = encodeURIComponent(
    `Hello Apex Hardware,\n\nI am interested in ${product.model} (${product.weightLabel}).\n\nDoor weight:\nDoor width:\nApplication:\n\nPlease provide a quotation.`,
  );
  const emailLink = document.querySelector("[data-email-inquiry]");
  if (emailLink) {
    emailLink.href = `mailto:985064609l@gmail.com?subject=${subject}&body=${body}`;
  }

  const whatsappText = encodeURIComponent(
    `Hello Apex Hardware, I am interested in ${product.model}.`,
  );
  const whatsappLink = document.querySelector("[data-whatsapp-inquiry]");
  if (whatsappLink) {
    whatsappLink.href = `https://wa.me/8618027164672?text=${whatsappText}`;
  }
})();
