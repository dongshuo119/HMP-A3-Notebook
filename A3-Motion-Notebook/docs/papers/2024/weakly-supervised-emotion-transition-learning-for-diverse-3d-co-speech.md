# Weakly-Supervised Emotion Transition Learning for Diverse 3D Co-Speech Gesture Generation

> CVPR 2024 · Context-aware Human Motion Generation
>
> Status: Partially verified

## Paper Information

| Field | Content |
|---|---|
| Year | 2024 |
| Title | Weakly-Supervised Emotion Transition Learning for Diverse 3D Co-Speech Gesture Generation |
| BibTeX | [View BibTeX](#bibtex) |
| Conference | CVPR |
| Journal | Not applicable (conference paper) |
| Benchmark | BEAT; Trinity |
| Open Source | Not verified |
| Main Authors | Xingqun Qi; Jiahao Pan; Peng Li; Ruibin Yuan; Xiaowei Chi; Mengfei Li; Wenhan Luo; Wei Xue; Shanghang Zhang; Qifeng Liu; Yike Guo |
| Paper Link | [Official paper](https://doi.org/10.1109/cvpr52733.2024.00992) |
| GitHub Link | Not verified |
| Publication Status | Official publication record verified |
| Project Page | [Project page](https://xingqunqi-lab.github.io/Emo-Transition-Gesture/) |
| Code / Resources | [Project page](https://xingqunqi-lab.github.io/Emo-Transition-Gesture/) |
| Open Access Copy | [arXiv](https://arxiv.org/abs/2311.17532) |
| Dataset | BEAT; Trinity |
| Task | Speech- or semantics-conditioned human gesture generation |
| Input | 3D scene / environment; Social / multi-person interaction; Speech / audio; Music / rhythm; Trajectory / kinematic control |
| Output | Generated human gesture or holistic body-motion sequence |
| Context Type | 3D scene / environment; Social / multi-person interaction; Speech / audio; Music / rhythm; Trajectory / kinematic control |
| Method Family | Not verified |

## BibTeX

```bibtex
@inproceedings{Qi_2024, title={Weakly-Supervised Emotion Transition Learning for Diverse 3D Co-Speech Gesture Generation}, url={http://dx.doi.org/10.1109/CVPR52733.2024.00992}, DOI={10.1109/cvpr52733.2024.00992}, booktitle={2024 IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR)}, publisher={IEEE}, author={Qi, Xingqun and Pan, Jiahao and Li, Peng and Yuan, Ruibin and Chi, Xiaowei and Li, Mengfei and Luo, Wenhan and Xue, Wei and Zhang, Shanghang and Liu, Qifeng and Guo, Yike}, year={2024}, month=June, pages={10424–10434} }
```

## Problem

Generating vivid and emotional 3D co-speech gestures is crucial for virtual avatar animation in human-machine interaction applications. While the existing methods enable generating the gestures to follow a single emotion label, they overlook that long gesture sequence modeling with emotion transition is more practical in real scenes.

## Key Idea

Considering obtaining the realistic 3D pose annotations corresponding to the dynamically inpainted emotion transition audio is extremely difficult, we propose a novel weakly supervised training strategy to encourage authority gesture transitions.

## Method

Emotion Transition Dataset Construction We aim to address the emotion transition co-speech ges- ture generation in a weakly supervised manner. Due to the existing paired speech-gesture datasets [28, 36], we could focus on synthesizing the high-fidelity transition human au- dios. Synthesizing datasets conducive to our task focuses on ensuring semantic coherence, smooth emotional audio transitions, consistent timbre, and audio fidelity.

## Contributions

- Co-speech Gesture Synthesis Synthesizing human co-speech gestures plays a signifi- cant role in various applications [17, 22, 37, 46].
- Nu- merous studies have been proposed to address these issues that are roughly divided into rule-based approaches [20, 21], machine-learning-based approaches [23, 41], and deep learning-based ones [2, 28, 32, 36, 48, 50, 52, 53].
- Tra- ditional researchers follow the rule-based workflow, lever- aging the speech-gesture pairs as guidance to generate co- speech gestures pre-defined by linguistic experts.

## Experiments

Datasets and Experimental Setting BEAT Emotion Transition Dataset (BEAT-ETrans): Since there are only single emotion labels of aligned speech-gesture corpus in the original BEAT dataset [28], to satisfy our insight on emotion transition co-speech gesture generation modeling, we recollect a BEAT Emotion Tran- sition Dataset (dubbed BEAT-ETrans). In particular, we re- sample the motion FPS as 15 and intercept the continuous 60 frames with stride 30 as the head/tail clips. Here, the head clips are all annotated as neutral, and tail clips are de- noted with the other seven emotions:anger, happiness, fear, disgust, sadness, contempt, and surprise .

## Limitations

Not verified

## Relevance to In-context Human Motion Prediction

Relevance: Peripheral. This work covers gesture or partial-body motion rather than general full-body motion; it is retained because its conditioning or evaluation setting is useful to context-aware motion research.

## Relevance to Embodied Intelligence

The explicit scene, object, interaction, sensing, or control condition makes this work directly relevant to embodied agents that must anticipate or synthesize physically situated human behavior.

## My Notes

TODO: Complete a second-pass manual reading and record comparisons with the closest papers in this notebook.
