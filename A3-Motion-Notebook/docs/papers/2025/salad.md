# SALAD: Skeleton-aware Latent Diffusion for Text-driven Motion Generation and Editing

> CVPR 2025 · Context-aware Human Motion Generation
>
> Status: Partially verified

## Paper Information

| Field | Content |
|---|---|
| Year | 2025 |
| Title | SALAD: Skeleton-aware Latent Diffusion for Text-driven Motion Generation and Editing |
| BibTeX | [View BibTeX](#bibtex) |
| Conference | CVPR |
| Journal | Not applicable (conference paper) |
| Benchmark | HumanML3D; KIT-ML |
| Open Source | Not verified |
| Main Authors | Seokhyeon Hong; Chaelin Kim; Serin Yoon; Junghyun Nam; Sihun Cha; Junyong Noh |
| Paper Link | [Official paper](https://openaccess.thecvf.com/content/CVPR2025/html/Hong_SALAD_Skeleton-aware_Latent_Diffusion_for_Text-driven_Motion_Generation_and_Editing_CVPR_2025_paper.html) |
| GitHub Link | Not verified |
| Publication Status | Official publication record verified |
| Project Page | Not verified |
| Code / Resources | Not verified |
| Open Access Copy | [arXiv](https://arxiv.org/abs/2503.13836) |
| Dataset | HumanML3D; KIT-ML |
| Task | Conditional human motion generation or synthesis |
| Input | Language / text; Social / multi-person interaction |
| Output | Generated 3D human motion sequence |
| Context Type | Language / text; Social / multi-person interaction |
| Method Family | Diffusion model; Transformer / attention |

## BibTeX

```bibtex
@inproceedings{Hong_2025, title={SALAD: Skeleton-aware Latent Diffusion for Text-driven Motion Generation and Editing}, url={http://dx.doi.org/10.1109/CVPR52734.2025.00671}, DOI={10.1109/cvpr52734.2025.00671}, booktitle={2025 IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR)}, publisher={IEEE}, author={Hong, Seokhyeon and Kim, Chaelin and Yoon, Serin and Nam, Junghyun and Cha, Sihun and Noh, Junyong}, year={2025}, month=June, pages={7158–7168} }
```

## Problem

Text-driven motion generation has advanced significantly with the rise of denoising diffusion models. However, previous methods often oversimplify representations for the skeletal joints, temporal frames, and textual words, limiting their ability to fully capture the information within each modality and their interactions.

## Key Idea

In this paper, we introduce a skeleton-aware latent diffusion (SALAD), a model that explicitly captures the intricate inter-relationships between joints, frames, and words.

## Method

Our goal is to generate a motion sequence m1:N condi- tioned on a text prompt c, where N denotes the number of frames. We first construct a skeleton-aware motion la- tent representation that captures both skeletal and temporal dynamics of a motion sequence (Sec. Using this mo- tion representation, we train a diffusion model by model- ing the complex interactions between skeletal joints, tem- poral frames, and textual descriptions (Sec.

## Contributions

- our contributions are as follows: • We propose SALAD, a novel skeleton-aware latent dif- fusion model for text-driven motion generation within a skeleto-temporally structured latent space. • We interpret the intermediate representations in the gen- eration process, allowing for a clear understanding of the relationship between text inputs and generated motions. • We present an attention-based zero-shot text-driven mo- tion editing method using cross-attention modulation in generative models.
- Text-driven Motion Generation With the rise of deep neural networks, generative mod- els for human motion synthesis based on natural language descriptions have been extensively explored.
- Early stud- ies focused on generating motions from action labels, such as throw and kick [9, 32].

## Experiments

We conducted evaluations of our method on two widely used motion-language benchmarks: HumanML3D [10] and KIT-ML [34]. HumanML3D dataset consists of 14,616 mo- tion sequences with a variety of human actions, such as lo- comotions, sports, and acrobatics, along with 44,970 text descriptions in total. KIT-ML dataset consists of 3,911 mo- tion sequences along with 6,278 text descriptions.

## Limitations

Not verified

## Relevance to In-context Human Motion Prediction

Relevance: Core. The paper's central task is conditioned human motion generation, using language / text; social / multi-person interaction as part of the problem setting.

## Relevance to Embodied Intelligence

The explicit scene, object, interaction, sensing, or control condition makes this work directly relevant to embodied agents that must anticipate or synthesize physically situated human behavior.

## My Notes

TODO: Complete a second-pass manual reading and record comparisons with the closest papers in this notebook.
