# Music-Aligned Holistic 3D Dance Generation via Hierarchical Motion Modeling

> ICCV 2025 · Context-aware Human Motion Generation
>
> Status: Partially verified

## Paper Information

| Field | Content |
|---|---|
| Year | 2025 |
| Title | Music-Aligned Holistic 3D Dance Generation via Hierarchical Motion Modeling |
| BibTeX | [View BibTeX](#bibtex) |
| Conference | ICCV |
| Journal | Not applicable (conference paper) |
| Benchmark | AIST++; FineDance |
| Open Source | Not verified |
| Main Authors | Xiaojie Li; Ronghui Li; Shukai Fang; Shuzhao Xie; Xiaoyang Guo; Jiaqing Zhou; Junkun Peng; Zhi Wang |
| Paper Link | [Official paper](https://doi.org/10.1109/iccv51701.2025.01338) |
| GitHub Link | Not verified |
| Publication Status | Official publication record verified |
| Project Page | [Project page](https://xjli360.github.io/SoulDance) |
| Code / Resources | [Project page](https://xjli360.github.io/SoulDance) |
| Open Access Copy | [arXiv](https://arxiv.org/abs/2507.14915) |
| Dataset | AIST++; FineDance |
| Task | Music/text-conditioned human dance generation |
| Input | Music / rhythm; Trajectory / kinematic control |
| Output | Generated human dance motion sequence |
| Context Type | Music / rhythm; Trajectory / kinematic control |
| Method Family | Retrieval / memory model |

## BibTeX

```bibtex
@inproceedings{Li_2025, title={Music-Aligned Holistic 3D Dance Generation via Hierarchical Motion Modeling}, url={http://dx.doi.org/10.1109/ICCV51701.2025.01338}, DOI={10.1109/iccv51701.2025.01338}, booktitle={2025 IEEE/CVF International Conference on Computer Vision (ICCV)}, publisher={IEEE}, author={Li, Xiaojie and Li, Ronghui and Fang, Shukai and Xie, Shuzhao and Guo, Xiaoyang and Zhou, Jiaqing and Peng, Junkun and Wang, Zhi}, year={2025}, month=Oct, pages={14420–14430} }
```

## Problem

Well-coordinated, music-aligned holistic dance enhances emotional expressiveness and audience engagement. However, generating such dances remains challenging due to the scarcity of holistic 3D dance datasets, the difficulty of achieving cross-modal alignment between music and dance, and the complexity of modeling interdependent motion across the body, hands, and face.

## Key Idea

To address these challenges, we introduce SoulDance, a high-precision music-dance paired dataset captured via professional motion capture systems, featuring meticulously annotated holistic dance movements.

## Method

Not verified

## Contributions

- our main contributions are as follows: • We present SoulDance, a new high-quality, music-paired, holistic dance dataset, the largest to date, encompassing body movements, hand gestures, and facial expressions. • We propose SoulNet, a framework that leverages learned music-dance alignment priors to achieve coordinated holistic dance modeling with rhythmic and emotional consistency between dance and music. • We introduce two new metrics, the EmotionAlign Score and the MMR-Matching Score, to provide a more pre- cise evaluation of facial and body motion alignment with music.
- Our extensive experiments on multiple datasets demonstrate the outstanding performance of our method on both these metrics and public benchmarks.
- Related Work 3D Dance Datasets.

## Experiments

The AIST++ dataset [31] is widely used in 3D dance, containing 1,408 sequences and a total of 5.2 Method SoulDance Dataset FineDance Dataset AIST++ Dataset all↓ body↓ hand↓ f ace↓ all↓ body↓ hand↓ body↓ Vanilla VQ (512) 137.130 97.660 129.518 4.013 137.646 96.598 136.329 42.513Vanilla VQ (1024) 136.752 95.809 128.628 3.739 136.785 97.328 135.194 41.369RVQ-5 108.983 71.831 106.836 2.379 98.399 59.281 102.706 24.246HRVQ-5 (Ours)83.679 47.895 85.085 1.153 90.705 51.708 95.563 24.246 Table 2. Comparison of the motion reconstruction. We evalu- ate the motion reconstruction performance of various quantization methods using MPJPE (measured in mm).

## Limitations

Not verified

## Relevance to In-context Human Motion Prediction

Relevance: Peripheral. This work covers an adjacent motion synthesis, control, or refinement task; it is retained because its conditioning or evaluation setting is useful to context-aware motion research.

## Relevance to Embodied Intelligence

The explicit scene, object, interaction, sensing, or control condition makes this work directly relevant to embodied agents that must anticipate or synthesize physically situated human behavior.

## My Notes

TODO: Complete a second-pass manual reading and record comparisons with the closest papers in this notebook.
