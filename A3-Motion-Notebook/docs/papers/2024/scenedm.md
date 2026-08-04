# Harmonizing Stochasticity and Determinism: Scene-responsive Diverse Human Motion Prediction

> NeurIPS 2024 · In-context Human Motion Prediction
>
> Status: Partially verified

## Paper Information

| Field | Content |
|---|---|
| Year | 2024 |
| Title | Harmonizing Stochasticity and Determinism: Scene-responsive Diverse Human Motion Prediction |
| BibTeX | [View official BibTeX](#bibtex) |
| Conference | NeurIPS |
| Journal | Not applicable (conference paper) |
| Benchmark | GIMO; CIRCLE |
| Open Source | Not verified |
| Main Authors | Tuo Wang; Zhenbo Song; Zhenyu Lou; Qiongjie Cui; Luoming Zhang; Cheng Cheng; Haofan Wang; Xu Tang; Huaxia Li; Hong Zhou |
| Paper Link | [NeurIPS Proceedings](https://proceedings.neurips.cc/paper_files/paper/2024/hash/4620a66570e554a3ff0e39dc59bcb07a-Abstract-Conference.html) |
| GitHub Link | Not verified |
| Project Page | [DiMoP3D project page](https://sites.google.com/view/dimop3d) |
| Code / Resources | Not verified |
| Dataset | GIMO; CIRCLE |
| Task | Diverse future human motion prediction in 3D scenes |
| Input | Observed human motion and a 3D scene point cloud |
| Output | Multiple plausible future trajectories and body-motion sequences |
| Context Type | 3D scene geometry; candidate interaction objects |
| Method Family | Scene-conditioned diffusion |

## BibTeX

```bibtex
@inproceedings{NEURIPS2024_4620a665,
 author = {Wang, Tuo and Song, Zhenbo and Lou, Zhenyu and Cui, Qiongjie and Zhang, Luoming and Cheng, Cheng and Wang, Haofan and Tang, Xu and Li, Huaxia and Zhou, Hong},
 booktitle = {Advances in Neural Information Processing Systems},
 doi = {10.52202/079017-1256},
 editor = {A. Globerson and L. Mackey and D. Belgrave and A. Fan and U. Paquet and J. Tomczak and C. Zhang},
 pages = {39784--39811},
 publisher = {Curran Associates, Inc.},
 title = {Harmonizing Stochasticity and Determinism: Scene-responsive Diverse Human Motion Prediction},
 url = {https://proceedings.neurips.cc/paper_files/paper/2024/file/4620a66570e554a3ff0e39dc59bcb07a-Paper-Conference.pdf},
 volume = {37},
 year = {2024}
}
```

## Problem
Diverse prediction must model stochastic human futures while obeying deterministic scene constraints such as collision avoidance and semantically valid object interaction.

## Key Idea

DiMoP3D turns scene-aware diverse prediction into a controllable stochastic process: infer likely interaction targets, plan feasible endpoints and paths, and use those deterministic factors to guide diffusion sampling.

## Method

The context-aware intermodal interpreter identifies likely target objects from scene and history. A behaviorally consistent stochastic planner predicts target poses and obstacle-free trajectories. A self-prompted diffusion generator then produces diverse motions that remain consistent with those plans.

## Contributions

- Defines diverse human motion prediction inside real captured 3D scenes.
- Separates target interpretation, stochastic planning, and scene-constrained motion generation.
- Evaluates physical consistency and diversity on GIMO and CIRCLE.

## Experiments

The paper compares against deterministic and stochastic predictors on GIMO and CIRCLE and reports ablations for its interpreter, planner, and generator. Exact metrics remain to be entered after a focused results-table review.

## Limitations

The pipeline depends on scene segmentation, target selection, and planned endpoints; errors in these stages can constrain or misdirect the generated futures.

## Relevance to In-context Human Motion Prediction

Relevance: Core. It explicitly combines motion history with scene context to predict multiple future human motions.

## Relevance to Embodied Intelligence

Scene-feasible multimodal forecasts can help robots reason over several plausible human intentions instead of committing to one future.

## My Notes

TODO: Study how much diversity remains after imposing deterministic target and endpoint constraints.
