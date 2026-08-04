# GenZI: Zero-Shot 3D Human-Scene Interaction Generation

> CVPR 2024 · Context-aware Human Motion Generation
>
> Status: Partially verified

## Paper Information

| Field | Content |
|---|---|
| Year | 2024 |
| Title | GenZI: Zero-Shot 3D Human-Scene Interaction Generation |
| BibTeX | [View BibTeX](#bibtex) |
| Conference | CVPR |
| Journal | Not applicable (conference paper) |
| Benchmark | Not verified |
| Open Source | Not verified |
| Main Authors | Lei Li; Angela Dai |
| Paper Link | [Official paper](https://doi.org/10.1109/cvpr52733.2024.01934) |
| GitHub Link | Not verified |
| Publication Status | Official publication record verified |
| Project Page | Not verified |
| Code / Resources | Not verified |
| Open Access Copy | [arXiv](https://arxiv.org/abs/2311.17737) |
| Dataset | Not verified |
| Task | Scene-conditioned human motion generation |
| Input | Language / text; 3D scene / environment; Social / multi-person interaction; Trajectory / kinematic control |
| Output | Generated 3D human motion sequence |
| Context Type | Language / text; 3D scene / environment; Social / multi-person interaction; Trajectory / kinematic control |
| Method Family | Not verified |

## BibTeX

```bibtex
@inproceedings{Li_2024, title={GenZI: Zero-Shot 3D Human-Scene Interaction Generation}, url={http://dx.doi.org/10.1109/CVPR52733.2024.01934}, DOI={10.1109/cvpr52733.2024.01934}, booktitle={2024 IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR)}, publisher={IEEE}, author={Li, Lei and Dai, Angela}, year={2024}, month=June, pages={20465–20474} }
```

## Problem

Can we synthesize 3D humans interacting with scenes without learning from any 3D human-scene interaction data? Key to GenZI is our distillation of interaction priors from large vision-language models (VLMs), which have learned a rich semantic space of 2D human-scene compositions.

## Key Idea

We propose GenZI, the first zero-shot approach to generating 3D human-scene interactions.

## Method

Overview Our objective is to synthesize plausible 3D humans inter- acting with a 3D scene, guided by input text descriptions, in the absence of 3D interaction data capture for learning. We present GenZI, a novel optimization-based multi-view approach that leverages large VLMs to infer spatial rela- tions of interactions between a human and the scene. GenZI takes as input a 3D scene S, a text prompt Γ de- scribing the desired interaction, and an approximate point location p ∈ R3 in the scene around which the interaction should occur.

## Contributions

- our contributions are as follows: • We introduce GenZI 1, the first zero-shot approach to gen- erate realistic 3D humans interacting with a 3D scene from natural language prompts.

## Experiments

We demonstrate the effectiveness and generality of our ap- proach GenZI on a diverse collection of 3D scene mod- els from Sketchfab.com. We conduct both quantitative and qualitative evaluations to compare GenZI with alternative baselines approaches [10, 45] to our new task. In our Sketchfab dataset, we gathered 8 large- scale 3D scenes encompassing a variety of indoor and out- door environments with diverse geometric structures, in- cluding a realistic Venice city, a gym, and a cartoon-style food truck.

## Limitations

Not verified

## Relevance to In-context Human Motion Prediction

Relevance: Core. The paper's central task is conditioned human motion generation, using language / text; 3d scene / environment; social / multi-person interaction; trajectory / kinematic control as part of the problem setting.

## Relevance to Embodied Intelligence

The explicit scene, object, interaction, sensing, or control condition makes this work directly relevant to embodied agents that must anticipate or synthesize physically situated human behavior.

## My Notes

TODO: Complete a second-pass manual reading and record comparisons with the closest papers in this notebook.
