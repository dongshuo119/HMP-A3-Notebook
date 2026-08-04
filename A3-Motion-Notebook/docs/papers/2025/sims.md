# SIMS: Simulating Stylized Human-Scene Interactions with Retrieval-Augmented Script Generation

> ICCV 2025 · Context-aware Human Motion Generation
>
> Status: Partially verified

## Paper Information

| Field | Content |
|---|---|
| Year | 2025 |
| Title | SIMS: Simulating Stylized Human-Scene Interactions with Retrieval-Augmented Script Generation |
| BibTeX | [View BibTeX](#bibtex) |
| Conference | ICCV |
| Journal | Not applicable (conference paper) |
| Benchmark | AMASS; SAMP |
| Open Source | Not verified |
| Main Authors | Wenjia Wang; Liang Pan; Zhiyang Dou; Jidong Mei; Zhouyingcheng Liao; Yuke Lou; Yifan Wu; Lei Yang; Jingbo Wang; Taku Komura |
| Paper Link | [Official paper](https://doi.org/10.1109/iccv51701.2025.01310) |
| GitHub Link | Not verified |
| Publication Status | Official publication record verified |
| Project Page | [Project page](https://wenjiawang0312.github.io/projects/sims/) |
| Code / Resources | [Project page](https://wenjiawang0312.github.io/projects/sims/) |
| Open Access Copy | [arXiv](https://arxiv.org/abs/2411.19921) |
| Dataset | AMASS; SAMP |
| Task | Scene-conditioned human motion generation |
| Input | Language / text; 3D scene / environment; Social / multi-person interaction; Trajectory / kinematic control |
| Output | Generated 3D human motion sequence |
| Context Type | Language / text; 3D scene / environment; Social / multi-person interaction; Trajectory / kinematic control |
| Method Family | LLM-assisted reasoning; Policy / reinforcement learning; Retrieval / memory model |

## BibTeX

```bibtex
@inproceedings{Wang_2025, title={SIMS: Simulating Stylized Human-Scene Interactions with Retrieval-Augmented Script Generation}, url={http://dx.doi.org/10.1109/ICCV51701.2025.01310}, DOI={10.1109/iccv51701.2025.01310}, booktitle={2025 IEEE/CVF International Conference on Computer Vision (ICCV)}, publisher={IEEE}, author={Wang, Wenjia and Pan, Liang and Dou, Zhiyang and Mei, Jidong and Liao, Zhouyingcheng and Lou, Yuke and Wu, Yifan and Yang, Lei and Wang, Jingbo and Komura, Taku}, year={2025}, month=Oct, pages={14117–14127} }
```

## Problem

Simulating stylized human-scene interactions (HSI) in physical environments is a challenging yet fascinating task. Prior works emphasize long-term execution but fall short in achieving both diverse style and physical plausibility.

## Key Idea

To tackle this challenge, we introduce a novel hierarchical framework named SIMS that seamlessly bridges highlevel script-driven intent with a low-level control policy, enabling more expressive and diverse human-scene interactions.

## Method

We present SIMS as a hierarchical character animation sys- tem that leverages LLMs for high-level long-term script planning, multi-condition policies for low-level character control, and a finite state machine to bridge two levels. The supplementary material demonstrates our system’s extensibility in adding new scene interaction skills. Short Script Database Construction A short script p consists of a sequence of key frames {f0, f1, ..., fN }.

## Contributions

- our contributions are threefold: 1.
- We propose a framework for physically simulated char- acters to perform stylized 3D interactions using RAG- based script generation and a multi-condition control policy that encodes style from text while adapting to the environment, featuring: (a) Stylized Control : A script planner for coherent storytelling and a text-conditioned controller for expressive, style-consistent motion. (b) Automatic Generation : A planner that generates exe- cutable keyframes from theme descriptions. (c) Scala- bility: New skills and styles can be integrated by updat- ing the script database and training a new policy.
- We provide a comprehensive dataset of restructured mo- tion clips with captions, emotional labels, and a short script database for stylized interactions.

## Experiments

Dataset We show our collected mixture of 6 motion dataset in Tab. We show the skill for training and the motion duration in minutes. The number with black bounding-box like 20.6 , means the 20.6 minutes of motion in this dataset do not have style diversity, only counted as neutral.

## Limitations

Not verified

## Relevance to In-context Human Motion Prediction

Relevance: Core. The paper's central task is conditioned human motion generation, using language / text; 3d scene / environment; social / multi-person interaction; trajectory / kinematic control as part of the problem setting.

## Relevance to Embodied Intelligence

The explicit scene, object, interaction, sensing, or control condition makes this work directly relevant to embodied agents that must anticipate or synthesize physically situated human behavior.

## My Notes

TODO: Complete a second-pass manual reading and record comparisons with the closest papers in this notebook.
