# Efficient Multi-Person Motion Prediction by Lightweight Spatial and Temporal Interactions

> ICCV 2025 · In-context Human Motion Prediction
>
> Status: Partially verified

## Paper Information

| Field | Content |
|---|---|
| Year | 2025 |
| Title | Efficient Multi-Person Motion Prediction by Lightweight Spatial and Temporal Interactions |
| BibTeX | [View official BibTeX](#bibtex) |
| Conference | ICCV |
| Journal | Not applicable (conference paper) |
| Benchmark | 3DPW; AMASS; CMU-Mocap; MuPoTS-3D |
| Open Source | Yes |
| Main Authors | Yuanhong Zheng; Ruixuan Yu; Jian Sun |
| Paper Link | [CVF Open Access](https://openaccess.thecvf.com/content/ICCV2025/html/Zheng_Efficient_Multi-Person_Motion_Prediction_by_Lightweight_Spatial_and_Temporal_Interactions_ICCV_2025_paper.html) |
| GitHub Link | [Official repository](https://github.com/Yuanhong-Zheng/EMPMP) |
| Project Page | Not verified |
| Code / Resources | [Official repository](https://github.com/Yuanhong-Zheng/EMPMP) |
| Dataset | 3DPW; AMASS; CMU-Mocap; MuPoTS-3D |
| Task | Multi-person 3D motion prediction |
| Input | Historical skeleton sequences for multiple people |
| Output | Future joint trajectories for all observed people |
| Context Type | Other people; inter-person distance and temporal interaction |
| Method Family | Lightweight dual-branch interaction network |

## BibTeX

```bibtex
@InProceedings{Zheng_2025_ICCV,
    author    = {Zheng, Yuanhong and Yu, Ruixuan and Sun, Jian},
    title     = {Efficient Multi-Person Motion Prediction by Lightweight Spatial and Temporal Interactions},
    booktitle = {Proceedings of the IEEE/CVF International Conference on Computer Vision (ICCV)},
    month     = {October},
    year      = {2025},
    pages     = {10844-10853}
}
```

## Problem
Multi-person forecasting requires both individual temporal modeling and inter-person reasoning, but Transformer-heavy approaches can be expensive for deployment.

## Key Idea

Use lightweight local/global branches and explicitly exchange spatial and temporal information instead of applying full attention over every person, joint, and frame.

## Method

EMPMP separates individual and group representations, joins them through a cross-level interaction block, and adds explicit inter-person distance embeddings. The design targets a favorable accuracy/parameter trade-off.

## Contributions

- Introduces an efficient architecture for joint multi-person pose forecasting.
- Models spatial and temporal cross-level interactions with explicit distance information.
- Evaluates multiple prediction horizons and transfer settings.

## Experiments

Experiments cover 3DPW, AMASS pretraining, synthetic CMU-Mocap multi-person scenes, and CMU-Syn to MuPoTS-3D transfer. The paper reports both prediction accuracy and computational cost.

## Limitations

The context is limited to skeletal motion of other people. It does not explicitly model scene geometry, language, gaze, or physical contact.

## Relevance to In-context Human Motion Prediction

Relevance: Core. Other people are the explicit context for forecasting each person's future motion.

## Relevance to Embodied Intelligence

The lightweight design is relevant to robots that must forecast nearby groups under limited compute.

## My Notes

TODO: Compare performance per parameter/FLOP against stronger scene-aware predictors under the same horizon.
