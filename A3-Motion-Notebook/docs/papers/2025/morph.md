# Morph: a Motion-Free Physics Optimization Framework for Human Motion Generation

> ICCV 2025 · Context-aware Human Motion Generation
>
> Status: Partially verified

## Paper Information

| Field | Content |
|---|---|
| Year | 2025 |
| Title | Morph: a Motion-Free Physics Optimization Framework for Human Motion Generation |
| BibTeX | [View BibTeX](#bibtex) |
| Conference | ICCV |
| Journal | Not applicable (conference paper) |
| Benchmark | HumanML3D; AIST++ |
| Open Source | Not verified |
| Main Authors | Zhuo Li; Mingshuang Luo; Ruibing Hou; Xin Zhao; Hao Liu; Hong Chang; Zimo Liu; Chen Li |
| Paper Link | [Official paper](https://doi.org/10.1109/iccv51701.2025.01353) |
| GitHub Link | Not verified |
| Publication Status | Official publication record verified |
| Project Page | [Project page](https://interestingzhuo.github.io/Morph-Page/) |
| Code / Resources | [Project page](https://interestingzhuo.github.io/Morph-Page/) |
| Open Access Copy | [arXiv](https://arxiv.org/abs/2411.14951) |
| Dataset | HumanML3D; AIST++ |
| Task | Conditional human motion generation or synthesis |
| Input | Language / text; Music / rhythm; Trajectory / kinematic control |
| Output | Generated 3D human motion sequence |
| Context Type | Language / text; Music / rhythm; Trajectory / kinematic control |
| Method Family | Not verified |

## BibTeX

```bibtex
@inproceedings{Li_2025, title={Morph: a Motion-Free Physics Optimization Framework for Human Motion Generation}, url={http://dx.doi.org/10.1109/ICCV51701.2025.01353}, DOI={10.1109/iccv51701.2025.01353}, booktitle={2025 IEEE/CVF International Conference on Computer Vision (ICCV)}, publisher={IEEE}, author={Li, Zhuo and Luo, Mingshuang and Hou, Ruibing and Zhao, Xin and Liu, Hao and Chang, Hong and Liu, Zimo and Li, Chen}, year={2025}, month=Oct, pages={14580–14589} }
```

## Problem

Human motion generation has been widely studied due to its crucial role in areas such as digital humans and humanoid robot control. However, many current motion generation approaches disregard physics constraints, frequently resulting in physically implausible motions with pronounced artifacts such as floating and foot sliding.

## Key Idea

In this paper, we propose \textbf{Morph}, a \textbf{Mo}tion-F\textbf{r}ee \textbf{ph}ysics optimization framework, consisting of a Motion Generator and a Motion Physics Refinement module, for enhancing physical plausibility without relying on expensive real-world motion data.

## Method

To enhance physical plausibility of motion generation without relying on real motion data, we propose a motion- free physics optimization framework, namely morph. Morph employs a two-stage training process. In the first stage, the Motion Generator produces large-scale noisy mo- tion data (Sec.

## Contributions

- Our contributions can be summarized as follows: • We introduce Morph, a generalizable framework that enhances physical plausibility and generation quality across various motion generation models and tasks.
- Also, a prior reward module is designed to acceler- ate imitation learning and improve motion realism in physics simulation. • We design a collaborative training paradigm, where the Motion Generator provides large-scale synthetic mo- tion data to enhance the Motion Physics Refinement module, which, in turn, refines motion quality by feed- ing back physics-refined data. • Extensive qualitative and quantitative experiments demonstrate that Morph achieves competitive physical plausibility and generation performance.
- Related Work Human Motion Generation.Motion generation is a long- history task that can be conditioned on various signals, such as text description, music and action [2, 4, 6, 7, 16, 17, 31, 32, 35, 39, 42, 45, 50].

## Experiments

We evaluate the adaptability of our Morph with differ- ent motion generators, including MDM [33], Motiondif- fuse [43], T2M-GPT [42], and MoMask [6]. For example, after integrat- ing Morph with MDM (Morph-MDM), RTOP-1 metric im- proved by0.016. In terms of physical plausibility metrics, penetration dropped to zero, float decreased from17.502 to2.258, and skate reduced from3.540to0.016.

## Limitations

Not verified

## Relevance to In-context Human Motion Prediction

Relevance: Core. The paper's central task is conditioned human motion generation, using language / text; music / rhythm; trajectory / kinematic control as part of the problem setting.

## Relevance to Embodied Intelligence

The explicit scene, object, interaction, sensing, or control condition makes this work directly relevant to embodied agents that must anticipate or synthesize physically situated human behavior.

## My Notes

TODO: Complete a second-pass manual reading and record comparisons with the closest papers in this notebook.
