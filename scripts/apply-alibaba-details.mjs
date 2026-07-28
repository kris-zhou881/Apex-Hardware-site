import { readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";

const root = process.cwd();
const detailsPath = process.env.APEX_DETAILS_JSON;
if (!detailsPath) {
  throw new Error("Set APEX_DETAILS_JSON to the browser-extracted Alibaba detail JSON file.");
}

const productsPath = join(root, "data", "products.json");
const products = JSON.parse(await readFile(productsPath, "utf8"));
const details = JSON.parse(await readFile(detailsPath, "utf8"));
const detailsById = new Map(details.map((item) => [String(item.sourceId), item]));

const keyGroups = {
  model: ["型号", "Model", "Model Number"],
  capacity: ["最大车门重量", "最大门重量", "最大门重", "承重范围", "产品承重能力", "Max door weight", "Maximum door weight"],
  doorWidth: ["适用门宽", "Maximum door width", "Max door width"],
  dimensions: ["尺寸", "Size", "Product size", "Product Size"],
  netWeight: ["净重", "Net weight", "Net Weight"],
  material: ["材质", "Material", "产品材质", "Product material"],
  finish: ["表面处理", "表面", "完成", "Finish", "Finishes", "Surface finishing", "Surface treatment", "Surface Treatment", "Frame Finishing"],
  openingAngle: ["最大门开启角度", "最大限度。开启角度", "开启角度", "Max door opening angle", "Opening angle"],
  glassThickness: ["玻璃厚度", "Glass thickness", "Glass Thickness"],
  holdOpen: ["定位角度", "Positioning Angle", "Hold open", "Hold-open", "Hold open function"],
};

const blockedKey = /(?:品牌|brand|质保|warranty|保修|guarantee|售后|after.?sales|工程解决|solution capability|原产地|place of origin|销售单位|selling unit|包装|packag|packing|毛重|gross weight|单个体积|volume|价格|price|起订|moq|认证|certification|certificate|付款|payment|保质期|shelf life|生产时间|production time|交货时间|delivery time|标志|logo|关键词|keywords?|服务|service|环保|eco.?friendly)/i;
const blockedValue = /(?:KINDERS|JIANDASI|FANSALA)/i;
const genericDimension = /^(?:customi[sz]ed(?: size)?|customer size|as customer'?s? inquiry|可定制)$/i;

const labelMap = new Map([
  ["品种", "Type"],
  ["特性", "Features"],
  ["安装方式", "Installation"],
  ["应用场景", "Application"],
  ["应用", "Application"],
  ["产品名称", "Product name"],
  ["设计风格", "Design style"],
  ["使用方法", "Usage method"],
  ["功能", "Function"],
  ["颜色", "Color"],
  ["用途", "Use"],
  ["使用场所", "Application"],
  ["使用", "Usage"],
  ["产品类型", "Product type"],
  ["形状", "Shape"],
  ["适用手类型", "Handing"],
  ["控制方法", "Control method"],
  ["安装类型", "Installation type"],
  ["吊顶天花板形状", "Ceiling shape"],
  ["吊顶天花板品种", "Ceiling type"],
  ["防火性能", "Fire performance"],
  ["孔距", "Hole distance"],
  ["名称", "Name"],
  ["门宽", "Door width"],
  ["高度", "Height"],
  ["宽度", "Width"],
  ["厚度", "Thickness"],
  ["适用门厚", "Applicable door thickness"],
  ["管子尺寸", "Tube size"],
  ["轴承", "Bearing"],
  ["定位角度", "Hold-open angle"],
  ["调节范围", "Adjustment range"],
  ["单个产品毛重", "Gross weight"],
  ["单个包装尺寸", "Package dimensions"],
  ["Available thickness", "Available thickness"],
  ["Panel Thickness", "Panel thickness"],
  ["Body Thickness", "Body thickness"],
  ["Door Thickness", "Door thickness"],
  ["Inner Body Material", "Inner body material"],
  ["Cover Material", "Cover material"],
  ["规格", "Specification"],
]);

function clean(value = "") {
  return String(value).replace(/\s+/g, " ").trim();
}

function first(attributes, keys) {
  for (const key of keys) {
    const value = clean(attributes[key]);
    if (value) return value;
  }
  return "";
}

function normalizeUnits(value) {
  return clean(value)
    .replace(/公斤/gi, " kg")
    .replace(/毫米/gi, " mm")
    .replace(/厘米/gi, " cm")
    .replace(/\s+(kg|mm|cm)\b/gi, " $1");
}

function capacityKg(value) {
  const text = clean(value);
  const numbers = [...text.matchAll(/\d+(?:\.\d+)?/g)].map((match) => Number(match[0]));
  if (!numbers.length) return null;
  const max = Math.max(...numbers);
  if (/(?:斤|jin)\b/i.test(text)) return Number((max * 0.5).toFixed(1));
  if (/(?:kg|公斤|千克)\b/i.test(text)) return max;
  return null;
}

function normalizeMaterial(value) {
  const text = clean(value);
  const exact = new Map([
    ["不锈钢", "Stainless steel"],
    ["钢", "Steel"],
    ["铝", "Aluminum"],
    ["铝合金", "Aluminum alloy"],
    ["锌合金", "Zinc alloy"],
    ["黄铜", "Brass"],
    ["铸铁", "Cast iron"],
  ]);
  return exact.get(text) || text;
}

function normalizeAngle(value) {
  const text = clean(value);
  const match = text.match(/\d{2,3}(?:\.\d+)?/);
  return match ? `${match[0]}°` : text;
}

function holdOpenValue(attributes) {
  const raw = first(attributes, keyGroups.holdOpen);
  if (!raw) return null;
  if (/(?:no|without|non|无定位|不定位)/i.test(raw)) return false;
  return true;
}

function technicalFields(attributes) {
  const output = {};
  for (const [rawKey, rawValue] of Object.entries(attributes)) {
    const key = clean(rawKey);
    const value = normalizeUnits(rawValue);
    if (!key || !value || blockedKey.test(key) || blockedValue.test(value)) continue;
    if (Object.values(keyGroups).some((keys) => keys.includes(key))) continue;
    const label = labelMap.get(key) || key;
    output[label] = value;
  }
  const grossWeight = clean(attributes["单个产品毛重"]);
  if (grossWeight && !/^0(?:\.0+)?\s*(?:kg|公斤)?$/i.test(grossWeight)) {
    output["Gross weight"] = normalizeUnits(grossWeight);
  }
  const packageDimensions = clean(attributes["单个包装尺寸"]);
  if (packageDimensions && !/^0(?:x0){2}/i.test(packageDimensions)) {
    output["Package dimensions"] = normalizeUnits(packageDimensions);
  }
  return output;
}

let updated = 0;
for (const product of products) {
  const detail = detailsById.get(String(product.source.sourceId));
  if (!detail) continue;
  const attributes = detail.attributes || {};
  const specifications = product.specifications;

  product.model = first(attributes, keyGroups.model) || product.model;

  const capacity = capacityKg(first(attributes, keyGroups.capacity));
  if (capacity !== null) specifications.capacity = capacity;

  const doorWidth = first(attributes, keyGroups.doorWidth);
  if (doorWidth) specifications.doorWidth = normalizeUnits(doorWidth);

  const dimensions = first(attributes, keyGroups.dimensions);
  if (dimensions && !genericDimension.test(dimensions)) specifications.dimensions = normalizeUnits(dimensions);

  const netWeight = first(attributes, keyGroups.netWeight);
  if (netWeight) specifications.netWeight = normalizeUnits(netWeight);

  const material = first(attributes, keyGroups.material);
  if (material && !blockedValue.test(material)) specifications.material = normalizeMaterial(material);

  const finish = first(attributes, keyGroups.finish);
  if (finish && !blockedValue.test(finish)) specifications.finish = finish;

  const openingAngle = first(attributes, keyGroups.openingAngle);
  if (openingAngle) specifications.openingAngle = normalizeAngle(openingAngle);

  const glassThickness = first(attributes, keyGroups.glassThickness);
  if (glassThickness) specifications.glassThickness = normalizeUnits(glassThickness);

  const holdOpen = holdOpenValue(attributes);
  if (holdOpen !== null) specifications.holdOpen = holdOpen;

  specifications.otherVerifiedFields = technicalFields(attributes);
  product.media.sourceGallery = [...new Set(detail.gallery || [])];
  product.source.detailVerifiedAt = detail.fetchedAt || new Date().toISOString();
  product.source.dataConfidence = "partially-verified";
  product.missingFields = [
    "capacity", "doorWidth", "dimensions", "netWeight", "material",
    "finish", "openingAngle", "holdOpen", "glassThickness",
  ].filter((field) => specifications[field] === "" || specifications[field] === null);
  product.notes = "Product detail attributes were extracted from the supplied Alibaba seller listing. Unconfirmed fields remain blank.";
  updated += 1;
}

await writeFile(productsPath, `${JSON.stringify(products, null, 2)}\n`);
console.log(JSON.stringify({ products: products.length, details: details.length, updated }, null, 2));
