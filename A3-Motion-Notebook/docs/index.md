# A3 Human Motion Research

**2024–2026 · In-context Human Motion Prediction & Context-aware Human Motion Generation**

> 面向导师汇报与持续科研使用的 Markdown-first 文献笔记。论文信息以各独立笔记为唯一正文数据源；本页和导航由脚本生成。

## 统计

- 共 18 篇
- 年份：2024: 8 · 2025: 7 · 2026: 3
- 方向：Context-aware Human Motion Generation: 14 · In-context Human Motion Prediction: 4
- Venue：CVPR: 14 · ICCV: 1 · NeurIPS: 3

## 文献总览

| Title | Year | Venue | Research Direction | Context Type | Status |
|---|---:|---|---|---|---|
| [InterPhys: Physics-aware Human Motion Synthesis in a Dynamic Scene](papers/2026/interphys.md) | 2026 | CVPR | Context-aware Human Motion Generation | Dynamic object; static scene; contact forces | Partially verified |
| [Stability-Driven Motion Generation for Object-Guided Human-Human Co-Manipulation](papers/2026/como.md) | 2026 | CVPR | Context-aware Human Motion Generation | Shared object geometry/trajectory; partner motion; physical stability | Partially verified |
| [ViHOI: Human-Object Interaction Synthesis with Visual Priors](papers/2026/vihoi.md) | 2026 | CVPR | Context-aware Human Motion Generation | Language; visual object/interaction priors | Partially verified |
| [ChainHOI: Joint-based Kinematic Chain Modeling for Human-Object Interaction Generation](papers/2025/chainhoi.md) | 2025 | CVPR | Context-aware Human Motion Generation | Language; object geometry; joint/object relations | Partially verified |
| [HSI-GPT: A General-Purpose Large Scene-Motion-Language Model for Human Scene Interaction](papers/2025/hsigpt.md) | 2025 | CVPR | Context-aware Human Motion Generation | Language; 3D scene; affordance; key-frame motion | Partially verified |
| [InterAct: Advancing Large-Scale Versatile 3D Human-Object Interaction Generation](papers/2025/interact.md) | 2025 | CVPR | Context-aware Human Motion Generation | Language; action; dynamic object; observed interaction | Partially verified |
| [Move-in-2D: 2D-Conditioned Human Motion Generation](papers/2025/move2d.md) | 2025 | CVPR | Context-aware Human Motion Generation | 2D visual scene; language | Partially verified |
| [SemGeoMo: Dynamic Contextual Human Motion Generation with Semantic and Geometric Guidance](papers/2025/semgeomo.md) | 2025 | CVPR | Context-aware Human Motion Generation | Dynamic object/person geometry; affordance; generated language | Partially verified |
| [Efficient Multi-Person Motion Prediction by Lightweight Spatial and Temporal Interactions](papers/2025/lsti.md) | 2025 | ICCV | In-context Human Motion Prediction | Other people; inter-person distance and temporal interaction | Partially verified |
| [Vision-Guided Action: Enhancing 3D Human Motion Prediction with Gaze-informed Affordance in 3D Scenes](papers/2025/vga.md) | 2025 | CVPR | In-context Human Motion Prediction | Gaze/intention; object affordance; 3D scene | Partially verified |
| [Generating Human Motion in 3D Scenes from Text Descriptions](papers/2024/lhmp.md) | 2024 | CVPR | Context-aware Human Motion Generation | Language; 3D scene; target object | Partially verified |
| [InterControl: Zero-shot Human Interaction Generation by Controlling Every Joint](papers/2024/intercontrol.md) | 2024 | NeurIPS | Context-aware Human Motion Generation | Other people; joint contacts/distances; language-derived constraints | Partially verified |
| [InterDreamer: Zero-Shot Text to 3D Dynamic Human-Object Interaction](papers/2024/interdreamer.md) | 2024 | NeurIPS | Context-aware Human Motion Generation | Language; dynamic object; learned interaction dynamics | Partially verified |
| [Move as You Say, Interact as You Can: Language-guided Human Motion Generation with Scene Affordance](papers/2024/moveasyou.md) | 2024 | CVPR | Context-aware Human Motion Generation | Language; scene geometry; learned affordance map | Partially verified |
| [Scaling Up Dynamic Human-Scene Interaction Modeling](papers/2024/trumans.md) | 2024 | CVPR | Context-aware Human Motion Generation | Scene occupancy; action condition; dynamic object interaction | Partially verified |
| [WANDR: Intention-guided Human Motion Generation](papers/2024/wandr.md) | 2024 | CVPR | Context-aware Human Motion Generation | Spatial goal/intention | Partially verified |
| [Harmonizing Stochasticity and Determinism: Scene-responsive Diverse Human Motion Prediction](papers/2024/scenedm.md) | 2024 | NeurIPS | In-context Human Motion Prediction | 3D scene geometry; candidate interaction objects | Partially verified |
| [Multimodal Sense-Informed Forecasting of 3D Human Motions](papers/2024/msif.md) | 2024 | CVPR | In-context Human Motion Prediction | 3D scene; gaze/intention | Partially verified |

## 编辑方式

直接编辑 `docs/papers/年份/*.md`，然后运行 `node generate-notes.mjs` 同步首页、方向索引和 MkDocs 导航。无法由一手来源确认的字段保留为 `Not verified`。
