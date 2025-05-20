---
title: 当文档结构化大势已成，落单的我们该何去何从?
excerpt: "新的方法和工具总是在实际使用过程中熟能生巧，宝贵的经验总是在不断的尝试和探索中精炼而成。"
header:
  teaser: https://pic1.zhimg.com/70/v2-aa0a6d7ac431007100d98e039ad5e4b0_1440w.avis?source=172ae18b&biz_tag=Post
  overlay_image: https://pic1.zhimg.com/70/v2-aa0a6d7ac431007100d98e039ad5e4b0_1440w.avis?source=172ae18b&biz_tag=Post
  overlay_filter: 0.5
tags: 内容管理 DITA
---

几年前，有人以“言必称 DITA”形容当时的技术传播圈儿。那个热乎劲儿，与今年的 ChatGPT 能有一拼。

有实力的大企业自不必说，纷纷步入[文档结构化][结构化文档]的新时代。一些中小企业也不甘落后，审度自身，进退取舍。有的充分发扬“没有条件，创造条件也要上”的奋斗精神，凭借自身的开发能力动手搞起了自研。有的则转向了开源资源丰富的轻量级标记语言，主打一个敏捷轻便。

不过，仍有一些企业至今还停留在 Word 式的传统工作流程中，没有去拥抱这股行业潮流。倒不是说非得跟风，只是当潮流变成主流，落单的不仅仅是企业，还会裹挟员工的未来。

有些小伙伴儿不希望被落下，正试图以一己之力推动所在企业向着[文档结构化][结构化文档]的方向挪移。本文将以 DITA 的上线过程为主线，简要说明每一阶段需要做的事情和可能用到的方法和工具，希望能为积极进取的他们提供一点点助力。

## 内容评估

当你开始对 DITA 春心萌动时，肯定有一个问题会在脑海里循环播放：它适合我吗? 如何判断它是不是适合我?

最豪横的做法自然是，请一位既熟悉你的产品又精通 DITA 的独立第三方资深专家来帮你做一个专业评估。

如果你的产品文档数量多、内容复杂，资深专家的意见会帮你大幅缩短决策时间。如果你最终决定上线 DITA，专家的评估意见还能在接下来的 DITA 过渡期帮你躲过很多潜在的坑。

不过，即使请专家来帮忙，你仍然需要做一些准备工作，以便双方到时候都能更快地进入角色：

- 预估一下自己总共有多少文档或内容。比如共有多少本文档，每本文档平均有多少页（或者多少个字）等等。
- 对文档进行分类汇总，初步统计一下需要迁移到 DITA 的文档数量。如果遇到不知该归为哪一类的文档，记录下来以便向专家咨询。
- 准备一本或几本有代表性的文档，用来作为试用 DITA 的小样本进行深度分析和评估。

如果你暂时不想如此高调地搞这么一个大动作，或者文档的内容相对简单且量也不大，又或者只是单纯地想丰富一下自己的经验，也可以亲自（组队）上阵、丰衣足食！

作为一个开放的标准，DITA 拥有广泛的群众基础、丰富的应用实践和[繁多的入门资源][DITA入门]。只要花一些时间，有一点耐心，你和你的团队成员不需要什么大额投入就可以掌握 DITA 的基础知识和一些基本的应用技能。

然后，你就可以在之前精选的小样本上进行 DITA 初体验了！

不过，在正式动手之前，你最好有一些迎接挑战的心理准备。[DITA 的核心理念]与传统的写作方法有很大区别，这不仅需要你和你的团队成员摒弃原有的思考方式和写作方式，还可能需要调整团队内部和外部的协作流程。

正是由于这个原因，对于绝大多数企业来说，**文档结构化的第一步**通常是基于主题化写作和精益写作的新理念重新编写现有的文档内容。

如果你已经有了可用的 DITA 编辑器，马上试用新工具吧！如果还没有，也别着急，使用你手头上现有的非结构化软件（比如 MS Word）即可。结构化写作的开创者 Robert Horn 当年也没有 DITA 编辑器可用呢，他那时用的软件肯定比今天的 MS Word 差远了！*说不定，还有手写的呢！*{: style="color: rgb(150, 150, 150);  font-style: normal;"}

![早期结构化写作的示例](https://pic3.zhimg.com/v2-c554427d073f9e9dfb8a6a59e42089a8_1440w.jpg){:standalone}

## 工具链选择

完成内容评估之后，如果你最终决定上线 DITA，接下来要做的事情就是选择合适的软件。*em…… 不是一款软件，而是一串儿软件！*{: style="color: rgb(150, 150, 150);  font-style: normal;"}

### 编辑器

理论上，任何一款纯文本编辑器都可以编辑 DITA 文件，哪怕是 Windows 自带的记事本也行。只不过没有人会这么做，不仅编辑速度贼慢，还贼容易出错！

所以，你首先得选择一款支持 DITA 的 XML 编辑器（以下简称 DITA 编辑器）。

按照授权方式，目前市面上的 DITA 编辑器大体上可分为三类：永久授权、付费订阅和免费软件。

**永久授权**的 DITA 编辑器通常是单机软件或支持本地部署的软件（浮动许可证）。这类编辑器一般功能齐全，稳定性好，可以离线使用。但由于要一次性买断软件的使用权，不仅前期投入很高，当软件需要升级时还需要额外付费。

永久授权的 DITA 编辑器
{:.table-caption}

|  名称  |  开发商  |
|:---|:---|
|  Adobe FrameMaker 2019 及此前的版本  |  Adobe  |
|  Adobe RoboHelp 2019 及此前的版本  |  Adobe  |
|  Oxygen XML Editor  |  Syncro Soft  |
|  Arbortext Editor  |  PTC  |
|  XMetal Author Enterprise  |  JustSystems  |
|  Altova Authentic Desktop  |  Altova  |

**付费订阅**的 DITA 编辑器通常是基于网络或云服务的在线软件。这类编辑器不受设备和地点的限制，只要能上网的地方，就可以随时随地随意使用。订阅周期一般以年为单位，但费用可以选择年付或月付。在订阅期内，免费升级软件。

随着软件运营服务 (SaaS)的快速发展，一些技术出版领域的传统大牌也纷纷加入付费订阅的行列。Adobe FrameMaker 和 Adobe RoboHelp 自 2020 开始不再提供永久授权，用户只能付费订阅。Syncro Soft 也正式推出了在线编辑器 Oxygen XML Web Author，而且其经典产品 Oxygen XML Editor 支持永久授权和付费订阅两种价格模式。

不过在选择在线的 DITA 编辑器之前，一定要先测试一下它的实际编辑速度和网络的连接稳定性。由于 DITA 编辑器的开发商大多是国外企业，服务器也位于国外，这在一定程度上会影响国内用户的访问速度和连接稳定性。

付费订阅的 DITA 编辑器
{:.table-caption}

|  名称  |  开发商  |
|:---|:---|
|  Adobe FrameMaker 2020 及以上版本  |  Adobe  |
|  Adobe RoboHelp 2020 及以上版本  |  Adobe  |
|  Oxygen XML Web Author  |  Syncro Soft  |
|  Altova Authentic Browser Plugin  |  Altova  |
|  Fonto Editor  |  RWS  |
|  Xeditor  |  Xpublisher  |

**免费软件**在 DITA 编辑器中不太常见，我知道的就只有 Codex。相对于付费软件，Codex 的用户界面和功能都显示特别简单，适合新手练练手。*不要期望太高哦！*{: style="color: rgb(150, 150, 150); font-style: normal;"}

免费的 DITA 编辑器
{:.table-caption}

|  名称  |  开发商  |
|:---|:---|
|  Codex  |  Codex Systems  |

软件开发中常见的一些 XML 编辑器虽然免费（比如 VS Code、XMLSpy），但如果用作 DITA 编辑器的话，对于一般的技术写作人员来说还是太难用了。没有标签提示、属性选择、结构验证等功能，一般人很容易迷失在 DITA 元素的海洋里，尤其是处于入门阶段的新手。

### 发布工具

DITA 文件是 XML 格式的纯文本文件，必须得经过 DITA 发布工具处理之后才能变成大家常见的文档形式（网页、电子书或 PDF 等）。

所以，你还得选择一款 DITA 发布工具。不然，总不能把一大堆纯文本文件发给别人，让人家使用记事本看吧?

目前应用最广泛的 DITA 发布工具，自然是开源的 [DITA-OT]。市面上主流的 DITA 编辑器，比如 Adobe FrameMaker 和 Oxygen XML Editor，几乎都支持 DITA-OT。

如果需要功能更强大或者使用更便捷的 DITA 发布工具，可以考虑商业软件。

DITA 发布工具
{:.table-caption}

|  名称  |  开发商  |  类别  |
|:---|:---|:---|
|  DITA-OT  |  开源社区  |  开源软件  |
|  Adobe FrameMaker  |  Adobe  |  商业软件  |
|  Oxygen Publishing Engine  |  Syncro Soft  |  商业软件  |
|  ePublisher  |  WebWorks  |  商业软件  |

当发布 PDF 文件时，如果你对排版的要求比较高，可能需要将 DITA 文件转换成传统排版软件支持的格式（比如 MS Word、Adobe FrameMaker 或 Adobe InDesign），然后再在这些排版软件里编辑发布。

借助插件，DITA-OT 可以将 DITA 转换成 Word 文件或可导入 Adobe InDesign 的文件。

作为页面排版界的顶流，Adobe FrameMaker 编辑、处理结构化文档和非结构化文档的功能都很强大。如果是结构复杂的长篇文档，可以使用 FrameMaker 完成 DITA 到非结构化文档（.fm）的转换、编辑和输出。一气呵成！

输出 PDF 的软件或插件
{:.table-caption}

|  名称  |  开发商  |  类别  |
|:---|:---|:---|
|  AH Formatter  |  Antenna House  |  商业软件  |
|  XEP Engine  |  RenderX  |  商业软件，但允许个人申请免费使用  |
|  FOP  |  Apache  |  开源软件  |
|  AH PDF5-ML Plugin  |  Antenna House  |  开源的 DITA-OT 插件  |
|  IdXML (InDesign XML)  |  Congility  |  付费的 DITA-OT 插件  |
|  DITA-FMx  |  Leximation  |  付费的 FrameMaker 插件  |

### 内容管理系统

有了编辑器和发布工具，貌似万事俱备了，但……别高兴得太早。真正的挑战才刚刚到来！

Guthub 上有一个叫做 "[DITA-Mini-Manual][结构化文档]" 的开源项目，将一本 1960 年代的 Mini 汽车车主手册用 DITA 重写了的一遍。

这本车主手册大约有 40 来页，改成 DITA 后变成了 70 多个主题。也就是说，本来只要管理一个 Word 文件就可以了，改用 DITA 后需要管理 70 多个 XML 文件。如果再加上图片，差不多得有 100 个文件了吧?！

文件数量的激增势必会使文件和内容的查找、更新和管理变得困难起来。如果只有几百个文件，你尚且可以手动管理 —— 为 DITA 文件和文件夹制定一套命名规则即可。但如果文件数量成千上万，你恐怕就必须得有一套内容管理系统了！

内容管理系统
{:.table-caption}

| 名称                     | 开发商             |
|:-------------------------|:-------------------|
| Adobe Experience Manager | Adobe              |
| Astoria On-Demand <br> Astoria On-Premise     | RWS |
| Author-it                | Author-it          |
| DITAworks Webtop         | *instinctools GmbH |
| Tridion                  | RWS                |

除了搜索和查找功能，内容管理系统通常还提供版本管理、在线协作、发布流程管理等功能，有的还会自带编辑器和发布工具。

然而，对于大部分企业的技术文档团队而言，**内容管理系统的最大槽点是价格**。就像某平台的技术文档团队负责人在一次公开演讲中所说，看完产品演示觉得什么都特别好，价格自然也特别“高大上”，可我们没没没没没钱啊！咋整?！

正因如此，企业在决定是否推进技术文档的结构化转型时，经济因素往往具有一票否决权。这也是很多中小企业 —— 尤其是那些（软件）开发能力相对较弱的传统制造业中的企业，在转型之路上可能遭遇的最大拦路虎。

不过，随着结构化文档在国内的快速普及，支持 DITA 的国产内容管理系统也慢慢出现了，比如上海美嘉林的艾美 (iMe)。相对于国外产品，国产的内容管理系统在价格上肯定会有较大的优势，或许能让不少企业开心地脱困。

> 更多关于 DITA 的软件工具，请参见 [DITA-OT] 官网首页和 [DITA Writer] 网站。

## 内容迁移

在正式迁移到 DITA 之前，最好基于主题化写作和精益写作的核心理念将所有内容重写一遍。良好的内容结构和内容一致性，会大大减少迁移过程中妖魔鬼怪。

如果内容量不太大，可以依靠纯人工方式完成迁移，即复制-粘贴。新的方法和工具总是在实际使用过程中熟能生巧，宝贵的经验总是在不断的尝试和探索中精炼而成。DITA 的优势也需要在实践过程中被逐渐发现、强化，比如内容优化、内容重用、变量设置和内容过滤等。

如果内容量很大，可以使用自动转换工具完成那些重复性工作，然后再进行人工调整。Adobe FrameMaker 和 Oxygen XML Editor 都提供了将 Word 文件自动转换为 DITA 的功能。如果是非结构化的 FrameMaker 文件 (.fm) 就更好办了，Adobe FrameMaker 处理自己的文件当然得心应手得很。

如果还想多了解一下自动转换功能，文末的参考资料或许能帮到你。

## 替代方案

如果直接上线 DITA 让你压力山大，而文档结构也不太复杂的话，你也可以先从 Markdown 开始。

Markdown 语法简单易学，学习资料特别丰富，配套的开源工具也特别多。

前文中提到的开源发布工具 [DITA-OT]，早在 2015 年就已经可以通过 Markdown 插件将 Markdown 文件转换成 DITA 文件，2017 年新增的 LwDITA 插件则是为了支持轻量级 DITA 中的 Markdown 文件（MDITA）。 

另外，如雷贯耳的版本管理工具 Git 和各个当红的代码托管平台（Github、Gitlab、Gitee 以及 Coding 等），还能为你提供版本管理和协作流程。

如果日后公司由于业务发展而变成了 DITA 的刚需，那时再置换到 DITA 就好。相信到时候，这段部署和实践 Markdown 的经历一定会让你在面对更为复杂的 DITA 时轻松很多。

## 参考资料 {#refs}
{:.no_toc}

1. Laura Bellamy, Michelle Carey, etc. DITA Best Practices. IBM Press, 2012: 180-202.
2. James Whitehead, Morgan Friedman. [What is the Cost of Adobe Experience Manager?](https://weareuv.com/what-is-the-cost-of-adobe-experience-manager/#:~:text=And%20so%20if%20we%20were%20to%20generalize%20we,can%20go%20well%20under%20to%20well%20over%20that)
3. [Adobe FrameMaker User Guide: Convert Word documents to DITA](https://help.adobe.com/en_US/framemaker/using/using-framemaker/user-guide/frm_structauth_sa-convert-word-to-dita.html).
4. Radu Coravu. [Migrating MS Word to DITA using the Batch Documents Converter](https://blog.oxygenxml.com/topics/migrating_word_to_dita_bdc/migrating_word_to_dita_using_batch_documents_converter.html). Oxygen XML Blog: 2022-11-29.
5. Cosmin Duna. [Migrating Unstructured Adobe FrameMaker Content to DITA](https://blog.oxygenxml.com/topics/migratingFmToDita.html). Oxygen XML Blog: 2022-10-28.
{:.small}


<!-- link definition -->
[结构化文档]: _posts/2023-02-08-what-chatgpt-mean-for-technical-writers.md "什么是结构化文档?"

[DITA入门]: https://mp.weixin.qq.com/s?__biz=MzA5NzU4ODAwOQ==&mid=2247484333&idx=1&sn=c1cf3773604053d2e0e9c276201b2fdf&chksm=909fc5eba7e84cfd9725c0b8a06d7e1bcea290f51b30542fd890356dd84bfd8e9852c7541985#rd "DITA入门资料"

[DITA 的核心理念]: _posts/2023-02-08-what-chatgpt-mean-for-technical-writers.md "一个DITA主题到底该写多长?"

[DITA-OT]: https://www.dita-ot.org/ "DITA-OT官网"

[DITA Writer]: https://www.ditawriter.com/ "DITA Writer"
