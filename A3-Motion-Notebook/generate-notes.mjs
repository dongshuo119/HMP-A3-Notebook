import fs from "node:fs";
import path from "node:path";

const docsDir = "docs";
const papersDir = path.join(docsDir, "papers");
const directionInfo = {
  "In-context Human Motion Prediction": {
    slug: "prediction",
    intro: "根据已观察的人体运动预测未来运动，并显式利用场景、物体、视线、意图或其他人物作为上下文。",
  },
  "Context-aware Human Motion Generation": {
    slug: "generation",
    intro: "在语言、场景、物体、社会交互或任务条件下生成人体运动；其中部分工作与未来运动预测相邻，但不等同于预测任务。",
  },
};

const markdownFiles = [];
for (const year of fs.readdirSync(papersDir, { withFileTypes: true })) {
  if (!year.isDirectory() || !/^20\d{2}$/.test(year.name)) continue;
  for (const file of fs.readdirSync(path.join(papersDir, year.name))) {
    if (file.endsWith(".md")) markdownFiles.push(path.join(papersDir, year.name, file));
  }
}

function parsePaper(file) {
  const source = fs.readFileSync(file, "utf8");
  const title = source.match(/^#\s+(.+)$/m)?.[1]?.trim();
  const heading = source.match(/^>\s+(.+?)\s+(20\d{2})\s+·\s+(.+)$/m);
  const status = source.match(/^>\s+Status:\s+(.+)$/m)?.[1]?.trim() || "Not verified";
  if (!title || !heading) throw new Error(`Cannot parse title/venue/direction in ${file}`);

  const fields = {};
  for (const match of source.matchAll(/^\|\s*([^|]+?)\s*\|\s*(.*?)\s*\|$/gm)) {
    const key = match[1].trim();
    if (key !== "Field" && key !== "---") fields[key] = match[2].trim();
  }

  const direction = heading[3].trim();
  if (!directionInfo[direction]) throw new Error(`Unknown direction '${direction}' in ${file}`);
  const relative = path.relative(docsDir, file).replaceAll("\\", "/");
  return {
    title,
    venue: heading[1].trim(),
    year: Number(heading[2]),
    direction,
    status,
    fields,
    relative,
  };
}

const papers = markdownFiles.map(parsePaper).sort((a, b) =>
  b.year - a.year || a.direction.localeCompare(b.direction) || a.title.localeCompare(b.title)
);

const countBy = key => Object.entries(
  papers.reduce((counts, paper) => {
    const value = typeof key === "function" ? key(paper) : paper[key];
    counts[value] = (counts[value] || 0) + 1;
    return counts;
  }, {})
).sort(([a], [b]) => String(a).localeCompare(String(b)));

const summaryRows = papers.map(paper => {
  const note = `[${paper.title}](${paper.relative})`;
  return `| ${note} | ${paper.year} | ${paper.venue} | ${paper.direction} | ${paper.fields["Context Type"] || "Not verified"} | ${paper.status} |`;
}).join("\n");

const yearStats = countBy("year").map(([year, count]) => `${year}: ${count}`).join(" · ");
const directionStats = countBy("direction").map(([direction, count]) => `${direction}: ${count}`).join(" · ");
const venueStats = countBy("venue").map(([venue, count]) => `${venue}: ${count}`).join(" · ");

fs.writeFileSync(path.join(docsDir, "index.md"), `# A3 Human Motion Research\n\n**2024–2026 · In-context Human Motion Prediction & Context-aware Human Motion Generation**\n\n> 面向导师汇报与持续科研使用的 Markdown-first 文献笔记。论文信息以各独立笔记为唯一正文数据源；本页和导航由脚本生成。\n\n## 统计\n\n- 共 ${papers.length} 篇\n- 年份：${yearStats}\n- 方向：${directionStats}\n- Venue：${venueStats}\n\n## 文献总览\n\n| Title | Year | Venue | Research Direction | Context Type | Status |\n|---|---:|---|---|---|---|\n${summaryRows}\n\n## 编辑方式\n\n直接编辑 \`docs/papers/年份/*.md\`，然后运行 \`node generate-notes.mjs\` 同步首页、方向索引和 MkDocs 导航。无法由一手来源确认的字段保留为 \`Not verified\`。\n`, "utf8");

fs.mkdirSync(path.join(docsDir, "directions"), { recursive: true });
for (const [direction, info] of Object.entries(directionInfo)) {
  const selected = papers.filter(paper => paper.direction === direction);
  const sections = [...new Set(selected.map(paper => paper.year))].sort((a, b) => b - a).map(year => {
    const items = selected.filter(paper => paper.year === year).map(paper =>
      `- [${paper.title}](../${paper.relative}) — ${paper.venue} ${paper.year}`
    ).join("\n");
    return `## ${year}\n\n${items}`;
  }).join("\n\n");
  fs.writeFileSync(path.join(docsDir, "directions", `${info.slug}.md`),
    `# ${direction}\n\n${info.intro}\n\n当前收录 **${selected.length}** 篇。\n\n${sections}\n`, "utf8");
}

const configPath = "mkdocs.yml";
const config = fs.readFileSync(configPath, "utf8");
const prefix = config.replace(/\nnav:\s*[\s\S]*$/, "").trimEnd();
const yamlLabel = value => JSON.stringify(value);
const nav = ["nav:", "  - 文献总览: index.md", "  - 研究方向:"];
for (const [direction, info] of Object.entries(directionInfo)) {
  nav.push(`      - ${yamlLabel(direction)}: directions/${info.slug}.md`);
}
nav.push("  - 维护:", "      - 论文笔记模板: PAPER_TEMPLATE.md");
for (const year of [...new Set(papers.map(paper => paper.year))].sort((a, b) => b - a)) {
  nav.push(`  - ${year}:`);
  for (const direction of Object.keys(directionInfo)) {
    const selected = papers.filter(paper => paper.year === year && paper.direction === direction);
    if (!selected.length) continue;
    nav.push(`      - ${yamlLabel(direction)}:`);
    for (const paper of selected) nav.push(`          - ${yamlLabel(paper.title)}: ${paper.relative}`);
  }
}
fs.writeFileSync(configPath, `${prefix}\n${nav.join("\n")}\n`, "utf8");

const yearCounts = Object.fromEntries(countBy("year"));
const directionCounts = Object.fromEntries(countBy("direction"));
const projectReadmePath = "README.md";
let projectReadme = fs.readFileSync(projectReadmePath, "utf8");
projectReadme = projectReadme.replace(
  /当前收录 \*\*\d+ 篇\*\*：2024 年 \d+ 篇、2025 年 \d+ 篇、2026 年 \d+ 篇；Prediction \d+ 篇、Generation \d+ 篇。/,
  `当前收录 **${papers.length} 篇**：2024 年 ${yearCounts[2024] || 0} 篇、2025 年 ${yearCounts[2025] || 0} 篇、2026 年 ${yearCounts[2026] || 0} 篇；Prediction ${directionCounts["In-context Human Motion Prediction"] || 0} 篇、Generation ${directionCounts["Context-aware Human Motion Generation"] || 0} 篇。`
);
fs.writeFileSync(projectReadmePath, projectReadme, "utf8");

const repositoryReadmePath = path.join("..", "README.md");
if (fs.existsSync(repositoryReadmePath)) {
  let repositoryReadme = fs.readFileSync(repositoryReadmePath, "utf8");
  repositoryReadme = repositoryReadme.replace(
    /当前共收录 \*\*\d+ 篇\*\*：In-context Human Motion Prediction \d+ 篇，Context-aware Human Motion Generation \d+ 篇。/,
    `当前共收录 **${papers.length} 篇**：In-context Human Motion Prediction ${directionCounts["In-context Human Motion Prediction"] || 0} 篇，Context-aware Human Motion Generation ${directionCounts["Context-aware Human Motion Generation"] || 0} 篇。`
  );
  fs.writeFileSync(repositoryReadmePath, repositoryReadme, "utf8");
}

console.log(`Generated index, direction pages, navigation, and README statistics from ${papers.length} Markdown notes.`);
