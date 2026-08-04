# Multimodal Sense-Informed Forecasting of 3D Human Motions

> CVPR 2024 · Motion Prediction

## Paper Information

| Field | Content |
|---|---|
| Authors | Zhenyu Lou et al. |
| Year | 2024 |
| Venue | CVPR |
| Task | `Motion Prediction` |
| Context | `Scene` `Intention` |
| Method | `Transformer` `Diffusion` |
| Dataset | `GIMO` `Human3.6M` |
| Paper | [Open paper](https://openaccess.thecvf.com/content/CVPR2024/html/Lou_Multimodal_Sense-Informed_Forecasting_of_3D_Human_Motions_CVPR_2024_paper.html) |
| Code | — |

## Problem

Forecast plausible 3D futures using more than pose history alone.

## Key Idea

> Fuse complementary sensory cues to reduce future-motion ambiguity.

## Input / Output

Past motion + multimodal observations → future 3D motion.

## Method

Multimodal encoders condition a generative forecasting model.

## Contribution

Shows that sense-informed context improves long-horizon forecasting.

## Limitation

Requires synchronized context modalities that may be unavailable in the wild.

## Embodied AI relevance

High: anticipatory robots can use the forecast for safer planning.
