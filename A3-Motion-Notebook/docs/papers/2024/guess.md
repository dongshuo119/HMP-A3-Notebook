# GUESS: GradUally Enriching SyntheSis for Text-Driven Human Motion Generation

> IEEE TVCG 2024 · Context-aware Human Motion Generation
>
> Status: Partially verified

## Paper Information

| Field | Content |
|---|---|
| Year | 2024 |
| Title | GUESS: GradUally Enriching SyntheSis for Text-Driven Human Motion Generation |
| BibTeX | [View BibTeX](#bibtex) |
| Conference | Not applicable (journal article) |
| Journal | IEEE Transactions on Visualization and Computer Graphics |
| Benchmark | HumanML3D; KIT-ML; HumanAct12; UESTC |
| Open Source | Yes |
| Main Authors | Xuehao Gao; Yang Yang; Zhenyu Xie; Shaoyi Du; Zhongqian Sun; Yang Wu |
| Paper Link | [Official paper](https://doi.org/10.1109/tvcg.2024.3352002) |
| GitHub Link | [Official GitHub](https://github.com/Xuehao-Gao/GUESS) |
| Publication Status | Official publication record verified |
| Project Page | Not verified |
| Code / Resources | [Official GitHub](https://github.com/Xuehao-Gao/GUESS) |
| Open Access Copy | [arXiv](https://arxiv.org/abs/2401.02142) |
| Dataset | HumanML3D; KIT-ML; HumanAct12; UESTC |
| Task | Conditional human motion generation or synthesis |
| Input | Language / text; Object / human-object interaction; Social / multi-person interaction |
| Output | Generated 3D human motion sequence |
| Context Type | Language / text; Object / human-object interaction; Social / multi-person interaction |
| Method Family | Diffusion model |

## BibTeX

```bibtex
@article{Gao_2024, title={GUESS: GradUally Enriching SyntheSis for Text-Driven Human Motion Generation}, volume={30}, ISSN={2160-9306}, url={http://dx.doi.org/10.1109/tvcg.2024.3352002}, DOI={10.1109/tvcg.2024.3352002}, number={12}, journal={IEEE Transactions on Visualization and Computer Graphics}, publisher={Institute of Electrical and Electronics Engineers (IEEE)}, author={Gao, Xuehao and Yang, Yang and Xie, Zhenyu and Du, Shaoyi and Sun, Zhongqian and Wu, Yang}, year={2024}, month=Dec, pages={7518–7530} }
```

## Problem

The strategy sets up generation objectives by grouping body joints of detailed skeletons in close semantic proximity together and then replacing each of such joint group with a single body-part node. Such an operation recursively abstracts a human pose to coarser and coarser skeletons at multiple granularity levels.

## Key Idea

In this paper, we propose a novel cascaded diffusion-based generative framework for text-driven human motion synthesis, which exploits a strategy named GradUally Enriching SyntheSis (GUESS as its abbreviation).

## Method

FIDtrain, FIDtrain and Accuracy (ACC) reflect the fidelity of generated motions. Diversity and MModality for motion diversity within each action label. The best and second-best results are bolded and underlined, respectively. * denotes the performances of the re-training model based on its official source codes.

## Contributions

Not verified

## Experiments

Following previous methods [8], [19], we adopt five widely used quantitative metrics for text-to-motion synthesis methods to evaluate their performances. Besides, we further adopt Accuracy as one of the quantitative evaluation metrics for action-to-motion synthesis [8]. These evaluation metrics analyze the performances of synthesis methods from the fidelity, text-motion consistency and diversity of their generated samples: • R-Precision reflects the text-motion matching accuracy in the retrieval.

## Limitations

Not verified

## Relevance to In-context Human Motion Prediction

Relevance: Core. The paper's central task is conditioned human motion generation, using language / text; object / human-object interaction; social / multi-person interaction as part of the problem setting.

## Relevance to Embodied Intelligence

The explicit scene, object, interaction, sensing, or control condition makes this work directly relevant to embodied agents that must anticipate or synthesize physically situated human behavior.

## My Notes

TODO: Complete a second-pass manual reading and record comparisons with the closest papers in this notebook.
