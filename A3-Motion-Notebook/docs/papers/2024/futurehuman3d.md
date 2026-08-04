# FutureHuman3D: Forecasting Complex Long-Term 3D Human Behavior from Video Observations

> CVPR 2024 · In-context Human Motion Prediction
>
> Status: Partially verified

## Paper Information

| Field | Content |
|---|---|
| Year | 2024 |
| Title | FutureHuman3D: Forecasting Complex Long-Term 3D Human Behavior from Video Observations |
| BibTeX | [View official BibTeX](#bibtex) |
| Conference | CVPR |
| Journal | Not applicable (conference paper) |
| Benchmark | MPII Cooking II; IKEA-ASM; unpaired 3D pose data |
| Open Source | Not verified |
| Main Authors | Christian Diller; Thomas Funkhouser; Angela Dai |
| Paper Link | [CVF Open Access](https://openaccess.thecvf.com/content/CVPR2024/html/Diller_FutureHuman3D_Forecasting_Complex_Long-Term_3D_Human_Behavior_from_Video_Observations_CVPR_2024_paper.html) |
| GitHub Link | Not verified |
| Project Page | Not verified |
| Code / Resources | Not verified |
| Dataset | MPII Cooking II; IKEA-ASM; unpaired 3D pose data |
| Task | Long-term joint action and characteristic 3D pose forecasting |
| Input | Recent RGB frames, extracted 2D poses, observed action labels, and initial object labels |
| Output | Autoregressive future action labels and characteristic 3D poses |
| Context Type | Video; action semantics; object labels |
| Method Family | Weakly supervised autoregressive action-pose forecasting |

## BibTeX

```bibtex
@InProceedings{Diller_2024_CVPR,
    author    = {Diller, Christian and Funkhouser, Thomas and Dai, Angela},
    title     = {FutureHuman3D: Forecasting Complex Long-Term 3D Human Behavior from Video Observations},
    booktitle = {Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR)},
    month     = {June},
    year      = {2024},
    pages     = {19902-19914}
}
```

## Problem
Long-term behavior forecasting needs both semantic action prediction and spatial 3D pose reasoning, but complex activity datasets rarely provide paired 3D supervision.

## Key Idea

Jointly forecast the next action and its characteristic 3D pose, then feed both predictions back autoregressively to forecast multi-step behavior.

## Method

Separate encoders process 2D pose history, action labels, and object labels. Two decoders predict the next action and 3D characteristic pose. The pose branch is trained with differentiable 2D projection and an adversarial 3D validity loss using an unrelated pose database.

## Contributions

- Couples long-term action forecasting with 3D characteristic-pose forecasting.
- Learns from 2D action video without paired 3D action-motion supervision.
- Uses event-level characteristic poses to reduce drift in autoregressive long-horizon prediction.

## Experiments

The paper evaluates multi-step action and characteristic-pose forecasting on MPII Cooking II and IKEA-ASM and compares joint training with treating the two tasks separately.

## Limitations

The input includes observed action and object labels, and the output is a sequence of characteristic poses rather than dense frame-rate motion.

## Relevance to In-context Human Motion Prediction

Relevance: Core. It predicts future human behavior from video while explicitly conditioning on action and object context.

## Relevance to Embodied Intelligence

Long-horizon action-plus-pose forecasts can give assistive robots earlier, spatially grounded signals about upcoming human needs.

## My Notes

TODO: Compare characteristic-pose forecasting with dense future-motion benchmarks.
