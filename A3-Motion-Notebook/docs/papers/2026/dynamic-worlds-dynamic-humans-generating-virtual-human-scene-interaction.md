# Dynamic Worlds, Dynamic Humans: Generating Virtual Human-Scene Interaction Motion in Dynamic Scenes

> IEEE TVCG 2026 · Context-aware Human Motion Generation
>
> Status: Partially verified

## Paper Information

| Field | Content |
|---|---|
| Year | 2026 |
| Title | Dynamic Worlds, Dynamic Humans: Generating Virtual Human-Scene Interaction Motion in Dynamic Scenes |
| BibTeX | [View BibTeX](#bibtex) |
| Conference | Not applicable (journal article) |
| Journal | IEEE Transactions on Visualization and Computer Graphics |
| Benchmark | Not verified |
| Open Source | Not verified |
| Main Authors | Yin Wang; Zhiying Leng; Haitian Liu; Frederick W.B. Li; Mu Li; Xiaohui Liang |
| Paper Link | [Official paper](https://doi.org/10.1109/tvcg.2026.3679139) |
| GitHub Link | Not verified |
| Publication Status | Official 2026 publication record verified; 2026 coverage remains open for later additions |
| Project Page | Not verified |
| Code / Resources | Not verified |
| Open Access Copy | [arXiv](https://arxiv.org/abs/2601.19484) |
| Dataset | Not verified |
| Task | Scene-conditioned human motion generation |
| Input | Language / text; 3D scene / environment; Social / multi-person interaction; Trajectory / kinematic control |
| Output | Generated 3D human motion sequence |
| Context Type | Language / text; 3D scene / environment; Social / multi-person interaction; Trajectory / kinematic control |
| Method Family | Diffusion model; Retrieval / memory model |

## BibTeX

```bibtex
@article{Wang_2026, title={Dynamic Worlds, Dynamic Humans: Generating Virtual Human-Scene Interaction Motion in Dynamic Scenes}, volume={32}, ISSN={2160-9306}, url={http://dx.doi.org/10.1109/tvcg.2026.3679139}, DOI={10.1109/tvcg.2026.3679139}, number={5}, journal={IEEE Transactions on Visualization and Computer Graphics}, publisher={Institute of Electrical and Electronics Engineers (IEEE)}, author={Wang, Yin and Leng, Zhiying and Liu, Haitian and Li, Frederick W.B. and Li, Mu and Liang, Xiaohui}, year={2026}, month=May, pages={3062–3072} }
```

## Problem

Scenes are continuously undergoing dynamic changes in the real world. However, existing human-scene interaction generation methods typically treat the scene as static, which deviates from reality.

## Key Idea

Inspired by world models, we introduce Dyn-HSI, the first cognitive architecture for dynamic human-scene interaction, which endows virtual humans with three humanoid components. (1)Vision (human eyes): we equip the virtual human with a Dynamic Scene-Aware Navigation, which continuously perceives changes in the surrounding environment and adaptively predicts the next waypoint. (2)Memory (human brain): we equip the virtual human with a Hierarchical Experience Memory, which stores and updates experiential data accumulated during training.

## Method

For human motion, we adopt the SMPL-X [32] parametric model to represent the human motions {Mi}Lm i=1 with joint positions form Mi ∈R J×3, where J denotes the number of joints. These joints are fitted to the SMPL-X parametric model, which is then optimized to obtain the corresponding pose parameters θp, global orientation θg, hand poses θh, and root translation θr, thereby yielding the final posed human mesh. For conditions, the 3D scene S at time t, denoted as St ∈ {0,1} Ls×Ws×Hs, is represented in a voxelized form, where 1 indi- cates that the position is occupied by the scene.

## Contributions

- Our contributions are as follows: • To the best of our knowledge, we are the first to tackle the task of virtual human–scene interaction in dynamic scenes. • We propose Dyn-HSI, the first cognitive architecture that equips virtual humans with Vision, Memory, and Controller. • We construct the Dyn-Scenes evaluation benchmarks, along with a comprehensive evaluation protocol and metrics, to assess model performance in dynamic scenes. • Extensive experiments demonstrate that Dyn-HSI consistently achieves superior performance over existing methods in both static and dynamic settings.

## Experiments

To further assess its effectiveness in dynamic scenarios, we introduce a new dynamic human–scene interaction benchmark. Static HSI datasets.We train and evaluate our method using the static scene dataset, LINGO [25], which provides rich human-scene interaction sequences. This dataset contains 16 hours of motion se- quences captured across 120 unique indoor scenes, each accompanied by precise textual descriptions.

## Limitations

Here, we discuss the limitations of Dyn-HSI and suggest directions for future work. First, although the generated motions can achieve fine-grained interactions with dynamic scenes, the inference speed is still not ideal. This limitation arises not only from the Dynamic Scene-Aware Navigation but also from the inherently slow inference of diffusion models.

## Relevance to In-context Human Motion Prediction

Relevance: Core. The paper's central task is conditioned human motion generation, using language / text; 3d scene / environment; social / multi-person interaction; trajectory / kinematic control as part of the problem setting.

## Relevance to Embodied Intelligence

The explicit scene, object, interaction, sensing, or control condition makes this work directly relevant to embodied agents that must anticipate or synthesize physically situated human behavior.

## My Notes

TODO: Complete a second-pass manual reading and record comparisons with the closest papers in this notebook.
