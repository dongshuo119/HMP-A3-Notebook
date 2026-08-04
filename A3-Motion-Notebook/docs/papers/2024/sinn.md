# Rethinking Human Motion Prediction with Symplectic Integral

> CVPR 2024 · In-context Human Motion Prediction
>
> Status: Partially verified

## Paper Information

| Field | Content |
|---|---|
| Authors | Haipeng Chen; Kedi Lyu; Zhenguang Liu; Yifang Yin; Xun Yang; Yingda Lyu |
| Venue | CVPR |
| Year | 2024 |
| Paper | [CVF Open Access](https://openaccess.thecvf.com/content/CVPR2024/html/Chen_Rethinking_Human_Motion_Prediction_with_Symplectic_Integral_CVPR_2024_paper.html) |
| Code | Not verified |
| Project Page | Not verified |
| Dataset | Human3.6M; CMU Mocap; 3DPW |
| Task | Stable long-term 3D human motion prediction |
| Input | Observed 3D pose sequence |
| Output | Future 3D pose sequence |
| Context Type | Motion history only |
| Method Family | Symplectic/Hamiltonian dynamics-inspired prediction |

## Problem

Prediction errors grow sharply with the horizon because of numerical and modeling instability.

## Key Idea

Use symplectic representations and time splitting to preserve stable dynamics over repeated prediction steps.

## Method

SINN maps pose representations to trajectories on a symplectic manifold, then uses Symplectic Temporal Aggregation to decompose long-term forecasting into stable short-term updates. The framework is designed to plug into multiple physical-dynamics predictors.

## Contributions

- Connects symplectic integration to long-term human motion prediction.
- Separates representation stability from temporal update stability.
- Provides a model-agnostic integration path for existing dynamics models.

## Experiments

The paper evaluates Human3.6M, CMU Mocap, and 3DPW and reports consistent gains over integrated baselines.

## Limitations

No external scene, object, language, or social context is modeled.

## Relevance to In-context Human Motion Prediction

Relevance: Peripheral. It is an important recent prediction method, but its context is limited to the observed pose history.

## Relevance to Embodied Intelligence

Stable long-horizon dynamics can improve downstream planning even without semantic context.

## My Notes

TODO: Compare the symplectic assumptions with non-Hamiltonian contact-rich motion.
