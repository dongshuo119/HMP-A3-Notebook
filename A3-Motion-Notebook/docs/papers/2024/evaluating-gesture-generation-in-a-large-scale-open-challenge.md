# Evaluating Gesture Generation in a Large-scale Open Challenge: The GENEA Challenge 2022

> ACM TOG 2024 · Context-aware Human Motion Generation
>
> Status: Partially verified

## Paper Information

| Field | Content |
|---|---|
| Year | 2024 |
| Title | Evaluating Gesture Generation in a Large-scale Open Challenge: The GENEA Challenge 2022 |
| BibTeX | [View BibTeX](#bibtex) |
| Conference | Not applicable (journal article) |
| Journal | ACM Transactions on Graphics |
| Benchmark | Not verified |
| Open Source | Not verified |
| Main Authors | Taras Kucherenko; Pieter Wolfert; Youngwoo Yoon; Carla Viegas; Teodor Nikolov; Mihail Tsakov; Gustav Eje Henter |
| Paper Link | [Official paper](https://doi.org/10.1145/3656374) |
| GitHub Link | Not verified |
| Publication Status | Official publication record verified |
| Project Page | Not verified |
| Code / Resources | Not verified |
| Open Access Copy | [arXiv](https://arxiv.org/abs/2303.08737) |
| Dataset | Not verified |
| Task | Speech- or semantics-conditioned human gesture generation |
| Input | Object / human-object interaction; Social / multi-person interaction; Speech / audio |
| Output | Generated human gesture or holistic body-motion sequence |
| Context Type | Object / human-object interaction; Social / multi-person interaction; Speech / audio |
| Method Family | Transformer / attention |

## BibTeX

```bibtex
@article{Kucherenko_2024, title={Evaluating Gesture Generation in a Large-scale Open Challenge: The GENEA Challenge 2022}, volume={43}, ISSN={1557-7368}, url={http://dx.doi.org/10.1145/3656374}, DOI={10.1145/3656374}, number={3}, journal={ACM Transactions on Graphics}, publisher={Association for Computing Machinery (ACM)}, author={Kucherenko, Taras and Wolfert, Pieter and Yoon, Youngwoo and Viegas, Carla and Nikolov, Teodor and Tsakov, Mihail and Henter, Gustav Eje}, year={2024}, month=June, pages={1–28} }
```

## Problem

This paper reports on the second GENEA Challenge to benchmark data-driven automatic co-speech gesture generation. Participating teams used the same speech and motion dataset to build gesture-generation systems.

## Key Idea

Not verified

## Method

Based on the publications referenced in Table 1, we now review the technical approaches taken by the different teams this challenge, and (in Sec. Note that we do not discuss the Murple AI Lab submission, since that team did not submit a system-description paper. The RNN and Transformer architectures were the most common choices, which effectively led to smaller architectural differences between the systems.

## Contributions

Not verified

## Experiments

We conducted a large-scale, crowdsourced, joint evaluation of ges- ture motion from the 10 full-body conditions and 11 upper-body conditions (listed in Table 1) in parallel using a within-subject design (i.e., every rater was exposed to and evaluated all conditions in each tier). The systems were evaluated in terms of the human-likeness of the gesture motion itself, as well as the appropriateness (a.k.a. specificity) of the gestures for the given input speech. The cent- ral difference from other gesture-generation evaluations is that all systems in our evaluation used the same motion data, the same visu- alisation/embodiment, and were rated together using the same eval- uation methodology; only the motion-generation systems differed between the different entries that were compared.

## Limitations

Despite being a large evaluation with many conditions and raters, there are inevitable limitations to the challenge and its results, im- posed by scope, systems, data, visualisation, and evaluation choices. We discuss some of these limitations below. The ten teams participating in the 2022 chal- lenge do not represent the full spectrum of all gesture-generation approaches available today.

## Relevance to In-context Human Motion Prediction

Relevance: Peripheral. This work covers gesture or partial-body motion rather than general full-body motion; it is retained because its conditioning or evaluation setting is useful to context-aware motion research.

## Relevance to Embodied Intelligence

The explicit scene, object, interaction, sensing, or control condition makes this work directly relevant to embodied agents that must anticipate or synthesize physically situated human behavior.

## My Notes

TODO: Complete a second-pass manual reading and record comparisons with the closest papers in this notebook.
