# Interactive Character Control with Auto-Regressive Motion Diffusion Models

> ACM TOG 2024 · Context-aware Human Motion Generation
>
> Status: Partially verified

## Paper Information

| Field | Content |
|---|---|
| Year | 2024 |
| Title | Interactive Character Control with Auto-Regressive Motion Diffusion Models |
| BibTeX | [View BibTeX](#bibtex) |
| Conference | Not applicable (journal article) |
| Journal | ACM Transactions on Graphics |
| Benchmark | AMASS; LaFAN1 |
| Open Source | Not verified |
| Main Authors | Yi Shi; Jingbo Wang; Xuekun Jiang; Bingkun Lin; Bo Dai; Xue Bin Peng |
| Paper Link | [Official paper](https://doi.org/10.1145/3658140) |
| GitHub Link | Not verified |
| Publication Status | Official publication record verified |
| Project Page | Not verified |
| Code / Resources | Not verified |
| Open Access Copy | [arXiv](https://arxiv.org/abs/2306.00416) |
| Dataset | AMASS; LaFAN1 |
| Task | Conditional human motion generation or synthesis |
| Input | Trajectory / kinematic control |
| Output | Generated 3D human motion sequence |
| Context Type | Trajectory / kinematic control |
| Method Family | Diffusion model; Autoregressive model; Policy / reinforcement learning |

## BibTeX

```bibtex
@article{Shi_2024, title={Interactive Character Control with Auto-Regressive Motion Diffusion Models}, volume={43}, ISSN={1557-7368}, url={http://dx.doi.org/10.1145/3658140}, DOI={10.1145/3658140}, number={4}, journal={ACM Transactions on Graphics}, publisher={Association for Computing Machinery (ACM)}, author={Shi, Yi and Wang, Jingbo and Jiang, Xuekun and Lin, Bingkun and Dai, Bo and Peng, Xue Bin}, year={2024}, month=July, pages={1–14} }
```

## Problem

Real-time character control is an essential component for interactive experiences, with a broad range of applications, including physics simulations, video games, and virtual reality. The success of diffusion models for image synthesis has led to the use of these models for motion synthesis.

## Key Idea

To enable real-time motion synthesis with diffusion model that allows time-varying controls, we propose A-MDM (Auto-regressive Motion Diffusion Model).

## Method

Our framework consists of two key components: a base autore- gressive motion diffusion model (A-MDM) and an RL-based task controller. The base A-MDM predicts the next motion frame𝑓 based on the previous frame𝑓− 1. This auto-regressive procedure enables A-MDM to synthesize long motions of arbitrary lengths in real time.

## Contributions

Not verified

## Experiments

In this section, we demonstrate the effectiveness of our A-MDM framework. First, we evaluate the base A-MDM model and compare it with prior VAE-based models (e.g., MVAE and HuMoR [Ling et al. Interactive Character Control with Auto-Regressive Motion Diffusion Models • 143:9 Table 1.

## Limitations

Not verified

## Relevance to In-context Human Motion Prediction

Relevance: Core. The paper's central task is conditioned human motion generation, using trajectory / kinematic control as part of the problem setting.

## Relevance to Embodied Intelligence

The explicit scene, object, interaction, sensing, or control condition makes this work directly relevant to embodied agents that must anticipate or synthesize physically situated human behavior.

## My Notes

TODO: Complete a second-pass manual reading and record comparisons with the closest papers in this notebook.
