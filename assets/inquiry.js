(() => {
  "use strict";

  const whatsappNumber = "8618027164672";
  const socialLinks = [
    ["Facebook", "FB", "https://www.facebook.com/profile.php?id=100083240988881"],
    ["Instagram", "IG", "https://www.instagram.com/98.506460/"],
  ];

  if (!document.querySelector(".floating-social")) {
    const floatingSocial = document.createElement("div");
    floatingSocial.className = "floating-social";
    floatingSocial.setAttribute("aria-label", "Apex Hardware social media");
    socialLinks.forEach(([label, shortLabel, href]) => {
      const link = document.createElement("a");
      link.className = `floating-social-link floating-${label.toLowerCase()}`;
      link.href = href;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      link.setAttribute("aria-label", `Open Apex Hardware on ${label}`);
      const badge = document.createElement("span");
      badge.setAttribute("aria-hidden", "true");
      badge.textContent = shortLabel;
      const text = document.createElement("b");
      text.textContent = label;
      link.append(badge, text);
      floatingSocial.append(link);
    });
    document.body.append(floatingSocial);
  }

  document.querySelectorAll(".inquiry-form").forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      if (!form.reportValidity()) return;

      const data = new FormData(form);
      const labels = [
        ["product", "Product / model"],
        ["name", "Name"],
        ["company", "Company"],
        ["country", "Country / region"],
        ["quantity", "Estimated quantity"],
        ["door", "Door weight / width"],
        ["requirements", "Project requirements"],
      ];
      const lines = ["Hello Apex Hardware, I would like a quotation."];
      labels.forEach(([key, label]) => {
        const value = String(data.get(key) || "").trim();
        if (value) lines.push(`${label}: ${value}`);
      });

      window.apexTrack?.("generate_lead", {
        lead_source: "website_rfq",
        product: String(data.get("product") || ""),
        country: String(data.get("country") || ""),
      }, "Lead");
      window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(lines.join("\n"))}`, "_blank", "noopener,noreferrer");
      const status = form.querySelector(".form-status");
      if (status) status.textContent = "Your inquiry is ready in WhatsApp. Please press Send to complete it.";
    });
  });
})();
