# Sitcom-Crafter: A Plot-Driven Human Motion Generation System in 3D Scenes

> ICLR 2025 · Context-aware Human Motion Generation
>
> Status: Partially verified

## Paper Information

| Field | Content |
|---|---|
| Authors | Jianqi Chen; Panwen Hu; Xiaojun Chang; Zhenwei Shi; Michael Kampffmeyer; Xiaodan Liang |
| Venue | ICLR |
| Year | 2025 |
| Paper | [ICLR Proceedings](https://proceedings.iclr.cc/paper_files/paper/2025/hash/de3d2bb604cfc43c81edd2a31b257f03-Abstract-Conference.html) |
| Code | Supplementary files on official proceedings; standalone repository not verified |
| Project Page | Not verified |
| Dataset | Not verified |
| Task | Plot-driven multi-type human motion generation in 3D scenes |
| Input | Plot text and a 3D scene |
| Output | Fused locomotion, human-scene, and human-human motion sequences |
| Context Type | Plot/language; 3D scene; multiple people |
| Method Family | Modular motion-generation and post-processing system |

## Problem

Specialized generators cover separate motion types but do not create long plot-level sequences that combine locomotion, scene interaction, and social interaction.

## Key Idea

Parse a plot into commands, route them to specialized generators, then synchronize, repair, and retarget the results.

## Method

Sitcom-Crafter uses eight modules. Its new scene-aware HHI component uses implicit SDF samples around motion space; augmentation modules handle plot comprehension, synchronization, hands, collisions, and retargeting.

## Contributions

- Integrates several motion types under plot-level control.
- Adds scene-aware multi-person generation without extra collision data collection.
- Provides explicit sequence fusion and repair stages.

## Experiments

The paper evaluates diversity, realism, and scene compatibility of generated plot sequences.

## Limitations

As a system of heterogeneous modules, end-to-end error propagation and component dependence require careful analysis.

## Relevance to In-context Human Motion Prediction

Relevance: Peripheral. It is authored plot generation, not forecasting.

## Relevance to Embodied Intelligence

The modular pipeline connects high-level activity plans to situated multi-person motion.

## My Notes

TODO: Verify datasets and distinguish newly trained modules from reused methods.
