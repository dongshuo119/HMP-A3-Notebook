# Forecasting of 3D Whole-body Human Poses with Grasping Objects

> CVPR 2024 · In-context Human Motion Prediction
>
> Status: Partially verified

## Paper Information

| Field | Content |
|---|---|
| Authors | Haitao Yan; Qiongjie Cui; Jiexin Xie; Shijie Guo |
| Venue | CVPR |
| Year | 2024 |
| Paper | [CVF Open Access](https://openaccess.thecvf.com/content/CVPR2024/html/Yan_Forecasting_of_3D_Whole-body_Human_Poses_with_Grasping_Objects_CVPR_2024_paper.html) |
| Code | Not verified |
| Project Page | [Official project page](https://sites.google.com/view/c3host) |
| Dataset | Two benchmarks; names not verified |
| Task | Forecast whole-body and hand motion during object grasping |
| Input | Observed body/hand motion and object-related multimodal context |
| Output | Future 3D body and hand joint sequences |
| Context Type | Grasped object; hand-body cross-context |
| Method Family | Cross-context cross-modal consolidation |

## Problem

Body-only predictors omit fine hand motion and the external coupling introduced by grasped objects.

## Key Idea

Model body-hand heterogeneity and human-object interaction jointly instead of forecasting major joints alone.

## Method

C3HOST performs heterogeneous content encoding and alignment, followed by cross-modal feature learning and interaction, to consolidate whole-body, hand, and object evidence.

## Contributions

- Defines whole-body pose forecasting with grasped-object interaction.
- Includes both major body joints and fine-grained hand joints.
- Designs cross-context and cross-modal modules for internal and external coupling.

## Experiments

The official paper reports improvements on two benchmarks; exact dataset names and metric values remain to be verified.

## Limitations

The verified task is centered on grasping and may not cover broader scene-level interaction.

## Relevance to In-context Human Motion Prediction

Relevance: Core. Object interaction is an explicit condition on future whole-body and hand motion.

## Relevance to Embodied Intelligence

Forecasting hands together with the body is valuable for handover and collaborative manipulation.

## My Notes

TODO: Verify object representation and whether future object motion is also predicted.
