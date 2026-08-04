# Scaling Up Dynamic Human-Scene Interaction Modeling

> CVPR 2024 · Context-aware Human Motion Generation
>
> Status: Partially verified

## Paper Information

| Field | Content |
|---|---|
| Authors | Nan Jiang; Zhiyuan Zhang; Hongjie Li; Xiaoxuan Ma; Zan Wang; Yixin Chen; Tengyu Liu; Yixin Zhu; Siyuan Huang |
| Venue | CVPR |
| Year | 2024 |
| Paper | [CVF Open Access](https://openaccess.thecvf.com/content/CVPR2024/html/Jiang_Scaling_Up_Dynamic_Human-Scene_Interaction_Modeling_CVPR_2024_paper.html) |
| Code | [Official utilities repository](https://github.com/jnnan/trumans_utils) |
| Project Page | [TRUMANS project page](https://jnnan.github.io/trumans/) |
| Dataset | TRUMANS; PROX/Replica/ScanNet/ScanNet++ for generalization |
| Task | Arbitrary-length human-scene interaction synthesis |
| Input | Local 3D scene context and frame-wise action labels |
| Output | Long 3D human motion in an indoor scene |
| Context Type | Scene occupancy; action condition; dynamic object interaction |
| Method Family | Autoregressive conditional diffusion |

## Problem

Human-scene interaction research lacks both high-quality dynamic-contact data and a model that can synthesize controllable, collision-aware motion for arbitrary durations.

## Key Idea

Pair a 15-hour motion-captured interaction dataset across 100 scene configurations with an autoregressive diffusion model that queries scene occupancy locally and accepts action labels over time.

## Method

The model autoregressively generates motion chunks. A local scene perceiver queries global occupancy near the moving person, while temporal action embeddings condition different motion segments. The dataset includes whole-body motion and part-level object dynamics with digital scene replicas and augmentation.

## Contributions

- Introduces the TRUMANS motion-captured HSI dataset.
- Proposes real-time arbitrary-length scene- and action-conditioned diffusion generation.
- Tests zero-shot transfer to multiple unseen 3D-scene datasets.

## Experiments

The paper cross-evaluates the dataset and synthesis model, compares motion quality and scene interaction, and includes human studies and transfer to PROX, Replica, ScanNet, and ScanNet++.

## Limitations

Coverage remains tied to recorded indoor configurations, object categories, and frame-wise action labels. The released repository is described as utilities; complete training code was not independently confirmed.

## Relevance to In-context Human Motion Prediction

Relevance: Peripheral. The work is generative, but its local scene encoding and dynamic-contact data can support context-aware forecasting.

## Relevance to Embodied Intelligence

TRUMANS provides long, contact-rich trajectories useful for environment-aware motion priors and embodied simulation.

## My Notes

TODO: Separate the value of dataset scale from the gains of the autoregressive model in cross-dataset results.
