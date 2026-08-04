# Move-in-2D: 2D-Conditioned Human Motion Generation

> CVPR 2025 · Motion Generation

## Paper Information

| Field | Content |
|---|---|
| Authors | Han-Ping Huang et al. |
| Year | 2025 |
| Venue | CVPR |
| Task | `Motion Generation` |
| Context | `Scene` `Language` |
| Method | `Diffusion` |
| Dataset | `Move-in-2D` |
| Paper | [Open paper](https://openaccess.thecvf.com/content/CVPR2025/html/Huang_Move-in-2D_2D-Conditioned_Human_Motion_Generation_CVPR_2025_paper.html) |
| Code | — |

## Problem

Generate 3D motion grounded in an ordinary scene image.

## Key Idea

> Use 2D scene cues and text as accessible conditions for 3D motion diffusion.

## Input / Output

Single image + text → 3D human motion.

## Method

A conditional diffusion model learns from a large image-aligned motion dataset.

## Contribution

Avoids requiring a reconstructed 3D scene at inference time.

## Limitation

Depth ambiguity can cause weak 3D contact and occlusion errors.

## Embodied AI relevance

Medium-high: offers cheap visual grounding but limited metric geometry.
