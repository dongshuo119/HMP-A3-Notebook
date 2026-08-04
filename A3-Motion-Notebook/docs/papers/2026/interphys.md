# InterPhys: Physics-aware Human Motion Synthesis in a Dynamic Scene

> CVPR 2026 · Context-aware Human Motion Generation
>
> Status: Partially verified

## Paper Information

| Field | Content |
|---|---|
| Year | 2026 |
| Title | InterPhys: Physics-aware Human Motion Synthesis in a Dynamic Scene |
| BibTeX | [View official BibTeX](#bibtex) |
| Conference | CVPR main conference |
| Journal | Not applicable (conference paper) |
| Benchmark | OMOMO; TRUMANS |
| Open Source | Not verified |
| Main Authors | Chaoyue Xing; Wei Mao; Miaomiao Liu |
| Paper Link | [CVF Open Access](https://openaccess.thecvf.com/content/CVPR2026/html/Xing_InterPhys_Physics-aware_Human_Motion_Synthesis_in_a_Dynamic_Scene_CVPR_2026_paper.html) |
| GitHub Link | Not verified |
| Publication Status | Officially published in CVPR 2026 proceedings; CVF Open Access page verified |
| Project Page | Not verified |
| Code / Resources | Not verified |
| Dataset | OMOMO; TRUMANS |
| Task | Physics-aware human motion synthesis with moving objects |
| Input | 3D object motion and a 3D static-scene representation |
| Output | Human motion interacting with the moving object and background scene |
| Context Type | Dynamic object; static scene; contact forces |
| Method Family | Two-stage diffusion with differentiable dynamics constraints |

## BibTeX

```bibtex
@InProceedings{Xing_2026_CVPR,
    author    = {Xing, Chaoyue and Mao, Wei and Liu, Miaomiao},
    title     = {InterPhys: Physics-aware Human Motion Synthesis in a Dynamic Scene},
    booktitle = {Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR)},
    month     = {June},
    year      = {2026},
    pages     = {30729-30739}
}
```

## Problem
Contact or penetration penalties do not guarantee force and torque balance, especially when a human interacts with a moving object and arbitrary scene surfaces.

## Key Idea

Use a continuous distance-based contact-force model and Euler-Lagrange dynamics as soft differentiable constraints inside an end-to-end motion synthesis pipeline.

## Method

The contact model separates normal, static-friction, and kinetic-friction forces and aligns them with local surface geometry. Human, object, and internal body dynamics are formulated jointly. A first diffusion stage predicts contact parameters and hand trajectories; a second generates body motion under those conditions and a dynamics loss.

## Contributions

- Models human-object, human-scene, and internal body forces together.
- Extends continuous contact to arbitrary moving surfaces.
- Integrates force/torque balance with diffusion-based generation.

## Experiments

OMOMO evaluates human interaction with moving objects on a ground plane; a dynamic-object subset of TRUMANS tests richer scenes. The paper reports motion, contact, and physical-plausibility metrics and ablations.

## Limitations

The force model is still an approximation with assumed masses, inertias, and candidate contacts. No official code or project page was verified.

## Relevance to In-context Human Motion Prediction

Relevance: Peripheral. It synthesizes motion from prescribed object motion rather than predicting a person's future from observations, but the physical context is highly relevant to feasible forecasting.

## Relevance to Embodied Intelligence

Explicit coupled human-object dynamics are directly relevant to embodied interaction and physically grounded world models.

## My Notes

TODO: Compare the soft Euler-Lagrange loss with simulator-in-the-loop refinement used by co-manipulation models.
