# Disentangled Hierarchical VAE for 3D Human-Human Interaction Generation

> ICLR 2026 · Context-aware Human Motion Generation
>
> Status: Partially verified — official ICLR 2026 proceedings

## Paper Information

| Field | Content |
|---|---|
| Authors | Zichen Geng; Zeeshan Hayder; Bo Miao; Jian Liu; Wei Liu; Ajmal Mian |
| Venue | ICLR |
| Year | 2026 |
| Paper | [ICLR Proceedings](https://proceedings.iclr.cc/paper_files/paper/2026/hash/ffd4f5a2ea6b93e9bf5af9264d568cf2-Abstract-Conference.html) |
| Code | Not verified |
| Project Page | Not verified |
| Dataset | Not verified |
| Task | Text-conditioned 3D human-human interaction generation |
| Input | Interaction text/condition |
| Output | Coordinated motion for two people |
| Context Type | Language; human-human interaction; contact semantics |
| Method Family | Disentangled hierarchical VAE plus latent diffusion |

## Problem

A single latent code can entangle global interaction semantics with individual motion, causing missed contacts, penetration, and semantic errors.

## Key Idea

Separate shared interaction context from each person's motion pattern before diffusing in hierarchical latent space.

## Method

DHVAE uses a CoTransformer to form decoupled global and individual latents, contrastive constraints for a discriminative physical interaction space, and a DDIM process with skip-connected AdaLN-Transformer denoising.

## Contributions

- Disentangles shared interaction and individual motion.
- Adds contrastive physical-consistency structure to the latent space.
- Performs efficient high-fidelity diffusion hierarchically.

## Experiments

The paper evaluates motion fidelity, text alignment, contact plausibility, and computational efficiency.

## Limitations

Datasets, code, and behavior beyond dyadic interaction remain to be verified.

## Relevance to In-context Human Motion Prediction

Relevance: Peripheral. It generates from conditions rather than predicting a reaction from observed motion.

## Relevance to Embodied Intelligence

Disentangled interaction representations can support controllable social-motion simulation.

## My Notes

TODO: Compare latent factors with MoLaM and Interact2Ar.
