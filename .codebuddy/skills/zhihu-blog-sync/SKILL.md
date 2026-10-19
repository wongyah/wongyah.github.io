---
name: zhihu-blog-sync
description: 将博客文章中的微信图片替换为知乎图片，并按照知乎文章修改链接。当用户提到“同步知乎文章”“同步博文”“同步博客文章”时调用。
---

# 同步博客文章

## 输入

用户会手动把知乎文章页面 ${zhihu_article} 保存为 HTML 并格式化，使每个 `<figure>` 单独占一行。

- ${zhihu_article}，格式化后的 HTML 文件
- ${blog_article}，对应的博客文件（_posts 目录下的 Markdown 文件）。其中每张图片均已包含用户**手写的替换文本（alt）**，替换时须原样保留，AI 不擅自生成或覆盖。

## 执行步骤

### 1. 提取头图并填入 front matter

- 在 ${zhihu_article} 中搜索 `og:image` meta 标签，取 `content` 属性值。
- 去掉 `?source=...` 追踪参数，保留干净的 URL。
- 填入 ${blog_article} front matter（若为空）：

  ```yaml
  header: 
    teaser: <头图URL>
    overlay_image: <头图URL>
    overlay_filter: 0.5
  ```

### 2. 替换正文图片

- 在 ${zhihu_article} 正文中搜索 `<figure` 开头的行，提取每个 `<img src="...">` 中的 URL，取 `_1440w.jpg` 高清版本。
- 按文档顺序列出全部图片的 URL。
- **只替换微信图片的 URL 片段**（从 `https://mmbiz.qpic.cn` 到该行 `)` 或 `}` 之前的部分），**不要整行替换**，以完整保留用户手写的 `![替换文本](...){:standalone}` 结构。AI 不擅自生成或覆盖替换文本。
- 保留 ${blog_article} 图片原有的 `{:standalone}` 等 kramdown 属性。
- 每张图的对应关系需按上下文语义核对（图片前后文字内容、以及已有的替换文本），确保无错位。

### 3. 补齐正文链接

- 对比 ${zhihu_article} 中的 `<a href>` 与 ${blog_article} 中的链接。
- 如果 ${blog_article} 中有纯文本 URL（尖括号自动链接或裸 URL），按 ${zhihu_article} 锚文本改为 `[锚文本](URL)` 格式。
- ${zhihu_article} `link.zhihu.com/?target=` 包装链接取 target 参数中的原始 URL。

### 4. 验证

- 搜索 ${blog_article} 中 `mmbiz.qpic.cn`，将残留的微信图片 URL 和图片简介告知用户。
- 检查所有 ${blog_article} 链接格式是否正确。
- 向用户报告替换结果清单。

## 特殊情况

- 如果图片或链接数量不一致：列出未匹配项，由用户确认处理。
- 如果 ${zhihu_article} 未格式化（单行超长）：告诉用户“请手动格式化 HTML 文件”。
