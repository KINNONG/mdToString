/**
 * 将Markdown文本转换为JavaScript模板字符串
 * 主要处理：
 * 1. 转义所有反引号(`)为 \`
 * 2. 转义所有${为 \${
 * 3. 将处理后的文本包装在反引号中
 *
 * @param {string} markdown - Markdown格式的文本
 * @returns {string} - 转换后的JavaScript模板字符串
 */
function markdownToString(markdown) {
  // 检查输入
  if (!markdown || typeof markdown !== "string") {
    return "``";
  }

  // 转义反引号和模板字符串插值语法
  let result = markdown
    .replace(/`/g, "\\`") // 转义反引号
    .replace(/\${/g, "\\${"); // 转义模板字符串变量插值语法

  // 生成模板字符串
  return `\`${result}\``;
}

// 导出函数，使其可以被其他模块引用
module.exports = markdownToString;

// 如果直接运行此脚本，提供简单的CLI功能
if (require.main === module) {
  const fs = require("fs");

  // 获取命令行参数
  const args = process.argv.slice(2);

  // 如果提供了文件路径作为参数
  if (args.length > 0) {
    try {
      const filePath = args[0];
      const outputPath = args[1] || `${filePath}.js`;

      // 读取文件内容
      const content = fs.readFileSync(filePath, "utf8");

      // 转换内容
      const result = markdownToString(content);

      // 写入结果到新文件
      fs.writeFileSync(outputPath, `module.exports = ${result};`);

      console.log(`转换成功！结果已保存至: ${outputPath}`);
    } catch (error) {
      console.error("处理文件时出错:", error.message);
    }
  } else {
    console.log("用法: node mdToString.js <markdown文件路径> [输出文件路径]");
  }
}
