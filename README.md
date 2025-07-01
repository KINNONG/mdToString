# MarkdownJS 🚀

<div align="center">

![MarkdownJS Logo](https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&h=200&fit=crop)

**专业的 Markdown 转 JavaScript 模板字符串工具**

[![GitHub Stars](https://img.shields.io/github/stars/kinnong/mdToString?style=flat-square)](https://github.com/kinnong/mdToString)
[![License](https://img.shields.io/github/license/kinnong/mdToString?style=flat-square)](https://github.com/kinnong/mdToString/blob/main/LICENSE)
[![Issues](https://img.shields.io/github/issues/kinnong/mdToString?style=flat-square)](https://github.com/kinnong/mdToString/issues)

[🌐 在线体验](https://kinnong.github.io/mdToString/) | [📖 文档](https://github.com/kinnong/mdToString/wiki) | [🐛 报告问题](https://github.com/kinnong/mdToString/issues)

</div>

## ✨ 功能特性

### 🎯 核心功能
- **🚀 极速转换** - 基于优化算法的实时转换引擎
- **🛡️ 安全可靠** - 完全在浏览器端处理，保护数据隐私
- **📦 批量处理** - 支持同时处理多个 Markdown 文件
- **🎨 智能转义** - 自动处理反引号、模板字符串语法和 HTML 标签
- **📱 跨平台兼容** - 响应式设计，完美支持各种设备
- **💾 多种导出** - 直接复制、单文件下载、批量打包下载

### 🔧 技术特性
- **零依赖** - 使用原生 JavaScript，无需安装任何依赖
- **命令行支持** - 提供 CLI 工具用于自动化工作流
- **模块化设计** - 可作为 Node.js 模块导入使用
- **现代化 UI** - 采用 Apple 风格的设计语言

## 🚀 快速开始

### 在线使用
访问 [MarkdownJS 在线工具](https://kinnong.github.io/mdToString/) 立即开始使用。

### 命令行使用

```bash
# 基本用法
node mdToString.js input.md output.js

# 自动生成输出文件名
node mdToString.js input.md
```

### 作为模块使用

```javascript
const markdownToString = require("./mdToString");

const markdown = `# 标题
这是一段包含 \`代码\` 的示例文本
${variable}

<img src="example.jpg" alt="示例图片" />`;

const templateString = markdownToString(markdown);
console.log(templateString);
// 输出: `# 标题\n这是一段包含 \`代码\` 的示例文本\n\${variable}\n\n![示例图片](example.jpg)`
```

## 🎯 使用场景

### 📚 文档集成
将 README、API 文档等 Markdown 文件直接嵌入到 JavaScript 应用中：

```javascript
const helpText = `# 用户手册

欢迎使用我们的产品，这里是详细的使用指南...

## 快速开始
- 步骤一：注册账户
- 步骤二：配置环境`;
```

### 📧 邮件模板
快速将 Markdown 格式的邮件模板转换为 JavaScript 字符串：

```javascript
const emailTemplate = `Dear **{{name}}**,

Thank you for subscribing to our newsletter!

Best regards,
The Team`;
```

### 🎨 CMS 内容管理
将 CMS 中的 Markdown 内容转换为前端可用的模板字符串：

```javascript
const blogPost = `## 今日推荐

这是一篇关于 *技术创新* 的精彩文章...

### 要点总结
1. 创新思维的重要性
2. 技术发展趋势`;
```

### 🤖 聊天机器人
为聊天机器人准备格式化的响应文本：

```javascript
const botResponse = `您好！我可以帮助您：

- 📋 查询订单信息
- 💬 技术支持咨询  
- 📞 联系客服代表

请选择您需要的服务类型。`;
```

## 🛠️ 安装与配置

### Node.js 环境
确保您的系统已安装 Node.js (版本 >= 12.0.0)

```bash
# 克隆仓库
git clone https://github.com/kinnong/mdToString.git

# 进入项目目录
cd mdToString

# 运行工具
node mdToString.js your-file.md
```

### 集成到项目中

```javascript
// ES6 模块
import markdownToString from './mdToString.js';

// CommonJS
const markdownToString = require('./mdToString.js');

// 在项目中使用
const convertedText = markdownToString(yourMarkdownContent);
```

## 📝 转换规则

### 基本转换
| 输入 | 输出 |
|------|------|
| 反引号 `` ` `` | `\`` |
| 模板语法 `${var}` | `\${var}` |
| HTML 图片 `<img src="url" alt="text" />` | `![text](url)` |

### 图片处理示例

```markdown
<!-- 输入 -->
<img src="https://example.com/image.jpg" alt="示例图片" />
<img src="local/path.png" alt="" />
<img src="another.gif" />

<!-- 输出 -->
![示例图片](https://example.com/image.jpg)
![](local/path.png)
![](another.gif)
```

## 🎨 界面预览

### 现代化落地页
- 🎯 专业的产品介绍
- ⚡ 实时在线演示
- 📱 响应式设计
- 🌈 Apple 风格的 UI

### 功能丰富的工具页
- 📝 三种输入方式（文本、单文件、批量）
- 🔄 实时转换预览
- 📋 一键复制结果
- 💾 多种下载选项

## 🤝 贡献指南

我们欢迎各种形式的贡献！

### 报告问题
在 [GitHub Issues](https://github.com/kinnong/mdToString/issues) 中报告 bug 或建议新功能。

### 提交代码
1. Fork 此仓库
2. 创建您的功能分支 (`git checkout -b feature/AmazingFeature`)
3. 提交您的更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 开启一个 Pull Request

### 开发环境设置

```bash
# 克隆仓库
git clone https://github.com/kinnong/mdToString.git
cd mdToString

# 启动本地服务器进行开发
python -m http.server 8000
# 或
npx serve .
```

## 📄 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情。

## 🙏 致谢

- 感谢所有为此项目做出贡献的开发者
- 灵感来源于日常开发中的实际需求
- UI 设计参考了 Apple 的设计语言

## 📧 联系我们

- **GitHub**: [kinnong](https://github.com/kinnong)
- **Issues**: [GitHub Issues](https://github.com/kinnong/mdToString/issues)
- **演示站点**: [https://kinnong.github.io/mdToString/](https://kinnong.github.io/mdToString/)

---

<div align="center">

**如果这个项目对您有帮助，请给我们一个 ⭐ Star！**

Made with ❤️ by the MarkdownJS Team

</div>
