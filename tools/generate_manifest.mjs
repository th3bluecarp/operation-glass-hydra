import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";

const root = path.resolve(path.dirname(new URL(import.meta.url).pathname), "..");
const excluded = new Set(["docs/FILE_INDEX.txt", "docs/SHA256SUMS.txt"]);
function walk(dir) {
  return fs.readdirSync(dir, {withFileTypes:true}).flatMap(entry => {
    const full = path.join(dir, entry.name);
    const rel = path.relative(root, full).replaceAll(path.sep, "/");
    if (entry.name === ".git" || rel.startsWith("telemetry/")) return [];
    return entry.isDirectory() ? walk(full) : excluded.has(rel) ? [] : [rel];
  });
}
const files = walk(root).sort();
const sums = files.map(file => `${crypto.createHash("sha256").update(fs.readFileSync(path.join(root,file))).digest("hex")}  ${file}`);
fs.writeFileSync(path.join(root,"docs/FILE_INDEX.txt"), files.join("\n")+"\n");
fs.writeFileSync(path.join(root,"docs/SHA256SUMS.txt"), sums.join("\n")+"\n");
