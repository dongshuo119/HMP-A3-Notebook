# DIDiffGes: Decoupled Semi-Implicit Diffusion Models for Real-time Gesture Generation from Speech

> AAAI 2025 · Context-aware Human Motion Generation
>
> Status: Partially verified

## Paper Information

| Field | Content |
|---|---|
| Year | 2025 |
| Title | DIDiffGes: Decoupled Semi-Implicit Diffusion Models for Real-time Gesture Generation from Speech |
| BibTeX | [View BibTeX](#bibtex) |
| Conference | AAAI |
| Journal | Not applicable (conference paper) |
| Benchmark | AIST++ |
| Open Source | Not verified |
| Main Authors | Yongkang Cheng; Shaoli Huang; Xuelin Chen; Jifeng Ning; Mingming Gong |
| Paper Link | [Official paper](https://doi.org/10.1609/aaai.v39i3.32248) |
| GitHub Link | Not verified |
| Publication Status | Official publication record verified |
| Project Page | [Project page](https://cyk990422.github.io/DIDiffGes) |
| Code / Resources | [Project page](https://cyk990422.github.io/DIDiffGes) |
| Open Access Copy | [arXiv](https://arxiv.org/abs/2503.17059) |
| Dataset | AIST++ |
| Task | Speech- or semantics-conditioned human gesture generation |
| Input | Speech / audio |
| Output | Generated human gesture or holistic body-motion sequence |
| Context Type | Speech / audio |
| Method Family | Diffusion model |

## BibTeX

```bibtex
@article{Cheng_2025, title={DIDiffGes: Decoupled Semi-Implicit Diffusion Models for Real-time Gesture Generation from Speech}, volume={39}, ISSN={2159-5399}, url={http://dx.doi.org/10.1609/AAAI.V39I3.32248}, DOI={10.1609/aaai.v39i3.32248}, number={3}, journal={Proceedings of the AAAI Conference on Artificial Intelligence}, publisher={Association for the Advancement of Artificial Intelligence (AAAI)}, author={Cheng, Yongkang and Huang, Shaoli and Chen, Xuelin and Ning, Jifeng and Gong, Mingming}, year={2025}, month=Apr, pages={2464–2472} }
```

## Problem

Diffusion models have demonstrated remarkable synthesis quality and diversity in generating co-speech gestures. However, the computationally intensive sampling steps associated with diffusion models hinder their practicality in real-world applications.

## Key Idea

Hence, we present DIDiffGes, for a Decoupled Semi-Implicit Diffusion model-based framework, that can synthesize high-quality, expressive gestures from speech using only a few sampling steps.

## Method

Our goal is to swiftly create high-fidelity and richly ex- pressive co-speech gesture sequences derived from input au- dio signals using diffusion generative models. We ultimately aim to integrate these high-quality models into real-time ap- plications for everyday use. To achieve this, we endeavor to expedite the denoising process by implementing a dimin- ished number of steps and increasing step sizes.

## Contributions

Not verified

## Experiments

In this section, we evaluated the effectiveness of our pro- posed method in concurrent gesture generation. To verify the generalizability of the approach, we also supplemented the experiments with an extension in the music-driven dance do- main. We compared the performance and computational effi- ciency of our approach with other state-of-the-art techniques in these domains.

## Limitations

Not verified

## Relevance to In-context Human Motion Prediction

Relevance: Peripheral. This work covers gesture or partial-body motion rather than general full-body motion; it is retained because its conditioning or evaluation setting is useful to context-aware motion research.

## Relevance to Embodied Intelligence

The work provides motion priors or conditional generation machinery that can support embodied-agent simulation, planning, and human behavior modeling, although embodiment is not its only focus.

## My Notes

TODO: Complete a second-pass manual reading and record comparisons with the closest papers in this notebook.
