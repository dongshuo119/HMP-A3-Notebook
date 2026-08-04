# Certified Human Trajectory Prediction

> CVPR 2025 · In-context Human Motion Prediction
>
> Status: Partially verified

## Paper Information

| Field | Content |
|---|---|
| Year | 2025 |
| Title | Certified Human Trajectory Prediction |
| BibTeX | [View BibTeX](#bibtex) |
| Conference | CVPR |
| Journal | Not applicable (conference paper) |
| Benchmark | ETH; UCY |
| Open Source | Not verified |
| Main Authors | Mohammadhossein Bahari; Saeed Saadatnejad; Amirhossein Askari-Farsangi; Seyed-Mohsen Moosavi-Dezfooli; Alexandre Alahi |
| Paper Link | [Official paper](https://openaccess.thecvf.com/content/CVPR2025/html/Bahari_Certified_Human_Trajectory_Prediction_CVPR_2025_paper.html) |
| GitHub Link | Not verified |
| Publication Status | Official publication record verified |
| Project Page | [Project page](https://s-attack.github.io/) |
| Code / Resources | [Project page](https://s-attack.github.io/) |
| Open Access Copy | [arXiv](https://arxiv.org/abs/2403.13778) |
| Dataset | ETH; UCY |
| Task | Context-aware human/pedestrian trajectory prediction |
| Input | Observed past human motion or trajectories; context: Trajectory / kinematic control |
| Output | Future human trajectories |
| Context Type | Trajectory / kinematic control |
| Method Family | Diffusion model |

## BibTeX

```bibtex
@inproceedings{Bahari_2025, title={Certified Human Trajectory Prediction}, url={http://dx.doi.org/10.1109/CVPR52734.2025.01148}, DOI={10.1109/cvpr52734.2025.01148}, booktitle={2025 IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR)}, publisher={IEEE}, author={Bahari, Mohammadhossein and Saadatnejad, Saeed and Farsangi, Amirhossein Askari and Moosavi-Dezfooli, Seyed-Mohsen and Alahi, Alexandre}, year={2025}, month=June, pages={12301–12311} }
```

## Problem

Predicting human trajectories is essential for the safe operation of autonomous vehicles, yet current data-driven models often lack robustness in case of noisy inputs such as adversarial examples or imperfect observations. Although some trajectory prediction methods have been developed to provide empirical robustness, these methods are heuristic and do not offer guaranteed robustness.

## Key Idea

In this work, we propose a certification approach tailored for trajectory prediction that provides guaranteed robustness.

## Method

In this section, we first explain the certification framework backgrounds and then describe our certification for the tra- jectory prediction task. Certification Randomized smoothing [18] is a technique initially intro- duced for certifying the robustness of models against ℓ2- norm adversarial attacks in image classification. Given a prediction function f , randomized smoothing aims to bound the output of a smoothed function ˜f = A(f ) where A is an aggregation/smoothing operator.

## Contributions

- our contributions are as follows: • We are the first to introduce certification to the trajectory prediction task, providing guaranteed robustness for mod- els against adversarial attacks and imperfect inputs. • We develop a randomized smoothed trajectory predictor tailored to the unique challenges of the task and propose an unconditional diffusion denoiser to enhance the per- formance. • We introduce new certified performance metrics and through comprehensive experiments, demonstrate the ac- curacy and robustness of the smoothed models and high- light their advantages over non-certified models.

## Experiments

Datasets: ETH [45], UCY [37], and WildTrack [15] are well-established datasets containing annotations of human positions in crowded environments. We utilize the Tra- jnet++ [34] benchmark, which provides a fixed data split and unified pre-processing for these datasets. We used the common input and output lengths of Tobs = 9 and Tpred = 12.

## Limitations

Randomized smoothing inevitably increases computational costs in order to provide guaranteed robustness. This is due to the fact that it requires evaluating the predictorn times to obtain Monte-Carlo samples. Nonetheless, this process can be parallelized.

## Relevance to In-context Human Motion Prediction

Relevance: Peripheral. This work covers human trajectory rather than articulated full-body forecasting; it is retained because its conditioning or evaluation setting is useful to context-aware motion research.

## Relevance to Embodied Intelligence

The explicit scene, object, interaction, sensing, or control condition makes this work directly relevant to embodied agents that must anticipate or synthesize physically situated human behavior.

## My Notes

TODO: Complete a second-pass manual reading and record comparisons with the closest papers in this notebook.
