# Stability-Driven Motion Generation for Object-Guided Human-Human Co-Manipulation

> CVPR 2026 · Context-aware Human Motion Generation
>
> Status: Partially verified

## Paper Information

| Field | Content |
|---|---|
| Authors | Jiahao Xu; Xiaohan Yuan; Xingchen Wu; Chongyang Xu; Kun Li; Buzhen Huang |
| Venue | CVPR main conference |
| Year | 2026 |
| Publication Status | Officially published in CVPR 2026 proceedings; CVF Open Access page verified |
| Paper | [CVF Open Access](https://openaccess.thecvf.com/content/CVPR2026/html/Xu_Stability-Driven_Motion_Generation_for_Object-Guided_Human-Human_Co-Manipulation_CVPR_2026_paper.html) |
| Code | [Official repository](https://github.com/boycehbz/StaCOM) |
| Project Page | Not verified |
| Dataset | Core4D; Inter-X |
| Task | Two-person object-guided co-manipulation motion generation |
| Input | Object mesh and prescribed object trajectory |
| Output | Coordinated motion for two humans manipulating the object |
| Context Type | Shared object geometry/trajectory; partner motion; physical stability |
| Method Family | Flow matching with affordance, adversarial, and simulation guidance |

## Problem

Two people must coordinate with each other and a payload while preserving natural poses, contact, and stable object transport; ordinary single-person or social-motion generators do not enforce all three.

## Key Idea

Organize generation around intention, naturalness, and effectiveness: object affordance proposes manipulation contacts, an interaction prior scores coordinated motion, and simulation corrects unstable samples.

## Method

A conditional flow-matching model maps noise to paired human motion under object-trajectory guidance. An affordance-informed strategy creates graspability fields and contact anchors. An adversarial interaction prior evaluates dual-human coordination, while stability-driven simulation and CMA-ES sampling refine unstable states.

## Contributions

- Introduces object-guided two-person co-manipulation generation.
- Combines explicit manipulation strategy with a learned interaction prior.
- Feeds physics-based stability refinement back into flow matching.

## Experiments

Core4D provides collaborative human-object-human trajectories and official splits; Inter-X augments human-human motion diversity. Reported evaluations cover contact, penetration, distributional fidelity, and stability.

## Limitations

The task assumes a given object trajectory and focuses on two-person co-manipulation. Simulation refinement adds computational cost and relies on approximate object parameters.

## Relevance to In-context Human Motion Prediction

Relevance: Peripheral. It is object-trajectory-conditioned generation, but partner and payload dynamics are explicit contexts for coordinated future motion.

## Relevance to Embodied Intelligence

The formulation is directly relevant to collaborative carrying and can inform human-robot co-manipulation after accounting for embodiment differences.

## My Notes

TODO: Assess which parts transfer from human-human coordination to asymmetric human-robot teams.
