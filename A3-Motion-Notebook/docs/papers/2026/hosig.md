# HOSIG: Full-Body Human-Object-Scene Interaction Generation with Hierarchical Scene Perception

> AAAI 2026 · Context-aware Human Motion Generation
>
> Status: Partially verified

## Paper Information

| Field | Content |
|---|---|
| Year | 2026 |
| Title | HOSIG: Full-Body Human-Object-Scene Interaction Generation with Hierarchical Scene Perception |
| BibTeX | [View BibTeX](#bibtex) |
| Conference | AAAI |
| Journal | Not applicable (conference paper) |
| Benchmark | Not verified |
| Open Source | Yes |
| Main Authors | Wei Yao; Yunlian Sun; Hongwen Zhang; Yebin Liu; Jinhui Tang |
| Paper Link | [Official paper](https://doi.org/10.1609/aaai.v40i14.38177) |
| GitHub Link | [Official GitHub](https://github.com/yw0208/HOSIG) |
| Publication Status | Official 2026 publication record verified; 2026 coverage remains open for later additions |
| Project Page | Not verified |
| Code / Resources | [Official GitHub](https://github.com/yw0208/HOSIG) |
| Open Access Copy | [Available full text](https://ojs.aaai.org/index.php/AAAI/article/download/38177/42139) |
| Dataset | Not verified |
| Task | Human-object interaction motion generation |
| Input | Language / text; 3D scene / environment; Object / human-object interaction; Social / multi-person interaction; Music / rhythm; Trajectory / kinematic control; Human feedback / preference |
| Output | Generated 3D human motion sequence |
| Context Type | Language / text; 3D scene / environment; Object / human-object interaction; Social / multi-person interaction; Music / rhythm; Trajectory / kinematic control; Human feedback / preference |
| Method Family | Diffusion model; Autoregressive model |

## BibTeX

```bibtex
@article{Yao_2026, title={HOSIG: Full-Body Human-Object-Scene Interaction Generation with Hierarchical Scene Perception}, volume={40}, ISSN={2159-5399}, url={http://dx.doi.org/10.1609/AAAI.V40I14.38177}, DOI={10.1609/aaai.v40i14.38177}, number={14}, journal={Proceedings of the AAAI Conference on Artificial Intelligence}, publisher={Association for the Advancement of Artificial Intelligence (AAAI)}, author={Yao, Wei and Sun, Yunlian and Zhang, Hongwen and Liu, Yebin and Tang, Jinhui}, year={2026}, month=Mar, pages={11901–11909} }
```

## Problem

Generating high-fidelity full-body human interactions with dynamic objects and static scenes remains a critical challenge in computer graphics and animation. Existing methods for human-object interaction often neglect scene context, leading to implausible penetrations, while human-scene interaction approaches struggle to coordinate fine-grained manipulations with long-range navigation.

## Key Idea

To address these limitations, we propose HOSIG, a novel framework for synthesizing full-body interactions through hierarchical scene perception.

## Method

Max ↓ LINGO 0.4169 16.6100 0.2333 0.3175 0.3745 89.5247 0.2418 0.0001 0.0070 CHOIS 0.3602 11.5033 0.0333 0.4134 26.3719 4271.7520 0.2809 0.0001 0.0056 Ours 0.0270 13.0367 0.9333 0.1851 0.6562 201.8264 0.9800 0.0007 0.0113 Table 1: Quantitative results of human-object-scene interaction generation. This mainly involves the interaction between human and scenes, human and objects when characters operate objects in the scene. At the same time, this also evaluates the efficiency and accuracy of the character in carrying objects. computational overhead and steering optimization toward a more precise direction.

## Contributions

Not verified

## Experiments

Implementation Details Our evaluation protocol comprehensively assesses both ab- solute performance and component effectiveness. All ex- periments are conducted on the TRUMANS dataset (Jiang et al. We establish two evaluation axes: 1) comparison against SOTA methods in HOI and HSI generation, and 2) ablation studies isolating our core techni- cal innovations.

## Limitations

Not verified

## Relevance to In-context Human Motion Prediction

Relevance: Core. The paper's central task is conditioned human motion generation, using language / text; 3d scene / environment; object / human-object interaction; social / multi-person interaction; music / rhythm; trajectory / kinematic control; human feedback / preference as part of the problem setting.

## Relevance to Embodied Intelligence

The explicit scene, object, interaction, sensing, or control condition makes this work directly relevant to embodied agents that must anticipate or synthesize physically situated human behavior.

## My Notes

TODO: Complete a second-pass manual reading and record comparisons with the closest papers in this notebook.
