# WaveAR: Wavelet-Aware Continuous Autoregressive Diffusion for Accurate Human Motion Prediction

> NeurIPS 2025 · In-context Human Motion Prediction
>
> Status: Partially verified

## Paper Information

| Field | Content |
|---|---|
| Authors | Shengchuan Gao; Shuo Wang; Yabiao Wang; Ran Yi |
| Venue | NeurIPS |
| Year | 2025 |
| Paper | [NeurIPS Proceedings](https://proceedings.neurips.cc/paper_files/paper/2025/hash/021cb5673294bef0cda68cb6a740213b-Abstract-Conference.html) |
| Code | Not verified |
| Project Page | Not verified |
| Dataset | Standard SHMP benchmarks; names not verified |
| Task | Stochastic 3D human motion prediction |
| Input | Short observed 3D joint sequence |
| Output | Diverse future 3D pose sequences |
| Context Type | Motion history; multiscale frequency context |
| Method Family | Continuous autoregressive latent diffusion |

## Problem

Vector-quantized autoregressive tokens can reduce motion fidelity and destabilize training.

## Key Idea

Predict continuous latent motion tokens autoregressively while injecting localized low- and high-frequency wavelet cues.

## Method

An ST-VAE compresses joint sequences. Masked autoregressive prediction operates in continuous latent space; alternating cross/self-attention fuses wavelet subbands and temporal context, and an MLP diffusion head predicts token noise.

## Contributions

- Applies continuous autoregressive generation to stochastic HMP.
- Avoids vector quantization.
- Combines multiscale spectral information with temporal latent context.

## Experiments

The paper reports accuracy and efficiency comparisons on standard benchmarks; dataset names remain to be verified.

## Limitations

It does not explicitly use scene, language, objects, or other people.

## Relevance to In-context Human Motion Prediction

Relevance: Peripheral. It is a strong recent future-motion method but only motion history is external input.

## Relevance to Embodied Intelligence

Fast stochastic forecasts can supply multiple candidate futures to real-time planners.

## My Notes

TODO: Verify sampling speed and long-horizon drift.
