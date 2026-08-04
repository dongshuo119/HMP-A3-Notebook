# HSI-GPT: A General-Purpose Large Scene-Motion-Language Model for Human Scene Interaction

> CVPR 2025 · Motion Generation

## Paper Information

| Field | Content |
|---|---|
| Authors | Yufei Wang et al. |
| Year | 2025 |
| Venue | CVPR |
| Task | `Motion Generation` |
| Context | `Scene` `Language` `Intention` |
| Method | `Transformer` |
| Dataset | `HUMANISE` `TRUMANS` |
| Paper | [Open paper](https://openaccess.thecvf.com/content/CVPR2025/html/Wang_HSI-GPT_A_General-Purpose_Large_Scene-Motion-Language_Model_for_Human_Scene_Interaction_CVPR_2025_paper.html) |
| Code | — |

## Problem

Unify heterogeneous scene, language, and motion tasks in one model.

## Key Idea

> Tokenize and align scene–motion–language so an LLM can perform next-token reasoning.

## Input / Output

Scene/motion/language prompt → motion or multimodal response.

## Method

Multimodal pretraining and instruction tuning align all modalities in an LLM space.

## Contribution

Moves HSI from task-specific generators toward a general-purpose model.

## Limitation

Large-model cost and tokenization can weaken precise physical contact.

## Embodied AI relevance

Very high: a direct step toward multimodal embodied foundation models.
