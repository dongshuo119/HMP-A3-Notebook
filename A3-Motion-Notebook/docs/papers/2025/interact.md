# InterAct: Advancing Large-Scale Versatile 3D Human-Object Interaction Generation

> CVPR 2025 · Context-aware Human Motion Generation
>
> Status: Partially verified

## Paper Information

| Field | Content |
|---|---|
| Year | 2025 |
| Title | InterAct: Advancing Large-Scale Versatile 3D Human-Object Interaction Generation |
| BibTeX | [View official BibTeX](#bibtex) |
| Conference | CVPR |
| Journal | Not applicable (conference paper) |
| Benchmark | InterAct; InterAct-X, consolidated from seven public HOI sources |
| Open Source | Yes |
| Main Authors | Sirui Xu; Dongting Li; Yucheng Zhang; Xiyan Xu; Qi Long; Ziyin Wang; Yunzhi Lu; Shuchang Dong; Hezi Jiang; Akshat Gupta; Yu-Xiong Wang; Liang-Yan Gui |
| Paper Link | [CVF Open Access](https://openaccess.thecvf.com/content/CVPR2025/html/Xu_InterAct_Advancing_Large-Scale_Versatile_3D_Human-Object_Interaction_Generation_CVPR_2025_paper.html) |
| GitHub Link | [Official repository](https://github.com/wzyabcas/InterAct) |
| Project Page | [InterAct project page](https://sirui-xu.github.io/InterAct/) |
| Code / Resources | [Official repository](https://github.com/wzyabcas/InterAct) |
| Dataset | InterAct; InterAct-X, consolidated from seven public HOI sources |
| Task | Six HOI tasks including generation, imitation, and interaction prediction |
| Input | Text, action, human motion, object motion, or partial interaction depending on task |
| Output | Human and/or object interaction motion |
| Context Type | Language; action; dynamic object; observed interaction |
| Method Family | Unified multitask generative HOI model and data optimization pipeline |

## BibTeX

```bibtex
@InProceedings{Xu_2025_CVPR,
    author    = {Xu, Sirui and Li, Dongting and Zhang, Yucheng and Xu, Xiyan and Long, Qi and Wang, Ziyin and Lu, Yunzhi and Dong, Shuchang and Jiang, Hezi and Gupta, Akshat and Wang, Yu-Xiong and Gui, Liang-Yan},
    title     = {InterAct: Advancing Large-Scale Versatile 3D Human-Object Interaction Generation},
    booktitle = {Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR)},
    month     = {June},
    year      = {2025},
    pages     = {7048-7060}
}
```

## Problem
Existing HOI datasets are small, inconsistent, and affected by penetration, floating contact, and hand artifacts, preventing scalable generative modeling.

## Key Idea

Standardize and repair multiple HOI datasets, enrich them with text, augment motion under contact invariance, and evaluate one unified representation over six complementary tasks.

## Method

The data pipeline consolidates seven sources, corrects whole-body and hand-object artifacts, and expands the data through contact-preserving motion variation. A multitask generative model jointly learns motion and contact across Text-to-Interaction, Action-to-Interaction, Object-to-Human, Human-to-Object, Interaction Prediction, and Interaction Imitation.

## Contributions

- Builds InterAct (21.81 hours) and augmented InterAct-X (30.70 hours).
- Provides standardized text and corrected human-object contacts.
- Defines six tasks under a unified generative benchmark.

## Experiments

The paper evaluates data correction, augmentation, and all six benchmark tasks against task-specific baselines. Exact table values are not reproduced here.

## Limitations

The benchmark inherits licenses, capture biases, rigid-object coverage, and representation choices from its source datasets. Data scale does not by itself guarantee force-level physical validity.

## Relevance to In-context Human Motion Prediction

Relevance: Core for the repository's generation direction and directly relevant through its Interaction Prediction task, where partial human-object motion conditions future interaction.

## Relevance to Embodied Intelligence

Coupled human-object trajectories and task diversity provide useful supervision for manipulation-oriented world and action models.

## My Notes

TODO: Identify which InterAct task and split most closely matches future-motion prediction with object context.
