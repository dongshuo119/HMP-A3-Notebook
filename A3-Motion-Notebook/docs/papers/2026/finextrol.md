# FineXtrol: Controllable Motion Generation via Fine-Grained Text

> AAAI 2026 · Context-aware Human Motion Generation
>
> Status: Partially verified

## Paper Information

| Field | Content |
|---|---|
| Year | 2026 |
| Title | FineXtrol: Controllable Motion Generation via Fine-Grained Text |
| BibTeX | [View BibTeX](#bibtex) |
| Conference | AAAI |
| Journal | Not applicable (conference paper) |
| Benchmark | Not verified |
| Open Source | Not verified |
| Main Authors | Keming Shen; Bizhu Wu; Junliang Chen; Xiaoqin Wang; Linlin Shen |
| Paper Link | [Official paper](https://doi.org/10.1609/aaai.v40i11.37845) |
| GitHub Link | Not verified |
| Publication Status | Official 2026 publication record verified; 2026 coverage remains open for later additions |
| Project Page | Not verified |
| Code / Resources | Not verified |
| Open Access Copy | [Available full text](https://ojs.aaai.org/index.php/AAAI/article/download/37845/41807) |
| Dataset | Not verified |
| Task | Conditional human motion generation or synthesis |
| Input | Language / text; Trajectory / kinematic control |
| Output | Generated 3D human motion sequence |
| Context Type | Language / text; Trajectory / kinematic control |
| Method Family | LLM-assisted reasoning |

## BibTeX

```bibtex
@article{Shen_2026, title={FineXtrol: Controllable Motion Generation via Fine-Grained Text}, volume={40}, ISSN={2159-5399}, url={http://dx.doi.org/10.1609/AAAI.V40I11.37845}, DOI={10.1609/aaai.v40i11.37845}, number={11}, journal={Proceedings of the AAAI Conference on Artificial Intelligence}, publisher={Association for the Advancement of Artificial Intelligence (AAAI)}, author={Shen, Keming and Wu, Bizhu and Chen, Junliang and Wang, Xiaoqin and Shen, Linlin}, year={2026}, month=Mar, pages={8905–8913} }
```

## Problem

Recent works have sought to enhance the controllability and precision of text-driven motion generation. Some approaches leverage large language models (LLMs) to produce more detailed texts, while others incorporate global 3D coordinate sequences as additional control signals.

## Key Idea

To address these issues, we propose FineXtrol, a novel control framework for efficient motion generation guided by temporally-aware, precise, user-friendly and fine-grained textual control signals that describe specific body part movements over time.

## Method

The notations and the definition of this novel research problem are clarified in Sec. We then briefly introduce required preliminaries in Sec. Next, we detail two key modules in our frame- work: (1) generating motion sequences guided by our fine- grained textual control signals, which detail specific body part movements in specific temporal intervals (see Sec.

## Contributions

- our contributions are as fol- lows: First, to the best of our knowledge, we propose FineX- trol, a novel and user-friendly controllable motion genera- tion framework that enables control over body part move- ments within specific temporal intervals.

## Experiments

Not verified

## Limitations

Not verified

## Relevance to In-context Human Motion Prediction

Relevance: Core. The paper's central task is conditioned human motion generation, using language / text; trajectory / kinematic control as part of the problem setting.

## Relevance to Embodied Intelligence

The explicit scene, object, interaction, sensing, or control condition makes this work directly relevant to embodied agents that must anticipate or synthesize physically situated human behavior.

## My Notes

TODO: Complete a second-pass manual reading and record comparisons with the closest papers in this notebook.
