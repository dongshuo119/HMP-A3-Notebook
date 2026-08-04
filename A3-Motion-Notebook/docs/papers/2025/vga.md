# Vision-Guided Action: Enhancing 3D Human Motion Prediction with Gaze-informed Affordance

> CVPR 2025 · Motion Prediction

<table class="paper-meta">
<tr><td>Year</td><td>2025</td></tr>
<tr><td>Venue</td><td>CVPR</td></tr>
<tr><td>Authors</td><td>Tianyi Yu et al.</td></tr>
<tr><td>Task</td><td>Motion Prediction</td></tr>
<tr><td>Context</td><td>Scene · Object · Intention</td></tr>
<tr><td>Method</td><td>Transformer · Diffusion</td></tr>
<tr><td>Benchmark</td><td>GIMO</td></tr>
<tr><td>Links</td><td>[Paper ↗](https://openaccess.thecvf.com/content/CVPR2025/html/Yu_Vision-Guided_Action_Enhancing_3D_Human_Motion_Prediction_with_Gaze-informed_Affordance_CVPR_2025_paper.html)　—</td></tr>
</table>

## Problem

Infer where a person will act before their pose makes the goal obvious.

## Key Idea

!!! tip
    Use gaze to discover scene affordances that condition future motion.

## Input / Output

Past motion + gaze + scene → future 3D motion.

## Method

Gaze-informed affordance features guide a scene-conditioned predictor.

## Dataset

GIMO

## Contribution

Connects visual attention, intention, affordance, and motion forecasting.

## Limitation

Relies on reliable gaze estimation and visible target regions.

## Embodied AI Relevance

!!! success
    Very high: anticipatory HRI depends on early intent and affordance inference.
