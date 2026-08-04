# TIMotion: Temporal and Interactive Framework for Efficient Human-Human Motion Generation

> CVPR 2025 · Context-aware Human Motion Generation
>
> Status: Partially verified

## Paper Information

| Field | Content |
|---|---|
| Year | 2025 |
| Title | TIMotion: Temporal and Interactive Framework for Efficient Human-Human Motion Generation |
| BibTeX | [View BibTeX](#bibtex) |
| Conference | CVPR |
| Journal | Not applicable (conference paper) |
| Benchmark | InterHuman; Inter-X |
| Open Source | Not verified |
| Main Authors | Yabiao Wang; Shuo Wang; Jiangning Zhang; Ke Fan; Jiafu Wu; Zhucun Xue; Yong Liu |
| Paper Link | [Official paper](https://openaccess.thecvf.com/content/CVPR2025/html/Wang_TIMotion_Temporal_and_Interactive_Framework_for_Efficient_Human-Human_Motion_Generation_CVPR_2025_paper.html) |
| GitHub Link | Not verified |
| Publication Status | Official publication record verified |
| Project Page | [Project page](https://aigc-explorer.github.io/TIMotion-page/) |
| Code / Resources | [Project page](https://aigc-explorer.github.io/TIMotion-page/) |
| Open Access Copy | [arXiv](https://arxiv.org/abs/2408.17135) |
| Dataset | InterHuman; Inter-X |
| Task | Interactive multi-person human motion generation |
| Input | Social / multi-person interaction |
| Output | Generated 3D human motion sequence |
| Context Type | Social / multi-person interaction |
| Method Family | Diffusion model |

## BibTeX

```bibtex
@inproceedings{Wang_2025, title={TIMotion: Temporal and Interactive Framework for Efficient Human-Human Motion Generation}, url={http://dx.doi.org/10.1109/CVPR52734.2025.00672}, DOI={10.1109/cvpr52734.2025.00672}, booktitle={2025 IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR)}, publisher={IEEE}, author={Wang, Yabiao and Wang, Shuo and Zhang, Jiangning and Fan, Ke and Wu, Jiafu and Xue, Zhucun and Liu, Yong}, year={2025}, month=June, pages={7169–7178} }
```

## Problem

Human-human motion generation is essential for understanding humans as social beings. Current methods fall into two main categories: single-person-based methods and separate modeling-based methods.

## Key Idea

In this paper, we introduce TIMotion (Temporal and Interactive Modeling), an efficient and effective framework for human-human motion generation.

## Method

Motion Diffusion Model Current methods usually use diffusion models [15] for motion generation. For the Interhuman dataset, a non- canonical representation [16] is typically used. The rep- resentation is formulated as: xi = [jp g, jv g, jr, cf ], where the i-th motion state xi is defined as a collection of global joint positions jp g ∈ R3Nj , velocities jv g ∈ R3Nj in the world frame, 6D representation of local rotationsjr ∈ R6Nj in the root frame, and binary foot-ground contact cf ∈ R4.

## Contributions

- Our contributions can be summarized as follows: • We conceptualize human-human motion generation within a general framework MetaMotion and design an innovative method.
- Our proposed framework, TIMotion, is versatile enough to integrate with various interaction- mixing modules (e.g.
- Transformer, RWKV , Mamba) and reduces the number of parameters of these modules. • To utilize the temporal and causal properties, we propose Causal Interactive Injection to model two separate motion sequences as a unified causal sequence.

## Experiments

We assess our proposed framework using the In- terHuman [16] and Inter-X [39] dataset. InterHuman is the first dataset to incorporate text annotations for two-person motions. This dataset includes 6,022 motions spanning var- ious categories of human actions and is labeled with 16,756 unique descriptions made up of 5,656 distinct words.

## Limitations

Not verified

## Relevance to In-context Human Motion Prediction

Relevance: Core. The paper's central task is conditioned human motion generation, using social / multi-person interaction as part of the problem setting.

## Relevance to Embodied Intelligence

The explicit scene, object, interaction, sensing, or control condition makes this work directly relevant to embodied agents that must anticipate or synthesize physically situated human behavior.

## My Notes

TODO: Complete a second-pass manual reading and record comparisons with the closest papers in this notebook.
