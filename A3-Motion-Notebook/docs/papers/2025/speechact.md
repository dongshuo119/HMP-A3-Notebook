# SpeechAct: Towards Generating Whole-Body Motion From Speech

> IEEE TVCG 2025 · Context-aware Human Motion Generation
>
> Status: Partially verified

## Paper Information

| Field | Content |
|---|---|
| Year | 2025 |
| Title | SpeechAct: Towards Generating Whole-Body Motion From Speech |
| BibTeX | [View BibTeX](#bibtex) |
| Conference | Not applicable (journal article) |
| Journal | IEEE Transactions on Visualization and Computer Graphics |
| Benchmark | Not verified |
| Open Source | Not verified |
| Main Authors | Jinsong Zhang; Minjie Zhu; Yuxiang Zhang; Zerong Zheng; Yebin Liu; Kun Li |
| Paper Link | [Official paper](https://doi.org/10.1109/tvcg.2025.3529611) |
| GitHub Link | Not verified |
| Publication Status | Official publication record verified |
| Project Page | [Project page](http://cic.tju.edu.cn/faculty/likun/projects/SpeechAct) |
| Code / Resources | [Project page](http://cic.tju.edu.cn/faculty/likun/projects/SpeechAct) |
| Open Access Copy | [arXiv](https://arxiv.org/abs/2311.17425) |
| Dataset | Not verified |
| Task | Speech- or semantics-conditioned human gesture generation |
| Input | Speech / audio |
| Output | Generated human gesture or holistic body-motion sequence |
| Context Type | Speech / audio |
| Method Family | VAE / CVAE |

## BibTeX

```bibtex
@article{Zhang_2025, title={SpeechAct: Towards Generating Whole-Body Motion From Speech}, volume={31}, ISSN={2160-9306}, url={http://dx.doi.org/10.1109/tvcg.2025.3529611}, DOI={10.1109/tvcg.2025.3529611}, number={10}, journal={IEEE Transactions on Visualization and Computer Graphics}, publisher={Institute of Electrical and Electronics Engineers (IEEE)}, author={Zhang, Jinsong and Zhu, Minjie and Zhang, Yuxiang and Zheng, Zerong and Liu, Yebin and Li, Kun}, year={2025}, month=Oct, pages={6737–6750} }
```

## Problem

This paper addresses the problem of generating whole-body motion from speech. Despite great successes, prior methods still struggle to produce reasonable and diverse whole-body motions from speech.

## Key Idea

To address these challenges, we present a novel hybrid point representation to achieve accurate and continuous motion generation, e.g., avoiding foot skating, and this representation can be transformed into an easy-to-use representation, i.e., SMPL-X body mesh, for many applications.

## Method

Not verified

## Contributions

- Our method can also be generalized to other languages.
- 2 R ELATED WORK 2.1 Human Motion Generation Human motion generation is the task of synthesizing re- alistic and natural human movements for various appli- cations, such as animation, gaming, robotics, and VR/AR.
- The data representations can be divided into two kinds, i.e., keypoint-based and rotation-based.

## Experiments

Not verified

## Limitations

Not verified

## Relevance to In-context Human Motion Prediction

Relevance: Core. The paper's central task is conditioned human motion generation, using speech / audio as part of the problem setting.

## Relevance to Embodied Intelligence

The work provides motion priors or conditional generation machinery that can support embodied-agent simulation, planning, and human behavior modeling, although embodiment is not its only focus.

## My Notes

TODO: Complete a second-pass manual reading and record comparisons with the closest papers in this notebook.
