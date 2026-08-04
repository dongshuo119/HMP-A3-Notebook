# You Think, You ACT: the New Task of Arbitrary Text to Motion Generation

> ICCV 2025 · Context-aware Human Motion Generation
>
> Status: Partially verified

## Paper Information

| Field | Content |
|---|---|
| Year | 2025 |
| Title | You Think, You ACT: the New Task of Arbitrary Text to Motion Generation |
| BibTeX | [View BibTeX](#bibtex) |
| Conference | ICCV |
| Journal | Not applicable (conference paper) |
| Benchmark | HumanML3D |
| Open Source | Not verified |
| Main Authors | Runqi Wang; Caoyuan Ma; Guopeng Li; Hanrui Xu; Yuke Li; Zheng Wang |
| Paper Link | [Official paper](https://doi.org/10.1109/iccv51701.2025.01117) |
| GitHub Link | Not verified |
| Publication Status | Official publication record verified |
| Project Page | Not verified |
| Code / Resources | Not verified |
| Open Access Copy | [arXiv](https://arxiv.org/abs/2404.14745) |
| Dataset | HumanML3D |
| Task | Conditional human motion generation or synthesis |
| Input | Language / text; 3D scene / environment; Social / multi-person interaction |
| Output | Generated 3D human motion sequence |
| Context Type | Language / text; 3D scene / environment; Social / multi-person interaction |
| Method Family | Transformer / attention; LLM-assisted reasoning |

## BibTeX

```bibtex
@inproceedings{Wang_2025, title={You Think, You ACT: the New Task of Arbitrary Text to Motion Generation}, url={http://dx.doi.org/10.1109/ICCV51701.2025.01117}, DOI={10.1109/iccv51701.2025.01117}, booktitle={2025 IEEE/CVF International Conference on Computer Vision (ICCV)}, publisher={IEEE}, author={Wang, Runqi and Ma, Caoyuan and Li, Guopeng and Xu, Hanrui and Li, Yuke and Wang, Zheng}, year={2025}, month=Oct, pages={12012–12022} }
```

## Problem

Text to Motion aims to generate human motions from texts. Existing settings rely on limited Action Texts that include action labels, which limits flexibility and practicability in scenarios difficult to describe directly.

## Key Idea

Secondly, we propose a simple yet effective framework that extracts action instructions from arbitrary texts and subsequently generates motions.

## Method

Given scene or action textual inputs, our objective is to gen- erate realistic human motion X = [x1, x2, . . . , xt], where each xt ∈ Rd represents the human body pose in a d- dimensional space at frame t. In the Think phase, we harness the emergent properties of large language models to delineate the underlying relationship between textual inputs and action instructions. We synthe- size the temporal sequence modeling capabilities inherent in Transformers with discrete action representations, estab- lishing a bijective relationship in the Act phase.

## Contributions

- Our main contributions can be summarized as follows: • We first introduce the Arbitrary Text to Motion task, ex- panding existing Text to Motion to more practical and flexible settings. • We construct a comprehensive dataset with over 135k Scene Text annotations and propose a novel think-and-act framework to infer potential motions from Scene Texts. • We develop a multi-solution evaluation metric system.

## Experiments

Not verified

## Limitations

Not verified

## Relevance to In-context Human Motion Prediction

Relevance: Core. The paper's central task is conditioned human motion generation, using language / text; 3d scene / environment; social / multi-person interaction as part of the problem setting.

## Relevance to Embodied Intelligence

The explicit scene, object, interaction, sensing, or control condition makes this work directly relevant to embodied agents that must anticipate or synthesize physically situated human behavior.

## My Notes

TODO: Complete a second-pass manual reading and record comparisons with the closest papers in this notebook.
