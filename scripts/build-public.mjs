import { cp, mkdir, rm, writeFile } from "node:fs/promises";
import { join } from "node:path";

const root = process.cwd();
const output = join(root, "dist");
await rm(output, { recursive: true, force: true });
await mkdir(output, { recursive: true });

for (const directory of ["assets", "products", "ar"]) {
  await cp(join(root, directory), join(output, directory), { recursive: true });
}
for (const file of ["index.html", "robots.txt", "sitemap.xml", ".nojekyll", "google20e989f855ceec71.html"]) {
  await cp(join(root, file), join(output, file));
}

await writeFile(join(output, "build-info.json"), `${JSON.stringify({ generatedAt: new Date().toISOString(), publicOnly: true }, null, 2)}\n`);
console.log(JSON.stringify({ output: "dist", directories: 3, rootFiles: 6 }, null, 2));
