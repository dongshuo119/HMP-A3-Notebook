# HUMOF: Human Motion Forecasting in Interactive Social Scenes

> ICLR 2026 · In-context Human Motion Prediction
>
> Status: Partially verified — official ICLR 2026 proceedings

## Paper Information

| Field | Content |
|---|---|
| Year | 2026 |
| Title | HUMOF: Human Motion Forecasting in Interactive Social Scenes |
| BibTeX | [View official BibTeX](#bibtex) |
| Conference | ICLR |
| Journal | Not applicable (conference paper) |
| Benchmark | Four public datasets; names not verified |
| Open Source | Yes |
| Main Authors | Caiyi Sun; Yujing Sun; Xiao Han; Zemin Yang; Jiawei Liu; Xinge Zhu; Siu Ming Yiu; Yuexin Ma |
| Paper Link | [ICLR Proceedings](https://proceedings.iclr.cc/paper_files/paper/2026/hash/0b7f639ef28a9035a71f7e0c04c1d681-Abstract-Conference.html) |
| GitHub Link | [Official GitHub](https://github.com/scy639/HUMOF) |
| Project Page | Not verified |
| Code / Resources | [Official GitHub](https://github.com/scy639/HUMOF) |
| Dataset | Four public datasets; names not verified |
| Task | Human motion forecasting in dynamic interactive scenes |
| Input | Observed human motion, other people, and environmental interaction features |
| Output | Future human motion |
| Context Type | Human-human; human-environment; dynamic scene |
| Method Family | Hierarchical interaction reasoning in spatial and frequency domains |

## BibTeX

```bibtex
@inproceedings{ICLR2026_0b7f639e,
 author = {Sun, Caiyi and SUN, YUJING and Han, Xiao and Yang, Zemin and Liu, Jiawei and zhu, xinge and Yiu, Siu Ming and Ma, Yuexin},
 booktitle = {International Conference on Learning Representations},
 editor = {C. Vondrick and B. Hariharan and C. Raffel and L. Pinto and D. Yang and A. Faust},
 pages = {6511--6534},
 title = {HUMOF: Human Motion Forecasting in Interactive Social Scenes},
 url = {https://proceedings.iclr.cc/paper_files/paper/2026/file/0b7f639ef28a9035a71f7e0c04c1d681-Paper-Conference.pdf},
 volume = {2026},
 year = {2026}
}
```

## Problem
Dynamic social scenes contain global interaction structure and fine local cues that create substantial forecast uncertainty.

## Key Idea

Represent interactions hierarchically and reason coarse-to-fine from both spatial and frequency views.

## Method

HUMOF builds high-level context and low-level detail features, then applies a coarse-to-fine interaction module across spatial and spectral representations.

## Contributions

- Models both human-human and human-environment interactions.
- Separates global context and fine-grained interaction detail.
- Combines spatial and frequency reasoning for prediction.

## Experiments

The paper reports state-of-the-art performance across four public datasets.

## Limitations

Dataset names and the exact scene representation still need verification.

## Relevance to In-context Human Motion Prediction

Relevance: Core. Interactive people and environment context are central to its future-motion forecast.

## Relevance to Embodied Intelligence

It addresses situated social forecasting directly rather than adding context after prediction.

## My Notes

TODO: Verify the four benchmarks and whether scene context is geometric, visual, or symbolic.
