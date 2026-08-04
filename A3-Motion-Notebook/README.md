# A3 Human Motion Research Notebook

2024–2026 **In-context Human Motion Prediction / Generation** 文献笔记库。

## 日常编辑（只需做这件事）

进入 `docs/papers/年份/`，打开对应的 `.md` 文件直接修改。新增论文时，复制一篇现有笔记、改名并填写，再把文件加入 `mkdocs.yml` 的 `nav`。

## 本地预览

```bash
pip install -r requirements.txt
mkdocs serve
```

浏览器打开 `http://127.0.0.1:8000`。

## 发布到 GitHub Pages

1. 新建 GitHub 仓库并上传本项目全部文件。
2. 在 `Settings → Pages → Build and deployment` 中选择 **GitHub Actions**。
3. 推送到 `main` 后，页面自动生成。

## 目录

```text
docs/
├── index.md             # 文献总览
├── papers/
│   ├── 2024/            # 每篇论文一个 Markdown 文件
│   ├── 2025/
│   └── 2026/
└── stylesheets/
```

> `papers.json` 是初始数据备份；日常整理以 `docs/papers/**/*.md` 为准。
