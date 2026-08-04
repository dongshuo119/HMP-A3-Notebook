# OmniControl: Control Any Joint at Any Time for Human Motion Generation

> ICLR 2024 · Context-aware Human Motion Generation
>
> Status: Partially verified

## Paper Information

| Field | Content |
|---|---|
| Year | 2024 |
| Title | OmniControl: Control Any Joint at Any Time for Human Motion Generation |
| BibTeX | [View official BibTeX](#bibtex) |
| Conference | ICLR |
| Journal | Not applicable (conference paper) |
| Benchmark | HumanML3D; KIT-ML |
| Open Source | Not verified |
| Main Authors | Yiming Xie; Varun Jampani; Lei Zhong; Deqing Sun; Huaizu Jiang |
| Paper Link | [ICLR Proceedings](https://proceedings.iclr.cc/paper_files/paper/2024/hash/7827290f07f63485b849b66cfa3e5dd0-Abstract-Conference.html) |
| GitHub Link | Not verified |
| Project Page | [Official project page](https://neu-vi.github.io/omnicontrol/) |
| Code / Resources | Not verified |
| Dataset | HumanML3D; KIT-ML |
| Task | Text-to-motion with sparse joint-level spatial control |
| Input | Text and arbitrary joint positions at arbitrary times |
| Output | Full 3D human motion satisfying spatial constraints |
| Context Type | Language; spatial key constraints |
| Method Family | Guided motion diffusion |

## BibTeX

```bibtex
@inproceedings{ICLR2024_7827290f,
 author = {Xie, Yiming and Jampani, Varun and Zhong, Lei and Sun, Deqing and Jiang, Huaizu},
 booktitle = {International Conference on Learning Representations},
 editor = {B. Kim and Y. Yue and S. Chaudhuri and K. Fragkiadaki and M. Khan and Y. Sun},
 pages = {28176--28194},
 title = {OmniControl: Control Any Joint at Any Time for Human Motion Generation},
 url = {https://proceedings.iclr.cc/paper_files/paper/2024/file/7827290f07f63485b849b66cfa3e5dd0-Paper-Conference.pdf},
 volume = {2024},
 year = {2024}
}
```

## Problem
Earlier controlled generators often constrain only the pelvis and cannot express sparse constraints on arbitrary joints and times.

## Key Idea

Combine analytic spatial guidance for constraint accuracy with realism guidance that repairs the whole-body motion.

## Method

OmniControl augments a text-conditioned diffusion model with complementary spatial and realism guidance, using one model for different controlled joints and timestamps.

## Contributions

- Generalizes trajectory control from the root to arbitrary joints.
- Supports time-varying sparse spatial controls with one model.
- Balances geometric adherence and motion coherence through two guidance terms.

## Experiments

The paper evaluates pelvis and non-pelvis control on HumanML3D and KIT-ML.

## Limitations

Spatial constraints do not by themselves provide semantic scene or object understanding.

## Relevance to In-context Human Motion Prediction

Relevance: Peripheral. It is controlled generation, not forecasting.

## Relevance to Embodied Intelligence

Joint-level constraints provide a practical bridge from task-space goals to whole-body motion.

## My Notes

TODO: Compare analytic guidance with optimization-based motion editing.
