# Multi-agent Long-term 3D Human Pose Forecasting via Interaction-aware Trajectory Conditioning

> CVPR 2024 · In-context Human Motion Prediction
>
> Status: Partially verified

## Paper Information

| Field | Content |
|---|---|
| Year | 2024 |
| Title | Multi-agent Long-term 3D Human Pose Forecasting via Interaction-aware Trajectory Conditioning |
| BibTeX | [View official BibTeX](#bibtex) |
| Conference | CVPR |
| Journal | Not applicable (conference paper) |
| Benchmark | A new long-term multi-agent dataset; additional benchmarks not verified |
| Open Source | Yes |
| Main Authors | Jaewoo Jeong; Daehee Park; Kuk-Jin Yoon |
| Paper Link | [CVF Open Access](https://openaccess.thecvf.com/content/CVPR2024/html/Jeong_Multi-agent_Long-term_3D_Human_Pose_Forecasting_via_Interaction-aware_Trajectory_Conditioning_CVPR_2024_paper.html) |
| GitHub Link | [Official GitHub](https://github.com/Jaewoo97/T2P) |
| Project Page | Not verified |
| Code / Resources | [Official GitHub](https://github.com/Jaewoo97/T2P) |
| Dataset | A new long-term multi-agent dataset; additional benchmarks not verified |
| Task | Multimodal long-term multi-person trajectory and 3D pose forecasting |
| Input | Observed global trajectories and local 3D poses for multiple people |
| Output | Multiple future global trajectories and corresponding local poses |
| Context Type | Social interaction; other people; trajectory context |
| Method Family | Coarse-to-fine graph-based multimodal forecasting |

## BibTeX

```bibtex
@InProceedings{Jeong_2024_CVPR,
    author    = {Jeong, Jaewoo and Park, Daehee and Yoon, Kuk-Jin},
    title     = {Multi-agent Long-term 3D Human Pose Forecasting via Interaction-aware Trajectory Conditioning},
    booktitle = {Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR)},
    month     = {June},
    year      = {2024},
    pages     = {1617-1628}
}
```

## Problem
Long horizons and many interacting people amplify uncertainty and make independently forecasting each body inadequate.

## Key Idea

Forecast multimodal global trajectories first, then condition fine local-pose forecasts on each trajectory mode while exchanging information across agents.

## Method

Trajectory2Pose uses a graph-based agent interaction module and reciprocal local-motion-conditioned trajectory and trajectory-conditioned pose prediction.

## Contributions

- Couples global trajectory and local pose forecasts in a coarse-to-fine design.
- Models cross-agent dependencies explicitly.
- Introduces a real-world long-term dataset covering more than five agents and horizons beyond six seconds.

## Experiments

The paper reports state-of-the-art results on both the new complex benchmark and simpler existing datasets.

## Limitations

Scene geometry and object affordances are not explicit conditioning signals.

## Relevance to In-context Human Motion Prediction

Relevance: Core. Other people's trajectories and poses are direct context for every forecasted agent.

## Relevance to Embodied Intelligence

Multi-person forecasts support navigation and planning in crowded collaborative environments.

## My Notes

TODO: Verify the exact dataset names and evaluation metrics.
