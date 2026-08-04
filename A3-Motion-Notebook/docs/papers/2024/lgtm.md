# LGTM: Local-to-Global Text-Driven Human Motion Diffusion Model

> SIGGRAPH 2024 · Context-aware Human Motion Generation
>
> Status: Partially verified

## Paper Information

| Field | Content |
|---|---|
| Year | 2024 |
| Title | LGTM: Local-to-Global Text-Driven Human Motion Diffusion Model |
| BibTeX | [View BibTeX](#bibtex) |
| Conference | SIGGRAPH |
| Journal | Not applicable (conference paper) |
| Benchmark | Not verified |
| Open Source | Yes |
| Main Authors | Haowen Sun; Ruikun Zheng; Haibin Huang; Chongyang Ma; Hui Huang; Ruizhen Hu |
| Paper Link | [Official paper](https://doi.org/10.1145/3641519.3657422) |
| GitHub Link | [Official GitHub](https://github.com/L-Sun/LGTM) |
| Publication Status | Official publication record verified |
| Project Page | Not verified |
| Code / Resources | [Official GitHub](https://github.com/L-Sun/LGTM) |
| Open Access Copy | [arXiv](https://arxiv.org/abs/2405.03485) |
| Dataset | Not verified |
| Task | Conditional human motion generation or synthesis |
| Input | Language / text |
| Output | Generated 3D human motion sequence |
| Context Type | Language / text |
| Method Family | Diffusion model; Transformer / attention; LLM-assisted reasoning |

## BibTeX

```bibtex
@inproceedings{Sun_2024, series={SIGGRAPH ’24}, title={LGTM: Local-to-Global Text-Driven Human Motion Diffusion Model}, url={http://dx.doi.org/10.1145/3641519.3657422}, DOI={10.1145/3641519.3657422}, booktitle={Special Interest Group on Computer Graphics and Interactive Techniques Conference Conference Papers}, publisher={ACM}, author={Sun, Haowen and Zheng, Ruikun and Huang, Haibin and Ma, Chongyang and Huang, Hui and Hu, Ruizhen}, year={2024}, month=July, pages={1–9}, collection={SIGGRAPH ’24} }
```

## Problem

LGTM utilizes a diffusion-based architecture and aims to address the challenge of accurately translating textual descriptions into semantically coherent human motion in computer animation. Specifically, traditional methods often struggle with semantic discrepancies, particularly in aligning specific motions to the correct body parts.

## Key Idea

In this paper, we introduce LGTM, a novel Local-to-Global pipeline for Text-to-Motion generation.

## Method

LGTM is structured as a local-to-global generation framework that initially creates local, part-level motion, followed by a global fusion and optimization process to produce the final full-body motion. At its core, LGTM operates by subdividing the full- body text and motion spaces into body-part-specific subspaces. Such subdivision is adeptly handled by a dedicated Partition Module.

## Contributions

- our contributions are as follows: • We present LGTM, a novel diffusion-based architecture that translate textual descriptions into accurate and coherent hu- man motions, marking a significant improvement over previous text-to-motion approaches. • LGTM introduces a unique partition module that utilizes LLMs to decompose complex motion descriptions into part-specific narratives.
- This significantly enhances local semantic accuracy in motion generation. • Our experiments demonstrate the effective integration of inde- pendent body-part motion encoders with an attention-based full-body optimizer, ensuring both local precision and global coherence in generated motions, providing a promising improve- ment for text-to-motion generation.
- 2 RELATED WORK The generation of motion sequences is a longstanding challenge within the domain of computer graphics, where the objective is to produce a series of motion frames guided by conditional control sig- nals.

## Experiments

Not verified

## Limitations

Not verified

## Relevance to In-context Human Motion Prediction

Relevance: Core. The paper's central task is conditioned human motion generation, using language / text as part of the problem setting.

## Relevance to Embodied Intelligence

The work provides motion priors or conditional generation machinery that can support embodied-agent simulation, planning, and human behavior modeling, although embodiment is not its only focus.

## My Notes

TODO: Complete a second-pass manual reading and record comparisons with the closest papers in this notebook.
