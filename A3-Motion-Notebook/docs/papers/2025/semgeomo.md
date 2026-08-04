# SemGeoMo: Dynamic Contextual Human Motion Generation with Semantic and Geometric Guidance

> CVPR 2025 · Context-aware Human Motion Generation
>
> Status: Partially verified

## Paper Information

| Field | Content |
|---|---|
| Authors | Peishan Cong; Ziyi Wang; Yuexin Ma; Xiangyu Yue |
| Venue | CVPR |
| Year | 2025 |
| Paper | [CVF Open Access](https://openaccess.thecvf.com/content/CVPR2025/html/Cong_SemGeoMo_Dynamic_Contextual_Human_Motion_Generation_with_Semantic_and_Geometric_CVPR_2025_paper.html) |
| Code | [Official repository](https://github.com/4DVLab/SemGeoMo) |
| Project Page | [SemGeoMo project page](https://4dvlab.github.io/project_page/semgeomo/) |
| Dataset | FullBodyManipulation; BEHAVE; IMHD2; HoDome |
| Task | Dynamic contextual human interaction motion generation |
| Input | Sequential point clouds of an interaction target |
| Output | Human interaction motion and a corresponding text description |
| Context Type | Dynamic object/person geometry; affordance; generated language |
| Method Family | Diffusion with semantic/geometric guidance |

## Problem

Dynamic contexts change through time, so a generator must infer both how to interact semantically and where contacts should occur geometrically.

## Key Idea

Generate language and coarse-to-fine contact guidance from sequential point clouds, then use text, affordance, and joint-level constraints together during diffusion.

## Method

SemGeoMo builds multilevel semantic and geometric conditions, including generated descriptions, affordance maps, and joint-contact targets. These guide diffusion sampling, with L-BFGS-based updates used during denoising for geometric constraints.

## Contributions

- Treats the interaction target as dynamic context rather than a fixed scene.
- Combines text, affordance, and joint-level geometric guidance.
- Evaluates across seen and unseen human-object interaction datasets.

## Experiments

The main evaluations use FullBodyManipulation, BEHAVE, and IMHD2, with HoDome used to test unseen-object transfer. Metrics cover pose, hand/contact quality, text-motion alignment, diversity, and foot sliding.

## Limitations

The multi-stage conditioning pipeline can propagate errors from generated text or contact prediction. Iterative guidance adds inference cost and does not explicitly solve forces.

## Relevance to In-context Human Motion Prediction

Relevance: Peripheral. It is synthesis without a past-motion prefix, but it models time-varying external context explicitly.

## Relevance to Embodied Intelligence

Dynamic geometry and contact reasoning are closer to embodied environments in which objects and other agents change state during interaction.

## My Notes

TODO: Isolate which guidance level contributes most to unseen-object generalization.
