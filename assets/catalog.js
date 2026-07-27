(() => {
  "use strict";

  const COPY = {
    en: {
      productsEyebrow: "APEX HARDWARE · PRODUCT SYSTEMS",
      productsTitle: "Products",
      productsIntro: "Choose a product family, then narrow the specification for your application.",
      explore: "Explore",
      details: "View details",
      compare: "Compare",
      remove: "Remove",
      compareTitle: "Compare products",
      clear: "Clear",
      backProducts: "Back to Products",
      backSeries: "Back to series",
      productsFound: "products",
      searchLabel: "Search products",
      searchPlaceholder: "Search products",
      noResults: "No matching products.",
      allMaterials: "All materials",
      results: "products shown",
      inquiryEyebrow: "PROJECT INQUIRIES",
      inquiryTitle: "Build the right specification.",
      inquiryText: "Share the application, dimensions and project requirements. We will help confirm the right product.",
      email: "Email us",
      verifiedHighlights: "Verified highlights",
      technicalSpecs: "Technical specifications",
      specification: "Specification",
      model: "Model",
      capacity: "Maximum door weight",
      doorWidth: "Door width",
      dimensions: "Dimensions",
      netWeight: "Net weight",
      material: "Material",
      finish: "Finish",
      openingAngle: "Opening angle",
      glassThickness: "Glass thickness",
      holdOpen: "Hold-open function",
      dataNote: "Only explicitly confirmed listing data is shown. Contact us to verify missing fields before specification.",
      related: "Related products",
      confirm: "Contact us to confirm",
    },
    zh: {
      productsEyebrow: "APEX HARDWARE · 产品系统",
      productsTitle: "产品系列",
      productsIntro: "先选择产品系列，再根据应用需求确认规格。",
      explore: "查看系列",
      details: "查看详情",
      compare: "比较",
      remove: "移出",
      compareTitle: "产品比较",
      clear: "清空",
      backProducts: "返回产品系列",
      backSeries: "返回系列页",
      productsFound: "个产品",
      searchLabel: "搜索产品",
      searchPlaceholder: "搜索产品或型号",
      noResults: "没有匹配的产品。",
      allMaterials: "全部材料",
      results: "个产品",
      inquiryEyebrow: "项目咨询",
      inquiryTitle: "一起确定合适的规格。",
      inquiryText: "告诉我们应用、尺寸和项目要求，我们会协助确认合适产品。",
      email: "发送邮件",
      verifiedHighlights: "已核实信息",
      technicalSpecs: "技术参数",
      specification: "规格",
      model: "型号",
      capacity: "最大门重",
      doorWidth: "门宽",
      dimensions: "尺寸",
      netWeight: "净重",
      material: "材料",
      finish: "表面处理",
      openingAngle: "开启角度",
      glassThickness: "玻璃厚度",
      holdOpen: "定位功能",
      dataNote: "页面只显示有明确依据的数据。请在选型前联系我们确认缺失参数。",
      related: "相关产品",
      confirm: "请联系我们确认",
    },
    es: {
      productsTitle: "Productos", productsIntro: "Elija una familia y confirme la especificación para su aplicación.", explore: "Explorar", details: "Ver detalles", compare: "Comparar", remove: "Quitar", compareTitle: "Comparar productos", clear: "Borrar", backProducts: "Volver a Productos", backSeries: "Volver a la serie", productsFound: "productos", searchLabel: "Buscar productos", searchPlaceholder: "Buscar productos", noResults: "No hay productos coincidentes.", allMaterials: "Todos los materiales", results: "productos", inquiryEyebrow: "CONSULTAS DE PROYECTO", inquiryTitle: "Defina la especificación correcta.", inquiryText: "Comparta la aplicación, dimensiones y requisitos del proyecto.", email: "Enviar correo", verifiedHighlights: "Datos verificados", technicalSpecs: "Especificaciones técnicas", specification: "Especificación", model: "Modelo", capacity: "Peso máximo de puerta", doorWidth: "Ancho de puerta", dimensions: "Dimensiones", netWeight: "Peso neto", material: "Material", finish: "Acabado", openingAngle: "Ángulo de apertura", glassThickness: "Espesor del vidrio", holdOpen: "Retención abierta", dataNote: "Solo se muestran datos explícitamente confirmados. Contáctenos para verificar los campos faltantes.", related: "Productos relacionados", confirm: "Contáctenos para confirmar",
    },
    ar: {
      productsTitle: "المنتجات", productsIntro: "اختر مجموعة المنتجات ثم حدّد المواصفات المناسبة للتطبيق.", explore: "استكشف", details: "عرض التفاصيل", compare: "مقارنة", remove: "إزالة", compareTitle: "مقارنة المنتجات", clear: "مسح", backProducts: "العودة إلى المنتجات", backSeries: "العودة إلى المجموعة", productsFound: "منتج", searchLabel: "البحث عن المنتجات", searchPlaceholder: "البحث عن المنتجات", noResults: "لا توجد منتجات مطابقة.", allMaterials: "كل المواد", results: "منتج", inquiryEyebrow: "استفسارات المشاريع", inquiryTitle: "حدّد المواصفات الصحيحة.", inquiryText: "شارك التطبيق والأبعاد ومتطلبات المشروع.", email: "البريد الإلكتروني", verifiedHighlights: "معلومات مؤكدة", technicalSpecs: "المواصفات الفنية", specification: "المواصفة", model: "الموديل", capacity: "الحد الأقصى لوزن الباب", doorWidth: "عرض الباب", dimensions: "الأبعاد", netWeight: "الوزن الصافي", material: "المادة", finish: "التشطيب", openingAngle: "زاوية الفتح", glassThickness: "سماكة الزجاج", holdOpen: "خاصية التثبيت", dataNote: "تُعرض فقط البيانات المؤكدة بوضوح. تواصل معنا للتحقق من الحقول الناقصة.", related: "منتجات ذات صلة", confirm: "تواصل معنا للتأكيد",
    },
    fr: {
      productsTitle: "Produits", productsIntro: "Choisissez une famille, puis confirmez la spécification adaptée.", explore: "Explorer", details: "Voir les détails", compare: "Comparer", remove: "Retirer", compareTitle: "Comparer les produits", clear: "Effacer", backProducts: "Retour aux produits", backSeries: "Retour à la série", productsFound: "produits", searchLabel: "Rechercher des produits", searchPlaceholder: "Rechercher des produits", noResults: "Aucun produit correspondant.", allMaterials: "Tous les matériaux", results: "produits", inquiryEyebrow: "DEMANDES DE PROJET", inquiryTitle: "Définissez la bonne spécification.", inquiryText: "Partagez l’application, les dimensions et les exigences du projet.", email: "E-mail", verifiedHighlights: "Informations vérifiées", technicalSpecs: "Spécifications techniques", specification: "Spécification", model: "Modèle", capacity: "Poids maximal de porte", doorWidth: "Largeur de porte", dimensions: "Dimensions", netWeight: "Poids net", material: "Matériau", finish: "Finition", openingAngle: "Angle d’ouverture", glassThickness: "Épaisseur du verre", holdOpen: "Maintien ouvert", dataNote: "Seules les données explicitement confirmées sont affichées. Contactez-nous pour vérifier les champs manquants.", related: "Produits associés", confirm: "Contactez-nous pour confirmer",
    },
    de: {
      productsTitle: "Produkte", productsIntro: "Wählen Sie eine Produktfamilie und bestätigen Sie die passende Spezifikation.", explore: "Entdecken", details: "Details ansehen", compare: "Vergleichen", remove: "Entfernen", compareTitle: "Produkte vergleichen", clear: "Leeren", backProducts: "Zurück zu Produkte", backSeries: "Zurück zur Serie", productsFound: "Produkte", searchLabel: "Produkte suchen", searchPlaceholder: "Produkte suchen", noResults: "Keine passenden Produkte.", allMaterials: "Alle Materialien", results: "Produkte", inquiryEyebrow: "PROJEKTANFRAGEN", inquiryTitle: "Die richtige Spezifikation.", inquiryText: "Teilen Sie Anwendung, Abmessungen und Projektanforderungen mit.", email: "E-Mail", verifiedHighlights: "Bestätigte Angaben", technicalSpecs: "Technische Daten", specification: "Spezifikation", model: "Modell", capacity: "Maximales Türgewicht", doorWidth: "Türbreite", dimensions: "Abmessungen", netWeight: "Nettogewicht", material: "Material", finish: "Oberfläche", openingAngle: "Öffnungswinkel", glassThickness: "Glasdicke", holdOpen: "Feststellfunktion", dataNote: "Es werden nur ausdrücklich bestätigte Daten angezeigt. Fehlende Angaben bitte vor der Spezifikation bestätigen.", related: "Ähnliche Produkte", confirm: "Bitte zur Bestätigung kontaktieren",
    },
    pt: {
      productsTitle: "Produtos", productsIntro: "Escolha uma família e confirme a especificação da aplicação.", explore: "Explorar", details: "Ver detalhes", compare: "Comparar", remove: "Remover", compareTitle: "Comparar produtos", clear: "Limpar", backProducts: "Voltar a Produtos", backSeries: "Voltar à série", productsFound: "produtos", searchLabel: "Pesquisar produtos", searchPlaceholder: "Pesquisar produtos", noResults: "Nenhum produto correspondente.", allMaterials: "Todos os materiais", results: "produtos", inquiryEyebrow: "CONSULTAS DE PROJETO", inquiryTitle: "Defina a especificação correta.", inquiryText: "Compartilhe aplicação, dimensões e requisitos do projeto.", email: "E-mail", verifiedHighlights: "Dados verificados", technicalSpecs: "Especificações técnicas", specification: "Especificação", model: "Modelo", capacity: "Peso máximo da porta", doorWidth: "Largura da porta", dimensions: "Dimensões", netWeight: "Peso líquido", material: "Material", finish: "Acabamento", openingAngle: "Ângulo de abertura", glassThickness: "Espessura do vidro", holdOpen: "Retenção aberta", dataNote: "Apenas dados explicitamente confirmados são exibidos. Fale conosco para verificar campos ausentes.", related: "Produtos relacionados", confirm: "Fale conosco para confirmar",
    },
    ru: {
      productsTitle: "Продукция", productsIntro: "Выберите семейство и подтвердите характеристики для применения.", explore: "Открыть", details: "Подробнее", compare: "Сравнить", remove: "Убрать", compareTitle: "Сравнение продуктов", clear: "Очистить", backProducts: "Назад к продукции", backSeries: "Назад к серии", productsFound: "продуктов", searchLabel: "Поиск продуктов", searchPlaceholder: "Поиск продуктов", noResults: "Подходящих продуктов нет.", allMaterials: "Все материалы", results: "продуктов", inquiryEyebrow: "ЗАПРОСЫ ПО ПРОЕКТАМ", inquiryTitle: "Определите нужную спецификацию.", inquiryText: "Сообщите область применения, размеры и требования проекта.", email: "Эл. почта", verifiedHighlights: "Подтвержденные данные", technicalSpecs: "Технические характеристики", specification: "Характеристика", model: "Модель", capacity: "Максимальный вес двери", doorWidth: "Ширина двери", dimensions: "Размеры", netWeight: "Вес нетто", material: "Материал", finish: "Отделка", openingAngle: "Угол открывания", glassThickness: "Толщина стекла", holdOpen: "Фиксация", dataNote: "Показаны только явно подтвержденные данные. Уточните недостающие параметры перед выбором.", related: "Похожие продукты", confirm: "Свяжитесь с нами для подтверждения",
    },
  };

  let language = document.documentElement.lang.split("-")[0] || "en";
  let text = { ...COPY.en, ...(COPY[language] || {}) };

  function applyCopy(nextLanguage) {
    language = nextLanguage || "en";
    text = { ...COPY.en, ...(COPY[language] || {}) };
    document.querySelectorAll("[data-catalog-text]").forEach((element) => {
      const value = text[element.dataset.catalogText];
      if (value) element.textContent = value;
    });
    document.querySelectorAll("[data-catalog-placeholder]").forEach((element) => {
      const value = text[element.dataset.catalogPlaceholder];
      if (value) element.setAttribute("placeholder", value);
    });
    document.querySelectorAll("[data-title-en]").forEach((element) => {
      const key = `title${language.charAt(0).toUpperCase()}${language.slice(1)}`;
      element.textContent = element.dataset[key] || element.dataset.titleEn;
    });
    document.querySelectorAll("[data-description-en]").forEach((element) => {
      element.textContent = language === "zh" ? element.dataset.descriptionZh : element.dataset.descriptionEn;
    });
    document.querySelectorAll("#catalog-filters button").forEach((button) => {
      if (button.dataset.material === "all") button.textContent = text.allMaterials;
    });
    renderCompare();
    updateResults();
  }

  const cards = [...document.querySelectorAll(".catalog-product-card")];
  const search = document.getElementById("catalog-search");
  const filters = document.getElementById("catalog-filters");
  const resultLabel = document.getElementById("catalog-results");
  const empty = document.getElementById("catalog-empty");
  const compareDrawer = document.getElementById("compare-drawer");
  const compareWrap = document.getElementById("compare-table-wrap");
  const selected = new Set();
  let activeMaterial = "all";

  function tidyVerifiedHighlights() {
    const grid = document.querySelector(".key-feature-grid");
    if (!grid) return;
    const placeholders = [...grid.querySelectorAll('[data-catalog-text="specification"]')]
      .map((label) => label.closest(".key-feature"))
      .filter(Boolean);
    placeholders.slice(1).forEach((card) => card.remove());
    grid.classList.add(`key-feature-count-${Math.min(grid.children.length, 3)}`);
  }

  function updateResults() {
    if (!resultLabel) return;
    const visible = cards.filter((card) => !card.hidden).length;
    resultLabel.textContent = `${visible} ${text.results}`;
  }

  function filterCards() {
    const query = (search?.value || "").trim().toLowerCase();
    cards.forEach((card) => {
      const matchesText = !query || card.dataset.search.includes(query);
      const matchesMaterial = activeMaterial === "all" || card.dataset.material === activeMaterial;
      card.hidden = !(matchesText && matchesMaterial);
    });
    if (empty) empty.hidden = cards.some((card) => !card.hidden);
    updateResults();
  }

  function setupFilters() {
    if (!filters || !cards.length) return;
    const materials = [...new Set(cards.map((card) => card.dataset.material).filter((value) => value && value !== "Unspecified"))].sort();
    if (materials.length < 2) return;
    const options = ["all", ...materials];
    options.forEach((material) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "filter-button";
      button.dataset.material = material;
      button.setAttribute("aria-pressed", String(material === activeMaterial));
      button.textContent = material === "all" ? text.allMaterials : material;
      button.addEventListener("click", () => {
        activeMaterial = material;
        filters.querySelectorAll("button").forEach((item) => item.setAttribute("aria-pressed", String(item === button)));
        filterCards();
      });
      filters.append(button);
    });
  }

  function renderCompare() {
    if (!compareDrawer || !compareWrap) return;
    const compared = cards.filter((card) => selected.has(card.dataset.slug));
    compareDrawer.hidden = compared.length === 0;
    compareWrap.replaceChildren();
    if (!compared.length) return;
    const table = document.createElement("table");
    table.className = "comparison-table";
    const fields = [
      [text.model, "model"],
      [text.capacity, "capacity"],
      [text.material, "material"],
      [text.openingAngle, "angle"],
      [text.glassThickness, "thickness"],
    ];
    const head = document.createElement("tr");
    head.append(document.createElement("th"));
    compared.forEach((card) => {
      const th = document.createElement("th");
      th.textContent = card.dataset.title;
      head.append(th);
    });
    const thead = document.createElement("thead");
    thead.append(head);
    table.append(thead);
    const tbody = document.createElement("tbody");
    fields.forEach(([label, key]) => {
      const row = document.createElement("tr");
      const th = document.createElement("th");
      th.scope = "row";
      th.textContent = label;
      row.append(th);
      compared.forEach((card) => {
        const cell = document.createElement("td");
        cell.textContent = card.dataset[key] || text.confirm;
        row.append(cell);
      });
      tbody.append(row);
    });
    table.append(tbody);
    compareWrap.append(table);
  }

  document.querySelectorAll("[data-compare]").forEach((button) => {
    button.addEventListener("click", () => {
      const slug = button.dataset.compare;
      if (selected.has(slug)) selected.delete(slug);
      else if (selected.size < 4) selected.add(slug);
      button.setAttribute("aria-pressed", String(selected.has(slug)));
      button.textContent = selected.has(slug) ? text.remove : text.compare;
      renderCompare();
    });
  });
  document.getElementById("compare-clear")?.addEventListener("click", () => {
    selected.clear();
    document.querySelectorAll("[data-compare]").forEach((button) => {
      button.setAttribute("aria-pressed", "false");
      button.textContent = text.compare;
    });
    renderCompare();
  });
  search?.addEventListener("input", filterCards);
  tidyVerifiedHighlights();
  setupFilters();
  filterCards();

  window.addEventListener("apex:languagechange", (event) => applyCopy(event.detail.language));
  try {
    applyCopy(localStorage.getItem("apex-lang") || language);
  } catch {
    applyCopy(language);
  }
})();
