# CoheDancers: Enhancing Interactive Group Dance Generation through Music-Driven Coherence Decomposition

> ACM Multimedia 2025 · Context-aware Human Motion Generation
>
> Status: Partially verified

## Paper Information

| Field | Content |
|---|---|
| Year | 2025 |
| Title | CoheDancers: Enhancing Interactive Group Dance Generation through Music-Driven Coherence Decomposition |
| BibTeX | [View BibTeX](#bibtex) |
| Conference | ACM Multimedia |
| Journal | Not applicable (conference paper) |
| Benchmark | BEAT |
| Open Source | Not verified |
| Main Authors | Kaixing Yang; Xulong Tang; Haoyu Wu; Biao Qin; Hongyan Liu; Jun He; Zhaoxin Fan |
| Paper Link | [Official paper](https://doi.org/10.1145/3746027.3755267) |
| GitHub Link | Not verified |
| Publication Status | Official publication record verified |
| Project Page | Not verified |
| Code / Resources | Not verified |
| Open Access Copy | [arXiv](https://arxiv.org/abs/2412.19123) |
| Dataset | BEAT |
| Task | Music/text-conditioned human dance generation |
| Input | Social / multi-person interaction; Music / rhythm |
| Output | Generated human dance motion sequence |
| Context Type | Social / multi-person interaction; Music / rhythm |
| Method Family | Autoregressive model |

## BibTeX

```bibtex
@inproceedings{Yang_2025, series={MM ’25}, title={CoheDancers: Enhancing Interactive Group Dance Generation through Music-Driven Coherence Decomposition}, url={http://dx.doi.org/10.1145/3746027.3755267}, DOI={10.1145/3746027.3755267}, booktitle={Proceedings of the 33rd ACM International Conference on Multimedia}, publisher={ACM}, author={Yang, Kaixing and Tang, Xulong and Wu, Haoyu and Qin, Biao and Liu, Hongyan and He, Jun and Fan, Zhaoxin}, year={2025}, month=Oct, pages={6663–6671}, collection={MM ’25} }
```

## Problem

Dance generation is crucial and challenging, particularly in domains like dance performance and virtual gaming. In the current body of literature, most methodologies focus on Solo Music2Dance.

## Key Idea

Thus, we introduce CoheDancers, a novel framework for Music-Driven Interactive Group Dance Generation.

## Method

We define each music feature as a 438-dimensional vector, extracted via Librosa, and represent each dance motion as a 147-dimensional vector d = [τ ; θ], where τ and θ encapsulate the root translation and 6D rota- tion pose parameters of the SMPL model, respectively. Fur- thermore, we synchronize the music feature sequence with the group dance sequences at a temporal granularity of 30 frames per second, ensuring precise alignment between the auditory and movement aspects of the performance. In the Pipeline Structure part, as depicted in Fig.

## Contributions

Not verified

## Experiments

Global Semantic Metrics Leveraging efficiency and lower complexity of retrieval tasks, we employ retrieval models for evaluating generative mod- els in areas like text-to-motion Guo et al. (2022). These models, trained on real data, capture the artistic nuances of dance and music effectively. Our model, inspired by Yang et al. (2024b), combines an Acoustic-Semantic Music Encoder with a Spatial-Temporal Dance Encoder, utilizing Temporal CLIP loss Liu et al. (2023) for contrastive learning.

## Limitations

Not verified

## Relevance to In-context Human Motion Prediction

Relevance: Peripheral. This work covers an adjacent motion synthesis, control, or refinement task; it is retained because its conditioning or evaluation setting is useful to context-aware motion research.

## Relevance to Embodied Intelligence

The explicit scene, object, interaction, sensing, or control condition makes this work directly relevant to embodied agents that must anticipate or synthesize physically situated human behavior.

## My Notes

TODO: Complete a second-pass manual reading and record comparisons with the closest papers in this notebook.
