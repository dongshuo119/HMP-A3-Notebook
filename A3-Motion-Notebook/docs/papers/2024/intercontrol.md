# InterControl: Zero-shot Human Interaction Generation by Controlling Every Joint

> NeurIPS 2024 · Motion Generation

<table class="paper-meta">
<tr><td>Year</td><td>2024</td></tr>
<tr><td>Venue</td><td>NeurIPS</td></tr>
<tr><td>Authors</td><td>Zhenzhi Wang et al.</td></tr>
<tr><td>Task</td><td>Motion Generation</td></tr>
<tr><td>Context</td><td>Human Interaction · Language</td></tr>
<tr><td>Method</td><td>Diffusion</td></tr>
<tr><td>Benchmark</td><td>HumanML3D · InterHuman</td></tr>
<tr><td>Links</td><td>[Paper ↗](https://proceedings.neurips.cc/paper_files/paper/2024/hash/be41269a9fe258f1ecba663b0b402322-Abstract-Conference.html)　[Code ↗](https://github.com/zhenzhiwang/intercontrol)</td></tr>
</table>

## Problem

Generate coherent interactions for an arbitrary number of people.

## Key Idea

!!! tip
    Translate interactions into controllable inter-person joint-distance constraints.

## Input / Output

Text + joint relations → multi-person interaction motion.

## Method

A motion controller and inverse-kinematics guidance steer a pretrained diffusion prior.

## Dataset

HumanML3D, InterHuman

## Contribution

Achieves zero-shot multi-human interaction without fixed-person training data.

## Limitation

Joint constraints do not fully encode social intent or contact physics.

## Embodied AI Relevance

!!! success
    Medium-high: useful for social navigation and multi-agent behavior simulation.
