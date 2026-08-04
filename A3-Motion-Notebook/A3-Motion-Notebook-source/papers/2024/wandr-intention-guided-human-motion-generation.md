# WANDR: Intention-guided Human Motion Generation

> CVPR 2024 · Motion Generation

## Paper Information

| Field | Content |
|---|---|
| Authors | Markos Diomataris et al. |
| Year | 2024 |
| Venue | CVPR |
| Task | `Motion Generation` |
| Context | `Intention` `Scene` |
| Method | `Transformer` |
| Dataset | `AMASS` `CIRCLE` |
| Paper | [Open paper](https://openaccess.thecvf.com/content/CVPR2024/html/Diomataris_WANDR_Intention-guided_Human_Motion_Generation_CVPR_2024_paper.html) |
| Code | [GitHub](https://github.com/markos-diomataris/wandr) |

## Problem

Generate goal-directed locomotion and reaching without fixed trajectories.

## Key Idea

> Represent intention as spatial targets and synthesize motion that adapts online.

## Input / Output

Motion state + target intention → goal-reaching future motion.

## Method

A learned autoregressive controller models diverse intention-conditioned motion.

## Contribution

Supports flexible, scene-aware reaching from high-level goals.

## Limitation

Targets are simpler than free-form semantic intentions.

## Embodied AI relevance

High: resembles goal-conditioned action generation for embodied agents.
