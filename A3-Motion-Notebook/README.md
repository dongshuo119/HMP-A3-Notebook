# A3 Human Motion Research Notebook

2024–2026 **In-context Human Motion Prediction / Context-aware Human Motion Generation** 文献笔记库。当前收录 **208 篇**：2024 年 63 篇、2025 年 91 篇、2026 年 54 篇；Prediction 60 篇、Generation 148 篇。

## 日常编辑

`docs/papers/年份/*.md` 是论文正文的唯一数据源。新增论文时复制 `docs/PAPER_TEMPLATE.md`，完成一手来源核验后放入对应年份目录，再运行：

```bash
node generate-notes.mjs
```

脚本从 Markdown 笔记生成首页统计、方向索引和 `mkdocs.yml` 导航，避免多处手工同步。论文、代码和项目页使用标准 Markdown 链接，可在 GitHub 与 GitHub Pages 中直接点击。

提交前可运行元数据与链接审计：

```bash
node scripts/audit-notes.mjs
node scripts/check-links.mjs
```

系统检索的会议、期刊、排除规则和已知限制记录在 [Coverage Audit](docs/COVERAGE_AUDIT.md)。

## 本地预览

```bash
pip install -r requirements.txt
mkdocs serve
```

浏览器打开 [http://127.0.0.1:8000](http://127.0.0.1:8000)。

## 发布到 GitHub Pages

1. 新建 GitHub 仓库并上传本项目全部文件。
2. 在 `Settings → Pages → Build and deployment` 中选择 **GitHub Actions**。
3. 推送到 `main` 后，页面自动生成。

## 目录

```text
docs/
├── index.md             # 文献总览
├── PAPER_TEMPLATE.md    # 新论文笔记模板
├── directions/          # 方向索引（自动生成）
├── papers/
│   ├── 2024/            # 每篇论文一个 Markdown 文件
│   ├── 2025/
│   └── 2026/
└── stylesheets/
```

> `papers.json` 与 `A3-Motion-Notebook-source/` 是历史快照，仅为保留旧数据而暂不删除，不再参与生成流程，也不应作为事实来源。
