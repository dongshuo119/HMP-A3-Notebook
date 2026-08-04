# UniMuMo: Unified Text, Music, and Motion Generation

> AAAI 2025 · Context-aware Human Motion Generation
>
> Status: Partially verified

## Paper Information

| Field | Content |
|---|---|
| Year | 2025 |
| Title | UniMuMo: Unified Text, Music, and Motion Generation |
| BibTeX | [View BibTeX](#bibtex) |
| Conference | AAAI |
| Journal | Not applicable (conference paper) |
| Benchmark | Not verified |
| Open Source | Yes |
| Main Authors | Han Yang; Kun Su; Yutong Zhang; Jiaben Chen; Kaizhi Qian; Gaowen Liu; Chuang Gan |
| Paper Link | [Official paper](https://doi.org/10.1609/aaai.v39i24.34752) |
| GitHub Link | [Official GitHub](https://github.com/hanyangclarence/UniMuMo) |
| Publication Status | Official publication record verified |
| Project Page | [Project page](https://hanyangclarence.github.io/unimumo) |
| Code / Resources | [Official GitHub](https://github.com/hanyangclarence/UniMuMo) |
| Open Access Copy | [Open-access full text](https://ojs.aaai.org/index.php/AAAI/article/download/34752/36907) |
| Dataset | Not verified |
| Task | Music/text-conditioned human dance generation |
| Input | Language / text; Music / rhythm |
| Output | Generated human dance motion sequence |
| Context Type | Language / text; Music / rhythm |
| Method Family | Transformer / attention |

## BibTeX

```bibtex
@article{Yang_2025, title={UniMuMo: Unified Text, Music, and Motion Generation}, volume={39}, ISSN={2159-5399}, url={http://dx.doi.org/10.1609/AAAI.V39I24.34752}, DOI={10.1609/aaai.v39i24.34752}, number={24}, journal={Proceedings of the AAAI Conference on Artificial Intelligence}, publisher={Association for the Advancement of Artificial Intelligence (AAAI)}, author={Yang, Han and Su, Kun and Zhang, Yutong and Chen, Jiaben and Qian, Kaizhi and Liu, Gaowen and Gan, Chuang}, year={2025}, month=Apr, pages={25615–25623} }
```

## Problem

To address the lack of time-synchronized data, we align unpaired music and motion data based on rhythmic patterns to leverage existing large-scale music-only and motion-only datasets. By converting music, motion, and text into token-based representation, our model bridges these modalities through a unified encoder-decoder transformer architecture.

## Key Idea

We introduce UniMuMo, a unified multimodal model capable of taking arbitrary text, music, and motion data as input conditions to generate outputs across all three modalities.

## Method

↑ Cider↑ BertScore↑Top1 Top3 @1 @4 Real 0.506 0.800 2.986 - - - - - MotionGPT (Jiang et al. For evaluation, we adopt Beats Coverage and Beats Hit (Zhu et al. In Table 3, we compare UniMuMo’s dance-generation capabilities with Bailando (Siyao et al.

## Contributions

Not verified

## Experiments

Not verified

## Limitations

Not verified

## Relevance to In-context Human Motion Prediction

Relevance: Core. The paper's central task is conditioned human motion generation, using language / text; music / rhythm as part of the problem setting.

## Relevance to Embodied Intelligence

The work provides motion priors or conditional generation machinery that can support embodied-agent simulation, planning, and human behavior modeling, although embodiment is not its only focus.

## My Notes

TODO: Complete a second-pass manual reading and record comparisons with the closest papers in this notebook.
