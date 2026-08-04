# Light-T2M: A Lightweight and Fast Model for Text-to-motion Generation

> AAAI 2025 · Context-aware Human Motion Generation
>
> Status: Partially verified

## Paper Information

| Field | Content |
|---|---|
| Year | 2025 |
| Title | Light-T2M: A Lightweight and Fast Model for Text-to-motion Generation |
| BibTeX | [View BibTeX](#bibtex) |
| Conference | AAAI |
| Journal | Not applicable (conference paper) |
| Benchmark | AMASS; HumanML3D; KIT-ML; HumanAct12 |
| Open Source | Yes |
| Main Authors | Ling-An Zeng; Guohong Huang; Gaojie Wu; Wei-Shi Zheng |
| Paper Link | [Official paper](https://doi.org/10.1609/aaai.v39i9.33062) |
| GitHub Link | [Official GitHub](https://github.com/qinghuannn/light-t2m) |
| Publication Status | Official publication record verified |
| Project Page | Not verified |
| Code / Resources | [Official GitHub](https://github.com/qinghuannn/light-t2m) |
| Open Access Copy | [Available full text](https://ojs.aaai.org/index.php/AAAI/article/download/33062/35217) |
| Dataset | AMASS; HumanML3D; KIT-ML; HumanAct12 |
| Task | Conditional human motion generation or synthesis |
| Input | Language / text |
| Output | Generated 3D human motion sequence |
| Context Type | Language / text |
| Method Family | Retrieval / memory model |

## BibTeX

```bibtex
@article{Zeng_2025, title={Light-T2M: A Lightweight and Fast Model for Text-to-motion Generation}, volume={39}, ISSN={2159-5399}, url={http://dx.doi.org/10.1609/AAAI.V39I9.33062}, DOI={10.1609/aaai.v39i9.33062}, number={9}, journal={Proceedings of the AAAI Conference on Artificial Intelligence}, publisher={Association for the Advancement of Artificial Intelligence (AAAI)}, author={Zeng, Ling-An and Huang, Guohong and Wu, Gaojie and Zheng, Wei-Shi}, year={2025}, month=Apr, pages={9797–9805} }
```

## Problem

Despite the significant role text-to-motion (T2M) generation plays across various applications, current methods involve a large number of parameters and suffer from slow inference speeds, leading to high usage costs. To address this, we aim to design a lightweight model to reduce usage costs.

## Key Idea

Moreover, we propose a novel Adaptive Textual Information Injector that more effectively integrates textual information into the motion during generation.

## Method

According to existing works (Guo et al. For more detailed information on hu- man pose representation, please see T2M (Guo et al. Each block contains two Local In- formation Modeling Modules and one Global Information Modeling and Textual Information Injection Module.

## Contributions

Not verified

## Experiments

We conduct experiments on two most common public text-motion datasets, i.e., the HumanML3D dataset (Guo et al. The HumanML3D dataset, con- structed based on the HumanAct12 (Guo et al. This dataset con- tains diverse activities including exercising, sports, and ac- robatics.

## Limitations

Not verified

## Relevance to In-context Human Motion Prediction

Relevance: Core. The paper's central task is conditioned human motion generation, using language / text as part of the problem setting.

## Relevance to Embodied Intelligence

The work provides motion priors or conditional generation machinery that can support embodied-agent simulation, planning, and human behavior modeling, although embodiment is not its only focus.

## My Notes

TODO: Complete a second-pass manual reading and record comparisons with the closest papers in this notebook.
