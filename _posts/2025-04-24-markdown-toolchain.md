---
title: 别看Markdown一脸小清新，心里的弯弯绕可多着呢！
header:
  teaser: https://picx.zhimg.com/70/v2-c508b2b4dc7244e24da889713b1f0b24_1440w.avis?source=172ae18b&biz_tag=Post
  overlay_image: https://picx.zhimg.com/70/v2-c508b2b4dc7244e24da889713b1f0b24_1440w.avis?source=172ae18b&biz_tag=Post
  overlay_filter: 0.5
tags: 软件工具
---

以前，我发布过一篇关于DITA的新手文章《[当文档结构化大势已成，落单的我们该何去何从?](https://mp.weixin.qq.com/s/xmtUqpHSUSEDDik_jLNuSw)》。

在这篇文章里，我介绍了从 Word 软件向 DITA 转型需要做的事情、可能用到的软件工具和注意事项。文章的末尾，我还将 Markdown 作为一个减配的过渡方案简单介绍了一下。

文章发布后，我陆陆续续地收到一些关于 Markdown 的留言和私信咨询。我慢慢发现，很多人都把 Markdown 想简单了！

有人说，他们的工程师不太会用 Word 软件，所以他们想改用 Markdown。好学、好用、格式一致，还有开源免费的软件可以用。多么美好的憧憬呀！

有人说，他们用的 Markdown 编辑器功能太少了，不能在表格里合并单元格，不能添加图片标题或表格标题，也不能为标题自动编号等，这些可都是Word软件里的基础功能呀！还有没有功能更强大的 Markdown 编辑器?

不瞒你说，刚开始听说 Markdown 时，我也是这么想的。后来，踩坑填坑的次数多了，才慢慢了解了 Markdown 的本性以及周围生态的真实境况。

别看 Markdown 一脸小清新，它并不擅长打直球，心里的弯弯绕可多着呢！

## 编辑器

上手 Markdown 的第一步，一般是给自己选个好用的编辑器。支持 Markdown 的编辑器很多，大体上分为以下几类：

![](https://mmbiz.qpic.cn/mmbiz_png/h11VMG8jwafUPz7NvOYYdGuwyZsd0DTez2yTPI2QCm4l8EPp2QajaK5PupbAcIcXsFKUTzkaAclcuGqSBBEUNQ/640?wx_fmt=png&amp;from=appmsg){:standalone}

**支持 Markdown 的笔记软件**，比如有道云笔记、腾迅文档、Obsidian 等。

笔记软件有比较丰富的文件管理功能，支持 Markdown 基本语法和少数扩展语法。笔记软件一般都有图形工具栏，即使不熟悉 Markdown 语法，也可以流畅地使用。

![](https://mmbiz.qpic.cn/mmbiz_png/h11VMG8jwafUPz7NvOYYdGuwyZsd0DTegGPQTBDApjE69kicicEI0wklav16pnoHtonLxLZveXhelA3go4Q0D9Mg/640?wx_fmt=png&amp;from=appmsg){:standalone}

**在线 Markdown 编辑器**，比如 ToMarkdown、Arya 和 Dillinger 等。

Markdown 在线编辑器的数量特别多，主打一个方便快捷、即开即用，不需要注册帐号，也不需要安装软件。

有些在线编辑器的功能非常有特色。比如，Dillinger 可以与 GitHub 等代码托管平台同步，Arya 上有一款 Markdown 编辑器可以带格式复制到微信公众平台和知乎。

不过，在线编辑器的界面设计和菜单功能看起来比较直白。如果你对Markdown 编辑器的功能要求比较单一，可以好好探索一下。

![](https://mmbiz.qpic.cn/mmbiz_png/h11VMG8jwafUPz7NvOYYdGuwyZsd0DTe3wE1jLXoQMZwzxdx4GRauLE3jiat3CsOJrhKMn1NqoI4ynC6Fg9YD2Q/640?wx_fmt=png&amp;from=appmsg){:standalone}

**桌面 Markdown 编辑器**，比如 Typora、Zettlr 和 MarkText 等。

桌面 Markdown 编辑器的界面美观、小巧轻便，拥有很多专为 Markdown 设计的特色功能，非常适合经常使用 Markdown 写文章的各类写手。

> Typora 是收费软件，Zettir 和 MarkText 是开源软件。

![](https://mmbiz.qpic.cn/mmbiz_png/h11VMG8jwafUPz7NvOYYdGuwyZsd0DTeKNTg426GIPrcrrlvzNhYx7R4LOjgibWbibCs1aqRibJxibApSdLuVfcibsw/640?wx_fmt=png&amp;from=appmsg){:standalone}

**支持 Markdown 的代码编辑器**，如 Visual Studio Code (VS Code)、Atom 等。

代码编辑器是程序员用来编写程序的软件。很多程序员也需要给自己的软件写文档或代码注释，Markdown 就是从他们这里火起来的。所以，代码编辑器大都支持 Markdown。

在编辑方面，代码编辑器大都自带 Markdown 实时预览功能。除此之外，你可以使用正则表达式进行查找/替换，可以自定义一些高频使用的内容片断或内容模板，还可以使用[代码编辑器独有的一些快捷编辑功能](https://mp.weixin.qq.com/s/9vk7NuxaMZ5FwXY82dV7nA)，比如列选、多光标输入和多种导航和定位功能。

在项目管理方面，代码编辑器一般会集成资源管理器、版本管理工具（如 Git）和命令行工具等。比如，VS Code 自带图形化的 Git 管理界面，不需要使用命令行也能对文档进行版本管理和团队协作。

显然，代码编辑器是这几类编辑器中功能最强大的。同时，软件的安装会复杂一些，学习和适应的时间也会稍微长那么一点点。

不过，流行的代码编辑器一般都是大厂出品，文档、教程和各种分享贴特别齐全。只要舍得多花那么一点点心思和精力，很快就能玩得转。

## 转换器

Markdown 原本是一个将文本文件转换为HTML的转换器。没想到，转换器本尊悄无声息地退出历史舞台了，而为转换器专门发明的书写规则却意外火了。转换器的名字就变成语法的名字了！

尽管如此，Markdown 能非常方便地转换为 HTML 依然是它广受欢迎的主要原因。Markdown作为一个转换器虽然没落了，但有更多更好的 Markdown 转换器产生了。GitHub 上有人总结了一下，现有的 Markdown 转换器至少有 80 个以上。

问题是，Markdown 没有统一的官方语法标准，Markdown 转换器支持的语法各不相同。所以，使用 Markdown 写作之前，有必要先搞清楚你的工具正在使用哪个转换器，这个转换器都支持哪些 Markdown 语法。

当然了，最好的方法是，在选择工具之前，先了解下常见 Markdown 转换器，搞清楚哪个转换器更适合自己，从而更好地选择工具。而不是稀里糊涂地选了工具之后，再来个削足适履。

以下是几种常见的 Markdown 转换器：

![](https://mmbiz.qpic.cn/mmbiz_png/h11VMG8jwafUPz7NvOYYdGuwyZsd0DTe08tOFl9VSqWnXUKFm6NytNoEexZXJWAuUtVnNG8ZmGPBQMLeslLstg/640?wx_fmt=png&amp;from=appmsg){:standalone}

**kramdown**，Jekyll 默认使用的 Markdown 转换器。kramdown 支持元素属性设置。也就是说，你可以使用键值对给任何一个元素添加任何属性。一些常用属性还有专门的简化写法，比如 ID 和类。

有了元素属性，就相当于给元素贴上了分类标签。这就意味着，你拥有了自定义样式的最大权限和自由度，甚至可以为某个特定的元素单独设置格式。不瞒你说，我就最喜欢 kramdown 的这一点。

![](https://mmbiz.qpic.cn/mmbiz_png/h11VMG8jwafUPz7NvOYYdGuwyZsd0DTeribUu0hmAelVJickrGicyakKWtHuAqabLh7V9URcuv7MAKrULiaQO1iaS7Q/640?wx_fmt=png&amp;from=appmsg){:standalone}

**Pandoc**，以支持的文件格式多而著称。很多编辑器和静态网站生成器都支持 Pandoc，比如 Typora、VS Code（需要安装插件）和 Hugo。

Pandoc 有一些非常独特的 Markdown 语法。比如，上标和下标，可以保留原始格式的预格式文本，可以将几个块元素组合在一起的内容分区，以及可以转换为 `<span>` 元素并自由添加属性的自定义行内文本等。不瞒你说，我最喜欢的是上下标的语法，简单实用。

![](https://mmbiz.qpic.cn/mmbiz_png/h11VMG8jwafUPz7NvOYYdGuwyZsd0DTeYQmCZePqK9KSG3P0ZSiabicM4IoKOa4MNOLK4BAfxicUoGppLicVJPPUmQ/640?wx_fmt=png&amp;from=appmsg){:standalone}

**goldmark**，Hugo 默认使用的 Markdown 转换器。goldmark 并不是一个能独立运行的软件，而是一个用 Go 语言编写的库。

开发者可以在自己的程序中调用 goldmark，还可以通过 goldmark 的扩展机制自定义 Markdown 语法。

![](https://mmbiz.qpic.cn/mmbiz_png/h11VMG8jwafUPz7NvOYYdGuwyZsd0DTewAq0TKS6lib1KGLj8RXwA86fAXbxZxYicgdgl6WE51t6LWtrsgouEEyw/640?wx_fmt=png&amp;from=appmsg){:standalone}

**Python-Markdown**，MkDocs 默认使用的 Markdown 转换器。Python-Markdown 是用 Python 语言编写的库，同时也提供了一些可以在命令行运行的简单命令来直接转换 Markdown 文件。

和 glodmark 类似，开发者可以在自己的程序中调用 Python-Markdown，还可以通过 Python-Markdown 的扩展机制自定义 Markdown 语法。

## 静态网站生成器

大多数 Markdown 转换器都是命令行工具，对没有编程经验的普通人不太友好。

不过，要将 Markdown 文件转换成 HTML 文件（或者其他格式的文件），通常并不需要单独安装某个 Markdown 转换器或者在命令行使用它们。Markdown 编辑器一般都会自带一些转换器的功能，或者以插件的形式提供转换器的功能。

例如，Typora 编辑器可以通过自带的转换器将 Markdown 文件转换为 HTML、PDF 和图片。如果要导出其他格式，需要单独安装 Pandoc。不过，你不必在命令行中去运行 Pandoc 命令，使用 Typora 菜单就可以一键导出，只需要事先在【导出设置】里设置一下 Pandoc 的安装路径即可。

VS Code 可以通过自带的转换器将 Markdown 文件转换为 HTML。要导出其他格式，只需要安装相应的插件即可，比如 Markdown All in One、Markdown PDF 和 vscode-pandoc 等。

不管是编辑器自带的 Markdown 转换器或插件，还是独立安装的 Markdown 转换器，都是用来转换单个文件的。即使是批量转换，也只是一次性转换多个文件而已，每个文件在转换前后都是彼此独立、互不相关的。

技术博客和文档网站大多是由多个页面组成的，页面与页面之间按照一定的逻辑关系关联在一起。这就不是一个 Markdown 转换器能完成的任务了，而是静态网站生成器大显身手的时候！

以下是几种常见的支持 Markdown 的静态网站生成器：

![](https://mmbiz.qpic.cn/mmbiz_png/h11VMG8jwafUPz7NvOYYdGuwyZsd0DTe5TKuk1oCAMAaO47OeOAOczmldoGfDZBg8vH3MGJLMPL6J5f0kib3Slg/640?wx_fmt=png&amp;from=appmsg){:standalone}

**Jekyll**，GitHub 主页原生支持的静态网站生成器。在 GitHub 上，使用 Jekyll 创建技术博客或文档网站非常方便。你甚至不需要在电脑上安装 Jekyll，只要按照 GitHub 官方教程亦步亦趋地做一下设置，再填写个 Readme 文件，就能发布成一个单页面的小网站了！

在 Jekyll 中，内容页面的格式有两种：Markdown 和 HTML。 默认情况下，Jekyll 使用的 Markdown 转换器是 kramdown。

静态网站生成器一般都会支持一种模板语言。具有一些编程基础的用户，可以使用模板语言定制自己的内容模板。Jekyll 支持的模板语言是 Liquid，简单易学好上手。

不过，你大不可必从零开始设计网站。背靠 GitHub 的强力支持，Jekyll 拥有完善的文档、详细的教程和丰富的主题（即网站样式）。选择一个合适的主题来搭建技术博客或文档网站，不仅可以让网站快速上线，还可以大幅降低工作量和维护难度。

GitHub 上高赞的技术文档类 Jekyll 主题有 Just The Docs、Minimal Mistakes 等。Just The Docs 主题简洁大方，容易上手。Minimal Mistakes 主题的扩展性好，可以灵活的定制适合自己的样式。

![](https://mmbiz.qpic.cn/mmbiz_png/h11VMG8jwafUPz7NvOYYdGuwyZsd0DTevqLlrBWibpichDrZPJWwKfvNA4Lgabla18vXyx2rOrI3VkkiarrCqZYbA/640?wx_fmt=png&amp;from=appmsg){:standalone}

**Hugo**，以速度著称的静态网站生成器。据说，使用 Jekyll 生成网站的平均用时大约为 30 秒，而使用 Hugo 生成网站的平均用时仅为一秒左右。网站中的内容越多，Hugo 的速度优势越明显。

在 Hugo 中，内容页面的格式有六种：Markdown、HTML、Emacs Org Mode、AsciiDoc、Pandoc 和 reStructuredText。你可以在一个网站中同时使用这些格式。只不过，前三种是 Hugo 原生支持的格式，后三种需要自行安装相应的转换器后才能转换为 HTML 文件。其中，Markdown 默认使用 goldmark 转换器。

Hugo 使用的模板语言是 Go 语言的两个标准软件包：文本模板 (text/template) 和 HTML 模板 (html/template)。Hugo 的模板语言功能强大，但学习难度比较大，至少得有一些 Go 语言的基础才行。

显然，Hugo 更适合一些专业用户或者功能比较复杂的网站。Hugo 官网有很多专为文档网站设计的主题，比如 Hugo Book、Docsy 和 Doks 等。这些主题都是 GitHub 上高赞的开源项目。

顺便提一句，[著名的前端工具包 Bootstrap][Bootstrap] 在其官网中同时使用了 Jekyll 和 Hugo。Bootstrap 的文档网站使用的是 Jekyll ，博客网站使用的是 Hugo。

![](https://mmbiz.qpic.cn/mmbiz_png/h11VMG8jwafUPz7NvOYYdGuwyZsd0DTeIlFUM5hoBoP1kjrDmGI9zD4AtbVvqoxAdmWYiae1e85zw0RV7dSh0Ug/640?wx_fmt=png&amp;from=appmsg){:standalone}

**MkDocs**，专为技术文档网站设计的静态网站生成器。在文档发布平台 Read the Docs 推荐使用的静态网站生成器中，MkDocs 排在第一位。

在 MkDocs 中，内容页面只能使用 Markdown 格式。MkDocs 使用的 Markdown 转换器是 Python-Markdown（一个用 Python 语言编写的库）。如果内容文件夹中有其他格式的文件，MkDocs 会原样复制，不会进行任何处理。

MkDocs 使用的模板语言是 Jinja。Jinja 的语法和 Liquid 有点像，但它的功能比 Liquid 多，学习的难度也大一点。

MkDocs 有两个内置的主题：mkdocs 和 readthedocs。MkDocs 默认使用的是 mkdocs 主题。readthedocs 主题是从 Read the Docs 的默认主题复制而来的。

> 这里得提一下，mkdocs 主题是支持 Bootstrap 的。我之前找了好久都没找到一个好用的 Bootstrap 主题呢，没想到它在这儿！

除此之外，Read the Docs 目前强烈推荐使用 GitHub 高赞主题 Material for MkDocs，还在官方文档中提供了详细的配置说明。

如果你只是想创建一个单纯的文档网站，MkDocs 也是一个很不错的选择。

## 内容发布平台

前面已经提到好几个内容发布平台了。你肯定也已经发现了，内容发布平台、静态网站生成器和转换器之间其实是双向奔赴、互相成就的。

选择内容发布平台时，你不仅要考虑价格，还要考虑它对所使用的静态网站生成器的支持力度。支持力度越大，你在部署和维护网站时需要花费的时间和精力就越少。

以下是几个常见的静态内容发布平台：

![](https://mmbiz.qpic.cn/mmbiz_png/h11VMG8jwafUPz7NvOYYdGuwyZsd0DTeMgsntZ2xSgp5ZawEWgfIAuhlv2jgh25auyvBic6qFMGVkSpvgUAT1icg/640?wx_fmt=png&amp;from=appmsg){:standalone}

**GitHub 主页**，GitHub 提供的静态网站部署功能。GitHub 主页不只能部署 Jekyll 生成的网站，也可以部署其他静态网站生成器生成的网站。区别只在于，在 GitHub 主页上部署 Jekyll 网站最容易。

GitHub 主页内置了自动部署 Jekyll 网站的工作流，可以将 Jekyll 网站的源文件自动转换为静态网站。这就是为什么你只需要在存储库中填写一个 Readme 文件，不需要下载 Jekyll，也不需要任何配置文件，就能生成一个单网页小网站的原因。

GitHub 主页原生支持 13 个 Jekyll 主题，只要在配置文件中使用关键字 `theme` 声明就能直接生效。除此之外，GitHub 网站上的其他 Jekyll 主题也都可以随便用，只要改用关键字 `remote-theme` 声明即可。如果没有声明主题，GitHub 主页会默认使用 Minimal 主题(jekyll-theme-minimal)。

如果使用其他静态网站生成器创建 GitHub 主页，你就得自己下载并安装软件，然后在本地将源文件转换成静态网站。或者，你也可以使用 GitHub Actions 自己编写工作流来自动部署网站。

除了 GitHub，其他的代码托管平台也有类似于 GitHub 主页的功能，比如 GitLab、Gitee（码云）。这些平台的主页功能和部署方法与 GitHub 主页大同小异，只是没有那么完善、流畅和便捷罢了。

![](https://mmbiz.qpic.cn/mmbiz_png/h11VMG8jwafUPz7NvOYYdGuwyZsd0DTekTNKfR7rvIzRiatiaFHpOzia6vnLEK4NJq369fe8mtoLzgOHWPBLoHpkA/640?wx_fmt=png&amp;from=appmsg){:standalone}

**Read the Docs**，一个专门的静态文档网站部署平台。你可以将文档网站的源代码存储到 GitHub、GitLab 或 Bitbucket 等支持 Git 协议的代码托管平台，然后使用 Read the Docs 部署文档网站。

就像 GitHub 主页偏爱 Jekyll 一样，Read the Docs 偏爱的静态网站生成器是 Sphinx 和 MkDocs。Sphinx 的内容页面默认使用 reStructuredText 语言，MkDocs 的内容页面默认使用 Markdown 语言。

Read the Docs 也可以部署其他静态网站生成器生成的网站。只不过，它重点支持的都是专为文档网站而设计的静态网站生成器，除了上面说到的 Sphinx 和 MkDocs 之外，还有 mdBook 和 Markdoc 等。

除了常规的网站部署功能以外，Read the Docs 有很多专门针对文档网站的特色功能。例如，你可以在 Read the Docs 同时生成多种格式的文档，包括文档网站 (HTML)、PDF、电子书 (ePub) 和 HTML 压缩包等；你可以在多个项目之间进行内容复用，甚至可以包括一些特定的外部站点。

![](https://mmbiz.qpic.cn/mmbiz_png/h11VMG8jwafUPz7NvOYYdGuwyZsd0DTeqUH2EgkOIWCNqYmZrXicibjTbQ3k1c93kmRibAcBp2sx27iaQCSx9PJAsQ/640?wx_fmt=png&amp;from=appmsg){:standalone}

**GitBook**，一个专门的文档网站创建、托管和部署平台。GitBook 虽然也有免费版本，但把它看作成熟的商用产品更合适一些。

GitBook 提供在线编辑器，主要用 Markdown 写文档。你可以使用文档网站向导从零开始或者基于模板创建文档网站，也可以从 GitHub 或 GitLab 等代码托管平台导入已有的文档内容。

除此之外，GitBook 还可以使用 GitBook AI 自动生成内容，集成外部工具，进行成员管理和团队协作等。

总之，GitBook 的功能挺丰富的，文档也很齐全。如果你遇到搞不定的问题时，还可以联系技术支持。如果你有一定的预算，想省心省力地做个文档网站，不妨考虑一下。



<!-- link defs -->

[Bootstrap]: https://mp.weixin.qq.com/s/YD3BkYeLVXooXDlPFA_Y4Q "发现了一个神仙插件：DITA无缝衔接Bootstrap，还能使用那么多精美的主题模板！"
