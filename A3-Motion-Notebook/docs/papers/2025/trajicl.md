# Towards Predicting Any Human Trajectory In Context

> NeurIPS 2025 · In-context Human Motion Prediction
>
> Status: Partially verified

## Paper Information

| Field | Content |
|---|---|
| Year | 2025 |
| Title | Towards Predicting Any Human Trajectory In Context |
| BibTeX | [View official BibTeX](#bibtex) |
| Conference | NeurIPS |
| Journal | Not applicable (conference paper) |
| Benchmark | Large-scale synthetic training data; multiple public pedestrian benchmarks |
| Open Source | Not verified |
| Main Authors | Ryo Fujii; Hideo Saito; Ryo Hachiuma |
| Paper Link | [NeurIPS Proceedings](https://proceedings.neurips.cc/paper_files/paper/2025/hash/46f0114c06524debc60ef2a72769f7a9-Abstract-Conference.html) |
| GitHub Link | Not verified |
| Project Page | Not verified |
| Code / Resources | Not verified |
| Dataset | Large-scale synthetic training data; multiple public pedestrian benchmarks |
| Task | Cross-scene pedestrian trajectory prediction with in-context adaptation |
| Input | Target pedestrian history and retrieved same-scene trajectory examples |
| Output | Future 2D pedestrian trajectory |
| Context Type | In-context examples; scene location; other observed trajectories |
| Method Family | Retrieval-based in-context trajectory learning |

## BibTeX

```bibtex
@inproceedings{NEURIPS2025_46f0114c,
 author = {Fujii, Ryo and Saito, Hideo and Hachiuma, Ryo},
 booktitle = {Advances in Neural Information Processing Systems},
 editor = {D. Belgrave and C. Zhang and H. Lin and R. Pascanu and P. Koniusz and M. Ghassemi and N. Chen},
 pages = {49606--49631},
 publisher = {Curran Associates, Inc.},
 title = {Towards Predicting Any Human Trajectory In Context},
 url = {https://proceedings.neurips.cc/paper_files/paper/2025/file/46f0114c06524debc60ef2a72769f7a9-Paper-Conference.pdf},
 volume = {38},
 year = {2025}
}
```

## Problem
Scenario-specific fine-tuning is impractical on edge devices, yet pedestrian dynamics change across scenes and domains.

## Key Idea

Adapt without weight updates by retrieving trajectories that moved similarly at corresponding locations in the current scene.

## Method

TrajICL uses spatio-temporal similarity example selection and prediction-guided refinement that compares both past and provisional future trajectories. Training uses a large synthetic dataset to diversify contexts.

## Contributions

- Applies in-context learning directly to pedestrian forecasting.
- Selects demonstrations using scene location and motion similarity.
- Uses a provisional future to improve long-term example relevance.

## Experiments

The paper reports in-domain and cross-domain adaptation across multiple public pedestrian benchmarks, including comparisons with fine-tuning.

## Limitations

Relevance: Peripheral. This predicts root-level pedestrian trajectories, not articulated full-body pose or motion.

## Relevance to In-context Human Motion Prediction

Relevance: Peripheral. It is the most literal ICL paper in the set, but its output is a 2D path rather than full-body motion.

## Relevance to Embodied Intelligence

Weight-free scene adaptation is useful for deployed mobile robots with limited compute.

## My Notes

TODO: Verify benchmark names and whether scene images/maps are used beyond trajectory location.
