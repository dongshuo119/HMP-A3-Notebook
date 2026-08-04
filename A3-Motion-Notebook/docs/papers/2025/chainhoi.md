# ChainHOI: Joint-based Kinematic Chain Modeling for Human-Object Interaction Generation

> CVPR 2025 · Context-aware Human Motion Generation
>
> Status: Partially verified

## Paper Information

| Field | Content |
|---|---|
| Authors | Ling-An Zeng; Guohong Huang; Yi-Lin Wei; Shengbo Gu; Yu-Ming Tang; Jingke Meng; Wei-Shi Zheng |
| Venue | CVPR |
| Year | 2025 |
| Paper | [CVF Open Access](https://openaccess.thecvf.com/content/CVPR2025/html/Zeng_ChainHOI_Joint-based_Kinematic_Chain_Modeling_for_Human-Object_Interaction_Generation_CVPR_2025_paper.html) |
| Code | [Official repository](https://github.com/qinghuannn/ChainHOI) |
| Project Page | Not verified |
| Dataset | BEHAVE; OMOMO |
| Task | Text-driven human-object interaction generation |
| Input | Text description and target-object geometry |
| Output | Human and object interaction motion |
| Context Type | Language; object geometry; joint/object relations |
| Method Family | Generative spatiotemporal GCN plus kinematic-chain Transformer |

## Problem

Full-body pose tokens model body-object relations only implicitly, making fine joint contacts and coordinated kinetic-chain motion difficult to learn.

## Key Idea

Represent the object as a node connected to likely interaction joints, then explicitly organize those joint relations into body kinetic chains.

## Method

GST-GCN models short- and long-term joint/object relationships on a selective interaction graph. The Kinematics-based Interaction Module uses chain-specific tokens and masked Transformer decoding, conditioned on text and object geometry, to coordinate relevant joints.

## Contributions

- Explicitly models HOI at both joint and kinetic-chain levels.
- Introduces an object-augmented joint graph and GST-GCN.
- Adds chain-specific conditioning through KIM.

## Experiments

Evaluations on BEHAVE and OMOMO compare motion realism, semantic consistency, interaction quality, and runtime, with ablations for the joint graph and kinetic-chain module.

## Limitations

Kinematic coherence and geometric contact do not ensure force balance or stable manipulation. The interaction graph also relies on identifying likely contact joints.

## Relevance to In-context Human Motion Prediction

Relevance: Peripheral. It is text-conditioned generation, but explicit joint-object relationships could inform structured context encoders for future-motion prediction.

## Relevance to Embodied Intelligence

Kinetic-chain structure offers an interpretable prior for whole-body coordination around manipulated objects.

## My Notes

TODO: Compare the chain-token representation with explicit contact graphs and force-aware constraints.
