# EMAGE: Towards Unified Holistic Co-Speech Gesture Generation via Expressive Masked Audio Gesture Modeling

> CVPR 2024 · Context-aware Human Motion Generation
>
> Status: Partially verified

## Paper Information

| Field | Content |
|---|---|
| Year | 2024 |
| Title | EMAGE: Towards Unified Holistic Co-Speech Gesture Generation via Expressive Masked Audio Gesture Modeling |
| BibTeX | [View BibTeX](#bibtex) |
| Conference | CVPR |
| Journal | Not applicable (conference paper) |
| Benchmark | AMASS; BEAT |
| Open Source | Not verified |
| Main Authors | Haiyang Liu; Zihao Zhu; Giorgio Becherini; Yichen Peng; Mingyang Su; You Zhou; Xuefei Zhe; Naoya Iwamoto; Bo Zheng; Michael J. Black |
| Paper Link | [Official paper](https://doi.org/10.1109/cvpr52733.2024.00115) |
| GitHub Link | Not verified |
| Publication Status | Official publication record verified |
| Project Page | [Project page](https://pantomatrix.github.io/EMAGE/) |
| Code / Resources | [Project page](https://pantomatrix.github.io/EMAGE/) |
| Open Access Copy | [arXiv](https://arxiv.org/abs/2401.00374) |
| Dataset | AMASS; BEAT |
| Task | Speech- or semantics-conditioned human gesture generation |
| Input | Speech / audio |
| Output | Generated human gesture or holistic body-motion sequence |
| Context Type | Speech / audio |
| Method Family | Transformer / attention |

## BibTeX

```bibtex
@inproceedings{Liu_2024, title={EMAGE: Towards Unified Holistic Co-Speech Gesture Generation via Expressive Masked Audio Gesture Modeling}, url={http://dx.doi.org/10.1109/CVPR52733.2024.00115}, DOI={10.1109/cvpr52733.2024.00115}, booktitle={2024 IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR)}, publisher={IEEE}, author={Liu, Haiyang and Zhu, Zihao and Becherini, Giorgio and Peng, Yichen and Su, Mingyang and Zhou, You and Zhe, Xuefei and Iwamoto, Naoya and Zheng, Bo and Black, Michael J.}, year={2024}, month=June, pages={1144–1154} }
```

## Problem

To achieve this, we first introduce BEAT2 (BEAT-SMPLX-FLAME), a new mesh-level holistic co-speech dataset. BEAT2 combines a MoShed SMPL-X body with FLAME head parameters and further refines the modeling of head, neck, and finger movements, offering a community-standardized, high-quality 3D motion captured dataset.

## Key Idea

We propose EMAGE, a framework to generate full-body human gestures from audio and masked gestures, encompassing facial, local body, hands, and global movements.

## Method

Not verified

## Contributions

- Related Work Co-Speech Animation Datasets are categorized into two types; see Table 1: pseudo-labeled (PGT) and motion- captured (mocap).
- For PGT, the Speech2Gesture Dataset [25] utilizes OpenPose [11] to extract 2D poses from News and Teaching videos.
- Subsequent works extend the dataset to 3D pose [28] and SMPL-X [65].

## Experiments

We separate the evaluation into two categories: dataset quality and model ability. After removing data with low fin- ger quality from BEAT, BEAT2 is reduced to 60 hours. We further split it into BEAT2-Standard (27 hours) and BEAT2- Additional (33 hours), based on the type of speech and con- versation sections [39].

## Limitations

Not verified

## Relevance to In-context Human Motion Prediction

Relevance: Peripheral. This work covers gesture or partial-body motion rather than general full-body motion; it is retained because its conditioning or evaluation setting is useful to context-aware motion research.

## Relevance to Embodied Intelligence

The work provides motion priors or conditional generation machinery that can support embodied-agent simulation, planning, and human behavior modeling, although embodiment is not its only focus.

## My Notes

TODO: Complete a second-pass manual reading and record comparisons with the closest papers in this notebook.
