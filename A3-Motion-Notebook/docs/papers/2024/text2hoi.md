# Text2HOI: Text-Guided 3D Motion Generation for Hand-Object Interaction

> CVPR 2024 · Context-aware Human Motion Generation
>
> Status: Partially verified

## Paper Information

| Field | Content |
|---|---|
| Year | 2024 |
| Title | Text2HOI: Text-Guided 3D Motion Generation for Hand-Object Interaction |
| BibTeX | [View BibTeX](#bibtex) |
| Conference | CVPR |
| Journal | Not applicable (conference paper) |
| Benchmark | GRAB |
| Open Source | Yes |
| Main Authors | Junuk Cha; Jihyeon Kim; Jae Shin Yoon; Seungryul Baek |
| Paper Link | [Official paper](https://doi.org/10.1109/cvpr52733.2024.00156) |
| GitHub Link | [Official GitHub](https://github.com/JunukCha/Text2HOI) |
| Publication Status | Official publication record verified |
| Project Page | Not verified |
| Code / Resources | [Official GitHub](https://github.com/JunukCha/Text2HOI) |
| Open Access Copy | [arXiv](https://arxiv.org/abs/2404.00562) |
| Dataset | GRAB |
| Task | Human-object interaction motion generation |
| Input | Language / text; Object / human-object interaction; Social / multi-person interaction |
| Output | Generated 3D human motion sequence |
| Context Type | Language / text; Object / human-object interaction; Social / multi-person interaction |
| Method Family | Diffusion model; Transformer / attention; VAE / CVAE |

## BibTeX

```bibtex
@inproceedings{Cha_2024, title={Text2HOI: Text-Guided 3D Motion Generation for Hand-Object Interaction}, url={http://dx.doi.org/10.1109/CVPR52733.2024.00156}, DOI={10.1109/cvpr52733.2024.00156}, booktitle={2024 IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR)}, publisher={IEEE}, author={Cha, Junuk and Kim, Jihyeon and Yoon, Jae Shin and Baek, Seungryul}, year={2024}, month=June, pages={1577–1585} }
```

## Problem

This paper introduces the first text-guided work for generating the sequence of hand-object interaction in 3D. The main challenge arises from the lack of labeled data where existing ground-truth datasets are nowhere near generalizable in interaction type and object category, which inhibits the modeling of diverse 3D hand-object interaction with the correct physical implication (e.g., contacts and semantics) from text prompts.

## Key Idea

To address this challenge, we propose to decompose the interaction generation task into two subtasks: hand-object contact generation; and hand-object motion generation.

## Method

Our goal is to generate hand-object interacting motions given a text promptT and a canonical object meshMobj. To address them, we design our framework with three stages, as shown in Fig. First, we use the canonical object meshMobj combined with the text feature fCLIP(T) via the CLIP text encoder fCLIP [23] to estimate the contact map ˆmcontact that provides a strong prior for relative 3D locations of hands and an object.

## Contributions

- Our contributions can be summarized as follows: • To the best of our knowledge, we propose the first approach that can generate a sequence of 3D hand-object interaction in various styles and lengths from a text prompt. • We propose a novel compositional framework that enables the modeling of high-quality hand-object interaction from limited data. • We introduce a new fast and efficient hand refinement module that improves physical realism (e.g., penetration-free interaction) without any test-time optimization. • We annotate text labels from existing hands and object motion datasets, which will be made public.

## Experiments

Implementation details We use T = 1,000 noising steps and a cosine noise schedule. We use sinusoidal positional encoding for frame-wise and agent-wise positional encodings. We set the maximum length of motion sequences, denoted asLmax, to 150 frames.

## Limitations

Hand-object interacting motions are generated from the text prompt, considering the relative 3D location and contact between hands and an object; while we are missing forces be- tween them, which may provide better physical understanding. Future works may need to consider such new aspects. The diverse hand-object interactions from the same prompt‘T ype a laptop with both hands. ’.

## Relevance to In-context Human Motion Prediction

Relevance: Peripheral. This work covers an adjacent motion synthesis, control, or refinement task; it is retained because its conditioning or evaluation setting is useful to context-aware motion research.

## Relevance to Embodied Intelligence

The explicit scene, object, interaction, sensing, or control condition makes this work directly relevant to embodied agents that must anticipate or synthesize physically situated human behavior.

## My Notes

TODO: Complete a second-pass manual reading and record comparisons with the closest papers in this notebook.
