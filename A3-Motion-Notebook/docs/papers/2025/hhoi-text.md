# Learning to Generate Human-Human-Object Interactions from Textual Descriptions

> NeurIPS 2025 · Context-aware Human Motion Generation
>
> Status: Partially verified

## Paper Information

| Field | Content |
|---|---|
| Authors | Jeonghyeon Na; Sangwon Baik; Inhee Lee; Junyoung Lee; Hanbyul Joo |
| Venue | NeurIPS |
| Year | 2025 |
| Paper | [NeurIPS Proceedings](https://proceedings.neurips.cc/paper_files/paper/2025/hash/bb363e99bcaaa36a891ca927151ffb9a-Abstract-Conference.html) |
| Code | Not verified |
| Project Page | Not verified |
| Dataset | Newly captured HHOI dataset plus synthesized HHOI data; formal name not verified |
| Task | Text-to human-human-object interaction generation |
| Input | Textual interaction description and object context |
| Output | Coordinated motion for two or more people and an object |
| Context Type | Language; human-human; shared object; scene configuration |
| Method Family | Composed score-based diffusion |

## Problem

Human-human spacing and coordination depend on a shared object and scene situation, but dedicated multi-person-object motion data are scarce.

## Key Idea

Learn human-object and human-human components, then integrate them during one sampling process to form complete HHOI motion.

## Method

The paper extracts HOI and HHI intermediates from captured/synthesized HHOIs, trains text-to-HOI and text-to-HHI score models, and combines them in unified sampling.

## Contributions

- Formulates text-conditioned Human-Human-Object Interaction generation.
- Introduces captured and synthesized training data.
- Extends the compositional generation approach beyond two people.

## Experiments

The paper compares against single-human HOI approaches and demonstrates multi-human object-related motion generation.

## Limitations

Dataset name, public release, code, and precise scene representation remain to be verified.

## Relevance to In-context Human Motion Prediction

Relevance: Peripheral. It generates from language rather than forecasting from observed motion.

## Relevance to Embodied Intelligence

Shared-object multi-person motion is a useful model of collaborative embodied tasks.

## My Notes

TODO: Inspect how the two component scores avoid contradictory contact constraints.
