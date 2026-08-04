# Move as You Say, Interact as You Can

> CVPR 2024 · Motion Generation

<table class="paper-meta">
<tr><td>Year</td><td>2024</td></tr>
<tr><td>Venue</td><td>CVPR</td></tr>
<tr><td>Authors</td><td>Zan Wang et al.</td></tr>
<tr><td>Task</td><td>Motion Generation</td></tr>
<tr><td>Context</td><td>Scene · Object · Language</td></tr>
<tr><td>Method</td><td>Diffusion</td></tr>
<tr><td>Benchmark</td><td>HUMANISE · PROX</td></tr>
<tr><td>Links</td><td>[Paper ↗](https://openaccess.thecvf.com/content/CVPR2024/html/Wang_Move_as_You_Say_Interact_as_You_Can_Language-guided_Human_CVPR_2024_paper.html)　—</td></tr>
</table>

## Problem

Synthesize language-guided motion with credible scene contact.

## Key Idea

!!! tip
    Condition motion generation on explicit scene affordance maps.

## Input / Output

Language + 3D scene affordance → human–scene interaction motion.

## Method

Affordance prediction and diffusion-based motion synthesis are coupled.

## Dataset

HUMANISE, PROX

## Contribution

Makes scene affordance a first-class condition for motion generation.

## Limitation

Affordance errors propagate into motion and contact quality.

## Embodied AI Relevance

!!! success
    High: affordance-grounded action is central to robot manipulation and HRI.
