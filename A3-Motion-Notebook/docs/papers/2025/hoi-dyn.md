# HOI-Dyn: Learning Interaction Dynamics for Human-Object Motion Diffusion

> NeurIPS 2025 · Context-aware Human Motion Generation
>
> Status: Partially verified

## Paper Information

| Field | Content |
|---|---|
| Year | 2025 |
| Title | HOI-Dyn: Learning Interaction Dynamics for Human-Object Motion Diffusion |
| BibTeX | [View official BibTeX](#bibtex) |
| Conference | NeurIPS |
| Journal | Not applicable (conference paper) |
| Benchmark | Not verified |
| Open Source | Not verified |
| Main Authors | Lin Wu; Zhixiang Chen; Jianglin Lan |
| Paper Link | [NeurIPS Proceedings](https://proceedings.neurips.cc/paper_files/paper/2025/hash/82cddd1547dd8e3915d1a220f209e714-Abstract-Conference.html) |
| GitHub Link | Not verified |
| Project Page | [Official project page](https://wulin97.github.io/hoi-dyn) |
| Code / Resources | Not verified |
| Dataset | Not verified |
| Task | Physically and causally consistent human-object motion generation |
| Input | HOI generation conditions and human motion |
| Output | Joint human and object motion |
| Context Type | Human action; object response dynamics |
| Method Family | Diffusion with training-only driver-responder dynamics model |

## BibTeX

```bibtex
@inproceedings{NEURIPS2025_82cddd15,
 author = {Wu, Lin and Chen, Zhixiang and Lan, Jianglin},
 booktitle = {Advances in Neural Information Processing Systems},
 editor = {D. Belgrave and C. Zhang and H. Lin and R. Pascanu and P. Koniusz and M. Ghassemi and N. Chen},
 pages = {90795--90825},
 publisher = {Curran Associates, Inc.},
 title = {HOI-Dyn: Learning Interaction Dynamics for Human-Object Motion Diffusion},
 url = {https://proceedings.neurips.cc/paper_files/paper/2025/file/82cddd1547dd8e3915d1a220f209e714-Paper-Conference.pdf},
 volume = {38},
 year = {2025}
}
```

## Problem
Generating human and object streams independently can produce objects that respond implausibly or before the driving human action.

## Key Idea

Treat the human as a driver and the object as a responder, and use predicted response dynamics to supervise the generator.

## Method

A lightweight Transformer predicts object response from human motion. A residual dynamics loss reduces misleading gradients when that auxiliary prediction is imperfect, and the dynamics module is removed at inference.

## Contributions

- Encodes causal driver-responder structure in HOI diffusion.
- Adds residual-based dynamics consistency supervision.
- Reuses the learned dynamics error as an interaction-quality measure.

## Experiments

The paper reports qualitative and quantitative HOI generation improvements; datasets remain to be verified.

## Limitations

The one-way human-to-object assumption may not cover objects that strongly alter human motion.

## Relevance to In-context Human Motion Prediction

Relevance: Peripheral. It is joint generation, not observed-prefix forecasting.

## Relevance to Embodied Intelligence

Causal object response is central to manipulation simulation and policy learning.

## My Notes

TODO: Check whether bidirectional feedback appears elsewhere in the full model.
