# Move-in-2D: 2D-Conditioned Human Motion Generation

> CVPR 2025 · Motion Generation

<table class="paper-meta">
<tr><td>Year</td><td>2025</td></tr>
<tr><td>Venue</td><td>CVPR</td></tr>
<tr><td>Authors</td><td>Han-Ping Huang et al.</td></tr>
<tr><td>Task</td><td>Motion Generation</td></tr>
<tr><td>Context</td><td>Scene · Language</td></tr>
<tr><td>Method</td><td>Diffusion</td></tr>
<tr><td>Benchmark</td><td>Move-in-2D</td></tr>
<tr><td>Links</td><td>[Paper ↗](https://openaccess.thecvf.com/content/CVPR2025/html/Huang_Move-in-2D_2D-Conditioned_Human_Motion_Generation_CVPR_2025_paper.html)　—</td></tr>
</table>

## Problem

Generate 3D motion grounded in an ordinary scene image.

## Key Idea

!!! tip
    Use 2D scene cues and text as accessible conditions for 3D motion diffusion.

## Input / Output

Single image + text → 3D human motion.

## Method

A conditional diffusion model learns from a large image-aligned motion dataset.

## Dataset

Move-in-2D

## Contribution

Avoids requiring a reconstructed 3D scene at inference time.

## Limitation

Depth ambiguity can cause weak 3D contact and occlusion errors.

## Embodied AI Relevance

!!! success
    Medium-high: offers cheap visual grounding but limited metric geometry.
