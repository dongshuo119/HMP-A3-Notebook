# MotionLab: Unified Human Motion Generation and Editing via the Motion-Condition-Motion Paradigm

> ICCV 2025 · Context-aware Human Motion Generation
>
> Status: Partially verified

## Paper Information

| Field | Content |
|---|---|
| Year | 2025 |
| Title | MotionLab: Unified Human Motion Generation and Editing via the Motion-Condition-Motion Paradigm |
| BibTeX | [View BibTeX](#bibtex) |
| Conference | ICCV |
| Journal | Not applicable (conference paper) |
| Benchmark | HumanML3D |
| Open Source | Not verified |
| Main Authors | Ziyan Guo; Zeyu Hu; De Wen Soh; Na Zhao |
| Paper Link | [Official paper](https://doi.org/10.1109/iccv51701.2025.01287) |
| GitHub Link | Not verified |
| Publication Status | Official publication record verified |
| Project Page | [Project page](https://diouo.github.io/motionlab.github.io/) |
| Code / Resources | [Project page](https://diouo.github.io/motionlab.github.io/) |
| Open Access Copy | [arXiv](https://arxiv.org/abs/2502.02358) |
| Dataset | HumanML3D |
| Task | Conditional human motion generation or synthesis |
| Input | Language / text; Trajectory / kinematic control |
| Output | Generated 3D human motion sequence |
| Context Type | Language / text; Trajectory / kinematic control |
| Method Family | Transformer / attention; Flow-based model |

## BibTeX

```bibtex
@inproceedings{Guo_2025, title={MotionLab: Unified Human Motion Generation and Editing via the Motion-Condition-Motion Paradigm}, url={http://dx.doi.org/10.1109/ICCV51701.2025.01287}, DOI={10.1109/iccv51701.2025.01287}, booktitle={2025 IEEE/CVF International Conference on Computer Vision (ICCV)}, publisher={IEEE}, author={Guo, Ziyan and Hu, Zeyu and Soh, De Wen and Zhao, Na}, year={2025}, month=Oct, pages={13869–13879} }
```

## Problem

Human motion generation and editing are key components of computer vision. However, current approaches in this field tend to offer isolated solutions tailored to specific tasks, which can be inefficient and impractical for real-world applications.

## Key Idea

To address these limitations and provide a versatile, unified framework capable of handling both human motion generation and editing, we introduce a novel paradigm: \textbf{Motion-Condition-Motion}, which enables the unified formulation of diverse tasks with three concepts: source motion, condition, and target motion.

## Method

Not verified

## Contributions

Not verified

## Experiments

To evaluate the text-based motion generation, the trajectory-based motion generation, motion in-between, and motion style transfer, we leverage the HumanML3D [21] dataset, which comprises 14,646 motions and 44,970 mo- tion annotations. To evaluate the text-based and trajectory- based motion editing, we utilize MotionFix [6] dataset, which is the first dataset for text-based human motion edit- ing, including 6,730 motion pairs. Qualitative results on the text-based motion generation.

## Limitations

Not verified

## Relevance to In-context Human Motion Prediction

Relevance: Core. The paper's central task is conditioned human motion generation, using language / text; trajectory / kinematic control as part of the problem setting.

## Relevance to Embodied Intelligence

The explicit scene, object, interaction, sensing, or control condition makes this work directly relevant to embodied agents that must anticipate or synthesize physically situated human behavior.

## My Notes

TODO: Complete a second-pass manual reading and record comparisons with the closest papers in this notebook.
