# PP-Motion: Physical-Perceptual Fidelity Evaluation for Human Motion Generation

> ACM Multimedia 2025 · Context-aware Human Motion Generation
>
> Status: Partially verified

## Paper Information

| Field | Content |
|---|---|
| Year | 2025 |
| Title | PP-Motion: Physical-Perceptual Fidelity Evaluation for Human Motion Generation |
| BibTeX | [View BibTeX](#bibtex) |
| Conference | ACM Multimedia |
| Journal | Not applicable (conference paper) |
| Benchmark | Not verified |
| Open Source | Yes |
| Main Authors | Sihan Zhao; Zixuan Wang; Tianyu Luan; Jia Jia; Wentao Zhu; Jiebo Luo; Junsong Yuan; Nan Xi |
| Paper Link | [Official paper](https://doi.org/10.1145/3746027.3754940) |
| GitHub Link | [Official GitHub](https://github.com/Sarah816/PP-Motion) |
| Publication Status | Official publication record verified |
| Project Page | Not verified |
| Code / Resources | [Official GitHub](https://github.com/Sarah816/PP-Motion) |
| Open Access Copy | [arXiv](https://arxiv.org/abs/2508.08179) |
| Dataset | Not verified |
| Task | Conditional human motion generation or synthesis |
| Input | Object / human-object interaction; Human feedback / preference |
| Output | Generated 3D human motion sequence |
| Context Type | Object / human-object interaction; Human feedback / preference |
| Method Family | Not verified |

## BibTeX

```bibtex
@inproceedings{Zhao_2025, series={MM ’25}, title={PP-Motion: Physical-Perceptual Fidelity Evaluation for Human Motion Generation}, url={http://dx.doi.org/10.1145/3746027.3754940}, DOI={10.1145/3746027.3754940}, booktitle={Proceedings of the 33rd ACM International Conference on Multimedia}, publisher={ACM}, author={Zhao, Sihan and Wang, Zixuan and Luan, Tianyu and Jia, Jia and Zhu, Wentao and Luo, Jiebo and Yuan, Junsong and Xi, Nan}, year={2025}, month=Oct, pages={6840–6849}, collection={MM ’25} }
```

## Problem

Human motion generation has found widespread applications in AR/VR, film, sports, and medical rehabilitation, offering a cost-effective alternative to traditional motion capture systems. However, evaluating the fidelity of such generated motions is a crucial, multifaceted task.

## Key Idea

With these annotations, we propose PP-Motion, a novel data-driven metric to evaluate both physical and perceptual fidelity of human motion.

## Method

For any human motion𝑥, the aim is to establish a function𝐹(·) that evaluates the fidelity ˆ𝑠 of the motion sequence: ˆ𝑠=𝐹(𝑥;𝜃),(1) where𝐹(𝑥;𝜃)is a neural network architecture with parameters𝜃. The subsequent sections introduce our methodology for both architecting the measurement function𝐹(𝑥 ;𝜃) and optimizing its parameters. The training procedure can be summarized by the optimization objective: min 𝜃 Lprec(𝐹(𝑥;𝜃),𝑦 prec)+𝜆L phy(𝐹(𝑥;𝜃),𝑦 phy),(2) whereLprec andLphy are the perceptual and physics losses,𝑦prec and𝑦phy are the perceptual and physics supervision, and 𝜆 is a balance weight for these two terms of loss functions.

## Contributions

- our contributions are as follows: • We propose a novel fidelity evaluation method,PP-Motion, for human motions, which takes into account both physical feasibility and human perception.
- Our method can evaluate whether a motion is realistically aligned with physical laws and human perception. • We define and design a fine-grained physical alignment an- notation and provide this annotation for existing datasets.
- This annotation serves as fine-grained physical ground truth for training our metric and has the potential to benefit sub- sequent metric design. • We design an effective learning framework that leverages these fine-grained physical annotations.

## Experiments

Not verified

## Limitations

Not verified

## Relevance to In-context Human Motion Prediction

Relevance: Peripheral. This work covers survey, benchmark, or evaluation infrastructure rather than a primary prediction/generation method; it is retained because its conditioning or evaluation setting is useful to context-aware motion research.

## Relevance to Embodied Intelligence

The explicit scene, object, interaction, sensing, or control condition makes this work directly relevant to embodied agents that must anticipate or synthesize physically situated human behavior.

## My Notes

TODO: Complete a second-pass manual reading and record comparisons with the closest papers in this notebook.
