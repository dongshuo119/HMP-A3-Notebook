# InterDreamer: Zero-Shot Text to 3D Dynamic Human-Object Interaction

> NeurIPS 2024 · Motion Generation

## Paper Information

| Field | Content |
|---|---|
| Authors | Sirui Xu et al. |
| Year | 2024 |
| Venue | NeurIPS |
| Task | `Motion Generation` |
| Context | `Object` `Language` |
| Method | `Diffusion` `Transformer` |
| Dataset | `BEHAVE` `OMOMO` |
| Paper | [Open paper](https://proceedings.neurips.cc/paper_files/paper/2024/hash/5eca2e4fe7858cbbfef4e08573cfcb25-Abstract-Conference.html) |
| Code | — |

## Problem

Create dynamic HOI without paired text–interaction training data.

## Key Idea

> Decouple semantic planning from low-level interaction dynamics using pretrained models and a world model.

## Input / Output

Text + object state → joint human and object motion.

## Method

LLM and text-to-motion priors provide semantics; a learned world model enforces dynamics.

## Contribution

Demonstrates zero-shot text-conditioned dynamic HOI.

## Limitation

Simple learned physics cannot cover complex contacts and articulated objects.

## Embodied AI relevance

Very high: explicitly links language, world dynamics, and action.
