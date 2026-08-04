# Enhanced Fine-Grained Motion Diffusion for Text-Driven Human Motion Synthesis

> AAAI 2024 · Context-aware Human Motion Generation
>
> Status: Partially verified

## Paper Information

| Field | Content |
|---|---|
| Year | 2024 |
| Title | Enhanced Fine-Grained Motion Diffusion for Text-Driven Human Motion Synthesis |
| BibTeX | [View BibTeX](#bibtex) |
| Conference | AAAI |
| Journal | Not applicable (conference paper) |
| Benchmark | AMASS; HumanML3D; HumanAct12; KIT Motion-Language |
| Open Source | Not verified |
| Main Authors | Dong Wei; Xiaoning Sun; Huaijiang Sun; Shengxiang Hu; Bin Li; Weiqing Li; Jianfeng Lu |
| Paper Link | [Official paper](https://doi.org/10.1609/aaai.v38i6.28401) |
| GitHub Link | Not verified |
| Publication Status | Official publication record verified |
| Project Page | Not verified |
| Code / Resources | Not verified |
| Open Access Copy | [arXiv](https://arxiv.org/abs/2305.13773) |
| Dataset | AMASS; HumanML3D; HumanAct12; KIT Motion-Language |
| Task | Conditional human motion generation or synthesis |
| Input | Language / text; Music / rhythm; Trajectory / kinematic control |
| Output | Generated 3D human motion sequence |
| Context Type | Language / text; Music / rhythm; Trajectory / kinematic control |
| Method Family | Diffusion model; Transformer / attention |

## BibTeX

```bibtex
@article{Wei_2024, title={Enhanced Fine-Grained Motion Diffusion for Text-Driven Human Motion Synthesis}, volume={38}, ISSN={2159-5399}, url={http://dx.doi.org/10.1609/AAAI.V38I6.28401}, DOI={10.1609/aaai.v38i6.28401}, number={6}, journal={Proceedings of the AAAI Conference on Artificial Intelligence}, publisher={Association for the Advancement of Artificial Intelligence (AAAI)}, author={Wei, Dong and Sun, Xiaoning and Sun, Huaijiang and Hu, Shengxiang and Li, Bin and Li, Weiqing and Lu, Jianfeng}, year={2024}, month=Mar, pages={5876–5884} }
```

## Problem

The emergence of text-driven motion synthesis technique provides animators with great potential to create efficiently. However, in most cases, textual expressions only contain general and qualitative motion descriptions, while lack fine depiction and sufficient intensity, leading to the synthesized motions that either (a) semantically compliant but uncontrollable over specific pose details, or (b) even deviates from the provided descriptions, bringing animators with undesired cases.

## Key Idea

In this paper, we propose DiffKFC, a conditional diffusion model for text-driven motion synthesis with KeyFrames Collaborated, enabling realistic generation with collaborative and efficient dual-level control: coarse guidance at semantic level, with only few keyframes for direct and fine-grained depiction down to body posture level.

## Method

We present an adapted formulation for our task. Exist- ing plain text-driven motion synthesis is aimed at using a free-form textual description, usually a sentence C, to gen- erate towards the target N-frame motion sequence X = fx1; x2; ; xNg with each human pose xi 2 RD repre- sented by either joint rotations or positions. We, addition- ally, incorporate sparse keyframesXkf =X M at train- ing stage, where M is a binary mask matrix that preserves keyframe values and zeros the target frames (denoted as Xta) to be generated.

## Contributions

- our contributions are as follows: (a) We are the ﬁrst to utilize the controllable capability of keyframes for text-driven motion synthesis.
- It exploits full interaction among multi-modal tokens, enabling a collaborative dual- level control paradigm, i.e., coarse semantic guidance, with keyframes for direct yet ﬁne-grained depiction. (b) We de- velop dilated mask attention modules to gradually borrow visible useful information from sparse keyframes with local- to-global attention, beneﬁtting its fusion with other tokens. (c) We show that, with very few keyframes (only 2%), our model achieves 41.6% improvement against state-of-the-art text-to-motion diffusion models in terms of Frechet Incep- tion Distance (FID) on HumanML3D dataset.
- Meanwhile, it can help produce the exactly expected motions of animators.

## Experiments

In this section, to evaluate our proposed model, we intro- duce datasets, evaluation metrics, implementation details, and comparable baselines. Results, visualized comparisons with discussion are followed. Ablation study is conducted to show the impact of each component.

## Limitations

Not verified

## Relevance to In-context Human Motion Prediction

Relevance: Core. The paper's central task is conditioned human motion generation, using language / text; music / rhythm; trajectory / kinematic control as part of the problem setting.

## Relevance to Embodied Intelligence

The explicit scene, object, interaction, sensing, or control condition makes this work directly relevant to embodied agents that must anticipate or synthesize physically situated human behavior.

## My Notes

TODO: Complete a second-pass manual reading and record comparisons with the closest papers in this notebook.
