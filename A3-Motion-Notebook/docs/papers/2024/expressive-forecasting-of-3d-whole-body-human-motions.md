# Expressive Forecasting of 3D Whole-Body Human Motions

> AAAI 2024 · In-context Human Motion Prediction
>
> Status: Partially verified

## Paper Information

| Field | Content |
|---|---|
| Year | 2024 |
| Title | Expressive Forecasting of 3D Whole-Body Human Motions |
| BibTeX | [View BibTeX](#bibtex) |
| Conference | AAAI |
| Journal | Not applicable (conference paper) |
| Benchmark | H3.6M; 3DPW; GRAB |
| Open Source | Yes |
| Main Authors | Pengxiang Ding; Qiongjie Cui; Haofan Wang; Min Zhang; Mengyuan Liu; Donglin Wang |
| Paper Link | [Official paper](https://doi.org/10.1609/aaai.v38i2.27919) |
| GitHub Link | [Official GitHub](https://github.com/Dingpx/EAI) |
| Publication Status | Official publication record verified |
| Project Page | Not verified |
| Code / Resources | [Official GitHub](https://github.com/Dingpx/EAI) |
| Open Access Copy | [Available full text](https://ojs.aaai.org/index.php/AAAI/article/download/27919/27860) |
| Dataset | H3.6M; 3DPW; GRAB |
| Task | Predicting future human pose or motion from observed history |
| Input | Observed past human motion or trajectories; context: Language / text; Social / multi-person interaction |
| Output | Future human pose or motion sequence |
| Context Type | Language / text; Social / multi-person interaction |
| Method Family | Not verified |

## BibTeX

```bibtex
@article{Ding_2024, title={Expressive Forecasting of 3D Whole-Body Human Motions}, volume={38}, ISSN={2159-5399}, url={http://dx.doi.org/10.1609/AAAI.V38I2.27919}, DOI={10.1609/aaai.v38i2.27919}, number={2}, journal={Proceedings of the AAAI Conference on Artificial Intelligence}, publisher={Association for the Advancement of Artificial Intelligence (AAAI)}, author={Ding, Pengxiang and Cui, Qiongjie and Wang, Haofan and Zhang, Min and Liu, Mengyuan and Wang, Donglin}, year={2024}, month=Mar, pages={1537–1545} }
```

## Problem

Human motion forecasting, with the goal of estimating future human behavior over a period of time, is a fundamental task in many real-world applications. However, existing works typically concentrate on foretelling the major joints of the human body without considering the delicate movements of the human hands.

## Key Idea

Correspondingly, we propose a novel Encoding-Alignment-Interaction (EAI) framework that aims to predict both coarse (body joints) and fine-grained (gestures) activities collaboratively, enabling expressive and cross-facilitated forecasting of 3D whole-body human motions.

## Method

Previous works typically consider the forecasting of the major human joints. Given T history hu- man poses X = [x1, x2, ...,xT ], informally, its objective can be defined as learning a mapping M : X − →Y to estimate the future poses Y, where X is the observed major joints, Y = [xT +1, xT +2, ...,xT +∆T ] is the corresponding future ones over ∆T frames. This work extends the above standard setup to united whole-body human motion forecasting, including major body, left and right hand, denoted by m, l, r variables for the sake of simplicity.

## Contributions

- Our contributions are as follows: (1) To the best of our knowledge, this work is the first to predict the future ac- tions of major joints and human gestures simultaneously. (2) We propose a Encoding-Alignment-Interaction (EAI) ap- proach, equipped with the XCA and XCI, which is capa- ble of extracting the heterogeneous interaction within the whole body. (3) Extensive experiments show that our model achieves superior performance for both short- and long-term prediction compared to the competitors.

## Experiments

To our knowledge, previous widely-used datasets, e.g., H3.6M (Ionescu et al. To be compatible with our proposed novel task, here we select the GRAB (Taheri et al. It is a recently released dataset with over 1.6 million frames of 10 different actors performing a total of 29 actions.

## Limitations

Not verified

## Relevance to In-context Human Motion Prediction

Relevance: Core. The paper's central task is future human motion/trajectory prediction, using language / text; social / multi-person interaction as part of the problem setting.

## Relevance to Embodied Intelligence

The explicit scene, object, interaction, sensing, or control condition makes this work directly relevant to embodied agents that must anticipate or synthesize physically situated human behavior.

## My Notes

TODO: Complete a second-pass manual reading and record comparisons with the closest papers in this notebook.
