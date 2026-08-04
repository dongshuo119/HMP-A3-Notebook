# Beyond Talking – Generating Holistic 3D Human Dyadic Motion for Communication

> IJCV 2024 · Context-aware Human Motion Generation
>
> Status: Partially verified

## Paper Information

| Field | Content |
|---|---|
| Year | 2024 |
| Title | Beyond Talking – Generating Holistic 3D Human Dyadic Motion for Communication |
| BibTeX | [View BibTeX](#bibtex) |
| Conference | Not applicable (journal article) |
| Journal | International Journal of Computer Vision |
| Benchmark | BEAT |
| Open Source | Not verified |
| Main Authors | Mingze Sun; Chao Xu; Xinyu Jiang; Yang Liu; Baigui Sun; Ruqi Huang |
| Paper Link | [Official paper](https://doi.org/10.1007/s11263-024-02300-7) |
| GitHub Link | Not verified |
| Publication Status | Official publication record verified |
| Project Page | Not verified |
| Code / Resources | Not verified |
| Open Access Copy | [arXiv](https://arxiv.org/abs/2403.19467) |
| Dataset | BEAT |
| Task | Interactive multi-person human motion generation |
| Input | Language / text; Social / multi-person interaction; Speech / audio |
| Output | Generated 3D human motion sequence |
| Context Type | Language / text; Social / multi-person interaction; Speech / audio |
| Method Family | Transformer / attention; Autoregressive model |

## BibTeX

```bibtex
@article{Sun_2024, title={Beyond Talking – Generating Holistic 3D Human Dyadic Motion for Communication}, volume={133}, ISSN={1573-1405}, url={http://dx.doi.org/10.1007/s11263-024-02300-7}, DOI={10.1007/s11263-024-02300-7}, number={5}, journal={International Journal of Computer Vision}, publisher={Springer Science and Business Media LLC}, author={Sun, Mingze and Xu, Chao and Jiang, Xinyu and Liu, Yang and Sun, Baigui and Huang, Ruqi}, year={2024}, month=Dec, pages={2910–2926} }
```

## Problem

Central to our approach is the incorporation of factorization to decouple audio features and the combination of textual semantic information, thereby facilitating the creation of more realistic and coordinated movements. We separately train VQ-VAEs with respect to the holistic motions of both speaker and listener.

## Key Idea

In this paper, we introduce an innovative task focused on human communication, aiming to generate 3D holistic human motions for both speakers and listeners.

## Method

In the following, we first introduce in Sec. Then we present details on the VQ-V AE module for generating the human motion of both speaker and lis- tener in Sec. Finally, we propose our auto- regressive transformer for in Sec.

## Contributions

- our contributions are as follows: – We present HoCo dataset, which comprises high- definition RGB videos of communication within human interaction.
- The dataset spans 45 hours and includes 22,913 video clips, accompanied by multi-modal corre- sponding information.
- We have also generated pseudo- labels for SMPL-X in generating full-body movements for both speakers and listeners. – We design a new audio decoupling method that incor- porates text information as conditions for generating both speaker and listener motions.

## Experiments

Since our goal is to generate full body language, apart from our proposed dataset, HoCo, we consider the SHOW dataset for benchmarking our design on the single-role pipeline: SHOW [62]: This dataset is a filtered version based on [18], resulting 26.9 hours of high-quality videos. The dataset comprises 4 speaker IDs. Additionally, p-GT for SMPL- X parameters is annotated.

## Limitations

Not verified

## Relevance to In-context Human Motion Prediction

Relevance: Core. The paper's central task is conditioned human motion generation, using language / text; social / multi-person interaction; speech / audio as part of the problem setting.

## Relevance to Embodied Intelligence

The explicit scene, object, interaction, sensing, or control condition makes this work directly relevant to embodied agents that must anticipate or synthesize physically situated human behavior.

## My Notes

TODO: Complete a second-pass manual reading and record comparisons with the closest papers in this notebook.
