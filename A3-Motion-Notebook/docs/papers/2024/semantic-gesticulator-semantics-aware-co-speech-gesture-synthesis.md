# Semantic Gesticulator: Semantics-Aware Co-Speech Gesture Synthesis

> ACM TOG 2024 · Context-aware Human Motion Generation
>
> Status: Partially verified

## Paper Information

| Field | Content |
|---|---|
| Year | 2024 |
| Title | Semantic Gesticulator: Semantics-Aware Co-Speech Gesture Synthesis |
| BibTeX | [View BibTeX](#bibtex) |
| Conference | Not applicable (journal article) |
| Journal | ACM Transactions on Graphics |
| Benchmark | BEAT |
| Open Source | Not verified |
| Main Authors | Zeyi Zhang; Tenglong Ao; Yuyao Zhang; Qingzhe Gao; Chuan Lin; Baoquan Chen; Libin Liu |
| Paper Link | [Official paper](https://doi.org/10.1145/3658134) |
| GitHub Link | Not verified |
| Publication Status | Official publication record verified |
| Project Page | Not verified |
| Code / Resources | Not verified |
| Open Access Copy | [arXiv](https://arxiv.org/abs/2405.09814) |
| Dataset | BEAT |
| Task | Speech- or semantics-conditioned human gesture generation |
| Input | Language / text; Speech / audio |
| Output | Generated human gesture or holistic body-motion sequence |
| Context Type | Language / text; Speech / audio |
| Method Family | LLM-assisted reasoning; Retrieval / memory model |

## BibTeX

```bibtex
@article{Zhang_2024, title={Semantic Gesticulator: Semantics-Aware Co-Speech Gesture Synthesis}, volume={43}, ISSN={1557-7368}, url={http://dx.doi.org/10.1145/3658134}, DOI={10.1145/3658134}, number={4}, journal={ACM Transactions on Graphics}, publisher={Association for Computing Machinery (ACM)}, author={Zhang, Zeyi and Ao, Tenglong and Zhang, Yuyao and Gao, Qingzhe and Lin, Chuan and Chen, Baoquan and Liu, Libin}, year={2024}, month=July, pages={1–17} }
```

## Problem

Semantically meaningful gestures are crucial for effective non-verbal communication, but such gestures often fall within the long tail of the distribution of natural human motion. The sparsity of these movements makes it challenging for deep learning-based systems, trained on moderately sized datasets, to capture the relationship between the movements and the corresponding speech semantics.

## Key Idea

In this work, we present Semantic Gesticulator, a novel framework designed to synthesize realistic gestures accompanying speech with strong semantic correspondence.

## Method

Not verified

## Contributions

Not verified

## Experiments

In this section, we initially outline our system’s setup, followed by an evaluation of our results. We then compare these results with those from other systems, discuss potential applications, and validate our framework’s various design choices through an ablation study. As for the speech-gesture datasets, our system is trained and evaluated on two high-quality speech- gesture datasets: ZEGGS [Ghorbani et al.

## Limitations

Not verified

## Relevance to In-context Human Motion Prediction

Relevance: Peripheral. This work covers gesture or partial-body motion rather than general full-body motion; it is retained because its conditioning or evaluation setting is useful to context-aware motion research.

## Relevance to Embodied Intelligence

The work provides motion priors or conditional generation machinery that can support embodied-agent simulation, planning, and human behavior modeling, although embodiment is not its only focus.

## My Notes

TODO: Complete a second-pass manual reading and record comparisons with the closest papers in this notebook.
