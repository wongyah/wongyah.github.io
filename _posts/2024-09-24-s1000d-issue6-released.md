---
title: S1000D第六版发布，Logo都换了！
excerpt: 新版 S1000D 在业务规则、公共信息库、、检修计划和数据交换等多个方面有重要更新。
header:
  teaser: https://picx.zhimg.com/70/v2-92284fb597053bd7c2947299dbf2427f_1440w.avis?source=172ae18b&biz_tag=Post
  overlay_image: https://picx.zhimg.com/70/v2-92284fb597053bd7c2947299dbf2427f_1440w.avis?source=172ae18b&biz_tag=Post
  overlay_filter: 0.5
tags: 行业观察 S1000D
toc: false
---

近日，S1000D 指导委员会发布了 [S1000D 第六版 (Issue 6)](https://users.s1000d.org/ProductList.aspx)。S1000D 第六版换上了全新的 Logo。

新版 S1000D 在业务规则、公共信息库、、检修计划和数据交换等多个方面有重要更新。

在**业务规则** (Business Rules) 方面，最大的亮点是新增了业务规则决策点分组 (BRDP groups) 以提高 S1000D 业务规则的易用性。所有的业务规则决策点，按照应用场景被划分为 38 个分组。每个业务规则决策点，必须且只能隶属于一个分组。

> 关于业务规则决策点分组的更多详情，请参见 S1000D 第六版 的 2.5.4 节（第 155-158 页）。
>
> 要查找每个分组中的业务规则决策点或某个业务规则决策点所在的分组，请解压 S1000D 文件包中的 `BRDP Index.zip` 或 `BR Template.zip` 两个压缩包，然后从解压出的任一文件中的查找。S1000D 规范（PDF 文件）中并不提供各个业务规则决策点分组的具体内容。

在**公共信息库** (Common Information Repository, CIR) 方面，新增了两种数据模块类型：

- 危险信息 CIR 数据模块，集中存放可在多个数据模块中使用的危险信息。
- 术语信息 CIR 数据模块，集中存放可在多个数据模块中使用的术语及其定义（比如，缩略语和专业术语）。

> 关于新增的两个 CIR 数据模块的更多详情，请参见 S1000D 第六版 的 3.9.5.2.11.15 节和 3.9.5.2.11.15 节（第 1407-1418 页）。

在**检修计划** (maintenance planning) 方面，修改了多个元素的定义。

|  元素  |  新增子元素  |
|:---|:---|
|  `<inspectionDefinition>`  |  `<rqmtSource>`  |
|  `<timeLimitInfo>`  |  `<zoneRef>`<br/>`<rqmtSource>`<br/>`<refs>` |
|  `<timeLimit>`<br/>`<limitType>`  |  `<sampling>`  |

> 关于检修计划中被修改元素的更多详情，请参见 3.9.5.2.5 节（第 804 页和第 823-826 页）。

在**维护检查** (maintenance checklists and inspections) 方面，新增了多个新元素。

|  新元素  |  子元素  |
|:---|:---|
|  `<indicationGroup>`  |  `<condition>`<br/>`<actionGroup>`  |
|  `<condition>`  |  `<para>`<br/>`<note>`<br/>`<figure>`<br/>...  |
|  `<actionGroup>`  |  `<malfunction>`<br/>`<remedyAction>`  |
|  `<malfunction>`  |  `<para>`<br/>`<remedyAction>`  |
|  `<remedyAction>`  |  `<warning>`<br/>`para`<br/>`<table>`<br/>...  |

> `<indicationGroup>` 是 `<checkListStep>` 元素中新增的子元素。更多详情，请参见 3.9.5.2.14 节（第 1635-1639 页）。

在**数据交换** (data interchange) 方面，文件数据包中新增了对非 S1000D 文件的支持，比如 PDF 文件。在 S1000D 5.0 中，虽然数据模块中也可以添加指向 PDF 文件的链接，但是所有的 PDF 文件都被当作图片 (illustration) 对待。

> 关于数据交换中非 S1000D 文件的更多详情，请参见 4.8 节（第 2026-2028 页）。

除此之外，S1000D 第六版还新增了对矢量图 SVG 的支持，新增、修改或删除了其他的一些业务规则、元素和属性。
