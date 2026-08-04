# DanceEditor: Towards Iterative Editable Music-Driven Dance Generation with Open-Vocabulary Descriptions

> ICCV 2025 · Context-aware Human Motion Generation
>
> Status: Partially verified

## Paper Information

| Field | Content |
|---|---|
| Year | 2025 |
| Title | DanceEditor: Towards Iterative Editable Music-Driven Dance Generation with Open-Vocabulary Descriptions |
| BibTeX | [View BibTeX](#bibtex) |
| Conference | ICCV |
| Journal | Not applicable (conference paper) |
| Benchmark | BEAT |
| Open Source | Not verified |
| Main Authors | Hengyuan Zhang; Zhe Li; Xingqun Qi; Mengze Li; Muyi Sun; Siye Wang; Man Zhang; Sirui Han |
| Paper Link | [Official paper](https://doi.org/10.1109/iccv51701.2025.01130) |
| GitHub Link | Not verified |
| Publication Status | Official publication record verified |
| Project Page | [Project page](https://lzvsdy.github.io/DanceEditor/) |
| Code / Resources | [Project page](https://lzvsdy.github.io/DanceEditor/) |
| Open Access Copy | [arXiv](https://arxiv.org/abs/2508.17342) |
| Dataset | BEAT |
| Task | Music/text-conditioned human dance generation |
| Input | Language / text; Music / rhythm |
| Output | Generated human dance motion sequence |
| Context Type | Language / text; Music / rhythm |
| Method Family | Not verified |

## BibTeX

```bibtex
@inproceedings{Zhang_2025, title={DanceEditor: Towards Iterative Editable Music-Driven Dance Generation with Open-Vocabulary Descriptions}, url={http://dx.doi.org/10.1109/ICCV51701.2025.01130}, DOI={10.1109/iccv51701.2025.01130}, booktitle={2025 IEEE/CVF International Conference on Computer Vision (ICCV)}, publisher={IEEE}, author={Zhang, Hengyuan and Li, Zhe and Qi, Xingqun and Li, Mengze and Sun, Muyi and Wang, Siye and Zhang, Man and Han, Sirui}, year={2025}, month=Oct, pages={12158–12168} }
```

## Problem

Generating coherent and diverse human dances from music signals has gained tremendous progress in animating virtual avatars. While existing methods support direct dance synthesis, they fail to recognize that enabling users to edit dance movements is far more practical in real-world choreography scenarios.

## Key Idea

In addition, we propose a novel framework for iterative and editable dance generation coherently aligned with given music signals, namely DanceEditor.

## Method

Iterative Editable Dance Dataset Construction Dataset Description: Due to the deficiency of single map- ping of dance and music in existing datasets, we newly collect DanceRemix for iterative editable dance generation, upon prior works [17, 21, 25]. To be precise, This ex- tensive dataset ensures diverse dance movements, allow- ing our model to learn intricate motion patterns and gener- ate vivid dance motions. Additionally, to support our in- sight into iterative editable dance generation, our dataset has well-aligned dance motions and edit prompts.

## Contributions

- Similar Pairs 、 Video 1: The dancer begins by with their right foot... several times...
- Video 2: The dancer starts with both feet togethert... ...
- Video 3: The dancer in front of hisleft while his arms swing loosely, the right arm ...

## Experiments

Datasets and Experimental Setting DanceRemix Dataset: Since the existing dance gener- ation datasets fail to provide accurate edit descriptions aligned with both dance motions and music, we contribute a new dataset named DanceRemix to evaluate our approach, upon prior work [17, 21, 25]. The dance motions of our DanceRemix are collected from online sources and exist- ing dance datasets. We then employ TMR to retrieve sim- ilar dance pairs, ensuring their alignment with music beats through dynamic time warping.

## Limitations

Not verified

## Relevance to In-context Human Motion Prediction

Relevance: Peripheral. This work covers an adjacent motion synthesis, control, or refinement task; it is retained because its conditioning or evaluation setting is useful to context-aware motion research.

## Relevance to Embodied Intelligence

The work provides motion priors or conditional generation machinery that can support embodied-agent simulation, planning, and human behavior modeling, although embodiment is not its only focus.

## My Notes

TODO: Complete a second-pass manual reading and record comparisons with the closest papers in this notebook.
