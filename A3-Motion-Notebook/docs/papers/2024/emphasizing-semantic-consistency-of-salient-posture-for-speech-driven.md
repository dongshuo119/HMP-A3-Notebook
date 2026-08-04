# Emphasizing Semantic Consistency of Salient Posture for Speech-Driven Gesture Generation

> ACM Multimedia 2024 · Context-aware Human Motion Generation
>
> Status: Partially verified

## Paper Information

| Field | Content |
|---|---|
| Year | 2024 |
| Title | Emphasizing Semantic Consistency of Salient Posture for Speech-Driven Gesture Generation |
| BibTeX | [View BibTeX](#bibtex) |
| Conference | ACM Multimedia |
| Journal | Not applicable (conference paper) |
| Benchmark | BEAT; TED Gesture |
| Open Source | Not verified |
| Main Authors | Fengqi Liu; Hexiang Wang; Jingyu Gong; Ran Yi; Qianyu Zhou; Xuequan Lu; Jiangbo Lu; Lizhuang Ma |
| Paper Link | [Official paper](https://doi.org/10.1145/3664647.3680892) |
| GitHub Link | Not verified |
| Publication Status | Official publication record verified |
| Project Page | Not verified |
| Code / Resources | Not verified |
| Open Access Copy | [arXiv](https://arxiv.org/abs/2410.13786) |
| Dataset | BEAT; TED Gesture |
| Task | Speech- or semantics-conditioned human gesture generation |
| Input | Speech / audio |
| Output | Generated human gesture or holistic body-motion sequence |
| Context Type | Speech / audio |
| Method Family | Not verified |

## BibTeX

```bibtex
@inproceedings{Liu_2024, series={MM ’24}, title={Emphasizing Semantic Consistency of Salient Posture for Speech-Driven Gesture Generation}, url={http://dx.doi.org/10.1145/3664647.3680892}, DOI={10.1145/3664647.3680892}, booktitle={Proceedings of the 32nd ACM International Conference on Multimedia}, publisher={ACM}, author={Liu, Fengqi and Wang, Hexiang and Gong, Jingyu and Yi, Ran and Zhou, Qianyu and Lu, Xuequan and Lu, Jiangbo and Ma, Lizhuang}, year={2024}, month=Oct, pages={7027–7035}, collection={MM ’24} }
```

## Problem

Speech-driven gesture generation aims at synthesizing a gesture sequence synchronized with the input speech signal. Previous methods leverage neural networks to directly map a compact audio representation to the gesture sequence, ignoring the semantic association of different modalities and failing to deal with salient gestures.

## Key Idea

In this paper, we propose a novel speech-driven gesture generation method by emphasizing the semantic consistency of salient posture.

## Method

Our model first learns a joint manifold space for different representations of audio and body pose to explore a finer mapping between two modalities. Then, we emphasize the semantic con- sistency of salient postures by introducing a weakly-supervised detector to identify salient postures, and enforcing a stronger align- ment for the salient postures in the joint manifold space. In addition, observing that facial expressions rely on articulation-related au- dio features while body gestures rely on semantic-related audio features, we extract separate audio features for face and body, and design separate branches for face and body gesture synthesis.

## Contributions

- Our main contributions can be summarized as follows: 1) We propose a novel speech-driven gesture generation frame- work with an emphasis on semantic consistency of salient posture.
- We introduce the joint manifold space to learn the inherent seman- tic association between audio and gesture modalities and enforce semantic consistency via a consistency loss.
- 2) We emphasize the semantic consistency of salient postures by introducing a weakly-supervised detector to identify salient postures, and reweighting the consistency loss based on saliency score to enforce a stronger alignment in the joint manifold space.

## Experiments

Speech2Gesture [13] is a speaker-specific dataset with full body and face keypoints annotations. Following SDT [30], we test our method on four speakers: Oliver, Kubinec, Luo, and Xing. The number of different videos of four speakers is 113, 274, 72, and 27, with a total length of about 25 hours.

## Limitations

Not verified

## Relevance to In-context Human Motion Prediction

Relevance: Peripheral. This work covers gesture or partial-body motion rather than general full-body motion; it is retained because its conditioning or evaluation setting is useful to context-aware motion research.

## Relevance to Embodied Intelligence

The work provides motion priors or conditional generation machinery that can support embodied-agent simulation, planning, and human behavior modeling, although embodiment is not its only focus.

## My Notes

TODO: Complete a second-pass manual reading and record comparisons with the closest papers in this notebook.
