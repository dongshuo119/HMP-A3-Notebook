# ReMoGen: Real-time Human Interaction-to-Reaction Generation via Modular Learning from Diverse Data

> CVPR 2026 · In-context Human Motion Prediction
>
> Status: Partially verified — official CVPR 2026 proceedings

## Paper Information

| Field | Content |
|---|---|
| Authors | Yaoqin Ye; Yiteng Xu; Qin Sun; Xinge Zhu; Yujing Sun; Yuexin Ma |
| Venue | CVPR |
| Year | 2026 |
| Paper | [CVF Open Access](https://openaccess.thecvf.com/content/CVPR2026/html/Ye_ReMoGen_Real-time_Human_Interaction-to-Reaction_Generation_via_Modular_Learning_from_Diverse_CVPR_2026_paper.html) |
| Code | Not verified |
| Project Page | Not verified |
| Dataset | Heterogeneous single-person, human-human, and human-scene datasets; names not verified |
| Task | Online future reaction-motion generation |
| Input | Other agents' actions, scene geometry, observed ego motion, and optional semantics |
| Output | Ego agent's future reaction motion |
| Context Type | Other people; 3D scene; optional high-level semantics; streaming cues |
| Method Family | Modular motion prior with online segment refinement |

## Problem

Reaction data are fragmented across domains, while real-time systems must incorporate newly arriving cues without regenerating long sequences.

## Key Idea

Share a universal motion prior, attach independently trained interaction modules, and refine generated segments frame by frame as new context arrives.

## Method

ReMoGen adapts a single-person prior through Meta-Interaction modules for different contexts. Segment-level generation is paired with lightweight Frame-wise Segment Refinement for responsiveness and temporal continuity.

## Contributions

- Defines real-time multi-source interaction-to-reaction generation.
- Learns modularly from heterogeneous and data-scarce interaction domains.
- Updates reactions with incoming frame-level cues without full-sequence inference.

## Experiments

The paper evaluates human-human, human-scene, and mixed-modality settings, including quality, coherence, responsiveness, and cross-scenario generalization.

## Limitations

Exact datasets, latency measurements, and public code remain to be verified.

## Relevance to In-context Human Motion Prediction

Relevance: Core. It generates the ego person's future explicitly from observed agents, scene geometry, and streaming context.

## Relevance to Embodied Intelligence

This is closely aligned with an embodied agent reacting continuously to people and its environment.

## My Notes

TODO: Compare causal online access with offline reaction-generation baselines.
