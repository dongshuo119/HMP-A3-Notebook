# InteractMove: Text-Controlled Human-Object Interaction Generation in 3D Scenes with Movable Objects

> ACM Multimedia 2025 · Context-aware Human Motion Generation
>
> Status: Partially verified

## Paper Information

| Field | Content |
|---|---|
| Year | 2025 |
| Title | InteractMove: Text-Controlled Human-Object Interaction Generation in 3D Scenes with Movable Objects |
| BibTeX | [View BibTeX](#bibtex) |
| Conference | ACM Multimedia |
| Journal | Not applicable (conference paper) |
| Benchmark | Not verified |
| Open Source | Yes |
| Main Authors | Xinhao Cai; Minghang Zheng; Xin Jin; Yang Liu |
| Paper Link | [Official paper](https://doi.org/10.1145/3746027.3754910) |
| GitHub Link | [Official GitHub](https://github.com/Cxhcmhhh/InteractMove) |
| Publication Status | Official publication record verified |
| Project Page | Not verified |
| Code / Resources | [Official GitHub](https://github.com/Cxhcmhhh/InteractMove) |
| Open Access Copy | [arXiv](https://arxiv.org/abs/2509.23612) |
| Dataset | Not verified |
| Task | Human-object interaction motion generation |
| Input | Language / text; 3D scene / environment; Object / human-object interaction; Social / multi-person interaction; Music / rhythm; Trajectory / kinematic control |
| Output | Generated 3D human motion sequence |
| Context Type | Language / text; 3D scene / environment; Object / human-object interaction; Social / multi-person interaction; Music / rhythm; Trajectory / kinematic control |
| Method Family | Not verified |

## BibTeX

```bibtex
@inproceedings{Cai_2025, series={MM ’25}, title={InteractMove: Text-Controlled Human-Object Interaction Generation in 3D Scenes with Movable Objects}, url={http://dx.doi.org/10.1145/3746027.3754910}, DOI={10.1145/3746027.3754910}, booktitle={Proceedings of the 33rd ACM International Conference on Multimedia}, publisher={ACM}, author={Cai, Xinhao and Zheng, Minghang and Jin, Xin and Liu, Yang}, year={2025}, month=Oct, pages={9491–9499}, collection={MM ’25} }
```

## Problem

Existing human-scene interaction datasets suffer from insufficient interaction categories and typically only consider interactions with static objects (do not change object positions), and the collection of such datasets with movable objects is difficult and costly. To address this problem, we construct the InteractMove dataset for Movable Human-Object Interaction in 3D Scenes by aligning existing human object interaction data with scene contexts, featuring three key characteristics: 1) scenes containing multiple movable objects with text-controlled interaction specifications (including same-category distractors requiring spatial and 3D scene context understanding), 2) diverse object types and sizes with varied interaction patterns (one-hand, two-hand, etc.), and 3) physically plausible object manipulation trajectories.

## Key Idea

We propose a novel task of text-controlled human object interaction generation in 3D scenes with movable objects.

## Method

Compared to conventional Human-Scene or Human-Object In- teraction generation tasks, our setting introduces unique challenges: the model must (1) identify the target object from free-form lan- guage in a 3D scene, (2) adapt the interaction to diverse object geometries and task descriptions, and (3) ensure the generated ob- ject trajectory is physically plausible and avoids collisions with the surrounding scene. To tackle these challenges, we propose a novel Affordance-Guided Collision-Aware Interaction Generation (AGCA) framework as shown in Fig. We begin with3D object groundingusing a pretrained grounding module [ 29] with the text condition𝑇 to identify its point cloud𝑂′ for the next stage.

## Contributions

- 2 Related Works 2.1 Human-Object Interaction Datasets capturing human-object interaction(HOI) are crucial for training generative models, yet remain difficult and costly to collect.
- Datasets like GRAB [22], BEHAVE [3], and CHAIRS [12] employed optical MoCap/IMU systems to capture detailed human-object inter- actions, including object trajectories.
- However, these interactions are typically performed in isolation without the presence of a full scene, thus lacking contextual constraints from the environment.

## Experiments

Lower is better.2) Multimodality.Assesses the diversity of actions generated from the same prompt and scene. Defined as the averageL2 distance between multiple generated motions. Higher is better.3) Physical Realism.Evaluates whether the motion appears physically plausible, using a pre-trained model to score each frame as realistic (1) or not (0).

## Limitations

Not verified

## Relevance to In-context Human Motion Prediction

Relevance: Core. The paper's central task is conditioned human motion generation, using language / text; 3d scene / environment; object / human-object interaction; social / multi-person interaction; music / rhythm; trajectory / kinematic control as part of the problem setting.

## Relevance to Embodied Intelligence

The explicit scene, object, interaction, sensing, or control condition makes this work directly relevant to embodied agents that must anticipate or synthesize physically situated human behavior.

## My Notes

TODO: Complete a second-pass manual reading and record comparisons with the closest papers in this notebook.
