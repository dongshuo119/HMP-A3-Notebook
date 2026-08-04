# MDT-A2G: Exploring Masked Diffusion Transformers for Co-Speech Gesture Generation

> ACM Multimedia 2024 · Context-aware Human Motion Generation
>
> Status: Partially verified

## Paper Information

| Field | Content |
|---|---|
| Year | 2024 |
| Title | MDT-A2G: Exploring Masked Diffusion Transformers for Co-Speech Gesture Generation |
| BibTeX | [View BibTeX](#bibtex) |
| Conference | ACM Multimedia |
| Journal | Not applicable (conference paper) |
| Benchmark | BEAT |
| Open Source | Not verified |
| Main Authors | Xiaofeng Mao; Zhengkai Jiang; Qilin Wang; Chencan Fu; Jiangning Zhang; Jiafu Wu; Yabiao Wang; Chengjie Wang; Wei Li; Mingmin Chi |
| Paper Link | [Official paper](https://doi.org/10.1145/3664647.3680684) |
| GitHub Link | Not verified |
| Publication Status | Official publication record verified |
| Project Page | Not verified |
| Code / Resources | Not verified |
| Open Access Copy | [arXiv](https://arxiv.org/abs/2408.03312) |
| Dataset | BEAT |
| Task | Speech- or semantics-conditioned human gesture generation |
| Input | Language / text; Speech / audio |
| Output | Generated human gesture or holistic body-motion sequence |
| Context Type | Language / text; Speech / audio |
| Method Family | Diffusion model; Transformer / attention |

## BibTeX

```bibtex
@inproceedings{Mao_2024, series={MM ’24}, title={MDT-A2G: Exploring Masked Diffusion Transformers for Co-Speech Gesture Generation}, url={http://dx.doi.org/10.1145/3664647.3680684}, DOI={10.1145/3664647.3680684}, booktitle={Proceedings of the 32nd ACM International Conference on Multimedia}, publisher={ACM}, author={Mao, Xiaofeng and Jiang, Zhengkai and Wang, Qilin and Fu, Chencan and Zhang, Jiangning and Wu, Jiafu and Wang, Yabiao and Wang, Chengjie and Li, Wei and Chi, Mingmin}, year={2024}, month=Oct, pages={3266–3274}, collection={MM ’24} }
```

## Problem

Recent advancements in the field of Diffusion Transformers have substantially improved the generation of high-quality 2D images, 3D videos, and 3D shapes. However, the effectiveness of the Transformer architecture in the domain of co-speech gesture generation remains relatively unexplored, as prior methodologies have predominantly employed the Convolutional Neural Network (CNNs) or simple a few transformer layers.

## Key Idea

In an attempt to bridge this research gap, we introduce a novel Masked Diffusion Transformer for co-speech gesture generation, referred to as MDT-A2G, which directly implements the denoising process on gesture sequences.

## Method

Given an input sequence of speech features and other modal conditions, the goal is to generate a corresponding sequence of human gestures. The model needs to consider the temporal alignment between the speech and gesture sequences, as well as the incorporation of multi-modal information (e.g., emotion, speaker ID and text transcript) to generate more realistic and diverse gestures. Specifically, gestures are generated based on the noisy gesture𝑥𝑡 , audio𝑥𝑎, text𝑥𝑡𝑥𝑡 , ID 𝑥𝑠, emotion𝑥𝑒, and time steps 𝑡.

## Contributions

- The main contributions can be summarized as follows: • We propose MDT-A2G, a masked diffusion transformer frame- work designed for audio-to-gesture task, enhancing semantic understanding of diverse modalities and hastening training convergence that is 6× faster. • We introduce a novel sampling acceleration technique that significantly reduces the inference time, achieving a speedup of 5.7× faster compared to the standard diffusion model. • Extensive experiments demonstrate that our proposed ap- proach achieves state-of-the-art performance both qualita- tively and quantitatively.
- 2 Related Work 2.1 Co-speech Gesture Generation The field of co-speech gesture generation, which concentrates on the production of gestures that synchronize with speech audio, has witnessed the advent of numerous learning-based methodologies.
- Among these, the hierarchical approach proposed by Liu et al. [24] is significant, as it considers both speech semantics and the structure of human gestures.

## Experiments

We utilize the BEAT [23] dataset, which includes 120Hz motion capture data and audios from 30 speakers, featuring 10- minute conversations and 1-minute self-talks. In addition to motion and audio, BEAT includes extra information such as text, identity, emotion annotations, and facial expressions. Following [ 33], we select 1-hour audio per speaker and split the dataset 70% for training, 10% for validation and 20% for testing.

## Limitations

DiT showcases strong scalability in image generation, and we aim to explore similar scalability in the A2G domain. However, we haven’t observed the benefits of MDT-A2G’s scalability yet. One possible reason is insufficient training data; as network complexity grows, so should the dataset.

## Relevance to In-context Human Motion Prediction

Relevance: Peripheral. This work covers gesture or partial-body motion rather than general full-body motion; it is retained because its conditioning or evaluation setting is useful to context-aware motion research.

## Relevance to Embodied Intelligence

The work provides motion priors or conditional generation machinery that can support embodied-agent simulation, planning, and human behavior modeling, although embodiment is not its only focus.

## My Notes

TODO: Complete a second-pass manual reading and record comparisons with the closest papers in this notebook.
