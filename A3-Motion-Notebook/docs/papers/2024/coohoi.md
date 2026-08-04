# CooHOI: Learning Cooperative Human-Object Interaction with Manipulated Object Dynamics

> NeurIPS 2024 · Context-aware Human Motion Generation
>
> Status: Partially verified

## Paper Information

| Field | Content |
|---|---|
| Year | 2024 |
| Title | CooHOI: Learning Cooperative Human-Object Interaction with Manipulated Object Dynamics |
| BibTeX | [View official BibTeX](#bibtex) |
| Conference | NeurIPS |
| Journal | Not applicable (conference paper) |
| Benchmark | Human motion priors and simulated multi-humanoid object-transport tasks |
| Open Source | Not verified |
| Main Authors | Jiawei Gao; Ziqin Wang; Zeqi Xiao; Jingbo Wang; Tai Wang; Jinkun Cao; Xiaolin Hu; Si Liu; Jifeng Dai; Jiangmiao Pang |
| Paper Link | [NeurIPS Proceedings](https://proceedings.neurips.cc/paper_files/paper/2024/hash/918b9487f8ea4661e8ba5a02b2126658-Abstract-Conference.html) |
| GitHub Link | Not verified |
| Project Page | Not verified |
| Code / Resources | Not verified |
| Dataset | Human motion priors and simulated multi-humanoid object-transport tasks |
| Task | Cooperative physics-based humanoid-object interaction control |
| Input | Local humanoid observations and shared manipulated-object dynamics |
| Output | Coordinated full-body control for multiple humanoids |
| Context Type | Teammates; object dynamics; physics |
| Method Family | Imitation learning plus multi-agent reinforcement learning |

## BibTeX

```bibtex
@inproceedings{NEURIPS2024_918b9487,
 author = {Gao, Jiawei and Wang, Ziqin and Xiao, Zeqi and Wang, Jingbo and Wang, Tai and Cao, Jinkun and Hu, Xiaolin and Liu, Si and Dai, Jifeng and Pang, Jiangmiao},
 booktitle = {Advances in Neural Information Processing Systems},
 doi = {10.52202/079017-2532},
 editor = {A. Globerson and L. Mackey and D. Belgrave and A. Fan and U. Paquet and J. Tomczak and C. Zhang},
 pages = {79741--79763},
 publisher = {Curran Associates, Inc.},
 title = {CooHOI: Learning Cooperative Human-Object Interaction with Manipulated Object Dynamics},
 url = {https://proceedings.neurips.cc/paper_files/paper/2024/file/918b9487f8ea4661e8ba5a02b2126658-Paper-Conference.pdf},
 volume = {37},
 year = {2024}
}
```

## Problem
Cooperative whole-body object transport lacks multi-person mocap data and is expensive to learn directly with many agents.

## Key Idea

Learn object interaction for one humanoid first, then transfer it into multi-agent coordination where object motion acts as implicit communication.

## Method

CooHOI uses two stages: single-agent imitation from human motion priors, then centralized-training/decentralized-execution multi-agent RL driven by shared object dynamics.

## Contributions

- Avoids requiring cooperative multi-human motion-capture demonstrations.
- Uses manipulated-object dynamics to coordinate decentralized agents.
- Extends the policy-learning setup to more participants and object types.

## Experiments

The paper studies multi-humanoid object transportation; precise task suite and metrics remain to be verified.

## Limitations

It is simulated humanoid control rather than passive human-motion forecasting.

## Relevance to In-context Human Motion Prediction

Relevance: Peripheral. Other agents and object dynamics condition reactions, but the task is policy learning.

## Relevance to Embodied Intelligence

It directly addresses cooperative embodied control through physical object-mediated coordination.

## My Notes

TODO: Compare CooHOI with TeamHOI's variable-team policy.
