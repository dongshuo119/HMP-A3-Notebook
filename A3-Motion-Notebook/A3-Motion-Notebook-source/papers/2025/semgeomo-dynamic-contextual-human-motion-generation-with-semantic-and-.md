# SemGeoMo: Dynamic Contextual Human Motion Generation with Semantic and Geometric Guidance

> CVPR 2025 · Motion Generation

## Paper Information

| Field | Content |
|---|---|
| Authors | Peishan Cong et al. |
| Year | 2025 |
| Venue | CVPR |
| Task | `Motion Generation` |
| Context | `Scene` `Object` `Language` |
| Method | `Diffusion` |
| Dataset | `HUMANISE` `PROX` |
| Paper | [Open paper](https://openaccess.thecvf.com/content/CVPR2025/html/Cong_SemGeoMo_Dynamic_Contextual_Human_Motion_Generation_with_Semantic_and_Geometric_CVPR_2025_paper.html) |
| Code | — |

## Problem

Generate motion that follows semantics while respecting changing geometry.

## Key Idea

> Jointly guide motion using text, affordance, and joint-level geometry.

## Input / Output

Text + dynamic scene context → context-consistent motion.

## Method

Multi-level semantic and geometric conditions steer diffusion sampling.

## Contribution

Treats context as dynamic rather than a fixed scene backdrop.

## Limitation

Complex conditioning increases data and compute demands.

## Embodied AI relevance

Very high: dynamic context is closer to real robot environments.
