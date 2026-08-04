# NIFTY: Neural Object Interaction Fields for Guided Human Motion Synthesis

> CVPR 2024 · Context-aware Human Motion Generation
>
> Status: Partially verified

## Paper Information

| Field | Content |
|---|---|
| Year | 2024 |
| Title | NIFTY: Neural Object Interaction Fields for Guided Human Motion Synthesis |
| BibTeX | [View BibTeX](#bibtex) |
| Conference | CVPR |
| Journal | Not applicable (conference paper) |
| Benchmark | Not verified |
| Open Source | Not verified |
| Main Authors | Nilesh Kulkarni; Davis Rempe; Kyle Genova; Abhijit Kundu; Justin Johnson; David Fouhey; Leonidas J. Guibas |
| Paper Link | [Official paper](https://doi.org/10.1109/cvpr52733.2024.00096) |
| GitHub Link | Not verified |
| Publication Status | Official publication record verified |
| Project Page | [Project page](https://nileshkulkarni.github.io/nifty) |
| Code / Resources | [Project page](https://nileshkulkarni.github.io/nifty) |
| Open Access Copy | [arXiv](https://arxiv.org/abs/2307.07511) |
| Dataset | Not verified |
| Task | Human-object interaction motion generation |
| Input | 3D scene / environment; Object / human-object interaction; Social / multi-person interaction; Music / rhythm; Trajectory / kinematic control |
| Output | Generated 3D human motion sequence |
| Context Type | 3D scene / environment; Object / human-object interaction; Social / multi-person interaction; Music / rhythm; Trajectory / kinematic control |
| Method Family | Diffusion model |

## BibTeX

```bibtex
@inproceedings{Kulkarni_2024, title={NIFTY: Neural Object Interaction Fields for Guided Human Motion Synthesis}, url={http://dx.doi.org/10.1109/CVPR52733.2024.00096}, DOI={10.1109/cvpr52733.2024.00096}, booktitle={2024 IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR)}, publisher={IEEE}, author={Kulkarni, Nilesh and Rempe, Davis and Genova, Kyle and Kundu, Abhiiit and Johnson, Justin and Fouhey, David and Guibas, Leonidas}, year={2024}, month=June, pages={947–957} }
```

## Problem

We address the problem of generating realistic 3D motions of humans interacting with objects in a scene. Our key idea is to create a neural interaction field attached to a specific object, which outputs the distance to the valid interaction manifold given a human pose as input.

## Key Idea

To support interactions with scarcely available data, we propose an automated synthetic data pipeline.

## Method

In this section, we detail our NIFTY pipeline for learning to synthesize realistic human-object interaction motions. §3.1 introduces a conditional diffusion model to generate human motions given the geometry of an object. §3.2 details the object-centric interaction field, which guides the denoising process of the diffusion model to capture the nuances of interactions in a data-driven way. In §3.3, we discuss the synthetic data generation using a pre-trained motion model that is seeded with anchor poses from a smaller dataset. This data is used to train the diffusion model and interaction field.

## Contributions

Not verified

## Experiments

We evaluate our NIFTY method after training on thesitting and lifting datasets introduced in §3.3. Implementation details are given in §4.1, followed by a discussion of evaluation metrics in §4.2 and baselines in §4.3. Experimental results are presented in §4.4 along with an ablation study in §4.5.

## Limitations

Not verified

## Relevance to In-context Human Motion Prediction

Relevance: Core. The paper's central task is conditioned human motion generation, using 3d scene / environment; object / human-object interaction; social / multi-person interaction; music / rhythm; trajectory / kinematic control as part of the problem setting.

## Relevance to Embodied Intelligence

The explicit scene, object, interaction, sensing, or control condition makes this work directly relevant to embodied agents that must anticipate or synthesize physically situated human behavior.

## My Notes

TODO: Complete a second-pass manual reading and record comparisons with the closest papers in this notebook.
