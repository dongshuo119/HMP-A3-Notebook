# RapVerse: Coherent Vocals and Whole-Body Motion Generation from Text

> ICCV 2025 · Context-aware Human Motion Generation
>
> Status: Partially verified

## Paper Information

| Field | Content |
|---|---|
| Year | 2025 |
| Title | RapVerse: Coherent Vocals and Whole-Body Motion Generation from Text |
| BibTeX | [View BibTeX](#bibtex) |
| Conference | ICCV |
| Journal | Not applicable (conference paper) |
| Benchmark | BEAT |
| Open Source | Not verified |
| Main Authors | Jiaben Chen; Xin Yan; Yihang Chen; Siyuan Cen; Zixin Wang; Qinwei Ma; Haoyu Zhen; Kaizhi Qian; Lie Lu; Chuang Gan |
| Paper Link | [Official paper](https://doi.org/10.1109/iccv51701.2025.00941) |
| GitHub Link | Not verified |
| Publication Status | Official publication record verified |
| Project Page | Not verified |
| Code / Resources | Not verified |
| Open Access Copy | [arXiv](https://arxiv.org/abs/2405.20336) |
| Dataset | BEAT |
| Task | Conditional human motion generation or synthesis |
| Input | Language / text; Speech / audio |
| Output | Generated 3D human motion sequence |
| Context Type | Language / text; Speech / audio |
| Method Family | Transformer / attention; VAE / CVAE; Autoregressive model |

## BibTeX

```bibtex
@inproceedings{Chen_2025, title={RapVerse: Coherent Vocals and Whole-Body Motion Generation from Text}, url={http://dx.doi.org/10.1109/ICCV51701.2025.00941}, DOI={10.1109/iccv51701.2025.00941}, booktitle={2025 IEEE/CVF International Conference on Computer Vision (ICCV)}, publisher={IEEE}, author={Chen, Jiaben and Yan, Xin and Chen, Yihang and Cen, Siyuan and Wang, Zixin and Ma, Qinwei and Zhen, Haoyu and Qian, Kaizhi and Lu, Lie and Gan, Chuang}, year={2025}, month=Oct, pages={10097–10107} }
```

## Problem

To facilitate this, we first collect the RapVerse dataset, a large dataset containing synchronous rapping vocals, lyrics, and high-quality 3D holistic body meshes. With the RapVerse dataset, we investigate the extent to which scaling autoregressive multimodal transformers across language, audio, and motion can enhance the coherent and realistic generation of vocals and whole-body human motions.

## Key Idea

In this work, we introduce a challenging task for simultaneously generating 3D holistic body motions and singing vocals directly from textual lyrics inputs, advancing beyond existing works that typically address these two modalities in isolation.

## Method

Given a piece of lyrics text, our goal is to generate rap-style vocals and whole-body motions, including body move- ments, hand gestures, and facial expressions that resonate with the lyrics. With the help of our RapVerse dataset, we propose a novel framework that not only represents texts, vocals, and motions as unified token forms but also inte- grates token modeling in a unified model. Problem Formulation LetLbe the rap lyric, such as “I going to make it a flash- back set a picture from way back.”, our model will com- pose the text-related vocalV ∈R t×dv and whole-body motionM ∈R t×dm, wheret,d v,d m denote the tempo- ral length and the feature dimensions for vocal and motion in every time unit, respectively.

## Contributions

Not verified

## Experiments

In this section, we evaluate our proposed model on our pro- posed benchmark designed for joint vocal and whole-body motion generation from textual inputs. Experimental Setup Metrics.To evaluate the generation quality of singing vo- cals, we utilize the Mean Opinion Score (MOS) to gauge the naturalness of the synthesized vocal. For motion synthesis, we evaluate the generation quality of the body hand ges- tures and the realism of the face, respectively.

## Limitations

Not verified

## Relevance to In-context Human Motion Prediction

Relevance: Core. The paper's central task is conditioned human motion generation, using language / text; speech / audio as part of the problem setting.

## Relevance to Embodied Intelligence

The work provides motion priors or conditional generation machinery that can support embodied-agent simulation, planning, and human behavior modeling, although embodiment is not its only focus.

## My Notes

TODO: Complete a second-pass manual reading and record comparisons with the closest papers in this notebook.
