---
title: Sora 并非首个视频生成模型，为何还能一出场就惊艳了所有人?
header:
  teaser: https://picx.zhimg.com/70/v2-648b9a06cf14d4f68bc7652b1f950bde_1440w.avis?source=172ae18b&biz_tag=Post
  overlay_image: https://picx.zhimg.com/70/v2-648b9a06cf14d4f68bc7652b1f950bde_1440w.avis?source=172ae18b&biz_tag=Post
  overlay_filter: 0.5
tags: 人工智能
---

上周四，OpenAI 发布了首个视频生成模型 Sora。栩栩如生的高清视频让众多网友惊呼“真假难辨，以后连视频证据都不可信了吧”！

<div>
  <video width="100%" height="auto" controls="controls" src="">
  <source src="https://vdn6.vzuu.com/HD/23450c92-cf93-11ee-b01f-d246a47ad65d-v8_f2_t1_2WZXfTu4.mp4?pkey=AAUwoGA2TO4RAbZN9c9rnhTb9KyCnNqRp6hl892ISf5o9igmGCizoY2donSrAe7HJL7duq_yRwTXAeg9g71O4Cmf&c=avc.8.0&f=mp4&pu=e59e796c&bu=1513c7c2&expiration=1708593331&v=ks6&pp=ChMxNDAxNjIzODY1NzM5NTc5MzkyGGMiC2ZlZWRfY2hvaWNlMhMxMzY5MDA1NjA4NTk5OTA0MjU3PXu830Q%3D&pf=Web&pt=zhihu" type="video/mp4">
  </video>
</div>

作为一个正对视频号跃跃欲试的技术传播小号主，自然知道视频制作的门槛。之前，哪怕只是想做个好一点的动图，也需要花好长时间。每次动手前，我都得进行一下心理建设！

对于像我这样的业余选手来说，“龙年一开年，Sora 霸屏了”绝对是个好消息。

本文将从一个普通群众的角度总结一下 Sora 及其竞品的功能特性，从而更全面地展现人工智能在视频制作领域的发展现状，说不定能帮助很多像我一样的小伙伴挑选到更顺手的工具呢！


## Sora

根据 OpenAI 的技术报告，Sora 可以根据用户输入的提示词、图片和视频等素材自动生成视频。

Sora 生成的视频最长可达一分钟，视频尺寸可以是 1920×1080p（宽屏）、1080×1920p（竖屏）以及二者之间的任意尺寸。也就是说，Sora 可以直接生成可在各种设备上播放的视频，无需后续编辑。

> 如果你想观看视频样片，请移步 OpenAI 官网：[《Sora 简介》](https://openai.com/sora)和[《Sora 官方技术报告》](https://openai.com/research/video-generation-models-as-world-simulators)

除了自动生成视频，Sora 还可以生成图片、编辑图片和视频。

图片可以被视为单帧视频。Sora 可以生成任意尺寸的图片，分辨率最高可达 2048×2048。

如果你给 Sora 输入图片和提示词，它能按照提示词将图片变成视频。

如果你给 Sora 输入视频和提示词，它能按照提示词为视频添加片头或片尾、变换视频风格或者将视频无缝拼接在一起。

目前，Sora 还没有对公众开放。但 OpenAI 已经邀请红队成员、视觉艺术家、设计师和电影制作人等各领域的专业人士试用 Sora，以评估关键领域的危害和风险，为后续的改进和完善模型收集专业的反馈意见。

> 红队是网络安全中的术语，指通过模拟真实的攻击手法测试和评估系统弱点的安全专家团队。

## 其他视频生成模型

Sora 并不是地球上的首个视频生成模型。OpenAI 发布 Sora 之前，Runway AI、Stability AI、 MoonValley AI 和 Pika Labs AI 等许多创业公司早已发布了类似的视频生成模型。

![Runway 的文生视频样片](https://pic2.zhimg.com/v2-b9a2c8553b58e925c3a6e170b2e406d9_b.webp){: standalone}

各个模型生成的视频质量虽然参差不齐，但也有一些不错的视频样片。那么，为什么 Sora 还是惊艳了所有人呢?

除了在画面内容的丰富度、逼真度和流畅度上逊色很多之外，其他视频生成模型的最大硬伤还有视频时长，尤其是在文生视频方面。

除了 Runway 的视频生成模型 Gen-2 支持生成最长 16 秒的视频，其他的视频生成模型都只能生成几秒钟的视频（或许叫“动图”更合适）。

|  开发者  |  模型  |  最大视频长度  |
|:---|:---:|:--:|
|  [OpenAI]  |  Sora  |  60 s  |
|  [Runway]  |  Gen-2  |  16 s  |
|  [Stability]  |  SVD  |  6 s  |
|  [MoonValley]  |  MoonValley  |  5 s  |
|  [Pika Labs][Pika] |  Pika  |  4 s  |

<!-- link definition -->
[OpenAI]: https://openai.com "OpenAI官网"
[Runway]: https://runwayml.com/ "Runway官网"
[Stability]: https://stability.ai/ "Stability官网"
[MoonValley]: https://moonvalley.ai/ "MoonValley官网"
[Pika]: https://pikalabsai.org/ "Pika官网"

## AI 辅助视频生成工具

除了视频生成模型，还有一类基于素材库的视频生成工具虽然智能程度不高，却比较实用。知乎曾经上线过类似的功能可以一键【生成视频】。*不过，知乎的这个功能现在不能用了。*{: style="color: rgb(150, 150, 150); font-style: normal;"}

在了解视频生成模型的时候，我意外发现了一个叫做 [Fliki] 的视频生成工具。

![standalone](https://pic1.zhimg.com/80/v2-85dc642235b6fe4508aa393e6a451198_720w.webp)

它可以根据文字生成带语音的视频。视频素材可以从自带的 Fliki 素材库中选取，也可以上传自己的素材。

它允许为每个段落（场景）单独设置语音参数（比如使用哪种语言、哪种口音、男声还是女声等）、单独选取视频素材，还能设置标题和背景音乐等。

显然，Fliki 的智能程度比视频生成模型要差很多，但在很多场合里它仍然是一个非常好的选择。

![standalone](https://pic3.zhimg.com/80/v2-bb8089a1f1b79c7e07fea5da234304e6_720w.webp)

[Fliki]: https://fliki.ai/ "Fliki官网"



