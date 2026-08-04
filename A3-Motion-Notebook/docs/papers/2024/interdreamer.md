# InterDreamer: Zero-Shot Text to 3D Dynamic Human-Object Interaction

> NeurIPS 2024 · Motion Generation

<table class="paper-meta">
<tr><td>Year</td><td>2024</td></tr>
<tr><td>Venue</td><td>NeurIPS</td></tr>
<tr><td>Authors</td><td>Sirui Xu et al.</td></tr>
<tr><td>Task</td><td>Motion Generation</td></tr>
<tr><td>Context</td><td>Object · Language</td></tr>
<tr><td>Method</td><td>Diffusion · Transformer</td></tr>
<tr><td>Benchmark</td><td>BEHAVE · OMOMO</td></tr>
<tr><td>Links</td><td>[Paper ↗](https://proceedings.neurips.cc/paper_files/paper/2024/hash/5eca2e4fe7858cbbfef4e08573cfcb25-Abstract-Conference.html)　—</td></tr>
</table>

## Problem

Create dynamic HOI without paired text–interaction training data.

## Key Idea

!!! tip
    Decouple semantic planning from low-level interaction dynamics using pretrained models and a world model.

## Input / Output

Text + object state → joint human and object motion.

## Method

LLM and text-to-motion priors provide semantics; a learned world model enforces dynamics.

## Dataset

BEHAVE, OMOMO

## Contribution

Demonstrates zero-shot text-conditioned dynamic HOI.

## Limitation

Simple learned physics cannot cover complex contacts and articulated objects.

## Embodied AI Relevance

!!! success
    Very high: explicitly links language, world dynamics, and action.
