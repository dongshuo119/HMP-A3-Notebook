# 2024–2026 Coverage Audit

本页记录本轮系统检索的范围、来源、判断规则与已知限制。目的是让“尽量不遗漏”成为可复查的检索过程，而不是无法验证的口头承诺。

> Audit date: 2026-08-04
>
> Coverage status: 2024–2025 retrospective sweep completed; 2026 is still open and requires later incremental review.

## Current Collection

当前共收录 **208 篇**：2024 年 63 篇、2025 年 91 篇、2026 年 54 篇；Prediction 60 篇、Generation 148 篇。

### Conferences

| Venue | Papers |
|---|---:|
| CVPR | 51 |
| ICCV | 23 |
| ICLR | 18 |
| AAAI | 17 |
| ECCV | 13 |
| NeurIPS | 11 |
| ACM Multimedia | 9 |
| SIGGRAPH | 6 |
| 3DV | 4 |
| SIGGRAPH Asia | 1 |

### Journals

| Journal | Papers |
|---|---:|
| IEEE Transactions on Multimedia | 16 |
| IEEE Transactions on Visualization and Computer Graphics | 12 |
| ACM Transactions on Graphics | 8 |
| IEEE Transactions on Pattern Analysis and Machine Intelligence | 7 |
| Pattern Recognition | 7 |
| International Journal of Computer Vision | 5 |

## Search Procedure

1. 对现有笔记执行标题、年份、Venue 和 DOI 去重。
2. 使用多组任务检索式发现候选，包括 human motion prediction/forecasting、pose/trajectory prediction、text/scene/object/interaction-conditioned motion、co-speech gesture、music-driven dance 和 motion synthesis。
3. 对 TPAMI、IJCV、TVCG、TOG、TMM 和 Pattern Recognition 的 2024–2026 全部卷期元数据执行全量扫描，再在本地筛选任务相关标题和摘要。
4. 使用会议/期刊官方页面、DOI 出版记录、CVF Open Access、OpenReview/ICLR、NeurIPS Proceedings、Springer、IEEE、ACM、AAAI 和 arXiv 原文交叉核验。
5. 对边界工作保留 `Relevance: Peripheral`，并说明其与全身 3D 运动主线的差异。

期刊全量扫描的原始规模为：TPAMI 2,488 条、IJCV 996 条、TVCG 2,127 条、TOG 737 条、TMM 2,678 条、Pattern Recognition 4,297 条。

## Inclusion Boundary

收录论文的核心任务必须是以下至少一种：

- 从过去的人体姿态、运动或轨迹预测未来人体行为；
- 由语言、场景、物体、其他人物、语音、音乐、轨迹、传感器或交互控制条件生成人体运动；
- 为上述任务提供直接相关的基准、评价、综述或动作先验，并明确标为 Peripheral。

不收录仅因为标题含有 motion、pose、human 或 generation 的论文。以下任务默认排除：动作识别、单帧姿态估计、人体重建、HOI 检测、纯视频像素生成、动物运动、车辆轨迹，以及不含任何条件的无条件运动生成。

## Verification Status

本轮新增 149 篇：所有论文均已核验作者、正式发表记录、可点击论文链接和 BibTeX；其中 105 篇取得官方页面或 arXiv 摘要，88 篇取得并解析了公开全文。无法取得公开全文的字段保留 `Not verified`，未猜测代码、项目页、数据集或实验结果。

## Known Limitations

- 任何文献检索都无法诚实证明数学意义上的“零遗漏”；本页提供的是可审计、可重复的高召回检索范围。
- 2026 年尚未结束，NeurIPS、ECCV、SIGGRAPH Asia 及期刊 Early Access 仍可能新增正式论文。
- 出版数据库的上线时间、卷期年份和在线优先年份可能不同；本库以正式出版记录的年份为准，并保留 Publication Status。
- 部分 IEEE/ACM/Springer 正文受访问限制，因此对应方法和实验字段保持部分核验状态，等待后续人工全文复查。

后续维护时，应首先重复本页的会议检索与期刊全卷扫描，再运行生成和链接检查脚本。
