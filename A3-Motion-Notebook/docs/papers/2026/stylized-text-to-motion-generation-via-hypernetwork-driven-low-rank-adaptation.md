# Stylized Text-to-Motion Generation via Hypernetwork-Driven Low-Rank Adaptation

> SIGGRAPH 2026 · Context-aware Human Motion Generation
>
> Status: Partially verified

## Paper Information

| Field | Content |
|---|---|
| Year | 2026 |
| Title | Stylized Text-to-Motion Generation via Hypernetwork-Driven Low-Rank Adaptation |
| BibTeX | [View BibTeX](#bibtex) |
| Conference | SIGGRAPH |
| Journal | Not applicable (conference paper) |
| Benchmark | HumanML3D |
| Open Source | Yes |
| Main Authors | Junhyuk Jeon; Seokhyeon Hong; Junyong Noh |
| Paper Link | [Official paper](https://doi.org/10.1145/3799902.3811205) |
| GitHub Link | [Official GitHub](https://github.com/junhyukjeon/style-salad) |
| Publication Status | Official 2026 publication record verified; 2026 coverage remains open for later additions |
| Project Page | Not verified |
| Code / Resources | [Official GitHub](https://github.com/junhyukjeon/style-salad) |
| Open Access Copy | [arXiv](https://arxiv.org/abs/2605.13333) |
| Dataset | HumanML3D |
| Task | Conditional human motion generation or synthesis |
| Input | Language / text; Music / rhythm; Trajectory / kinematic control |
| Output | Generated 3D human motion sequence |
| Context Type | Language / text; Music / rhythm; Trajectory / kinematic control |
| Method Family | Diffusion model |

## BibTeX

```bibtex
@inproceedings{Jeon_2026, series={SIGGRAPH Conference Papers ’26}, title={Stylized Text-to-Motion Generation via Hypernetwork-Driven Low-Rank Adaptation}, url={http://dx.doi.org/10.1145/3799902.3811205}, DOI={10.1145/3799902.3811205}, booktitle={Proceedings of the Special Interest Group on Computer Graphics and Interactive Techniques Conference Conference Papers}, publisher={ACM}, author={Jeon, Junhyuk and Hong, Seokhyeon and Noh, Junyong}, year={2026}, month=July, pages={1–10}, collection={SIGGRAPH Conference Papers ’26} }
```

## Problem

Text-driven motion diffusion models are capable of generating realistic human motions, but text alone often struggles to express fine-level nuances of motion, commonly referred to as style. Recent approaches have tackled this challenge by attaching a style injection mechanism to a pretrained text-driven diffusion model.

## Key Idea

We propose a lightweight style conditioning framework that dynamically modulates a pretrained diffusion model through hypernetwork-generated LoRA parameters.

## Method

We present a style conditioning framework that leverages a pre- trained text-to-motion diffusion model (SALAD [Hong et al. Given a reference motion sequence, a style adapter extracts a style embedding and injects it into the denoising process using a hypernetwork-driven LoRA mechanism, enabling stylistic control while preserving the motion content spec- ified by text (Sec. Furthermore, we introduce a style-guidance mechanism at inference time that explicitly steers the denoising tra- jectory toward motions consistent with the reference style (Sec.

## Contributions

- our contributions are as follows: • A structured latent style representation that enables gener- alizable style extraction from arbitrary reference motions, including unseen styles. • A hypernetwork-driven LoRA conditioning mechanism for scalable and generalizable motion style modulation. • A style-guided sampling strategy that extends traditional classifier guidance to continuous, instance-specific style em- beddings extracted from reference motion.
- 2 Related Work 2.1 Text-Driven Human Motion Generation Text-driven human motion generation has emerged as a promising research area for its ability to synthesize complex human move- ments from intuitive natural language descriptions.
- Early works demonstrated the feasibility of this task by mapping text embed- dings to pose sequences through sequence-to-sequence modeling or variational formulations [Athanasiou et al.

## Experiments

We used the 100STYLE dataset retargeted to the SMPL skeleton by Zhong et al. [2024]. During generation, we used textual descrip- tions from HumanML3D as content prompts and stylized motion sequences from 100STYLE as style references. Evaluation Metrics.Following Zhong et al . [2024], we evaluated generated motions across three categories: style expression, content preservation, and motion quality.

## Limitations

While our framework demonstrates expressive stylization and strong generalization, a number of limitations suggest directions for future work. Because our method is trained on the locomotion-centric Content Style Generated Fig. A content motion input (left) is combined with a style reference (middle) to generate a stylized motion sequence (right).

## Relevance to In-context Human Motion Prediction

Relevance: Core. The paper's central task is conditioned human motion generation, using language / text; music / rhythm; trajectory / kinematic control as part of the problem setting.

## Relevance to Embodied Intelligence

The explicit scene, object, interaction, sensing, or control condition makes this work directly relevant to embodied agents that must anticipate or synthesize physically situated human behavior.

## My Notes

TODO: Complete a second-pass manual reading and record comparisons with the closest papers in this notebook.
