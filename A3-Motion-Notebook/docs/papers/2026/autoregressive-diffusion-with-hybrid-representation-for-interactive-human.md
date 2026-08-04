# Autoregressive Diffusion with Hybrid Representation for Interactive Human Motion Generation

> ACM TOG 2026 · Context-aware Human Motion Generation
>
> Status: Partially verified

## Paper Information

| Field | Content |
|---|---|
| Year | 2026 |
| Title | Autoregressive Diffusion with Hybrid Representation for Interactive Human Motion Generation |
| BibTeX | [View BibTeX](#bibtex) |
| Conference | Not applicable (journal article) |
| Journal | ACM Transactions on Graphics |
| Benchmark | HumanML3D; Bones Rigplay |
| Open Source | Not verified |
| Main Authors | Kaifeng Zhao; Mathis Petrovich; Haotian Zhang; Tingwu Wang; Siyu Tang; Davis Rempe |
| Paper Link | [Official paper](https://doi.org/10.1145/3811284) |
| GitHub Link | Not verified |
| Publication Status | Official 2026 publication record verified; 2026 coverage remains open for later additions |
| Project Page | [Project page](https://research.nvidia.com/labs/sil/projects/ardy/) |
| Code / Resources | [Project page](https://research.nvidia.com/labs/sil/projects/ardy/) |
| Open Access Copy | [arXiv](https://arxiv.org/abs/2607.08741) |
| Dataset | HumanML3D; Bones Rigplay |
| Task | Conditional human motion generation or synthesis |
| Input | Language / text; Trajectory / kinematic control |
| Output | Generated 3D human motion sequence |
| Context Type | Language / text; Trajectory / kinematic control |
| Method Family | Diffusion model; Transformer / attention; Autoregressive model |

## BibTeX

```bibtex
@article{Zhao_2026, title={Autoregressive Diffusion with Hybrid Representation for Interactive Human Motion Generation}, volume={45}, ISSN={1557-7368}, url={http://dx.doi.org/10.1145/3811284}, DOI={10.1145/3811284}, number={4}, journal={ACM Transactions on Graphics}, publisher={Association for Computing Machinery (ACM)}, author={Zhao, Kaifeng and Petrovich, Mathis and Zhang, Haotian and Wang, Tingwu and Tang, Siyu and Rempe, Davis}, year={2026}, month=July, pages={1–14} }
```

## Problem

Generating realistic 3D human motions in real-time within interactive applications is key for animation, simulation, and humanoid robotics. While recent offline motion generation approaches offer precise control via text and kinematic constraints, they lack the inference speed required for interactive settings.

## Key Idea

In this work, we introduce ARDY, a streaming generation framework that bridges this gap by enabling high-fidelity motion generation controllable via online text prompts and flexible kinematic constraints.

## Method

Our method ARDY consists of two main components: (1) a mo- tion tokenizer first learns a compact latent representation of body motion, and then (2) an autoregressive two-stage motion diffusion model learns to denoise hybrid motion tokens containing latent body motion and explicit root motion. Our hybrid representation is introduced in Sec. The autoregressive generation problem formulation is detailed in Sec.

## Contributions

- the key contributions of this paper are (1) a hy- brid latent-body explicit-root representation amenable to fast and controllable motion generation, (2) a two-stage autoregressive dif- fusion model featuring variable history context length and support for long-horizon kinematic constraint conditioning, including full- body keyframes, root waypoints, root paths, and end-effector po- sitions/rotations, and (3) an extensive evaluation on a large-scale, production-quality dataset that highlights the efficacy of our design choices and demonstrates the strong capabilities of ARDY.

## Experiments

Not verified

## Limitations

Not verified

## Relevance to In-context Human Motion Prediction

Relevance: Core. The paper's central task is conditioned human motion generation, using language / text; trajectory / kinematic control as part of the problem setting.

## Relevance to Embodied Intelligence

The explicit scene, object, interaction, sensing, or control condition makes this work directly relevant to embodied agents that must anticipate or synthesize physically situated human behavior.

## My Notes

TODO: Complete a second-pass manual reading and record comparisons with the closest papers in this notebook.
