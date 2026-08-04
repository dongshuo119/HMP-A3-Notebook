# HuTuMotion: Human-Tuned Navigation of Latent Motion Diffusion Models with Minimal Feedback

> AAAI 2024 · Context-aware Human Motion Generation
>
> Status: Partially verified

## Paper Information

| Field | Content |
|---|---|
| Year | 2024 |
| Title | HuTuMotion: Human-Tuned Navigation of Latent Motion Diffusion Models with Minimal Feedback |
| BibTeX | [View BibTeX](#bibtex) |
| Conference | AAAI |
| Journal | Not applicable (conference paper) |
| Benchmark | HumanML3D |
| Open Source | Not verified |
| Main Authors | Gaoge Han; Shaoli Huang; Mingming Gong; Jinglei Tang |
| Paper Link | [Official paper](https://doi.org/10.1609/aaai.v38i3.27974) |
| GitHub Link | Not verified |
| Publication Status | Official publication record verified |
| Project Page | Not verified |
| Code / Resources | Not verified |
| Open Access Copy | [Available full text](https://ojs.aaai.org/index.php/AAAI/article/download/27974/27966) |
| Dataset | HumanML3D |
| Task | Conditional human motion generation or synthesis |
| Input | Human feedback / preference |
| Output | Generated 3D human motion sequence |
| Context Type | Human feedback / preference |
| Method Family | Diffusion model |

## BibTeX

```bibtex
@article{Han_2024, title={HuTuMotion: Human-Tuned Navigation of Latent Motion Diffusion Models with Minimal Feedback}, volume={38}, ISSN={2159-5399}, url={http://dx.doi.org/10.1609/AAAI.V38I3.27974}, DOI={10.1609/aaai.v38i3.27974}, number={3}, journal={Proceedings of the AAAI Conference on Artificial Intelligence}, publisher={Association for the Advancement of Artificial Intelligence (AAAI)}, author={Han, Gaoge and Huang, Shaoli and Gong, Mingming and Tang, Jinglei}, year={2024}, month=Mar, pages={2031–2039} }
```

## Problem

Unlike existing approaches that sample latent variables from a standard normal prior distribution, our method adapts the prior distribution to better suit the characteristics of the data, as indicated by human feedback, thus enhancing the quality of motion generation. Furthermore, our findings reveal that utilizing few-shot feedback can yield performance levels on par with those attained through extensive human feedback.

## Key Idea

We introduce HuTuMotion, an innovative approach for generating natural human motions that navigates latent motion diffusion models by leveraging few-shot human feedback.

## Method

Precision (top3) ↑ FID↓ MM Dist↓ Diversity↑ MModality Real 0.797±.002 0 .002±.000 2.974± .008 9.503± .065 - Seq2Seq (Plappert, Mandery, and Asfour 2018) 0.396±.002 11.75± .035 5.529± .007 6.223± .061 - LJ2P (Ahuja and Morency 2019) 0.486±.002 11.02± .046 5.296± .008 7.676± .058 - T2G(Bhattacharya et al. These metrics are evaluated by the motion encoder from (Guo et al. For each metric, we repeat the evaluation 20 times and report the average with a 95% confidence interval.

## Contributions

Not verified

## Experiments

In this section, we provide extensive experimental results. Firstly, we introduce the datasets, implementation details, and evaluation metrics. Secondly, we show the qualita- tive and quantitative results compared with the state-of-the- art approaches.

## Limitations

Not verified

## Relevance to In-context Human Motion Prediction

Relevance: Core. The paper's central task is conditioned human motion generation, using human feedback / preference as part of the problem setting.

## Relevance to Embodied Intelligence

The work provides motion priors or conditional generation machinery that can support embodied-agent simulation, planning, and human behavior modeling, although embodiment is not its only focus.

## My Notes

TODO: Complete a second-pass manual reading and record comparisons with the closest papers in this notebook.
