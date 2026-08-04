# Towards Immersive Human-X Interaction: A Real-Time Framework for Physically Plausible Motion Synthesis

> ICCV 2025 · Context-aware Human Motion Generation
>
> Status: Partially verified

## Paper Information

| Field | Content |
|---|---|
| Year | 2025 |
| Title | Towards Immersive Human-X Interaction: A Real-Time Framework for Physically Plausible Motion Synthesis |
| BibTeX | [View BibTeX](#bibtex) |
| Conference | ICCV |
| Journal | Not applicable (conference paper) |
| Benchmark | InterHuman; Inter-X |
| Open Source | Not verified |
| Main Authors | Kaiyang Ji; Ye Shi; Zichen Jin; Kangyi Chen; Lan Xu; Yuexin Ma; Jingyi Yu; Jingya Wang |
| Paper Link | [Official paper](https://doi.org/10.1109/iccv51701.2025.00948) |
| GitHub Link | Not verified |
| Publication Status | Official publication record verified |
| Project Page | Not verified |
| Code / Resources | Not verified |
| Open Access Copy | [arXiv](https://arxiv.org/abs/2508.02106) |
| Dataset | InterHuman; Inter-X |
| Task | Interactive multi-person human motion generation |
| Input | Language / text; Social / multi-person interaction; Trajectory / kinematic control |
| Output | Generated 3D human motion sequence |
| Context Type | Language / text; Social / multi-person interaction; Trajectory / kinematic control |
| Method Family | Diffusion model; Autoregressive model; Policy / reinforcement learning |

## BibTeX

```bibtex
@inproceedings{Ji_2025, title={Towards Immersive Human-X Interaction: A Real-Time Framework for Physically Plausible Motion Synthesis}, url={http://dx.doi.org/10.1109/ICCV51701.2025.00948}, DOI={10.1109/iccv51701.2025.00948}, booktitle={2025 IEEE/CVF International Conference on Computer Vision (ICCV)}, publisher={IEEE}, author={Ji, Kaiyang and Shi, Ye and Jin, Zichen and Chen, Kangyi and Xu, Lan and Ma, Yuexin and Yu, Jingyi and Wang, Jingya}, year={2025}, month=Oct, pages={10173–10183} }
```

## Problem

Real-time synthesis of physically plausible human interactions remains a critical challenge for immersive VR/AR systems and humanoid robotics. While existing methods demonstrate progress in kinematic motion generation, they often fail to address the fundamental tension between real-time responsiveness, physical feasibility, and safety requirements in dynamic human-machine interactions.

## Key Idea

We introduce Human-X, a novel framework designed to enable immersive and physically plausible human interactions across diverse entities, including human-avatar, human-humanoid, and human-robot systems.

## Method

System Overview In this section, we present a detailed overview of our im- mersive interaction synthesis system. To facilitate realistic and responsive interactions between two agents in immer- sive environments, our system takes online actor motion capture data as input, processes it through an advanced mo- tion generation pipeline, and outputs continuous, reactive motion in real-time, as shown in Fig.2. The first key com- ponent of our system, detailed in Sec.3.2, is the real-time capture of the actor’s pose and the reconstruction of its state in physics simulation.

## Contributions

Not verified

## Experiments

Datasets and Evaluation Metrics Datasets. We evaluate our model on two datasets: Inter- X [65], which contains 11,388 interaction SMPL-X [43] motion sequences on 40 interaction categories; InterHuman [32], which consists of 6022 interaction SMPL [37] motion sequences with around 1.7M frames. For data processing, we use the actor-reactor annotations provided by [66].

## Limitations

Not verified

## Relevance to In-context Human Motion Prediction

Relevance: Core. The paper's central task is conditioned human motion generation, using language / text; social / multi-person interaction; trajectory / kinematic control as part of the problem setting.

## Relevance to Embodied Intelligence

The explicit scene, object, interaction, sensing, or control condition makes this work directly relevant to embodied agents that must anticipate or synthesize physically situated human behavior.

## My Notes

TODO: Complete a second-pass manual reading and record comparisons with the closest papers in this notebook.
