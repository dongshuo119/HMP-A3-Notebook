# Streaming Generation of Co-Speech Gestures via Accelerated Rolling Diffusion

> AAAI 2026 · Context-aware Human Motion Generation
>
> Status: Partially verified

## Paper Information

| Field | Content |
|---|---|
| Year | 2026 |
| Title | Streaming Generation of Co-Speech Gestures via Accelerated Rolling Diffusion |
| BibTeX | [View BibTeX](#bibtex) |
| Conference | AAAI |
| Journal | Not applicable (conference paper) |
| Benchmark | BEAT |
| Open Source | Yes |
| Main Authors | Evgeniia Vu; Andrei Boiarov; Dmitry P. Vetrov |
| Paper Link | [Official paper](https://doi.org/10.1609/aaai.v40i31.39807) |
| GitHub Link | [Official GitHub](https://github.com/andrewbo29/co-speech-) |
| Publication Status | Official 2026 publication record verified; 2026 coverage remains open for later additions |
| Project Page | Not verified |
| Code / Resources | [Official GitHub](https://github.com/andrewbo29/co-speech-) |
| Open Access Copy | [Available full text](https://ojs.aaai.org/index.php/AAAI/article/download/39807/43768) |
| Dataset | BEAT |
| Task | Speech- or semantics-conditioned human gesture generation |
| Input | Speech / audio |
| Output | Generated human gesture or holistic body-motion sequence |
| Context Type | Speech / audio |
| Method Family | Diffusion model |

## BibTeX

```bibtex
@article{Vu_2026, title={Streaming Generation of Co-Speech Gestures via Accelerated Rolling Diffusion}, volume={40}, ISSN={2159-5399}, url={http://dx.doi.org/10.1609/AAAI.V40I31.39807}, DOI={10.1609/aaai.v40i31.39807}, number={31}, journal={Proceedings of the AAAI Conference on Artificial Intelligence}, publisher={Association for the Advancement of Artificial Intelligence (AAAI)}, author={Vu, Evgeniia and Boiarov, Andrei and Vetrov, Dmitry}, year={2026}, month=Mar, pages={26054–26061} }
```

## Problem

Generating co-speech gestures in real time requires both temporal coherence and efficient sampling. Our framework is universally compatible with existing diffusion-based gesture generation model, transforming them into streaming methods capable of continuous generation without requiring post-processing.

## Key Idea

We introduce a novel framework for streaming gesture generation that extends Rolling Diffusion models with structured progressive noise scheduling, enabling seamless long-sequence motion synthesis while preserving realism and diversity.

## Method

A straightforward method for accelerating the sampling process is reducing the number of denoising steps per frame. As described in section 2, in our framework, each frame un- dergoes a predefined number of denoising steps s before the rolling window shifts forward in time. In RDLA we reduc- ing this number from s to 1 leading to a total inference step count of Tr = N, where N is the total number of frames in sliding window.

## Contributions

- We are the first, to our knowledge, to successfully adapt a rolling diffusion framework to a practical application, specifically demonstrating its effectiveness in real-time co-speech gesture generation.

## Experiments

To thoroughly examine the impact of our method, we inte- grate our progressive noise scheduling technique into mul- tiple baseline models and conduct comparisons across two datasets: ZEGGS (Ghorbani et al. ZEGGS was chosen for its clean, high-quality motion capture data, recorded with a motion capture suit, ensuring precise gesture representation. Additionally, it in- cludes diverse speaking styles, making it well-suited for evaluating stylistic consistency.

## Limitations

Not verified

## Relevance to In-context Human Motion Prediction

Relevance: Core. The paper's central task is conditioned human motion generation, using speech / audio as part of the problem setting.

## Relevance to Embodied Intelligence

The work provides motion priors or conditional generation machinery that can support embodied-agent simulation, planning, and human behavior modeling, although embodiment is not its only focus.

## My Notes

TODO: Complete a second-pass manual reading and record comparisons with the closest papers in this notebook.
