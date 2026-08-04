# Human Motion Prediction Under Unexpected Perturbation

> CVPR 2024 · In-context Human Motion Prediction
>
> Status: Partially verified

## Paper Information

| Field | Content |
|---|---|
| Authors | Jiangbei Yue; Baiyi Li; Julien Pettré; Armin Seyfried; He Wang |
| Venue | CVPR |
| Year | 2024 |
| Paper | [CVF Open Access](https://openaccess.thecvf.com/content/CVPR2024/html/Yue_Human_Motion_Prediction_Under_Unexpected_Perturbation_CVPR_2024_paper.html) |
| Code | Not verified |
| Project Page | Not verified |
| Dataset | Not verified |
| Task | Predict reactive single- and multi-person motion after unexpected physical impact |
| Input | Pre-impact human state and external perturbation conditions |
| Output | Future reactive human motion and propagated multi-person response |
| Context Type | Physical perturbation; person-person contact |
| Method Family | Latent differentiable physics plus neural prediction |

## Problem

Unpremeditated reactions to external impacts differ from controlled actions and can propagate through contacting people, while suitable training data are scarce.

## Key Idea

Embed a differentiable physical model in a learned latent space so data-driven prediction retains explicit impact dynamics.

## Method

The Latent Differentiable Physics model combines differentiable physics with neural latent representations to forecast reactive motions and interaction propagation.

## Contributions

- Establishes unexpected-perturbation motion prediction as a distinct task.
- Models reactive multi-person dynamics rather than only planned motion.
- Evaluates against eleven adapted baselines from related domains.

## Experiments

The paper reports data-efficiency, prediction, generalization, and explainability experiments; the exact dataset name remains to be verified.

## Limitations

The scope is specialized to externally perturbed reactive motion and depends on the assumptions of the physical model.

## Relevance to In-context Human Motion Prediction

Relevance: Core. The future is explicitly conditioned on physical impact and potentially on contact with other people.

## Relevance to Embodied Intelligence

Reactive-motion forecasts are useful for safety systems and robots operating close to people.

## My Notes

TODO: Extract perturbation parameterization and dataset capture setup.
