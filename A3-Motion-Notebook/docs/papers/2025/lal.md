# LAL: Enhancing 3D Human Motion Prediction with Latency-aware Auxiliary Learning

> CVPR 2025 · In-context Human Motion Prediction
>
> Status: Partially verified

## Paper Information

| Field | Content |
|---|---|
| Authors | Xiaoning Sun; Dong Wei; Huaijiang Sun; Shengxiang Hu |
| Venue | CVPR |
| Year | 2025 |
| Paper | [CVF Open Access](https://openaccess.thecvf.com/content/CVPR2025/html/Sun_LAL_Enhancing_3D_Human_Motion_Prediction_with_Latency-aware_Auxiliary_Learning_CVPR_2025_paper.html) |
| Code | Not verified |
| Project Page | Not verified |
| Dataset | Not verified |
| Task | Latency-compatible 3D human motion prediction |
| Input | Observed motion; auxiliary training branch additionally sees the latency interval |
| Output | Future motion after the response-latency window |
| Context Type | Motion history; response latency |
| Method Family | Latency-aware auxiliary learning |

## Problem

The initial part of a conventional prediction may have elapsed before a robot can react, yet that elapsed motion is useful supervision during training.

## Key Idea

Train a deployable primary branch without future latency frames and an auxiliary branch with those frames, then transfer the auxiliary insight by feature consistency.

## Method

Both branches predict the valid post-latency target. A tailored consistency loss shares auxiliary features with the primary branch, with optional feature-statistics alignment; only the primary branch is needed at test time.

## Contributions

- Reframes response latency as useful privileged training information.
- Avoids extra test-time computation.
- Provides optional feature-statistics refinement for the primary branch.

## Experiments

The official paper reports improved prediction without additional test-time cost; datasets and exact latency settings remain to be verified.

## Limitations

No explicit scene, object, language, or multi-person context is modeled.

## Relevance to In-context Human Motion Prediction

Relevance: Peripheral. It addresses deployable future prediction, but context is limited to timing and observed motion.

## Relevance to Embodied Intelligence

It directly addresses the observation-to-action delay present in collaborative robots.

## My Notes

TODO: Compare LAL with ALIEN under identical latency distributions.
