# Everything2Motion: Synchronizing Diverse Inputs via a Unified Framework for Human Motion Synthesis

> AAAI 2024 · Context-aware Human Motion Generation
>
> Status: Partially verified

## Paper Information

| Field | Content |
|---|---|
| Year | 2024 |
| Title | Everything2Motion: Synchronizing Diverse Inputs via a Unified Framework for Human Motion Synthesis |
| BibTeX | [View BibTeX](#bibtex) |
| Conference | AAAI |
| Journal | Not applicable (conference paper) |
| Benchmark | KIT-ML; BEAT; AIST++ |
| Open Source | Not verified |
| Main Authors | Zhaoxin Fan; Longbin Ji; Pengxin Xu; Fan Shen; Kai Chen |
| Paper Link | [Official paper](https://doi.org/10.1609/aaai.v38i2.27936) |
| GitHub Link | Not verified |
| Publication Status | Official publication record verified |
| Project Page | Not verified |
| Code / Resources | Not verified |
| Open Access Copy | [Open-access full text](https://ojs.aaai.org/index.php/AAAI/article/download/27936/27893) |
| Dataset | KIT-ML; BEAT; AIST++ |
| Task | Conditional human motion generation or synthesis |
| Input | Language / text; Speech / audio |
| Output | Generated 3D human motion sequence |
| Context Type | Language / text; Speech / audio |
| Method Family | Transformer / attention |

## BibTeX

```bibtex
@article{Fan_2024, title={Everything2Motion: Synchronizing Diverse Inputs via a Unified Framework for Human Motion Synthesis}, volume={38}, ISSN={2159-5399}, url={http://dx.doi.org/10.1609/AAAI.V38I2.27936}, DOI={10.1609/aaai.v38i2.27936}, number={2}, journal={Proceedings of the AAAI Conference on Artificial Intelligence}, publisher={Association for the Advancement of Artificial Intelligence (AAAI)}, author={Fan, Zhaoxin and Ji, Longbin and Xu, Pengxin and Shen, Fan and Chen, Kai}, year={2024}, month=Mar, pages={1688–1697} }
```

## Problem

In the dynamic field of film and game development, the emergence of human motion synthesis methods has revolutionized avatar animation. Traditional methodologies, typically reliant on single modality inputs like text or audio, employ modality-specific model frameworks, posing challenges for unified model deployment and application.

## Key Idea

To address this, we propose Everything2Motion, a unified model framework.

## Method

(Top 1) ↑ R precision (Top 2) ↑ R precision (Top 3) ↑ Diversity ↑ MM-Dist ↓ Modality Ground Truth 0.031 0.424 0.649 0.779 11.08 2.788 – Test2Gesture 12.12 0.156 0.255 0.338 9.334 6.964 – Language2Pose 6.545 0.221 0.373 0.483 9.037 5.147 – MoCoGAN 94.41 0.037 0.072 0.106 0.462 10.40 0.250 Guo et.al 2.770 0.370 0.569 0.693 10.91 3.401 1.482 Motiondiffuse 1.954 0.417 0.621 0.739 11.10 2.958 0.730 E2M (Ours) 1.060 0.385 0.574 0.685 11.15 3.457 0.051 Table 1: Performance on Text2Motion task on KitML dataset. Experiments Datasets In our study, we utilize two key datasets: KIT Motion- Language (KIT-ML) for text-to-motion (text2motion) tasks, and AIST++ for music-to-dance (music2dance) tasks. The KIT-ML dataset (Mandery et al.

## Contributions

- our contributions are summarized: 1)We pro- pose Everything2Motion, a novel framework adept at uni- fying diverse input modalities for human motion synthesis, thereby eliminating the need for distinct deep learning mod- els for each modality.
- 2)In our Everything2Motion frame- work, we introduce a novel triad of components: an Input- Output Modality Modulation module, a Query-aware Au- toencoder, and a Prior Motion Distillation Decoder.
- This in- novative architecture demonstrates superior performance in human motion synthesis tasks.

## Experiments

Datasets In our study, we utilize two key datasets: KIT Motion- Language (KIT-ML) for text-to-motion (text2motion) tasks, and AIST++ for music-to-dance (music2dance) tasks. The KIT-ML dataset (Mandery et al. It is derived from the KIT (Plappert, Mandery, and Asfour 2016) and CMU (Merel et al.

## Limitations

Not verified

## Relevance to In-context Human Motion Prediction

Relevance: Core. The paper's central task is conditioned human motion generation, using language / text; speech / audio as part of the problem setting.

## Relevance to Embodied Intelligence

The work provides motion priors or conditional generation machinery that can support embodied-agent simulation, planning, and human behavior modeling, although embodiment is not its only focus.

## My Notes

TODO: Complete a second-pass manual reading and record comparisons with the closest papers in this notebook.
