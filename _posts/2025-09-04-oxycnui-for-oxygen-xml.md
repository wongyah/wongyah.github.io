---
title: 我做了个小插件，能为 Oxygen XML 提供最地道的中文界面
excerpt: "Oxygen XML 编辑器的中文界面带有浓浓的“鸡肋感”，你不觉得吗? 我想清除这股味儿……"
header:
  teaser: https://pica.zhimg.com/70/v2-40a78350540133f8f93799b34fe73321_1440w.avis?source=172ae18b&biz_tag=Post
  overlay_image: https://pica.zhimg.com/70/v2-40a78350540133f8f93799b34fe73321_1440w.avis?source=172ae18b&biz_tag=Post
  overlay_filter: 0.5
tags: DITA
---

[Oxygen XML] 是当下国内最流行的结构化编辑器之一，以操作便捷、功能丰富、可扩展性强以及高效的用户支持而著称。

自 2002 年问世至今，Oxygen XML 已经发布了 27 个大版本和 8 个小版本。不过，长期以来，Oxygen XML 的界面语言选项只有英文、法文、德文和日语，没有中文。

直到 2020 年初发布 22.0 版时，Oxygen XML 才开始提供中文界面。对于中文用户来说，这似乎是一个好消息。但只要试用一下你就会发现，这个中文界面带有浓浓的“鸡肋感”：

`File > New` 不叫【文件】>【新建】，叫“文件 > 新的”；\\
`Preferences` 不叫【首选项】，叫“偏好”；\\
`Append child` 不叫【添加子元素】，叫“附加子项”；\\
`Edit Properties` 和 `Edit Attributes` 都叫【编辑属性】；\\
……

去年年末，我注意到这个问题之后就使用 Oxygen XML 提供的 API 制作了一个语言插件：[OxyCNUI]。Oxygen XML 今年年初发布的 27.1 版中已经采用了该插件前期的一些翻译成果。

## 安装方法

OxyCNUI 有两个存储库：[GitHub 存储库][OxyCNUI GitHub]和 [Gitee 存储库][OxyCNUI Gitee]。Gitee 是国内的代码托管平台，连接稳定，访问速度也比较快。

![https://github.com/wongyah/oxycnui-for-oxygen-xml](https://picx.zhimg.com/v2-deb2900c2e20751cfb801d3a1e0f7d8d_1440w.jpg){:standalone}

每个存储库的项目说明文件 (Readme) 中都有两个快速安装按钮：【从 GitHub 安装 OxyCNUI】和【从 Gitee 安装 OxyCNUI】。

打开 Oxygen XML 编辑器，将其中任意一个按钮拖放到 Oxygen XML 编辑器的主编辑器，然后按照项目说明文件中的安装说明一步步操作即可。

需要注意的是，如果你的 Oxygen XML 版本是 27.0 及更早的版本，在首选项中的【语言】下拉列表中选择界面语言时，请选择【中文】，而不是插件本身的名字【简体中文（王烨译）】。否则，Oxygen XML 编辑器的欢迎界面和视图窗口中的中文字符都会变成方框。

这是 Oxygen XML 软件中的一个小漏洞，已经在 27.1 版本中修复了。如果你的 Oxygen XML 版本是 27.1，在【语言】下拉列表中选择 【简体中文（王烨译）】即可。

![截图：自动检查更新](https://pic1.zhimg.com/v2-b404546e19ac6a471a909fd5b3a0619e_1440w.jpg){:standalone}


## 更新插件

目前，Oxygen XML 编辑器的语言文件中共有 6715 项界面词条（也包括一些报错信息）。现在发布的 OxyCNUI V0.0.1 中只重新翻译一小丢丢常用的菜单项和对话窗口。以后，我会根据翻译进度持续发布新的版本。

如果有了新版本，你可以手动更新插件，也可以设置自动检查更新。设置了自动检查生新后，只要 OxyCNUI 发布新版本，你就会在 Oxygen XML 编辑器启动完成后收到一条更新提醒。

![截图：自动检查更新](https://pic3.zhimg.com/v2-0b3901a5fdf567d486b2605c5809026c_1440w.jpg){:standalone}

![截图：手动检查更新](https://pic2.zhimg.com/v2-125a8687129989f8ad4e2e85e9a53e99_1440w.jpg){:standalone}

## 欢迎贡献

如果你平时使用 Oxygen XML 编辑器时，看到了令人无语或者晦涩难懂的界面词条，欢迎去存储库提交问题报告 (Issue)。

我会尽快编写贡献指南，期待各位小伙伴一起参与。如果你对该项目感兴趣，或者有任何想法或建议，欢迎来交流分享。

<!-- links -->
[Oxygen XML]: https://www.oxygenxml.com/

[OxyCNUI GitHub]: https://github.com/wongyah/oxycnui-for-oxygen-xml

[OxyCNUI Gitee]: https://gitee.com/wongyah/oxycnui-for-oxygen-xml