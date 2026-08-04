# DiffSHEG: A Diffusion-Based Approach for Real-Time Speech-Driven Holistic 3D Expression and Gesture Generation

> CVPR 2024 · Context-aware Human Motion Generation
>
> Status: Partially verified

## Paper Information

| Field | Content |
|---|---|
| Year | 2024 |
| Title | DiffSHEG: A Diffusion-Based Approach for Real-Time Speech-Driven Holistic 3D Expression and Gesture Generation |
| BibTeX | [View BibTeX](#bibtex) |
| Conference | CVPR |
| Journal | Not applicable (conference paper) |
| Benchmark | BEAT |
| Open Source | Not verified |
| Main Authors | Junming Chen; Yunfei Liu; Jianan Wang; Ailing Zeng; Yu Li; Qifeng Chen |
| Paper Link | [Official paper](https://doi.org/10.1109/cvpr52733.2024.00702) |
| GitHub Link | Not verified |
| Publication Status | Official publication record verified |
| Project Page | Not verified |
| Code / Resources | Not verified |
| Open Access Copy | [arXiv](https://arxiv.org/abs/2401.04747) |
| Dataset | BEAT |
| Task | Speech- or semantics-conditioned human gesture generation |
| Input | Speech / audio |
| Output | Generated human gesture or holistic body-motion sequence |
| Context Type | Speech / audio |
| Method Family | Diffusion model; Transformer / attention |

## BibTeX

```bibtex
@inproceedings{Chen_2024, title={DiffSHEG: A Diffusion-Based Approach for Real-Time Speech-Driven Holistic 3D Expression and Gesture Generation}, url={http://dx.doi.org/10.1109/CVPR52733.2024.00702}, DOI={10.1109/cvpr52733.2024.00702}, booktitle={2024 IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR)}, publisher={IEEE}, author={Chen, Junming and Liu, Yunfei and Wang, Jianan and Zeng, Ailing and Li, Yu and Chen, Qifeng}, year={2024}, month=June, pages={7352–7361} }
```

## Problem

While previous works focused on co-speech gesture or expression generation individually, the joint generation of synchronized expressions and gestures remains barely explored. To address this, our diffusion-based co-speech motion generation transformer enables uni-directional information flow from expression to gesture, facilitating improved matching of joint expression-gesture distributions.

## Key Idea

We propose DiffSHEG, a Diffusion-based approach for Speech-driven Holistic 3D Expression and Gesture generation with arbitrary length.

## Method

How to model the expression-gesture joint distribution can be key to this task. A na ¨ıve way is directly concatenating the two vectors together and passing them to deep networks simultaneously, such that the features of both can be shared by each other. However, we empirically find this does not work well and leads to sub-optimal results in our experi- ment.

## Contributions

- Our contributions can be summarized as follows: (1) We develop a unified diffusion-based approach for speech- driven holistic 3D expression and gesture generation frame- work: DiffSHEG.

## Experiments

Datasets BEAT [26] is a large-scale, multi-modal human gestures and expressions dataset with text, semantic and emotional annotations. We follow the train-validation-test split set- ting in [26] with four subjects. The training and validation samples are 34-frame clips.

## Limitations

Not verified

## Relevance to In-context Human Motion Prediction

Relevance: Peripheral. This work covers gesture or partial-body motion rather than general full-body motion; it is retained because its conditioning or evaluation setting is useful to context-aware motion research.

## Relevance to Embodied Intelligence

The work provides motion priors or conditional generation machinery that can support embodied-agent simulation, planning, and human behavior modeling, although embodiment is not its only focus.

## My Notes

TODO: Complete a second-pass manual reading and record comparisons with the closest papers in this notebook.
