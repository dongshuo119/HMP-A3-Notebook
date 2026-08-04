# SceneMI: Motion In-betweening for Modeling Human-Scene Interaction

> ICCV 2025 · Context-aware Human Motion Generation
>
> Status: Partially verified

## Paper Information

| Field | Content |
|---|---|
| Authors | Inwoo Hwang; Bing Zhou; Young Min Kim; Jian Wang; Chuan Guo |
| Venue | ICCV |
| Year | 2025 |
| Paper | [CVF Open Access](https://openaccess.thecvf.com/content/ICCV2025/html/Hwang_SceneMI_Motion_In-betweening_for_Modeling_Human-Scene_Interaction_ICCV_2025_paper.html) |
| Code | Not verified |
| Project Page | Not verified |
| Dataset | GIMO; additional training datasets not verified |
| Task | Scene-aware motion in-betweening and motion refinement |
| Input | 3D scene and sparse or noisy motion keyframes |
| Output | Complete scene-compatible human motion between keyframes |
| Context Type | 3D scene geometry; local contacts; motion keyframes |
| Method Family | Scene-conditioned diffusion in-betweening |

## Problem

Free-form HSI generation can lack controllability, while real animation and reconstruction often provide endpoints or sparse keyframes that should be respected.

## Key Idea

Reformulate human-scene modeling as constrained in-betweening with both global and local scene descriptors.

## Method

SceneMI encodes complementary global and local scene context and uses diffusion denoising to generate between keyframes and tolerate imperfect inputs.

## Contributions

- Defines scene-aware motion in-betweening as a practical HSI task.
- Combines global layout and local interaction geometry.
- Applies the denoiser to keyframe-guided animation, motion cleanup, and monocular HSI reconstruction.

## Experiments

The paper evaluates in-betweening and reports generalization to noisy real-world GIMO scenes and motions.

## Limitations

It is not free-running future prediction because future keyframes constrain the generated interval.

## Relevance to In-context Human Motion Prediction

Relevance: Peripheral. The model fills motion under scene context, but access to future keyframes distinguishes it from forecasting.

## Relevance to Embodied Intelligence

Scene-compatible motion completion can repair noisy demonstrations and synthesize controlled interaction data.

## My Notes

TODO: Record keyframe sparsity settings and collision/contact metrics.
