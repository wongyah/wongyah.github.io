---
title: Claude Code 搭配国产大模型和 VS Code，我是这么搞定的！
excerpt: 我一直以为国内用不了 Claude Code，没想到人家是开源项目，接入国产大模型就能随便用！
header: 
  teaser: https://picx.zhimg.com/v2-e89856e8ccc0fa90a6f0083c0f5ae386_720w.jpg
  overlay_image: https://picx.zhimg.com/v2-e89856e8ccc0fa90a6f0083c0f5ae386_720w.jpg
  overlay_filter: 0.5
tags: 
---

前些天，我在一篇公众号文章中听到一句话：“国内软件工程师的词元消耗量中有 85% 是通过 Claude Code 贡献的”。不过，我现在找不到那篇文章了，AI 说我肯定是听错了……

不管怎么样吧，我当时是被惊到了：他们都是怎么做到的?！我一直以为国内用不了 Claude Code，也顺便跟别人打听过，他们有的说用不了，有的对此讳莫如深。

我马上就去查阅官方资料，并在网上搜索在国内安装使用 Claude Code 的方法，果然有不少惊喜：

Claude Code 是**在 GitHub 上开源**的智能编程助手。官方文档里写得很明确，多数版本需要注册 Anthorpic 账号或付费订阅，但使用**命令行**和 **VS Code 扩展**（即插件）的版本支持第三方大模型。也就是说，如果改用国产大模型，就不需要登录 Anthorpic 账号或付费订阅，在国内就能正常使用。

![截图：Claude Code文档中关于接入第三方大模型的说明](https://pic4.zhimg.com/v2-98ebee9ab23b6cb326c825093085c0af_1440w.jpg){:standalone}

本文将记录我在 VS Code 中安装 Claude Code 扩展和接入国产大模型的方法（以阿里云百炼为例，操作系统为 Windows），并对关键操作进行解释说明，希望你能一通百通！

## 安装扩展

在 VS Code 中，点击左侧导航栏里的扩展图标（快捷键为【Ctrl+Shift+X】）。在扩展面板里，搜索 `Claude Code`，在搜索结果中查找名称为“Claude Code for VS Code”的扩展（开发商为 Anthorpic）。

打开该扩展，点击【安装】。

![截图：Claude Code for VS Code 插件](https://pic4.zhimg.com/v2-3a043445c1936842b1a787c0f64234e7_1440w.jpg){:standalone}

安装完成后，【Claude Code】图标会出现在左侧导航栏中。如果这时点击该图标，Claude Code 会进入登录界面。

![截图：Claude Code 登录界面](https://pica.zhimg.com/v2-1eed33ff5f5f04b76b17b869a0d0568c_1440w.jpg){:standalone}

> 如果你在左侧导航栏里没有看到【Claude Code】图标，点击导航栏最下方的【其他视图】（即三点图标）。
>
> 如果你想使用中文界面，请查找并安装扩展“\[非官方] Claude Code for VS Code 简体中文汉化包”，开发者为 zstings。
{:.tip}

## 获取 API 密钥

经过前两年的百模大战，国产大模型已经极具性价比。下面**以阿里云**的大模型服务平台**百炼为例**，说明如何为 Claude Code 配置第三方大模型。你也可以根据需要选择其他厂商的大模型，比如字节跳动的火山方舟、腾讯云的大模型服务平台 TokenHub 或百度千帆大模型服务平台等。

打开[阿里云百炼主页](https://www.aliyun.com/product/bailian)，注册阿里云账号并登录。

![截图：阿里云百炼主页](https://pic2.zhimg.com/v2-a1f48998f53676b17057b5f280947dd3_1440w.jpg){:standalone}

按照系统提示，开通阿里云百炼服务，并进行实名认证。登录阿里云账号后，如果弹出服务协议，同意该协议后将自动开通阿里云百炼。开通阿里云百炼后，新用户将自动获得一定量的免费额度（每个模型 100 万词元），有效期为 90 天。

![截图：阿里云百炼文档“新人免费额度”页面](https://pic3.zhimg.com/v2-7d0f09da50679abfa64617719a74b914_1440w.jpg){:standalone}

点击主菜单【模型】，进入模型广场。打开 API Key 选项卡，点击【创建 API Key】按钮。

![截图：“创建 API Key”按钮的位置](https://pic3.zhimg.com/v2-34b3b213d1f81e4769a8ae5ba2403b42_1440w.jpg){:standalone}

在创建 API Key 对话框中，填写一段简短的描述，选择【全部】权限，点击【确定】按钮。

![截图：“创建 API Key”对话框](https://pic4.zhimg.com/v2-86196dc00191f43c41f1216a6e67d21d_1440w.jpg){:standalone}

在弹出的【保存你的 API Key】对话框中，会显示你的 API 密钥（即 API Key）。**该密钥只显示一次**，关掉对话框后就无法再打开了。**复制或下载密钥**，并保存到一个安全的地方。

![截图：“保存你的 API Key”对话框](https://pic4.zhimg.com/v2-394bb8b7fe59f4e5565e849235680c19_1440w.jpg){:standalone}

## 配置接入凭证

配置接入凭证，就是通过**设置环境变量**为 Claude Code 配置第三方大模型。你可以使用以下方式中的任何一种。如果你需要接入多个平台的大模型，推荐使用 CC Switch。

### 使用系统对话框

在任务栏搜索“环境变量”，找到名称【编辑系统环境变量】并打开。在系统属性对话框中，点击【环境变量】，打开环境变量对话框。

![截图：“系统属性”对话框和“环境变量”对话框](https://pic1.zhimg.com/v2-c0d1150fddff282c9d9d6fb8267f7fe0_1440w.jpg){:standalone}

在环境变量对话框中，新建三个用户变量，变量名和变量值如下：

|  变量名  |  变量值  |
|:---|:---|
|  ANTHROPIC_AUTH_TOKEN  |  填写你在上一节创建的 API 密钥  |
|  ANTHROPIC_BASE_URL  |  https://dashscope.aliyuncs.com/apps/anthropic  |
|  ANTHROPIC_MODEL  |  qwen3.7-max  |

配置好用户变量之后，点击【确认】。然后，****重启 VS Code****。

如果你想了解更详细的步骤，请参考往期文章《[为 JRE 配置环境变量](https://mp.weixin.qq.com/s/iR5x2RzlTER7MTJGGQrhQA)》。

### 使用用户配置文件

在 VS Code 的左侧导航栏中，点击【管理】>【设置】。

在设置窗口中，搜索“Claude Code: Environment Variables”，然后点击【在 settings.json 中编辑】。

![截图：“设置”窗口](https://pic4.zhimg.com/v2-4d0599058ceecd0dbde998505b7b686b_1440w.jpg){:standalone}

在 `settings.json` 文件中，添加以下内容：

~~~json
"claudeCode.environmentVariables": [
  {
    "name": "ANTHROPIC_API_KEY",
    "value": "填写你在上一节创建的 API 密钥"
  },  {
    "name": "ANTHROPIC_BASE_URL",
    "value": "https://dashscope.aliyuncs.com/apps/anthropic"
  },  {
    "name": "ANTHROPIC_MODEL",
    "value": "qwen3.7-max"
  }
],
~~~

检查无误后，关闭 `settings.json` 文件的编辑窗口即可。

### 使用 CC Switch

CC Switch 是一款开源的 AI 编程工具管理器，可以使用图形化界面统一管理 Claude Code、OpenClaw（俗称龙虾） 等 AI 工具的配置，让你在多个大模型服务平台之间轻松切换。

从 CC Switch 的 GitHub 存储库发布页面下载最新版的安装包。下载完成后，双击安装包，按照屏幕提示安装即可。安装过程和普通程序没什么区别。

![截图：CC Switch 下载页面](https://pica.zhimg.com/v2-45e129affe1416d8dd6579e3bc653194_1440w.jpg){:standalone}

安装完成后，在桌面上双击 CC Switch 图标，启动程序。在 CC Switch 主界面，点击顶部图标栏中的【Claude】图标（右下角标有 `>_` 的那个），再点击最右侧的加号图标，打开【添加新供应商】界面。

![截图：CC Switch 主界面的顶部图标栏](https://pic1.zhimg.com/v2-e701115a254fd481b4ee7581f081d0ee_1440w.jpg){:standalone}

在添加新供应商界面中，选择【Claude 供应商】，预设供应商选择【自定义配置】。

![截图：CC Switch “添加新供应商”界面](https://picx.zhimg.com/v2-68c961eba510f4726c13c992045dae73_1440w.jpg){:standalone}

将屏幕向下滚动到【P】（即供应商）区域，填写字段如下：

|  字段名称  |  填写的内容  |
|:---|:---|
|  供应商名称  |  百炼-按量计费  |
|  API Key  |  填写你在上一节创建的 API 密钥  |
|  请求地址  |  https://dashscope.aliyuncs.com/apps/anthropic  |

![截图：“添加新供应商”界面需要填写的字段](https://pic2.zhimg.com/v2-de4bac5d29c3278e46617280a4127c1f_1440w.jpg){:standalone}

展开【高级选项】，在【模型映射】中填写你要使用的大模型名称。比如模型角色 `Sonnet` 是执行日常任务使用的大模型（即主模型），可以将实际请求模型填写为 `qwen3.7-max`。

![截图：“添加新供应商”界面中的“模型映射”字段](https://pic3.zhimg.com/v2-a5511dd4faabec0ef03d19c382662f96_1440w.jpg){:standalone}

> 模型角色 `Opus` 是执行高度复杂任务的大模型。\\
> 模型角色 `Haiku` 是执行简单或轻量任务的大模型。\\
> 模型角色 `Fable` 是执行前沿测试的大模型，通常是比 `Opus` 更具性价比的替代选择。
{:.tip}

填写完成后，将屏幕滚动到最底部，点击【添加】按钮即可。

## 验证配置

接入国产大模型后，在 VS Code 中再次点击左侧导航栏里的【Claude Code】图标，【Claude Code】主界面就会显示【新建会话】按钮，而不是登录界面了。

点击【新建会话】按钮，打开一个新的会话窗口。在消息框中输入“天龙盖地虎。请回复“宝塔镇河妖”。

如果 Claude Code 回复 “宝塔镇河妖”，就表示接入成功了。如果 Claude Code 的回复异常，请检查一下是不是有误输入之类的。

![截图：Claude Code 会话窗口](https://pic1.zhimg.com/v2-60899e09ec63e79577587b329d9b9010_1440w.jpg){:standalone}

## 学习资料

如果你想接入其他国产大模型，请参考各平台的官方文档照猫画虎即可。一般来说，你需要关注文档中的 Claude Code 配置、模型列表、新用户免费额度等章节。各大平台相关章节的网址，请**参见文末的参考资料**。

目前，阿里云百炼、腾讯云 TokenHub 和百度千帆均为每个模型提供 100 万词元的免费额度，有效期三个月。

如果你想系统性地学习 Claude Code 的工作原理和使用技巧，可以参加 [Anthropic 学院提供的免费在线课程](https://www.anthropic.com/learn)。

![截图：Anthropic 学习中心](https://pica.zhimg.com/v2-0d0f5394873ccadb02daaa3e799de424_1440w.jpg){:standalone}

日常使用时，可以随时查阅[官方文档](https://code.claude.com/docs/en/overview)、[在线教程](https://claude.com/resources/tutorials)和[实用案例](https://claude.com/resources/use-cases)。

## 参考资料 {#refs}
{:.no_toc}

1. [Claude Code Docs: Getting Started](https://code.claude.com/docs/en/overview). \[未知]\[2026-06-20].
2. [阿里云百炼文档：Claude Code](https://bailian.console.aliyun.com/cn-beijing?spm=5176.29597918.0.d_primary.4baf133c6psnOY&tab=doc#/doc/?type=model&url=2949529). \[未知]\[2026-06-20].
3. [阿里云百炼文档：新人免费额度](https://bailian.console.aliyun.com/cn-beijing?spm=5176.29619931.0.0.74cd10d7kZN934&tab=doc#/doc/?type=model&url=2766612). \[未知]\[2026-06-20].
4. [阿里云百炼文档：选择模型](https://bailian.console.aliyun.com/cn-beijing?spm=5176.29619931.0.0.74cd10d7kZN934&tab=doc#/doc/?type=model&url=2840914). \[未知]\[2026-06-20].
5. [腾讯云 Tokenhub 文档：Claude Code](https://cloud.tencent.com/document/product/1823/131903). \[未知]\[2026-06-20].
6. [腾讯云 Tokenhub 文档：新人免费体验包](https://cloud.tencent.com/document/product/1823/130053). \[未知]\[2026-06-20].
7. [腾讯云 Tokenhub 文档：模型列表](https://cloud.tencent.com/document/product/1823/130051). \[未知]\[2026-06-20].
8.  [百度千帆文档：Claude Code](https://cloud.baidu.com/doc/qianfan/s/bmov9jm9f). \[未知]\[2026-06-20].
9.  [百度千帆文档：新用户免费额度](https://cloud.baidu.com/doc/qianfan/s/Imi2rpirg). \[未知]\[2026-06-20].
10. [百度千帆文档：模型列表](https://cloud.baidu.com/doc/qianfan/s/rmh4stp0j). \[未知]\[2026-06-20].
11. [火山方舟文档：接入 Claude Code](https://www.volcengine.com/docs/82379/2160841?lang=zh). \[未知]\[2026-06-20].
12. [火山方舟文档：模型列表](https://www.volcengine.com/docs/82379/1330310?lang=zh). \[未知]\[2026-06-20].
{:.small}
