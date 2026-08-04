# Interact2Ar: Full-Body Human-Human Interaction Generation via Autoregressive Diffusion Models

> CVPR 2026 · Context-aware Human Motion Generation
>
> Status: Partially verified — official CVPR 2026 proceedings

## Paper Information

| Field | Content |
|---|---|
| Authors | Pablo Ruiz-Ponce; Sergio Escalera; José García-Rodríguez; Jiankang Deng; Rolandos Alexandros Potamias |
| Venue | CVPR |
| Year | 2026 |
| Paper | [CVF Open Access](https://openaccess.thecvf.com/content/CVPR2026/html/Ruiz-Ponce_Interact2Ar_Full-Body_Human-Human_Interaction_Generation_via_Autoregressive_Diffusion_Models_CVPR_2026_paper.html) |
| Code | Not verified |
| Project Page | Not verified |
| Dataset | Not verified |
| Task | Text-conditioned full-body human-human interaction generation |
| Input | Text and autoregressive interaction history |
| Output | Body and detailed hand motion for interacting people |
| Context Type | Language; human-human interaction; long motion history |
| Method Family | Autoregressive diffusion with hand branches and memory |

## Problem

Whole-sequence diffusion is weak at reactive adaptation, and existing interaction datasets and models often omit detailed hands.

## Key Idea

Generate interactions autoregressively with persistent context while dedicating parallel branches to hand kinematics.

## Method

Interact2Ar couples autoregressive diffusion with a memory mechanism for large context windows and parallel hand branches for full-body output.

## Contributions

- Introduces end-to-end text-conditioned autoregressive diffusion for full-body interaction.
- Includes detailed hand kinematics.
- Supports temporal composition, disturbance adaptation, and extension beyond dyads.

## Experiments

The paper introduces full-body interaction evaluators and extended metrics and reports quantitative and qualitative comparisons.

## Limitations

Dataset names, code, and project page remain to be verified.

## Relevance to In-context Human Motion Prediction

Relevance: Core for autoregressive reaction and disturbance adaptation; the primary benchmark remains conditional generation.

## Relevance to Embodied Intelligence

Reactive full-body interaction is important for avatars and robots that must adapt mid-execution.

## My Notes

TODO: Verify whether the multi-person extension is trained or demonstrated zero-shot.
