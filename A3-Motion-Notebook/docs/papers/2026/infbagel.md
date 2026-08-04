# InfBaGel: Human-Object-Scene Interaction Generation with Dynamic Perception and Iterative Refinement

> ICLR 2026 · Context-aware Human Motion Generation
>
> Status: Partially verified — official ICLR 2026 proceedings

## Paper Information

| Field | Content |
|---|---|
| Authors | Yude Zou; Junji Gong; Xing Gao; Zixuan Li; Tianxing Chen; Guanjie Zheng |
| Venue | ICLR |
| Year | 2026 |
| Paper | [ICLR Proceedings](https://proceedings.iclr.cc/paper_files/paper/2026/hash/b20852ac0a083262ecc98b49bca43086-Abstract-Conference.html) |
| Code | Not verified |
| Project Page | [Official project page](https://yudezou.github.io/InfBaGel-page/) |
| Dataset | HOI datasets with pseudo scene occupancy; high-fidelity HSI data; names not verified |
| Task | Instruction-conditioned human-object-scene interaction generation |
| Input | Language, object state, and voxelized scene context |
| Output | Human and object motion consistent with changing scene state |
| Context Type | Language; object; dynamic 3D scene |
| Method Family | Coarse-to-fine consistency model with dynamic perception |

## Problem

HOSI motion must reason about object-driven scene changes but lacks richly annotated joint human-object-scene datasets.

## Key Idea

Update scene context after every refinement using the previous trajectory, and train with hybrid pseudo-HOSI and real HSI data.

## Method

InfBaGel aligns dynamic perception with consistency-model denoising. Bump-aware sampling guidance reduces collisions without fine geometry, and voxel occupancy injects scene context into HOI data.

## Contributions

- Models dynamic rather than fixed scene context during generation.
- Adds real-time collision/penetration guidance.
- Builds hybrid training from pseudo-HOSI and higher-fidelity HSI sources.

## Experiments

The paper reports HOSI and HOI generation results plus unseen-scene generalization.

## Limitations

Training dataset names and pseudo-data biases remain to be verified.

## Relevance to In-context Human Motion Prediction

Relevance: Peripheral. It is instruction-conditioned generation rather than forecasting.

## Relevance to Embodied Intelligence

Joint object and changing-scene reasoning is closely aligned with embodied manipulation simulation.

## My Notes

TODO: Verify real-time throughput and collision representation.
