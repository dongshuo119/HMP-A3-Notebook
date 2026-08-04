# MOST: Motion Diffusion Model for Rare Text via Temporal Clip Banzhaf Interaction

> IEEE TVCG 2025 · Context-aware Human Motion Generation
>
> Status: Partially verified

## Paper Information

| Field | Content |
|---|---|
| Year | 2025 |
| Title | MOST: Motion Diffusion Model for Rare Text via Temporal Clip Banzhaf Interaction |
| BibTeX | [View BibTeX](#bibtex) |
| Conference | Not applicable (journal article) |
| Journal | IEEE Transactions on Visualization and Computer Graphics |
| Benchmark | HumanML3D; KIT-ML |
| Open Source | Not verified |
| Main Authors | Yin Wang; Mu Li; Zhiying Leng; Frederick W. B. Li; Xiaohui Liang |
| Paper Link | [Official paper](https://doi.org/10.1109/tvcg.2025.3588509) |
| GitHub Link | Not verified |
| Publication Status | Official publication record verified |
| Project Page | Not verified |
| Code / Resources | Not verified |
| Open Access Copy | [arXiv](https://arxiv.org/abs/2507.06590) |
| Dataset | HumanML3D; KIT-ML |
| Task | Interactive multi-person human motion generation |
| Input | Language / text; Social / multi-person interaction |
| Output | Generated 3D human motion sequence |
| Context Type | Language / text; Social / multi-person interaction |
| Method Family | Diffusion model; Retrieval / memory model |

## BibTeX

```bibtex
@article{Wang_2025, title={MOST: Motion Diffusion Model for Rare Text via Temporal Clip Banzhaf Interaction}, volume={31}, ISSN={2160-9306}, url={http://dx.doi.org/10.1109/tvcg.2025.3588509}, DOI={10.1109/tvcg.2025.3588509}, number={10}, journal={IEEE Transactions on Visualization and Computer Graphics}, publisher={Institute of Electrical and Electronics Engineers (IEEE)}, author={Wang, Yin and Li, Mu and Leng, Zhiying and Li, Frederick W. B. and Liang, Xiaohui}, year={2025}, month=Oct, pages={8994–9007} }
```

## Problem

While previous approaches struggle with coarse-grained matching and overlook important semantic cues due to motion redundancy, our key insight lies in leveraging fine-grained clip relationships to mitigate these issues. MOST's retrieval stage presents the first formulation of its kind - temporal clip Banzhaf interaction - which precisely quantifies textual-motion coherence at the clip level.

## Key Idea

We introduce MOST, a novel motion diffusion model via temporal clip Banzhaf interaction, aimed at addressing the persistent challenge of generating human motion from rare language prompts.

## Method

Not verified

## Contributions

- Text-Driven Motion Generation Text-driven human motion generation has captured widespread interest in the community, showcasing the vast potential for varied applications.
- Initial attempts involved learning to map text prompts and motion sequences into a sharedmulti-modalspace.AnearlystandoutisLanguage2Pose [28], which fused language and motion in the same embedding space.
- Following this, Ghosh [29] established hierarchical links between language and body, segmenting representations into discrete components for upper and lower body parts.

## Experiments

various advanced T2M retrieval models in Table I, including those mentioned in [21], [22], [54]. The evaluation protocol of “All” is the all test set that is used. The evaluation protocol of “Small Batches” is that we randomly select batches of JOURNAL OF LATEX CLASS FILES, VOL.

## Limitations

Not verified

## Relevance to In-context Human Motion Prediction

Relevance: Core. The paper's central task is conditioned human motion generation, using language / text; social / multi-person interaction as part of the problem setting.

## Relevance to Embodied Intelligence

The explicit scene, object, interaction, sensing, or control condition makes this work directly relevant to embodied agents that must anticipate or synthesize physically situated human behavior.

## My Notes

TODO: Complete a second-pass manual reading and record comparisons with the closest papers in this notebook.
