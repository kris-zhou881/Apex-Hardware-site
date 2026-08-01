(() => {
  "use strict";

  const whatsappNumber = "8618027164672";

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
