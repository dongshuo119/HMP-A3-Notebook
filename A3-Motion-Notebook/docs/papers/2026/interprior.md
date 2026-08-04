# InterPrior: Scaling Generative Control for Physics-Based Human-Object Interactions

> CVPR 2026 · Context-aware Human Motion Generation
>
> Status: Partially verified — official CVPR 2026 proceedings

## Paper Information

| Field | Content |
|---|---|
| Authors | Sirui Xu; Samuel Schulter; Morteza Ziyadi; Xialin He; Xiaohan Fei; Yu-Xiong Wang; Liang-Yan Gui |
| Venue | CVPR |
| Year | 2026 |
| Paper | [CVF Open Access](https://openaccess.thecvf.com/content/CVPR2026/html/Xu_InterPrior_Scaling_Generative_Control_for_Physics-Based_Human-Object_Interactions_CVPR_2026_paper.html) |
| Code | Not verified |
| Project Page | Not verified |
| Dataset | Large-scale imitation data; names not verified |
| Task | Goal-conditioned physics-based whole-body human-object control |
| Input | Multimodal observations and high-level affordance/goal intent |
| Output | Physically executed whole-body loco-manipulation motion |
| Context Type | Object; affordance goal; physics; user control |
| Method Family | Imitation-distilled variational policy plus RL post-training |

## Problem

High-level goals should produce balance, contact, and manipulation without requiring users to specify every body joint, including for unseen objects and initial states.

## Key Idea

Distill broad imitation behavior into a goal-conditioned generative controller, perturb it physically, then consolidate its valid behavior manifold with RL.

## Method

InterPrior distills a full-reference expert into a variational policy, augments training with physical perturbations, and applies reinforcement-learning fine-tuning for unseen goals and initializations.

## Contributions

- Scales a unified physics-based HOI controller through imitation pretraining.
- Uses high-level intent rather than explicit full-body trajectories.
- Improves out-of-distribution competence through perturbation and RL post-training.

## Experiments

The paper demonstrates unseen-object interaction, interactive user control, and potential transfer toward real robots.

## Limitations

Dataset identities and the extent of real-robot validation remain to be verified.

## Relevance to In-context Human Motion Prediction

Relevance: Peripheral. It is embodied control and conditional motion generation, not passive future forecasting.

## Relevance to Embodied Intelligence

This work directly targets physically coherent humanoid loco-manipulation under object and intent context.

## My Notes

TODO: Separate motion-prior quality from task-policy success in the reported evaluations.
