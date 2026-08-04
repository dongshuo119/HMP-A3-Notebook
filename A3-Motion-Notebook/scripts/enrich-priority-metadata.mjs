import fs from "node:fs";
import path from "node:path";

const inputPath = process.argv[2];
if (!inputPath) {
  throw new Error("Usage: node scripts/enrich-priority-metadata.mjs <bibtex.json>");
}

const bibtexByPath = JSON.parse(fs.readFileSync(path.resolve(inputPath), "utf8").replace(/^\uFEFF/, ""));
const projectRoot = process.cwd();
const repositoryRoot = path.resolve(projectRoot, "..");

function parseFields(table) {
  const fields = {};
  for (const match of table.matchAll(/^\|\s*([^|]+?)\s*\|\s*(.*?)\s*\|$/gm)) {
    const key = match[1].trim();
    if (key !== "Field" && key !== "---") fields[key] = match[2].trim();
  }
  return fields;
}

function clickable(value, label = "Open link") {
  if (!value || value === "Not verified") return "Not verified";
  return value.replace(
    /(?<!\]\()https?:\/\/[^\s<>|)]+(?:\([^\s<>|)]*\)[^\s<>|)]*)?/g,
    url => `[${label}](${url})`,
  );
}

function githubLink(value) {
  if (!value || value === "Not verified") return "Not verified";
  const markdown = value.match(/\[([^\]]+)\]\((https?:\/\/github\.com\/[^)]+)\)/i);
  if (markdown) return `[${markdown[1]}](${markdown[2]})`;
  const bare = value.match(/https?:\/\/github\.com\/[^\s<>|)]+/i);
  return bare ? `[Official GitHub](${bare[0]})` : "Not verified";
}

function resolveNote(key) {
  const normalized = key.replaceAll("/", path.sep);
  const fromRepository = path.resolve(repositoryRoot, normalized);
  if (fs.existsSync(fromRepository)) return fromRepository;
  const fromProject = path.resolve(projectRoot, normalized);
  if (fs.existsSync(fromProject)) return fromProject;
  throw new Error(`BibTeX entry does not match a note: ${key}`);
}

let updated = 0;
for (const [key, bibtex] of Object.entries(bibtexByPath)) {
  const notePath = resolveNote(key);
  let source = fs.readFileSync(notePath, "utf8");
  const title = source.match(/^#\s+(.+)$/m)?.[1]?.trim();
  const heading = source.match(/^>\s+(.+?)\s+(20\d{2})\s+·\s+(.+)$/m);
  const tableMatch = source.match(/## Paper Information\s*\r?\n\r?\n([\s\S]*?)(?=\r?\n## )/);
  if (!title || !heading || !tableMatch) throw new Error(`Cannot parse ${notePath}`);

  const fields = parseFields(tableMatch[1]);
  const year = fields.Year || heading[2];
  const conference = fields.Conference || fields.Venue || heading[1].trim();
  const benchmark = fields.Benchmark || fields.Dataset || "Not verified";
  const authors = fields["Main Authors"] || fields.Authors || "Not verified";
  const paper = clickable(fields["Paper Link"] || fields.Paper, "Official paper");
  const code = clickable(fields["Code / Resources"] || fields.Code, "Open resource");
  const github = githubLink(fields["GitHub Link"] || fields.Code || fields["Code / Resources"]);
  const openSource = github === "Not verified" ? "Not verified" : "Yes";
  const projectPage = clickable(fields["Project Page"], "Project page");

  const rows = [
    ["Year", year],
    ["Title", title],
    ["BibTeX", "[View official BibTeX](#bibtex)"],
    ["Conference", conference],
    ["Journal", fields.Journal || "Not applicable (conference paper)"],
    ["Benchmark", benchmark],
    ["Open Source", openSource],
    ["Main Authors", authors],
    ["Paper Link", paper],
    ["GitHub Link", github],
  ];
  if (fields["Publication Status"]) rows.push(["Publication Status", fields["Publication Status"]]);
  rows.push(
    ["Project Page", projectPage],
    ["Code / Resources", code],
    ["Dataset", fields.Dataset || benchmark],
    ["Task", fields.Task || "Not verified"],
    ["Input", fields.Input || "Not verified"],
    ["Output", fields.Output || "Not verified"],
    ["Context Type", fields["Context Type"] || "Not verified"],
    ["Method Family", fields["Method Family"] || "Not verified"],
  );

  const table = [
    "| Field | Content |",
    "|---|---|",
    ...rows.map(([field, value]) => `| ${field} | ${value} |`),
  ].join("\n");
  source = source.replace(tableMatch[1], `${table}\n`);

  const bibtexSection = `## BibTeX\n\n\`\`\`bibtex\n${bibtex.trim()}\n\`\`\`\n\n`;
  if (/^## BibTeX\s*$/m.test(source)) {
    source = source.replace(/^## BibTeX\s*\r?\n\r?\n```bibtex[\s\S]*?```\s*\r?\n\r?\n/m, bibtexSection);
  } else {
    source = source.replace(/^## Problem\s*$/m, `${bibtexSection}## Problem`);
  }

  fs.writeFileSync(notePath, source, "utf8");
  updated += 1;
}

console.log(`Enriched ${updated} paper notes with priority metadata and official BibTeX.`);
