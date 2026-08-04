# SPARD: Single-step Inference with Adaptive Sampling in Residual Diffusion for Human Motion Prediction

> AAAI 2026 · In-context Human Motion Prediction
>
> Status: Partially verified

## Paper Information

| Field | Content |
|---|---|
| Year | 2026 |
| Title | SPARD: Single-step Inference with Adaptive Sampling in Residual Diffusion for Human Motion Prediction |
| BibTeX | [View BibTeX](#bibtex) |
| Conference | AAAI |
| Journal | Not applicable (conference paper) |
| Benchmark | Not verified |
| Open Source | Yes |
| Main Authors | Yiming Zhang; Baojia Han; Ximing Li; Wei Pang; Fausto Giunchiglia; Xiaoyue Feng; Renchu Guan |
| Paper Link | [Official paper](https://doi.org/10.1609/aaai.v40i21.38865) |
| GitHub Link | [Official GitHub](https://github.com/ZYM-JLU/SPARD) |
| Publication Status | Official 2026 publication record verified; 2026 coverage remains open for later additions |
| Project Page | Not verified |
| Code / Resources | [Official GitHub](https://github.com/ZYM-JLU/SPARD) |
| Open Access Copy | [Open-access full text](https://ojs.aaai.org/index.php/AAAI/article/download/38865/42827) |
| Dataset | Not verified |
| Task | Predicting future human pose or motion from observed history |
| Input | Observed past human motion or trajectories; context: Social / multi-person interaction |
| Output | Future human pose or motion sequence |
| Context Type | Social / multi-person interaction |
| Method Family | Diffusion model; Transformer / attention |

## BibTeX

```bibtex
@article{Zhang_2026, title={SPARD: Single-step Inference with Adaptive Sampling in Residual Diffusion for Human Motion Prediction}, volume={40}, ISSN={2159-5399}, url={http://dx.doi.org/10.1609/AAAI.V40I21.38865}, DOI={10.1609/aaai.v40i21.38865}, number={21}, journal={Proceedings of the AAAI Conference on Artificial Intelligence}, publisher={Association for the Advancement of Artificial Intelligence (AAAI)}, author={Zhang, Yiming and Han, Baojia and Li, Ximing and Pang, Wei and Giunchiglia, Fausto and Feng, Xiaoyue and Guan, Renchu}, year={2026}, month=Mar, pages={18046–18054} }
```

## Problem

The task of stochastic human motion prediction has attracted significant attention in recent years due to its wide-ranging applications in robotics, animation, and human-computer interaction. While diffusion models have demonstrated promising progress in this domain, they remain hindered by two critical limitations: (1) slow inference speeds due to their reliance on iterative sampling, and (2) performance degradation resulting from suboptimal sample allocation during generation.

## Key Idea

To overcome these challenges, we propose SPARD (Single-step Inference with Adaptive Sampling in Residual Diffusion for Human Motion Prediction), a novel framework that achieves efficient single-step inference while maintaining high predictive accuracy.

## Method

Bold numbers indicate the best results, and underlined numbers represent the second best results. The symbol ’-’ indicates that the results are not reported in the baselines. Ten randomly generated predictions and ground truth values are stacked per time step.

## Contributions

Not verified

## Experiments

Not verified

## Limitations

Not verified

## Relevance to In-context Human Motion Prediction

Relevance: Core. The paper's central task is future human motion/trajectory prediction, using social / multi-person interaction as part of the problem setting.

## Relevance to Embodied Intelligence

The explicit scene, object, interaction, sensing, or control condition makes this work directly relevant to embodied agents that must anticipate or synthesize physically situated human behavior.

## My Notes

TODO: Complete a second-pass manual reading and record comparisons with the closest papers in this notebook.
