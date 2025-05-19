---
title: "基于 ChatGPT 的智能文档助手到底有多酷?"
excerpt: "没想到，当我还在畅销未来时，这个“未来”就突然蹿到了眼前。"
header:
  teaser: https://pica.zhimg.com/70/v2-648b9a06cf14d4f68bc7652b1f950bde_1440w.avis?source=172ae18b&biz_tag=Post
  overlay_image: https://pica.zhimg.com/70/v2-648b9a06cf14d4f68bc7652b1f950bde_1440w.avis?source=172ae18b&biz_tag=Post
  overlay_filter: 0.5
tags: 人工智能
post_chatgpt_1: _posts/2023-02-08-what-chatgpt-mean-for-technical-writers.md
---

在[上一篇关于 ChatGPT 的文章](_posts/2023-02-08-what-chatgpt-mean-for-technical-writers.md)里，我还在畅想未来：

“当用户有任何需要时，只需要去问一下聊天机器人就好了”，不用去查阅长长的（厚厚的）产品文档。作为技术文档工程师，我们在未来甚至有可能“不需要发布任何格式的整本文档了”。

没想到话音未落，这个“未来”就突然蹿到了眼前。

就在我刚刚写完那篇文章的时候，开源软件 Supabase 在[其官方文档页面][Supabase]上线了类似 ChatGPT 的智能文档助手 "Supabase Clippy"。*你说，巧不巧? 你说，快不快?*{: style="color: rgb(150, 150, 150); font-style: normal;"}

> Clippy 是微软在 1996 年推出的 Office 助手，外号大眼夹。因为当年的技术水平有限，大眼夹没少给用户送“惊吓”。后来，微软渐渐地将它从 Office 系统中移除了。

重生后的大眼夹会为（文档）用户带来怎样的体验? 这样一个功能需要花多少钱? 我们能否为自己的文档系统增加一个类似的功能呢? 本文将带来对这些问题的详细解读。

## 用户体验

我也是第一次听说 Supabase，在此之前我对它一无所知。

为了搞清楚它到底是怎样一个产品，我不仅访问了官网，还搜索了其他网站和博客上关于它的简介。

但是，所有的描述都和官网如出一辙：Supabase 是 Firebase 的开源替代品。em…… Firebase 是什么?

每次接触一个完全陌生的领域，相信很多人都会像这时的我一样，一头雾水，无从下手。现在，有了大眼夹，我似乎不需要再去从头翻文档了。

于是，我问了一下大眼夹：Firebase 是什么? 你和 Firebase 之间有什么关系?

![大眼夹正在回答问题](https://vdn6.vzuu.com/SD/398c66ca-c086-11ed-9c02-aa73a14c00b2-v1_f4_t2_MGMPYJDl.mp4?pkey=AAXs6WkxW4JwpjXO5z2Iqo1bH_Sxw9o0_5VAzO_Y9mXGi0UYIeZ-D1fw6iUnQVbJPv1yMWdaCcYP5w0R8kpmxJ3h&bu=078babd7&c=avc.1.1&expiration=1747629974&f=mp4&pu=078babd7&v=ks6 "大眼夹正在回答问题"){:standalone}

大眼夹的回答提供了不少有用的信息，但也有一些地方让我似懂非懂。如果想知道地更清楚一些，我还可以针对回答中的关键术语追问出更多信息。

**毫无疑问，像大眼夹这样的智能文档助手绝对是新手和小白的福音，尤其对于复杂产品而言**。

以 Supabase 为例：一方面，产品越来越复杂，文档内容越来越多；另一方面，很多开发者慕名而来，却不具备使用产品所需的基本技能（比如没有任何使用 Postgres 数据库的经验）。大眼夹的出现，带给 Supabase 的应该不只是噱头。

**目前的大眼夹仅仅是最小可行产品（MVP），会根据使用效果和用户的反馈迭代更新。**

其实，现在页面顶部的大眼夹按钮就是根据用户的建议添加上去的。最开始的时候，要叫出大眼夹的对话窗口只能使用组合键（`Ctrl+/`）。而某些操作系统不支持这一组合键，导致某些用户无法正常打开对话窗口。

还有网友发现，大眼夹也会像 ChatGPT 一样信口开河，告诉他的文档链接居然是一个 404 页面（您访问的页面找不到了）。如今 Supabase 已经告诉大眼夹，它只能回答文档中有明确答案的问题。对于文档中没有写明或者不能保证百分百正确的内容，它只能对用户说：“对不起，我回答不了这个问题。”

![对不起，我回答不了这个问题](https://pic1.zhimg.com/v2-dc8af83dd1838c3f52ff686c0856e3be_1440w.jpg "对不起，我回答不了这个问题"){:standalone}

最让人哭笑不得的是，大眼夹最初经常给用户推荐 Supabase 的竞品，而无视自家产品。Supabase 只好万般无奈地给大眼夹洗脑：“你是 Supabase 的客服代表，热情洋溢，乐于助人……”

大眼夹还有很多地方可以改善，Supabase 似乎已经可以列出一串长长的需求清单了！你要不要也[去体验一下][Supabase]，纠个错，提个议?

> 就在我抓紧时间写这篇文章的时候，大眼夹又更新了！\
> 页面顶部的大眼夹图标不见了。要叫出大眼夹窗口，首先在搜索框区域点击（位于上文动图中大眼夹图标的左侧），或者按组合键 `Ctrl+/`。然后，点击按钮 `Ask Clippy`。

## 运行费用

大眼夹的问答过程需要用到 [OpenAI] 的两个大规模语言模型 (LLM) ：

- 嵌入模型 (Embedding model)，用于将文本格式的信息转换成数字格式的特征向量。
- InstructGPT 中的达芬奇模型 (Davinci)，用于自动生成文本（回答）。

据 Supabase 的人员透露，大眼夹平均每小时会收到大约 1800 个提问，需要为此支付的费用约为 5 美元/小时（约合人民币 34.6 元）。也就是说，Supabase 平均需要为每个提问支付大约 0.28 美分（约合人民币 1.9 分钱）。

大眼夹目前只向电脑端用户开放，手机端暂时还不支持这个功能。Supabase 担心，如果现在开放手机端访问，访问量激增可能会导致费用爆表。为了控制预算，Supabase 已经向 OpenAI 申请了消费限额 (spend-caps)。

即便有点小贵，相对于大眼夹带来的可观流量而言，Supabase 明确表示“**特 别 值**”！

![嵌入模型的功能示意图](https://picx.zhimg.com/v2-6ed84dca126fe14636aaa2657ffd24d3_b.jpg "嵌入模型的功能示意图"){:standalone style="max-width: 500px;"}

## 计费方式

如果你也很想为自己的文档系统创建一个类似的功能，预算评估是必做的功课。要做预算评估，就要分清语言模型的种类，了解他们的价格和计费方式。

有了 Supabase 作先驱，现身说法，我们可以对大规模语言模型的费用有一个更直观的认识。

OpenAI 部分大模型的价格表
{:.table-caption}

|  类别  |  模型  |  价格（美元/千个标记） |
|:---|:--:|:--:|
|  Chat  |  gtp-3.5-turbo  |  0.002  |
|  InstructGPT  |  Ada<br />Babbage<br />Curie<br />**Davinci** |  0.0004<br />0.0005<br />0.002<br />**0.02**  |
|  嵌入模型  |  **Ada**  |  **0.0004**  |

**大眼夹使用的达芬奇模型 (Davinci)，属于 OpenAI 提供的文本生成模型中最贵的一个**。

em…… 我想说的是，你完全可以尝试一下其他模型，或许性价比更高、更适合你呢。

除了达芬奇模型，InstructGPT 中还有三个模型：阿达模型 (Ada)、巴贝奇模型 (Babbage) 和居里模型 (Curie)。

按照名称的首字母顺序，模型的能力依次递增，速度依次降低。阿达模型的速度最快，但能力最差（只能回答基本问题）。巴贝奇模型和居里模型次之。达芬奇模型能力最强，但速度最慢。

除此之外，你还可以考虑最火爆、最广为人知的 ChatGPT 同款模型 `gpt-3.5-turbo`。OpenAI 几天前刚刚开放了它的 API（应用程序接口），价格只有达芬奇模型的 1/10。*它的性能，就不需要我多说了吧?*{: style="color: rgb(150, 150, 150); font-style: normal;"}

> ChatGPT（Chat 模型） 擅长多轮连续对话，而 InstructGPT 拿手的是单轮问答。\
> 嵌入模型只有一种，没有替代选项。

**OpenAI 的语言模型采用按量计费的方式，收费单位是每一千个标记 (1K tokens)。**

按照 OpenAI 的估算，在英语中每个标记大约相当于 4 个字符或者 0.75 个单词。也就是说，每一千个标记大约相当于 750 个英文单词。

比如，下面这句来自“伟大的冰球手”韦恩·格雷茨基 (Wayne Gretzky)的名言包含 11 个标记：\
*You miss 100% of the shots you don't take*{: style="color: rgb(150, 150, 150); font-style: normal;"}

不过，每种语言划分标记的方法不太一样。字符数量相同的情况下，划分出的标记越多，费用就越高。比如西班牙语 "Cómo estás"（你好）中只有 10 个字符，却包含了 5 个标记。

要想知道一段文本中包含多少个标记，可以使用分词器来估算。比如：

- OpenAI 发布的分词器 [tokenizer](https://beta.openai.com/tokenizer "tokenizer网址")
- OpenAI 推荐在编程中使用的分词器 [tiktoken](https://github.com/openai/tiktoken "tiktoken的Github存储库")

文本生成模型在计费时，既计算你向语言模型输入的提示（prompt）中的标记数量，也计算语言模型返回的结果（回答）中的标记数量。

那么，你觉得大眼夹在每对问答中平均会用掉多少个标记呢?

## 创建方法

智能文档助手大眼夹的成功上线，开源贡献者 Greg Richardson 功不可没。

基于他贡献的代码，Supabase 开始支持一款进行向量相似度搜索的扩展（extensions）—— pgvector。为了更好地展示 pgvector 用法，他为 Supabase 用户手册 (Guide) 创建了一个类似 ChatGPT 的功能。这个功能，就是大眼夹的雏形。

作为开源的后端开发平台，Supabase 创建大眼夹自然是使用自家的产品。创建大眼夹的关键步骤如下：

1. 将 Supabase 用户手册拆分成多个文本格式的小文件（小章节）。
2. 使用 OpenAI 的嵌入模型 (embedding model) 将各个小文件转换为数字格式的特征向量 (embeddings)。
3. 通过 pgvector 将各个小文件的内容与其对应的特征向量存储到 Postgres 数据库中。
4. 当用户使用大眼夹提问时，提取用户提问的内容，并将其转换为数字格式的特征向量。
5. 根据用户提问的内容，通过 pgvector 从数据库中获取相关文件的内容。
6. 使用（已确定好的）角色引导语、用户提问的内容以及作为上下文环境的相关文件的内容组成完整的提示（prompt）。
7. 根据提示，使用达芬奇模型自动生成回答，并将该回答实时返回给用户。

![大眼夹的创建过程](https://pic1.zhimg.com/v2-d122a8c4e8b780af982133fa78db2f9e_1440w.jpg "大眼夹的创建过程"){:standalone style="width: 100%; max-width: 500px;"}

如果想了解更多细节，可以好好研究一下下面的 Github 存储库：

- [Supabase Clippy](https://github.com/supabase/supabase/pull/12054 "Supabase存储库中与大眼夹相关的提交")
- [pgvector](https://github.com/pgvector/pgvector "pgvector的Github存储库")


## 参考资料 {#refs}
{:.no_toc}

1. Paul Copplestone. [Supabase Clippy: ChatGPT for Supabase Docs](https://supabase.com/blog/chatgpt-supabase-docs).
2. Greg Richardson. [Storing OpenAI embeddings in Postgres with pgvector](https://supabase.com/blog/openai-embeddings-postgres-vector).
3. [Comments for "Supabase Clippy: ChatGPT for Supabase Docs"](https://hn.svelte.dev/item/34695306).
4. OpenAI. [Pricing: Simple and flexible, only pay for what you use](https://openai.com/pricing).
5. Tabarak Khan. [What are tokens and how to count them?](https://help.openai.com/en/articles/4936856-what-are-tokens-and-how-to-count-them)
6. OpenAI. [Introducing text and code embeddings](https://openai.com/blog/introducing-text-and-code-embeddings).
{:#refs_list .small}

<!-- link definition -->
[Supabase]: https://supabase.com/docs "Supabase官方文档"

[OpenAI]: https://openai.com "OpenAI官网"

