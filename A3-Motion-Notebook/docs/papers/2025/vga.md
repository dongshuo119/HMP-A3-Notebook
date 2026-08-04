# Vision-Guided Action: Enhancing 3D Human Motion Prediction with Gaze-informed Affordance in 3D Scenes

> CVPR 2025 · In-context Human Motion Prediction
>
> Status: Partially verified

## Paper Information

| Field | Content |
|---|---|
| Authors | Ting Yu; Yi Lin; Jun Yu; Zhenyu Lou; Qiongjie Cui |
| Venue | CVPR |
| Year | 2025 |
| Paper | [CVF Open Access](https://openaccess.thecvf.com/content/CVPR2025/html/Yu_Vision-Guided_Action_Enhancing_3D_Human_Motion_Prediction_with_Gaze-informed_Affordance_CVPR_2025_paper.html) |
| Code | Not verified |
| Project Page | Not verified |
| Dataset | GIMO; GTA-IM |
| Task | Future 3D human pose and trajectory prediction |
| Input | Observed motion, gaze, and a 3D scene point cloud |
| Output | Future trajectory and body poses, including interaction poses |
| Context Type | Gaze/intention; object affordance; 3D scene |
| Method Family | Affordance-aware scene-conditioned predictor |

## Problem

Gaze coordinates indicate where a person looks but not what interaction the observed object affords, which can leave predicted endpoint poses semantically or physically incorrect.

## Key Idea

Use gaze to identify the relevant object, infer its action affordance, and condition future interaction-pose generation on both semantics and geometry.

## Method

GAP3DS contains a gaze-guided affordance learner that selects an object and predicts affordance semantics. An affordance-aware pose generator produces candidate interaction poses, which guide decoding of the full future motion and trajectory.

## Contributions

- Moves beyond gaze-as-coordinate by modeling gaze-informed object affordance.
- Connects early intent cues to future human-object interaction poses.
- Evaluates trajectory, pose, and penetration behavior on GIMO and GTA-IM.

## Experiments

The main paper reports GIMO comparisons and ablations; GTA-IM results are placed in supplementary material. Reported metrics cover trajectory deviation, MPJPE, and scene penetration.

## Limitations

The pipeline relies on gaze sensing and correct object/affordance inference. The official text says code is on a project page, but a reliable public URL was not verified during this pass.

## Relevance to In-context Human Motion Prediction

Relevance: Core. It forecasts future motion from an observed prefix while explicitly reasoning about gaze, object affordance, and scene geometry.

## Relevance to Embodied Intelligence

Affordance-aware intent prediction can help a robot distinguish not only where a human will move, but what action they may perform there.

## My Notes

TODO: Check whether the affordance labels generalize beyond the action categories represented in GIMO/GTA-IM.
