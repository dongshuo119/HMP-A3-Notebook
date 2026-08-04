# HOI-Dyn: Learning Interaction Dynamics for Human-Object Motion Diffusion

> NeurIPS 2025 · Context-aware Human Motion Generation
>
> Status: Partially verified

## Paper Information

| Field | Content |
|---|---|
| Authors | Lin Wu; Zhixiang Chen; Jianglin Lan |
| Venue | NeurIPS |
| Year | 2025 |
| Paper | [NeurIPS Proceedings](https://proceedings.neurips.cc/paper_files/paper/2025/hash/82cddd1547dd8e3915d1a220f209e714-Abstract-Conference.html) |
| Code | Not verified |
| Project Page | [Official project page](https://wulin97.github.io/hoi-dyn) |
| Dataset | Not verified |
| Task | Physically and causally consistent human-object motion generation |
| Input | HOI generation conditions and human motion |
| Output | Joint human and object motion |
| Context Type | Human action; object response dynamics |
| Method Family | Diffusion with training-only driver-responder dynamics model |

## Problem

Generating human and object streams independently can produce objects that respond implausibly or before the driving human action.

## Key Idea

Treat the human as a driver and the object as a responder, and use predicted response dynamics to supervise the generator.

## Method

A lightweight Transformer predicts object response from human motion. A residual dynamics loss reduces misleading gradients when that auxiliary prediction is imperfect, and the dynamics module is removed at inference.

## Contributions

- Encodes causal driver-responder structure in HOI diffusion.
- Adds residual-based dynamics consistency supervision.
- Reuses the learned dynamics error as an interaction-quality measure.

## Experiments

The paper reports qualitative and quantitative HOI generation improvements; datasets remain to be verified.

## Limitations

The one-way human-to-object assumption may not cover objects that strongly alter human motion.

## Relevance to In-context Human Motion Prediction

Relevance: Peripheral. It is joint generation, not observed-prefix forecasting.

## Relevance to Embodied Intelligence

Causal object response is central to manipulation simulation and policy learning.

## My Notes

TODO: Check whether bidirectional feedback appears elsewhere in the full model.
