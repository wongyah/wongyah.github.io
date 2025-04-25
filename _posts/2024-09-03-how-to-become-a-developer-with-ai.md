---
title: 编程小白，借助AI大模型真能摇身一变成为“伪程序员”吗?
header:
  teaser: https://pica.zhimg.com/70/v2-648b9a06cf14d4f68bc7652b1f950bde_1440w.avis?source=172ae18b&biz_tag=Post
  overlay_image: https://pica.zhimg.com/70/v2-648b9a06cf14d4f68bc7652b1f950bde_1440w.avis?source=172ae18b&biz_tag=Post
  overlay_filter: 0.5
tags: 人工智能
---

近日，北京语言大学高级翻译学院的[韩林涛老师利用 AI 大模型和腾讯云的产品文档《云点播开发指南》成功开发出了一种非常实用的交互式英语口语学习工具](https://mp.weixin.qq.com/s/a8D-beu-Q3SZ6GV2Z_6a5Q)。

通过这个工具，学生们不仅可以一边看视频，一边练口语，还能通过 AI 评测实时了解练习成绩。更厉害的是，所有的口语练习素材都是依靠 AI 大模型从视频中自动提取的。

![](https://pic3.zhimg.com/80/v2-11c7f55bf1a21e4d7ad565c49be6df88_720w.webp){:standalone style="max-width: 600px;"}

听上去很高深吧? 但韩林涛老师坦言，自己其实是实打实的“英语专业出身”，最多只能算个“半路出家的伪程序员”！

“这种级别的伪程序员，也高出普通人十万八千里吧?！”

“又是一个喜欢钻研、不断突破自己的人间偶像！”

你是不是也正在这样腹诽呢? 

或许这些都对，但绝对没你想的那么遥不可及。

[Stack Overflow 的最新调查]显示，现在学习编程的人里有将近一半没有接受过高等教育，只有高中或以下文化水平。不管是专业程序员还是尚在学习阶段的新手，都喜欢使用 AI 辅助编程。他们认为，AI 可以大大提高他们的工作效率和学习效率。

去年年底写 [2023 年年终总结] 时，我决定尝试使用 AI 大模型来提高工作效率。半年多过去了，我发现我用 AI 大模型做得最多的事情也是编程。

除了提高编程速度之外，AI 大模型还让我做到了很多我以前不敢做、做不了的事情。赋能，这或许就是 AI 大模型让我们欲罢不能的根本原因吧！

借着这个话头，我也来一次现身说法：

AI 辅助编程，其实一点也不难。只要你会说话，把你的需要或者你的问题告诉 AI 大模型，不需要多么深厚的编程基础，不需要懂什么提示工程，你就能做很多事情。

接下来，我会介绍几个真实的、高频出现的应用场景。在这些场景里，你只要让 AI 大模型帮忙写写使用说明、解释一下代码、修改一下现有的代码或者编写一小段代码，就能发现很多小而美的工具，告别很多枯燥的工作，甚至还能写出自己的小应用呢！

> 我常用的 AI 大模型是通义千问，主要是考虑它允许的提示词长度最大，可以上传文件，免费的语音转文字，功能齐全。\
> 但我并不是它的宣传大使，你可以根据自己的喜好选择合适的 AI 大模型。我相信，它们都能做好本文提到的这些事情。

## 发掘长尾工具

[BrightTALK] 是一个国外很流行的在线研讨会 (Webinars) 平台，很多企业界的资深专业人员在那里进行专业演讲或举行专业访谈。

我经常去 BrightTALK 听一些技术传播类的专业分享。所有的演讲和访谈使用的语言都是英语，没有字幕。

![](https://pic1.zhimg.com/80/v2-20cf05ce540588a778de14cad04955da_720w.webp){:standalone  style="max-width: 600px;"}

如果演讲嘉宾或访谈对象的母语是英语，他们的语速会比较快，表达方式也相当灵活，经常一从到底（一段话里只有一个句子，这个句子里连着用了七八个从句甚至更多）。如果演讲嘉宾或访谈对象也像我们一样，将英语作为第二语言，他们的语速稍微慢一些，但口音会有些重。

总之，我说了这么多就是想表达一个意思，“我听不懂，不是因为我英语不好”。<s>而是，他们太不会“说话”了。还有，为什么就没有个字幕?</s>

所以，我打算把视频下载下来，用通义千问转成文本。我只搜到了 GitHub 上的一个小工具好像可以用来下载 BrightTALK 视频。这个小工具叫 [BrightTalk 视频下载器]，只有两颗星 (Star)，基本处于无人问津的状态。

![](https://picx.zhimg.com/80/v2-e910134c80d4ac9e175383aa1cd9b441_720w.webp){:standalone style="max-width: 600px;"}

要在以前，我看到这种无人问津的代码库就会扭头就走。主要是因为，这类代码库要么没有使用说明，要么使用说明写得很粗糙，我这三脚猫的水平根本就不会安装。

这次，我决定试一试。如果安装不顺利，就找通义千问帮帮忙。

我按照 Readme 中的安装说明做完了所有的步骤，但一运行就报错。果然不出所料啊！

于是，我把这个事情的概要、BrightTalk 视频下载器的存储库地址和运行时的报错一起发给了通义千问。

在它的指导下，我又安装了两个 Python 软件包（图形用户界面软件包 [PySimpleGUI] 和 FFmpeg 功能调用软件包 [ffmpeg-python]），BrightTalk 视频下载器才能正常运行了。

![](https://pic4.zhimg.com/80/v2-4879f1e74b25d371d33fb7a1b17729db_720w.webp){:standalone}

和通义千问交流时，我的提示词一点也不讲究，甚至还有点二，就像在向一个朋友求助一样。但就算这样，咱把事儿给办了！

GitHub 上的存储库浩如烟海，像 BrightTalk 视频下载器这样用户少、文档不完善的小应用还有很多很多。如果你也去发掘一下，我相信你也会遇见独一无二的惊喜！

## 批量处理文件

作为一个公众号号主，我每年都要从微信公众平台下载很多数据进行统计分析，比如用户增长数据、流量和渠道分布数据等。

由于平台只允许单次下载最多 90 天的数据（大约 3 个月），我需要下载 6 次才能获得一年的数据。也就是说，每年每项数据都需要下载至少 6 张 Excel 表。

![](https://picx.zhimg.com/80/v2-bfa0b43ca9cddcfd78993e3aaa2f4a99_720w.webp){:standalone}

这些 Excel 表往往不能直接使用，得先进行一些处理。比如，有些 Excel 表中都是文本型数据，需要全部转换为数字格式才能做进一步的统计；有些 Excel 表的第一行是标题行，不便于多表合并。

![](https://pic3.zhimg.com/80/v2-9e3009c93ad350615fa7f60f05d118e2_720w.webp){:standalone}

如果只统计一年的数据，这些繁琐又细致的工作还可以用咱强大的意志力忍一忍。但如果是四、五年甚至更久呢? 如果同时运营多个公众号呢? 先不说别的，上百张工作表堆在面前，咱还能保证得了不出错吗? 

技术的进步都是靠懒惰推动的。为了未来每一年的年末能轻松一点，我觉得应该数据库来管理这些数据。我选择的数据库是微软办公软件中的 Access。

要将这些数据导入 Access 数据库，我同样躲不过一些苦差事：

1. 将所有的用户增长数据工作表从 .xsl 格式转换成 .xslx 格式。这些 Excel 表在打开时有错误提示，转换之后才能成功导入 Access 数据库。
2. 如果 Excel 表中有标题行，删除标题行。
3. 如果 Excel 表中有文本型数据，全部转换为数字格式。
4. 将整理过的所有 Excel 表一张张地导入 Access 数据库中。

不过，微软的办公软件是可以使用 VBA 执行批量处理任务的。微软办公软件已经诞生了 30 多年了，我刚说的那些苦差事应该早就有“懒人”写出标准答案了。果不其然，我真从网上搜到了这么两段 VBA 代码。

第一段代码可以[将 .xsl 格式的 Excel 文件批量转换为 .xslx 格式](https://www.extendoffice.com/documents/excel/1349-excel-batch-convert-xls-to-xlsx.html#:~:text=If%20you%20want%20to%20convert%20multiple%20xls%20files,paste%20the%20following%20code%20in%20the%20Module%20Window)。

![](https://pic1.zhimg.com/80/v2-a93a975bb0cf7e4325d557af8ff2c2c8_720w.webp){:standalone style="max-width: 600px;"}

第二段代码可以[将 Excel 表批量导入 Access 数据库](https://answers.microsoft.com/en-us/msoffice/forum/all/import-multiple-excel-spreadsheets-into-a-single/00d0be17-dadc-450b-a605-916e71fbc1c0)。

![](https://pic4.zhimg.com/80/v2-841f1ee78f0361a6a0ee308c2176683d_720w.webp){:standalone style="max-width: 600px;"}

要在以前，我不知要花多少时间和精力才能将这两段代码改成我能用的样子呢！因为我一点也没学过 VBA，一切都得从零基础教程开始。

这一次，我先让文心一言帮我逐行解释代码，以搞清楚代码的大致结构。然后，我告诉它需要修改或增加的功能，它就能帮我修改代码了。

![](https://pic4.zhimg.com/80/v2-568aa54dc4620ba0a381b2691971e9e1_720w.webp){:standalone}

这是我去年年底为了统计公众号的数据而修改的代码，图中展示的只是其中的一部分。当时，我还在用着文心一言呢！

有时候，AI 大模型修改出来的代码运行不了，或者输出结果不符合预期，我也会自己动手调试、排查错误。

一般而言，AI 大模型写出的代码结构、用到的对象和方法等还是很靠谱的。我只要有针对性地去详细了解一下它们，就可以给出越来越准确的修改要求，AI 大模型的表现就会越来越好。

或许，今年年底我还会借助 AI 大模型进一步完善这些代码，使它们越来越好用。如果你也去尝试一下，我相信你也会效率翻倍，告别很多枯燥和乏味！

## 开发小插件

今年年初，我在 GitHub 上创建了一个技术写作资源库 [Awesome Technical Writing Learning]。资源库的核心文件只有一个：Readme。

Readme 里有一个技术写作资源列表，列表里都是精心挑选出来的免费学习资源和软件工具。

编写列表时，我用到了 GitHub 网站特有的 [Markdown 扩展语法 Alerts][GitHub Alerts]。Alerts 语法提供了 5 种警示标识，可以在 GitHub 网站的任何沟通场景中使用，比如 Readme、问题说明 (Issues) 或拉取请求说明 (Pull Requests) 等。

![](https://pic2.zhimg.com/80/v2-daa027fb482b8421d5085a1bb84dba75_720w.webp){:standalone style="max-width: 600px;"}

然而，其他软件和平台并不支持 Alerts 语法，包括 GitHub 主页默认使用的静态网站生成工具 Jekyll。当我基于资源库的 Readme 生成 GitHub 主页时，Tip 图标和所有格式都不见了，取而代之的是 Markdown 源码 `[!TIP]……`

![](https://pic4.zhimg.com/80/v2-9dbcb317c340a1bcedfeb450d0a432ed_720w.webp){:standalone style="max-width: 600px;"}

我倒是找到一个可以模仿 GitHub Alerts 的小插件，叫做 [Jekyll Alerts 插件]。但是，该插件只是模仿 GitHub Alerts 的外观（CSS 样式表），输入警示信息时使用的语法却是完全不一样的。

![](https://pic3.zhimg.com/80/v2-f1ab96e4f82aaf218c1679871f1467cc_720w.webp){:standalone style="max-width: 600px;"}

为了让资源库的 Readme 保持简洁，我只好自己写个小插件来正确显示 GitHub 主页里的警示信息了。

我先让通义千问解释了一下 Jekyll Alerts 插件的源代码，以搞清楚这个插件的制作原理。然后，我就让通义千问帮忙写了一段 jQuery 代码来实现类似的功能。

![](https://pic1.zhimg.com/80/v2-c81bf673d51f39803890c0d1191d0716_720w.webp){:standalone}

相对于解释代码、写使用说明和修改代码，让 AI 大模型从零开始编写程序确实会复杂一些。不管是布置任务还是沟通问题，我使用的提示词都比较长。除此之外，我还得时不时地亲自修改代码、简化问题以及选择解决方法。

不管过程多曲折，总好过自己从零开始写。完成之后，还会​收获满满的成就感。如果你也去尝试一下，我相信你也会硕果累累​！

> 如果你想了解更多细节，可以查看[完整的对话记录](https://lxblog.com/qianwen/share?shareId=59d194d4-0dae-42f9-bcc1-365c9c7111a9)。\
> 访问 GitHub 存储库 [Awesome Technical Writing Learning] 及 [GitHub 主页](https://resources.docsimpo.work/)，可以查看插件的最终效果。

## 总结

有了 AI 大模型，学习编程的难度已经大大降低了。即使是零基础的小白，也可以在 AI 大模型的帮助或指导下做到一些看似遥不可及的事情。

除了文中提到的，我还会借助 AI 大模型编写 PowerShell 脚本、创建 GitHub Actions 工作流、编写 ActionScript 动画脚本以及技术文档相关的样式表或转换程序等。

如果我成功勾起了你的兴趣，赶紧去动手试一下吧！

<!-- link definition -->

[Stack Overflow 的最新调查]: {% link _posts/2024-08-06-2024-stackoverflow-developer-survey.md %} "2024年Stack Overflow开发者年度调查"

[2023 年年终总结]: https://mp.weixin.qq.com/s?__biz=MzA5NzU4ODAwOQ==&mid=2247487616&idx=1&sn=3bcc84fe9bd05dcc3c770cd445250286&chksm=909fd6c6a7e85fd080bdcd6ef8869eb1ce35c4cb4f0e664b3ba266798180647f53f2cca25170&token=1881577163&lang=zh_CN&poc_token=HFmqwWajJ1qcKUYhvCOOKsxidb_WfTSGsv8I6z7y "技术传播百态说2023年年终总结"

[Awesome Technical Writing Learning]: https://github.com/wongyah/awesome-technical-writing-learning "Awesome Technical Writing Learning"

[BrightTALK]: https://www.brighttalk.com/ "BrightTALK官网"

[GitHub Alerts]: https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax#alerts "GitHub Alerts语法"

[BrightTalk 视频下载器]: https://github.com/alfredzou/BrightTalk-video-downloader "BrightTALK Video Downloader"

[PySimpleGUI]: https://pysimplegui.com/

[ffmpeg-python]: https://pypi.org/project/python-ffmpeg/

[Jekyll Alerts 插件]: https://github.com/Adamkadaban/jekyll-alerts-plugin "Jekyll Alerts Plugin"
