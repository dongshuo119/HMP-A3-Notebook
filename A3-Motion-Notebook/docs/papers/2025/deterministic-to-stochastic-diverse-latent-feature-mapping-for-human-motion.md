# Deterministic-to-Stochastic Diverse Latent Feature Mapping for Human Motion Synthesis

> CVPR 2025 · Context-aware Human Motion Generation
>
> Status: Partially verified

## Paper Information

| Field | Content |
|---|---|
| Year | 2025 |
| Title | Deterministic-to-Stochastic Diverse Latent Feature Mapping for Human Motion Synthesis |
| BibTeX | [View BibTeX](#bibtex) |
| Conference | CVPR |
| Journal | Not applicable (conference paper) |
| Benchmark | HumanML3D; HumanAct12 |
| Open Source | Not verified |
| Main Authors | Hua Yu; Weiming Liu; Gui Xu; Yaqing Hou; Yew-Soon Ong; Qiang Zhang |
| Paper Link | [Official paper](https://openaccess.thecvf.com/content/CVPR2025/html/Hua_Deterministic-to-Stochastic_Diverse_Latent_Feature_Mapping_for_Human_Motion_Synthesis_CVPR_2025_paper.html) |
| GitHub Link | Not verified |
| Publication Status | Official publication record verified |
| Project Page | Not verified |
| Code / Resources | Not verified |
| Open Access Copy | [arXiv](https://arxiv.org/abs/2505.00998) |
| Dataset | HumanML3D; HumanAct12 |
| Task | Conditional human motion generation or synthesis |
| Input | Motion seed, control signal, or task-specific condition |
| Output | Generated 3D human motion sequence |
| Context Type | Observed motion history |
| Method Family | Transformer / attention |

## BibTeX

```bibtex
@inproceedings{Hua_2025, title={Deterministic-to-Stochastic Diverse Latent Feature Mapping for Human Motion Synthesis}, url={http://dx.doi.org/10.1109/CVPR52734.2025.02116}, DOI={10.1109/cvpr52734.2025.02116}, booktitle={2025 IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR)}, publisher={IEEE}, author={Hua, Yu and Liu, Weiming and Xu, Gui and Hou, Yaqing and Ong, Yew-Soon and Zhang, Qiang}, year={2025}, month=June, pages={22724–22734} }
```

## Problem

Human motion synthesis aims to generate plausible human motion sequences, which has raised widespread attention in computer animation. Recent score-based generative models (SGMs) have demonstrated impressive results on this task.

## Key Idea

In this paper, we propose a Deterministic-to-Stochastic Diverse Latent Feature Mapping (DSDFM) method for human motion synthesis.

## Method

Not verified

## Contributions

- our main contributions are as follows: • We propose a novel method called Diverse Latent Feature Mapping (DSDFM) for human motion synthesis.
- DSDFM is efficient to train and to utilize at sampling process, and can be used for conditional and unconditional generation. • We propose an optimal solution to build the connection between the Gaussian distribution and the latent space distribution of human motions.
- In addition, we provide a stochastic diverse output generation process during the sampling process without reintroducing additional training processes. • The proposed method DSDFM is evaluated on widely-used human motion datasets in the comprehensive experiments.

## Experiments

Comparisons on Unconditional Human Motion Synthesis. We compare our method DSDFM with other state-of-the-art methods under the unconditional generation settings on the 22729 Table 2. The comparison results of Action-to-Motion task on Hu- manAct12 dataset. ± indicates 95% confidence interval, → indi- cates that closer to real is better.

## Limitations

Not verified

## Relevance to In-context Human Motion Prediction

Relevance: Core. The paper's central task is conditioned human motion generation, using observed motion history as part of the problem setting.

## Relevance to Embodied Intelligence

The work provides motion priors or conditional generation machinery that can support embodied-agent simulation, planning, and human behavior modeling, although embodiment is not its only focus.

## My Notes

TODO: Complete a second-pass manual reading and record comparisons with the closest papers in this notebook.
