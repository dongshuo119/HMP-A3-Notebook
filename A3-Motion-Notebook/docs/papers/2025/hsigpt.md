# HSI-GPT: A General-Purpose Large Scene-Motion-Language Model for Human Scene Interaction

> CVPR 2025 · Motion Generation

<table class="paper-meta">
<tr><td>Year</td><td>2025</td></tr>
<tr><td>Venue</td><td>CVPR</td></tr>
<tr><td>Authors</td><td>Yufei Wang et al.</td></tr>
<tr><td>Task</td><td>Motion Generation</td></tr>
<tr><td>Context</td><td>Scene · Language · Intention</td></tr>
<tr><td>Method</td><td>Transformer</td></tr>
<tr><td>Benchmark</td><td>HUMANISE · TRUMANS</td></tr>
<tr><td>Links</td><td>[Paper ↗](https://openaccess.thecvf.com/content/CVPR2025/html/Wang_HSI-GPT_A_General-Purpose_Large_Scene-Motion-Language_Model_for_Human_Scene_Interaction_CVPR_2025_paper.html)　—</td></tr>
</table>

## Problem

Unify heterogeneous scene, language, and motion tasks in one model.

## Key Idea

!!! tip
    Tokenize and align scene–motion–language so an LLM can perform next-token reasoning.

## Input / Output

Scene/motion/language prompt → motion or multimodal response.

## Method

Multimodal pretraining and instruction tuning align all modalities in an LLM space.

## Dataset

HUMANISE, TRUMANS

## Contribution

Moves HSI from task-specific generators toward a general-purpose model.

## Limitation

Large-model cost and tokenization can weaken precise physical contact.

## Embodied AI Relevance

!!! success
    Very high: a direct step toward multimodal embodied foundation models.
