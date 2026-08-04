# Decoupled Generative Modeling for Human-Object Interaction Synthesis

> CVPR 2026 · Context-aware Human Motion Generation
>
> Status: Partially verified — official CVPR 2026 proceedings

## Paper Information

| Field | Content |
|---|---|
| Year | 2026 |
| Title | Decoupled Generative Modeling for Human-Object Interaction Synthesis |
| BibTeX | [View official BibTeX](#bibtex) |
| Conference | CVPR |
| Journal | Not applicable (conference paper) |
| Benchmark | FullBodyManipulation; 3D-FUTURE |
| Open Source | Not verified |
| Main Authors | Hwanhee Jung; Seunggwan Lee; Jeongyoon Yoon; SeungHyeon Kim; Giljoo Nam; Qixing Huang; Sangpil Kim |
| Paper Link | [CVF Open Access](https://openaccess.thecvf.com/content/CVPR2026/html/Jung_Decoupled_Generative_Modeling_for_Human-Object_Interaction_Synthesis_CVPR_2026_paper.html) |
| GitHub Link | Not verified |
| Project Page | Not verified |
| Code / Resources | Not verified |
| Dataset | FullBodyManipulation; 3D-FUTURE |
| Task | Long-sequence human-object interaction synthesis in dynamic scenes |
| Input | Human/object start and task conditions with a static or moving counterpart |
| Output | Human and object trajectories plus detailed action motion |
| Context Type | Object; dynamic scene; moving counterpart |
| Method Family | Decoupled trajectory and action generators with adversarial contact modeling |

## BibTeX

```bibtex
@InProceedings{Jung_2026_CVPR,
    author    = {Jung, Hwanhee and Lee, Seunggwan and Yoon, Jeongyoon and Kim, SeungHyeon and Nam, Giljoo and Huang, Qixing and Kim, Sangpil},
    title     = {Decoupled Generative Modeling for Human-Object Interaction Synthesis},
    booktitle = {Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR)},
    month     = {June},
    year      = {2026},
    pages     = {2253-2263}
}
```

## Problem
One network handling planning, detailed action, synchronization, and contact can require manual waypoints and produce penetration or mismatched object motion.

## Key Idea

Generate coarse human/object paths first and synthesize detailed action motion only after those paths establish the plan.

## Method

DecHOI separates a waypoint-free trajectory generator from a path-conditioned action generator and adds a discriminator focused on distal-joint dynamics for contact realism.

## Contributions

- Decouples interaction planning from detailed action synthesis.
- Supports moving counterparts and responsive long-sequence plans.
- Uses distal-joint adversarial supervision to improve contact.

## Experiments

The paper evaluates FullBodyManipulation and 3D-FUTURE with quantitative metrics, qualitative comparisons, and perceptual studies.

## Limitations

Code and project links were not verified; the range of dynamic-scene perturbations needs closer reading.

## Relevance to In-context Human Motion Prediction

Relevance: Peripheral. It is a generative planner rather than an observed-prefix human forecast.

## Relevance to Embodied Intelligence

Separating plan and action mirrors hierarchical embodied planning for long object interactions.

## My Notes

TODO: Determine whether responsive replanning is causal and online.
