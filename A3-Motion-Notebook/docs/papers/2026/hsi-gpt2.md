# HSI-GPT2: A Dual-Granularity Large Motion Reasoning Model with Diffusion Refinement for Human-Scene Interaction

> CVPR 2026 · Context-aware Human Motion Generation
>
> Status: Partially verified — official CVPR 2026 proceedings

## Paper Information

| Field | Content |
|---|---|
| Year | 2026 |
| Title | HSI-GPT2: A Dual-Granularity Large Motion Reasoning Model with Diffusion Refinement for Human-Scene Interaction |
| BibTeX | [View official BibTeX](#bibtex) |
| Conference | CVPR |
| Journal | Not applicable (conference paper) |
| Benchmark | Standard HSI benchmarks; names not verified |
| Open Source | Not verified |
| Main Authors | Yuan Wang; Xiang Li; Yali Li; Xuege Hou; Shengjin Wang |
| Paper Link | [CVF Open Access](https://openaccess.thecvf.com/content/CVPR2026/html/Wang_HSI-GPT2_A_Dual-Granularity_Large_Motion_Reasoning_Model_with_Diffusion_Refinement_CVPR_2026_paper.html) |
| GitHub Link | Not verified |
| Project Page | Not verified |
| Code / Resources | Not verified |
| Dataset | Standard HSI benchmarks; names not verified |
| Task | Human-scene motion understanding, reasoning, and generation |
| Input | 3D scene, language command, and task-dependent motion context |
| Output | Reasoned text/tokens and physically grounded human motion |
| Context Type | Language; 3D scene; chain-of-thought task semantics |
| Method Family | Large scene-motion-language model with diffusion decoder and RL |

## BibTeX

```bibtex
@InProceedings{Wang_2026_CVPR,
    author    = {Wang, Yuan and Li, Xiang and Li, Yali and Hou, Xuege and Wang, Shengjin},
    title     = {HSI-GPT2: A Dual-Granularity Large Motion Reasoning Model with Diffusion Refinement for Human-Scene Interaction},
    booktitle = {Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR)},
    month     = {June},
    year      = {2026},
    pages     = {16432-16442}
}
```

## Problem
A single motion codebook can trade semantics against detail, while supervised fine-tuning alone struggles with long compositional HSI commands.

## Key Idea

Keep semantic and fine motion granularity jointly, reason over commands, and decode/refine motion through diffusion.

## Method

HSI-GPT2 combines the dual-granularity DMoTok tokenizer, an LLM, a motion diffusion detokenizer, and a Motion-CoT data engine with GRPO reinforcement learning.

## Contributions

- Preserves text-aligned semantics and fine motion detail in separate granularities.
- Uses diffusion to translate model representations into scene-grounded motion.
- Adds motion chain-of-thought data and RL for compositional long-horizon commands.

## Experiments

The paper reports interaction quality, semantic alignment, diversity, and unseen-scene generalization on HSI benchmarks.

## Limitations

Benchmark names, code, and project links remain to be verified.

## Relevance to In-context Human Motion Prediction

Relevance: Peripheral. It is principally reasoning and conditional generation rather than observed-prefix prediction.

## Relevance to Embodied Intelligence

It connects spatial-language reasoning with executable human motion in unfamiliar 3D scenes.

## My Notes

TODO: Check whether chain-of-thought is evaluated for faithfulness or only downstream performance.
