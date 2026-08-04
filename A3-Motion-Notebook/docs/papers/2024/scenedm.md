# Scene-responsive Diverse Human Motion Prediction

> NeurIPS 2024 · Motion Prediction

<table class="paper-meta">
<tr><td>Year</td><td>2024</td></tr>
<tr><td>Venue</td><td>NeurIPS</td></tr>
<tr><td>Authors</td><td>Tao Wang et al.</td></tr>
<tr><td>Task</td><td>Motion Prediction</td></tr>
<tr><td>Context</td><td>Scene</td></tr>
<tr><td>Method</td><td>Diffusion</td></tr>
<tr><td>Benchmark</td><td>GTA-IM · PROX</td></tr>
<tr><td>Links</td><td>[Paper ↗](https://proceedings.neurips.cc/paper_files/paper/2024/hash/4620a66570e554a3ff0e39dc59bcb07a-Abstract-Conference.html)　—</td></tr>
</table>

## Problem

Predict diverse futures that remain physically compatible with 3D scenes.

## Key Idea

!!! tip
    Make stochastic motion sampling explicitly responsive to scene geometry.

## Input / Output

Past motion + 3D scene → diverse future motions.

## Method

A scene-conditioned diffusion framework models multimodal futures.

## Dataset

GTA-IM, PROX

## Contribution

Bridges diversity and scene feasibility in human motion prediction.

## Limitation

Performance depends on scene reconstruction quality.

## Embodied AI Relevance

!!! success
    High: directly supports collision-aware human–robot coexistence.
