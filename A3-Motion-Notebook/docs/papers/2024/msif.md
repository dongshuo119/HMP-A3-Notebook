# Multimodal Sense-Informed Forecasting of 3D Human Motions

> CVPR 2024 · In-context Human Motion Prediction
>
> Status: Partially verified

## Paper Information

| Field | Content |
|---|---|
| Year | 2024 |
| Title | Multimodal Sense-Informed Forecasting of 3D Human Motions |
| BibTeX | [View official BibTeX](#bibtex) |
| Conference | CVPR |
| Journal | Not applicable (conference paper) |
| Benchmark | GIMO; GTA-1M |
| Open Source | Yes |
| Main Authors | Zhenyu Lou; Qiongjie Cui; Haofan Wang; Xu Tang; Hong Zhou |
| Paper Link | [CVF Open Access](https://openaccess.thecvf.com/content/CVPR2024/html/Lou_Multimodal_Sense-Informed_Forecasting_of_3D_Human_Motions_CVPR_2024_paper.html) |
| GitHub Link | [Official repository](https://github.com/kjle6/SIF3D-master) |
| Project Page | [SIF3D project page](https://sites.google.com/view/cvpr2024sif3d) |
| Code / Resources | [Official repository](https://github.com/kjle6/SIF3D-master) |
| Dataset | GIMO; GTA-1M |
| Task | Future 3D human pose and trajectory prediction |
| Input | Observed motion, 3D scene point cloud, and human gaze |
| Output | Future 3D body poses and global trajectory |
| Context Type | 3D scene; gaze/intention |
| Method Family | Multimodal attention-based motion predictor |

## BibTeX

```bibtex
@InProceedings{Lou_2024_CVPR,
    author    = {Lou, Zhenyu and Cui, Qiongjie and Wang, Haofan and Tang, Xu and Zhou, Hong},
    title     = {Multimodal Sense-Informed Forecasting of 3D Human Motions},
    booktitle = {Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR)},
    month     = {June},
    year      = {2024},
    pages     = {2144-2154}
}
```

## Problem
Pose-history-only predictors can ignore environmental constraints and human intent, producing future poses that penetrate the scene or move toward implausible targets.

## Key Idea

SIF3D treats the scene and gaze as complementary senses. It learns which scene points matter to the observed motion and uses gaze as an intention cue for both trajectory planning and pose forecasting.

## Method

Motion and point-cloud encoders feed two cross-modal attention modules. Ternary intention-aware attention combines gaze, motion, and scene features for global salient-point selection; semantic coherence-aware attention connects local pose features with relevant scene regions. A geometry discriminator regularizes predicted motion realism.

## Contributions

- Introduces a predictor conditioned jointly on observed motion, the external 3D scene, and internal gaze.
- Separates global intention reasoning from local scene-motion semantic reasoning.
- Evaluates pose and trajectory prediction on GIMO and GTA-1M.

## Experiments

The paper reports comparisons and ablations on GIMO and GTA-1M using trajectory and pose errors. It attributes improvements to the two scene-aware attention mechanisms and geometry regularization. Exact numerical results are not copied into this notebook.

## Limitations

The method assumes synchronized gaze and reconstructed point-cloud context. Its quality therefore depends on sensing and scene reconstruction that may not be available in unconstrained deployments.

## Relevance to In-context Human Motion Prediction

Relevance: Core. This is a direct future-motion prediction paper in which past motion is explicitly conditioned on scene geometry and gaze-derived intention.

## Relevance to Embodied Intelligence

The predicted trajectory and interaction pose can support anticipatory robot planning around human goals and nearby obstacles.

## My Notes

TODO: Compare the respective gains from gaze, local scene saliency, and the geometry discriminator.
