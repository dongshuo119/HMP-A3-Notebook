# Sparse Pedestrian Character Learning for Trajectory Prediction

> IEEE TMM 2024 · In-context Human Motion Prediction
>
> Status: Partially verified

## Paper Information

| Field | Content |
|---|---|
| Year | 2024 |
| Title | Sparse Pedestrian Character Learning for Trajectory Prediction |
| BibTeX | [View BibTeX](#bibtex) |
| Conference | Not applicable (journal article) |
| Journal | IEEE Transactions on Multimedia |
| Benchmark | PIE |
| Open Source | Not verified |
| Main Authors | Yonghao Dong; Le Wang; Sanping Zhou; Gang Hua; Changyin Sun |
| Paper Link | [Official paper](https://doi.org/10.1109/tmm.2024.3443591) |
| GitHub Link | Not verified |
| Publication Status | Official publication record verified |
| Project Page | Not verified |
| Code / Resources | Not verified |
| Open Access Copy | [arXiv](https://arxiv.org/abs/2311.15512) |
| Dataset | PIE |
| Task | Context-aware human/pedestrian trajectory prediction |
| Input | Observed past human motion or trajectories; context: Language / text; Trajectory / kinematic control |
| Output | Future human trajectories |
| Context Type | Language / text; Trajectory / kinematic control |
| Method Family | Transformer / attention |

## BibTeX

```bibtex
@article{Dong_2024, title={Sparse Pedestrian Character Learning for Trajectory Prediction}, volume={26}, ISSN={1941-0077}, url={http://dx.doi.org/10.1109/tmm.2024.3443591}, DOI={10.1109/tmm.2024.3443591}, journal={IEEE Transactions on Multimedia}, publisher={Institute of Electrical and Electronics Engineers (IEEE)}, author={Dong, Yonghao and Wang, Le and Zhou, Sanping and Hua, Gang and Sun, Changyin}, year={2024}, pages={11070–11082} }
```

## Problem

Pedestrian trajectory prediction in a first-person view has recently attracted much attention due to its importance in autonomous driving. Recent work utilizes pedestrian character information, \textit{i.e.}, action and appearance, to improve the learned trajectory embedding and achieves state-of-the-art performance.

## Key Idea

To address this issue, we present a two-stream sparse-character-based network~(TSNet) for pedestrian trajectory prediction.

## Method

T HE LOWER THE BETTER . and then generate C corresponding goals G. Subsequently, we predict C trajectories ˆY conditioned by C generated goals. Finally, we cluster the number of predicted trajectories from C into K as our final multimodal predictions.

## Contributions

- We also conduct extensive ablation studies to validate the effectiveness of our contributions.
- The rest of this paper is organized as follows.
- We briefly review the related work in Section II.

## Experiments

Not verified

## Limitations

Not verified

## Relevance to In-context Human Motion Prediction

Relevance: Peripheral. This work covers human trajectory rather than articulated full-body forecasting; it is retained because its conditioning or evaluation setting is useful to context-aware motion research.

## Relevance to Embodied Intelligence

The explicit scene, object, interaction, sensing, or control condition makes this work directly relevant to embodied agents that must anticipate or synthesize physically situated human behavior.

## My Notes

TODO: Complete a second-pass manual reading and record comparisons with the closest papers in this notebook.
