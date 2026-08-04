# PersonaBooth: Personalized Text-to-Motion Generation

> CVPR 2025 · Context-aware Human Motion Generation
>
> Status: Partially verified

## Paper Information

| Field | Content |
|---|---|
| Year | 2025 |
| Title | PersonaBooth: Personalized Text-to-Motion Generation |
| BibTeX | [View BibTeX](#bibtex) |
| Conference | CVPR |
| Journal | Not applicable (conference paper) |
| Benchmark | HumanML3D |
| Open Source | Not verified |
| Main Authors | Boeun Kim; Hea In Jeong; JungHoon Sung; Yihua Cheng; Jeongmin Lee; Ju Yong Chang; Sang-Il Choi; Younggeun Choi; Saim Shin; Jungho Kim; Hyung Jin Chang |
| Paper Link | [Official paper](https://openaccess.thecvf.com/content/CVPR2025/html/Kim_PersonaBooth_Personalized_Text-to-Motion_Generation_CVPR_2025_paper.html) |
| GitHub Link | Not verified |
| Publication Status | Official publication record verified |
| Project Page | Not verified |
| Code / Resources | Not verified |
| Open Access Copy | [arXiv](https://arxiv.org/abs/2503.07390) |
| Dataset | HumanML3D |
| Task | Conditional human motion generation or synthesis |
| Input | Language / text |
| Output | Generated 3D human motion sequence |
| Context Type | Language / text |
| Method Family | Diffusion model |

## BibTeX

```bibtex
@inproceedings{Kim_2025, title={PersonaBooth: Personalized Text-to-Motion Generation}, url={http://dx.doi.org/10.1109/CVPR52734.2025.02119}, DOI={10.1109/cvpr52734.2025.02119}, booktitle={2025 IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR)}, publisher={IEEE}, author={Kim, Boeun and Jeong, Hea In and Sung, JungHoon and Cheng, Yihua and Lee, Jeongmin and Chang, Ju Yong and Choi, Sang-Il and Choi, Younggeun and Shin, Saim and Kim, Jungho and Chang, Hyung Jin}, year={2025}, month=June, pages={22756–22765} }
```

## Problem

This paper introduces Motion Personalization, a new task that generates personalized motions aligned with text descriptions using several basic motions containing Persona. To support this novel task, we introduce a new large-scale motion dataset called PerMo (PersonaMotion), which captures the unique personas of multiple actors.

## Key Idea

To support this novel task, we introduce a new large-scale motion dataset called PerMo (PersonaMotion), which captures the unique personas of multiple actors.

## Method

We propose a method for multi-modal finetuning of a text- to-motion diffusion model, named PersonaBooth. The over- all framework is shown in Fig. The input in- cludes multiple atomic motions {Mi} and a text descrip- tion Tin.

## Contributions

Not verified

## Experiments

We conduct experiments using the proposed PerMo and 100Style [19] datasets. During training, a single motion is cropped differently to serve as both the input and the GT motion for generation. We set λ to 10−2 and use the AdamW [16] optimizer with a learning rate of 10−4.

## Limitations

Not verified

## Relevance to In-context Human Motion Prediction

Relevance: Core. The paper's central task is conditioned human motion generation, using language / text as part of the problem setting.

## Relevance to Embodied Intelligence

The work provides motion priors or conditional generation machinery that can support embodied-agent simulation, planning, and human behavior modeling, although embodiment is not its only focus.

## My Notes

TODO: Complete a second-pass manual reading and record comparisons with the closest papers in this notebook.
