# Think Then React: Towards Unconstrained Action-to-Reaction Motion Generation

> ICLR 2025 · In-context Human Motion Prediction
>
> Status: Partially verified

## Paper Information

| Field | Content |
|---|---|
| Year | 2025 |
| Title | Think Then React: Towards Unconstrained Action-to-Reaction Motion Generation |
| BibTeX | [View official BibTeX](#bibtex) |
| Conference | ICLR |
| Journal | Not applicable (conference paper) |
| Benchmark | Not verified |
| Open Source | Not verified |
| Main Authors | Wenhui Tan; Boyuan Li; Chuhao Jin; Wenbing Huang; Xiting Wang; Ruihua Song |
| Paper Link | [ICLR Proceedings](https://proceedings.iclr.cc/paper_files/paper/2025/hash/ea0b28cbbd0cbc45ec4ac38e92da9cb2-Abstract-Conference.html) |
| GitHub Link | Not verified |
| Project Page | Not verified |
| Code / Resources | Not verified |
| Dataset | Not verified |
| Task | Unprompted human action-to-reaction motion generation |
| Input | One person's action motion |
| Output | Another person's semantically appropriate reaction motion |
| Context Type | Other person's motion; inferred action intent and reaction text |
| Method Family | Motion-language reasoning and generation |

## BibTeX

```bibtex
@inproceedings{ICLR2025_ea0b28cb,
 author = {Tan, Wenhui and Li, Boyuan and Jin, Chuhao and Huang, Wenbing and Wang, Xiting and Song, Ruihua},
 booktitle = {International Conference on Learning Representations},
 editor = {Y. Yue and A. Garg and N. Peng and F. Sha and R. Yu},
 pages = {93701--93714},
 title = {Think Then React: Towards Unconstrained Action-to-Reaction Motion Generation},
 url = {https://proceedings.iclr.cc/paper_files/paper/2025/file/ea0b28cbbd0cbc45ec4ac38e92da9cb2-Paper-Conference.pdf},
 volume = {2025},
 year = {2025}
}
```

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
