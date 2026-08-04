# ALIEN: Implicit Neural Representations for Human Motion Prediction under Arbitrary Latency

> CVPR 2025 · In-context Human Motion Prediction
>
> Status: Partially verified

## Paper Information

| Field | Content |
|---|---|
| Authors | Dong Wei; Xiaoning Sun; Xizhan Gao; Shengxiang Hu; Huaijiang Sun |
| Venue | CVPR |
| Year | 2025 |
| Paper | [CVF Open Access](https://openaccess.thecvf.com/content/CVPR2025/html/Wei_ALIEN_Implicit_Neural_Representations_for_Human_Motion_Prediction_under_Arbitrary_CVPR_2025_paper.html) |
| Code | Not verified |
| Project Page | Not verified |
| Dataset | Not verified |
| Task | Future pose prediction with arbitrary system latency |
| Input | Historical motion and a variable latency query |
| Output | Continuous-time future body poses beyond the latency interval |
| Context Type | Motion history; deployment latency |
| Method Family | Implicit neural representation with hypernetwork modulation |

## Problem

Prediction systems incur variable transmission and computation delays, so forecasts made as if inference were instantaneous may already be obsolete when consumed.

## Key Idea

Represent motion as a continuous function and generate instance-specific function parameters from the observation, allowing queries at arbitrary delays.

## Method

ALIEN uses Mamba-like linear attention as a hypernetwork, low-rank modulation for efficient instance-specific implicit-representation weights, and a variable-delay reconstruction auxiliary task.

## Contributions

- Formalizes arbitrary-latency human motion prediction.
- Uses continuous implicit motion representations for delay-flexible querying.
- Combines the main forecast with variable-delay pose reconstruction in multi-task training.

## Experiments

The paper compares against latency-adapted baselines and also evaluates the traditional zero-latency setting; dataset details remain to be verified.

## Limitations

Latency is the main extra condition; scene and interaction context are not explicit.

## Relevance to In-context Human Motion Prediction

Relevance: Peripheral. It is practically important future prediction, but not semantic or scene-conditioned motion reasoning.

## Relevance to Embodied Intelligence

Latency-aware forecasts align better with the time at which a robot can actually execute a response.

## My Notes

TODO: Verify latency sampling protocol and test-time cost.
