# Diffusion Implicit Policy for Unpaired Scene-aware Motion Synthesis

> AAAI 2026 · Context-aware Human Motion Generation
>
> Status: Partially verified

## Paper Information

| Field | Content |
|---|---|
| Year | 2026 |
| Title | Diffusion Implicit Policy for Unpaired Scene-aware Motion Synthesis |
| BibTeX | [View BibTeX](#bibtex) |
| Conference | AAAI |
| Journal | Not applicable (conference paper) |
| Benchmark | AMASS; HumanML3D; BABEL; PROX; SAMP |
| Open Source | Yes |
| Main Authors | Jingyu Gong; Chong Zhang; Fengqi Liu; Ke Fan; Qianyu Zhou; Xin Tan; Zhizhong Zhang; Yuan Xie |
| Paper Link | [Official paper](https://doi.org/10.1609/aaai.v40i6.42422) |
| GitHub Link | [Official GitHub](https://github.com/jingyugong/DIP) |
| Publication Status | Official 2026 publication record verified; 2026 coverage remains open for later additions |
| Project Page | Not verified |
| Code / Resources | [Official GitHub](https://github.com/jingyugong/DIP) |
| Open Access Copy | [Available full text](https://ojs.aaai.org/index.php/AAAI/article/download/42422/46383) |
| Dataset | AMASS; HumanML3D; BABEL; PROX; SAMP |
| Task | Scene-conditioned human motion generation |
| Input | 3D scene / environment; Social / multi-person interaction |
| Output | Generated 3D human motion sequence |
| Context Type | 3D scene / environment; Social / multi-person interaction |
| Method Family | Diffusion model; Policy / reinforcement learning |

## BibTeX

```bibtex
@article{Gong_2026, title={Diffusion Implicit Policy for Unpaired Scene-aware Motion Synthesis}, volume={40}, ISSN={2159-5399}, url={http://dx.doi.org/10.1609/AAAI.V40I6.42422}, DOI={10.1609/aaai.v40i6.42422}, number={6}, journal={Proceedings of the AAAI Conference on Artificial Intelligence}, publisher={Association for the Advancement of Artificial Intelligence (AAAI)}, author={Gong, Jingyu and Zhang, Chong and Liu, Fengqi and Fan, Ke and Zhou, Qianyu and Tan, Xin and Zhang, Zhizhong and Xie, Yuan}, year={2026}, month=Mar, pages={4257–4265} }
```

## Problem

Scene-aware motion synthesis has been widely researched recently due to its numerous applications. Prevailing methods rely heavily on paired motion-scene data, while it is difficult to generalize to diverse scenes when trained only on a few specific ones.

## Key Idea

Thus, we propose a unified framework, termed Diffusion Implicit Policy (DIP), for scene-aware motion synthesis, where paired motion-scene data are no longer necessary.

## Method

Preliminary Motion Representation. For human motion, we take the SMPL-X model (Pavlakos et al. Here, we mainly consider the global orienta- tion represented in axis-angle θglobal ∈ R3, joint rotation in axis-angle θj=1:21 ∈ R63 and the translation τ ∈ R3.

## Contributions

- Related Work Human Scene Interaction.
- Generating realistic and plau- sible human-scene interactions has been widely ex- plored (Savva et al.
- 2020a) modeled the prox- imity based on the distance between human body and 3D scene during interaction synthesis.

## Experiments

Here, we use captured motion data with action/description labels from AMASS (Mahmood et al. We evaluate the performance in both syn- thesized scenes and real scanned scenes. As for real scanned scenes from PROX (Hassan et al.

## Limitations

Not verified

## Relevance to In-context Human Motion Prediction

Relevance: Core. The paper's central task is conditioned human motion generation, using 3d scene / environment; social / multi-person interaction as part of the problem setting.

## Relevance to Embodied Intelligence

The explicit scene, object, interaction, sensing, or control condition makes this work directly relevant to embodied agents that must anticipate or synthesize physically situated human behavior.

## My Notes

TODO: Complete a second-pass manual reading and record comparisons with the closest papers in this notebook.
