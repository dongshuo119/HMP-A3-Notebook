# Unified Multi-Modal Interactive and Reactive 3D Motion Generation via Rectified Flow

> ICLR 2026 · In-context Human Motion Prediction
>
> Status: Partially verified — official ICLR 2026 proceedings

## Paper Information

| Field | Content |
|---|---|
| Year | 2026 |
| Title | Unified Multi-Modal Interactive and Reactive 3D Motion Generation via Rectified Flow |
| BibTeX | [View official BibTeX](#bibtex) |
| Conference | ICLR |
| Journal | Not applicable (conference paper) |
| Benchmark | Interactive, reactive, and multimodal benchmarks; names not verified |
| Open Source | Not verified |
| Main Authors | Prerit Gupta; Shourya Verma; Ananth Grama; Aniket Bera |
| Paper Link | [ICLR Proceedings](https://proceedings.iclr.cc/paper_files/paper/2026/hash/a783b0bba6aaa9dec34aca6500d853cd-Abstract-Conference.html) |
| GitHub Link | Not verified |
| Project Page | Not verified |
| Code / Resources | Not verified |
| Dataset | Interactive, reactive, and multimodal benchmarks; names not verified |
| Task | Interactive and reactive two-person 3D motion generation |
| Input | Text, music, and/or prior motion sequences |
| Output | Coordinated two-person 3D motion |
| Context Type | Other person's motion; language; music; retrieved exemplars |
| Method Family | Retrieval-augmented contrastive rectified flow |

## BibTeX

```bibtex
@inproceedings{ICLR2026_a783b0bb,
 author = {Gupta, Prerit and Verma, Shourya and Grama, Ananth and Bera, Aniket},
 booktitle = {International Conference on Learning Representations},
 editor = {C. Vondrick and B. Hariharan and C. Raffel and L. Pinto and D. Yang and A. Faust},
 pages = {102372--102391},
 title = {Unified Multi-Modal Interactive and Reactive 3D Motion Generation via Rectified Flow},
 url = {https://proceedings.iclr.cc/paper_files/paper/2026/file/a783b0bba6aaa9dec34aca6500d853cd-Paper-Conference.pdf},
 volume = {2026},
 year = {2026}
}
```

## Problem
One model must switch between jointly generating an interaction and reacting to an observed person under several modalities without slow diffusion sampling.

## Key Idea

Use rectified flow for efficient sampling and retrieve motion exemplars using decomposed text relations or music features.

## Method

DualFlow conditions rectified flow on text, music, and prior motion. Its RAG module retrieves exemplars, a contrastive flow objective sharpens condition alignment, and synchronization loss coordinates both people.

## Contributions

- Unifies interactive and reactive two-person generation.
- Supports text, music, and prior-motion conditions.
- Combines retrieval augmentation with efficient rectified-flow sampling.

## Experiments

The paper evaluates interaction, reaction, and multimodal benchmarks for quality, responsiveness, semantic fidelity, and synchronization.

## Limitations

Benchmark names, code, and generalization beyond two people remain to be verified.

## Relevance to In-context Human Motion Prediction

Relevance: Core for the reactive setting because prior partner motion directly conditions the response.

## Relevance to Embodied Intelligence

Multi-modal reaction supports socially expressive robots and interactive agents.

## My Notes

TODO: Separate deterministic sampling efficiency from diversity evaluation.
