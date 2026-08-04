# Relation Learning and Aggregate-Attention for Multi-Person Motion Prediction

> IEEE TMM 2025 · In-context Human Motion Prediction
>
> Status: Partially verified

## Paper Information

| Field | Content |
|---|---|
| Year | 2025 |
| Title | Relation Learning and Aggregate-Attention for Multi-Person Motion Prediction |
| BibTeX | [View BibTeX](#bibtex) |
| Conference | Not applicable (journal article) |
| Journal | IEEE Transactions on Multimedia |
| Benchmark | 3DPW |
| Open Source | Not verified |
| Main Authors | Kehua Qu; Rui Ding; Jin Tang |
| Paper Link | [Official paper](https://doi.org/10.1109/tmm.2025.3599049) |
| GitHub Link | Not verified |
| Publication Status | Official publication record verified |
| Project Page | Not verified |
| Code / Resources | Not verified |
| Open Access Copy | [arXiv](https://arxiv.org/abs/2411.03729) |
| Dataset | 3DPW |
| Task | Predicting future human pose or motion from observed history |
| Input | Observed past human motion or trajectories; context: Social / multi-person interaction |
| Output | Future human pose or motion sequence |
| Context Type | Social / multi-person interaction |
| Method Family | Transformer / attention; Graph neural network |

## BibTeX

```bibtex
@article{Qu_2025, title={Relation Learning and Aggregate-Attention for Multi-Person Motion Prediction}, volume={27}, ISSN={1941-0077}, url={http://dx.doi.org/10.1109/tmm.2025.3599049}, DOI={10.1109/tmm.2025.3599049}, journal={IEEE Transactions on Multimedia}, publisher={Institute of Electrical and Electronics Engineers (IEEE)}, author={Qu, Kehua and Ding, Rui and Tang, Jin}, year={2025}, pages={7215–7229} }
```

## Problem

Multi-person motion prediction is an emerging and intricate task with broad real-world applications. Unlike single person motion prediction, it considers not just the skeleton structures or human trajectories but also the interactions between others.

## Key Idea

To address this issue, we introduce a new collaborative framework for multi-person motion prediction that explicitly modeling these relations:a GCN-based network for intra-relations and a novel reasoning network for inter-relations.Moreover, we propose a novel plug-and-play aggregation module called the Interaction Aggregation Module (IAM), which employs an aggregate-attention mechanism to seamlessly integrate these relations.

## Method

T HE BEST RESULTS ARE HIGHLIGHTED IN BOLD . ”*” INDICATES THAT THE DATA ARE NOT GIVEN IN THE PAPER AND WE REPRODUCED WITH THE PAPER ’S CODE . Methods CMU-Mocap (3 persons) MuPoTS-3D (2∼3 persons) 1s 2s 3s 1s 2s 3s LTD [59] 13.7 21.9 32.6 11.9 18.1 23.4 HRI [31] 14.9 26.0 30.7 9.4 16.8 22.9 TCD* [20] 10.2 16.1 19.5 9.0 15.8 21.7 MRT [43] 9.6 15.7 21.8 8.9 15.9 22.2 TBIFormer* [5] 8.0 13.4 19.0 8.7 15.1 20.9 JRT [45] 8.3 13.9 18.5 8.9 15.5 21.3 Ours 7.8 12.8 16.9 8.5 14.7 20.1 TABLE III EXPERIMENTAL RESULTS IN MPJPE ON MIX1 ( LEFT ) AND MIX2 ( RIGHT ) TEST SETS . THE BEST RESULTS ARE HIGHLIGHTED IN BOLD . ”*” INDICATES THAT THE DATA ARE NOT GIVEN IN THE PAPER AND WE REPRODUCED WITH THE PAPER ’S CODE .

## Contributions

- our contributions are as follows: • We propose a collaborative learning framework for multi- person motion prediction to explicitly modeling both the intra-relations within individuals and the inter-relations between them.
- Explicit modeling clearly illustrate the role of these two relations, enhancing the model’s robustness and interpretability. • We propose a novel plug-and-play aggregation module called the Interaction Aggregation Module (IAM), which introduces an aggregate-attention mechanism to seam- lessly integrate intra&inter-relations.
- Experiments show that this module effectively aggregates these relations and is adaptable to other models requiring integrated information. • We conduct experiments on several common datasets and our method achieves state-of-the-art performance on all datasets.

## Experiments

Not verified

## Limitations

Not verified

## Relevance to In-context Human Motion Prediction

Relevance: Core. The paper's central task is future human motion/trajectory prediction, using social / multi-person interaction as part of the problem setting.

## Relevance to Embodied Intelligence

The explicit scene, object, interaction, sensing, or control condition makes this work directly relevant to embodied agents that must anticipate or synthesize physically situated human behavior.

## My Notes

TODO: Complete a second-pass manual reading and record comparisons with the closest papers in this notebook.
