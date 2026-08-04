# MotionDiffuse: Text-Driven Human Motion Generation With Diffusion Model

> IEEE TPAMI 2024 · Context-aware Human Motion Generation
>
> Status: Partially verified

## Paper Information

| Field | Content |
|---|---|
| Year | 2024 |
| Title | MotionDiffuse: Text-Driven Human Motion Generation With Diffusion Model |
| BibTeX | [View BibTeX](#bibtex) |
| Conference | Not applicable (journal article) |
| Journal | IEEE Transactions on Pattern Analysis and Machine Intelligence |
| Benchmark | AMASS; HumanML3D; KIT-ML; HumanAct12 |
| Open Source | Not verified |
| Main Authors | Mingyuan Zhang; Zhongang Cai; Liang Pan; Fangzhou Hong; Xinying Guo; Lei Yang; Ziwei Liu |
| Paper Link | [Official paper](https://doi.org/10.1109/tpami.2024.3355414) |
| GitHub Link | Not verified |
| Publication Status | Official publication record verified |
| Project Page | Not verified |
| Code / Resources | Not verified |
| Open Access Copy | [arXiv](https://arxiv.org/abs/2208.15001) |
| Dataset | AMASS; HumanML3D; KIT-ML; HumanAct12 |
| Task | Conditional human motion generation or synthesis |
| Input | Language / text; Object / human-object interaction; Trajectory / kinematic control |
| Output | Generated 3D human motion sequence |
| Context Type | Language / text; Object / human-object interaction; Trajectory / kinematic control |
| Method Family | Diffusion model; Transformer / attention |

## BibTeX

```bibtex
@article{Zhang_2024, title={MotionDiffuse: Text-Driven Human Motion Generation With Diffusion Model}, volume={46}, ISSN={1939-3539}, url={http://dx.doi.org/10.1109/tpami.2024.3355414}, DOI={10.1109/tpami.2024.3355414}, number={6}, journal={IEEE Transactions on Pattern Analysis and Machine Intelligence}, publisher={Institute of Electrical and Electronics Engineers (IEEE)}, author={Zhang, Mingyuan and Cai, Zhongang and Pan, Liang and Hong, Fangzhou and Guo, Xinying and Yang, Lei and Liu, Ziwei}, year={2024}, month=June, pages={4115–4128} }
```

## Problem

Human motion modeling is important for many modern graphics applications, which typically require professional skills. In order to remove the skill barriers for laymen, recent motion generation methods can directly generate human motions conditioned on natural languages.

## Key Idea

To address this problem, we propose MotionDiffuse, the first diffusion model-based text-driven motion generation framework, which demonstrates several desired properties over existing methods.

## Method

We present a diﬀusion model-based framework, Mo- tionDiﬀuse, for high-ﬁdelity and controllable text- driven motion generation. We ﬁrst give the problem def- inition, settings of the original text-driven motion gen- eration in Section 3.1. After that, we provide an overall illustration of the proposed MotionDiﬀuse in Section 3.2, followed by introducing the diﬀusion model in Sec- tion 3.3 and the transformer-based architecture in Sec- tion 3.4.

## Contributions

Not verified

## Experiments

We evaluate MotionDiﬀuse with three categories of ex- periments: text-driven motion generation (Section 4.1), action-conditioned motion generation (Section 4.2), and motion manipulation (Section 4.3). In all the evaluated benchmarks, MotionDiﬀuse could signiﬁcantly outper- form previous SoTA methods. KIT Motion Language datset (Plappert et al., 2016) provides 3911 motion sequences and 6353 sequence-level natural language descriptions.

## Limitations

Not verified

## Relevance to In-context Human Motion Prediction

Relevance: Core. The paper's central task is conditioned human motion generation, using language / text; object / human-object interaction; trajectory / kinematic control as part of the problem setting.

## Relevance to Embodied Intelligence

The explicit scene, object, interaction, sensing, or control condition makes this work directly relevant to embodied agents that must anticipate or synthesize physically situated human behavior.

## My Notes

TODO: Complete a second-pass manual reading and record comparisons with the closest papers in this notebook.
