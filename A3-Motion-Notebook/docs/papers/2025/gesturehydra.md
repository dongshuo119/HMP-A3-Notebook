# GestureHYDRA: Semantic Co-Speech Gesture Synthesis via Hybrid Modality Diffusion Transformer and Cascaded-Synchronized Retrieval-Augmented Generation

> ICCV 2025 · Context-aware Human Motion Generation
>
> Status: Partially verified

## Paper Information

| Field | Content |
|---|---|
| Year | 2025 |
| Title | GestureHYDRA: Semantic Co-Speech Gesture Synthesis via Hybrid Modality Diffusion Transformer and Cascaded-Synchronized Retrieval-Augmented Generation |
| BibTeX | [View BibTeX](#bibtex) |
| Conference | ICCV |
| Journal | Not applicable (conference paper) |
| Benchmark | BEAT |
| Open Source | Not verified |
| Main Authors | Quanwei Yang; Luying Huang; Kaisiyuan Wang; Jiazhi Guan; Shengyi He; Fengguo Li; Hang Zhou; Lingyun Yu; Yingying Li; Haocheng Feng; Hongtao Xie |
| Paper Link | [Official paper](https://doi.org/10.1109/iccv51701.2025.01172) |
| GitHub Link | Not verified |
| Publication Status | Official publication record verified |
| Project Page | [Project page](https://mumuwei.github.io/GestureHYDRA/) |
| Code / Resources | [Project page](https://mumuwei.github.io/GestureHYDRA/) |
| Open Access Copy | [arXiv](https://arxiv.org/abs/2507.22731) |
| Dataset | BEAT |
| Task | Speech- or semantics-conditioned human gesture generation |
| Input | Language / text; Speech / audio |
| Output | Generated human gesture or holistic body-motion sequence |
| Context Type | Language / text; Speech / audio |
| Method Family | Diffusion model; Transformer / attention; Retrieval / memory model |

## BibTeX

```bibtex
@inproceedings{Yang_2025, title={GestureHYDRA: Semantic Co-Speech Gesture Synthesis via Hybrid Modality Diffusion Transformer and Cascaded-Synchronized Retrieval-Augmented Generation}, url={http://dx.doi.org/10.1109/ICCV51701.2025.01172}, DOI={10.1109/iccv51701.2025.01172}, booktitle={2025 IEEE/CVF International Conference on Computer Vision (ICCV)}, publisher={IEEE}, author={Yang, Quanwei and Huang, Luying and Wang, Kaisiyuan and Guan, Jiazhi and He, Shengyi and Li, Fengguo and Zhou, Hang and Yu, Lingyun and Li, Yingying and Feng, Haocheng and Xie, Hongtao}, year={2025}, month=Oct, pages={12615–12625} }
```

## Problem

While increasing attention has been paid to co-speech gesture synthesis, most previous works neglect to investigate hand gestures with explicit and essential semantics. To achieve this, we first build a high-quality dataset of 3D human body movements including a set of semantically explicit hand gestures that are commonly used by live streamers.

## Key Idea

Then we present a hybrid-modality gesture generation system GestureHYDRA built upon a hybrid-modality diffusion transformer architecture with novelly designed motion-style injective transformer layers, which enables advanced gesture modeling ability and versatile gesture operations.

## Method

The overview of our system is illustrated in Fig. In this section, we first present the task formulation and the diffu- sion model preliminaries in Sec. Then we elaborate on our novelly proposed hybrid modality diffusion transformer (HM-DiT) and its carefully designed training strategies in Sec.

## Contributions

- Our contributions are summarized below: 1) We build Streamer, a Chinese semantic gesture dataset containing widely used hand gestures that are compatible with various real-world scenarios.
- 2) We propose the Hybrid-Modality gesture generation system which is built upon diffusion transformers.
- It equips the co-speech gesture generation task with versatile functions.

## Experiments

Datasets In this section, we conducted comprehensive experiments on the SHOW [53] dataset and the proposed Streamer dataset to validate the effectiveness of our method. SHOW Dataset.The SHOW dataset comprises 27 hours of talking videos from 4 actors, which includes reconstructed SMPL-X parameters of the whole body and synchronized speech data. The dataset emphasizes the synchronization between speech rhythm and gestures while lacking explicit semantic information.

## Limitations

Not verified

## Relevance to In-context Human Motion Prediction

Relevance: Peripheral. This work covers gesture or partial-body motion rather than general full-body motion; it is retained because its conditioning or evaluation setting is useful to context-aware motion research.

## Relevance to Embodied Intelligence

The work provides motion priors or conditional generation machinery that can support embodied-agent simulation, planning, and human behavior modeling, although embodiment is not its only focus.

## My Notes

TODO: Complete a second-pass manual reading and record comparisons with the closest papers in this notebook.
