# UniEgoMotion: A Unified Model for Egocentric Motion Reconstruction, Forecasting, and Generation

> ICCV 2025 · In-context Human Motion Prediction
>
> Status: Partially verified

## Paper Information

| Field | Content |
|---|---|
| Authors | Chaitanya Patel; Hiroki Nakamura; Yuta Kyuragi; Kazuki Kozuka; Juan Carlos Niebles; Ehsan Adeli |
| Venue | ICCV |
| Year | 2025 |
| Paper | [CVF Open Access](https://openaccess.thecvf.com/content/ICCV2025/html/Patel_UniEgoMotion_A_Unified_Model_for_Egocentric_Motion_Reconstruction_Forecasting_and_ICCV_2025_paper.html) |
| Code | Not verified |
| Project Page | Not verified |
| Dataset | EE4D-Motion, derived from EgoExo4D |
| Task | Egocentric motion reconstruction, forecasting, and generation |
| Input | First-person image(s), with observed motion for forecasting |
| Output | 3D human motion in a head-centric representation |
| Context Type | Egocentric visual scene context |
| Method Family | Unified conditional motion diffusion |

## Problem

First-person cameras have dynamic viewpoints, occlusion, and limited field of view, while many scene-aware methods assume an explicit third-person 3D scene.

## Key Idea

Use image-derived scene semantics and a head-centric representation to unify three egocentric motion tasks without reconstructing a full 3D scene first.

## Method

UniEgoMotion is a conditional diffusion model with a head-centric motion representation. A shared design conditions reconstruction, forecasting, and single-image generation on egocentric visual features.

## Contributions

- Defines egocentric motion generation and forecasting from image context.
- Unifies reconstruction, forecasting, and generation in one model.
- Introduces EE4D-Motion with pseudo-ground-truth 3D motion annotations.

## Experiments

The paper evaluates the three tasks on EE4D-Motion and reports a new benchmark for egocentric motion modeling.

## Limitations

Training relies on pseudo-ground-truth motion, and first-person imagery may omit important off-camera geometry.

## Relevance to In-context Human Motion Prediction

Relevance: Core. Its forecasting task explicitly conditions future 3D motion on first-person visual scene context.

## Relevance to Embodied Intelligence

The setting closely matches wearable agents and robots that must infer motion from an embodied viewpoint.

## My Notes

TODO: Separate the forecasting protocol from the reconstruction and single-image generation settings in a comparison table.
