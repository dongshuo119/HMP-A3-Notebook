# Gaussian-Mixture Latent Flow for Stochastic 3D Human Motion Prediction

> CVPR 2026 · In-context Human Motion Prediction
>
> Status: Partially verified — official CVPR 2026 proceedings

## Paper Information

| Field | Content |
|---|---|
| Authors | Yue Ma; Frederick W. B. Li; Xiaohui Liang |
| Venue | CVPR |
| Year | 2026 |
| Paper | [CVF Open Access](https://openaccess.thecvf.com/content/CVPR2026/html/Ma_Gaussian-Mixture_Latent_Flow_for_Stochastic_3D_Human_Motion_Prediction_CVPR_2026_paper.html) |
| Code | Not verified |
| Project Page | Not verified |
| Dataset | Human3.6M; AMASS |
| Task | Stochastic 3D human motion prediction with uncertainty estimation |
| Input | Observed 3D motion |
| Output | Future motion samples and tractable likelihoods |
| Context Type | Motion history only |
| Method Family | Invertible latent flow with learned Gaussian mixture prior |

## Problem

Accurate and diverse samples can still be physically implausible, and many predictors cannot quantify uncertainty directly.

## Key Idea

Learn a multimodal prior from motion data and retain invertibility so each future has a tractable likelihood.

## Method

The model uses a data-driven Gaussian mixture in latent space to separate behavior modes and a fully invertible flow for sampling and likelihood computation.

## Contributions

- Replaces a single-modal latent prior with an annotation-free learned mixture.
- Combines stochastic forecasting and explicit uncertainty quantification.
- Evaluates plausibility as well as accuracy and diversity.

## Experiments

The paper evaluates Human3.6M and AMASS and reports prediction, plausibility, and uncertainty results.

## Limitations

No external scene, object, language, or social context is explicit.

## Relevance to In-context Human Motion Prediction

Relevance: Peripheral. It is a significant stochastic predictor, but context is restricted to pose history.

## Relevance to Embodied Intelligence

Likelihood-aware futures can support uncertainty-sensitive collision avoidance and planning.

## My Notes

TODO: Inspect calibration metrics and whether likelihood correlates with physical validity.
