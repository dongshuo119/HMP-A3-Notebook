# WANDR: Intention-guided Human Motion Generation

> CVPR 2024 · Context-aware Human Motion Generation
>
> Status: Partially verified

## Paper Information

| Field | Content |
|---|---|
| Authors | Markos Diomataris; Nikos Athanasiou; Omid Taheri; Xi Wang; Otmar Hilliges; Michael J. Black |
| Venue | CVPR |
| Year | 2024 |
| Paper | [CVF Open Access](https://openaccess.thecvf.com/content/CVPR2024/html/Diomataris_WANDR_Intention-guided_Human_Motion_Generation_CVPR_2024_paper.html) |
| Code | [Official repository](https://github.com/markos-diomataris/wandr) |
| Project Page | [WANDR project page](https://wandr.is.tue.mpg.de/) |
| Dataset | AMASS; CIRCLE |
| Task | Goal-directed locomotion and reaching generation |
| Input | Initial body pose and a 3D goal position |
| Output | Human motion that places the wrist at the goal |
| Context Type | Spatial goal/intention |
| Method Family | Conditional variational autoencoder |

## Problem

An avatar must autonomously combine locomotion, orientation, and reaching to touch arbitrary 3D goals without being given a full path or sub-goals.

## Key Idea

WANDR introduces intention features that continuously describe how the body, orientation, and wrist should progress toward the goal, allowing goal-directed behavior to be learned from both reaching and general motion data.

## Method

The model is a conditional VAE that predicts subsequent motion from the current state, target position, and intention features. Generation is autoregressive and can update interactively as the goal changes.

## Contributions

- Defines intention features for autonomous goal reaching.
- Combines AMASS with CIRCLE so locomotion and reaching skills can be learned together.
- Demonstrates generalization to goal positions outside the training distribution.

## Experiments

The paper evaluates goal success, motion naturalness, long-horizon behavior, and generalization on AMASS/CIRCLE-derived settings. Exact values are intentionally omitted here.

## Limitations

The context is a single 3D target rather than a reconstructed scene or free-form task description. Collision avoidance and object affordances are not the central modeling target.

## Relevance to In-context Human Motion Prediction

Relevance: Peripheral. WANDR is a goal-conditioned generator rather than a predictor inferred from observed human history, but its intention representation is useful for modeling goal-conditioned futures.

## Relevance to Embodied Intelligence

Minimal goal conditioning and online adaptation closely resemble the control interface required by embodied avatars and humanoids.

## My Notes

TODO: Compare WANDR's explicit intention features with goal tokens used by diffusion-based motion planners.
