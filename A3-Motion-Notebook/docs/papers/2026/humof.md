# HUMOF: Human Motion Forecasting in Interactive Social Scenes

> ICLR 2026 · In-context Human Motion Prediction
>
> Status: Partially verified — official ICLR 2026 proceedings

## Paper Information

| Field | Content |
|---|---|
| Authors | Caiyi Sun; Yujing Sun; Xiao Han; Zemin Yang; Jiawei Liu; Xinge Zhu; Siu Ming Yiu; Yuexin Ma |
| Venue | ICLR |
| Year | 2026 |
| Paper | [ICLR Proceedings](https://proceedings.iclr.cc/paper_files/paper/2026/hash/0b7f639ef28a9035a71f7e0c04c1d681-Abstract-Conference.html) |
| Code | [Official GitHub](https://github.com/scy639/HUMOF) |
| Project Page | Not verified |
| Dataset | Four public datasets; names not verified |
| Task | Human motion forecasting in dynamic interactive scenes |
| Input | Observed human motion, other people, and environmental interaction features |
| Output | Future human motion |
| Context Type | Human-human; human-environment; dynamic scene |
| Method Family | Hierarchical interaction reasoning in spatial and frequency domains |

## Problem

Dynamic social scenes contain global interaction structure and fine local cues that create substantial forecast uncertainty.

## Key Idea

Represent interactions hierarchically and reason coarse-to-fine from both spatial and frequency views.

## Method

HUMOF builds high-level context and low-level detail features, then applies a coarse-to-fine interaction module across spatial and spectral representations.

## Contributions

- Models both human-human and human-environment interactions.
- Separates global context and fine-grained interaction detail.
- Combines spatial and frequency reasoning for prediction.

## Experiments

The paper reports state-of-the-art performance across four public datasets.

## Limitations

Dataset names and the exact scene representation still need verification.

## Relevance to In-context Human Motion Prediction

Relevance: Core. Interactive people and environment context are central to its future-motion forecast.

## Relevance to Embodied Intelligence

It addresses situated social forecasting directly rather than adding context after prediction.

## My Notes

TODO: Verify the four benchmarks and whether scene context is geometric, visual, or symbolic.
