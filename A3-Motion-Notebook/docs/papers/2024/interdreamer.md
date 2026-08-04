# InterDreamer: Zero-Shot Text to 3D Dynamic Human-Object Interaction

> NeurIPS 2024 · Context-aware Human Motion Generation
>
> Status: Partially verified

## Paper Information

| Field | Content |
|---|---|
| Authors | Sirui Xu; Ziyin Wang; Yu-Xiong Wang; Liang-Yan Gui |
| Venue | NeurIPS |
| Year | 2024 |
| Paper | [NeurIPS Proceedings](https://proceedings.neurips.cc/paper_files/paper/2024/hash/5eca2e4fe7858cbbfef4e08573cfcb25-Abstract-Conference.html) |
| Code | Not verified |
| Project Page | [InterDreamer project page](https://sirui-xu.github.io/InterDreamer/) |
| Dataset | BEHAVE; OMOMO; CHAIRS |
| Task | Zero-shot text-guided dynamic human-object interaction generation |
| Input | Text instruction, object geometry/initial state, and pretrained semantic priors |
| Output | Coupled 3D human and object motion |
| Context Type | Language; dynamic object; learned interaction dynamics |
| Method Family | LLM and text-to-motion planning plus learned world model |

## Problem

Paired text-interaction datasets are too small to directly reproduce the scale of text-to-motion training, especially when both human and object dynamics must be generated.

## Key Idea

Decouple high-level interaction semantics from low-level dynamics. Reuse large pretrained models for semantic planning and train only a world model for how contacted human body regions affect object motion.

## Method

An LLM decomposes the instruction and identifies relevant body parts. A pretrained text-to-motion model proposes human motion and an initial object pose is retrieved. A contact-centric world model predicts object-state transitions, followed by optimization of the combined human-object sequence.

## Contributions

- Demonstrates text-guided dynamic HOI without paired text-HOI training.
- Separates reusable semantic knowledge from interaction dynamics.
- Tests transfer across BEHAVE, OMOMO, and CHAIRS.

## Experiments

The paper evaluates semantic alignment and interaction plausibility across three HOI datasets, including transfer settings in which the dynamics model is trained on one dataset and applied to others.

## Limitations

The world model captures simplified contact dynamics and does not replace a full physics simulator. Generated results depend on LLM plans, motion priors, retrieval, and post-optimization.

## Relevance to In-context Human Motion Prediction

Relevance: Peripheral. It is text-conditioned synthesis, but its world model explicitly predicts object evolution from human action and is relevant to context-aware dynamics reasoning.

## Relevance to Embodied Intelligence

The semantics/dynamics decomposition directly connects task language, body action, contact, and object-state change.

## My Notes

TODO: Distinguish failures caused by semantic planning from failures of the learned object dynamics.
