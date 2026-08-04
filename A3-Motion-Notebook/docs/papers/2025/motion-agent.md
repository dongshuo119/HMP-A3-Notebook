# Motion-Agent: A Conversational Framework for Human Motion Generation with LLMs

> ICLR 2025 · Context-aware Human Motion Generation
>
> Status: Partially verified

## Paper Information

| Field | Content |
|---|---|
| Authors | Qi Wu; Yubo Zhao; Yifan Wang; Xinhang Liu; Yu-Wing Tai; Chi-Keung Tang |
| Venue | ICLR |
| Year | 2025 |
| Paper | [ICLR Proceedings](https://proceedings.iclr.cc/paper_files/paper/2025/hash/77c6ccacfd9962e2307fc64680fc5ace-Abstract-Conference.html) |
| Code | Not verified |
| Project Page | Not verified |
| Dataset | Not verified |
| Task | Conversational motion generation, editing, and understanding |
| Input | Multi-turn language and motion tokens |
| Output | Generated/edited motion or textual understanding |
| Context Type | Language; dialogue history; prior motion |
| Method Family | Adapter-tuned motion-language model with LLM orchestration |

## Problem

Task-specific motion generators are costly to retrain and do not naturally support complex multi-turn customization.

## Key Idea

Quantize motion into the vocabulary space of a pretrained language model, then use a conversational agent to compose motion tasks.

## Method

MotionLLM aligns discrete motion tokens with an open-source language model and fine-tunes adapters for only a small parameter fraction. Motion-Agent connects it with GPT-4 for multi-turn task orchestration.

## Contributions

- Supports generation, editing, and understanding in one interface.
- Uses parameter-efficient adapter tuning.
- Enables complex motion sequences through multi-turn conversation.

## Experiments

The paper reports performance comparable to task-specific diffusion and Transformer models; exact datasets remain to be verified.

## Limitations

Scene and physical-object grounding are not established in the verified description.

## Relevance to In-context Human Motion Prediction

Relevance: Peripheral. It is language-driven generation, not observed future prediction.

## Relevance to Embodied Intelligence

Conversational editing offers a high-level interface for iterative embodied behavior design.

## My Notes

TODO: Verify which parts require an external proprietary LLM at inference.
