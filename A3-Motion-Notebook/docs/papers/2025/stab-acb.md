# Stochastic Human Motion Prediction with Memory of Action Transition and Action Characteristic

> CVPR 2025 · In-context Human Motion Prediction
>
> Status: Partially verified

## Paper Information

| Field | Content |
|---|---|
| Year | 2025 |
| Title | Stochastic Human Motion Prediction with Memory of Action Transition and Action Characteristic |
| BibTeX | [View official BibTeX](#bibtex) |
| Conference | CVPR |
| Journal | Not applicable (conference paper) |
| Benchmark | Four motion-prediction datasets; names not verified |
| Open Source | Not verified |
| Main Authors | Jianwei Tang; Hong Yang; Tengyue Chen; Jian-Fang Hu |
| Paper Link | [CVF Open Access](https://openaccess.thecvf.com/content/CVPR2025/html/Tang_Stochastic_Human_Motion_Prediction_with_Memory_of_Action_Transition_and_CVPR_2025_paper.html) |
| GitHub Link | Not verified |
| Project Page | [Official project page](https://hyqlat.github.io/STABACB.github.io/) |
| Code / Resources | [Official project/code page](https://hyqlat.github.io/STABACB.github.io/) |
| Dataset | Four motion-prediction datasets; names not verified |
| Task | Target-action-conditioned stochastic future motion prediction |
| Input | Observed non-target action motion and a target action condition |
| Output | Diverse future motion transitioning into the target action |
| Context Type | Target action label; learned transition and action memories |
| Method Family | Memory-augmented stochastic prediction |

## BibTeX

```bibtex
@InProceedings{Tang_2025_CVPR,
    author    = {Tang, Jianwei and Yang, Hong and Chen, Tengyue and Hu, Jian-Fang},
    title     = {Stochastic Human Motion Prediction with Memory of Action Transition and Action Characteristic},
    booktitle = {Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR)},
    month     = {June},
    year      = {2025},
    pages     = {1883-1893}
}
```

## Problem
Action-conditioned prediction must both transition smoothly at variable speeds and preserve the distinctive motion characteristics of the target action.

## Key Idea

Retrieve transition patterns and action-specific priors from separate memory banks, then adaptively fuse them.

## Method

The Soft-transition Action Bank performs soft retrieval over possible observed-action categories. The Action Characteristic Bank supplies target-action priors, and Adaptive Attention Adjustment combines both feature streams.

## Contributions

- Separates transition knowledge from target-action characteristics.
- Uses soft memory search to handle ambiguous observed actions.
- Adds adaptive attention for memory fusion in stochastic prediction.

## Experiments

The paper evaluates on four motion-prediction datasets and reports consistent gains over prior methods.

## Limitations

The conditioning is a predefined action category rather than open-ended language or physical scene context.

## Relevance to In-context Human Motion Prediction

Relevance: Core. It predicts future motion from a history under an explicit target-action condition.

## Relevance to Embodied Intelligence

Action-conditioned futures can help a robot reason about likely transitions after receiving or inferring a task intent.

## My Notes

TODO: Verify the four datasets and whether the project page exposes a stable repository link.
