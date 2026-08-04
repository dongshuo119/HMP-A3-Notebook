# MotionBind: Multi-Modal Human Motion Alignment for Retrieval, Recognition, and Generation

> NeurIPS 2025 · Context-aware Human Motion Generation
>
> Status: Partially verified

## Paper Information

| Field | Content |
|---|---|
| Year | 2025 |
| Title | MotionBind: Multi-Modal Human Motion Alignment for Retrieval, Recognition, and Generation |
| BibTeX | [View BibTeX](#bibtex) |
| Conference | NeurIPS |
| Journal | Not applicable (conference paper) |
| Benchmark | AMASS; HumanML3D; KIT-ML; BABEL; AIST++ |
| Open Source | Yes |
| Main Authors | Kaleab Alemayehu Kinfu; René Vidal |
| Paper Link | [Official paper](http://papers.nips.cc/paper_files/paper/2025/hash/b1762f00cbbcd8dd879ddcea41b04b91-Abstract-Conference.html) |
| GitHub Link | [Official GitHub](https://github.com/vidal-lab/MotionBind) |
| Publication Status | Official publication record verified |
| Project Page | Not verified |
| Code / Resources | [Official GitHub](https://github.com/vidal-lab/MotionBind) |
| Open Access Copy | [Available full text](https://proceedings.neurips.cc/paper_files/paper/2025/file/b1762f00cbbcd8dd879ddcea41b04b91-Paper-Conference.pdf) |
| Dataset | AMASS; HumanML3D; KIT-ML; BABEL; AIST++ |
| Task | Conditional human motion generation or synthesis |
| Input | Language / text; Speech / audio; Music / rhythm; Sparse sensor observations |
| Output | Generated 3D human motion sequence |
| Context Type | Language / text; Speech / audio; Music / rhythm; Sparse sensor observations |
| Method Family | Retrieval / memory model |

## BibTeX

```bibtex
@inproceedings{Kaleab2025MotionBind,
  title = {MotionBind: Multi-Modal Human Motion Alignment for Retrieval, Recognition, and Generation},
  author = {Kinfu, Kaleab and Vidal, Rene},
  booktitle = {NeurIPS},
  year = {2025}
}
```

## Problem

Not verified — an official abstract or accessible full text was not available during this audit.

## Key Idea

Not verified — full-text review pending.

## Method

In this work, we present MotionBind, which learns a unified embedding space that aligns human motion with other modalities, specifically text, vision, and audio, to enable cross-modal retrieval, action recognition, and motion generation. In Section 3.1, we introduce a motion autoencoder architecture, MuTMoT, that encodes motion sequences into this shared space. In Section 3.2, we discuss the multi-modal representation learning paradigm.

## Contributions

Not verified

## Experiments

We evaluate our models on four core tasks: motion reconstruction, cross- modal retrieval, zero-shot action recognition, and text-to-motion synthesis. Training is conducted using four diverse human motion datasets: (1) AMASS [ 18, 33–55], a large-scale motion capture corpus rendered into synthetic video to create motion-video pairs; (2) HumanML3D [ 16] and (3) KIT-ML [17], both of which provide paired motion and text descriptions covering a wide range of everyday actions; and (4) AIST++ [19], a dance-oriented dataset offering synchronized motion, video, and audio for tri-modal alignment. All four datasets are used to train the MuTMoT encoder-decoder.

## Limitations

While our framework demonstrates strong performance across a range of benchmarks and introduces new capabilities for multi-modal motion generation, several limitations remain. First, although REALM supports any-to-motion generation by conditioning on embeddings from arbitrary modalities (e.g., text, image, video, audio), our quantitative evaluation is currently limited to text-conditioned generation. As such, while qualitative results indicate promising generalization, further work is needed to robustly assess generation quality across all modalities.

## Relevance to In-context Human Motion Prediction

Relevance: Core. The paper's central task is conditioned human motion generation, using language / text; speech / audio; music / rhythm; sparse sensor observations as part of the problem setting.

## Relevance to Embodied Intelligence

The explicit scene, object, interaction, sensing, or control condition makes this work directly relevant to embodied agents that must anticipate or synthesize physically situated human behavior.

## My Notes

TODO: Complete a second-pass manual reading and record comparisons with the closest papers in this notebook.
