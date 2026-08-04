# MotionMap: Representing Multimodality in Human Pose Forecasting

> CVPR 2025 · In-context Human Motion Prediction
>
> Status: Partially verified

## Paper Information

| Field | Content |
|---|---|
| Year | 2025 |
| Title | MotionMap: Representing Multimodality in Human Pose Forecasting |
| BibTeX | [View official BibTeX](#bibtex) |
| Conference | CVPR |
| Journal | Not applicable (conference paper) |
| Benchmark | Human3.6M; AMASS |
| Open Source | Not verified |
| Main Authors | Reyhaneh Hosseininejad; Megh Shukla; Saeed Saadatnejad; Mathieu Salzmann; Alexandre Alahi |
| Paper Link | [CVF Open Access](https://openaccess.thecvf.com/content/CVPR2025/html/Hosseininejad_MotionMap_Representing_Multimodality_in_Human_Pose_Forecasting_CVPR_2025_paper.html) |
| GitHub Link | Not verified |
| Project Page | Not verified |
| Code / Resources | Not verified |
| Dataset | Human3.6M; AMASS |
| Task | Multimodal 3D human pose forecasting |
| Input | Observed 3D pose sequence |
| Output | A variable number of future pose modes with confidence |
| Context Type | Motion history only |
| Method Family | Heatmap-based multimodal forecasting |

## BibTeX

```bibtex
@InProceedings{Hosseininejad_2025_CVPR,
    author    = {Hosseininejad, Reyhaneh and Shukla, Megh and Saadatnejad, Saeed and Salzmann, Mathieu and Alahi, Alexandre},
    title     = {MotionMap: Representing Multimodality in Human Pose Forecasting},
    booktitle = {Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR)},
    month     = {June},
    year      = {2025},
    pages     = {22680-22689}
}
```

## Problem
Oversampling many futures obscures which modes are likely and may still miss rare but safety-critical possibilities.

## Key Idea

Represent the distribution over motion space as a heatmap whose local maxima are distinct futures with associated confidence.

## Method

MotionMap extends spatial heatmaps to the space of possible motion sequences, supporting variable mode counts, confidence estimates, rare modes, and controllable sampling.

## Contributions

- Makes forecast modes and their confidence explicit.
- Reduces reliance on brute-force oversampling.
- Introduces uncertainty and controllability in the forecast representation.

## Experiments

The paper evaluates qualitative and quantitative behavior on Human3.6M and AMASS, including rare-mode analysis.

## Limitations

The verified formulation has no external context beyond pose history.

## Relevance to In-context Human Motion Prediction

Relevance: Peripheral. Its multimodality representation is useful to context-aware systems, but it does not itself encode scene or task context.

## Relevance to Embodied Intelligence

Confidence-ranked motion modes can support risk-aware planning with fewer sampled futures.

## My Notes

TODO: Study how MotionMap scales when scene and interaction conditions narrow the mode distribution.
