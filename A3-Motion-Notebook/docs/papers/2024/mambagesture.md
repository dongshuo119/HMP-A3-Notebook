# MambaGesture: Enhancing Co-Speech Gesture Generation with Mamba and Disentangled Multi-Modality Fusion

> ACM Multimedia 2024 · Context-aware Human Motion Generation
>
> Status: Partially verified

## Paper Information

| Field | Content |
|---|---|
| Year | 2024 |
| Title | MambaGesture: Enhancing Co-Speech Gesture Generation with Mamba and Disentangled Multi-Modality Fusion |
| BibTeX | [View BibTeX](#bibtex) |
| Conference | ACM Multimedia |
| Journal | Not applicable (conference paper) |
| Benchmark | BEAT |
| Open Source | Not verified |
| Main Authors | Chencan Fu; Yabiao Wang; Jiangning Zhang; Zhengkai Jiang; Xiaofeng Mao; Jiafu Wu; Weijian Cao; Chengjie Wang; Yanhao Ge; Yong Liu |
| Paper Link | [Official paper](https://doi.org/10.1145/3664647.3680625) |
| GitHub Link | Not verified |
| Publication Status | Official publication record verified |
| Project Page | [Project page](https://fcchit.github.io/mambagesture/) |
| Code / Resources | [Project page](https://fcchit.github.io/mambagesture/) |
| Open Access Copy | [arXiv](https://arxiv.org/abs/2407.19976) |
| Dataset | BEAT |
| Task | Speech- or semantics-conditioned human gesture generation |
| Input | Language / text; 3D scene / environment; Social / multi-person interaction; Speech / audio |
| Output | Generated human gesture or holistic body-motion sequence |
| Context Type | Language / text; 3D scene / environment; Social / multi-person interaction; Speech / audio |
| Method Family | Diffusion model; Transformer / attention |

## BibTeX

```bibtex
@inproceedings{Fu_2024, series={MM ’24}, title={MambaGesture: Enhancing Co-Speech Gesture Generation with Mamba and Disentangled Multi-Modality Fusion}, url={http://dx.doi.org/10.1145/3664647.3680625}, DOI={10.1145/3664647.3680625}, booktitle={Proceedings of the 32nd ACM International Conference on Multimedia}, publisher={ACM}, author={Fu, Chencan and Wang, Yabiao and Zhang, Jiangning and Jiang, Zhengkai and Mao, Xiaofeng and Wu, Jiafu and Cao, Weijian and Wang, Chengjie and Ge, Yanhao and Liu, Yong}, year={2024}, month=Oct, pages={10794–10803}, collection={MM ’24} }
```

## Problem

Co-speech gesture generation is crucial for producing synchronized and realistic human gestures that accompany speech, enhancing the animation of lifelike avatars in virtual environments. While diffusion models have shown impressive capabilities, current approaches often overlook a wide range of modalities and their interactions, resulting in less dynamic and contextually varied gestures.

## Key Idea

To address these challenges, we present MambaGesture, a novel framework integrating a Mamba-based attention block, MambaAttn, with a multi-modality feature fusion module, SEAD.

## Method

Our approach is structured around two pivotal components: the cross-attention enhanced Style and Emotion Aware Disentangled (SEAD) feature fusion module and the MambaAttn-based denois- ing network. At the core of our motion generation lies the diffusion model framework, which employs an iterative process of diffusion (adding noise) and denoising to reconstruct original gestures from a noise distribution, conditioned on audio and additional multi- modal data inputs. The SEAD module is tasked with the intricate fusion of multi-modality data, while the MambaAttn-based denois- ing network is dedicated to the accurate prediction of gestures.

## Contributions

Not verified

## Experiments

We evaluate our method using the BEAT dataset [ 27], which includes human motions captured at 120Hz via a motion capture system. This dataset features extended conversation audios (approximately 10 minutes each) and brief self-talk audios (around 1 minute each) from 30 diverse speakers. It is multi-modal, offering motion, audio, text, style (identity), emotion, and facial expression annotations.

## Limitations

Not verified

## Relevance to In-context Human Motion Prediction

Relevance: Peripheral. This work covers gesture or partial-body motion rather than general full-body motion; it is retained because its conditioning or evaluation setting is useful to context-aware motion research.

## Relevance to Embodied Intelligence

The explicit scene, object, interaction, sensing, or control condition makes this work directly relevant to embodied agents that must anticipate or synthesize physically situated human behavior.

## My Notes

TODO: Complete a second-pass manual reading and record comparisons with the closest papers in this notebook.
