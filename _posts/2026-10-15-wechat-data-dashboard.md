---
title: 我使用 Metabase 搭配 Supabase，做了一个公众号数据分析仪表盘！
excerpt: 总是在不经意间，发现了更好的方法、工具和结果。不知道是因为技术变得简单了，还是自己明显进步了?
header: 
  teaser: https://picx.zhimg.com/v2-20d62ca2c690f2f387f7b62290f6ddb1_720w.jpg
  overlay_image: https://picx.zhimg.com/v2-20d62ca2c690f2f387f7b62290f6ddb1_720w.jpg
  overlay_filter: 0.5
tags: 人工智能
---

两年前，我在一篇聊[编程小白如何使用 AI 大模型][AI编程]的文章里提到过：由于单次下载的期限限制，我每年都要从微信公众平台下载很多张 Excel 表。

我最初使用 Excel 进行数据分析，后来改用 VBA 将 Excel 表转换成 CSV 文件，导入 Access 数据库。但我还是会头大，经常忘记 VBA 代码保存在哪里了、如何使用代码以及如何在 Access 数据库中操作。

去年年底，我又发现了一个新方案，不仅能一劳永逸地解决数据存储问题，简化数据可视化的操作过程，还能使用仪表盘动态管理生成的图表。

本文将以公众号数据为例，概括性介绍新方案中用到的软件工具和数据处理流程，希望能为那些崇尚精细化运营的中小企业和自媒体打开一扇数据分析之门，离数字化未来更近一步！

## 数据下载

我通常下载以下四个方面的公众号数据：关注人数、常读用户、每天的阅读流量以及每篇文章的阅读量。

微信公众号允许下载所有历史数据。大部分数据的单次下载时间区间最长是 90 天，只有常读用户相关数据是一年。也就是说，我每年至少要下载 20 多张 Excel 文件。如果下载频率高一点，文件数量还会更多。

为了便于进行批量处理，下载文件时要**使用规范的文件夹结构和文件名称**。而且，文件路径（包含文件名称）最好**只使用字母、数字、下划线或连字符**，不要包含中文字符、空格和特殊字符。否则，有些程序或脚本可能会出现莫名其妙的错误，尤其是在 Windows 环境下。

![字符画：保存公众号数据文件的文件夹结构](https://pic1.zhimg.com/v2-990fd6824759b758b1d252c1e168d0a8_1440w.jpg){:standalone style="max-width: 600px;"}

还有一点需要注意，2025 年 11 月 1 日之后微信公众平台重新设计了一些数据文件的表格结构（比如每天的阅读流量和每篇文章的阅读量方面的数据），也调整了文件的内部结构。虽然文件的扩展名都是 .xls，但此前的文件其实是 HTML（也就是伪 XSL 文件，用 Excel 打开时会报错），现在统一改成了 XML（即标准的 XSL 文件）。

如果下载文件时，看到“2025 年 11 月 1 日之前的数据可查看历史数据”之类的提示，**最好将两个阶段的数据文件分开保存**。批量处理时，这两个阶段的文件可能需要使用不同的处理方式。

![截图：微信公众平台的系统提示](https://pic4.zhimg.com/v2-1262550755d506b9044b49f806ee2095_1440w.jpg){:standalone style="max-width: 600px;"}

## Supabase

2023 年初，Supabase 曾经借着 ChatGPT 的东风上过全球热搜。当时，他们最早上线了智能文档助手，并开源了代码：
[大眼夹异地重生：基于 ChatGPT 的智能文档助手到底有多酷?][Supabase智能文档助手]

Supabase 是一个开源软件，可以为动态网站、在线应用或应用程序编程接口 (API) 等提供后端云服务。它会为每个项目提供一个 PostgreSQL 数据库，可以通过浏览器、API 等多种形式访问。它还有很多功能，但我首先看上的就是这个云端数据库功能。

![截图：我的 Supabase 项目数据库](https://pic3.zhimg.com/v2-b5a7e972eb6e2bbbca04b974b0fdc190_1440w.jpg){:standalone}

通过 Supabase 提供的可视化界面，我在新建项目、新建数据库表和上传数据的过程中还挺顺利的。有一点需要注意，新建数据库表时需要定义字段，字段的数据类型、可否为空以及默认值等选项要根据公众号的数据表来设置。如果不匹配，上传数据的时候就会报错。

如果你不想折腾，可以直接下载我做好的数据表结构（一个 SQL 文件）：[wechat_data_schema.sql](https://jyxvkgvfjrgdufzpepde.supabase.co/storage/v1/object/public/WeChat%20Data%20Schema/wechat_data_schema.sql)

下载之后，使用记事本、代码编辑器等工具打开。文件中详细注释了每张数据库表的用途，可以帮助你了解每个表都应该上传从哪里下载下来的数据。

![截图：我的公众号数据库表结构文件](https://pic1.zhimg.com/v2-8c1f94580342b4571edb04b3348c5f46_1440w.jpg){:standalone}

在你的 Supabase 项目中，从左侧导航栏中打开 SQL 编辑器。将 SQL 文件中的所有内容复制到 SQL 编辑器中。然后，点击【运行】。

![截图：Supabase 项目中的 SQL 编辑器](https://picx.zhimg.com/v2-66585bd05d1235ddf34a2af3bcd8f5f7_1440w.jpg){:standalone}

如果收到潜在风险提示，选择运行并启用 RLS（【Run and enable RLS】）即可。

![截图：运行SQL文件前的潜在风险提示](https://pic4.zhimg.com/v2-5fb02af3fce963e7e896bbb7be145759_1440w.jpg){:standalone style="max-width: 500px;"}

运行完成后，从左侧导航栏中打开表格编辑器，你就可以看到新生成的数据库表了。当然，它们目前还都是空表，可以从 CSV 文件中批量导入数据。

![截图：Supabase 项目中的表格编辑器](https://pic4.zhimg.com/v2-5552f829fda73418151616820a759ca3_1440w.jpg){:standalone}

## WorkBuddy

WorkBuddy 是腾讯推出的智能办公助手，可以自主执行工作任务，包括批量操作 Excel 文件。用它将微信公众号的数据文件（即 XSL 格式的 Excel 文件）批量转换成 CSV 文件，再合适不过了！

![截图：WorkBuddy执行的一次格式转换](https://pic2.zhimg.com/v2-ecee26207d4758c4dee97d6cee1b873b_1440w.jpg){: standalone style="border: 2pt solid rgb(150, 150, 150); max-width: 700px;"}

转换时，必须将 Excel 文件中的中文列名替换为 Supabase 项目中对应的数据库表列名。也就是说，在转换后的 CSV 文件中，首行必须是 Supabase 项目中对应的数据库表列名，不能是 Excel 文件中的中文列名。否则，导入时会报错。

![Excel 和 CSV 文件中的列名](https://pic2.zhimg.com/v2-c9244ec9f15b7e51077ae7d46a194c99_1440w.jpg){:standalone style="max-width: 600px; box-shadow: none;"}

你可以打开 Supabase 项目，从左侧导航栏中打开数据库，默认显示的页面是可视模式页面（Schema Visualizer）。在该页面中，复制数据表定义，保存为文件。然后，将其上传给 WorkBuddy 做为上下文，WorkBuddy 就知道应该在 CSV 文件中使用哪些列名了。

![截图：Supabase 项目数据库视图中的模式页面](https://pic3.zhimg.com/v2-d5055dc3987cee1a14f7e326ea2727b8_1440w.jpg){:standalone}

> 如果你的数据库表是用上文中提到的 wechat_data_schema.sql 文件生成的，可以将这个文件上传给 WorkBuddy 作为上下文。该文件就是我从我的可视模式页面中复制的。

执行转换任务时，我通常会按照以下几个步骤进行：

1. 从下载的四类数据中各挑选一个文件作为样本。
2. 每次让 WorkBuddy 将一个样本文件转换为 CSV 格式，保存到 csv 文件夹下的同名路径中。如果转换结果不符合预期，就告诉 WorkBuddy 哪里错了、如何修改，直到满意为止。
3. 将 CSV 格式的样本文件上传到 Supabase 项目中对应的数据库表中。如果上传失败，根据错误提示让 WorkBuddy 修改 CSV 样本文件。
4. 如果上传成功，就让 WorkBuddy 根据此前的转换过程和修改过程生成一项项目级技能，以便日后转换同类文件时调用。
5. 如果微信公众平台调整了数据文件的结构（比如 2025 年 11 月 1 日对部分数据文件的调整），重复上述步骤，并让 WorkBuddy 更新相应的技能文件。

项目级技能保存在 `项目文件夹/.workbuddy/skills` 中，可以通过文本编辑器查看或编辑，比如 VS Code、记事本等。

![截图：WorkBuddy 生成的技能文件](https://pic4.zhimg.com/v2-4044f1356f4bc32b39deab8af691f5c3_1440w.jpg){:standalone}

有了 CSV 格式的数据文件，你就可以向 Supabase 项目的数据库表中导入数据了。在 Supabase 项目中，打开表格编辑器，点击右上角的插入按钮，选择使用 CSV 文件导入数据即可。

![截图：使用 CSV 文件向数据库表导入数据](https://pic4.zhimg.com/v2-e00c3429a93d6da8f65888c9cc745567_1440w.jpg){:standalone}

## Metabase

Metabase 是一个开源的数据可视化平台，尤其适合对数据库了解不多的小白用户。它可以连接到 Supabase 项目的数据库，基于数据库表和查询生成各种图表，还能将图表整理成仪表盘。

![截图：我创建的第一个仪表盘](https://picx.zhimg.com/v2-9ba72ad5edb5ae26f61ecf07e2290383_1440w.jpg){:standalone}

Metabase 可以免费自部署，也提供付费的云服务。自部署有多种安装和运行方式，比如可以直接运行的 JAR 文件、在 Docker 上运行的镜像以及可以完全脱网运行的气隙版。

对于刚刚试水的个人和中小企业而言，直接运行 JAR 文件最方便。官方文档中有[详细的安装说明](https://www.metabase.com/docs/latest/installation-and-operation/running-the-metabase-jar-file?use_case=bi)：

![截图：Metabase 安装教程](https://pic4.zhimg.com/v2-1a81d611fdd4bfd67168d306c2e13c23_1440w.jpg){:standalone}

安装好 Metabase 后，按照 [Supabase 的博客教程](https://supabase.com/blog/visualizing-supabase-data-using-metabase)注册 Metabase 账号、连接 Supabase 项目的数据库并试着创建几个简单的图表：

![截图：Metabase 新手教程](https://pic1.zhimg.com/v2-a27f776ea97ce250af93aacb562218d0_1440w.jpg){:standalone}

我现在也是新手，仍然在摸索中。你如果遇到什么问题或者希望了解更多有趣又好用的软件工具，欢迎关注**公众号@技术传播百态说**，后台发送关键字 **读者群** 加入 **技术传播百态说读者群**。这里有一群热情又好奇的效率达人可以和你一起探索！

<!-- links -->

[AI编程]: {% link _posts/2024-09-03-how-to-become-a-developer-with-ai.md %} "编程小白，借助AI大模型真能摇身一变成为“伪程序员”吗?"

[Supabase智能文档助手]: {% link _posts/2023-03-08-how-cool-a-chatgpt-like-ai-assistant-for-tc-documentation.md %}
