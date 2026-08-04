# Progressive Guessing to Fixed Point: Rethinking Human Motion Prediction with Deep Equilibrium Models

> CVPR 2026 · In-context Human Motion Prediction
>
> Status: Partially verified — official CVPR 2026 proceedings

## Paper Information

| Field | Content |
|---|---|
| Year | 2026 |
| Title | Progressive Guessing to Fixed Point: Rethinking Human Motion Prediction with Deep Equilibrium Models |
| BibTeX | [View official BibTeX](#bibtex) |
| Conference | CVPR |
| Journal | Not applicable (conference paper) |
| Benchmark | Human3.6M; additional datasets not verified |
| Open Source | Not verified |
| Main Authors | Dong Wei; Huaijiang Sun; Fan Liu; Yuhui Zheng |
| Paper Link | [CVF Open Access](https://openaccess.thecvf.com/content/CVPR2026/html/Wei_Progressive_Guessing_to_Fixed_Point_Rethinking_Human_Motion_Prediction_with_CVPR_2026_paper.html) |
| GitHub Link | Not verified |
| Project Page | Not verified |
| Code / Resources | Not verified |
| Dataset | Human3.6M; additional datasets not verified |
| Task | Efficient deterministic human motion prediction |
| Input | Observed pose sequence, optionally as a streaming sequence |
| Output | Future 3D poses at a learned equilibrium |
| Context Type | Motion history; streaming warm-start state |
| Method Family | Equivariant deep equilibrium model |

## BibTeX

```bibtex
@InProceedings{Wei_2026_CVPR,
    author    = {Wei, Dong and Sun, Huaijiang and Liu, Fan and Zheng, Yuhui},
    title     = {Progressive Guessing to Fixed Point: Rethinking Human Motion Prediction with Deep Equilibrium Models},
    booktitle = {Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR)},
    month     = {June},
    year      = {2026},
    pages     = {16454-16463}
}
```

## Problem
Cascaded refinement increases compute and memory with depth and offers no principled stopping criterion.

## Key Idea

Replace a finite stack of refinement stages with an implicit fixed point that can be solved iteratively and reused across streaming predictions.

## Method

MotionDEQ embeds Euclidean geometric transformations in an implicit equilibrium layer. Black-box solvers find the fixed point with constant training-memory scaling, and prior solutions warm-start later stream frames.

## Contributions

- Reformulates progressive pose refinement as equilibrium solving.
- Builds equivariance into the implicit process.
- Recycles a converged solution for streaming inference.

## Experiments

The official paper reports fewer than 300K parameters and evaluates prediction and memory efficiency, including Human3.6M.

## Limitations

It has no explicit scene, object, language, or social condition.

## Relevance to In-context Human Motion Prediction

Relevance: Peripheral. It advances the prediction backbone but not external-context reasoning.

## Relevance to Embodied Intelligence

Memory-efficient streaming prediction is relevant to embedded real-time systems.

## My Notes

TODO: Verify convergence tolerances and worst-case iteration latency.
