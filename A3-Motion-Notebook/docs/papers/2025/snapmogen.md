# SnapMoGen: Human Motion Generation from Expressive Texts

> NeurIPS 2025 · Context-aware Human Motion Generation
>
> Status: Partially verified

## Paper Information

| Field | Content |
|---|---|
| Year | 2025 |
| Title | SnapMoGen: Human Motion Generation from Expressive Texts |
| BibTeX | [View BibTeX](#bibtex) |
| Conference | NeurIPS |
| Journal | Not applicable (conference paper) |
| Benchmark | HumanML3D |
| Open Source | Not verified |
| Main Authors | Chuan Guo; Inwoo Hwang; Jian Wang; Bing Zhou |
| Paper Link | [Official paper](http://papers.nips.cc/paper_files/paper/2025/hash/9028b8a3ca98f58e373f0c1497a17448-Abstract-Conference.html) |
| GitHub Link | Not verified |
| Publication Status | Official publication record verified |
| Project Page | Not verified |
| Code / Resources | Not verified |
| Open Access Copy | [Available full text](https://proceedings.neurips.cc/paper_files/paper/2025/file/9028b8a3ca98f58e373f0c1497a17448-Paper-Conference.pdf) |
| Dataset | HumanML3D |
| Task | Conditional human motion generation or synthesis |
| Input | Language / text; Trajectory / kinematic control |
| Output | Generated 3D human motion sequence |
| Context Type | Language / text; Trajectory / kinematic control |
| Method Family | Not verified |

## BibTeX

```bibtex
@inproceedings{chuan2025SnapMoGen,
  title = {SnapMoGen: Human Motion Generation from Expressive Texts},
  author = {guo, chuan and Hwang, Inwoo and Wang, Jian and Zhou, Bing},
  booktitle = {NeurIPS},
  year = {2025}
}
```

## Problem

Not verified — an official abstract or accessible full text was not available during this audit.

## Key Idea

Not verified — full-text review pending.

## Method

Our goal is to generate a 3D human pose sequence m1:N of length N guided by a textual description c, where mi ∈ RD and D denotes the dimension of pose features. The quantizer typically consists of a learnable codebook C ∈RK×d of K codes. During quantization, each feature vector fi is mapped to the code index qi of its nearest code entry in the codebook: qi =  argmink∈[K]∥lookup(C, k) − fi∥2  ∈ [K] (1) where lookup(C, k) means taking the k-th vector in codebook C.

## Contributions

- our key contributions are threefold.
- First, we introduceSnapMoGen, a large-scale dataset comprising 20K temporally continuous motion capture clips described by 122K highly expressive text prompts.
- We also establish comprehensive benchmarks and evaluation protocols for this new dataset.

## Experiments

Besides SnapMoGen, we also conduct experiments on HumanML3D [ 10], a popular motion-text dataset comprising 14,616 motions with 44,970 textual descriptions. We process motions in SnapMoGen following procedures established in Hu- manML3D, including motion mirroring and standardization. To prevent data leakage, we deliberately hold out a test (%10) set and a validation (%5) set where the motion scenarios (e.g., fashion) differ from the training motions.

## Limitations

Not verified

## Relevance to In-context Human Motion Prediction

Relevance: Core. The paper's central task is conditioned human motion generation, using language / text; trajectory / kinematic control as part of the problem setting.

## Relevance to Embodied Intelligence

The explicit scene, object, interaction, sensing, or control condition makes this work directly relevant to embodied agents that must anticipate or synthesize physically situated human behavior.

## My Notes

TODO: Complete a second-pass manual reading and record comparisons with the closest papers in this notebook.
