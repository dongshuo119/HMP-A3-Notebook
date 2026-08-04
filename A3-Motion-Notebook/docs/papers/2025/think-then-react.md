# Think Then React: Towards Unconstrained Action-to-Reaction Motion Generation

> ICLR 2025 · In-context Human Motion Prediction
>
> Status: Partially verified

## Paper Information

| Field | Content |
|---|---|
| Authors | Wenhui Tan; Boyuan Li; Chuhao Jin; Wenbing Huang; Xiting Wang; Ruihua Song |
| Venue | ICLR |
| Year | 2025 |
| Paper | [ICLR Proceedings](https://proceedings.iclr.cc/paper_files/paper/2025/hash/ea0b28cbbd0cbc45ec4ac38e92da9cb2-Abstract-Conference.html) |
| Code | Not verified |
| Project Page | Not verified |
| Dataset | Not verified |
| Task | Unprompted human action-to-reaction motion generation |
| Input | One person's action motion |
| Output | Another person's semantically appropriate reaction motion |
| Context Type | Other person's motion; inferred action intent and reaction text |
| Method Family | Motion-language reasoning and generation |

## Problem

Direct action-to-reaction prediction lacks an explicit semantic bridge and a unified way to encode egocentric pose and shared space.

## Key Idea

Reason in language about the actor's intent and a plausible response before generating the responder's motion.

## Method

TTR performs a thinking stage that infers intent and reaction text, then a reacting stage conditioned on action and inferred prompt. Its tokenizer decouples egocentric pose from absolute spatial features for both participants.

## Contributions

- Generates reactions without user-provided reaction prompts.
- Makes semantic intention/reaction reasoning explicit.
- Uses one motion-token representation for actor and responder.

## Experiments

The paper compares action-to-reaction generation with existing baselines; exact datasets remain to be verified.

## Limitations

Reasoned text may be plausible without being causally faithful to the generated motion.

## Relevance to In-context Human Motion Prediction

Relevance: Core. Another person's observed motion is the direct context for the future reaction.

## Relevance to Embodied Intelligence

Action-to-reaction modeling is central to social robots and interactive characters.

## My Notes

TODO: Check causal access, dataset names, and reasoning faithfulness.
