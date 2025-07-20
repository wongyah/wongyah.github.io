---
title: "不知不觉，我竟炼成了一枚 Markdown 深度用户"
excerpt: "我仍然在“恶补”的路上越走越远。有个朋友忍不住调侃我，一个被耽误了的前端工程师……"
header:
  teaser: https://picx.zhimg.com/70/v2-ba54a55b2494823841bd99793387a00e_1440w.avis?source=172ae18b&biz_tag=Post
  overlay_image: https://picx.zhimg.com/70/v2-ba54a55b2494823841bd99793387a00e_1440w.avis?source=172ae18b&biz_tag=Post
  overlay_filter: 0.5
tags: 内容管理 Markdown
---

最开始看见 Markdown 这个词，似乎是从招聘网站上。

当时，我虽然也下载了一个非常简单的编辑器，参照教程小小试了一下，但的确没觉得它会有什么大用处。

它学起来很简单，但这也意味着功能简陋，看上去就像那些因网速太慢而显示为白底蓝字的网页一样。

那时的我绝对想不到，有一天竟会炼成它的深度用户：不管是记笔记，还是发公号、做网站，都泡在 Markdown 里。

本文将回顾那段不经意的“成长”经历，细数那些步步深入的探索之欲，希望能为那些初涉 Markdown 的小伙伴们提供一点有用的参考。

## 学习笔记

我用 Markdown 做的第一件事，是记笔记。

当时，我正在研究 Adobe FrameMaker 的用户手册和开发者文档。文档是全英文的，里面的内容很多，有些地方还特别晦涩。

我并不是每天都看这些文档，有时隔好几天甚至好几星期才又重新捡起来看。每次重新看时，上次看过的内容又忘得差不多了，又得重新复习一遍，总是感觉像在原地踏步一样。

于是，我有了记笔记的打算。有了笔记，我就可以在重新捡起那些长长的文档时，先快速浏览一遍上次记录的要点。如果还能在手机上随时翻阅一下，那就最好不过了。

如果用 Word 记笔记，打字的同时还要不断设置格式。不仅记录速度慢、影响阅读，而且文档的保存和多设备同步也比较麻烦。

就这样，我开始使用有道云笔记里面的 Markdown。记笔记时，我使用网页版中的 Markdown 在线编辑器（我在电脑上阅读 Adobe FrameMaker 的文档）。翻阅笔记时，我大多使用手机上的 APP。

![我的笔记](https://pic2.zhimg.com/v2-310b0c1c1a20da3b7fe473dff34bb3f9_1440w.jpg "我的笔记"){: standalone}

相对于 Word 文档中丰富的格式设置，有道云笔记中 Markdown 的预览格式自然是简约得很。但对于笔记而言，已经足够了。

使用 Markdown 记笔记最大好处可以用一个字形容 —— 快！看到哪，记到哪，几乎不怎么中断阅读或学习的过程。

但也有不爽之处：在线编辑器不仅编辑区域小，而且功能有限，时不时还会遇到一两个尴尬的设计。比如，输入列表时，双回车并不能结束列表，而是会留下一个带编号的空行，需要手动删除。

![有道云笔记中的尴尬设计](https://picx.zhimg.com/v2-824a2349ade1e56649ca2ac7f5812635_b.webp "有道云笔记中的尴尬设计"){: standalone}

现在，我已经改用 VS Code 中的 Markdown 记笔记了。一般情况下，将笔记存储在电脑上。如果的确需要在手机上翻阅的，再将它们导入有道云笔记。

反正，Markdown 是纯文本文件，体积特别特别小，占不了多少空间，导入速度也很快。

如果你正在考虑入坑 Markdown，不妨直接上手 VS Code 吧。VS Code 是微软出品的免费软件哦！

[VS Code](https://code.visualstudio.com/Download) 中的 Markdown 扩展（类似于插件）：

- Markdown All in One
- Markdown Table Maker
- Markdown Table Prettifier

*[VS Code]: Visual Studio Code

## 公号文章

我用 Markdown 做的第二件事，是写文章。

我的公众号申请的很早，但在 2020 年年初才开始发布文章。如果你翻阅过我最早发布的前 5 篇文章，可能会发现这些文章在排版上有一个循序渐进、逐步提升的过程。

实际上，这种改进一直持续到今天。只是，很多改进会让排版过程更可靠、更高效，但却不会改变文章的视觉效果。

我跑题了吗? 没有。我之所以改用 Markdown 写文章，除了可以写得更省心以外，更重要的原因是**可以实现自动排版**。

{% include video.html
  autoplay=false
  loop=false
  src="https://vdn3.vzuu.com/SD/f93e24f8-2811-11ed-b57f-02d155ef1ad8.mp4?auth_key=1753001350-0-0-59c6ed685e35e05aca7351d7354c3ff6&bu=078babd7&c=avc.1.1&disable_local_cache=1&expiration=1753001350&f=mp4&pu=078babd7&v=tx"
%}

说起 Markdown，如今的人们都会将它描述为一种轻量级标记**语言**。但实际上，Markdown 原本是 [John Gruber 在 2004 年发布的一款格式转换器 （converter）](https://daringfireball.net/projects/markdown/) —— 一个能将纯文本文件转换为 HTML 文件的小软件。

现在我们所说的 Markdown 语法，其实只是 John Gruber 为 Markdown 软件的输入文件（纯文本文件）制定的书写规则。也就是说，只有按照这样的规则书写的纯文本文件，才能被 Markdown 软件成功转换成 HTML 文件。

无论是电脑端还是手机端的网页源码都是 HTML，公众号文章也不例外。如今 Markdown 语法大行其道，除了它易读易写易学的优点之外，更重要的原因是将它转换成 HTML 文件实在太方便了。有了 HTML 文件，再使用 CSS 设置好格式，一个 Markdown 文件就变身成你看到的公众号文章了。

只是，与网页通常使用外部样式表不同，公众号文章只允许使用内联样式（行内样式）。使用内联样式，需要为每个元素单独设置样式（style 属性）。这就意味着，每发布一篇文章，都要在样式设置上花费大量时间做重复性工作（最初我大约需要 3 天/篇）。

好在，HTML 也是标记语言，可以使用 XSLT 进行批量处理。再借助 PowerShell（或 BAT），就可以像动图里那样在分分钟内搞定公众号文章的排版了。

![我的公号文章排版流程图](https://pica.zhimg.com/v2-2c1ca7a20ee37767e8848746567cf298_1440w.jpg "我的公号文章排版流程图"){: standalone}

## 小型网站

我用 Markdown 做的第三件事，是建网站。

Github 个人主页、[Jekyll][] 和 [Hugo][] 等静态网站生成工具的出现，使（搭）建（网）站变得简单起来，而且几乎全免费。对于想凭借自己的专业积累获得个人识别度或个人品牌的职场人士而言，这无疑是一个不小的诱惑。

在动手搭建网站之前，我被很多博文安利“三步轻松搞定个人网站”。但真正实施起来，却是步步藏雷，毫不轻松。单单是 Markdown，也暗藏了不少的说道。

![Markdown编译器大全](https://pica.zhimg.com/v2-87fbb72c710ab3c648da52f532e57742_1440w.jpg "Markdown编译器大全"){:standalone}

时至今日，Markdown 仍然没有一个统一的官方语法标准。每个 Markdown 编译器都有自己的一套语法，谁跟谁都不太一样。使用 Markdown 编译器之前，必须仔细阅读文档（user guide）里的语法说明。

通常，John Gruber 定义的语法被视为基本语法。像表格、术语列表、任务列表、脚注等常用的语法被归类为扩展语法。除此之外，有些编译器还支持上下标、缩写，甚至还可以自定义属性（比如为元素添加类属性和 ID 属性等）。

一般而言，所有的 Markdown 编译器都支持基本语法，但扩展语法和不常见的特殊语法的支持情况则各不相同。比如，有道云笔记中的 Markdown 支持术语列表和脚注，而 VS Code 中的 Markdown 则不支持这两个语法。

网站中的内容多种多样，所以网站生成工具一般选用语法较为丰富的 Markdown 编译器。Jekyll 的默认 Markdown 编译器是 [kramdown][]，可以为任意元素添加属性。Hugo 的默认 Markdown 编译器是 Goldmark，只支持基本语法，但允许将其修改为堪称“瑞士军刀”的 [Pandoc][]。

> 注意到了吗? 我在自动排版公众号文章时，使用的 Markdown 编译器就是 Pandoc。

我使用的网站生成工具是 Jekyll，因为 Jekyll 官方文档的内容最为齐全。网站中的博客文章、技术教程几乎都是用的 Markdown。

当然，要创建一个独具特色的个人网站，光有 Markdown 是远远不够的。除了将 Jekyll 官方文档翻的滚瓜烂熟之外，我还不得不“熟知”了 [Git][]、[Sass][]、[Liquid][]、[YAML][]、[Bootstrap][]、[jQuery][]……

为了以后在网站上添加新功能，我仍然在“恶补”的路上越走越远。有个朋友忍不住调侃我，一个被耽误了的前端工程师！

最后，送上一份不容错过的优质资源：

- [Markdown 语法中心](https://markdown-syntax-hub.tcblabber.cn/)
- [Markdown 编译器大全](https://github.com/markdown/markdown.github.com/wiki/Implementations)


<!-- link definition -->
[kramdown]: https://kramdown.gettalong.org/index.html
[Pandoc]: https://pandoc.org/index.html
[Jekyll]: https://jekyllrb.com/ "Jekyll官网"
[Git]: https://git-scm.com/ "Git官网"
[Sass]: https://sass-lang.com/ "Sass官网"
[Liquid]: https://shopify.github.io/liquid/ "Liquid官方文档"
[YAML]: https://yaml.org/ "YAML官网"
[Bootstrap]: https://getbootstrap.com/ "Bootstrap官网"
[jQuery]: https://jquery.com/ "jQuery官网"
[Hugo]: https://gohugo.io/ "Hugo官网"