import fs from "node:fs";
import path from "node:path";

const docsDir = path.resolve("docs");
const siteDir = path.resolve("site");
const failures = [];

function walk(directory, extension) {
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap(entry => {
    const full = path.join(directory, entry.name);
    return entry.isDirectory() ? walk(full, extension) : entry.name.endsWith(extension) ? [full] : [];
  });
}

for (const file of walk(docsDir, ".md")) {
  const source = fs.readFileSync(file, "utf8")
    .replace(/```[\s\S]*?```/g, "")
    .replace(/`[^`]*`/g, "");
  const bare = [...source.matchAll(/(?<!\]\()https?:\/\/[^\s<>|)]+/g)];
  for (const match of bare) failures.push(`${path.relative(docsDir, file)}: bare URL ${match[0]}`);
}

for (const file of walk(siteDir, ".html")) {
  const html = fs.readFileSync(file, "utf8");
  for (const match of html.matchAll(/href="([^"]+)"/g)) {
    const href = match[1];
    if (/^(?:https?:|mailto:|tel:|javascript:)/i.test(href)) continue;
    const [rawTarget, fragment] = href.split("#", 2);
    const decoded = decodeURIComponent(rawTarget.split("?", 1)[0]);
    let target = decoded.startsWith("/")
      ? path.join(siteDir, decoded.replace(/^\/+/, ""))
      : path.resolve(path.dirname(file), decoded || path.basename(file));
    if (decoded.endsWith("/") || (decoded && !path.extname(decoded))) target = path.join(target, "index.html");
    if (!fs.existsSync(target)) {
      failures.push(`${path.relative(siteDir, file)}: missing target ${href}`);
      continue;
    }
    if (fragment && target.endsWith(".html")) {
      const targetHtml = fs.readFileSync(target, "utf8");
      const escaped = fragment.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      if (!new RegExp(`id=["']${escaped}["']`).test(targetHtml)) {
        failures.push(`${path.relative(siteDir, file)}: missing anchor ${href}`);
      }
    }
  }
}

if (failures.length) {
  console.error(failures.join("\n"));
  process.exitCode = 1;
} else {
  console.log("All internal targets and anchors resolve; no bare URLs outside code blocks.");
}
