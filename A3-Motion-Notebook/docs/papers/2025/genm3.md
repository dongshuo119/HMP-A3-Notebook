# GenM3: Generative Pretrained Multi-Path Motion Model for Text Conditional Human Motion Generation

> ICCV 2025 · Context-aware Human Motion Generation
>
> Status: Partially verified

## Paper Information

| Field | Content |
|---|---|
| Year | 2025 |
| Title | GenM3: Generative Pretrained Multi-Path Motion Model for Text Conditional Human Motion Generation |
| BibTeX | [View BibTeX](#bibtex) |
| Conference | ICCV |
| Journal | Not applicable (conference paper) |
| Benchmark | HumanML3D; BABEL; GRAB |
| Open Source | Not verified |
| Main Authors | Junyu Shi; Lijiang Liu; Yong Sun; Zhiyuan Zhang; Jinni Zhou; Qiang Nie |
| Paper Link | [Official paper](https://doi.org/10.1109/iccv51701.2025.01220) |
| GitHub Link | Not verified |
| Publication Status | Official publication record verified |
| Project Page | Not verified |
| Code / Resources | Not verified |
| Open Access Copy | [arXiv](https://arxiv.org/abs/2503.14919) |
| Dataset | HumanML3D; BABEL; GRAB |
| Task | Conditional human motion generation or synthesis |
| Input | Language / text |
| Output | Generated 3D human motion sequence |
| Context Type | Language / text |
| Method Family | Transformer / attention; VAE / CVAE; LLM-assisted reasoning |

## BibTeX

```bibtex
@inproceedings{Shi_2025, title={GenM
                    <sup>3</sup>
                    : Generative Pretrained Multi-Path Motion Model for Text Conditional Human Motion Generation}, url={http://dx.doi.org/10.1109/ICCV51701.2025.01220}, DOI={10.1109/iccv51701.2025.01220}, booktitle={2025 IEEE/CVF International Conference on Computer Vision (ICCV)}, publisher={IEEE}, author={Shi, Junyu and Liu, Lijiang and Sun, Yong and Zhang, Zhiyuan and Zhou, Jinni and Nie, Qiang}, year={2025}, month=Oct, pages={13129–13139} }
```

## Problem

Scaling up motion datasets is crucial to enhance motion generation capabilities. However, training on large-scale multi-source datasets introduces data heterogeneity challenges due to variations in motion content.

## Key Idea

To address this, we propose Generative Pretrained Multi-path Motion Model (GenM\(^3\)), a comprehensive framework designed to learn unified motion representations.

## Method

Model Architecture Our proposed GenM3 framework comprises two main com- ponents: the Multi-Expert VQ-V AE (MEVQ-V AE) and the Multi-path Motion Transformer (MMT). The MEVQ- V AE is designed to discretize continuous motion data while adapting to distributional differences across datasets. Build- ing on these discrete tokens, the MMT models both motion and textual tokens in a unified manner, leveraging a multi- Expert n Expert 2 Motion tokenText token Expert 1 Motion FFN Concat & Proj Shared Multi-Head Self-Attention Motion-Text FFN Text FFN Gating Network Expert Pool Weighted sum ... ...

## Contributions

Not verified

## Experiments

This section provides a comprehensive evaluation of our proposed GenM 3 framework. We provide more information in the supplemental. Datasets and Implementation Datasets for Pretraining and Text-conditioned Training We collected and processed a total of 11 motion capture datasets [1, 3, 10, 18, 20, 21, 23, 28, 30, 44, 46], align- ing each to the HumanML3D dataset’s format for consis- tency in training and evaluation.

## Limitations

Our approach has two main limitations. First, although we enhanced the dataset by adding text labels for various mo- tion types, the number of these labels remains limited. As a result, our method struggles to generate accurate motions for descriptions that fall outside the dataset’s text distribu- tion.

## Relevance to In-context Human Motion Prediction

Relevance: Core. The paper's central task is conditioned human motion generation, using language / text as part of the problem setting.

## Relevance to Embodied Intelligence

The work provides motion priors or conditional generation machinery that can support embodied-agent simulation, planning, and human behavior modeling, although embodiment is not its only focus.

## My Notes

TODO: Complete a second-pass manual reading and record comparisons with the closest papers in this notebook.
