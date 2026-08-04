# Rethinking Diffusion for Text-Driven Human Motion Generation: Redundant Representations, Evaluation, and Masked Autoregression

> CVPR 2025 · Context-aware Human Motion Generation
>
> Status: Partially verified

## Paper Information

| Field | Content |
|---|---|
| Year | 2025 |
| Title | Rethinking Diffusion for Text-Driven Human Motion Generation: Redundant Representations, Evaluation, and Masked Autoregression |
| BibTeX | [View BibTeX](#bibtex) |
| Conference | CVPR |
| Journal | Not applicable (conference paper) |
| Benchmark | AMASS; HumanML3D; KIT-ML |
| Open Source | Not verified |
| Main Authors | Zichong Meng; Yiming Xie; Xiaogang Peng; Zeyu Han; Huaizu Jiang |
| Paper Link | [Official paper](https://openaccess.thecvf.com/content/CVPR2025/html/Meng_Rethinking_Diffusion_for_Text-Driven_Human_Motion_Generation_Redundant_Representations_Evaluation_CVPR_2025_paper.html) |
| GitHub Link | Not verified |
| Publication Status | Official publication record verified |
| Project Page | Not verified |
| Code / Resources | Not verified |
| Open Access Copy | [arXiv](https://arxiv.org/abs/2411.16575) |
| Dataset | AMASS; HumanML3D; KIT-ML |
| Task | Conditional human motion generation or synthesis |
| Input | Language / text; Music / rhythm |
| Output | Generated 3D human motion sequence |
| Context Type | Language / text; Music / rhythm |
| Method Family | Diffusion model |

## BibTeX

```bibtex
@inproceedings{Meng_2025, title={Rethinking Diffusion for Text-Driven Human Motion Generation: Redundant Representations, Evaluation, and Masked Autoregression}, url={http://dx.doi.org/10.1109/CVPR52734.2025.02594}, DOI={10.1109/cvpr52734.2025.02594}, booktitle={2025 IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR)}, publisher={IEEE}, author={Meng, Zichong and Xie, Yiming and Peng, Xiaogang and Han, Zeyu and Jiang, Huaizu}, year={2025}, month=June, pages={27859–27871} }
```

## Problem

Since 2023, Vector Quantization (VQ)-based discrete generation methods have rapidly dominated human motion generation, primarily surpassing diffusion-based continuous generation methods in standard performance metrics. However, VQ-based methods have inherent limitations.

## Key Idea

Additionally, we propose a more robust evaluation method to assess different approaches.

## Method

Not verified

## Contributions

Not verified

## Experiments

To address biases in the current evaluation approach shown in Sec. We first construct an evaluator that retains the archi- tecture of the widely used evaluator [24], which con- sists of a convolutional movement encoder, a GRU [13]- based motion encoder, and a GRU-based text encoder using GloVe [68] embeddings. This evaluator is trained solely on essential dimensions that meaningfully contribute to final motion generation with no other alterations.

## Limitations

Not verified

## Relevance to In-context Human Motion Prediction

Relevance: Peripheral. This work covers survey, benchmark, or evaluation infrastructure rather than a primary prediction/generation method; it is retained because its conditioning or evaluation setting is useful to context-aware motion research.

## Relevance to Embodied Intelligence

The work provides motion priors or conditional generation machinery that can support embodied-agent simulation, planning, and human behavior modeling, although embodiment is not its only focus.

## My Notes

TODO: Complete a second-pass manual reading and record comparisons with the closest papers in this notebook.
