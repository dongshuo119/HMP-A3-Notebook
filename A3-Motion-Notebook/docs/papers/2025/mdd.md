# MDD: A Dataset for Text-and-Music Conditioned Duet Dance Generation

> ICCV 2025 · Context-aware Human Motion Generation
>
> Status: Partially verified

## Paper Information

| Field | Content |
|---|---|
| Year | 2025 |
| Title | MDD: A Dataset for Text-and-Music Conditioned Duet Dance Generation |
| BibTeX | [View BibTeX](#bibtex) |
| Conference | ICCV |
| Journal | Not applicable (conference paper) |
| Benchmark | BEAT |
| Open Source | Not verified |
| Main Authors | Prerit Gupta; Jason Alexander Fotso-Puepi; Zhengyuan Li; Jay Mehta; Aniket Bera |
| Paper Link | [Official paper](https://doi.org/10.1109/iccv51701.2025.01293) |
| GitHub Link | Not verified |
| Publication Status | Official publication record verified |
| Project Page | Not verified |
| Code / Resources | Not verified |
| Open Access Copy | [arXiv](https://arxiv.org/abs/2508.16911) |
| Dataset | BEAT |
| Task | Music/text-conditioned human dance generation |
| Input | Language / text; Music / rhythm; Trajectory / kinematic control |
| Output | Generated human dance motion sequence |
| Context Type | Language / text; Music / rhythm; Trajectory / kinematic control |
| Method Family | Not verified |

## BibTeX

```bibtex
@inproceedings{Gupta_2025, title={MDD: A Dataset for Text-and-Music Conditioned Duet Dance Generation}, url={http://dx.doi.org/10.1109/ICCV51701.2025.01293}, DOI={10.1109/iccv51701.2025.01293}, booktitle={2025 IEEE/CVF International Conference on Computer Vision (ICCV)}, publisher={IEEE}, author={Gupta, Prerit and Fotso-Puepi, Jason Alexander and Li, Zhengyuan and Mehta, Jay and Bera, Aniket}, year={2025}, month=Oct, pages={13932–13941} }
```

## Problem

Our dataset comprises 620 minutes of high-quality motion capture data performed by professional dancers, synchronized with music, and detailed with over 10K fine-grained natural language descriptions. The annotations capture a rich movement vocabulary, detailing spatial relationships, body movements, and rhythm, making MDD the first dataset to seamlessly integrate human motions, music, and text for duet dance generation.

## Key Idea

We introduce Multimodal DuetDance (MDD), a diverse multimodal benchmark dataset designed for text-controlled and music-conditioned 3D duet dance motion generation.

## Method

Not verified

## Contributions

- We introduce MDD, the first large-scale duet dance mo- tion dataset spanning 15 different dance genres, featur- ing more than 10K rich text descriptions across more than 10 hours of motion capture data.

## Experiments

In this section, we present evaluation metrics, implemen- tation details, and report both quantitative and qualitative results to assess the performance of different baselines. Evaluation Metrics For evaluating models for the proposed tasks, we adapt metrics from previous text-to-motion [9, 20] and music-to- motion [29, 31] works. For text-related metrics, we train the evaluator as in InterGen [20] on our dataset.

## Limitations

Not verified

## Relevance to In-context Human Motion Prediction

Relevance: Peripheral. This work covers survey, benchmark, or evaluation infrastructure rather than a primary prediction/generation method; it is retained because its conditioning or evaluation setting is useful to context-aware motion research.

## Relevance to Embodied Intelligence

The explicit scene, object, interaction, sensing, or control condition makes this work directly relevant to embodied agents that must anticipate or synthesize physically situated human behavior.

## My Notes

TODO: Complete a second-pass manual reading and record comparisons with the closest papers in this notebook.
