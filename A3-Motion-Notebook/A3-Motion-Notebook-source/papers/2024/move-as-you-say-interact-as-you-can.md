# Move as You Say, Interact as You Can

> CVPR 2024 · Motion Generation

## Paper Information

| Field | Content |
|---|---|
| Authors | Zan Wang et al. |
| Year | 2024 |
| Venue | CVPR |
| Task | `Motion Generation` |
| Context | `Scene` `Object` `Language` |
| Method | `Diffusion` |
| Dataset | `HUMANISE` `PROX` |
| Paper | [Open paper](https://openaccess.thecvf.com/content/CVPR2024/html/Wang_Move_as_You_Say_Interact_as_You_Can_Language-guided_Human_CVPR_2024_paper.html) |
| Code | — |

## Problem

Synthesize language-guided motion with credible scene contact.

## Key Idea

> Condition motion generation on explicit scene affordance maps.

## Input / Output

Language + 3D scene affordance → human–scene interaction motion.

## Method

Affordance prediction and diffusion-based motion synthesis are coupled.

## Contribution

Makes scene affordance a first-class condition for motion generation.

## Limitation

Affordance errors propagate into motion and contact quality.

## Embodied AI relevance

High: affordance-grounded action is central to robot manipulation and HRI.
