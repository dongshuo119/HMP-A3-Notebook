# ReAlign: Text-to-Motion Generation via Step-Aware Reward-Guided Alignment

> AAAI 2026 · Context-aware Human Motion Generation
>
> Status: Partially verified

## Paper Information

| Field | Content |
|---|---|
| Year | 2026 |
| Title | ReAlign: Text-to-Motion Generation via Step-Aware Reward-Guided Alignment |
| BibTeX | [View BibTeX](#bibtex) |
| Conference | AAAI |
| Journal | Not applicable (conference paper) |
| Benchmark | Not verified |
| Open Source | Not verified |
| Main Authors | Wanjiang Weng; Xiaofeng Tan; Junbo Wang; Guo-Sen Xie; Pan Zhou; Hongsong Wang |
| Paper Link | [Official paper](https://doi.org/10.1609/aaai.v40i13.38035) |
| GitHub Link | Not verified |
| Publication Status | Official 2026 publication record verified; 2026 coverage remains open for later additions |
| Project Page | [Project page](https://wengwanjiang.github.io/ReAlign-page) |
| Code / Resources | [Project page](https://wengwanjiang.github.io/ReAlign-page) |
| Open Access Copy | [Available full text](https://ojs.aaai.org/index.php/AAAI/article/download/38035/41997) |
| Dataset | Not verified |
| Task | Conditional human motion generation or synthesis |
| Input | Language / text |
| Output | Generated 3D human motion sequence |
| Context Type | Language / text |
| Method Family | Diffusion model; Retrieval / memory model |

## BibTeX

```bibtex
@article{Weng_2026, title={ReAlign: Text-to-Motion Generation via Step-Aware Reward-Guided Alignment}, volume={40}, ISSN={2159-5399}, url={http://dx.doi.org/10.1609/AAAI.V40I13.38035}, DOI={10.1609/aaai.v40i13.38035}, number={13}, journal={Proceedings of the AAAI Conference on Artificial Intelligence}, publisher={Association for the Advancement of Artificial Intelligence (AAAI)}, author={Weng, Wanjiang and Tan, Xiaofeng and Wang, Junbo and Xie, Guo-Sen and Zhou, Pan and Wang, Hongsong}, year={2026}, month=Mar, pages={10621–10629} }
```

## Problem

Text-to-motion generation, which synthesizes 3D human motions from text inputs, holds immense potential for applications in gaming, film, and robotics. Recently, diffusion-based methods have been shown to generate more diversity and realistic motion.

## Key Idea

To address this limitation, we propose Reward-guided sampling Alignment (ReAlign), comprising a step-aware reward model to assess alignment quality during the denoising sampling and a reward-guided strategy that directs the diffusion process toward an optimally aligned distribution.

## Method

These metrics are evaluated by the evaluator from TM2T (Guo et al. The arrows ↑, ↓, and → indicate higher, lower, and closer-to-real-motion values are better, respectively.Bold highlights the best results. Percentages in brackets indicate improvements over respective baselines.

## Contributions

Not verified

## Experiments

Not verified

## Limitations

Not verified

## Relevance to In-context Human Motion Prediction

Relevance: Core. The paper's central task is conditioned human motion generation, using language / text as part of the problem setting.

## Relevance to Embodied Intelligence

The work provides motion priors or conditional generation machinery that can support embodied-agent simulation, planning, and human behavior modeling, although embodiment is not its only focus.

## My Notes

TODO: Complete a second-pass manual reading and record comparisons with the closest papers in this notebook.
