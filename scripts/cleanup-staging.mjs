import { lstat, rm } from "node:fs/promises";
import { homedir } from "node:os";
import { isAbsolute, join, normalize, parse } from "node:path";

const stagingRoot = normalize(process.env.APEX_STAGING || join(homedir(), "Desktop", "健达斯", "apex-import-staging"));
const forbidden = new Set([
  "",
  "/",
  normalize(homedir()),
  normalize(join(homedir(), "Desktop")),
  normalize(join(homedir(), "Desktop", "健达斯")),
]);

if (!isAbsolute(stagingRoot) || forbidden.has(stagingRoot) || parse(stagingRoot).root === stagingRoot || !stagingRoot.endsWith(`${join("健达斯", "apex-import-staging")}`)) {
  throw new Error(`Unsafe staging path: ${stagingRoot}`);
}

const target = await lstat(stagingRoot);
if (!target.isDirectory()) throw new Error(`Staging target is not a directory: ${stagingRoot}`);
if (process.env.APEX_DEPLOYMENT_VERIFIED !== "true") {
  throw new Error("Refusing cleanup until APEX_DEPLOYMENT_VERIFIED=true.");
}

await rm(stagingRoot, { recursive: true, force: false });
console.log(`Removed verified staging directory: ${stagingRoot}`);

