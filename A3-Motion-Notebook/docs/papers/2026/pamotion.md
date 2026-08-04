# PAMotion: Physics-Aware Motion Generation for Full-Body Interaction with Multiple Objects

> CVPR 2026 · Context-aware Human Motion Generation
>
> Status: Partially verified — official CVPR 2026 proceedings

## Paper Information

| Field | Content |
|---|---|
| Authors | Yan Di; Yuheng Li; Yaoxing Wang; Mengge Liu; Shan Gao; Xiangyang Ji |
| Venue | CVPR |
| Year | 2026 |
| Paper | [CVF Open Access](https://openaccess.thecvf.com/content/CVPR2026/html/Di_PAMotion_Physics-Aware_Motion_Generation_for_Full-Body_Interaction_with_Multiple_Objects_CVPR_2026_paper.html) |
| Code | [Official GitHub](https://github.com/liyuheng520/PAMotion) |
| Project Page | Not verified |
| Dataset | HIMO; ParaHome |
| Task | Text-conditioned full-body multi-object interaction generation |
| Input | Text and multiple object states |
| Output | Human motion, object motion, and object accelerations |
| Context Type | Language; multiple objects; contact physics |
| Method Family | Physics-aware coarse-to-fine diffusion |

## Problem

Joint diffusion of people and several objects often misses hand contacts and produces physically inconsistent object dynamics.

## Key Idea

Use object acceleration as a soft cue for whether an object is free or in contact, and couple that cue to predicted human-object contact.

## Method

PAMotion jointly models body and object motion plus acceleration. A physics-aware interaction loss penalizes mismatch between acceleration and contact; a coarse-to-fine pipeline generates torso/object translation before hands and object rotation.

## Contributions

- Connects object acceleration and contact state in a differentiable training loss.
- Generates full-body motion with multiple moving objects.
- Separates global planning from fine hand and rotation refinement.

## Experiments

The paper evaluates HIMO and ParaHome for text consistency, physical plausibility, and multi-object manipulation quality.

## Limitations

The acceleration-contact assumption is stated for everyday slow-motion scenarios and may weaken for high-speed dynamics.

## Relevance to In-context Human Motion Prediction

Relevance: Peripheral. It is conditional generation rather than observed-prefix forecasting.

## Relevance to Embodied Intelligence

Physics-aware multi-object motion is directly relevant to manipulation planning and synthetic robot-training data.

## My Notes

TODO: Compare its soft physics loss with simulation-based control approaches.
