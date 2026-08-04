# AvatarGO: Zero-shot 4D Human-Object Interaction Generation and Animation

> ICLR 2025 · Context-aware Human Motion Generation
>
> Status: Partially verified

## Paper Information

| Field | Content |
|---|---|
| Authors | Yukang Cao; Liang Pan; Kai Han; Kwan-Yee K. Wong; Ziwei Liu |
| Venue | ICLR |
| Year | 2025 |
| Paper | [ICLR Proceedings](https://proceedings.iclr.cc/paper_files/paper/2025/hash/999a7fa10ed25ce8b836b14ff003ad50-Abstract-Conference.html) |
| Code | Not verified |
| Project Page | Not verified |
| Dataset | Not verified |
| Task | Zero-shot text-to-4D human-object interaction generation |
| Input | Text and pretrained human/object generative priors |
| Output | Animatable 4D human-object scene and coherent motion |
| Context Type | Language; object; body-part contact |
| Method Family | LLM-guided contact retargeting and motion optimization |

## Problem

Pretrained diffusion priors do not know where an object should contact the body or how the object should move with that body part.

## Key Idea

Infer contact regions from text, then optimize correspondence-aware human and object motion fields.

## Method

AvatarGO uses an LLM with Lang-SAM for contact-part retargeting and constructs human/object motion fields with SMPL-X linear-blend-skinning correspondences.

## Contributions

- Generates animatable 4D HOI from text without task-specific interaction training.
- Separates the contact-location and coupled-motion problems.
- Targets penetration robustness across diverse objects and poses.

## Experiments

The paper compares generation and animation quality across varied human-object pairs and poses.

## Limitations

The pipeline depends on pretrained generative/segmentation components, and datasets and code remain to be verified.

## Relevance to In-context Human Motion Prediction

Relevance: Peripheral. It is zero-shot conditional generation rather than future forecasting.

## Relevance to Embodied Intelligence

Text-to-contact grounding is relevant to specifying manipulation intent.

## My Notes

TODO: Check temporal consistency and whether objects are rigid only.
