# InterControl: Zero-shot Human Interaction Generation by Controlling Every Joint

> NeurIPS 2024 · Context-aware Human Motion Generation
>
> Status: Partially verified

## Paper Information

| Field | Content |
|---|---|
| Authors | Zhenzhi Wang; Jingbo Wang; Yixuan Li; Dahua Lin; Bo Dai |
| Venue | NeurIPS |
| Year | 2024 |
| Paper | [NeurIPS Proceedings](https://proceedings.neurips.cc/paper_files/paper/2024/hash/be41269a9fe258f1ecba663b0b402322-Abstract-Conference.html) |
| Code | [Official repository](https://github.com/zhenzhiwang/intercontrol) |
| Project Page | Not verified |
| Dataset | HumanML3D; KIT-ML; InterHuman prompts for interaction evaluation |
| Task | Zero-shot multi-person interaction generation |
| Input | Single-person motion prior plus joint-position/contact constraints, optionally derived from text by an LLM |
| Output | Spatially coordinated motion for an arbitrary number of people |
| Context Type | Other people; joint contacts/distances; language-derived constraints |
| Method Family | Diffusion ControlNet plus inverse-kinematics guidance |

## Problem

Models trained for a fixed number of people do not naturally scale to larger groups, while single-person generators cannot ensure that corresponding joints meet in global space.

## Key Idea

Represent inter-person interaction as differentiable spatial relations between joints, allowing a single-person diffusion prior to be reused independently for any number of characters.

## Method

Motion ControlNet adds global joint controls to a pretrained MDM prior. During denoising, inverse-kinematics guidance optimizes generated joints toward desired global positions and can combine contact, orientation, and collision objectives. An LLM can translate interaction descriptions into contact-pair constraints.

## Contributions

- Generates multi-person interactions zero-shot from a single-person prior.
- Supports precise control of any joint, person, and time step.
- Demonstrates arbitrary-size group interactions and compatibility with physics animation.

## Experiments

Joint-control experiments use HumanML3D and KIT-ML. InterHuman descriptions are adapted into constraints for multi-person evaluation and user studies; InterHuman is not the core training dataset for the motion prior.

## Limitations

Joint-distance constraints approximate interaction semantics and do not enforce full-body contact dynamics or social causality. LLM-produced constraints can also be incomplete.

## Relevance to In-context Human Motion Prediction

Relevance: Peripheral. This is controllable generation rather than observation-conditioned forecasting, but other people form an explicit social context.

## Relevance to Embodied Intelligence

Scalable spatial interaction controls are useful for social simulation and generating reference behaviors for multi-agent or physics-based systems.

## My Notes

TODO: Test how sensitive interaction quality is to errors in automatically generated joint constraints.
