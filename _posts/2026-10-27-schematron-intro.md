---
title: 研究了下 Schematron，验证内容逻辑有用但也没那么玄幻
excerpt: Schematron 可以实现很多 DTD、XML Schema 和 RELAX NG 实现不了的验证，但它也不是万能的。
header: 
  teaser: https://pica.zhimg.com/v2-5e0700b1d8c9efd78d6d78ea3c97b1f3_720w.jpg
  overlay_image: https://pica.zhimg.com/v2-5e0700b1d8c9efd78d6d78ea3c97b1f3_720w.jpg
  overlay_filter: 0.5
tags: 内容管理
---

最近，Schematron 好像有点热。

内容管理软件开发商用技术语言科普 [Schematron 是结构化文档业务规则的守门员][article1]，技术文档工程师用实例演示 [Schematron 如何校验 Markdown 格式的文档][article2]。

我看过之后好奇又纳闷：又出新规范啦? 赶紧去各大行业会议上查了查，果然有事！

去年九月，ISO 发布了新版 Schematron ([Schematron 2025](https://www.iso.org/standard/85625.html))。此次改版建议的提出者之一 Erik Siegel 在行业会议 [XML Prague 2026](https://www.xmlprague.cz/) 上介绍了 Schematron 的背景以及新版中的更新要点。

![截图：Schematron 2025](https://picx.zhimg.com/v2-4734337eb0cc208bc4299a91628dc8a1_1440w.jpg){: standalone style="border: 2pt solid rgb(150, 150, 150)"}

本文将从一个新手的角度介绍 Schematron 在文档内容验证中的角色、应用场景和验证方法，希望能为热爱结构化文档技术的小伙伴儿们掀开一个新领域。

## 文档结构验证

对于 DITA、S1000D 等结构化文档，文档内容验证是文档编辑过程中必不可少的一环。验证过程通常分为三个阶段：

**XML 语法验证**。DITA、S1000D 等结构化文档都是 XML 文件，必须符合 XML 的语法规则，比如每个元素必须有结束标签、元素属性的属性值必须加引号。通过了 XML 语法验证的文档，是*格式良好*的文档。通不过 XML 语法验证的文档根本不能用，任何 XML 软件都处理不了。

**文档类型定义验证**。文档类型定义文件定义合法的元素和属性、元素之间的嵌套关系等。例如，在 DITA 的任务型主题中，每个 `<steps>` 元素中必须包含一个 `<step>` 元素，每个 `<step>` 元素中能且只能包含一个 `<cmd>` 元素。通过了文档类型定义验证的文档，是*有效*的文档。

文档类型定义文件主要有三种：DTD、XML Schema (XSD) 和 RELAX NG。这三种文档类型定义文件，DITA 都提供，但 RELAX NG 是标准版。S1000D 从第四版起，只提供 XML Schema。

**其他规则验证**。对于结构化文档，其他规则一般是指业务规则，也就是跟文档内容有关的规则。例如，主题标题不能为空，安全信息必须按危险级别由高到低排列。通过了业务规则验证的文档，目前还没有一个正式的名称。

*验证业务规则通常使用 Schematron*。S1000D 中的业务规则交换 (BREX) 文件通常会转换为 Schematron，用于工作流程中的文档验证环节。自 28.1 版起，Oxygen XML Editor 原生支持 S1000D 4.x，并内置了将 S1000D BREX 转换为 Schematron 的转换场景。

## 什么是 Schematron?

Schematron 是一种用来**验证 XML 文件**的模式语言，最初由澳大利亚程序员 Rick Jelliffe 在 1999 年发布。后来被 ISO 接管，并于 2006、2010、2016、2020 和 2025 年分别更新了五个版本。

这里插句题外话。开发 Schematron 时，Rick Jelliffe 正在台湾中央研究院工作。他精通中文，创建过中英双语的 XML 学习资源网站，开发过中英文混排的排版系统，极大地促进了 XML 技术在亚洲的发展。

Schematron 可以定义两种规则：

**断言**检查触发该规则的节点满不满足验证条件，如果不满足验证条件，弹出错误消息（即无效）。例如，你可以使用断言检查包装总重量是否**小于**总重限制，如果包装总重量大于总重限制（即不满足验证条件），弹出错误消息“超重了！总重不得超过 100”。

![截图：在 Oxygen XML Editor 中使用 Schematron 验证 DITA 文件](https://pic1.zhimg.com/v2-23bed0c655d8328e77e3a5a73595513a_1440w.jpg){:standalone}

**报告**检查触发该规则的节点满不满足验证条件，如果满足验证条件，弹出报告消息。例如，你可以使用报告检查包装总重量是否**大于**总重限制，如果包装总重量大于总重限制（即满足验证条件），弹出报告消息“总重超过 100 了”。

你可能看出来了：**报告和断言的唯一实质性区别是验证条件相反**。也就是说，断言的目的是提示错误，报告的目的是庆贺成功。文档结构验证通常是用来查找错误的。所以实际使用中，断言用得多，报告用得少。

在文档结构验证中，Schematron 适合用来检查技术参数、数据手册、零备件手册、有章可循的元素内容或属性值、以及特定的逻辑关系或内容结构等。例如，车主手册中的汽车尺寸和重量、电机规格、产品型号（一种格式化的字符串，比如 `TSL7000BEVBA4`）等。

![截图：特斯拉车主手册中的章节](https://pic3.zhimg.com/v2-f0549d39d86d37f25cac789edf79c54e_1440w.jpg){: standalone style="border: 2pt solid rgb(150, 150, 150)"}

## Schematron 的优点

Schematron 本身也是 XML 文件，遵循 XML 语法规则。下图中是一个简单的 Schematron 文件，里面只有一条规则 (`<rule>`)，这条规则里只有一条断言 (`<assert>`)。

![Schematron代码示例](https://pic4.zhimg.com/v2-2e1b64c4bd67a650afb20d15e02d9ab5_1440w.jpg){:standalone}

示例虽然很简单，但能彰显 Schematron 的魅力：

**简单易学**。Schematron 使用 Xpath 路径表达式匹配 XML 文档中的节点，使用 XPath 布尔表达式作为验证条件。只要掌握一些 XML 和 XPath 基础知识，就能很快学会 Schematron，做很多事情。

**扩展了文档结构验证的范围**。只要能用 Xpath 表达式表示出来的东西，都能用来验证。高手还可以利用 XSLT 进行更高级的验证。总之，Schematron 能实现很多文档类型定义文件（即 DTD、XML Schema 和 RELAX NG）实现不了的验证。

**自定义错误消息**。在 Schematron 中，可以根据应用场景自定义错误消息，使消息内容更加人性化。 在错误消息中，还可以引用被验证的 XML 文件中的内容，使消息内容更加具体，比如在消息中插入报错的内容和位置。

不过，Schematron 也不是万能的。对于不能用 XPath 布尔表达式表示出特征的内容，比如讲解概念的段落、说明操作步骤的句子等没有固定表达的内容，它是无能为力的。不幸的是，这类内容还很多。

![截图：特斯拉车主手册中的章节](https://pic3.zhimg.com/v2-c41fa0d42c282af6f677ecf22717f29e_1440w.jpg){: standalone style="border: 2pt solid rgb(150, 150, 150)"}

## 应用 Schematron 验证

在 Oxygen XML 编辑器中，使用 Schematron 验证 XML 文件的方式很多。可以手动验证，可以在 XML Schema 或 RELAX NG 中嵌入 Schematron 规则，还可以在 XML 文档中引用外部 Schematron 文件……

![截图：使用 Schematron 文件手动验证](https://picx.zhimg.com/v2-176fa9617be5189ae243513fb9b2cbdf_1440w.jpg){:standalone}

除此之外，你还可以使用 XProc 管道技术将 Schematron 验证融入自动化工作流，也可以使用 Apache Ant 脚本运行 Schematron 验证。GitHub 上有开箱即用的 [Ant Schematron 任务](https://github.com/Schematron/ant-schematron)。

## 参考资料 {#refs}
{:.no_toc}

1. The Notable People Project. [Rick Jelliffe](https://notablepeopleproject.org/rick_jelliffe). \[未知]\[2026-10-29].
2. Octavian Nadulu (Oxygen XML). [S1000D 4.x Built-in Support](https://blog.oxygenxml.com/topics/s1000d_4_x_built_in_support.html#s1000d_4_x_built_in_support__brex_aware_workflows). \[2026-03-25]\[2026-10-29].
3. Oxygen XML. [Editing Schematron Schemas](https://www.oxygenxml.com/doc/versions/28.1/ug-editor/topics/editing-schematron.html). \[未知]\[2026-11-03].
4. Octavian Nadolu (Oxygen XML). [Getting Started with Creating Schematron Rules and Schematron Quick Fixes](https://www.oxygenxml.com/events/2018/webinar_creating_schematron_rules_and_quick_fixes.html). \[2018-11-28]\[2026-11-03].
{:.small}

<!-- links -->

[article1]: https://mp.weixin.qq.com/s/J7iNb5H9oQfFIsyKqzvhUg

[article2]: https://mp.weixin.qq.com/s/6f-wcU0lFvzS2xs4lh3E4A 

