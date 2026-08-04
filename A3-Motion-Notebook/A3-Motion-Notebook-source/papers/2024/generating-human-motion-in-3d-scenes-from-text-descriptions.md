# Generating Human Motion in 3D Scenes from Text Descriptions

> CVPR 2024 · Motion Generation

## Paper Information

| Field | Content |
|---|---|
| Authors | Zhi Cen et al. |
| Year | 2024 |
| Venue | CVPR |
| Task | `Motion Generation` |
| Context | `Scene` `Object` `Language` |
| Method | `Diffusion` |
| Dataset | `HUMANISE` |
| Paper | [Open paper](https://openaccess.thecvf.com/content/CVPR2024/html/Cen_Generating_Human_Motion_in_3D_Scenes_from_Text_Descriptions_CVPR_2024_paper.html) |
| Code | — |

## Problem

Generate motion that obeys both language and 3D scene constraints.

## Key Idea

> Use an object-centric scene representation to ground text in interaction targets.

## Input / Output

Text + 3D scene → scene-consistent human motion.

## Method

A conditional generative model aligns language, target objects, and motion.

## Contribution

Improves semantic and geometric consistency of scene-conditioned synthesis.

## Limitation

Static scenes and annotated target objects constrain generality.

## Embodied AI relevance

High: connects language grounding, affordance, and physical action.
