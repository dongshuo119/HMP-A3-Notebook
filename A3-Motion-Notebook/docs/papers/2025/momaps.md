# MoMaps: Semantics-Aware Scene Motion Generation with Motion Maps

> ICCV 2025 · Context-aware Human Motion Generation
>
> Status: Partially verified

## Paper Information

| Field | Content |
|---|---|
| Year | 2025 |
| Title | MoMaps: Semantics-Aware Scene Motion Generation with Motion Maps |
| BibTeX | [View BibTeX](#bibtex) |
| Conference | ICCV |
| Journal | Not applicable (conference paper) |
| Benchmark | Not verified |
| Open Source | Not verified |
| Main Authors | Jiahui Lei; Kyle Genova; George Kopanas; Noah Snavely; Leonidas J. Guibas |
| Paper Link | [Official paper](https://doi.org/10.1109/iccv51701.2025.00934) |
| GitHub Link | Not verified |
| Publication Status | Official publication record verified |
| Project Page | Not verified |
| Code / Resources | Not verified |
| Open Access Copy | [arXiv](https://arxiv.org/abs/2510.11107) |
| Dataset | Not verified |
| Task | Scene-conditioned human motion generation |
| Input | 3D scene / environment |
| Output | Generated 3D human motion sequence |
| Context Type | 3D scene / environment |
| Method Family | Diffusion model |

## BibTeX

```bibtex
@inproceedings{Lei_2025, title={MoMaps: Semantics-Aware Scene Motion Generation with Motion Maps}, url={http://dx.doi.org/10.1109/ICCV51701.2025.00934}, DOI={10.1109/iccv51701.2025.00934}, booktitle={2025 IEEE/CVF International Conference on Computer Vision (ICCV)}, publisher={IEEE}, author={Lei, Jiahui and Genova, Kyle and Kopanas, George and Snavely, Noah and Guibas, Leonidas}, year={2025}, month=Oct, pages={10022–10031} }
```

## Problem

This paper addresses the challenge of learning semantically and functionally meaningful 3D motion priors from real-world videos, in order to enable prediction of future 3D scene motion from a single input image. To learn meaningful distributions over motion, we create a large-scale database of MoMaps from over 50,000 real videos and train a diffusion model on these representations.

## Key Idea

We propose a novel pixel-aligned Motion Map (MoMap) representation for 3D scene motion, which can be generated from existing generative image models to facilitate efficient and effective motion prediction.

## Method

Motion Map Representation The first challenge is to represent real-world dynamic 3D scenes in a way that neural networks can easily output or predict. It is crucial to capture motion in 3D space rather than in 2D. Most prior methods model motion as 2D tracks—either for reconstruction tasks (e.g., BootsTAPIR) or for generating 2D tracks (e.g., TAPIR [10], ATM [37], and Track2Act [3]).

## Contributions

- Related Work Motion Generation in 2D and 3DThe closest related work to ours typically focuses on predicting 2D or 3D point trajectories, often within robotics settings [3, 29, 37, 39, 41]: TAPIR [10] uses a U-Net and Fourier encodings of 2D tracks to predict future 2D trajectories from large-scale real videos.
- GeneralFlow [41] adopts a PointNeXT ge- ometric backbone to process a point cloud from the first video frame, and employs a trajectory-conditioned V AE to predict future 3D trajectories for queried object points.
- Im2Flow2Act [39] leverages Animatediff [15] to predict 2D tracks and visibilities obtained from TAPIR [10], fo- cusing on object manipulation tasks.

## Experiments

Not verified

## Limitations

In this paper, we explored a new problem: learning to gen- erate future 3D motion for an entire scene using large-scale real-world videos. We introduced an image-likeMoMap representation, which enables the repurposing of estab- lished 2D image diffusion models for 3D motion genera- tion. By assembling a large database of MoMaps from real videos, we demonstrated the feasibility of synthesizing se- mantically and functionally meaningful 3D scene motion, also highlighting its potential impact on 2D video synthe- sis.

## Relevance to In-context Human Motion Prediction

Relevance: Core. The paper's central task is conditioned human motion generation, using 3d scene / environment as part of the problem setting.

## Relevance to Embodied Intelligence

The explicit scene, object, interaction, sensing, or control condition makes this work directly relevant to embodied agents that must anticipate or synthesize physically situated human behavior.

## My Notes

TODO: Complete a second-pass manual reading and record comparisons with the closest papers in this notebook.
