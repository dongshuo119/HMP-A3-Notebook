# Nonisotropic Gaussian Diffusion for Realistic 3D Human Motion Prediction

> CVPR 2025 · In-context Human Motion Prediction
>
> Status: Partially verified

## Paper Information

| Field | Content |
|---|---|
| Year | 2025 |
| Title | Nonisotropic Gaussian Diffusion for Realistic 3D Human Motion Prediction |
| BibTeX | [View official BibTeX](#bibtex) |
| Conference | CVPR |
| Journal | Not applicable (conference paper) |
| Benchmark | Three real-world datasets; names not verified |
| Open Source | Not verified |
| Main Authors | Cecilia Curreli; Dominik Muhle; Abhishek Saroha; Zhenzhang Ye; Riccardo Marin; Daniel Cremers |
| Paper Link | [CVF Open Access](https://openaccess.thecvf.com/content/CVPR2025/html/Curreli_Nonisotropic_Gaussian_Diffusion_for_Realistic_3D_Human_Motion_Prediction_CVPR_2025_paper.html) |
| GitHub Link | Not verified |
| Project Page | [Official project page](https://ceveloper.github.io/publications/skeletondiffusion/) |
| Code / Resources | Not verified |
| Dataset | Three real-world datasets; names not verified |
| Task | Stochastic 3D human motion prediction |
| Input | Observed 3D human motion |
| Output | Multiple plausible future 3D motion sequences |
| Context Type | Motion history; skeletal kinematic structure |
| Method Family | Nonisotropic latent diffusion |

## BibTeX

```bibtex
@InProceedings{Curreli_2025_CVPR,
    author    = {Curreli, Cecilia and Muhle, Dominik and Saroha, Abhishek and Ye, Zhenzhang and Marin, Riccardo and Cremers, Daniel},
    title     = {Nonisotropic Gaussian Diffusion for Realistic 3D Human Motion Prediction},
    booktitle = {Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR)},
    month     = {June},
    year      = {2025},
    pages     = {1871-1882}
}
```

## Problem
Stochastic predictors can score as diverse while producing jitter, stretching limbs, or changing bone lengths.

## Key Idea

Shape diffusion noise according to the human skeleton so the stochastic process respects relationships among body parts.

## Method

SkeletonDiffusion is a latent diffusion model whose nonisotropic Gaussian formulation embeds skeletal kinematic structure in both the architecture and training objective.

## Contributions

- Introduces skeleton-aware nonisotropic Gaussian diffusion for motion prediction.
- Targets limb-length and jitter artifacts missed by common diversity scores.
- Identifies a failure mode in diversity metrics that reward inconsistent skeletons.

## Experiments

The paper compares against isotropic diffusion alternatives and prior predictors on three real-world datasets; exact dataset names remain to be extracted.

## Limitations

The model does not explicitly condition on scenes, objects, language, or other people.

## Relevance to In-context Human Motion Prediction

Relevance: Peripheral. It advances stochastic future prediction, but the verified context is motion history and skeleton structure only.

## Relevance to Embodied Intelligence

Kinematically consistent samples are safer inputs to downstream robot planning than diverse but anatomically invalid futures.

## My Notes

TODO: Verify released repository and the three evaluation datasets.
