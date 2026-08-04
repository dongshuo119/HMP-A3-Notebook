# SyncDiff: Synchronized Motion Diffusion for Multi-Body Human-Object Interaction Synthesis

> ICCV 2025 · Context-aware Human Motion Generation
>
> Status: Partially verified

## Paper Information

| Field | Content |
|---|---|
| Authors | Wenkun He; Yun Liu; Ruitao Liu; Li Yi |
| Venue | ICCV |
| Year | 2025 |
| Paper | [CVF Open Access](https://openaccess.thecvf.com/content/ICCV2025/html/He_SyncDiff_Synchronized_Motion_Diffusion_for_Multi-Body_Human-Object_Interaction_Synthesis_ICCV_2025_paper.html) |
| Code | Not verified |
| Project Page | Not verified |
| Dataset | Five datasets with different human/hand/object configurations; names not verified |
| Task | Multi-body human-object interaction motion synthesis |
| Input | A variable set of humans, hands, and objects with interaction conditions |
| Output | Synchronized motion for all bodies and objects |
| Context Type | Human-object; human-human; variable body graph |
| Method Family | Graphical-model synchronized diffusion |

## Problem

Arbitrary numbers of moving humans, hands, and objects must remain synchronized, while subtle high-frequency contacts can be dominated by larger low-frequency motion.

## Key Idea

Synchronize body streams explicitly during sampling and model fine interaction signals separately in the frequency domain.

## Method

SyncDiff derives alignment scores for training, performs maximum-likelihood sampling on a dynamic graphical model at inference, and decomposes motion frequencies to retain high-frequency interaction components.

## Contributions

- Generalizes HOI synthesis beyond one human and one object.
- Introduces explicit cross-body synchronization in diffusion sampling.
- Separates high-frequency contacts from low-frequency global motion.

## Experiments

The paper evaluates five datasets spanning different multi-body configurations.

## Limitations

The exact conditioning interface and dataset coverage remain to be verified from the experimental sections.

## Relevance to In-context Human Motion Prediction

Relevance: Peripheral. It is chiefly conditional synthesis, though synchronized reaction among bodies is adjacent to multi-agent forecasting.

## Relevance to Embodied Intelligence

Variable-cardinality interaction synthesis is useful for simulating cooperative manipulation and social contact.

## My Notes

TODO: Verify which bodies are observed conditions versus jointly generated variables.
