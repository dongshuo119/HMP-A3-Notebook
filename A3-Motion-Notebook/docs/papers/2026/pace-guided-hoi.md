# Unleashing Guidance Without Classifiers for Human-Object Interaction Animation

> ICLR 2026 · Context-aware Human Motion Generation
>
> Status: Partially verified — official ICLR 2026 proceedings

## Paper Information

| Field | Content |
|---|---|
| Year | 2026 |
| Title | Unleashing Guidance Without Classifiers for Human-Object Interaction Animation |
| BibTeX | [View official BibTeX](#bibtex) |
| Conference | ICLR |
| Journal | Not applicable (conference paper) |
| Benchmark | Real and synthetic object-geometry training data; names not verified |
| Open Source | Not verified |
| Main Authors | Ziyin Wang; Sirui Xu; Chuan Guo; Bing Zhou; Jiangshan Gong; Jian Wang; Yu-Xiong Wang; Liang-Yan Gui |
| Paper Link | [ICLR Proceedings](https://proceedings.iclr.cc/paper_files/paper/2026/hash/4c8ce3c63f6b66d6811c6d67c68e487b-Abstract-Conference.html) |
| GitHub Link | Not verified |
| Project Page | Not verified |
| Code / Resources | Not verified |
| Dataset | Real and synthetic object-geometry training data; names not verified |
| Task | Human-object interaction animation |
| Input | HOI condition and object geometry |
| Output | Joint human and object interaction motion |
| Context Type | Object geometry; cross-modal contact |
| Method Family | Asynchronous diffusion forcing |

## BibTeX

```bibtex
@inproceedings{ICLR2026_4c8ce3c6,
 author = {Wang, Ziyin and Xu, Sirui and guo, chuan and Zhou, Bing and Gong, Jiangshan and Wang, Jian and Wang, Yu-Xiong and Gui, Liang-Yan},
 booktitle = {International Conference on Learning Representations},
 editor = {C. Vondrick and B. Hariharan and C. Raffel and L. Pinto and D. Yang and A. Faust},
 pages = {46121--46141},
 title = {Unleashing Guidance Without Classifiers for Human-Object Interaction Animation},
 url = {https://proceedings.iclr.cc/paper_files/paper/2026/file/4c8ce3c63f6b66d6811c6d67c68e487b-Paper-Conference.pdf},
 volume = {2026},
 year = {2026}
}
```

## Problem
Contact quality often relies on handcrafted constraints or auxiliary classifiers that may not generalize to novel geometry.

## Key Idea

Denoise modalities at different rates so cleaner human/object components guide noisier ones through cross-attention.

## Method

The model factorizes modalities, assigns independent noise levels and schedules, and uses asynchronous diffusion forcing. Synthetic geometry augmentation promotes contact-semantic invariance.

## Contributions

- Derives guidance from denoising pace rather than a separate classifier.
- Produces contact-aware cross-modal signals.
- Improves generalization to unseen objects and tasks with geometry augmentation.

## Experiments

The paper evaluates contact fidelity, realism, and unseen-object/task generalization.

## Limitations

Datasets, public code, and conditioning fields remain to be verified.

## Relevance to In-context Human Motion Prediction

Relevance: Peripheral. It is HOI animation rather than forecasting.

## Relevance to Embodied Intelligence

Geometry-robust contact generation can broaden simulated manipulation data.

## My Notes

TODO: Compare asynchronous schedules with explicit physics/contact losses.
