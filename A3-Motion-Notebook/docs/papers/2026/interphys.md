# InterPhys: Physics-aware Human Motion Synthesis in a Dynamic Scene

> CVPR 2026 · Motion Generation

<table class="paper-meta">
<tr><td>Year</td><td>2026</td></tr>
<tr><td>Venue</td><td>CVPR</td></tr>
<tr><td>Authors</td><td>Xin Xing et al.</td></tr>
<tr><td>Task</td><td>Motion Generation</td></tr>
<tr><td>Context</td><td>Scene · Object</td></tr>
<tr><td>Method</td><td>Diffusion</td></tr>
<tr><td>Benchmark</td><td>InterPhys</td></tr>
<tr><td>Links</td><td>[Paper ↗](https://openaccess.thecvf.com/content/CVPR2026/html/Xing_InterPhys_Physics-aware_Human_Motion_Synthesis_in_a_Dynamic_Scene_CVPR_2026_paper.html)　—</td></tr>
</table>

## Problem

Synthesize credible interaction when scene objects themselves move.

## Key Idea

!!! tip
    Inject physics-aware constraints into dynamic-scene motion generation.

## Input / Output

Human/object state + dynamic scene → physically plausible interaction motion.

## Method

A generative model couples motion synthesis with physical interaction guidance.

## Dataset

InterPhys

## Contribution

Extends scene-aware synthesis from static geometry to dynamic environments.

## Limitation

Approximate physics still struggles with complex contact and deformation.

## Embodied AI Relevance

!!! success
    Very high: models the closed-loop dynamics missing from static HSI work.
