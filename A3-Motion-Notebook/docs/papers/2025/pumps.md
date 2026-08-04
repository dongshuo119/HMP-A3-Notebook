# PUMPS: Skeleton-Agnostic Point-Based Universal Motion Pre-Training for Synthesis in Human Motion Tasks

> ICCV 2025 · Context-aware Human Motion Generation
>
> Status: Partially verified

## Paper Information

| Field | Content |
|---|---|
| Year | 2025 |
| Title | PUMPS: Skeleton-Agnostic Point-Based Universal Motion Pre-Training for Synthesis in Human Motion Tasks |
| BibTeX | [View BibTeX](#bibtex) |
| Conference | ICCV |
| Journal | Not applicable (conference paper) |
| Benchmark | Not verified |
| Open Source | Yes |
| Main Authors | Clinton Ansun Mo; Kun Hu; Chengjiang Long; Dong Yuan; Wan-Chi Siu; Zhiyong Wang |
| Paper Link | [Official paper](https://doi.org/10.1109/iccv51701.2025.01345) |
| GitHub Link | [Official GitHub](https://github.com/MiniEval/PUMPS) |
| Publication Status | Official publication record verified |
| Project Page | Not verified |
| Code / Resources | [Official GitHub](https://github.com/MiniEval/PUMPS) |
| Open Access Copy | [arXiv](https://arxiv.org/abs/2507.20170) |
| Dataset | Not verified |
| Task | Conditional human motion generation or synthesis |
| Input | Trajectory / kinematic control |
| Output | Generated 3D human motion sequence |
| Context Type | Trajectory / kinematic control |
| Method Family | Diffusion model; Transformer / attention |

## BibTeX

```bibtex
@inproceedings{Mo_2025, title={PUMPS: Skeleton-Agnostic Point-Based Universal Motion Pre-Training for Synthesis in Human Motion Tasks}, url={http://dx.doi.org/10.1109/ICCV51701.2025.01345}, DOI={10.1109/iccv51701.2025.01345}, booktitle={2025 IEEE/CVF International Conference on Computer Vision (ICCV)}, publisher={IEEE}, author={Mo, Clinton Ansun and Hu, Kun and Long, Chengjiang and Yuan, Dong and Siu, Wan-Chi and Wang, Zhiyong}, year={2025}, month=Oct, pages={14496–14506} }
```

## Problem

Motion skeletons drive 3D character animation by transforming bone hierarchies, but differences in proportions or structure make motion data hard to transfer across skeletons, posing challenges for data-driven motion synthesis. Temporal Point Clouds (TPCs) offer an unstructured, cross-compatible motion representation.

## Key Idea

Therefore, we propose PUMPS, the primordial autoencoder architecture for TPC data.

## Method

Not verified

## Contributions

Not verified

## Experiments

Not verified

## Limitations

Our method’s ability to work in skeleton-specific pose space without supervision faces similar limitations as PC-MRL [29], the method we use to decode temporal point clouds into skeletal motion data. To re-iterate, the method requires either native or non-native motion datasets during train- ing, and at least one known pose during evaluation due to its temporal offset-based evaluation. Furthermore, skeletal bones of undefined or zero length are incompatible with the method.

## Relevance to In-context Human Motion Prediction

Relevance: Peripheral. This work covers an adjacent motion synthesis, control, or refinement task; it is retained because its conditioning or evaluation setting is useful to context-aware motion research.

## Relevance to Embodied Intelligence

The explicit scene, object, interaction, sensing, or control condition makes this work directly relevant to embodied agents that must anticipate or synthesize physically situated human behavior.

## My Notes

TODO: Complete a second-pass manual reading and record comparisons with the closest papers in this notebook.
