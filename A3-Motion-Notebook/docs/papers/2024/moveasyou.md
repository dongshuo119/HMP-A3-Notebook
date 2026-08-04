# Move as You Say, Interact as You Can: Language-guided Human Motion Generation with Scene Affordance

> CVPR 2024 · Context-aware Human Motion Generation
>
> Status: Partially verified

## Paper Information

| Field | Content |
|---|---|
| Year | 2024 |
| Title | Move as You Say, Interact as You Can: Language-guided Human Motion Generation with Scene Affordance |
| BibTeX | [View official BibTeX](#bibtex) |
| Conference | CVPR |
| Journal | Not applicable (conference paper) |
| Benchmark | HumanML3D; HUMANISE; curated unseen-scene evaluation set |
| Open Source | Yes |
| Main Authors | Zan Wang; Yixin Chen; Baoxiong Jia; Puhao Li; Jinlu Zhang; Jingze Zhang; Tengyu Liu; Yixin Zhu; Wei Liang; Siyuan Huang |
| Paper Link | [CVF Open Access](https://openaccess.thecvf.com/content/CVPR2024/html/Wang_Move_as_You_Say_Interact_as_You_Can_Language-guided_Human_CVPR_2024_paper.html) |
| GitHub Link | [Official repository](https://github.com/afford-motion/afford-motion) |
| Project Page | [AffordMotion project page](https://afford-motion.github.io/) |
| Code / Resources | [Official repository](https://github.com/afford-motion/afford-motion) |
| Dataset | HumanML3D; HUMANISE; curated unseen-scene evaluation set |
| Task | Language-guided human motion generation in 3D scenes |
| Input | Text description and a 3D scene point cloud |
| Output | Text-aligned, scene-grounded human motion |
| Context Type | Language; scene geometry; learned affordance map |
| Method Family | Two-stage diffusion |

## BibTeX

```bibtex
@InProceedings{Wang_2024_CVPR,
    author    = {Wang, Zan and Chen, Yixin and Jia, Baoxiong and Li, Puhao and Zhang, Jinlu and Zhang, Jingze and Liu, Tengyu and Zhu, Yixin and Liang, Wei and Huang, Siyuan},
    title     = {Move as You Say Interact as You Can: Language-guided Human Motion Generation with Scene Affordance},
    booktitle = {Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR)},
    month     = {June},
    year      = {2024},
    pages     = {433-444}
}
```

## Problem
Directly learning the joint distribution of language, sparse 3D-scene data, and motion is difficult and generalizes poorly to new scene-description pairs.

## Key Idea

Use a scene affordance map as an explicit intermediate representation that links where an interaction should occur with how the body should move.

## Method

An Affordance Diffusion Model predicts a joint-to-scene distance-field representation from language and scene geometry. An Affordance-to-Motion Diffusion Model then generates motion from the text and predicted affordance. The second stage combines an affordance encoder with a Transformer-based diffusion backbone.

## Contributions

- Introduces affordance maps as an intermediate bridge between grounding and generation.
- Trains a two-stage framework that can use partially paired motion, language, and scene data.
- Evaluates on HumanML3D, HUMANISE, and a curated unseen-scene/generalization set.

## Experiments

The paper reports text-to-motion and scene-aware generation comparisons on HumanML3D and HUMANISE, plus generalization tests using scenes from ScanNet, PROX, Replica, and Matterport3D.

## Limitations

The second stage inherits mistakes from affordance prediction. The representation captures geometry through distances but does not explicitly model forces or object dynamics.

## Relevance to In-context Human Motion Prediction

Relevance: Peripheral. It is a conditional generator, but the intermediate affordance representation is relevant to context-aware future-motion models.

## Relevance to Embodied Intelligence

Affordance maps give an embodied agent an interpretable connection between linguistic intent, interaction location, and motion.

## My Notes

TODO: Compare predicted affordance maps with explicit contact schedules used in physics-aware models.
