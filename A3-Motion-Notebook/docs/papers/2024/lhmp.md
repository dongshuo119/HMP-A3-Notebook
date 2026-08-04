# Generating Human Motion in 3D Scenes from Text Descriptions

> CVPR 2024 · Context-aware Human Motion Generation
>
> Status: Partially verified

## Paper Information

| Field | Content |
|---|---|
| Year | 2024 |
| Title | Generating Human Motion in 3D Scenes from Text Descriptions |
| BibTeX | [View official BibTeX](#bibtex) |
| Conference | CVPR |
| Journal | Not applicable (conference paper) |
| Benchmark | HUMANISE; AMASS pretraining; PROX for zero-shot scene generalization |
| Open Source | Yes |
| Main Authors | Zhi Cen; Huaijin Pi; Sida Peng; Zehong Shen; Minghui Yang; Shuai Zhu; Hujun Bao; Xiaowei Zhou |
| Paper Link | [CVF Open Access](https://openaccess.thecvf.com/content/CVPR2024/html/Cen_Generating_Human_Motion_in_3D_Scenes_from_Text_Descriptions_CVPR_2024_paper.html) |
| GitHub Link | [Official repository](https://github.com/zju3dv/text_scene_motion) |
| Project Page | [Project page](https://zju3dv.github.io/text_scene_motion) |
| Code / Resources | [Official repository](https://github.com/zju3dv/text_scene_motion) |
| Dataset | HUMANISE; AMASS pretraining; PROX for zero-shot scene generalization |
| Task | Text-guided human-scene interaction generation |
| Input | Text instruction and a 3D indoor-scene scan |
| Output | Scene-grounded 3D human motion |
| Context Type | Language; 3D scene; target object |
| Method Family | LLM-based object grounding plus diffusion |

## BibTeX

```bibtex
@InProceedings{Cen_2024_CVPR,
    author    = {Cen, Zhi and Pi, Huaijin and Peng, Sida and Shen, Zehong and Yang, Minghui and Zhu, Shuai and Bao, Hujun and Zhou, Xiaowei},
    title     = {Generating Human Motion in 3D Scenes from Text Descriptions},
    booktitle = {Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR)},
    month     = {June},
    year      = {2024},
    pages     = {1855-1866}
}
```

## Problem
The model must resolve spatial language to a particular object and then synthesize motion that is both text-faithful and geometrically compatible with that object and scene.

## Key Idea

Decompose the task into language grounding and object-centric generation instead of asking one model to reason over the complete noisy scene point cloud.

## Method

The method converts a scene graph into text and uses an LLM question-answering formulation to identify the target object. Local point clouds around that object are converted into volumetric sensors, which condition a text-guided diffusion motion generator.

## Contributions

- Explicitly separates target-object grounding from motion synthesis.
- Uses an object-centric scene representation to reduce irrelevant scene complexity.
- Demonstrates HUMANISE performance and generalization to PROX scenes without fine-tuning.

## Experiments

Models are pretrained on AMASS and fine-tuned/evaluated on HUMANISE. The paper also shows qualitative zero-shot transfer to PROX scenes and ablates the grounding and object-centric representation.

## Limitations

The pipeline depends on a scene graph and an LLM grounding answer before generation. Errors in target selection propagate to the motion model, and the main setting uses static indoor scans.

## Relevance to In-context Human Motion Prediction

Relevance: Peripheral. It does not infer future motion from an observed prefix, but its explicit language-scene-object grounding provides reusable context representations for prediction.

## Relevance to Embodied Intelligence

The decomposition connects natural-language task understanding, spatial grounding, and action synthesis in a form relevant to embodied agents.

## My Notes

TODO: Examine the failure handling when the LLM selects an incorrect or ambiguous target object.
