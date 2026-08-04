import fs from "node:fs";
const papers = JSON.parse(fs.readFileSync("papers.json", "utf8"));
const esc = s => String(s || "").replaceAll("|", "\\|");
const link = (label, url) => url ? `[${label}](${url})` : "—";
for (const p of papers) {
  const dir = `docs/papers/${p.year}`; fs.mkdirSync(dir, { recursive:true });
  const md = `# ${p.title}\n\n> ${p.venue} ${p.year} · ${p.task}\n\n<table class="paper-meta">\n<tr><td>Year</td><td>${p.year}</td></tr>\n<tr><td>Venue</td><td>${p.venue}</td></tr>\n<tr><td>Authors</td><td>${esc(p.authors)}</td></tr>\n<tr><td>Task</td><td>${p.task}</td></tr>\n<tr><td>Context</td><td>${p.context.join(" · ")}</td></tr>\n<tr><td>Method</td><td>${p.method.join(" · ")}</td></tr>\n<tr><td>Benchmark</td><td>${p.dataset.join(" · ")}</td></tr>\n<tr><td>Links</td><td>${link("Paper ↗",p.paper)}　${link("Code ↗",p.code)}</td></tr>\n</table>\n\n## Problem\n\n${p.problem}\n\n## Key Idea\n\n!!! tip\n    ${p.keyIdea}\n\n## Input / Output\n\n${p.io}\n\n## Method\n\n${p.methodNote}\n\n## Dataset\n\n${p.dataset.join(", ")}\n\n## Contribution\n\n${p.contribution}\n\n## Limitation\n\n${p.limitation}\n\n## Embodied AI Relevance\n\n!!! success\n    ${p.embodied}\n`;
  fs.writeFileSync(`${dir}/${p.id}.md`, md);
}
const rows = papers.map(p => `| [${esc(p.title)}](papers/${p.year}/${p.id}.md) | ${p.year} | ${p.venue} | ${p.task.replace("Motion ","")} | ${p.context.join(", ")} |`).join("\n");
fs.writeFileSync("docs/index.md", `# A3 Human Motion Research\n\n**In-context Human Motion Prediction & Generation · 2024–2026**\n\n> 一册面向 A3 方向的持续更新型研究笔记。以外部场景、物体、交互、语言、意图或机器人上下文为纳入核心。\n\n## 文献总览\n\n| Title | Year | Venue | Task | Context |\n|---|---:|---|---|---|\n${rows}\n\n## 笔记模板\n\n每篇笔记统一记录：Problem、Key Idea、Input / Output、Method、Dataset、Contribution、Limitation 和 Embodied AI Relevance。\n`);
