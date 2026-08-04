# Vision-Guided Action: Enhancing 3D Human Motion Prediction with Gaze-informed Affordance

> CVPR 2025 · Motion Prediction

## Paper Information

| Field | Content |
|---|---|
| Authors | Tianyi Yu et al. |
| Year | 2025 |
| Venue | CVPR |
| Task | `Motion Prediction` |
| Context | `Scene` `Object` `Intention` |
| Method | `Transformer` `Diffusion` |
| Dataset | `GIMO` |
| Paper | [Open paper](https://openaccess.thecvf.com/content/CVPR2025/html/Yu_Vision-Guided_Action_Enhancing_3D_Human_Motion_Prediction_with_Gaze-informed_Affordance_CVPR_2025_paper.html) |
| Code | — |

## Problem

Infer where a person will act before their pose makes the goal obvious.

## Key Idea

> Use gaze to discover scene affordances that condition future motion.

## Input / Output

Past motion + gaze + scene → future 3D motion.

## Method

Gaze-informed affordance features guide a scene-conditioned predictor.

## Contribution

Connects visual attention, intention, affordance, and motion forecasting.

## Limitation

Relies on reliable gaze estimation and visible target regions.

## Embodied AI relevance

Very high: anticipatory HRI depends on early intent and affordance inference.
