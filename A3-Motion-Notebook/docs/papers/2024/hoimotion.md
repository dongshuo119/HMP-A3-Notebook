# HOIMotion: Forecasting Human Motion During Human-Object Interactions Using Egocentric 3D Object Bounding Boxes

> IEEE TVCG 2024 · In-context Human Motion Prediction
>
> Status: Partially verified

## Paper Information

| Field | Content |
|---|---|
| Year | 2024 |
| Title | HOIMotion: Forecasting Human Motion During Human-Object Interactions Using Egocentric 3D Object Bounding Boxes |
| BibTeX | [View BibTeX](#bibtex) |
| Conference | Not applicable (journal article) |
| Journal | IEEE Transactions on Visualization and Computer Graphics |
| Benchmark | Not verified |
| Open Source | Not verified |
| Main Authors | Zhiming Hu; Zheming Yin; Daniel Haeufle; Syn Schmitt; Andreas Bulling |
| Paper Link | [Official paper](https://doi.org/10.1109/tvcg.2024.3456161) |
| GitHub Link | Not verified |
| Publication Status | Official publication record verified |
| Project Page | Not verified |
| Code / Resources | Not verified |
| Open Access Copy | [arXiv](https://arxiv.org/abs/2407.02633) |
| Dataset | Not verified |
| Task | Predicting future human pose or motion from observed history |
| Input | Observed past human motion or trajectories; context: Object / human-object interaction; Social / multi-person interaction; Sparse sensor observations |
| Output | Future human pose or motion sequence |
| Context Type | Object / human-object interaction; Social / multi-person interaction; Sparse sensor observations |
| Method Family | Graph neural network |

## BibTeX

```bibtex
@article{Hu_2024, title={HOIMotion: Forecasting Human Motion During Human-Object Interactions Using Egocentric 3D Object Bounding Boxes}, volume={30}, ISSN={2160-9306}, url={http://dx.doi.org/10.1109/tvcg.2024.3456161}, DOI={10.1109/tvcg.2024.3456161}, number={11}, journal={IEEE Transactions on Visualization and Computer Graphics}, publisher={Institute of Electrical and Electronics Engineers (IEEE)}, author={Hu, Zhiming and Yin, Zheming and Haeufle, Daniel and Schmitt, Syn and Bulling, Andreas}, year={2024}, month=Nov, pages={7375–7385} }
```

## Problem

Human motion forecasting is important in many augmented reality applications but most existing methods have only used past body poses to predict future motion. HOIMotion first uses an encoder-residual graph convolutional network (GCN) and multi-layer perceptrons to extract features from body poses and egocentric 3D object bounding boxes, respectively.

## Key Idea

We present HOIMotion - a novel approach for human motion forecasting during human-object interactions that integrates information about past body poses and egocentric 3D object bounding boxes.

## Method

Not verified

## Contributions

Not verified

## Experiments

Evaluation Metric As is common in human motion forecast- ing [12, 30, 46], we used the mean per joint position error (see Equa- tion 7) in millimeters as our metric to evaluate different motion fore- casting methods. Baselines We compared our method with the following methods because they are not only prior state-of-the-art motion forecasting methods but also representatives of different network architectures, i.e. Time Horizons of Input and Output Sequences For experi- ments on the ADT and MoGaze datasets (30 Hz), we used 10 frames of Table 2: Mean per joint position errors (unit: millimeters) of different ablated versions of our method for motion forecasting on the MoGaze dataset.

## Limitations

Not verified

## Relevance to In-context Human Motion Prediction

Relevance: Core. The paper's central task is future human motion/trajectory prediction, using object / human-object interaction; social / multi-person interaction; sparse sensor observations as part of the problem setting.

## Relevance to Embodied Intelligence

The explicit scene, object, interaction, sensing, or control condition makes this work directly relevant to embodied agents that must anticipate or synthesize physically situated human behavior.

## My Notes

TODO: Complete a second-pass manual reading and record comparisons with the closest papers in this notebook.
