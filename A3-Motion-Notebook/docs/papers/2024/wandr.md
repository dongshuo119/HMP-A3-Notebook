# WANDR: Intention-guided Human Motion Generation

> CVPR 2024 · Motion Generation

<table class="paper-meta">
<tr><td>Year</td><td>2024</td></tr>
<tr><td>Venue</td><td>CVPR</td></tr>
<tr><td>Authors</td><td>Markos Diomataris et al.</td></tr>
<tr><td>Task</td><td>Motion Generation</td></tr>
<tr><td>Context</td><td>Intention · Scene</td></tr>
<tr><td>Method</td><td>Transformer</td></tr>
<tr><td>Benchmark</td><td>AMASS · CIRCLE</td></tr>
<tr><td>Links</td><td>[Paper ↗](https://openaccess.thecvf.com/content/CVPR2024/html/Diomataris_WANDR_Intention-guided_Human_Motion_Generation_CVPR_2024_paper.html)　[Code ↗](https://github.com/markos-diomataris/wandr)</td></tr>
</table>

## Problem

Generate goal-directed locomotion and reaching without fixed trajectories.

## Key Idea

!!! tip
    Represent intention as spatial targets and synthesize motion that adapts online.

## Input / Output

Motion state + target intention → goal-reaching future motion.

## Method

A learned autoregressive controller models diverse intention-conditioned motion.

## Dataset

AMASS, CIRCLE

## Contribution

Supports flexible, scene-aware reaching from high-level goals.

## Limitation

Targets are simpler than free-form semantic intentions.

## Embodied AI Relevance

!!! success
    High: resembles goal-conditioned action generation for embodied agents.
