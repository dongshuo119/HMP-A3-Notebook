# HSI-GPT: A General-Purpose Large Scene-Motion-Language Model for Human Scene Interaction

> CVPR 2025 · Context-aware Human Motion Generation
>
> Status: Partially verified

## Paper Information

| Field | Content |
|---|---|
| Year | 2025 |
| Title | HSI-GPT: A General-Purpose Large Scene-Motion-Language Model for Human Scene Interaction |
| BibTeX | [View official BibTeX](#bibtex) |
| Conference | CVPR |
| Journal | Not applicable (conference paper) |
| Benchmark | HumanML3D; HUMANISE; PROX |
| Open Source | Not verified |
| Main Authors | Yuan Wang; Yali Li; Xiang Li; Shengjin Wang |
| Paper Link | [CVF Open Access](https://openaccess.thecvf.com/content/CVPR2025/html/Wang_HSI-GPT_A_General-Purpose_Large_Scene-Motion-Language_Model_for_Human_Scene_Interaction_CVPR_2025_paper.html) |
| GitHub Link | Not verified |
| Project Page | Not verified |
| Code / Resources | Not verified |
| Dataset | HumanML3D; HUMANISE; PROX |
| Task | Unified HSI generation, completion, captioning, and multimodal control |
| Input | Instruction prompt containing text, scene, affordance, and/or motion tokens |
| Output | Motion tokens or a textual/multimodal response |
| Context Type | Language; 3D scene; affordance; key-frame motion |
| Method Family | Instruction-tuned multimodal large language model |

## BibTeX

```bibtex
@InProceedings{Wang_2025_CVPR,
    author    = {Wang, Yuan and Li, Yali and Li, Xiang and Wang, Shengjin},
    title     = {HSI-GPT: A General-Purpose Large Scene-Motion-Language Model for Human Scene Interaction},
    booktitle = {Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR)},
    month     = {June},
    year      = {2025},
    pages     = {7147-7157}
}
```

## Problem
Task-specific HSI models accept fixed control modalities and do not readily transfer between generation, completion, and understanding tasks.

## Key Idea

Represent language, motion, scene, and affordance as aligned tokens so a large language model can solve multiple HSI tasks through next-token prediction and instructions.

## Method

A VQ-VAE tokenizes motion; point-cloud and affordance encoders provide visual tokens. A multimodal interaction aggregator maps scene-related tokens into the LLM space. Mixed-modality pretraining aligns tokens, followed by LoRA instruction tuning over question-answer task templates.

## Contributions

- Introduces a general-purpose scene-motion-language model for HSI.
- Unifies multiple conditions and generation/understanding tasks in one prompt interface.
- Establishes a multitask text-conditioned HSI evaluation setup.

## Experiments

Experiments use HumanML3D for motion-language tasks, HUMANISE for scene interaction, and PROX for generalization/visualization. The paper reports task-specific motion, contact, collision, and language-alignment metrics.

## Limitations

Discrete tokenization and a frozen/partially tuned LLM may lose fine contact geometry. No reliable official code or project URL was verified in this pass.

## Relevance to In-context Human Motion Prediction

Relevance: Peripheral. The model supports generalized completion and prediction-like prompting, but its central contribution is unified multimodal generation rather than dedicated forecasting.

## Relevance to Embodied Intelligence

The shared instruction space is relevant to embodied foundation models that must convert between task language, scene state, and action.

## My Notes

TODO: Determine whether its prediction/completion tasks use causal history in a way directly comparable to HMP benchmarks.
