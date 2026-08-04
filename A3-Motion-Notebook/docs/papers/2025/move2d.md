# Move-in-2D: 2D-Conditioned Human Motion Generation

> CVPR 2025 · Context-aware Human Motion Generation
>
> Status: Partially verified

## Paper Information

| Field | Content |
|---|---|
| Year | 2025 |
| Title | Move-in-2D: 2D-Conditioned Human Motion Generation |
| BibTeX | [View official BibTeX](#bibtex) |
| Conference | CVPR |
| Journal | Not applicable (conference paper) |
| Benchmark | HiC-Motion, collected from internal open-domain video data |
| Open Source | Not verified |
| Main Authors | Hsin-Ping Huang; Yang Zhou; Jui-Hsien Wang; Difan Liu; Feng Liu; Ming-Hsuan Yang; Zhan Xu |
| Paper Link | [CVF Open Access](https://openaccess.thecvf.com/content/CVPR2025/html/Huang_Move-in-2D_2D-Conditioned_Human_Motion_Generation_CVPR_2025_paper.html) |
| GitHub Link | Not verified |
| Project Page | [Move-in-2D project page](https://hhsinping.github.io/Move-in-2D/) |
| Code / Resources | Not verified |
| Dataset | HiC-Motion, collected from internal open-domain video data |
| Task | 2D-scene- and text-conditioned 3D human motion generation |
| Input | A scene image and text prompt |
| Output | A 3D human motion sequence aligned after projection into the image |
| Context Type | 2D visual scene; language |
| Method Family | Conditional diffusion Transformer |

## BibTeX

```bibtex
@InProceedings{Huang_2025_CVPR,
    author    = {Huang, Hsin-Ping and Zhou, Yang and Wang, Jui-Hsien and Liu, Difan and Liu, Feng and Yang, Ming-Hsuan and Xu, Zhan},
    title     = {Move-in-2D: 2D-Conditioned Human Motion Generation},
    booktitle = {Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR)},
    month     = {June},
    year      = {2025},
    pages     = {22766-22775}
}
```

## Problem
Requiring reconstructed 3D scenes limits scene-aware generation, while reusing a driving motion sequence restricts video generation to motions already captured elsewhere.

## Key Idea

Learn scene compatibility directly from internet videos so a single background image and text prompt can condition a 3D motion sequence.

## Method

A diffusion Transformer encodes text with CLIP and scene patches with DINO. The paper compares in-context tokens, cross-attention, and adaptive layer normalization for injecting conditions, then uses a two-stage training strategy to reduce camera-motion bias.

## Contributions

- Defines 2D-conditioned motion generation from image and language.
- Constructs the 300K-video HiC-Motion training set with estimated 3D motion.
- Uses generated motion as control for downstream human-video synthesis.

## Experiments

Evaluation uses a held-out HiC-Motion test set with 957 samples and compares text-only and 3D-scene-conditioned baselines. The underlying training data is described as internal and is not independently accessible here.

## Limitations

Single-view depth and occlusion remain ambiguous. The training dataset is internally sourced, and no official code repository was verified.

## Relevance to In-context Human Motion Prediction

Relevance: Peripheral. It generates motion rather than predicting from observed motion, but visual scene conditioning is relevant to context-aware reasoning.

## Relevance to Embodied Intelligence

Image-only context lowers sensing requirements, but it lacks the metric geometry and explicit contacts needed for reliable physical execution.

## My Notes

TODO: Check whether image projection consistency correlates with true 3D scene feasibility.
