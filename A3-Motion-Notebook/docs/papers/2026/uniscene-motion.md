# UniScene-MoTion: Unified Scene & Motion-aware Diffusion Transition Framework

> AAAI 2026 · Context-aware Human Motion Generation
>
> Status: Partially verified

## Paper Information

| Field | Content |
|---|---|
| Year | 2026 |
| Title | UniScene-MoTion: Unified Scene & Motion-aware Diffusion Transition Framework |
| BibTeX | [View BibTeX](#bibtex) |
| Conference | AAAI |
| Journal | Not applicable (conference paper) |
| Benchmark | Not verified |
| Open Source | Not verified |
| Main Authors | Rui Jiang; Chongmian Wang; Xinghe Fu; Yehao Lu; Teng Li; Xi Li |
| Paper Link | [Official paper](https://doi.org/10.1609/aaai.v40i7.37458) |
| GitHub Link | Not verified |
| Publication Status | Official 2026 publication record verified; 2026 coverage remains open for later additions |
| Project Page | Not verified |
| Code / Resources | Not verified |
| Open Access Copy | [Open-access full text](https://doi.org/10.1609/aaai.v40i7.37458) |
| Dataset | Not verified |
| Task | Scene-conditioned human motion generation |
| Input | 3D scene / environment; Music / rhythm; Trajectory / kinematic control |
| Output | Generated 3D human motion sequence |
| Context Type | 3D scene / environment; Music / rhythm; Trajectory / kinematic control |
| Method Family | Diffusion model |

## BibTeX

```bibtex
@article{Jiang_2026, title={UniScene-MoTion: Unified Scene &amp; Motion-aware Diffusion Transition Framework}, volume={40}, ISSN={2159-5399}, url={http://dx.doi.org/10.1609/AAAI.V40I7.37458}, DOI={10.1609/aaai.v40i7.37458}, number={7}, journal={Proceedings of the AAAI Conference on Artificial Intelligence}, publisher={Association for the Advancement of Artificial Intelligence (AAAI)}, author={Jiang, Rui and Wang, Chongmian and Fu, Xinghe and Lu, Yehao and Li, Teng and Li, Xi}, year={2026}, month=Mar, pages={5415–5423} }
```

## Problem

Video transitions are critical for ensuring temporal coherence in edited media, yet existing methods often rely on handcrafted effects or relative-scale trajectories that fail to capture the physical structure of real-world scenes. Built upon a powerful I2V foundation, our method leverages single-image depth prediction to align camera motion with metric-scale geometry, enabling physically consistent transitions.

## Key Idea

In this work, we introduce a scale-aware video transition framework that explicitly incorporates depth-aware 3D reasoning into a diffusion-based generation pipeline.

## Method

The best and second results for each column are bold and underlined, respectively. VBench-I2V includes several metrics as listed below: Subject Consistency(SC), Background Consistency (BC), Motion Smoothness (MS), Dynamic Degree (D), Aesthetic Quality (AQ), Image Quality (IQ). SC BC MS DD AQ IQ w/o Bidirection 0.929 0.943 0.995 0.698 0.518 0.708 w/o Progressive 0.926 0.945 0.994 0.692 0.523 0.72 Full Model 0.939 0.949 0.994 0.690 0.519 0.729 Table 3: Ablation study on condition components. sistency but often resorts to abrupt masking transitions in semantically distant cases (e.g., row 2), skipping interme- diate motion and resulting in unnatural temporal flow.

## Contributions

Not verified

## Experiments

To comprehensively evaluate the robustness and generalization ability of our method across diverse scenar- ios, we construct two evaluation datasets. The first dataset consists of 500 video clips selected from RealEstate10K (Zhou et al. To further verify the effectiveness of our approach in varied visual and motion contexts, we additionally curate a set of 50 high-quality video clips from Pexels.

## Limitations

Not verified

## Relevance to In-context Human Motion Prediction

Relevance: Core. The paper's central task is conditioned human motion generation, using 3d scene / environment; music / rhythm; trajectory / kinematic control as part of the problem setting.

## Relevance to Embodied Intelligence

The explicit scene, object, interaction, sensing, or control condition makes this work directly relevant to embodied agents that must anticipate or synthesize physically situated human behavior.

## My Notes

TODO: Complete a second-pass manual reading and record comparisons with the closest papers in this notebook.
