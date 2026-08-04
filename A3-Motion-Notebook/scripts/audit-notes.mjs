import fs from "node:fs";
import path from "node:path";

const papersRoot = path.join("docs", "papers");
const requiredFields = [
  "Year", "Title", "BibTeX", "Conference", "Journal", "Benchmark",
  "Open Source", "Main Authors", "Paper Link", "GitHub Link", "Task",
  "Input", "Output", "Context Type", "Method Family",
];
const files = fs.readdirSync(papersRoot).flatMap(year =>
  fs.readdirSync(path.join(papersRoot, year))
    .filter(file => file.endsWith(".md"))
    .map(file => path.join(papersRoot, year, file)),
);

const failures = [];
const titles = new Map();
const counts = { year: {}, direction: {}, venue: {}, status: {} };
const increment = (group, key) => { group[key] = (group[key] || 0) + 1; };

for (const file of files) {
  const source = fs.readFileSync(file, "utf8");
  const year = path.basename(path.dirname(file));
  increment(counts.year, year);

  const title = source.match(/^# (.+)$/m)?.[1];
  if (!title) failures.push(`${file}: missing H1 title`);
  const normalizedTitle = title?.toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();
  if (normalizedTitle && titles.has(normalizedTitle)) failures.push(`${file}: duplicate of ${titles.get(normalizedTitle)}`);
  else if (normalizedTitle) titles.set(normalizedTitle, file);

  for (const field of requiredFields) {
    const escaped = field.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    if (!new RegExp(`^\\| ${escaped} \\|`, "m").test(source)) failures.push(`${file}: missing ${field}`);
  }

  const directionLine = source.match(/^> .+ · (.+)$/m)?.[1];
  const direction = directionLine === "In-context Human Motion Prediction" ? "Prediction"
    : directionLine === "Context-aware Human Motion Generation" ? "Generation" : "Unknown";
  increment(counts.direction, direction);
  const conference = source.match(/^\| Conference \| (.+) \|$/m)?.[1];
  const journal = source.match(/^\| Journal \| (.+) \|$/m)?.[1];
  if (conference === "Not applicable (journal article)") {
    if (!journal || journal.startsWith("Not applicable")) failures.push(`${file}: invalid journal metadata`);
    increment(counts.venue, journal || "Missing");
  } else {
    if (!journal?.startsWith("Not applicable")) failures.push(`${file}: invalid conference metadata`);
    increment(counts.venue, conference || "Missing");
  }
  increment(counts.status, source.match(/^> Status: (.+)$/m)?.[1] || "Missing");

  const prose = source.replace(/```[\s\S]*?```/g, "");
  for (const match of prose.matchAll(/(?<!\]\()https?:\/\/\S+/g)) failures.push(`${file}: bare URL ${match[0]}`);
  for (const match of source.matchAll(/\[[^\]]+\]\(([^)]+\.md(?:#[^)]+)?)\)/g)) {
    const target = match[1].split("#")[0];
    if (!fs.existsSync(path.resolve(path.dirname(file), target))) failures.push(`${file}: broken local link ${target}`);
  }
}

console.log(JSON.stringify({ total: files.length, counts, failures: failures.length }, null, 2));
if (failures.length) {
  console.error(failures.join("\n"));
  process.exitCode = 1;
}
