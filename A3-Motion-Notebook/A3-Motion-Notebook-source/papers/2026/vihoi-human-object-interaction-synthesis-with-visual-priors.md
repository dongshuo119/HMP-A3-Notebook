# ViHOI: Human-Object Interaction Synthesis with Visual Priors

> CVPR 2026 · Motion Generation

## Paper Information

| Field | Content |
|---|---|
| Authors | Cai et al. |
| Year | 2026 |
| Venue | CVPR |
| Task | `Motion Generation` |
| Context | `Object` `Language` `Scene` |
| Method | `Diffusion` `Transformer` |
| Dataset | `BEHAVE` `InterCap` |
| Paper | [Open paper](https://openaccess.thecvf.com/content/CVPR2026/html/Cai_ViHOI_Human-Object_Interaction_Synthesis_with_Visual_Priors_CVPR_2026_paper.html) |
| Code | — |

## Problem

Ground HOI synthesis in rich object appearance and geometry cues.

## Key Idea

> Inject visual and textual priors into a diffusion interaction generator.

## Input / Output

Object visual prior + text → 3D human–object interaction.

## Method

Self-attention fuses visual/text priors within diffusion generation.

## Contribution

Uses pretrained visual knowledge to improve open-world HOI grounding.

## Limitation

Visual priors may describe appearance better than contact dynamics.

## Embodied AI relevance

High: visually grounded interaction transfers naturally to robot perception.
