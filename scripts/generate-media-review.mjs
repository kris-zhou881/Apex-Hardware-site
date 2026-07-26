import { readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";

const products = JSON.parse(await readFile(join(process.cwd(), "data", "products.json"), "utf8"));
const cards = products.map((product, index) => `<figure id="i${index}">
  <img src="Apex-Hardware-site/${product.media.main}" alt="">
  <figcaption>${index} · ${product.source.sourceId}<br>${product.category}</figcaption>
</figure>`).join("");
const html = `<!doctype html><meta charset="utf-8"><title>Media review</title>
<style>body{font:11px system-ui;margin:16px}main{display:grid;grid-template-columns:repeat(8,minmax(0,1fr));gap:8px}figure{margin:0;border:1px solid #ddd;padding:4px}img{width:100%;aspect-ratio:1;object-fit:contain}figcaption{line-height:1.3}</style>
<main>${cards}</main>`;
await writeFile(join(process.cwd(), "..", "media-review.html"), html);
console.log("Generated media-review.html");

