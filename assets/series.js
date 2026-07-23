(() => {
  "use strict";

  const products = Array.isArray(window.APEX_PRODUCTS)
    ? [...window.APEX_PRODUCTS].sort((a, b) => a.capacity - b.capacity)
    : [];
  const grid = document.getElementById("series-grid");
  const filterButtons = [...document.querySelectorAll(".filter-button")];
  const comparisonWrap = document.getElementById("comparison-wrap");
  const comparisonEmpty = document.getElementById("comparison-empty");
  const selected = new Set();
  const validCapacities = new Set(products.map((product) => String(product.capacity)));
  const queryCapacity = new URLSearchParams(window.location.search).get("capacity");
  let activeCapacity = validCapacities.has(queryCapacity) ? queryCapacity : "all";

  if (!grid) return;

  function copy() {
    return window.getApexCopy ? window.getApexCopy() : {};
  }

  function createSpec(label, value) {
    const wrapper = document.createElement("div");
    const term = document.createElement("dt");
    const description = document.createElement("dd");
    term.textContent = label;
    description.textContent = value;
    wrapper.append(term, description);
    return wrapper;
  }

  function renderCards() {
    const text = copy();
    const visibleProducts =
      activeCapacity === "all"
        ? products
        : products.filter((product) => String(product.capacity) === activeCapacity);

    grid.replaceChildren();
    visibleProducts.forEach((product) => {
      const card = document.createElement("article");
      card.className = "product-card";

      const media = document.createElement("div");
      media.className = "product-card-media";
      const image = document.createElement("img");
      image.src = `../../assets/images/${product.listImage}`;
      image.width = 1200;
      image.height = 900;
      image.loading = "lazy";
      image.decoding = "async";
      image.alt = `${text.productImageAlt || "Apex Hardware hydraulic floor spring"} — ${product.weightLabel}`;
      media.append(image);

      const heading = document.createElement("h2");
      heading.textContent = product.weightLabel;
      const description = document.createElement("p");
      description.textContent = product.position;

      const specs = document.createElement("dl");
      specs.className = "card-specs";
      specs.append(
        createSpec(text.maxWeight || "Maximum door weight", product.weight),
        createSpec(text.doorWidth || "Recommended door width", product.width),
        createSpec(text.application || "Recommended application", product.use),
      );

      const actions = document.createElement("div");
      actions.className = "product-card-actions";

      const detailLink = document.createElement("a");
      detailLink.className = "button";
      detailLink.href = `../${product.slug}.html`;
      const detailText = document.createElement("span");
      detailText.textContent = text.viewDetails || "View details";
      const detailArrow = document.createElement("span");
      detailArrow.setAttribute("aria-hidden", "true");
      detailArrow.textContent = "→";
      detailLink.append(detailText, detailArrow);

      const compare = document.createElement("button");
      compare.className = "button button-secondary compare-button";
      compare.type = "button";
      compare.dataset.slug = product.slug;
      compare.setAttribute("aria-pressed", String(selected.has(product.slug)));
      compare.textContent = selected.has(product.slug)
        ? text.removeCompare || "Remove"
        : text.addCompare || "Compare";
      compare.addEventListener("click", () => {
        if (selected.has(product.slug)) {
          selected.delete(product.slug);
        } else {
          selected.add(product.slug);
        }
        renderCards();
        renderComparison();
      });

      actions.append(detailLink, compare);
      card.append(media, heading, description, specs, actions);
      grid.append(card);
    });
  }

  function renderComparison() {
    const text = copy();
    const compared = products.filter((product) => selected.has(product.slug));

    if (!comparisonWrap || !comparisonEmpty) return;
    comparisonEmpty.hidden = compared.length >= 2;
    comparisonWrap.hidden = compared.length < 2;
    comparisonWrap.replaceChildren();
    if (compared.length < 2) return;

    const fields = [
      [text.model || "Model", "model"],
      [text.maxWeight || "Maximum door weight", "weight"],
      [text.doorWidth || "Recommended door width", "width"],
      [text.openingAngle || "Opening angle", "angle"],
      [text.dimensions || "Body dimensions", "size"],
      [text.coverMaterial || "Cover material", "material"],
      [text.application || "Recommended application", "use"],
    ];

    const table = document.createElement("table");
    table.className = "comparison-table";
    const caption = document.createElement("caption");
    caption.className = "sr-only";
    caption.textContent = text.comparisonTitle || "Compare floor springs";
    table.append(caption);

    const thead = document.createElement("thead");
    const headRow = document.createElement("tr");
    const emptyHeading = document.createElement("th");
    emptyHeading.scope = "col";
    emptyHeading.textContent = text.model || "Model";
    headRow.append(emptyHeading);
    compared.forEach((product) => {
      const heading = document.createElement("th");
      heading.scope = "col";
      heading.textContent = product.weightLabel;
      headRow.append(heading);
    });
    thead.append(headRow);
    table.append(thead);

    const tbody = document.createElement("tbody");
    fields.forEach(([label, key]) => {
      const row = document.createElement("tr");
      const heading = document.createElement("th");
      heading.scope = "row";
      heading.textContent = label;
      row.append(heading);
      compared.forEach((product) => {
        const cell = document.createElement("td");
        cell.textContent = product[key];
        row.append(cell);
      });
      tbody.append(row);
    });
    table.append(tbody);
    comparisonWrap.append(table);
  }

  filterButtons.forEach((button) => {
    const isActive = button.dataset.capacity === activeCapacity;
    button.setAttribute("aria-pressed", String(isActive));
    button.addEventListener("click", () => {
      activeCapacity = button.dataset.capacity || "all";
      filterButtons.forEach((item) => {
        item.setAttribute(
          "aria-pressed",
          String(item.dataset.capacity === activeCapacity),
        );
      });
      const nextUrl = new URL(window.location.href);
      if (activeCapacity === "all") {
        nextUrl.searchParams.delete("capacity");
      } else {
        nextUrl.searchParams.set("capacity", activeCapacity);
      }
      window.history.replaceState({}, "", nextUrl);
      renderCards();
    });
  });

  window.addEventListener("apex:languagechange", () => {
    renderCards();
    renderComparison();
  });

  renderCards();
  renderComparison();
})();
