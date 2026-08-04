# Generating Human Motion in 3D Scenes from Text Descriptions

> CVPR 2024 · Motion Generation

<table class="paper-meta">
<tr><td>Year</td><td>2024</td></tr>
<tr><td>Venue</td><td>CVPR</td></tr>
<tr><td>Authors</td><td>Zhi Cen et al.</td></tr>
<tr><td>Task</td><td>Motion Generation</td></tr>
<tr><td>Context</td><td>Scene · Object · Language</td></tr>
<tr><td>Method</td><td>Diffusion</td></tr>
<tr><td>Benchmark</td><td>HUMANISE</td></tr>
<tr><td>Links</td><td>[Paper ↗](https://openaccess.thecvf.com/content/CVPR2024/html/Cen_Generating_Human_Motion_in_3D_Scenes_from_Text_Descriptions_CVPR_2024_paper.html)　—</td></tr>
</table>

## Problem

Generate motion that obeys both language and 3D scene constraints.

## Key Idea

!!! tip
    Use an object-centric scene representation to ground text in interaction targets.

## Input / Output

Text + 3D scene → scene-consistent human motion.

## Method

A conditional generative model aligns language, target objects, and motion.

## Dataset

HUMANISE

## Contribution

Improves semantic and geometric consistency of scene-conditioned synthesis.

## Limitation

Static scenes and annotated target objects constrain generality.

## Embodied AI Relevance

!!! success
    High: connects language grounding, affordance, and physical action.
