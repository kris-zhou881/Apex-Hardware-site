import { createHash } from "node:crypto";

export const SITE_URL = "https://kris-zhou881.github.io/Apex-Hardware-site";

export const CATEGORY_DEFINITIONS = [
  {
    slug: "floor-springs",
    en: "Floor Springs",
    zh: "地弹簧",
    description: "Concealed hydraulic control for glass, timber and metal doors.",
    descriptionZh: "适用于玻璃门、木门和金属门的隐藏式液压门控。",
  },
  {
    slug: "door-closers",
    en: "Door Closers",
    zh: "闭门器",
    description: "Surface-mounted hydraulic control for commercial door systems.",
    descriptionZh: "适用于商业门系统的表面安装液压闭门器。",
  },
  {
    slug: "panic-exit-devices",
    en: "Panic Exit Devices",
    zh: "紧急逃生装置",
    description: "Exit hardware for emergency and fire-door applications.",
    descriptionZh: "适用于紧急出口和防火门的逃生五金。",
  },
  {
    slug: "door-locks",
    en: "Door Locks",
    zh: "门锁",
    description: "Mechanical locking solutions for glass and framed doors.",
    descriptionZh: "适用于玻璃门和有框门的机械锁具方案。",
  },
  {
    slug: "pull-handles",
    en: "Pull Handles",
    zh: "拉手",
    description: "Architectural pull handles for entrance and shower doors.",
    descriptionZh: "适用于入口门和淋浴门的建筑拉手。",
  },
  {
    slug: "glass-door-hardware",
    en: "Glass Door Hardware",
    zh: "玻璃门五金",
    description: "Clamps, patch fittings, rollers, spiders and glass connectors.",
    descriptionZh: "玻璃门夹、驳接件、滚轮、驳接爪和连接件。",
  },
  {
    slug: "shower-hardware",
    en: "Shower Hardware",
    zh: "淋浴房五金",
    description: "Hinges, clamps, handles and fittings for shower enclosures.",
    descriptionZh: "适用于淋浴房的铰链、夹具、拉手和连接件。",
  },
  {
    slug: "sliding-door-systems",
    en: "Sliding Door Systems",
    zh: "滑动门系统",
    description: "Manual, semi-automatic and automatic sliding-door hardware.",
    descriptionZh: "手动、半自动和自动滑动门五金系统。",
  },
  {
    slug: "architectural-hinges",
    en: "Architectural Hinges",
    zh: "建筑合页",
    description: "Hinges and pivots for architectural door applications.",
    descriptionZh: "适用于建筑门体的合页和枢轴五金。",
  },
  {
    slug: "aluminum-panels",
    en: "Aluminum Architectural Panels",
    zh: "建筑铝板",
    description: "Solid, perforated, carved and honeycomb aluminum panels.",
    descriptionZh: "实心、穿孔、雕花和蜂窝建筑铝板。",
  },
  {
    slug: "aluminum-ceiling-systems",
    en: "Aluminum Ceiling Systems",
    zh: "铝制吊顶系统",
    description: "Baffle, strip, mesh and acoustic aluminum ceiling systems.",
    descriptionZh: "方通、条形、网格和吸音铝制吊顶系统。",
  },
  {
    slug: "aluminum-fencing",
    en: "Aluminum Fencing",
    zh: "铝制围栏",
    description: "Architectural aluminum fencing, privacy screens and garden gates.",
    descriptionZh: "建筑铝制围栏、隐私屏风和花园门。",
  },
  {
    slug: "door-accessories",
    en: "Door Accessories",
    zh: "门控配件",
    description: "Verified door-control accessories that do not fit another main series.",
    descriptionZh: "无法归入其他主要系列的已核实门控配件。",
  },
];

const categoryMap = new Map(CATEGORY_DEFINITIONS.map((category) => [category.slug, category]));

export const CATEGORY_TITLES = {
  "floor-springs": { es: "Muelles de suelo", ar: "مفصلات أرضية", fr: "Pivots de sol", de: "Bodentürschließer", pt: "Molas de piso", ru: "Напольные доводчики" },
  "door-closers": { es: "Cierrapuertas", ar: "غوالق الأبواب", fr: "Ferme-portes", de: "Türschließer", pt: "Molas aéreas", ru: "Дверные доводчики" },
  "panic-exit-devices": { es: "Dispositivos antipánico", ar: "أجهزة مخارج الطوارئ", fr: "Barres antipanique", de: "Panikbeschläge", pt: "Dispositivos antipânico", ru: "Антипаниковые устройства" },
  "door-locks": { es: "Cerraduras", ar: "أقفال الأبواب", fr: "Serrures", de: "Türschlösser", pt: "Fechaduras", ru: "Дверные замки" },
  "pull-handles": { es: "Tiradores", ar: "مقابض السحب", fr: "Poignées de tirage", de: "Stoßgriffe", pt: "Puxadores", ru: "Ручки-скобы" },
  "glass-door-hardware": { es: "Herrajes para vidrio", ar: "تجهيزات الأبواب الزجاجية", fr: "Quincaillerie pour verre", de: "Glastürbeschläge", pt: "Ferragens para vidro", ru: "Фурнитура для стекла" },
  "shower-hardware": { es: "Herrajes de ducha", ar: "تجهيزات غرف الاستحمام", fr: "Quincaillerie de douche", de: "Duschbeschläge", pt: "Ferragens de duche", ru: "Фурнитура для душевых" },
  "sliding-door-systems": { es: "Sistemas correderos", ar: "أنظمة الأبواب المنزلقة", fr: "Systèmes coulissants", de: "Schiebetürsysteme", pt: "Sistemas de correr", ru: "Раздвижные системы" },
  "architectural-hinges": { es: "Bisagras arquitectónicas", ar: "مفصلات معمارية", fr: "Paumelles architecturales", de: "Architekturscharniere", pt: "Dobradiças arquitetónicas", ru: "Архитектурные петли" },
  "aluminum-panels": { es: "Paneles arquitectónicos de aluminio", ar: "ألواح ألمنيوم معمارية", fr: "Panneaux architecturaux en aluminium", de: "Aluminium-Fassadenpaneele", pt: "Painéis arquitetónicos de alumínio", ru: "Архитектурные алюминиевые панели" },
  "aluminum-ceiling-systems": { es: "Sistemas de techo de aluminio", ar: "أنظمة أسقف الألمنيوم", fr: "Plafonds en aluminium", de: "Aluminium-Deckensysteme", pt: "Sistemas de teto em alumínio", ru: "Алюминиевые потолочные системы" },
  "aluminum-fencing": { es: "Cercas de aluminio", ar: "أسوار ألمنيوم", fr: "Clôtures en aluminium", de: "Aluminiumzäune", pt: "Vedações de alumínio", ru: "Алюминиевые ограждения" },
  "door-accessories": { es: "Accesorios para puertas", ar: "ملحقات الأبواب", fr: "Accessoires de porte", de: "Türzubehör", pt: "Acessórios para portas", ru: "Дверные аксессуары" },
};

const PRODUCT_TITLES = {
  "floor-springs": { es: "Muelle de suelo hidráulico", ar: "مفصلة أرضية هيدروليكية", fr: "Pivot de sol hydraulique", de: "Hydraulischer Bodentürschließer", pt: "Mola de piso hidráulica", ru: "Гидравлический напольный доводчик" },
  "door-closers": { es: "Cierrapuertas hidráulico", ar: "غالق باب هيدروليكي", fr: "Ferme-porte hydraulique", de: "Hydraulischer Türschließer", pt: "Mola aérea hidráulica", ru: "Гидравлический дверной доводчик" },
  "panic-exit-devices": { es: "Dispositivo antipánico", ar: "جهاز مخرج طوارئ", fr: "Barre antipanique", de: "Panikbeschlag", pt: "Dispositivo antipânico", ru: "Антипаниковое устройство" },
  "door-locks": { es: "Cerradura para puerta de vidrio", ar: "قفل باب زجاجي", fr: "Serrure pour porte vitrée", de: "Glastürschloss", pt: "Fechadura para porta de vidro", ru: "Замок для стеклянной двери" },
  "pull-handles": { es: "Tirador arquitectónico", ar: "مقبض سحب معماري", fr: "Poignée de tirage architecturale", de: "Architektur-Stoßgriff", pt: "Puxador arquitetónico", ru: "Архитектурная ручка-скоба" },
  "glass-door-hardware": { es: "Herraje para puerta de vidrio", ar: "قطعة تثبيت لباب زجاجي", fr: "Ferrure pour porte vitrée", de: "Glastürbeschlag", pt: "Ferragem para porta de vidro", ru: "Фурнитура для стеклянной двери" },
  "shower-hardware": { es: "Herraje para puerta de ducha", ar: "قطعة تثبيت لباب الاستحمام", fr: "Ferrure pour porte de douche", de: "Duschtürbeschlag", pt: "Ferragem para porta de duche", ru: "Фурнитура для душевой двери" },
  "sliding-door-systems": { es: "Sistema de puerta corredera", ar: "نظام باب منزلق", fr: "Système de porte coulissante", de: "Schiebetürsystem", pt: "Sistema de porta de correr", ru: "Раздвижная дверная система" },
  "architectural-hinges": { es: "Bisagra arquitectónica", ar: "مفصلة معمارية", fr: "Paumelle architecturale", de: "Architekturscharnier", pt: "Dobradiça arquitetónica", ru: "Архитектурная петля" },
  "aluminum-panels": { es: "Panel arquitectónico de aluminio", ar: "لوح ألمنيوم معماري", fr: "Panneau architectural en aluminium", de: "Aluminium-Fassadenpaneel", pt: "Painel arquitetónico de alumínio", ru: "Архитектурная алюминиевая панель" },
  "aluminum-ceiling-systems": { es: "Sistema de techo de aluminio", ar: "نظام سقف ألمنيوم", fr: "Système de plafond en aluminium", de: "Aluminium-Deckensystem", pt: "Sistema de teto em alumínio", ru: "Алюминиевая потолочная система" },
  "aluminum-fencing": { es: "Cerca arquitectónica de aluminio", ar: "سياج ألمنيوم معماري", fr: "Clôture architecturale en aluminium", de: "Architektur-Aluminiumzaun", pt: "Vedação arquitetónica de alumínio", ru: "Архитектурное алюминиевое ограждение" },
  "door-accessories": { es: "Accesorio arquitectónico para puerta", ar: "ملحق باب معماري", fr: "Accessoire architectural de porte", de: "Architektur-Türzubehör", pt: "Acessório arquitetónico para porta", ru: "Архитектурный дверной аксессуар" },
};

export function localizedCategoryTitle(category, language) {
  if (language === "en") return category.en;
  if (language === "zh") return category.zh;
  return CATEGORY_TITLES[category.slug]?.[language] || category.en;
}

export function localizedProductTitle(product, language) {
  if (language === "en") return product.title.en;
  if (language === "zh") return product.title.zh;
  const base = PRODUCT_TITLES[product.category]?.[language] || product.title.en;
  return product.specifications.capacity ? `${base} · ${product.specifications.capacity} kg` : base;
}

export function normalizeSpace(value = "") {
  return String(value).replace(/\s+/g, " ").trim();
}

export function stripMarketing(value = "") {
  return normalizeSpace(
    value
      .replace(/\b(?:JIANDASI|KINDERS|FANSALA|GUA)\b/gi, "")
      .replace(/\b(?:hot sale|best price|cheap|factory direct|factory wholesale|wholesale|high quality|manufacturer|supplier)\b/gi, "")
      .replace(/(?:热销|厂家直销|工厂直销|厂家直供|批发|工厂批发|低价|畅销|高品质|优质|价格有竞争力)/g, "")
      .replace(/\s*[-–—]\s*/g, " ")
      .replace(/\s+/g, " "),
  );
}

export function classifyProduct(sourceTitle = "", sourceUrl = "") {
  const text = `${sourceTitle} ${decodeURIComponent(sourceUrl)}`.toLowerCase();
  const has = (...terms) => terms.some((term) => text.includes(term.toLowerCase()));

  if (has("地弹簧", "地板弹簧", "地面弹簧", "地板机", "底弹簧", "弹簧执行器", "侧轴液压执行器", "floor-spring", "floor spring", "ground-spring", "ground spring", "spring-actuator", "spring actuator", "bottom spring")) {
    return "floor-springs";
  }
  if (has("闭门器", "顶弹簧", "顶部弹簧", "top-spring", "top spring", "transom closer", "door-closer", "door closer")) return "door-closers";
  if (has("panic", "紧急杆", "应急杆", "逃生杆", "推锁杆", "emergency", "exit-device", "exit device", "消防通道推杆")) {
    return "panic-exit-devices";
  }
  if (has("门锁", "锁芯", "door-lock", "door lock", "mortise-lock", "mortise lock")) return "door-locks";
  if (has("淋浴", "shower", "浴室玻璃", "防水条", "pvc strip")) return "shower-hardware";
  if (has("滑动门", "推拉门", "sliding-door", "sliding door", "automatic-door", "automatic door")) {
    return "sliding-door-systems";
  }
  if (has("拉手", "门把手", "pull-handle", "pull handle", "door-handle", "door handle")) return "pull-handles";
  if (has("吊顶", "天花板", "ceiling", "方通", "baffle", "吸音", "acoustic")) return "aluminum-ceiling-systems";
  if (has("围栏", "栅栏", "花园门", "隐私板", "privacy fence", "fencing", "garden gate")) return "aluminum-fencing";
  if (has("铝板", "铝制板", "铝合金板", "幕墙", "蜂窝板", "aluminum-panel", "aluminum panel", "honeycomb", "cladding", "facade", "perforated")) {
    return "aluminum-panels";
  }
  if (has("玻璃门夹", "玻璃夹", "玻璃罩盖夹", "玻璃窗帘蜘蛛", "驳接爪", "驳接件", "门滚轮", "玻璃滚轮", "龙头", "spider", "spigot", "patch-fitting", "patch fitting", "glass-clamp", "glass clamp", "roller")) {
    return "glass-door-hardware";
  }
  if (has("铰链", "合页", "hinge", "pivot")) return "architectural-hinges";
  return "door-accessories";
}

export function extractModel(sourceTitle = "") {
  const candidates = normalizeSpace(sourceTitle).match(/\b[A-Z]{1,4}[-\s]?\d{1,5}[A-Z]{0,3}\b/gi) || [];
  const rejected = /^(?:SS|SUS|ALU|PVC|PVDF|CE|ISO)[-\s]?\d/i;
  return candidates.map((value) => value.replace(/\s+/g, "-").toUpperCase()).find((value) => !rejected.test(value)) || "";
}

export function extractCapacity(sourceTitle = "") {
  const text = normalizeSpace(sourceTitle);
  const range = text.match(/(\d{2,3})\s*[-–—]\s*(\d{2,3})\s*(?:kg|公斤|千克)/i);
  if (range) return Number(range[2]);
  const matches = [...text.matchAll(/(\d{2,3})\s*(?:kg|公斤|千克)/gi)].map((match) => Number(match[1]));
  return matches.find((value) => value >= 40 && value <= 1000) ?? null;
}

export function extractAngle(sourceTitle = "") {
  const match = normalizeSpace(sourceTitle).match(/(\d{2,3})\s*(?:°|度)/);
  return match ? `${match[1]}°` : "";
}

function validMillimeterPair(first, second, { min, max }) {
  const lower = Number(first);
  const upper = Number(second);
  return Number.isInteger(lower)
    && Number.isInteger(upper)
    && lower >= min
    && upper <= max
    && lower <= upper;
}

export function extractGlassThickness(sourceTitle = "") {
  const text = normalizeSpace(sourceTitle);
  const range = text.match(/(?:^|[^\d])(\d{1,2})\s*[-–—]\s*(\d{1,2})\s*(?:mm|毫米)/i);
  if (range && validMillimeterPair(range[1], range[2], { min: 4, max: 25 })) {
    return `${Number(range[1])}–${Number(range[2])} mm`;
  }
  const spacedPair = text.match(/(?:^|[^\d])(\d{1,2})\s+(\d{1,2})\s*(?:mm|毫米)/i);
  if (spacedPair && validMillimeterPair(spacedPair[1], spacedPair[2], { min: 4, max: 25 })) {
    return `${Number(spacedPair[1])}–${Number(spacedPair[2])} mm`;
  }
  const singles = [...text.matchAll(/(?:^|[^\d])(\d{1,2})\s*(?:mm|毫米)/gi)]
    .map((match) => Number(match[1]))
    .filter((value) => value >= 4 && value <= 25);
  return singles.length ? `${singles[0]} mm` : "";
}

export function extractDoorWidth(sourceTitle = "") {
  const text = normalizeSpace(sourceTitle);
  const keyword = "(?:最大门宽|适用门宽|门宽度|门宽|door\\s*width|max(?:imum)?\\s*door\\s*width)";
  const rangeAfterKeyword = text.match(new RegExp(`${keyword}[^\\d]{0,16}(\\d{2,4})\\s*[-–—]\\s*(\\d{2,4})\\s*(?:mm|毫米)`, "i"));
  const rangeBeforeKeyword = text.match(new RegExp(`(?:^|[^\\d])(\\d{2,4})\\s*[-–—]\\s*(\\d{2,4})\\s*(?:mm|毫米)[^\\d]{0,16}(?:宽度|${keyword})`, "i"));
  const range = rangeAfterKeyword || rangeBeforeKeyword;
  if (range && validMillimeterPair(range[1], range[2], { min: 300, max: 5000 })) {
    return `${Number(range[1])}–${Number(range[2])} mm`;
  }
  const singleAfterKeyword = text.match(new RegExp(`${keyword}[^\\d]{0,16}(\\d{2,4})\\s*(?:mm|毫米)`, "i"));
  const singleBeforeKeyword = text.match(new RegExp(`(?:^|[^\\d])(\\d{2,4})\\s*(?:mm|毫米)[^\\d]{0,16}(?:宽度|${keyword})`, "i"));
  const single = singleAfterKeyword || singleBeforeKeyword;
  if (!single) return "";
  const value = Number(single[1]);
  if (value < 300 || value > 5000) return "";
  return /最大门宽|max(?:imum)?\s*door\s*width/i.test(text) ? `≤ ${value} mm` : `${value} mm`;
}

export function extractDimensions(sourceTitle = "") {
  const text = normalizeSpace(sourceTitle);
  const match = text.match(/(?:^|[^\d])(\d{2,4})\s*[x×X*]\s*(\d{2,4})\s*(?:mm|毫米)/);
  if (!match) return "";
  const width = Number(match[1]);
  const height = Number(match[2]);
  if (width < 20 || width > 5000 || height < 20 || height > 5000) return "";
  return `${width} × ${height} mm`;
}

export function extractMaterial(sourceTitle = "") {
  const text = normalizeSpace(sourceTitle);
  if (/201\s*\/\s*304|201和304|201 304/i.test(text)) return "SS201 / SS304";
  if (/304\s*#?|ss304|sus304/i.test(text)) return "SS304";
  if (/201\s*#?|ss201|sus201/i.test(text)) return "SS201";
  if (/不锈钢|stainless steel/i.test(text)) return "Stainless steel";
  if (/铝合金|aluminium alloy|aluminum alloy/i.test(text)) return "Aluminum alloy";
  if (/铝制|aluminium|aluminum/i.test(text)) return "Aluminum";
  if (/黄铜|brass/i.test(text)) return "Brass";
  if (/锌合金|zinc alloy/i.test(text)) return "Zinc alloy";
  if (/铸铁|cast iron/i.test(text)) return "Cast iron";
  if (/聚氯乙烯|pvc/i.test(text)) return "PVC";
  return "";
}

export function extractApplications(sourceTitle = "") {
  const applications = [];
  const values = [
    [/玻璃门|glass door/i, "Glass doors"],
    [/木门|wooden door|timber door/i, "Timber doors"],
    [/防火门|fire door/i, "Fire doors"],
    [/酒店|hotel/i, "Hotels"],
    [/医院|hospital/i, "Hospitals"],
    [/学校|school|campus/i, "Schools"],
    [/商场|shopping mall|mall/i, "Retail"],
    [/办公室|office/i, "Offices"],
    [/淋浴|shower|bathroom/i, "Shower enclosures"],
    [/幕墙|curtain wall|facade/i, "Building facades"],
    [/吊顶|ceiling/i, "Ceilings"],
  ];
  values.forEach(([pattern, label]) => {
    if (pattern.test(sourceTitle)) applications.push(label);
  });
  return applications;
}

function titleForCategory(category, specs, sourceTitle) {
  const material = specs.material ? `${specs.material} ` : "";
  const capacity = specs.capacity ? ` · Up to ${specs.capacity} kg` : "";
  const angle = specs.openingAngle ? ` · ${specs.openingAngle}` : "";
  const source = sourceTitle.toLowerCase();
  const titles = {
    "floor-springs": `Hydraulic Floor Spring${capacity}`,
    "door-closers": `Hydraulic Door Closer${capacity}`,
    "panic-exit-devices": "Panic Bar Exit Device",
    "door-locks": source.includes("玻璃") || source.includes("glass") ? "Glass Door Lock" : "Door Lock",
    "pull-handles": `${material}Pull Handle`.trim(),
    "glass-door-hardware": source.includes("蜘蛛") || source.includes("spider")
      ? "Glass Spider Fitting"
      : source.includes("滚轮") || source.includes("roller")
        ? "Glass Door Roller"
        : source.includes("龙头") || source.includes("spigot")
          ? "Glass Spigot"
          : "Glass Door Fitting",
    "shower-hardware": source.includes("铰链") || source.includes("hinge")
      ? `${material}Shower Door Hinge${angle}`.trim()
      : source.includes("防水条") || source.includes("strip")
        ? "Shower Door Sealing Strip"
        : `${material}Shower Door Fitting`.trim(),
    "sliding-door-systems": "Sliding Door System",
    "architectural-hinges": `${material}Architectural Door Hinge${angle}`.trim(),
    "aluminum-panels": source.includes("蜂窝") || source.includes("honeycomb")
      ? "Aluminum Honeycomb Panel"
      : source.includes("穿孔") || source.includes("perforated")
        ? "Perforated Aluminum Panel"
        : source.includes("雕") || source.includes("carved")
          ? "Decorative Aluminum Panel"
          : "Aluminum Architectural Panel",
    "aluminum-ceiling-systems": source.includes("吸音") || source.includes("acoustic")
      ? "Acoustic Aluminum Ceiling"
      : source.includes("方通") || source.includes("baffle")
        ? "Aluminum Baffle Ceiling"
        : "Aluminum Ceiling System",
    "aluminum-fencing": source.includes("门") || source.includes("gate")
      ? "Aluminum Garden Gate"
      : "Aluminum Privacy Fence",
    "door-accessories": "Architectural Door Accessory",
  };
  return titles[category];
}

function titleZhForCategory(category, specs, sourceTitle) {
  const capacity = specs.capacity ? ` · 最大 ${specs.capacity} kg` : "";
  const angle = specs.openingAngle ? ` · ${specs.openingAngle}` : "";
  const source = sourceTitle.toLowerCase();
  const titles = {
    "floor-springs": `液压地弹簧${capacity}`,
    "door-closers": `液压闭门器${capacity}`,
    "panic-exit-devices": "紧急逃生推杆装置",
    "door-locks": source.includes("玻璃") ? "玻璃门锁" : "建筑门锁",
    "pull-handles": "建筑门拉手",
    "glass-door-hardware": source.includes("蜘蛛") ? "玻璃驳接爪" : source.includes("滚轮") ? "玻璃门滚轮" : source.includes("龙头") ? "玻璃栏杆立柱夹" : "玻璃门连接件",
    "shower-hardware": source.includes("铰链") ? `淋浴门铰链${angle}` : source.includes("防水条") ? "淋浴门防水条" : "淋浴门连接件",
    "sliding-door-systems": "滑动门系统",
    "architectural-hinges": `建筑门合页${angle}`,
    "aluminum-panels": source.includes("蜂窝") ? "铝蜂窝板" : source.includes("穿孔") ? "穿孔铝板" : source.includes("雕") ? "装饰雕花铝板" : "建筑铝板",
    "aluminum-ceiling-systems": source.includes("吸音") ? "吸音铝制吊顶" : source.includes("方通") ? "铝方通吊顶" : "铝制吊顶系统",
    "aluminum-fencing": source.includes("门") ? "铝制花园门" : "铝制隐私围栏",
    "door-accessories": "建筑门控配件",
  };
  return titles[category];
}

export function slugify(value = "") {
  return normalizeSpace(value)
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[^\w\s-]/g, "")
    .replace(/_/g, "-")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

export function productFromSource(source, verifiedAt) {
  const category = classifyProduct(source.title, source.url);
  const categoryInfo = categoryMap.get(category);
  const specifications = {
    capacity: extractCapacity(source.title),
    doorWidth: extractDoorWidth(source.title),
    dimensions: extractDimensions(source.title),
    netWeight: "",
    material: extractMaterial(source.title),
    finish: "",
    openingAngle: extractAngle(source.title),
    holdOpen: null,
    glassThickness: extractGlassThickness(source.title),
    otherVerifiedFields: {},
  };
  const model = extractModel(source.title);
  const enTitle = titleForCategory(category, specifications, source.title);
  const zhTitle = titleZhForCategory(category, specifications, source.title);
  const baseSlug = slugify(`${enTitle} ${model}`) || `product-${source.sourceId}`;
  const slug = `${baseSlug}-${source.sourceId}`;
  const missingFields = ["doorWidth", "dimensions", "netWeight", "finish", "holdOpen"].filter(
    (field) => specifications[field] === "" || specifications[field] === null,
  );

  return {
    id: `alibaba-${source.sourceId}`,
    slug,
    category,
    subcategory: "",
    family: categoryInfo.en,
    model,
    title: { en: enTitle, zh: zhTitle },
    sourceTitle: normalizeSpace(source.title),
    specifications,
    applications: extractApplications(source.title),
    features: [],
    variants: [],
    media: {
      main: `assets/images/products/${category}/${slug}/main.avif`,
      list: `assets/images/products/${category}/${slug}/main.avif`,
      thumbnail: `assets/images/products/${category}/${slug}/main.avif`,
      gallery: [],
      dimensions: [],
      installation: [],
      applications: [],
      videos: [],
      videoPoster: "",
      sourceMain: source.image,
    },
    source: {
      platform: "Alibaba",
      sourceId: source.sourceId,
      url: source.url,
      dataConfidence: category === "door-accessories" ? "unclear" : "partially-verified",
      verifiedAt,
    },
    duplicateCandidate: false,
    duplicateOf: "",
    missingFields,
    notes: "Imported from the seller's public product list. Only title-level facts are populated.",
  };
}

export function fingerprint(value) {
  return createHash("sha256").update(String(value)).digest("hex");
}

export function csvEscape(value) {
  const text = typeof value === "string" ? value : JSON.stringify(value ?? "");
  return `"${text.replaceAll('"', '""')}"`;
}
