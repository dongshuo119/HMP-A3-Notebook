# TeamHOI: Learning a Unified Policy for Cooperative Human-Object Interactions with Any Team Size

> CVPR 2026 · Context-aware Human Motion Generation
>
> Status: Partially verified — official CVPR 2026 proceedings

## Paper Information

| Field | Content |
|---|---|
| Year | 2026 |
| Title | TeamHOI: Learning a Unified Policy for Cooperative Human-Object Interactions with Any Team Size |
| BibTeX | [View official BibTeX](#bibtex) |
| Conference | CVPR |
| Journal | Not applicable (conference paper) |
| Benchmark | Single-human reference motions and simulated cooperative carrying tasks |
| Open Source | Not verified |
| Main Authors | Stefan Lionar; Gim Hee Lee |
| Paper Link | [CVF Open Access](https://openaccess.thecvf.com/content/CVPR2026/html/Lionar_TeamHOI_Learning_a_Unified_Policy_for_Cooperative_Human-Object_Interactions_with_CVPR_2026_paper.html) |
| GitHub Link | Not verified |
| Project Page | Not verified |
| Code / Resources | Not verified |
| Dataset | Single-human reference motions and simulated cooperative carrying tasks |
| Task | Physics-based cooperative human-object motion control |
| Input | Local agent observations, teammate tokens, object geometry, and task goal |
| Output | Decentralized control motion for two to eight humanoids |
| Context Type | Teammates; object; physics; team size |
| Method Family | Decentralized Transformer policy with adversarial motion prior |

## BibTeX

```bibtex
@InProceedings{Lionar_2026_CVPR,
    author    = {Lionar, Stefan and Lee, Gim Hee},
    title     = {TeamHOI: Learning a Unified Policy for Cooperative Human-Object Interactions with Any Team Size},
    booktitle = {Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR)},
    month     = {June},
    year      = {2026},
    pages     = {37121-37132}
}
```

## Problem
Cooperative HOI data are scarce, and policies tied to a fixed team size do not scale across different numbers of agents.

## Key Idea

Let every agent run the same local policy while attending to a variable set of teammate tokens, and borrow realism from masked single-human motion priors.

## Method

The Transformer policy consumes teammate tokens. Masked AMP ignores object-interacting body parts in the realism discriminator so task rewards can shape cooperative contact, while a size- and shape-agnostic formation reward stabilizes carrying.

## Contributions

- Uses one decentralized policy across two to eight agents.
- Reuses single-human motion data for cooperative behavior through masked AMP.
- Handles varied team sizes and object geometries.

## Experiments

The paper evaluates cooperative carrying with two to eight humanoids and multiple object shapes.

## Limitations

Evaluation centers on cooperative carrying rather than broad interaction semantics.

## Relevance to In-context Human Motion Prediction

Relevance: Peripheral. It generates controlled multi-agent motion rather than predicting observed humans.

## Relevance to Embodied Intelligence

Variable-team decentralized coordination is a direct embodied multi-agent control problem.

## My Notes

TODO: Check transfer across team sizes absent from training.
