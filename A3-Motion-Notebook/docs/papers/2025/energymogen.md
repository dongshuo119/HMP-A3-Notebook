# EnergyMoGen: Compositional Human Motion Generation with Energy-Based Diffusion Model in Latent Space

> CVPR 2025 · Context-aware Human Motion Generation
>
> Status: Partially verified

## Paper Information

| Field | Content |
|---|---|
| Year | 2025 |
| Title | EnergyMoGen: Compositional Human Motion Generation with Energy-Based Diffusion Model in Latent Space |
| BibTeX | [View BibTeX](#bibtex) |
| Conference | CVPR |
| Journal | Not applicable (conference paper) |
| Benchmark | HumanML3D; KIT-ML |
| Open Source | Not verified |
| Main Authors | Jianrong Zhang; Hehe Fan; Yi Yang |
| Paper Link | [Official paper](https://openaccess.thecvf.com/content/CVPR2025/html/Zhang_EnergyMoGen_Compositional_Human_Motion_Generation_with_Energy-Based_Diffusion_Model_in_CVPR_2025_paper.html) |
| GitHub Link | Not verified |
| Publication Status | Official publication record verified |
| Project Page | Not verified |
| Code / Resources | Not verified |
| Open Access Copy | [arXiv](https://arxiv.org/abs/2412.14706) |
| Dataset | HumanML3D; KIT-ML |
| Task | Conditional human motion generation or synthesis |
| Input | Language / text |
| Output | Generated 3D human motion sequence |
| Context Type | Language / text |
| Method Family | Diffusion model; Transformer / attention |

## BibTeX

```bibtex
@inproceedings{Zhang_2025, title={EnergyMogen: Compositional Human Motion Generation with Energy-Based Diffusion Model in Latent Space}, url={http://dx.doi.org/10.1109/CVPR52734.2025.01639}, DOI={10.1109/cvpr52734.2025.01639}, booktitle={2025 IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR)}, publisher={IEEE}, author={Zhang, Jianrong and Fan, Hehe and Yang, Yi}, year={2025}, month=June, pages={17592–17602} }
```

## Problem

Diffusion models, particularly latent diffusion models, have demonstrated remarkable success in text-driven human motion generation. However, it remains challenging for latent diffusion models to effectively compose multiple semantic concepts into a single, coherent motion sequence.

## Key Idea

To address this issue, we propose EnergyMoGen, which includes two spectrums of Energy-Based Models: (1) We interpret the diffusion model as a latent-aware energy-based model that generates motions by composing a set of diffusion models in latent space; (2) We introduce a semantic-aware energy model based on cross-attention, which enables semantic composition and adaptive gradient descent for text embeddings.

## Method

In this section, we introduce our approach, E NERGY MO- GEN. We first present the architecture and formulations of the diffusion model in § 3.1. Next, we discuss the connec- tion between diffusion models and energy-based models, as well as how to compose motions from several concepts through Synergistic Energy Fusion (SEF) in § 3.2.

## Contributions

- our contributions are as follows: (1) Our work is the first attempt to solve the motion composi- tion problem from an energy perspective; (2) We explore two spectrums of energy-based models and propose Syn- ergistic Energy Fusion to address critical issues, e.g., text- misalignment and foot sliding; (3) We introduce two critical operations: negation and the combination of conjunction and negation; (4) We generate a CompML dataset via our motion composition method.

## Experiments

We evaluate our approach on three tasks following prior studies [19, 49]: text-to-motion generation ( § 5.3), compo- sitional motion generation ( § 5.4), and multi-concept mo- tion generation ( § 5.4). Furthermore, we offer an in-depth dissection in § 5.5. Please kindly note that our approach can be easily generalized to skeleton-based methods.

## Limitations

Not verified

## Relevance to In-context Human Motion Prediction

Relevance: Core. The paper's central task is conditioned human motion generation, using language / text as part of the problem setting.

## Relevance to Embodied Intelligence

The work provides motion priors or conditional generation machinery that can support embodied-agent simulation, planning, and human behavior modeling, although embodiment is not its only focus.

## My Notes

TODO: Complete a second-pass manual reading and record comparisons with the closest papers in this notebook.
