# MultiAct: Text-to-Motion Generation from Composite Text via Tailored Attention Guidance

> SIGGRAPH 2026 · Context-aware Human Motion Generation
>
> Status: Partially verified

## Paper Information

| Field | Content |
|---|---|
| Year | 2026 |
| Title | MultiAct: Text-to-Motion Generation from Composite Text via Tailored Attention Guidance |
| BibTeX | [View BibTeX](#bibtex) |
| Conference | SIGGRAPH |
| Journal | Not applicable (conference paper) |
| Benchmark | HumanML3D |
| Open Source | Not verified |
| Main Authors | Nathan Sala; Ofir Abramovich; Ariel Shamir; Daniel Cohen-Or; Andreas Aristidou; Sigal Raab |
| Paper Link | [Official paper](https://doi.org/10.1145/3799902.3811092) |
| GitHub Link | Not verified |
| Publication Status | Official 2026 publication record verified; 2026 coverage remains open for later additions |
| Project Page | [Project page](https://natsala13.github.io/multiact.github.io) |
| Code / Resources | [Project page](https://natsala13.github.io/multiact.github.io) |
| Open Access Copy | [arXiv](https://arxiv.org/abs/2605.30925) |
| Dataset | HumanML3D |
| Task | Music/text-conditioned human dance generation |
| Input | Language / text; Social / multi-person interaction; Music / rhythm |
| Output | Generated human dance motion sequence |
| Context Type | Language / text; Social / multi-person interaction; Music / rhythm |
| Method Family | Transformer / attention |

## BibTeX

```bibtex
@inproceedings{Sala_2026, series={SIGGRAPH Conference Papers ’26}, title={MultiAct: Text-to-Motion Generation from Composite Text via Tailored Attention Guidance}, url={http://dx.doi.org/10.1145/3799902.3811092}, DOI={10.1145/3799902.3811092}, booktitle={Proceedings of the Special Interest Group on Computer Graphics and Interactive Techniques Conference Conference Papers}, publisher={ACM}, author={Sala, Nathan and Abramovich, Ofir and Shamir, Ariel and Cohen-Or, Daniel and Aristidou, Andreas and Raab, Sigal}, year={2026}, month=July, pages={1–11}, collection={SIGGRAPH Conference Papers ’26} }
```

## Problem

Text-to-motion generation has progressed rapidly in recent years, offering an expressive interface for animation and human-computer interaction. However, current models remain brittle when handling prompts that describe multiple actions occurring at the same time.

## Key Idea

We present MultiAct, an unpaired, inference-time framework for compositional text-to-motion synthesis that operates directly on pretrained motion generators without retraining or architectural modification.

## Method

Not verified

## Contributions

Not verified

## Experiments

Our narrowed down parameter spaces,M,S, andT are defined as follows. Recall that they are selected from the full parameter spaces using a simple clustering method. The candidate layers for the optimization process are layers3to5(out of8layers in total); ˆ𝑡 should be chosen such that modulation would be applied only during the early, structure-forming steps of the reverse diffusion process.

## Limitations

Not verified

## Relevance to In-context Human Motion Prediction

Relevance: Core. The paper's central task is conditioned human motion generation, using language / text; social / multi-person interaction; music / rhythm as part of the problem setting.

## Relevance to Embodied Intelligence

The explicit scene, object, interaction, sensing, or control condition makes this work directly relevant to embodied agents that must anticipate or synthesize physically situated human behavior.

## My Notes

TODO: Complete a second-pass manual reading and record comparisons with the closest papers in this notebook.
