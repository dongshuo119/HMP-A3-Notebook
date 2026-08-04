# ViHOI: Human-Object Interaction Synthesis with Visual Priors

> CVPR 2026 · Motion Generation

<table class="paper-meta">
<tr><td>Year</td><td>2026</td></tr>
<tr><td>Venue</td><td>CVPR</td></tr>
<tr><td>Authors</td><td>Cai et al.</td></tr>
<tr><td>Task</td><td>Motion Generation</td></tr>
<tr><td>Context</td><td>Object · Language · Scene</td></tr>
<tr><td>Method</td><td>Diffusion · Transformer</td></tr>
<tr><td>Benchmark</td><td>BEHAVE · InterCap</td></tr>
<tr><td>Links</td><td>[Paper ↗](https://openaccess.thecvf.com/content/CVPR2026/html/Cai_ViHOI_Human-Object_Interaction_Synthesis_with_Visual_Priors_CVPR_2026_paper.html)　—</td></tr>
</table>

## Problem

Ground HOI synthesis in rich object appearance and geometry cues.

## Key Idea

!!! tip
    Inject visual and textual priors into a diffusion interaction generator.

## Input / Output

Object visual prior + text → 3D human–object interaction.

## Method

Self-attention fuses visual/text priors within diffusion generation.

## Dataset

BEHAVE, InterCap

## Contribution

Uses pretrained visual knowledge to improve open-world HOI grounding.

## Limitation

Visual priors may describe appearance better than contact dynamics.

## Embodied AI Relevance

!!! success
    High: visually grounded interaction transfers naturally to robot perception.
