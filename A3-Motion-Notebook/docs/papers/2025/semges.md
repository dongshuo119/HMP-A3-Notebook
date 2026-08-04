# SemGes: Semantics-Aware Co-Speech Gesture Generation Using Semantic Coherence and Relevance Learning

> ICCV 2025 · Context-aware Human Motion Generation
>
> Status: Partially verified

## Paper Information

| Field | Content |
|---|---|
| Year | 2025 |
| Title | SemGes: Semantics-Aware Co-Speech Gesture Generation Using Semantic Coherence and Relevance Learning |
| BibTeX | [View BibTeX](#bibtex) |
| Conference | ICCV |
| Journal | Not applicable (conference paper) |
| Benchmark | BEAT |
| Open Source | Not verified |
| Main Authors | Lanmiao Liu; Esam Ghaleb; Asli Özyürek; Zerrin Yumak |
| Paper Link | [Official paper](https://doi.org/10.1109/iccv51701.2025.01296) |
| GitHub Link | Not verified |
| Publication Status | Official publication record verified |
| Project Page | [Project page](https://semgesture.github.io/) |
| Code / Resources | [Project page](https://semgesture.github.io/) |
| Open Access Copy | [arXiv](https://arxiv.org/abs/2507.19359) |
| Dataset | BEAT |
| Task | Speech- or semantics-conditioned human gesture generation |
| Input | Language / text; Object / human-object interaction; Speech / audio |
| Output | Generated human gesture or holistic body-motion sequence |
| Context Type | Language / text; Object / human-object interaction; Speech / audio |
| Method Family | VAE / CVAE |

## BibTeX

```bibtex
@inproceedings{Liu_2025, title={SemGes: Semantics-Aware Co-Speech Gesture Generation Using Semantic Coherence and Relevance Learning}, url={http://dx.doi.org/10.1109/ICCV51701.2025.01296}, DOI={10.1109/iccv51701.2025.01296}, booktitle={2025 IEEE/CVF International Conference on Computer Vision (ICCV)}, publisher={IEEE}, author={Liu, Lanmiao and Ghaleb, Esam and Özyurek, Asli and Yumak, Zerrin}, year={2025}, month=Oct, pages={13963–13973} }
```

## Problem

Creating a virtual avatar with semantically coherent gestures that are aligned with speech is a challenging task. Existing gesture generation research mainly focused on generating rhythmic beat gestures, neglecting the semantic context of the gestures.

## Key Idea

In this paper, we propose a novel approach for semantic grounding in co-speech gesture generation that integrates semantic information at both fine-grained and global levels.

## Method

We propose a two-stage approach that generates co- speech gestures by grounding them in raw speech, text- based semantics, and speaker identity. In Section 3.1, we introduce a VQ-V AE encoder-decoder that learns a robust motion prior. Section 3.2 details our gesture syn- thesis and inference pipeline based on speech, seman- tics, and identity.

## Contributions

Not verified

## Experiments

Not verified

## Limitations

Not verified

## Relevance to In-context Human Motion Prediction

Relevance: Peripheral. This work covers gesture or partial-body motion rather than general full-body motion; it is retained because its conditioning or evaluation setting is useful to context-aware motion research.

## Relevance to Embodied Intelligence

The explicit scene, object, interaction, sensing, or control condition makes this work directly relevant to embodied agents that must anticipate or synthesize physically situated human behavior.

## My Notes

TODO: Complete a second-pass manual reading and record comparisons with the closest papers in this notebook.
