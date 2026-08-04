# Multimodal Sense-Informed Forecasting of 3D Human Motions

> CVPR 2024 · Motion Prediction

<table class="paper-meta">
<tr><td>Year</td><td>2024</td></tr>
<tr><td>Venue</td><td>CVPR</td></tr>
<tr><td>Authors</td><td>Zhenyu Lou et al.</td></tr>
<tr><td>Task</td><td>Motion Prediction</td></tr>
<tr><td>Context</td><td>Scene · Intention</td></tr>
<tr><td>Method</td><td>Transformer · Diffusion</td></tr>
<tr><td>Benchmark</td><td>GIMO · Human3.6M</td></tr>
<tr><td>Links</td><td>[Paper ↗](https://openaccess.thecvf.com/content/CVPR2024/html/Lou_Multimodal_Sense-Informed_Forecasting_of_3D_Human_Motions_CVPR_2024_paper.html)　—</td></tr>
</table>

## Problem

Forecast plausible 3D futures using more than pose history alone.

## Key Idea

!!! tip
    Fuse complementary sensory cues to reduce future-motion ambiguity.

## Input / Output

Past motion + multimodal observations → future 3D motion.

## Method

Multimodal encoders condition a generative forecasting model.

## Dataset

GIMO, Human3.6M

## Contribution

Shows that sense-informed context improves long-horizon forecasting.

## Limitation

Requires synchronized context modalities that may be unavailable in the wild.

## Embodied AI Relevance

!!! success
    High: anticipatory robots can use the forecast for safer planning.
