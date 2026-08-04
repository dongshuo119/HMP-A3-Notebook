# Scenemi: Motion In-Betweening for Modeling Human-Scene Interactions

> ICCV 2025 · Context-aware Human Motion Generation
>
> Status: Partially verified

## Paper Information

| Field | Content |
|---|---|
| Year | 2025 |
| Title | Scenemi: Motion In-Betweening for Modeling Human-Scene Interactions |
| BibTeX | [View BibTeX](#bibtex) |
| Conference | ICCV |
| Journal | Not applicable (conference paper) |
| Benchmark | PROX |
| Open Source | Not verified |
| Main Authors | Inwoo Hwang; Bing Zhou; Young Min Kim; Jian Wang; Chuan Guo |
| Paper Link | [Official paper](https://doi.org/10.1109/iccv51701.2025.00570) |
| GitHub Link | Not verified |
| Publication Status | Official publication record verified |
| Project Page | [Project page](http://inwoohwang.me/SceneMI) |
| Code / Resources | [Project page](http://inwoohwang.me/SceneMI) |
| Open Access Copy | [arXiv](https://arxiv.org/abs/2503.16289) |
| Dataset | PROX |
| Task | Scene-conditioned human motion generation |
| Input | Language / text; 3D scene / environment; Social / multi-person interaction; Trajectory / kinematic control; Sparse sensor observations |
| Output | Generated 3D human motion sequence |
| Context Type | Language / text; 3D scene / environment; Social / multi-person interaction; Trajectory / kinematic control; Sparse sensor observations |
| Method Family | Diffusion model |

## BibTeX

```bibtex
@inproceedings{Hwang_2025, title={Scenemi: Motion In-Betweening for Modeling Human-Scene Interactions}, url={http://dx.doi.org/10.1109/ICCV51701.2025.00570}, DOI={10.1109/iccv51701.2025.00570}, booktitle={2025 IEEE/CVF International Conference on Computer Vision (ICCV)}, publisher={IEEE}, author={Hwang, Inwoo and Zhou, Bing and Kim, Young Min and Wang, Jian and Guo, Chuan}, year={2025}, month=Oct, pages={6034–6045} }
```

## Problem

Modeling human-scene interactions (HSI) is essential for understanding and simulating everyday human behaviors. Recent approaches utilizing generative modeling have made progress in this domain; however, they are limited in controllability and flexibility for real-world applications.

## Key Idea

To address these challenges, we propose reformulating the HSI modeling problem as Scene-aware Motion In-betweening - a more tractable and practical task.

## Method

Given a 3D scene G, a sparse set of key poses s ∈ RN ×D with key pose indicator m ∈ {0, 1}N , our goal is to syn- thesize a complete motion sequence x = {xn} ∈RN ×D that satisfies both the key poses and the environmental con- straints of the 3D scene. Here, N represents the total number of poses in the full sequence, with each pose represented by a D-dimensional feature vector. The mask mn ∈ m indicates whether nth frame contains a key pose (mn = 1) or non-key pose (mn = 0), with a total of k = P n mn ≪ N key poses.

## Contributions

Not verified

## Experiments

We provide a comprehensive evaluation of our approach in three settings: motion in-betweening with noise-free keyframes and in-domain 3D scenes in Sec. For training, we utilized TRUMANS [ 31], the largest high-quality motion capture dataset (30 FPS) with hand-crafted scene geometry. Motion sequences were seg- mented into N = 121 frames, with 10% randomly selected for the test set.

## Limitations

Not verified

## Relevance to In-context Human Motion Prediction

Relevance: Core. The paper's central task is conditioned human motion generation, using language / text; 3d scene / environment; social / multi-person interaction; trajectory / kinematic control; sparse sensor observations as part of the problem setting.

## Relevance to Embodied Intelligence

The explicit scene, object, interaction, sensing, or control condition makes this work directly relevant to embodied agents that must anticipate or synthesize physically situated human behavior.

## My Notes

TODO: Complete a second-pass manual reading and record comparisons with the closest papers in this notebook.
