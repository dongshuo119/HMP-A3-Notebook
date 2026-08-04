# Proxy-Bridged Game Transformer for Interactive Extreme Motion Prediction

> ICCV 2025 · In-context Human Motion Prediction
>
> Status: Partially verified

## Paper Information

| Field | Content |
|---|---|
| Year | 2025 |
| Title | Proxy-Bridged Game Transformer for Interactive Extreme Motion Prediction |
| BibTeX | [View official BibTeX](#bibtex) |
| Conference | ICCV |
| Journal | Not applicable (conference paper) |
| Benchmark | ExPI; CMU Mocap; MuPoTS-3D |
| Open Source | Yes |
| Main Authors | Yanwen Fang; Wenqi Jia; Xu Cao; Peng-Tao Jiang; Guodong Li; Jintai Chen |
| Paper Link | [CVF Open Access](https://openaccess.thecvf.com/content/ICCV2025/html/Fang_Proxy-Bridged_Game_Transformer_for_Interactive_Extreme_Motion_Prediction_ICCV_2025_paper.html) |
| GitHub Link | [Official GitHub](https://github.com/joyfang1106/pgformer) |
| Project Page | Not verified |
| Code / Resources | [Official GitHub](https://github.com/joyfang1106/pgformer) |
| Dataset | ExPI; CMU Mocap; MuPoTS-3D |
| Task | Short- and long-term interactive multi-person motion prediction |
| Input | Observed pose sequences of interacting people |
| Output | Future poses for all people |
| Context Type | Human-human interaction; other people's motion |
| Method Family | Game-inspired cross-person Transformer |

## BibTeX

```bibtex
@InProceedings{Fang_2025_ICCV,
    author    = {Fang, Yanwen and Jia, Wenqi and Cao, Xu and Jiang, Peng-Tao and Li, Guodong and Chen, Jintai},
    title     = {Proxy-Bridged Game Transformer for Interactive Extreme Motion Prediction},
    booktitle = {Proceedings of the IEEE/CVF International Conference on Computer Vision (ICCV)},
    month     = {October},
    year      = {2025},
    pages     = {13912-13921}
}
```

## Problem
Extreme coordinated motions such as partner dance cannot be forecast reliably by treating each person's pose independently.

## Key Idea

Learn bidirectional dependencies between people while using a proxy unit to regulate how spatial information crosses between their motion streams.

## Method

PGformer uses cross-query attention between pose sequences and a proxy-bridged mechanism for bidirectional spatial information flow.

## Contributions

- Focuses on highly coupled extreme multi-person motion.
- Introduces proxy-controlled bidirectional cross-person attention.
- Tests transfer from two-person extreme interaction to moderate and larger-group settings.

## Experiments

The paper evaluates ExPI for extreme collaborative movement and CMU Mocap and MuPoTS-3D for moderate or more-than-two-person generalization.

## Limitations

The verified inputs do not include scene geometry or objects.

## Relevance to In-context Human Motion Prediction

Relevance: Core. Each participant's future is predicted using the other participant's motion as explicit context.

## Relevance to Embodied Intelligence

Cross-person dependency modeling is useful for agents collaborating in tightly coordinated physical tasks.

## My Notes

TODO: Check whether the game terminology corresponds to an explicit objective or mainly the architecture metaphor.
