# ChainHOI: Joint-based Kinematic Chain Modeling for Human-Object Interaction Generation

> CVPR 2025 · Motion Generation

<table class="paper-meta">
<tr><td>Year</td><td>2025</td></tr>
<tr><td>Venue</td><td>CVPR</td></tr>
<tr><td>Authors</td><td>Lian-Ao Zeng et al.</td></tr>
<tr><td>Task</td><td>Motion Generation</td></tr>
<tr><td>Context</td><td>Object · Language</td></tr>
<tr><td>Method</td><td>Diffusion · GNN</td></tr>
<tr><td>Benchmark</td><td>BEHAVE · OMOMO</td></tr>
<tr><td>Links</td><td>[Paper ↗](https://openaccess.thecvf.com/content/CVPR2025/html/Zeng_ChainHOI_Joint-based_Kinematic_Chain_Modeling_for_Human-Object_Interaction_Generation_CVPR_2025_paper.html)　—</td></tr>
</table>

## Problem

Generate fine-grained interactions with accurate body–object relations.

## Key Idea

!!! tip
    Represent HOI through object-conditioned body kinematic chains.

## Input / Output

Text + object geometry → human and object interaction motion.

## Method

Joint-centric chain modeling guides a generative motion backbone.

## Dataset

BEHAVE, OMOMO

## Contribution

Improves interaction fidelity beyond body-only motion quality.

## Limitation

Kinematic quality does not guarantee physically stable forces.

## Embodied AI Relevance

!!! success
    High: offers structured contact priors for robot learning.
