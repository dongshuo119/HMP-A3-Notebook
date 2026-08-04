# Motion-example-controlled Co-speech Gesture Generation Leveraging Large Language Models

> SIGGRAPH 2025 · Context-aware Human Motion Generation
>
> Status: Partially verified

## Paper Information

| Field | Content |
|---|---|
| Year | 2025 |
| Title | Motion-example-controlled Co-speech Gesture Generation Leveraging Large Language Models |
| BibTeX | [View BibTeX](#bibtex) |
| Conference | SIGGRAPH |
| Journal | Not applicable (conference paper) |
| Benchmark | Not verified |
| Open Source | Not verified |
| Main Authors | Bohong Chen; Yumeng Li; Youyi Zheng; Yao-Xiang Ding; Kun Zhou |
| Paper Link | [Official paper](https://doi.org/10.1145/3721238.3730611) |
| GitHub Link | Not verified |
| Publication Status | Official publication record verified |
| Project Page | [Project page](https://robinwitch.github.io/MECo-Page) |
| Code / Resources | [Project page](https://robinwitch.github.io/MECo-Page) |
| Open Access Copy | [arXiv](https://arxiv.org/abs/2507.20220) |
| Dataset | Not verified |
| Task | Speech- or semantics-conditioned human gesture generation |
| Input | Language / text; Speech / audio; Trajectory / kinematic control |
| Output | Generated human gesture or holistic body-motion sequence |
| Context Type | Language / text; Speech / audio; Trajectory / kinematic control |
| Method Family | Transformer / attention; LLM-assisted reasoning |

## BibTeX

```bibtex
@inproceedings{Chen_2025, series={SIGGRAPH Conference Papers ’25}, title={Motion-example-controlled Co-speech Gesture Generation Leveraging Large Language Models}, url={http://dx.doi.org/10.1145/3721238.3730611}, DOI={10.1145/3721238.3730611}, booktitle={Proceedings of the Special Interest Group on Computer Graphics and Interactive Techniques Conference Conference Papers}, publisher={ACM}, author={Chen, Bohong and Li, Yumeng and Zheng, Youyi and Ding, Yao-Xiang and Zhou, Kun}, year={2025}, month=July, pages={1–12}, collection={SIGGRAPH Conference Papers ’25} }
```

## Problem

The automatic generation of controllable co-speech gestures has recently gained growing attention. While existing systems typically achieve gesture control through predefined categorical labels or implicit pseudo-labels derived from motion examples, these approaches often compromise the rich details present in the original motion examples.

## Key Idea

We present MECo, a framework for motion-example-controlled co-speech gesture generation by leveraging large language models (LLMs).

## Method

By harnessing LLMs’ dual capabilities in instruction following and conditional generation, we develop a multimodal fusion framework that processes both auditory and kinematic inputs to produce contextually appropriate co-speech gesture motions. To enable LLMs to comprehend speech audio and motion data, these multimodal inputs must first be mapped to tokens within the Fig. Our model takes motion examples and speech audio as inputs.

## Contributions

Not verified

## Experiments

We train and test our model on two high-quality mocap co-speech gesture datasets: (1) BEAT2 [Liu et al . Following the benchmark protocol, we only use the second speaker’s data for training and testing; (2) ZeroEGGS [Ghorbani et al . We use the same datasets split as in their work.

## Limitations

Not verified

## Relevance to In-context Human Motion Prediction

Relevance: Peripheral. This work covers gesture or partial-body motion rather than general full-body motion; it is retained because its conditioning or evaluation setting is useful to context-aware motion research.

## Relevance to Embodied Intelligence

The explicit scene, object, interaction, sensing, or control condition makes this work directly relevant to embodied agents that must anticipate or synthesize physically situated human behavior.

## My Notes

TODO: Complete a second-pass manual reading and record comparisons with the closest papers in this notebook.
