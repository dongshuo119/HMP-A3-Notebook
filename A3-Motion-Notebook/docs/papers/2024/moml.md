# MoML: Online Meta Adaptation for 3D Human Motion Prediction

> CVPR 2024 · In-context Human Motion Prediction
>
> Status: Partially verified

## Paper Information

| Field | Content |
|---|---|
| Year | 2024 |
| Title | MoML: Online Meta Adaptation for 3D Human Motion Prediction |
| BibTeX | [View official BibTeX](#bibtex) |
| Conference | CVPR |
| Journal | Not applicable (conference paper) |
| Benchmark | Not verified |
| Open Source | Not verified |
| Main Authors | Xiaoning Sun; Huaijiang Sun; Bin Li; Dong Wei; Weiqing Li; Jianfeng Lu |
| Paper Link | [CVF Open Access](https://openaccess.thecvf.com/content/CVPR2024/html/Sun_MoML_Online_Meta_Adaptation_for_3D_Human_Motion_Prediction_CVPR_2024_paper.html) |
| GitHub Link | Not verified |
| Project Page | Not verified |
| Code / Resources | Not verified |
| Dataset | Not verified |
| Task | Online-adaptive 3D human motion prediction |
| Input | Observed motion and errors from recent online predictions |
| Output | Future 3D human motion |
| Context Type | Temporal motion context; online error feedback |
| Method Family | Model-agnostic meta-learning and online adaptation |

## BibTeX

```bibtex
@InProceedings{Sun_2024_CVPR,
    author    = {Sun, Xiaoning and Sun, Huaijiang and Li, Bin and Wei, Dong and Li, Weiqing and Lu, Jianfeng},
    title     = {MoML: Online Meta Adaptation for 3D Human Motion Prediction},
    booktitle = {Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR)},
    month     = {June},
    year      = {2024},
    pages     = {1042-1051}
}
```

## Problem
Fixed offline predictors cannot adapt their parameters to changing motion patterns at deployment time.

## Key Idea

Convert recent prediction errors into an inductive bias for rapid per-stream adaptation.

## Method

MoAdapter blocks start from a meta-learned initialization and update through a few gradient steps. Fast-MoML replaces iterative updating with a closed-form adaptation for lower latency.

## Contributions

- Formulates online meta-adaptation for motion prediction.
- Provides MoML and a faster closed-form variant.
- Designs the approach to wrap multiple existing offline predictors.

## Experiments

The official paper reports improvements when bringing several offline prediction backbones into the online setting; dataset-level details remain to be extracted.

## Limitations

The method does not explicitly model scene, object, language, or social context.

## Relevance to In-context Human Motion Prediction

Relevance: Peripheral. The deployment stream and recent errors are context, but the paper is not scene- or interaction-conditioned.

## Relevance to Embodied Intelligence

Fast adaptation is relevant when a robot repeatedly observes a person's changing motion style.

## My Notes

TODO: Verify datasets, base predictors, and adaptation cost from the full experiments.
