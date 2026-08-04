# ExGes: Expressive Human Motion Retrieval and Modulation for Audio-Driven Gesture Synthesis

> IEEE TVCG 2026 · Context-aware Human Motion Generation
>
> Status: Partially verified

## Paper Information

| Field | Content |
|---|---|
| Year | 2026 |
| Title | ExGes: Expressive Human Motion Retrieval and Modulation for Audio-Driven Gesture Synthesis |
| BibTeX | [View BibTeX](#bibtex) |
| Conference | Not applicable (journal article) |
| Journal | IEEE Transactions on Visualization and Computer Graphics |
| Benchmark | BEAT |
| Open Source | Not verified |
| Main Authors | Xukun Zhou; Fengxin Li; Ming Chen; Yan Zhou; Pengfei Wan; Yeying Jin; Hongyuan Zhang; Hongyan Liu; Zhaoxin Fan; Jun He; Xuelong Li |
| Paper Link | [Official paper](https://doi.org/10.1109/tvcg.2026.3679469) |
| GitHub Link | Not verified |
| Publication Status | Official 2026 publication record verified; 2026 coverage remains open for later additions |
| Project Page | Not verified |
| Code / Resources | Not verified |
| Open Access Copy | [arXiv](https://arxiv.org/abs/2503.06499) |
| Dataset | BEAT |
| Task | Speech- or semantics-conditioned human gesture generation |
| Input | Social / multi-person interaction; Speech / audio; Trajectory / kinematic control; Human feedback / preference |
| Output | Generated human gesture or holistic body-motion sequence |
| Context Type | Social / multi-person interaction; Speech / audio; Trajectory / kinematic control; Human feedback / preference |
| Method Family | Diffusion model; Retrieval / memory model |

## BibTeX

```bibtex
@article{Zhou_2026, title={ExGes: Expressive Human Motion Retrieval and Modulation for Audio-Driven Gesture Synthesis}, volume={32}, ISSN={2160-9306}, url={http://dx.doi.org/10.1109/tvcg.2026.3679469}, DOI={10.1109/tvcg.2026.3679469}, number={7}, journal={IEEE Transactions on Visualization and Computer Graphics}, publisher={Institute of Electrical and Electronics Engineers (IEEE)}, author={Zhou, Xukun and Li, Fengxin and Chen, Ming and Zhou, Yan and Wan, Pengfei and Jin, Yeying and Zhang, Hongyuan and Liu, Hongyan and Fan, Zhaoxin and He, Jun and Li, Xuelong}, year={2026}, month=July, pages={6305–6318} }
```

## Problem

Audio-driven human gesture synthesis is a crucial task with broad applications in virtual avatars, human-computer interaction, and creative content generation. Despite notable progress, existing methods often produce gestures that are coarse, lack expressiveness, and fail to fully align with audio semantics.

## Key Idea

To address these challenges, we propose ExGes, a novel retrieval-enhanced diffusion framework with three key designs: (1) a Motion Base Construction, which builds a gesture library using training dataset; (2) a Motion Retrieval Module, employing constrative learning and momentum distillation for fine-grained reference poses retreiving; and (3) a Precision Control Module, integrating partial masking and stochastic masking to enable flexible and fine-grained control.

## Method

Given an audio signal (a ∈ RT ×Q) and observed kinematic constraints (c ∈ RN ×J×Q), our goal is to synthesize tem- porally coherent human motion sequences (x ∈ RN ×J×Q). Here, N represents the number of frames, J denotes the number of joints, andQ indicates the dimensionality of joint features. To enhance the expressiveness of the generated motions, we introduce an additional biomechanical con- straint, c∗, which encapsulates expressive poses retrieved from a pre-built audio-motion database.

## Contributions

Not verified

## Experiments

Implementation Details Our model is built upon the DiffuseStyleGesture frame- work [45] and is trained for 200,000 steps on a single A6000 GPU, with the entire process taking approximately 24 hours. During training, we apply both masking and noise control to 70% of the input samples to improve ro- bustness. Specifically, random keypoint masks are applied to 40% of the samples, frame-level masks to 30%, and key- point sequence-level masks to the remaining 30%.

## Limitations

Not verified

## Relevance to In-context Human Motion Prediction

Relevance: Peripheral. This work covers gesture or partial-body motion rather than general full-body motion; it is retained because its conditioning or evaluation setting is useful to context-aware motion research.

## Relevance to Embodied Intelligence

The explicit scene, object, interaction, sensing, or control condition makes this work directly relevant to embodied agents that must anticipate or synthesize physically situated human behavior.

## My Notes

TODO: Complete a second-pass manual reading and record comparisons with the closest papers in this notebook.
