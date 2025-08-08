---
title: "GitHub访问不了或者速度太慢的问题，我是这么解决的！"
excerpt: "本文将提供三个方法，依次解决 GitHub 项目下载、GitHub 访问失败和推送到 GitHub 仓库频繁失败的问题。"
header:
  teaser: https://pica.zhimg.com/70/v2-97cace6f1b61c8666b4ab6c7fe357e4a_1440w.avis?source=172ae18b&biz_tag=Post
  overlay_image: https://pica.zhimg.com/70/v2-97cace6f1b61c8666b4ab6c7fe357e4a_1440w.avis?source=172ae18b&biz_tag=Post
  overlay_filter: 0.5
tags: 其他
---

GitHub 是全球最大的代码托管平台，不仅是全球开发者分享和贡献代码的平台，也是很多专业人士分享行业经验和收集学习资源的地方。

但由于某些原因，GitHub 在国内经常打不开、打开速度特别慢或者间歇性连接失败。我在 GitHub 上创建的几个项目，每次推送新的提交时都要花费十几分钟甚至半个多小时的时间不断地尝试，才能在某个机缘巧合的时刻幸运地推送成功。

关于这个问题的解决方案，网上一搜能出来一大堆，但往往鱼龙混杂、优劣难辨。对于那些经验较少的小伙伴儿而言，要么看一眼就被劝退，要么耗费很大的精力一个一个地试错。即使最后搞定了，以后换个电脑、换个网络什么的，说不定还要重来一遍。

本文将提供三个方法，依次解决 GitHub 项目下载、GitHub 访问失败和推送到 GitHub 仓库频繁失败的问题。这是我这些年用过的比较有效的方法，方便我自己随时查询，希望哪天也能为你节省一点时间和精力。 

## GitHub 镜像网站

镜像网站是主网站的精确拷贝，并与主网站保持同步更新。镜像网站有自己的网址，可以为用户提供额外的访问途径。

如果你需要浏览或者下载 GitHub 上的某个特定项目（比如 [Awesome Technical Writing Learning]），但又连不上 GitHub，可以尝试从 GitHub 镜像网站下载。

在 GitHub 无法访问或者速度特别慢时，我经常使用的镜像网站是 [KGitHub](http://kkgithub.com)。只需要输入你想浏览或下载的 GitHub 项目的网址，然后将网址中的 “github” 改为 “kkgithub” 即可。

例如，
如果 GitHub 仓库的网址是：
`https://github.com/wongyah/awesome-technical-writing-learning`
那么，这个仓库在 KGitHub 镜像站的网址就是：
`https://kkgithub.com/wongyah/awesome-technical-writing-learning`

!!! note "注意"
    请不要使用你的 GitHub 帐号在镜像网站登陆，以防泄露隐私信息或重要数据。镜像网站只适合临时浏览和下载 GitHub 项目。

## GitHub 520

如果你要创建 GitHub 项目、向 GitHub 仓库提交问题报告 (Issue) 或拉取请求 (Pull Request, PR) 等，就只能访问 GitHub 网站了。

网上关于 GitHub 访问失败的解决方案，大多将域名解析不稳定或者 DNS 污染作为问题产生的原因，通过在本地的 hosts 文件中直接配置 GitHub 网站的 IP 地址来加快域名解析过程或者防止域名解析失败。

> Hosts 文件是一个没有扩展名的系统文件，用来定义域名和 IP 地址（也叫主机名）之间的映射关系。Hosts 文件是一个文本文件，可以用记事本编辑，但记事本必须“以管理员身份运行”。

以前，我都是手动查询 GitHub 的 IP 地址，再将 IP 地址写入 hosts 文件。配置过程倒是不复杂，但很繁琐。关键是，每次都要再搜索一遍教程，记是真记不住。

后来，我发现了一个高赞的开源项目叫 **GitHub520**，专门提供 GitHub 的 IP 地址，而且定期更新。你只需要按照项目介绍 (Readme) 中的说明将 IP 地址清单复制到 hosts 文件中就可以了。

![GitHub520仓库的页面截图](https://pica.zhimg.com/v2-84b5e063fe361088f0dd6cb8bbbd6f3c_1440w.jpg "GitHub520的仓库"){:standalone}

GitHub520 在 GitHub 和 Gitee （码云）上都有仓库。Gitee 是国内的代码托管平台，访问速度比较快。GitHub520 的项目介绍 (Readme) 中有详细的使用说明，我在这里就不鹦鹉学舌了。

- [GitHub520 的 GitHub 仓库](https://github.com/521xueweihan/GitHub520)
- [GitHub520 的 Gitee 仓库](https://gitee.com/klmahuaw/GitHub520)

## Gitee 仓库镜像管理

即使在 Hosts 文件中添加了 GitHub 的 IP 地址清单，可以访问 GitHub 了，在一些不可预知的时间段也会出现访问失败的情况。如果向 GitHub 仓库推送新的提交时遇到这种情况，那就很让人抓狂了！

前些天，我在改版个人网站时用到了 GitHub Actions 工作流。利用工作流，我可以将默认分支上的一个或多个特定文件自动复制到另一个分支上，还可以将网站同时、自动部署到 Github 主页和 Vercel。

于是我就想，能不能找到一种方法实现这种功能：如果将我的 GitHub 仓库导入 Gitee（或国内其他的代码托管平台），我每次向 Gitee 仓库推送了新的提交，这些新的提交可以被自动同步到 GitHub 仓库?

一番搜索之后，还真让我找着了：Gitee 的**仓库镜像管理**功能就是专门用来同步 GitHub 仓库的，可以将 GitHub 仓库同步到 Gitee 仓库，也可以将 Gitee 仓库同步到 GitHub 仓库。

![Gitee 仓库镜像管理功能的官方文档页面截图](https://pic3.zhimg.com/v2-4626b8424bfe104a5ff741911ea0cf38_1440w.jpg "Gitee 的仓库镜像管理功能"){:standalone}

[Gitee 官方文档]中有配置仓库镜像管理的具体方法，我就不复述了。只提醒一点，配置仓库镜像管理需要用到你的 **GitHub 私人令牌** (Personal Access Token)，请提前准备好。

![GitHub私人令牌生成页面的截图](https://pic1.zhimg.com/v2-c288682b21e42c7667741b464327bd44_1440w.jpg "GitHub私人令牌"){:standalone}

配置好仓库镜像管理后，你还需要将本地仓库的远程仓库修改为对应的 Gitee 仓库。要查看和修改目前的远程仓库，使用下面的 Git 命令：

~~~console
# 查看远程仓库
git remote get-url origin
https://github.com/user-name/repo-name.git

# 修改远程仓库
git remote set-url origin https://gitee.com/user-name/repo-name.git
~~~

当然，你也可以使用一些 Git 可视化管理工具来修改远程仓库。比如 VS Code 自带的 Git 管理工具就可以【添加远程仓库】和【删除远程仓库】。

现在，我已经将我的大部分 GitHub 仓库都导入到 Gitee，并设置了仓库镜像管理。我用的是 VS Code，只要在其自带的 Git 管理工具中点击【同步】，就可以通过 Gitee “中转”快速推送到 GitHub 了！

说实话，真爽！

<!-- links -->
[Awesome Technical Writing Learning]: https://github.com/wongyah/awesome-technical-writing-learning

[Gitee 官方文档]: https://gitee.com/help/articles/4336
