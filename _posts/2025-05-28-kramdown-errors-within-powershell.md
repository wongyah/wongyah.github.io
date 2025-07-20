---
title: PowerShell 将外部程序的输出结果保存到文件后变成乱码，怎么办?
excerpt: 这下把我惊到了！这么简单的吗? 难道三年半以前我就有机会用上 kramdown 的?
header:
  teaser: https://pica.zhimg.com/70/v2-c8eb9e30577943481d8c9fed81c2051e_1440w.avis?source=172ae18b&biz_tag=Post
  overlay_image: https://pica.zhimg.com/70/v2-c8eb9e30577943481d8c9fed81c2051e_1440w.avis?source=172ae18b&biz_tag=Post
  overlay_filter: 0.5
tags: 内容管理 Markdown
---

三年前，我写过一篇文章分享自己[早期探索 Markdown 的切身体会][Markdown深度用户]。那时，我已经在使用 Markdown 写公众号文章了。我当时用的还是 Pandoc 语法，去年才改用了 kramdown。

那时，我选择 Pandoc 也是迫不得已。因为我使用 kramdown 生成 HTML 文件时，生成的文件中都是乱码。经过一番咨询和验证，我虽然知道了乱码的原因，但一直没有找到解决方法。

直到去年，我才成功地解决了 kramdown 乱码的问题。我原本想写篇文章分享一下这段经验，顺带着记录平日里不起眼的惊喜和成就感。

就在我准备动笔的时候，意外发现这个问题并没有我认为的那么棘手，而且三年前似乎就有大神告诉我怎么解决了。只不过，我没看懂人家的回复……

## kramdown 何以惹人爱

前不久，我发过一篇介绍 [Markdown 工具链] 的文章，阅读量还挺高。我在那篇文章里提到过， kramdown 的元素属性定义是我最喜欢的功能之一。

至于为什么那么喜欢，出于文章篇幅方面的考虑，我当时并没有展开讲。现在，正好可以借这个机会补充一下，也便于大家更好地了解本文中提到的问题。

kramdown 提供了两种为元素定义属性的方法：属性定义列表 (Attribute List Definitions, ALD) 和内联属性列表  (Inline Attribute Lists, IAL)。我平时用的最多的是内联属性列表，就以它来举例吧！

假设你使用 Jekyll 创建了一个博客网站，你已经在这个网站上发布了 25 篇文章。今天，你新写了一篇博客文章。文章中有一首非常有童趣的诗歌《咏鹅》。

你的文章中很少出现诗歌，此前没有，此后也不太可能再有。在你的博客网站中，段落的标准样式是两端对齐。但对于这首诗，你希望它能居中显示，文字颜色为水绿色，像这样：

咏鹅\\
鹅，鹅，鹅，\\
曲项向天歌。\\
白毛浮绿水，\\
红掌拔清波。
{: style="text-align: center; color: #11b584;" }

**问题来了！**为了一首诗，你有必要或者乐意专门去修改样式表、增加新样式吗? 如果这个博客网站属于你所在的公司，有专门的人员负责编写和维护样式表，或者是付费购买的外部服务，那么你是不是乐意为此专门申请一下样式表修改及其相应的预算呢?

如果是我，我就用内联属性列表来为这首诗单独添加一个样式。像这样：

~~~markdown
咏鹅\\
鹅，鹅，鹅，\\
曲项向天歌。\\
白毛浮绿水，\\
红掌拔清波。
{: style="text-align: center; color: #11b584;"}
~~~

如果你使用了某个 Jekyll 主题，这个主题可能提供了专门的样式类，开箱即用。以 GitHub 上高赞的 Jekyll 主题 Just the Docs 为例，你可以这样写：

~~~markdown
咏鹅\\
鹅，鹅，鹅，\\
曲项向天歌。\\
白毛浮绿水，\\
红掌拔清波。
{: .text-center .green-200}
~~~

既简化了样式表，又可以享受写作自由，或许还减少了同事或合作伙伴的工作量。是不是很方便?

**内联属性列表**可以用来为 Markdown 文件中的任何一个元素单独添加属性。其中，为块元素添加属性的内联属性列表叫**块元素内联属性列表**，为行内元素添加属性的内联属性列表叫**行内元素内联属性列表**。二者的语法相同，但是需要放置的位置不太一样。

不管是博客文章还是产品文档，总会遇到一些得有但又用得很少的个例。kramdown 的元素属性定义大大弥补了 Markdown 语法种类有限的短板，这就是我为什么那么喜欢它的原因。

如果你还想了解更多，可以去 kramdown 官方文档中查询详细的语法规则。

## kramdown 何以惹人嫌

kramdown 转换器是一个命令行工具，可以将  Markdown 文件转换成 HTML。假如你有一个 Markdown 文件叫 `hello.md`，运行以下命令就可以将它转换成 HTML 并输出到终端窗口中：

~~~powershell
xxx> kramdown hello.md
<p>Hello, World!</p>

<p>你好，世界！</p>
~~~

如果要将 `hello.md` 文件转换成 HTML 并保存为 `hello.html` 文件，你就得使用重定向操作符 (`>`)：

~~~powershell
xxx> kramdown hello.md > hello.html
~~~

重定向操作符原本是 Unix 和 Linux 操作系统的常用命令之一，可以将运行结果输出到文件或其他设备。后来，微软将其借鉴到了 Windows 操作系统的命令行工具中（命令行提示符和 PowerShell）。

我写公众号文章时使用的是 VS Code 编辑器。在 Windows 系统中，VS Code 默认的终端（即命令行工具）是 PowerShell。

**问题来了！**当我在 PowerShell 中使用 kramdown 命令将 Markdown 文件转换成 HTML 输出到终端窗口中时，输出结果是正确的。但是，当我使用 kramdown 命令将 Markdown 文件转换成 HTML 输出到文件时，所有的中文就变成了乱码。

~~~html
<!-- hello.html -->

<p>Hello, World!</p>

<p>浣犲ソ锛屼笘鐣岋紒</p>
~~~

我还注意到，在命令提示符 (CMD) 中 kramdown 命令运行得很正常，不会出现乱码。

我去 kramdown 和 PowerShell 的 GitHub 存储库分别提交了一份相同的问题报告。存储库的管理员、维护人员以及其他用户都很认真地回复了我，不过那时的我看得一头雾水，仍然不知道从哪里入手。

后来，我就不得不改用 Pandoc 了。在 Pandoc 中，可以使用选项 `--output` 为转换后的 HTML 设置保存位置和文件名称，没有乱码的问题。

~~~powershell
PS xxx> pandoc --from markdown --to html --output out/hello.html hello.md
~~~

输出到文件应该属于 Markdown 转换器的基础功能，但 kramdown 居然没有设计专门的命令来支持。或许，这也是 kramdown 的名气和社区活跃度都远远不及 Pandoc 的原因之一吧！

## 摒弃前“嫌”并不难

我在 PowerShell 存储库提交了问题报告之后，很快就收到了一些专业回复。但由于我当时的水平有限，只看懂了一句：“这个问题已经有人提过了，计划在 7.3.1 版本中解决”。

直到差不多两年半以后，一位国内网友回复说他成功解决了这个问题并附上了一段适合小白的操作说明。我一试，管用！

**产生乱码的原因**

将外部程序（比如 kramdown）的输出结果写入文件时，PowerShell 总是先将其解码为 .NET 字符串，然后再进行后续处理。解码时，PowerShell 会使用**控制台的输出编码**，即从 PowerShell 向控制台输出文本时所使用的字符集，比如 UTF-8、ASCII 或 Unicode。

Windows 自带的 PowerShell (5.1 版) 默认使用操作系统的字符编码作为控制台的输出编码。国内用户大多用中文操作系统，默认的字符编码是简体中文 (GB2312)。

kramdown 默认的输出编码是 UTF-8，与 PowerShell 控制台的默认输出编码不一样。所以，HTML 文件中的中文就会变成乱码。

> PowerShell 将外部程序的输出结果显示到终端窗口时，不会进行上述的解码操作。所以，kramdown 转换成的 HTML 内容可以正常显示在终端窗口中。

**解决方法一（推荐）**

下载并安装 7.4 或以上版本的 PowerShell。

自 PowerShell 7.4 开始，PowerShell 将外部程序的输出结果写入到文件时，不再进行解码操作，而是直接输出原始数据（也叫原始字节流）。

也就是说，将 kramdown 转换的 HTML 内容保存到文件时，PowerShell 不再对 HTML 内容进行解码，而是直接写入到文件中。这样，就不会再出现乱码的问题了。

安装好新版 PowerShell 之后，在 VS Code 默认的终端窗口中输入 `pwsh` 即可启用新版 PowerShell。

~~~powershell
PS xxx> $PSVersionTable.PSVersion.ToString()
5.1.26100.3624
PS xxx> pwsh
PowerShell 7.4.6
~~~

**解决方法二**

将控制台的输出编码修改为 UTF-8。

~~~powershell
PS xxx> [console]::OutputEncoding.EncodingName
简体中文(GB2312)
PS xxx> [System.Console]::OutputEncoding = [System.Text.Encoding]::UTF8
PS xxx> [console]::OutputEncoding.EncodingName
Unicode (UTF-8)
~~~

不过，这项设置只在当前窗口中有效。每次重启终端之后，你都要重新设置一次才行。

## 番外

我向 PowerShell 存储库提交问题报告是在 2021 年 8 月底，差不多三年半以前。那时候，我就看懂了那句“……计划在 7.3.1 版本中解决”。然后，我就耐心地等待新版本去了。

![](https://pic3.zhimg.com/v2-e987b5289710f78e2f7bb4591c64e644_1440w.jpg){:standalone}

2024 年 2 月，我突然收到一封邮件通知说又有人回复了这个问题，大意是发现解决方法了。这个人就是前面说的那位中国网友 (GitHub @freemedom)，他还是用中文回复的。

我按照他提供的方法试了一下，果然不出乱码了，管用！

![](https://pic1.zhimg.com/v2-cfbda4db58c121b6aa1581a909d811f2_1440w.jpg){:standalone}

不过，我怎么看着这些命令这么眼熟呢，好像以前我也试过? 我心想，PowerShell 肯定在新版本中解决了某些问题，这些命令才会起作用的。

当时，PowerShell 7.4.1 刚刚发布。我的 PowerShell 已经自动升级到了这个版本。所以，我把升级 PowerShell 当成解决乱码问题的必要步骤之一。

前段时间，我换了台电脑。因为我一直以为只有新版本才能正常使用 kramdown，所以我得重新安装新版的 PowerShell，正好也想借这个机会将这个问题的解决方法整理成文章分享一下。

在给文章准备素材时，我想查证一下到底从哪个版本开始可以正常使用 kramdown 的。没想到，哪个版本没查出来，倒是意外发现 Windows 自带的 PowerShell (5.1 版) 也是可以正常使用 kramdown 的，只要按中国网友提供的方法将控制台的输出编码设置成 UTF-8 就行。

这下把我惊到了：这么简单的吗? 那我计划中的文章是不是得搁浅了? 还有就是，难道三年半以前我就有机会用上 kramdown 的?

我马上又重新回看该问题报告下面的回复们，几乎每一条都提到了控制台输出编码的问题。尤其是第二个回复（GitHub @mklemen0），把乱码产生的原因和解决方法说得清清楚楚的，还提供了详细的参考资料（同类问题的问题报告）。

![](https://pic1.zhimg.com/v2-6ae5f1d1addba72df8fe34d6b7a3fbac_1440w.jpg){:standalone}

天！这么饱和的信息量，我居然就看懂了一句“新版本”。我都不理解我当时咋想的。

你在平时的工作和生活中有没有遇到过如此无语的瞬间? 我处于 IT 圈之外，身边擅长编程的人并不多。有一次，我去知乎问题 #程序员的你，做过什么傻傻的事情? 里强答了一下，还被人夸奖励志了！

生于知识经济时代，谁还没当过个新手呢? #新手期的你，做过什么傻傻的事情? 

希望我的新手故事，能让你在工作闲瑕时会心一笑，意外出糗时增添逻辑自洽的佐证，探索未知时多些一往无前的勇气！


## 参考资料 {#refs}
{:.no_toc}

1. [PowerShell Issue #16012: Correct output in CMD, but incorrect output to a file in PowerShell](https://github.com/PowerShell/PowerShell/issues/16012).
2. [PowerShell Issue #7233: Make console windows fully UTF-8 by default on Windows, in line with the behavior on Unix-like platforms - character encoding, code page](https://github.com/PowerShell/PowerShell/issues/7233).
3. [kramdown Issue #725: Incorrect output to a file in PowerShell](https://github.com/gettalong/kramdown/issues/725).
4. [Microsoft Learn: about_Redirection](https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_redirection?view=powershell-7.4#redirecting-output-from-native-commands).
{:.small}

<!-- 链接 -->

[Markdown深度用户]: https://mp.weixin.qq.com/s/Bh9hGQs2Zn-1vXbEGdQKhg "不知不觉，我竟炼成了一枚 Markdown 深度用户"

[Markdown 工具链]: {% link _posts/2025-04-24-markdown-toolchain.md %} "别看Markdown一脸小清新，心里的弯弯绕可多着呢！"
