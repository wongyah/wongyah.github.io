---
title: DITA无缝衔接Bootstrap，还能使用那么多精美的主题模板
excerpt: DITA Bootstrap 是专为 DITA-OT 开发的一个插件。有了 DITA Bootstrap，你就可以直接把 Bootstrap 里写好的样式用在 DITA 元素上，一键发布！
header:
  teaser: https://picx.zhimg.com/70/v2-1bc6fc6d0949fa8d30b57ff4706947d8_1440w.avis?source=172ae18b&biz_tag=Post
  overlay_image: https://picx.zhimg.com/70/v2-1bc6fc6d0949fa8d30b57ff4706947d8_1440w.avis?source=172ae18b&biz_tag=Post
  overlay_filter: 0.5
tags: 内容管理 DITA
---

自带的模板太丑，一直是 DITA 广为诟病的原因之一。

我在 GitHub 上收集到一些用 DITA 编写的样本手册，但从来没有好好看过。心理学上管这叫“数字囤积”或者“收藏癖”，听着和我挺像，但我真不是！

我很想知道这些手册里都写了什么，怎么写的。但是，除了个别产品的官方文档以外，这些手册几乎都没有发布成在线文档，只以 XML 文件的形式躺在存储库里。

我实在不想自己去发布一遍，更不想去读密密麻麻的 XML 源代码。能理解我了吧?

年前，我为了准备一个 DITA 培训课程，打算收集和制作一些中文的样本手册作为练习材料。总不能让大家只看源代码不见“成品”吧，还是得做成适合阅读的形式才好。

本来我还在为这事儿焦虑着呢，估计写个像样的发布模板得花不少时间吧。不成想，开年见喜，一搜就搜到一个叫 [DITA Bootstrap](https://github.com/infotexture/dita-bootstrap) 的神仙插件，开箱即用！

## 什么是Bootstrap?

打开任何一个网页，在右键菜单中选择【检查】，你就会看到这个网页的源代码。

![](https://pic2.zhimg.com/v2-c8f8dc87f43e3e7a7adb9cb772505851_r.jpg){:standalone}

源代码由两部分组成：左边是 HTML 代码，里边包含网页的结构和内容；右边是 CSS 样式，用来定义网页的外观和格式。

[Bootstrap](https://getbootstrap.com/) 就是一套现成的 CSS 样式工具包。有了这套工具包，你就不用从零开始写 CSS 样式表了，直接把 Bootstrap 里写好的样式用在 HTML 元素上就行。开箱即用！

可能有些小伙伴还没来得及好好研究 CSS 呢。我们来看个小例子，保准能让你秒懂！

假设我们想给博客文章的头图都添加上一个圆角边框，像这样：

<img src="https://picx.zhimg.com/v2-caa7b57695f78887ac0f703725145b15_r.jpg" style="max-width: 50%; height: auto;" />

如果使用 Bootstrap，我们只需要在 HTML 文件中为头图的图片元素 (`<img>`) 添加一个叫 `img-thumbnail` 的类名即可。这个类名的意思是缩略图 (thumbnail image)。

```html
<img src="图片路径" class="img-thumbnail" alt="替代文本">
```

如果不使用 Bootstrap，我们除了像刚才一样给头图添加一个直观的类名外，还需要从零开始为头图设置 CSS 样式。

假设我们还使用 `img-thumbnail` 作为类名，就要新建一个 CSS 文件（比如 `style.css`），然后在里面输入以下代码：

```css
.img-thumbnail {
  padding: 0.25rem;
  background-color: #fff;
  border: 1px solid #dee2e6;
  border-radius: 0.375rem;
  box-shadow: 0 0.125rem 0.25rem rgba(#000, 0.075);
  max-width: 100%;
  height: auto;
}
```

Bootstrap 提供的样式非常丰富，每个样式都配有示例代码，基本上照猫画虎就行。

除此之外，网上还有很多基于 Bootstrap 开发的主题模板，比如 Bootswatch、Start Bootstrap。使用主题模板可以进一步降低设置 CSS 样式的工作量，而且是大幅降低。

![](https://picx.zhimg.com/v2-1a020ff86df5b64cf2b7645c25f89db3_1440w.jpg){:standalone}

对了，Bootstrap 是 GitHub 上的开源项目，出自前 Twitter 工程师 Mark Otto 和 Jacob Thornton 之手，一直是前端开发中非常流行的工具包。

## 什么是 DITA Bootstrap?

[DITA Bootstrap](https://infotexture.github.io/dita-bootstrap/) 是专为 DITA-OT 开发的一个插件。[DITA-OT](https://www.dita-ot.org/) 的全称是 DITA Open Toolkit，是一款应用非常广泛的 DITA 发布工具。

DITA-OT 是许多 DITA 编辑器和内容管理系统默认的发布工具。本文开头说的“自带的模板太丑”，其实说的就是 DITA-OT 自带的模板太丑。

![](https://pic3.zhimg.com/v2-9831e379650ceaa0866cb58056d46e5c_1440w.jpg){:standalone}

有了 DITA Bootstrap 插件，你就可以直接把 Bootstrap 里写好的样式用在 DITA 元素上，然后一键发布就行！

我们再来看个小例子吧！还是像前面一样，给图片添加一个圆角边框。像这样：

<img src="https://picx.zhimg.com/v2-caa7b57695f78887ac0f703725145b15_r.jpg" style="max-width: 50%; height: auto;" />

如果用上 DITA Bootstrap 插件，我们只需要在 DITA 文件中将图片元素 (`<image>`) 的 `@outputclass` 属性设置为 `img-thumbnail` 即可。

```xml
<image href="图片路径" outputclass="img-thumbnail" />
```

和 Bootstrap 文档一样，DITA Bootstrap 文档中也有示例代码，照猫画虎就行。

使用 DITA Bootstrap 发布 DITA 时，你也可以指定主题模板，使用 `--bootstrap.theme` 选项设置即可。

```powershell
dita --input=文件路径.ditamap --format=html5-bootstrap --bootstrap.theme=<主题模板名称>
```

天呐，反正我是一眼爱！

## 安装 DITA Bootstrap

如果我的安利打动了你，那么接下来咱就动手安装了。

安装 DITA Bootstrap 时要用到命令行和环境变量，还需要做一些准备工作。听起来很高深的样子吧? 但你别担心，没那么复杂。只要跟着我做，保证你手到擒来。

**第一步，安装 DITA-OT。**

DITA Bootstrap 是 DITA-OT 的一个插件。要使用 DITA Bootstrap，必须得先装上 DITA-OT。

如果你此前已经安装了 Oxygen XML、Adobe FrameMaker 等软件，那么你的电脑上其实已经有 DITA-OT 了。你只需要找到 DITA-OT 安装文件夹的位置即可。

> Oxygen XML 中的 DITA-OT 安装位置是：
`[OXYGEN安装文件夹]/frameworks/dita/DITA-OT`

如果你没有安装过上述软件或者想用最新版的 DITA-OT，去官网下载安装包后解压缩即可。

**第二步，安装 Java。**

DITA-OT 中包含 Java 代码。要使用 DITA-OT，必须得安装 Java。

如果你明确知道你的 DITA-OT 是哪个版本的，可以根据需要选择安装 JRE 或者 JDK。

如果你不知道你的 DITA-OT 是哪个版本的，推荐安装最新的 JDK 稳定版 (Long-Term Support, LTS)。

![](https://pic2.zhimg.com/v2-c62e3bc1cc6b5478c27ab2f210c63af9_1440w.jpg){:standalone}

**第三步，设置环境变量。**

一般情况下，我们需要为 Java 配置两个环境变量 (JAVA_HOME 和 Path)，为 DITA-OT 配置一个环境变量 (Path)。

环境变量的变量名和变量值如下：

|  变量名  |  变量值  |
|:---|:---|
|  JAVA_HOME  |  {JDK 安装文件夹的绝对路径}  |
|  Path  |  %JAVA_HOME%\bin  |
|    |  {DITA-OT安装文件夹的绝对路径}\bin  |

在 Windows 中设置环境变量的方法，请参考文章：[如何为 Java 配置环境变量?](https://mp.weixin.qq.com/s/iR5x2RzlTER7MTJGGQrhQA)

配置好环境变量之后，打开命令提示符，使用以下命令检查一下 DITA-OT 是不是安装成功了：

```powershell
$ java --version
java 21.0.5 2024-10-15 LTS
Java(TM) SE Runtime Environment (build 21.0.5+9-LTS-239)
Java HotSpot(TM) 64-Bit Server VM (build 21.0.5+9-LTS-239, mixed mode, sharing)

$ dita --version
DITA-OT version 4.1.1
```

如果安装成功，输入 `dita --version` 命令后，命令提示符窗口中会显示出 DITA-OT 的版本号。

**第四步，安装 CSS 扩展插件和 DITA Bootstrap 插件。**

DITA Bootstrap 插件是基于另外一个叫 CSS 扩展的插件 (fox.jason.extend.css) 编写的，所以 CSS 扩展插件得和 DITA Bootstrap 插件一起安装。

如果你的 DITA-OT 版本是 3.5 或以上，使用以下命令下载 CSS 扩展插件和 DITA Bootstrap 插件：

```powershell
dita install fox.jason.extend.css
dita install net.infotexture.dita-bootstrap
```

如果你的 DITA-OT 版本是 3.3 或以上，使用以下命令下载 CSS 扩展插件和 DITA Bootstrap 插件：

```powershell
dita --install fox.jason.extend.css
dita --install net.infotexture.dita-bootstrap
```

如果你的 DITA-OT 版本是 3.2 或以下，使用以下命令下载 CSS 扩展插件和 DITA Bootstrap 插件：

```powershell
dita --install https://github.com/jason-fox/fox.jason.extend.css/archive/master.zip
dita --install https://github.com/infotexture/dita-bootstrap/archive/master.zip
```

DITA-OT 插件会安装在子文件夹 plugin 中。如果 CSS 扩展插件和 DITA Bootstrap 插件安装成功，你就可以在 plugin 文件夹中找到以这两个插件的 ID 命名的子文件夹。

![](https://picx.zhimg.com/v2-3b7372e155e56ffd1123a73b8fa42c83_1440w.jpg){:standalone}

**第五步，测试 DITA Bootstrap 插件。**

找一个 DITA Map 文件，使用 DITA Bootstrap 将其发布为在线文档（HTML）：

```powershell
dita --input=文件路径.ditamap --format=html5-bootstrap
```

其中，`--input` 参数用来指定 DITA Map 文件的路径，`--format=` 参数用来指定输出格式。使用 DITA Bootstrap 输出文档时，输出格式应该设置为 `html5-bootstrap`。

## 在 Oxygen XML 中使用 DITA Bootstrap

在 Oxygen XML 编辑器中，你也可以使用 DITA Bootstrap 发布在线文档。安装好 DITA Bootstrap 以后，按照以下步骤创建一个转换场景即可。

![](https://pic3.zhimg.com/v2-89492504c9d668ac25a42356da6a358c_1440w.jpg){:standalone}

1. 打开 Oxygen XML 编辑器。
2. 在编辑器中，打开一个DITA Map 文件。
3. 在工具栏或 DITA 导图管理器 (DITA Maps Manager) 中点击配置转换场景按钮 (Configure Transformation Scenario(s)) 。
4. 在配置转换场景对话框 (Configure Transformation Scenario(s)) 中，点击新建 (New)。
5. 在弹出的下拉列表框中，选择 DITA-OT 转换 (DITA-OT Transformation)。
6. 在 DITA 转换类型对话框 (DITA Transformation Type) 中，选择 HTML5 with extensible Bootstrap style 并确认。
7. 在新场景对话框 (New Scenario) 中，将新场景的名称 (Name) 设置为 "DITA Bootstrap"，将存储方式 (Storage) 设置为全局选项 (Global Options)，并确认。这时，配置转换场景对话框中会出现一个名为“全局 (Global)”的类别。我们刚刚新建的转换场景 DITA Bootstrap 就归类在这个“全局”类别里。
8. 点击应用关联场景 (Apply Associated) 后，DITA Map 文件会按照默认的主题样式转换为 HTML5 文件。
{:.small}

这只是一个最简单的转换场景。如果使用 DITA Bootstrap 提供的众多参数，还可以根据需要进行丰富的个性化设置。想要了解更多，去翻一翻[官方文档](https://infotexture.github.io/dita-bootstrap/)吧！

<!-- 
<section style="margin-left: 10px; margin-right: 10px;">
-->
