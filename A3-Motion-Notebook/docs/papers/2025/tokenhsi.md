# TokenHSI: Unified Synthesis of Physical Human-Scene Interactions through Task Tokenization

> CVPR 2025 · Context-aware Human Motion Generation
>
> Status: Partially verified

## Paper Information

| Field | Content |
|---|---|
| Year | 2025 |
| Title | TokenHSI: Unified Synthesis of Physical Human-Scene Interactions through Task Tokenization |
| BibTeX | [View BibTeX](#bibtex) |
| Conference | CVPR |
| Journal | Not applicable (conference paper) |
| Benchmark | Not verified |
| Open Source | Not verified |
| Main Authors | Liang Pan; Zeshi Yang; Zhiyang Dou; Wenjia Wang; Buzhen Huang; Bo Dai; Taku Komura; Jingbo Wang |
| Paper Link | [Official paper](https://openaccess.thecvf.com/content/CVPR2025/html/Pan_TokenHSI_Unified_Synthesis_of_Physical_Human-Scene_Interactions_through_Task_Tokenization_CVPR_2025_paper.html) |
| GitHub Link | Not verified |
| Publication Status | Official publication record verified |
| Project Page | [Project page](https://liangpan99.github.io/TokenHSI/) |
| Code / Resources | [Project page](https://liangpan99.github.io/TokenHSI/) |
| Open Access Copy | [arXiv](https://arxiv.org/abs/2503.19901) |
| Dataset | Not verified |
| Task | Scene-conditioned human motion generation |
| Input | 3D scene / environment; Object / human-object interaction; Social / multi-person interaction; Trajectory / kinematic control |
| Output | Generated 3D human motion sequence |
| Context Type | 3D scene / environment; Object / human-object interaction; Social / multi-person interaction; Trajectory / kinematic control |
| Method Family | Transformer / attention; Policy / reinforcement learning |

## BibTeX

```bibtex
@inproceedings{Pan_2025, title={TokenHSI: Unified Synthesis of Physical Human-Scene Interactions through Task Tokenization}, url={http://dx.doi.org/10.1109/CVPR52734.2025.00506}, DOI={10.1109/cvpr52734.2025.00506}, booktitle={2025 IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR)}, publisher={IEEE}, author={Pan, Liang and Yang, Zeshi and Dou, Zhiyang and Wang, Wenjia and Huang, Buzhen and Dai, Bo and Komura, Taku and Wang, Jingbo}, year={2025}, month=June, pages={5379–5391} }
```

## Problem

Synthesizing diverse and physically plausible Human-Scene Interactions (HSI) is pivotal for both computer animation and embodied AI. Despite encouraging progress, current methods mainly focus on developing separate controllers, each specialized for a specific interaction task.

## Key Idea

To address this issue, we present TokenHSI, a single, unified transformer-based policy capable of multi-skill unification and flexible adaptation.

## Method

Overview We focus on developing a physical HSI controller capable of unifying diverse interaction skills within a single net- work. Beyond versatility, the unified controller should be able to generalize learned skills to novel settings, enabling it to tackle more complex HSI tasks. Driven by these goals, we propose a transformer-based policy network, leveraging its support for variable length inputs to seamlessly incorpo- rate an arbitrary number of tasks.

## Contributions

Not verified

## Experiments

We conduct extensive experiments to evaluate foundational skill learning and policy adaptation. E of the supplementary, we further demonstrate our approach’s ex- tensibility through introducing novel out-of-domain skills. Evaluation on Foundational Skill Learning Experimental Setup.

## Limitations

Not verified

## Relevance to In-context Human Motion Prediction

Relevance: Core. The paper's central task is conditioned human motion generation, using 3d scene / environment; object / human-object interaction; social / multi-person interaction; trajectory / kinematic control as part of the problem setting.

## Relevance to Embodied Intelligence

The explicit scene, object, interaction, sensing, or control condition makes this work directly relevant to embodied agents that must anticipate or synthesize physically situated human behavior.

## My Notes

TODO: Complete a second-pass manual reading and record comparisons with the closest papers in this notebook.
