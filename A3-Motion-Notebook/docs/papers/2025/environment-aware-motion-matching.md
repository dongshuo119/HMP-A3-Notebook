# Environment-aware Motion Matching

> ACM TOG 2025 · Context-aware Human Motion Generation
>
> Status: Partially verified

## Paper Information

| Field | Content |
|---|---|
| Year | 2025 |
| Title | Environment-aware Motion Matching |
| BibTeX | [View BibTeX](#bibtex) |
| Conference | Not applicable (journal article) |
| Journal | ACM Transactions on Graphics |
| Benchmark | Not verified |
| Open Source | Not verified |
| Main Authors | Jose Luis Ponton; Sheldon Andrews; Carlos Andujar; Nuria Pelechano |
| Paper Link | [Official paper](https://doi.org/10.1145/3763334) |
| GitHub Link | Not verified |
| Publication Status | Official publication record verified |
| Project Page | Not verified |
| Code / Resources | Not verified |
| Open Access Copy | [arXiv](https://arxiv.org/abs/2510.22632) |
| Dataset | Not verified |
| Task | Scene-conditioned human motion generation |
| Input | 3D scene / environment; Social / multi-person interaction; Trajectory / kinematic control |
| Output | Generated 3D human motion sequence |
| Context Type | 3D scene / environment; Social / multi-person interaction; Trajectory / kinematic control |
| Method Family | Motion matching |

## BibTeX

```bibtex
@article{Ponton_2025, title={Environment-aware Motion Matching}, volume={44}, ISSN={1557-7368}, url={http://dx.doi.org/10.1145/3763334}, DOI={10.1145/3763334}, number={6}, journal={ACM Transactions on Graphics}, publisher={Association for Computing Machinery (ACM)}, author={Ponton, Jose Luis and Andrews, Sheldon and Andujar, Carlos and Pelechano, Nuria}, year={2025}, month=Dec, pages={1–18} }
```

## Problem

Interactive applications demand believable characters that respond naturally to dynamic environments. Traditional character animation techniques often struggle to handle arbitrary situations, leading to a growing trend of dynamically selecting motion-captured animations based on predefined features.

## Key Idea

To address these limitations, we present Environment-aware Motion Matching, a novel real-time system for full-body character animation that dynamically adapts to obstacles and other agents, emphasizing the bidirectional relationship between pose and trajectory.

## Method

Not verified

## Contributions

Not verified

## Experiments

In this section, we provide an in-depth evaluation of Environment- aware Motion Matching across a variety of scenarios and configura- tions. Subsequently, we present an ablation analysis and compar- ative studies to justify our design choices, including comparisons with standard Motion Matching, an examination of our optimization strategies, and a discussion on disk-based versus ellipse-based body representations. We implemented Environment-aware Motion Matching within the Unity game engine, utilizing data-oriented programming prin- ciples and the Burst compiler to optimize the search process.

## Limitations

In this work, we have presented a framework for enabling environment- aware motion matching by incorporating a specialized type of fea- ture that seamlessly integrates with existing query features, allow- ing for greater flexibility in analyzing the character’s surroundings. While we demonstrate its efficacy by approximating the character’s projected body shape using 2D ellipses, certain aspects could be further refined. Our current representation only considers the skele- ton and does not account for the character’s actual mesh or skin.

## Relevance to In-context Human Motion Prediction

Relevance: Peripheral. This work covers an adjacent motion synthesis, control, or refinement task; it is retained because its conditioning or evaluation setting is useful to context-aware motion research.

## Relevance to Embodied Intelligence

The explicit scene, object, interaction, sensing, or control condition makes this work directly relevant to embodied agents that must anticipate or synthesize physically situated human behavior.

## My Notes

TODO: Complete a second-pass manual reading and record comparisons with the closest papers in this notebook.
