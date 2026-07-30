(() => {
  "use strict";

  const baseProducts = Array.isArray(window.APEX_PRODUCTS)
    ? [...window.APEX_PRODUCTS].sort((a, b) => a.capacity - b.capacity)
    : [];
  const catalogModels = Array.isArray(window.APEX_FLOOR_SPRING_MODELS)
    ? window.APEX_FLOOR_SPRING_MODELS
    : [];
  const products = baseProducts.map((product) => {
    const baseVariant = {
      ...product,
      key: `apex-${product.slug}`,
      image: `../../assets/images/${product.listImage}`,
      href: `../${product.slug}.html`,
    };
    const variants = [
      baseVariant,
      ...catalogModels.filter(
        (variant) =>
          variant.capacity === product.capacity &&
          variant.model.toUpperCase() !== product.model.toUpperCase(),
      ),
    ];
    return { ...product, variants };
  });
  const allVariants = products.flatMap((product) => product.variants);
  const grid = document.getElementById("series-grid");
  const filterContainer = document.querySelector(".capacity-filters");
  const comparisonWrap = document.getElementById("comparison-wrap");
  const comparisonEmpty = document.getElementById("comparison-empty");
  const activeModelByCapacity = new Map(
    products.map((product) => [String(product.capacity), product.variants[0].key]),
  );
  const selected = new Set();
  const validCapacities = new Set(products.map((product) => String(product.capacity)));
  const queryCapacity = new URLSearchParams(window.location.search).get("capacity");
  let activeCapacity = validCapacities.has(queryCapacity) ? queryCapacity : "all";

  if (!grid) return;

  function copy() {
    return window.getApexCopy ? window.getApexCopy() : {};
  }

  function confirmed(value, text) {
    return value || text.confirm || "Contact us to confirm";
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

  function currentVariant(product) {
    const activeKey = activeModelByCapacity.get(String(product.capacity));
    return product.variants.find((variant) => variant.key === activeKey) || product.variants[0];
  }

  function createModelSwitcher(product, activeVariant, text) {
    const switcher = document.createElement("div");
    switcher.className = "model-switcher";

    const label = document.createElement("span");
    label.className = "model-switcher-label";
    label.textContent = text.model || "Model";

    const options = document.createElement("div");
    options.className = "model-switcher-options";
    options.setAttribute("role", "group");
    options.setAttribute("aria-label", text.model || "Model");

    product.variants.forEach((variant) => {
      const button = document.createElement("button");
      button.className = "model-switch-button";
      button.type = "button";
      button.textContent = variant.model;
      button.dataset.modelKey = variant.key;
      button.setAttribute("aria-pressed", String(variant.key === activeVariant.key));
      button.addEventListener("click", () => {
        activeModelByCapacity.set(String(product.capacity), variant.key);
        renderCards();
        renderComparison();
      });
      options.append(button);
    });

    switcher.append(label, options);
    return switcher;
  }

  function renderCards() {
    const text = copy();
    const visibleProducts =
      activeCapacity === "all"
        ? products
        : products.filter((product) => String(product.capacity) === activeCapacity);

    grid.replaceChildren();
    visibleProducts.forEach((product) => {
      const variant = currentVariant(product);
      const card = document.createElement("article");
      card.className = "product-card";

      const media = document.createElement("div");
      media.className = "product-card-media";
      const image = document.createElement("img");
      image.src = variant.image;
      image.width = 896;
      image.height = 896;
      image.loading = "lazy";
      image.decoding = "async";
      image.alt = `${text.productImageAlt || "Apex Hardware hydraulic floor spring"} — ${variant.model}`;
      media.append(image);

      const heading = document.createElement("h2");
      heading.textContent = product.weightLabel;
      const description = document.createElement("p");
      description.textContent = variant.position || product.position;

      const modelSwitcher = createModelSwitcher(product, variant, text);

      const specs = document.createElement("dl");
      specs.className = "card-specs";
      specs.append(
        createSpec(text.maxWeight || "Maximum door weight", variant.weight),
        createSpec(
          text.doorWidth || "Recommended door width",
          confirmed(variant.width, text),
        ),
        createSpec(
          text.application || "Recommended application",
          confirmed(variant.use, text),
        ),
      );

      const actions = document.createElement("div");
      actions.className = "product-card-actions";

      const detailLink = document.createElement("a");
      detailLink.className = "button";
      detailLink.href = variant.href;
      const detailText = document.createElement("span");
      detailText.textContent = text.viewDetails || "View details";
      const detailArrow = document.createElement("span");
      detailArrow.setAttribute("aria-hidden", "true");
      detailArrow.textContent = "→";
      detailLink.append(detailText, detailArrow);

      const compare = document.createElement("button");
      compare.className = "button button-secondary compare-button";
      compare.type = "button";
      compare.dataset.modelKey = variant.key;
      compare.setAttribute("aria-pressed", String(selected.has(variant.key)));
      compare.textContent = selected.has(variant.key)
        ? text.removeCompare || "Remove"
        : text.addCompare || "Compare";
      compare.addEventListener("click", () => {
        if (selected.has(variant.key)) {
          selected.delete(variant.key);
        } else {
          selected.add(variant.key);
        }
        renderCards();
        renderComparison();
      });

      actions.append(detailLink, compare);
      card.append(media, modelSwitcher, heading, description, specs, actions);
      grid.append(card);
    });
  }

  function renderComparison() {
    const text = copy();
    const compared = allVariants.filter((variant) => selected.has(variant.key));

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
    compared.forEach((variant) => {
      const heading = document.createElement("th");
      heading.scope = "col";
      heading.textContent = variant.model;
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
      compared.forEach((variant) => {
        const cell = document.createElement("td");
        cell.textContent = confirmed(variant[key], text);
        row.append(cell);
      });
      tbody.append(row);
    });
    table.append(tbody);
    comparisonWrap.append(table);
  }

  function buildFilters() {
    if (!filterContainer) return;
    const text = copy();
    const capacities = ["all", ...new Set(products.map((product) => String(product.capacity)))];
    filterContainer.replaceChildren();
    capacities.forEach((capacity) => {
      const button = document.createElement("button");
      button.className = "filter-button";
      button.type = "button";
      button.dataset.capacity = capacity;
      button.setAttribute("aria-pressed", String(capacity === activeCapacity));
      button.textContent =
        capacity === "all" ? text.allCapacities || "All capacities" : `Up to ${capacity} kg`;
      button.addEventListener("click", () => {
        activeCapacity = capacity;
        filterContainer.querySelectorAll(".filter-button").forEach((item) => {
          item.setAttribute("aria-pressed", String(item.dataset.capacity === activeCapacity));
        });
        const nextUrl = new URL(window.location.href);
        if (activeCapacity === "all") nextUrl.searchParams.delete("capacity");
        else nextUrl.searchParams.set("capacity", activeCapacity);
        window.history.replaceState({}, "", nextUrl);
        renderCards();
      });
      filterContainer.append(button);
    });
  }

  window.addEventListener("apex:languagechange", () => {
    buildFilters();
    renderCards();
    renderComparison();
  });

  buildFilters();
  renderCards();
  renderComparison();
})();
