# InterControl: Zero-shot Human Interaction Generation by Controlling Every Joint

> NeurIPS 2024 · Motion Generation

## Paper Information

| Field | Content |
|---|---|
| Authors | Zhenzhi Wang et al. |
| Year | 2024 |
| Venue | NeurIPS |
| Task | `Motion Generation` |
| Context | `Human Interaction` `Language` |
| Method | `Diffusion` |
| Dataset | `HumanML3D` `InterHuman` |
| Paper | [Open paper](https://proceedings.neurips.cc/paper_files/paper/2024/hash/be41269a9fe258f1ecba663b0b402322-Abstract-Conference.html) |
| Code | [GitHub](https://github.com/zhenzhiwang/intercontrol) |

## Problem

Generate coherent interactions for an arbitrary number of people.

## Key Idea

> Translate interactions into controllable inter-person joint-distance constraints.

## Input / Output

Text + joint relations → multi-person interaction motion.

## Method

A motion controller and inverse-kinematics guidance steer a pretrained diffusion prior.

## Contribution

Achieves zero-shot multi-human interaction without fixed-person training data.

## Limitation

Joint constraints do not fully encode social intent or contact physics.

## Embodied AI relevance

Medium-high: useful for social navigation and multi-agent behavior simulation.
