# A Unified Framework for Motion Reasoning and Generation in Human Interaction

> ICCV 2025 · Context-aware Human Motion Generation
>
> Status: Partially verified

## Paper Information

| Field | Content |
|---|---|
| Authors | Jeongeun Park; Sungjoon Choi; Sangdoo Yun |
| Venue | ICCV |
| Year | 2025 |
| Paper | [CVF Open Access](https://openaccess.thecvf.com/content/ICCV2025/html/Park_A_Unified_Framework_for_Motion_Reasoning_and_Generation_in_Human_ICCV_2025_paper.html) |
| Code | Not verified |
| Project Page | Not verified |
| Dataset | Inter-MT2: 82.7K multi-turn instructions and 153K motion samples |
| Task | Interactive motion understanding, generation, reaction, editing, and reasoning |
| Input | Multi-turn language and one or more human motion streams |
| Output | Text, generated interaction motion, reactions, or edited motion |
| Context Type | Language; dialogue history; human-human interaction |
| Method Family | Motion-language model plus motion diffusion |

## Problem

Most motion-language systems are one-directional, while real interaction requires multi-turn reasoning, reaction, editing, and generation across language and multiple bodies.

## Key Idea

Place motion and language in a unified conversational model and delegate continuous motion synthesis to diffusion components.

## Method

MoLaM combines an LLM-based multimodal architecture with motion diffusion and is instruction-tuned on Inter-MT2 for bidirectional and multi-turn tasks.

## Contributions

- Unifies five motion-language tasks in one interaction model.
- Supports multi-turn conversational control of interactive motion.
- Introduces Inter-MT2 for instruction tuning with paired multi-person motion and language.

## Experiments

The paper reports motion-to-text, text-to-motion, reaction generation, motion editing, and motion reasoning comparisons against task-specific baselines.

## Limitations

The verified description does not establish physical scene or object grounding.

## Relevance to In-context Human Motion Prediction

Relevance: Core for reaction generation, where another person's motion supplies the context; other tasks belong primarily to generation.

## Relevance to Embodied Intelligence

Multi-turn motion reasoning offers an interface for specifying, correcting, and explaining embodied interaction.

## My Notes

TODO: Distinguish open-loop text-to-interaction from motion-conditioned reaction generation in evaluations.
