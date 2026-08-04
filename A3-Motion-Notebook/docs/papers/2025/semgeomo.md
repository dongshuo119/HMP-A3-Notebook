# SemGeoMo: Dynamic Contextual Human Motion Generation with Semantic and Geometric Guidance

> CVPR 2025 · Motion Generation

<table class="paper-meta">
<tr><td>Year</td><td>2025</td></tr>
<tr><td>Venue</td><td>CVPR</td></tr>
<tr><td>Authors</td><td>Peishan Cong et al.</td></tr>
<tr><td>Task</td><td>Motion Generation</td></tr>
<tr><td>Context</td><td>Scene · Object · Language</td></tr>
<tr><td>Method</td><td>Diffusion</td></tr>
<tr><td>Benchmark</td><td>HUMANISE · PROX</td></tr>
<tr><td>Links</td><td>[Paper ↗](https://openaccess.thecvf.com/content/CVPR2025/html/Cong_SemGeoMo_Dynamic_Contextual_Human_Motion_Generation_with_Semantic_and_Geometric_CVPR_2025_paper.html)　—</td></tr>
</table>

## Problem

Generate motion that follows semantics while respecting changing geometry.

## Key Idea

!!! tip
    Jointly guide motion using text, affordance, and joint-level geometry.

## Input / Output

Text + dynamic scene context → context-consistent motion.

## Method

Multi-level semantic and geometric conditions steer diffusion sampling.

## Dataset

HUMANISE, PROX

## Contribution

Treats context as dynamic rather than a fixed scene backdrop.

## Limitation

Complex conditioning increases data and compute demands.

## Embodied AI Relevance

!!! success
    Very high: dynamic context is closer to real robot environments.
