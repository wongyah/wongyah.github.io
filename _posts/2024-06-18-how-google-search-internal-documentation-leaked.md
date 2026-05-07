---
title: 逆向追踪『谷歌搜索意外流出2500多页API文档』
excerpt: 都说这是 Yoshi 惹的祸！Yoshi 应该很委屈：我就是个听命干活的，咋都算在我头上了?
header:
  teaser: https://pica.zhimg.com/70/v2-e56468c422f88755f8251dd06ebce6e7_1440w.avis?source=172ae18b&biz_tag=Post
  overlay_image: https://pica.zhimg.com/70/v2-e56468c422f88755f8251dd06ebce6e7_1440w.avis?source=172ae18b&biz_tag=Post
  overlay_filter: 0.5
tags: 行业观察
---

近日，谷歌又双叒叕摊上事儿了，还是一份 API 文档惹出来的大事！

5 月 27 日，两位搜索引擎优化 (SEO) 专家菲哥 (Rand Fishkin) 和王哥 (Mike King) 分别在各自的博客爆料，[谷歌搜索意外流出 2500 多页 API 文档](https://ipullrank.com/google-algo-leak)。这份内部文档是谷歌云的一份 API 文档，内容涉及谷歌神秘的搜索排名算法。

消息一出，SEO 圈儿立马炸了。大伙儿纷纷赶去围观这份免费的大礼，拜读 SEO 专家的解析文章，热议谷歌是不是又被啪啪打脸了……

不过，咱对 SEO 知道的不多，就不班门弄斧了。咱从自己的专业角度刨根问底一下，这些个 API 文档到底是怎么从谷歌的眼皮子底下偷偷溜出来的? 难道真是机器人的锅?

## 面世

5 月 5 日（星期日），菲哥收到一封匿名邮件。在邮件里，爆料人说他手里有谷歌搜索部门的内部文件 —— 多达 2500 页的 API 文档，文档内容与谷歌多年来的公开声明自相矛盾。

菲哥是 SEO 界的大佬，SparkToro 公司的联合创始人和 CEO，自然不会一听就信。他先跟爆料者通了几封邮件，然后在 5 月 24 日和对方进行了视频通话。

视频通话时，爆料人向菲哥展示了这些 API 文档，以及其中的小部分细节。爆料人还说，他希望菲哥发一篇文章将这些文件披露出去，并揭露谷歌多年来公开宣称的“谎言”。

不过，爆料人并没有在视频通话中露脸，只将名字告诉了菲哥，还要求菲哥为他保密。

![截图：菲哥和爆料人进行视频通话](https://pic4.zhimg.com/80/v2-cf34ad1f16b8bb7654af77de18b3da3b_720w.webp){:standalone}

之后，菲哥联系了几位以前在谷歌工作过的朋友，请他们帮忙看一下这份 API 文档是不是伪造的。他收到了三位朋友的回复，都说这份 API 文档是严格按照谷歌的内部文档标准和命名规范编写的，需要花不少时间呢。

初步验证了文档的可信度之后，接下来要做的事情就是对这份文档进行深入地分析与解读了。

菲哥 6 年前就不做 SEO 了，虽说以前写过 API，但那已经是 20 年前的事情了。所谓“三日不弹，手生荆棘”，这活儿还是请现役高手帮忙吧!

菲哥请的高手就是本文开头提到的王哥 (Mike King)， 技术型的 SEO 大神，[iPULLRANK 公司](https://ipullrank.com/)创始人。

5 月 24 日下午（和爆料人视频通话的当天），菲哥找王哥泡了 40 分钟的电话粥。王哥认真看过文档之后认为，这好像确实是谷歌搜索部门的内部文档，文档中含有大量关于谷歌搜索内部算法的信息，其中的很多信息都是此前外界无法证实的。

接下来的周末，王哥加班加点地对这份长达 2500 页的 API 文档进行了初步分析。5 月 27 日（周一），菲哥和王哥在各自的博客上同时发文分享了赶工出来的分析结果。舆论哗然！

## 真容

王哥在文章里透露，从谷歌搜索泄露出来的内部文档是[谷歌内容仓库的 API 文档](https://hexdocs.pm/google_api_content_warehouse/api-reference.html) (internal documentation for Content Warehouse API)。

该文档被意外发布到了谷歌在 GitHub 上的一个公开存储库，而且这个公开存储库还使用了 Apache 2.0 开源许可证。按照 Apache 2.0 中的条款，任何人都可以免费使用、复制、转发或修改这个公开存储库中的东西，包括这份意外流出的文档，且一经授权不可撤销。

目前，这份文档依然是可访问状态。不过为了谨慎起见，菲哥和王哥没有在文章中晒出相关链接。然而，猎奇心爆棚的网友们可不会放过一探究竟的好机会，没两天就顺着大神提供的线索摸到了这份文档。

![截图：谷歌意外流出的 API 文档](https://pic2.zhimg.com/80/v2-4035844c6c6debed9a37d9c1ee651d25_720w.webp){:standalone}

这份 API 文档中共有 2596 个模块页面 (modules)。所有的模块页面都是按照统一的结构编写的，从前到后依次为属性 (Attributes)、摘要 (Summary)、类型 (Types)和函数 (Functions)。

![截图：谷歌 API 文档中的模块页面](https://pic3.zhimg.com/80/v2-05aba727f1b53c3bcb0dded3c6b03262_720w.webp){:standalone}

其中，属性一节提供的信息最有价值，也是 SEO 圈儿最为关注的部分。通俗一点说，这些属性很可能是影响谷歌搜索排名的影响因子。据统计，这份 API 文档中共有 14014 个属性。

顺便说一下，文档首页 "[API Reference](https://hexdocs.pm/google_api_content_warehouse/api-reference.html)" 是一个目录页，里面包含了指向所有模块页面的索引。而很多国内媒体报道这件事时说的 “2500 页”，实际是 2500 多个网页页面，而不是 A4 页面。<s>（其实，就差 4 个就到 2600 页了）</s>

## 流出时间线

这份 API 文档的源文件，来自谷歌的一个 GitHub 公开存储库里的子文件夹：[googleapis/elixir-google-api/clients/content_warehouse](https://github.com/googleapis/elixir-google-api/tree/master/clients/content_warehouse)。
 
![截图：谷歌 API 文档的源文件位置](https://pic1.zhimg.com/80/v2-065fb1a1f77c5b2635888461c132241c_720w.webp){:standalone}

该存储库里包含谷歌 API 的所有客户端库 (client libraries)。这些客户端库都放在子文件夹 `clients` 里。谷歌 API 文档的源文件就来源于 `clients` 文件夹的子文件夹 `content_warehouse`。为了叙述方面，下文中我会将 `content_warehouse` 文件夹称为[谷歌内容仓库](https://github.com/googleapis/elixir-google-api/tree/master/clients/content_warehouse)。

从谷歌内容仓库的提交历史可以看出，目前共有 4 次提交。第一次提交发生在 2024 年 3 月 13 日，最后一次提交发生在 2024 年 5 月 7 日。

![截图：内容仓库的提交历史](https://pic4.zhimg.com/80/v2-983c4f59759b7c7df5090ca6e38ebb5b_720w.webp){:standalone}

谷歌内容仓库中有一个文件叫 `mix.exs`，里面提供了谷歌内容仓库的版本信息。打开各次提交中的 `mix.exs` 文件后可以发现，这四次提交分别对应谷歌内容仓库的四个版本 `v0.2.0`、`v0.3.0`、`v0.4.0` 和 `v0.5.0`，也对应前文中谷歌内容仓库 API 文档的四个版本。

![截图：谷歌内容仓库的版本信息](https://pic4.zhimg.com/80/v2-19704982974a2ba11a5346e94e86b84b_720w.webp){:standalone}

GitHub 使用 Git 进行版本管理。每完成一次提交，Git 都会统计一下这次增加了多少内容、删除了多少内容以及增删的总次数。统计增删数据时，以行为单位。

从谷歌内容仓库各次提交的增删数据不难看出，第一次提交时增加了大量的内容，中间的两次提交是对内容的更新，最后一次提交时删除了大量的内容。

![截图：谷歌内容仓库的内容增删数据](https://pic1.zhimg.com/80/v2-bbbe03d88718511aebd9781dabc8fd24_720w.webp){:standalone}

还记得菲哥哪一天收到了爆料人的邮件吗? 5 月 5 日。仅仅两天后，谷歌内容仓库的内容就被大量删除了。

我们到这儿基本可以确定，爆料人向菲哥提供的 API 文档是 2024 年 3 月 27 日提交的版本，即 [v0.4.0](https://hexdocs.pm/google_api_content_warehouse/0.4.0/api-reference.html) 版。而该文档中的主要内容第一次流出的日期是 2024 年 3 月 13 日，被删除的日期是 2024 年 5 月 7 日。

然而，真的被删了吗? 并没有。

Git 最大的特点是宽进严出，就像咱们中国的大学一样。它非常擅长往存储库里增加内容，却不擅长从存储库里删除内容。如果已经把内容推送到了远程存储库（比如 GitHub），那要删起来更是难上加难。

谷歌内容仓库虽然在最后一次提交时被删除了大量的内容，但前三次提交的内容依然完完整整地保存在老地方。如果你现在打开 2024 年 3 月 27 日的提交（即 `v0.4.0` 版），找到下图中的 `model` 文件夹，你会发现里面依然有 2593 个模块。加上其他文件夹里的 3 个模块 (`connection.ex`、`metadata.ex` 和 `mix.exs`)，总共 2596 个模块。一个都没少！

![截图：v0.4.0 版谷歌内容仓库中的模块数量](https://pic4.zhimg.com/80/v2-72bfc285f733b82ab6af8e977cadaff7_720w.webp){:standalone}

和前文中菲哥说的一样，谷歌内容仓库使用了 Apache 2.0 开源许可证，而且还特意在每个文件都进行了 Apache 2.0 许可声明。Apache 2.0 意味着什么，前面已经说过了，这里就不重复了。

![截图：谷歌内容仓库的开源许可证](https://pic4.zhimg.com/80/v2-d433d7b84270345df9dcf6286e25e5af_720w.webp){:standalone}

现在，我的脑海里循环播放着一句话：“智者千虑，必有一失。” 就让我们从智者的这“一失”中学习、巩固或反思经验与教训吧！

不过，谷歌好像已经泄露过好多文件了。有人专门打包整理一份[谷歌泄密集锦](https://www.zachvorhies.com/google_leaks/)，有兴趣的可以去围观一下。

## 流出路径

谷歌内容仓库的 API 文档所在的网站叫 [HexDocs](https://hexdocs.pm/)。这个网站名字起得挺好，一看就知道是个文档托管网站，就像 [Read the Docs](https://docs.readthedocs.io/en/stable/) 和 [GitBook](https://www.gitbook.com/) 一样。

![截图：谷歌内容仓库 API 文档的网址](https://pic2.zhimg.com/80/v2-40de8cefe22959999e1e25809a7dfee9_720w.webp){:standalone}

只不过，HexDocs 是 Elixir 软件包管理平台 Hex 的御用文档托管网站，只为 Hex 平台上的软件包 (Hex packages) 托管文档。

![截图：HexDocs 官网首页](https://pic4.zhimg.com/80/v2-30ddaeda65d3364b00ae523c54a67ef7_720w.webp){:standalone}

[Elixir](https://elixir-lang.org/) 是一种编程语言，就像 [Python](https://www.python.org/)、[Java](https://www.java.com/zh-CN/) 和 [Ruby](https://www.ruby-lang.org/en/) 一样。谷歌内容仓库中的源文件就是用 Elixir 编写的。Elixir 文件的扩展名是 `exs` 或 `ex`。

![截图：谷歌内容仓库中的 Elixir 文件](https://pic1.zhimg.com/80/v2-aa3b77d6f8ae7038c2eacd50c670b2f4_720w.webp){:standalone}

Elixir 语言格外重视软件文档，可以[使用 Elixir 文档语法在源代码中编写文档](https://hexdocs.pm/elixir/writing-documentation.html)。Elixir 的文档声明语法与属性的写法差不多 (比如 @moduledoc 和 @doc)，文档正文使用 Markdown。

![截图：Elixir 官方文档](https://pic2.zhimg.com/80/v2-cfd661e77645af7b94e95e3867a959cd_720w.webp){:standalone}

Elixir 语言有一个官方的软件包管理平台，叫做 [Hex](https://hex.pm/)。开发者可以将自己开发的 Elixir 软件包发布到 Hex 上，也可以从 Hex 上下载别人的软件包，还可以使用 Hex 对软件包进行便捷高效的管理。

当开发者在 Hex 上发布 Elixir 软件包时，Hex 会使用文档生成工具自动生成文档，然后将文档自动发布到 HexDocs 上。

![截图：Hex 官网首页](https://pic1.zhimg.com/80/v2-36a2e21f05dabde0977e8a29822ee614_720w.webp){:standalone}

目前，应用最广泛的 Elixir 文档生成工具是 [ExDoc](https://github.com/elixir-lang/ex_doc)。谷歌内容仓库的 API 文档就是使用 ExDoc 自动生成的。

![截图：谷歌内容仓库 API 文档的生成工具](https://pic3.zhimg.com/80/v2-547469a1f0ebdcb690f3c4130b3e0f16_720w.webp){:standalone}

[谷歌内容仓库软件包的 Hex 主页](https://hex.pm/packages/google_api_content_warehouse)显示，它的所有者 (owner) 和发布者 (publisher) 是谷歌云 (google-cloud)。目前，该帐号下共有 309 个谷歌 API 软件包。

![截图：谷歌内容仓库的 Hex 主页](https://pic2.zhimg.com/80/v2-1ef079221517e46aa47cfed5659362ed_720w.webp){:standalone}

不过，谷歌内容仓库软件包的发布记录显示，前三个版本的发布时间比 GitHub 源代码库对应版本的提交时间晚 1~2 天。从这一点似乎可以推断，谷歌内容仓库软件包及其文档并不是从 GitHub 源代码库自动发布的。

![截图：谷歌内容仓库软件包的发布记录](https://pic3.zhimg.com/80/v2-6ecc973509556fa2e6c4756da07a06da_720w.webp){:standalone}

我在[谷歌 API 存储库](https://github.com/googleapis/elixir-google-api)中找到了 Hex 软件包的自动发布程序，位于 `.kokoyo` 文件夹下的三个文件。其中，`release.cfg` 是主程序。不过，我并没有找到触发 kokoyo 执行的程序或工作流 (GitHub Actions)。

![截图：谷歌 API 的 Hex 软件包自动发布程序](https://pic4.zhimg.com/80/v2-698f4cf314f74e9153919fb0f250d67f_720w.webp)

## 始作俑者

谷歌内容仓库的所有提交均来自一个叫 [yoshi-code-bot](https://github.com/yoshi-code-bot) 的帐号（下文中简称为 Yoshi）。该帐号目前复刻 (Fork) 有 39 个存储库，其中绝大部分存储库来自谷歌官方帐号 [googleapis](https://github.com/googleapis)。

![截图：yoshi-code-bot 帐号信息](https://pic3.zhimg.com/80/v2-cb1e2258843bec199e733b2220994fc2_720w.webp){:standalone}

Yoshi 是谷歌使用开源工具 [Toys](https://github.com/dazuma/toys) 制作的流程自动化小工具，在这次泄密风波中被很多媒体称为“谷歌的内部机器人” —— 泄密的始作俑者。

![截图：与 Yoshi 有关的开源项目](https://pic3.zhimg.com/80/v2-cd9dde0bc83e0d9725361122af834f36_720w.webp){:standalone}

在谷歌 API 存储库中，Yoshi 的工作任务包括构建环境、更新相关软件（依赖）、生成或更新客户端代码、更新版本号以及提交代码等工作。

![截图：Yoshi 中定义的代码提交信息](https://pic4.zhimg.com/80/v2-ae61e820b956d375d1bac59613362907_720w.webp){:standalone}

Yoshi 的工作安排通过 [GitHub Actions](https://docs.github.com/en/actions) 设置和触发。每天，Yoshi 会在（世界标准时间，即 UTC 时间）下午 1:02 分开始自己的例行工作。如果存储库维护人员下达临时指令，Yoshi 也会随时响应。

![截图：使用 GitHub Action 为 Yoshi 设置的定时任务](https://pic1.zhimg.com/80/v2-2d783abcd7920814dad09f5d4282c370_720w.webp){:standalone}

> [.github/workflows](https://kkgithub.com/googleapis/elixir-google-api/tree/main/.github/workflows) 文件夹中的另一个文件 [generate-updates.yml](https://github.com/googleapis/elixir-google-api/blob/main/.github/workflows/generate-updates.yml) 可以为 Yoshi 下达临时任务，即手动触发工作流。

在谷歌内容仓库中，每个文件中都有一个自动生成代码文件的声明。声明中的 Elixir 代码生成器就是指 Yoshi 吧?

![截图：谷歌内容仓库的自动生成文件声明](https://pic2.zhimg.com/80/v2-0400b7797ce8ee6efdda6e13940a32a9_720w.webp){:standalone}

上图中的文件 [mix.exs](https://kkgithub.com/googleapis/elixir-google-api/blob/main/clients/content_warehouse/mix.exs) 是谷歌内容仓库的项目配置文件，在前文里稍微提过一下下。该文件里有项目描述、版本信息以及需要安装的软件等信息，也注明了项目维护人员的信息。

![截图：谷歌内容仓库的维护人员](https://pic1.zhimg.com/80/v2-d67aa9ffd972f4bccfbfcc6038178be0_720w.webp){:standalone}

由于没有更多信息，各路媒体大多都让 Yoshi 当了背锅侠。Yoshi 应该很委屈：我就是个听命干活的，咋都算在我头上了?

现在，我们又有了两位新的嫌疑人：Jeff Ching 和 Daniel Azuma。

那这两位项目维护人员是真正的始作俑者吗? 还是这哥儿俩被哪位新来的猪队友给坑了?

## 事后花絮

菲哥和王哥爆出谷歌搜索内部文件泄露事件之后，[谷歌发言人 Davis Thompson 曾在一封邮件中低调承认了被泄露文件的真实性](https://www.theverge.com/2024/5/29/24167407/google-search-algorithm-documents-leak-confirmation)，但对其他的任何询问都三缄其口。

这时，之前一直神神秘秘地爆料人却迫不及待地跑出来高调“示众”了。

![谷歌搜索内部文件泄露事件爆料人](https://pic1.zhimg.com/v2-4dd8d99878e5df097b45527ad34cabac_b.webp){:standalone}

这位爆料人叫 Erfan Azimi，是 SEO 服务公司 ([EA Eagle Digital](https://eaeagledigital.com/))的 CEO。从公司网站的内容看，这家公司应该刚刚成立不久或者规模特别小，正需要扩大知名度呢！

现在，Erfan Azimi 已经把“发现谷歌搜索意外流出的 2500 多页算法文件”作为一项重大成就高亮显示在自己的简介中。

![截图：爆料人公司网站上的个人简介](https://pic1.zhimg.com/80/v2-c87a3e606f2917170bc870f740223f80_720w.webp){:standalone}

这招欲擒故纵、吊人胃口的营销把戏玩得真挺溜的，咱也顺便学一下?

## 参考资料 {#refs}
{:.no_toc}

1. Rand Fishkin. [An Anonymous Source Shared Thousands of Leaked Google Search API Documents with Me; Everyone in SEO Should See Them](https://sparktoro.com/blog/an-anonymous-source-shared-thousands-of-leaked-google-search-api-documents-with-me-everyone-in-seo-should-see-them/) \[OL]. \[2024-05-27]\[2024-06-08].
2. [Repost from SparkToro: An Anonymous Source Shared Thousands of Leaked Google Search API Documents with Me; Everyone in SEO Should See Them](https://www.tripinfo.com/itm/articles/an-anonymous-source-shared-thousands-of-leaked-google-search-api-documents-with-me-everyone-in-seo-should-see-them) \[OL]. \[2024-05-27]\[2024-06-08].
3. Mike King. [Secrets from the Algorithm: Google Search’s Internal Engineering Documentation Has Leaked](https://ipullrank.com/google-algo-leak) \[OL]. \[2024-05-27]\[2024-06-08].
4. Marie Haynes. [What is this leaked Google code? Digging into the API Docs](https://www.mariehaynes.com/what-is-this-leaked-google-code-digging-into-the-api-docs/) \[OL]. \[2024-05-29]\[2024-06-08].
5. Mia Sato. [Google confirms the leaked Search documents are real](https://www.theverge.com/2024/5/29/24167407/google-search-algorithm-documents-leak-confirmation)
6. Google. [google_api_content_warehouse](https://hexdocs.pm/google_api_content_warehouse/0.4.0/api-reference.html) \[OL]. \[2024-05-29]\[2024-06-08] \[OL]. \[2024-05-30]\[2024-06-08].
7. [GitHub Repository: Elixir Google APIs](https://github.com/googleapis/elixir-google-api/tree/master/clients/content_warehouse) \[OL]. \[2024-05-07]\[2024-06-11].
8. [Hex package: google_api_content_warehouse](https://hex.pm/packages/google_api_content_warehouse) \[OL]. \[2024-05-07]\[2024-06-15].
9. [Elixir Docs: Writing documentation](https://hexdocs.pm/elixir/writing-documentation.html) \[OL]. \[-]\[2024-06-15].
10. [Hex homepage](https://hex.pm/) \[OL]. \[-]\[2024-06-15].
11. [Hex Docs: Publishing a package](https://hex.pm/docs/publish) \[OL]. \[-]\[2024-06-15].
12. [GitHub Repository: ExDoc](https://github.com/elixir-lang/ex_doc) \[OL]. \[2024-06-15]\[2024-06-15].
13. [GitHub Repository: Toys](https://github.com/dazuma/toys) \[OL]. \[2024-05-15]\[2024-06-17].
14. [GitHub Repository: Ruby Common Tools](https://github.com/googleapis/ruby-common-tools) \[OL]. \[2024-05-15]\[2024-06-17].
15. [Toys User Guide](https://dazuma.github.io/toys/gems/toys/v0.15.6/file.guide.html) \[OL]. \[2024-05-15]\[2024-06-17].
{:.small}



