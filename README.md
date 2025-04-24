# Markdown 转模板字符串工具

这是一个简单的工具，用于将 Markdown 文本转换为 JavaScript 模板字符串。主要适用于需要在 JavaScript 中使用大段 Markdown 文本的场景。

## 功能特点

- 将 Markdown 文本转换为有效的 JavaScript 模板字符串
- 自动转义反引号 (`) 和模板字符串插值语法 (${})
- 将 HTML 的 `<img>` 标签转换为 Markdown 图片语法 `![alt](src)`
- 支持命令行使用或作为模块导入
- 提供在线转换页面

## 使用方法

### 作为模块使用

```javascript
const markdownToString = require("./mdToString");

// 转换 Markdown 字符串
const markdown = `# 标题
这是一段 \`代码\` 示例
${variable}

<img src="example.jpg" alt="示例图片" />`;

const templateString = markdownToString(markdown);
console.log(templateString);
// 输出: `# 标题\n这是一段 \`代码\` 示例\n\${variable}\n\n![示例图片](example.jpg)`
```

### 命令行使用

```bash
# 基本用法
node mdToString.js input.md output.js

# 如果不指定输出文件，将自动创建 input.md.js 文件
node mdToString.js input.md
```

### 在线使用

访问 [https://kinnong.github.io/mdToString/](https://kinnong.github.io/mdToString/) 使用在线转换工具。

## 命令行参数

- 第一个参数：输入的 Markdown 文件路径
- 第二个参数（可选）：输出的 JavaScript 文件路径

## 图片处理

工具会将 HTML 的 img 标签自动转换为 Markdown 图片语法：

- `<img src="图片路径" alt="描述文本" />` 将被转换为 `![描述文本](图片路径)`
- 如果没有 alt 属性，将被转换为 `![](图片路径)`

## 注意事项

- 输出的 JavaScript 文件是一个模块，通过 `module.exports` 导出了模板字符串
- 无需安装任何依赖，使用 Node.js 原生功能
