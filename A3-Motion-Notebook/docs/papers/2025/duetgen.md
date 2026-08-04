# DuetGen: Music Driven Two-Person Dance Generation via Hierarchical Masked Modeling

> SIGGRAPH 2025 · Context-aware Human Motion Generation
>
> Status: Partially verified

## Paper Information

| Field | Content |
|---|---|
| Year | 2025 |
| Title | DuetGen: Music Driven Two-Person Dance Generation via Hierarchical Masked Modeling |
| BibTeX | [View BibTeX](#bibtex) |
| Conference | SIGGRAPH |
| Journal | Not applicable (conference paper) |
| Benchmark | Not verified |
| Open Source | Yes |
| Main Authors | Anindita Ghosh; Bing Zhou; Rishabh Dabral; Jian Wang; Vladislav Golyanik; Christian Theobalt; Philipp Slusallek; Chuan Guo |
| Paper Link | [Official paper](https://doi.org/10.1145/3721238.3730741) |
| GitHub Link | [Official GitHub](https://github.com/anindita127/DuetGen) |
| Publication Status | Official publication record verified |
| Project Page | Not verified |
| Code / Resources | [Official GitHub](https://github.com/anindita127/DuetGen) |
| Open Access Copy | [arXiv](https://arxiv.org/abs/2506.18680) |
| Dataset | Not verified |
| Task | Music/text-conditioned human dance generation |
| Input | Social / multi-person interaction; Music / rhythm |
| Output | Generated human dance motion sequence |
| Context Type | Social / multi-person interaction; Music / rhythm |
| Method Family | Transformer / attention; VAE / CVAE |

## BibTeX

```bibtex
@inproceedings{Ghosh_2025, series={SIGGRAPH Conference Papers ’25}, title={DuetGen: Music Driven Two-Person Dance Generation via Hierarchical Masked Modeling}, url={http://dx.doi.org/10.1145/3721238.3730741}, DOI={10.1145/3721238.3730741}, booktitle={Proceedings of the Special Interest Group on Computer Graphics and Interactive Techniques Conference Conference Papers}, publisher={ACM}, author={Ghosh, Anindita and Zhou, Bing and Dabral, Rishabh and Wang, Jian and Golyanik, Vladislav and Theobalt, Christian and Slusallek, Philipp and Guo, Chuan}, year={2025}, month=July, pages={1–11}, collection={SIGGRAPH Conference Papers ’25} }
```

## Problem

The key challenge of this task lies in the inherent complexities of two-person dance interactions, where the partners need to synchronize both with each other and with the music. Inspired by the recent advances in motion synthesis, we propose a two-stage solution: encoding two-person motions into discrete tokens and then generating these tokens from music.

## Key Idea

We present DuetGen, a novel framework for generating interactive two-person dances from music.

## Method

To generate two-person dance motions from music signal, we first model the dance motions in a discrete space. Without loss of gener- ality, we denote the two partners in a duet dance asA andB (note that the designationsA andB are interchangeable). We represent the motions of a duet dance as𝑥1:𝑁∈ R𝑁×𝐷 with𝑁 frames and𝐷 dimensional motion features that combine the motions ofA andB.

## Contributions

- our main contributions are the following. • DuetGen, the first framework for generating interactive two- person dance motions directly from music. • A technique to model two-person dance motions in the dis- crete space with a hierarchy of abstractions, using our unified two-person representation, multi-scale motion quantization and two-stage generative masked transformers. • Extensive experiments and user studies on the benchmark DD100 dataset [Siyao et al.

## Experiments

We elaborate on our experimental setup, including dataset, baselines, ablations, and evaluation metrics. We provide the implementation details of our network components in the appendix. It is currently the most comprehensive dataset of 3D two- person dance, comprising 10 distinct dance genres featuring in- tricate interactions between the dancers and approximately 1.9 hours of two-person dance motion data in the SMPLX representa- tion [Pavlakos et al.

## Limitations

Not verified

## Relevance to In-context Human Motion Prediction

Relevance: Peripheral. This work covers an adjacent motion synthesis, control, or refinement task; it is retained because its conditioning or evaluation setting is useful to context-aware motion research.

## Relevance to Embodied Intelligence

The explicit scene, object, interaction, sensing, or control condition makes this work directly relevant to embodied agents that must anticipate or synthesize physically situated human behavior.

## My Notes

TODO: Complete a second-pass manual reading and record comparisons with the closest papers in this notebook.
