import { access, readdir, readFile } from "node:fs/promises";
import { extname, join, normalize, resolve } from "node:path";

const root = process.cwd();
const htmlFiles = [];

async function walk(directory) {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    if (entry.name === ".git" || entry.name === "node_modules" || entry.name === ".tmp") continue;
    const path = join(directory, entry.name);
    if (entry.isDirectory()) await walk(path);
    else if (entry.name.endsWith(".html")) htmlFiles.push(path);
  }
}
await walk(root);

const failures = [];
const checked = new Set();
for (const htmlPath of htmlFiles) {
  const html = await readFile(htmlPath, "utf8");
  const references = [...html.matchAll(/\b(?:href|src)=["']([^"']+)["']/gi)].map((match) => match[1]);
  for (const reference of references) {
    if (!reference || reference.startsWith("#") || /^(?:https?:|mailto:|tel:|javascript:|data:)/i.test(reference)) continue;
    const clean = decodeURIComponent(reference.split(/[?#]/)[0]);
    let target = resolve(htmlPath, "..", clean);
    if (clean.endsWith("/")) target = join(target, "index.html");
    if (!extname(target)) target = join(target, "index.html");
    const key = normalize(`${htmlPath} -> ${target}`);
    if (checked.has(key)) continue;
    checked.add(key);
    try {
      await access(target);
    } catch {
      failures.push({ html: htmlPath.slice(root.length + 1), reference, target: target.slice(root.length + 1) });
    }
  }
}

console.log(JSON.stringify({ htmlFiles: htmlFiles.length, localReferences: checked.size, failures: failures.length }, null, 2));
if (failures.length) {
  console.error(failures.slice(0, 100));
  process.exitCode = 1;
}

