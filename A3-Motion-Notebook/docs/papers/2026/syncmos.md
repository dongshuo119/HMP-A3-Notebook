# SyncMos: Scalable Motion Synchronisation for Multi-Agent Scene Interaction

> CVPR 2026 · Context-aware Human Motion Generation
>
> Status: Partially verified — official CVPR 2026 proceedings

## Paper Information

| Field | Content |
|---|---|
| Authors | Lingxiao Li; Dongwon Kim; Lingyan Ruan; Bin Chen; Taesoo Kwon; Taehyun Rhee |
| Venue | CVPR |
| Year | 2026 |
| Paper | [CVF Open Access](https://openaccess.thecvf.com/content/CVPR2026/html/Li_SyncMos_Scalable_Motion_Synchronisation_for_Multi-Agent_Scene_Interaction_CVPR_2026_paper.html) |
| Code | Not verified |
| Project Page | Not verified |
| Dataset | Not verified |
| Task | Text-guided synchronized multi-agent motion in 3D scenes |
| Input | Natural-language interaction instruction and a 3D scene |
| Output | Temporally aligned motion for multiple agents |
| Context Type | Language; scene; multi-agent event dependencies |
| Method Family | Story planning plus diffusion posterior control |

## Problem

Independent single-agent generators do not reliably preserve causal order and shared event timing across many agents.

## Key Idea

Turn language into a dependency graph of events, then time-warp single-agent samples to synchronize them without retraining the base generator.

## Method

A text-guided story planner produces structured events and temporal dependencies. A synchronization module combines time-warping control with diffusion posterior sampling.

## Contributions

- Reuses a single-agent generator for scalable multi-agent synthesis.
- Represents causal and temporal dependencies explicitly.
- Applies synchronization as training-free control of the base model.

## Experiments

The paper evaluates diverse interaction types and reports improved temporal alignment and text consistency.

## Limitations

Dataset names, code availability, and physical-contact evaluation remain to be verified.

## Relevance to In-context Human Motion Prediction

Relevance: Peripheral. It synthesizes instructed interactions rather than forecasting them from observations.

## Relevance to Embodied Intelligence

Event-level coordination is valuable for multi-agent task simulation and collaborative planning.

## My Notes

TODO: Check failure modes when time warping conflicts with physical speed limits.
