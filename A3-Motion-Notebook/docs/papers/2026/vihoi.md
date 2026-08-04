# ViHOI: Human-Object Interaction Synthesis with Visual Priors

> CVPR 2026 · Context-aware Human Motion Generation
>
> Status: Partially verified

## Paper Information

| Field | Content |
|---|---|
| Year | 2026 |
| Title | ViHOI: Human-Object Interaction Synthesis with Visual Priors |
| BibTeX | [View official BibTeX](#bibtex) |
| Conference | CVPR main conference |
| Journal | Not applicable (conference paper) |
| Benchmark | FullBodyManipulation; BEHAVE |
| Open Source | Yes |
| Main Authors | Songjin Cai; Linjie Zhong; Ling Guo; Changxing Ding |
| Paper Link | [CVF Open Access](https://openaccess.thecvf.com/content/CVPR2026/html/Cai_ViHOI_Human-Object_Interaction_Synthesis_with_Visual_Priors_CVPR_2026_paper.html) |
| GitHub Link | [Official repository](https://github.com/MPI-Lab/ViHOI) |
| Publication Status | Officially published in CVPR 2026 proceedings; CVF Open Access page verified |
| Project Page | Not verified |
| Code / Resources | [Official repository](https://github.com/MPI-Lab/ViHOI) |
| Dataset | FullBodyManipulation; BEHAVE |
| Task | Visual-prior-enhanced 3D human-object interaction generation |
| Input | Text prompt and a set of 2D reference interaction images |
| Output | 3D human-object interaction motion |
| Context Type | Language; visual object/interaction priors |
| Method Family | Diffusion with VLM/Q-Former visual-prior adapter |

## BibTeX

```bibtex
@InProceedings{Cai_2026_CVPR,
    author    = {Cai, Songjin and Zhong, Linjie and Guo, Ling and Ding, Changxing},
    title     = {ViHOI: Human-Object Interaction Synthesis with Visual Priors},
    booktitle = {Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR)},
    month     = {June},
    year      = {2026},
    pages     = {30686-30695}
}
```

## Problem
Text descriptions rarely specify object scale, shape, contact, and full-body spatial relationships, limiting HOI diffusion models on unseen objects and actions.

## Key Idea

Use 2D interaction images as a readily available source of geometric and semantic priors, with synthetic reference images enabling open-world inference.

## Method

A vision-language model extracts separate visual and textual priors. A Q-Former adapter compresses them into conditional tokens for a diffusion generator. Training uses rendered frames aligned with motion; inference uses text-to-image references divided into interaction stages.

## Contributions

- Introduces a plug-and-play visual-prior module for HOI diffusion.
- Aligns motion-rendered images with motion sequences during training.
- Uses generated reference images to improve unseen-object and unseen-action generalization.

## Experiments

The paper evaluates FullBodyManipulation and BEHAVE with motion, contact, plausibility, and semantic-alignment metrics, including unseen-object splits and plug-in tests on several generators.

## Limitations

Reference-image quality and VLM priors can introduce incorrect geometry or contact assumptions. The method still learns kinematic motion rather than force-level interaction.

## Relevance to In-context Human Motion Prediction

Relevance: Peripheral. It is visual/text-conditioned generation, but visual interaction priors may help prediction systems reason about object-specific feasible futures.

## Relevance to Embodied Intelligence

The method connects Internet-scale visual knowledge with 3D interaction motion, although execution would require additional geometric and physical validation.

## My Notes

TODO: Evaluate robustness when synthetic reference images depict physically impossible contacts.
