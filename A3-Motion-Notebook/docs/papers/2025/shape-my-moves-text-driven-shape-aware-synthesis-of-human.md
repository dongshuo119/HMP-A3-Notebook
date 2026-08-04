# Shape My Moves: Text-Driven Shape-Aware Synthesis of Human Motions

> CVPR 2025 · Context-aware Human Motion Generation
>
> Status: Partially verified

## Paper Information

| Field | Content |
|---|---|
| Year | 2025 |
| Title | Shape My Moves: Text-Driven Shape-Aware Synthesis of Human Motions |
| BibTeX | [View BibTeX](#bibtex) |
| Conference | CVPR |
| Journal | Not applicable (conference paper) |
| Benchmark | AMASS; HumanML3D; HumanAct12 |
| Open Source | Not verified |
| Main Authors | Ting-Hsuan Liao; Yi Zhou; Yu Shen; Chun-Hao Paul Huang; Saayan Mitra; Jia-Bin Huang; Uttaran Bhattacharya |
| Paper Link | [Official paper](https://openaccess.thecvf.com/content/CVPR2025/html/Liao_Shape_My_Moves_Text-Driven_Shape-Aware_Synthesis_of_Human_Motions_CVPR_2025_paper.html) |
| GitHub Link | Not verified |
| Publication Status | Official publication record verified |
| Project Page | [Project page](https://shape-move.github.io/) |
| Code / Resources | [Project page](https://shape-move.github.io/) |
| Open Access Copy | [arXiv](https://arxiv.org/abs/2504.03639) |
| Dataset | AMASS; HumanML3D; HumanAct12 |
| Task | Conditional human motion generation or synthesis |
| Input | Language / text |
| Output | Generated 3D human motion sequence |
| Context Type | Language / text |
| Method Family | VAE / CVAE |

## BibTeX

```bibtex
@inproceedings{Liao_2025, title={Shape My Moves: Text-Driven Shape-Aware Synthesis of Human Motions}, url={http://dx.doi.org/10.1109/CVPR52734.2025.00185}, DOI={10.1109/cvpr52734.2025.00185}, booktitle={2025 IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR)}, publisher={IEEE}, author={Liao, Ting-Hsuan and Zhou, Yi and Shen, Yu and Huang, Chun-Hao Paul and Mitra, Saayan and Huang, Jia-Bin and Bhattacharya, Uttaran}, year={2025}, month=June, pages={1917–1928} }
```

## Problem

We explore how body shapes influence human motion synthesis, an aspect often overlooked in existing text-to-motion generation methods due to the ease of learning a homogenized, canonical body shape. However, this homogenization can distort the natural correlations between different body shapes and their motion dynamics.

## Key Idea

Our method addresses this gap by generating body-shape-aware human motions from natural language prompts.

## Method

We aim to generate both human body shapes and motions from natural language text descriptions. To this end, we first preprocess text-to-motion data to obtain shape descriptions and shape-aware motion data (Section 3.1). We propose a two-stage framework for shape-aware motion synthesis from text, consisting of a shape-aware FSQ-V AE (SA-V AE) and a shape-motion token predictor (ShapeMove).

## Contributions

Not verified

## Experiments

In this section, we begin by discussing the experimental setup in Section 4.1. We then introduce the baselines used for comparison and present the results in Section 4.2, which includes quantitative comparisons, qualitative evaluations, and human perceptual assessments. We use the current largest text-to-motion dataset, HumanML3D [43], which comprises 14,616 mo- tion sequences and 44,970 motion descriptions.

## Limitations

One limitation of our approach is the constrained nature of the shape descriptions used for motion generation. The pre- processing step requires descriptions to adhere to a specific template, which may restrict the model’s ability to handle various natural language inputs and diverse body shapes. This limitation could be mitigated by incorporating a more diverse dataset with a broader range of descriptive styles.

## Relevance to In-context Human Motion Prediction

Relevance: Core. The paper's central task is conditioned human motion generation, using language / text as part of the problem setting.

## Relevance to Embodied Intelligence

The work provides motion priors or conditional generation machinery that can support embodied-agent simulation, planning, and human behavior modeling, although embodiment is not its only focus.

## My Notes

TODO: Complete a second-pass manual reading and record comparisons with the closest papers in this notebook.
