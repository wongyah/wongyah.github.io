---
title: Oxygen自研内容管理系统初长成，现已全面开放试用！
excerpt: Oxygen Content Fusion 中的所有项目都可以同步到外部存储库。也就是说，你在试用期间使用 OCF 干的活，最后都能装进自己的口袋里。
header:
  teaser: https://pic1.zhimg.com/70/v2-2a7f3cb3b5e48d7fa2ead15c420b81b9_1440w.avis?source=172ae18b&biz_tag=Post
  overlay_image: https://pic1.zhimg.com/70/v2-2a7f3cb3b5e48d7fa2ead15c420b81b9_1440w.avis?source=172ae18b&biz_tag=Post
  overlay_filter: 0.5
tags: 
---

去年，我有幸见识了[国内的内容管理系统乱象]。之后，我联系了一下 [Oxygen XML] 的开发商 Syncro Soft，想问问他们有没有对中国市场感兴趣的合作伙伴。

原本只是随口一问，没想到 Syncro Soft 马上回复说：“呃，我们就有内容管理系统呀！它叫 [Oxygen Content Fusion]（为方便书写，以下简称 OCF），使用 Git 进行版本管理。**信息透明，连价格都是公开的!**”

咦，OCF 不是内容审阅工具吗？什么时候变成内容管理系统啦，别是新瓶装旧酒换汤不换药吧？本着追本溯源、刨根问底的工程师精神，我把 OCF 那长长的更新说明历史翻了个底朝天。

没错！自 2024 年发布的 7.0 版起，OCF 正式变身成了一款支持 DITA 的内容管理系统（最新版已支持 S1000D）。本文不罗列一串串让人眼花缭乱的产品特性，不吹捧某个神奇的产品功能，只梳理那些新产品亮相时每个人都想知道的核心信息。

## 开发历史

OCF 首发于 2019 年2 月，最初是一款基于浏览器的内容审阅工具。项目管理人员可以在 OCF 中创建审阅任务，并将审阅任务分享给审阅人员（通常为领域专家）。

![](https://pic3.zhimg.com/v2-40b9d98b92d6d2477770cc44b59e0ba6_1440w.jpg){:standalone}

2023 年 11 月发布的 OCF 6.0 版有一项重大更新：**新增了项目管理功能**。技术写作人员可以在项目视图中创建和管理审阅任务、追踪审阅进度、合并修改并将 DITA 内容发布成 Web Help 或 PDF 文档。这意味着，自 6.0 版开始，OCF 不再是一款单纯的内容审阅工具。

![](https://pica.zhimg.com/v2-b0b87128d5eb63cfde19759c409479aa_1440w.jpg){:standalone}

2024 年 8 月发布的 OCF 7.0 版再次进行了重大更新：**新增了个人工作区功能**。技术写作人员可以在个人工作区新建文件、编辑文件、预览修改和提交修改。而且，个人工作区还专门内置了一个可视化的、解决合并冲突的小工具。这标志着，自 7.0 版开始，OCF 集内容编辑、内容审阅和项目管理功能于一身，正式成为一款内容管理系统。

![](https://pica.zhimg.com/v2-a525c3f876ea4c43657bf264e1ca3c48_1440w.jpg){:standalone}

截止到现在，OCF 已经更新到了 9.1 版。今年开年没几个月呢，已经连着发了两个版本，还正式发布了 OCF 云服务。我这写稿的速度都要赶不上它迭代的速度了，边写边查追着改！

## 适用对象

OCF 是一款基于 Git 的内容管理系统，支持 DITA 和 S1000D 4.x，可以通过插件**接入 AI 大模型和 AI 智能体**。

![](https://pic3.zhimg.com/v2-d53094177fbe6b326b5f7b230847749e_1440w.jpg){:standalone}

Git 是目前最流行的分布式版本管理工具。我曾经写过一篇文章，介绍[内容管理系统采购及定制开发过程中的问题和雷区][CMS避雷指南]。在这篇文章的第 2 节，专门写了内容管理系统的三种版本管理方式以及各自的优缺点，包括 Git。

结合 Git 的特点，我觉得 OCF 适合以下几类文档团队：

**产品型号单一的项目或企业**。Git 是 Linux Torvalds 为了管理其创建的开源项目 Linux 操作系统的源代码而开发的一款版本管理工具，天生就适合对不断迭代更新的、单一产品的产品文档进行版本管理。

**中小型技术文档团队**。对于产品种类虽然多、但内容特别简单（即页数少或章节少）的产品文档，或者内容比较多、但产品型号较少的产品文档，可以将所有内容集中存放着一个存储库中。只要避免跨存储库的内容复用即可。

**精通结构化写作或 Git 的文档团队**。如果团队的技术能力比较强或者可以从外部得到强有力的技术支持（比如公司内部的开发团队、IT 部门或者第三方咨询顾问等），可以结合外部的 Git 存储库管理平台（比如 GitHub）或 Git 服务器（比如 GitLab Server）完成复杂的产品文档管理和自动化流程。

## 价位

OCF 既提供云服务，也支持私有化部署。其中，云服务是今年 4 月初刚刚正式上线的。此前，已经发布过预览版并且向所有用户开放试用。

OCF 云服务分为团队版、商业版和企业版 (Corporate) 三种。**团队版和商业版云服务**是包含一定存储容量和流量的套餐包，其基础年费分别为 190 美元（约合人民币 1.6 万元）和 490 美元（约合人民币 4 万元），并按照写作人员数量（每人每月 68 美元，约合人民币 460 元）和领域专家数量（每人每月 19 美元，约合人民币 130 元）按需付费。**企业版云服务**可以根据用户需求定制存储容量和流量，另行评估报价。

![](https://pica.zhimg.com/v2-cead136d6b15715fd7ca104e4f1f520c_1440w.jpg){:standalone}

OCF 企业旗舰版 (Enterprise) 是**私有化部署的专用版本**，根据写作人员数量和领域专家数量按需付费。网页上提供了价格计算器，根据需要选择好人员数量后即可获得总价格。例如，如果包含三位写作人员和五位领域专家，OCF 企业旗舰版的年费为 10584 美元（约合人民币 7.2 万元）。

![](https://pica.zhimg.com/v2-d4dd0fa4d1cbb79c60242d443d3cf730_1440w.jpg){:standalone}

> 企业旗舰版中的领域专家数量需要分档选择，起步数量是 5 位。其他选项有 10 位、25位和 50位等。

我以前整理过一篇资深专家探讨内容管理系统的笔记，里面详细介绍了云服务和私有化部署的优缺点、定制开发的注意事项等。如果你有这方面的困惑，可以去读一下：[我该怎样部署内容管理系统，私有化部署还是云服务模式?]

## 学习资源

**产品文档**。和其它所有 Oxygen 产品一样，[OCT 用户手册]也是开源的，对所有人开放。

![](https://pica.zhimg.com/v2-a1f44598dee3e962aed5d3d088380416_1440w.jpg){:standalone}

**用户论坛**。如果你遇到技术问题或者有新的功能需求，可以去 [Oxygen 论坛上的 OCF 版块][OCF论坛]发贴。你也可以在论坛中查询其他人的贴子，或许已经有人提过类似的问题或需求了呢！

> 用户论坛的初衷虽然是用户互助，但 Oxygen XML 的技术支持也经常亲自下场回复哦！

![](https://picx.zhimg.com/v2-10f460857c79b7b0959d277963619e3b_1440w.jpg){:standalone}

**一对一服务**。如果你希望寻求一对一的人工支持，可以发邮件到 [support@oxygenxml.com](mailto:support@oxygenxml.com?subject=Oxygen%20Content%20Fusion%20) 或者[在线填写并提交工单][Oxygen工单]。收到邮件或工单后，Oxygen 的技术支持会在第一时间回复你。

![](https://pic1.zhimg.com/v2-63626b79d458e5304ed16cbdd72919ec_1440w.jpg){:standalone}

除此之外，Oxygen 也会经常举办网络研讨会、发布产品演示视频以及参加行业会议的视频和幻灯片等。

## 试用通道

OCF 云服务和私有化部署（即企业旗舰版），均已开放试用。**界面语言可以选择简体中文**。

OCF 云服务试用版的存储容量和流量分别为 5G 和 10G，与团队版相同。试用地址如下：\\
<https://fusion.oxygenxml.com/>

![](https://pic4.zhimg.com/v2-78c99f07053bba076d5787dc11661b15_1440w.jpg){:standalone}

支持私有化部署的企业旗舰版，需要注册并登录 Oxygen 帐号后方可下载。

![](https://pic4.zhimg.com/v2-d623e5d66e4154e1b73e471ecf914019_1440w.jpg){:standalone}

目前，OCF 云服务和私有化部署的试用期均为 60 天。使用 OCF 产品时，欢迎你**记录下你的使用体验、改进建议或者新的功能需求，到[我的公众号同名文章]下方留言**。截至 2026 年 6 月 4 日中午 12 点整（即三周后），高赞留言前五的读者将**获得 Oxygen 赠送的福利：试用期延长 30 天！**

OCF 中的所有项目都可以同步到外部存储库。也就是说，你在试用期间使用 OCF 干的活，最后都能装进自己的口袋里。有内容管理系统采购计划的、想体验内容管理系统的、正想学习结构化写作的以及有技术文档类短期项目的小伙伴儿们，赶紧的吧！叫上团队中的其他小伙伴儿一起，可以体验更多协作功能。

> 如果你的使用体验、改进建议或功能需求比较长，你可以将其整理成文件[发送给我][与我联系]，中英文皆可。不过，也别忘了将精简版发送在留言区里哈！


<!-- links -->

[国内的内容管理系统乱象]: https://mp.weixin.qq.com/s/PUFG0-qCuHze0-QLmI5R8A

[CMS避雷指南]: https://mp.weixin.qq.com/s/PUFG0-qCuHze0-QLmI5R8A

[与我联系]: https://mp.weixin.qq.com/s/xy3f0Z-S6qhdaPKVrCGkcA

[Oxygen XML]: https://www.oxygenxml.com/ "Oxygen XML 官网"

[Oxygen Content Fusion]: https://www.oxygenxml.com/content_fusion.html

[我该怎样部署内容管理系统，私有化部署还是云服务模式?]: {% link _posts/2024-05-28-how-to-deploy-content-management-systems.md %}

[OCT 用户手册]: https://www.oxygenxml.com/doc/versions/9.1/ug-content-fusion-cloud/ "Oxygen Content Fusion 云用户手册"

[OCF论坛]: https://www.oxygenxml.com/forum/forum31.html "Oxygen Content Fusion 论坛"

[Oxygen工单]: https://www.oxygenxml.com/techSupport.html "Oxygen XML 技术支持"

[我的公众号同名文章]: https://mp.weixin.qq.com/s/8OQfqcCBudAYvhKb2QRpnA "Oxygen自研内容管理系统初长成，现已全面开放试用！"