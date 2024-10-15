module.exports = {
  // 每行的最大长度，超过此长度的代码会自动换行
  printWidth: 120, // 设置最大行长度，超过此长度会换行

  // 制表符宽度，表示每个缩进级别使用多少个空格
  tabWidth: 2,

  // 是否使用制表符进行缩进，默认为 false（即使用空格）
  useTabs: false,

  // 语句末尾是否加分号，默认为 true
  semi: true,

  // 是否使用单引号代替双引号，默认为 false
  singleQuote: true,

  // 末尾逗号的使用情况，"none"（无）、"es5"（ES5 兼容）、"all"（所有地方）中选择
  // 对象最后一个元素后加逗号
  trailingComma: 'all',

  // 对象字面量的大括号内是否加空格，默认为 true
  bracketSpacing: true,

  // 在 JSX 中，闭合标签的 `>` 是否与最后一行的内容在同一行，默认为 false
  jsxBracketSameLine: false,

  // 箭头函数参数是否用括号包裹，"avoid"（如果只有一个参数则省略括号）、"always"（始终使用括号）
  arrowParens: 'always',

  // 控制 HTML 文件中空白字符的敏感度，"css"（遵循 CSS 规则）、"strict"（严格模式）、"ignore"（忽略所有空白）
  htmlWhitespaceSensitivity: 'css',

  // 是否为 Vue 文件中的 `<script>` 和 `<style>` 部分使用缩进，默认为 false
  vueIndentScriptAndStyle: true,

  // 是否将每个 HTML 或 JSX 属性放在单独的一行中，默认为 false
  singleAttributePerLine: false,

  // 是否在文件顶部插入 `@prettier` 注释，以便 `prettier` 识别文件，默认为 false
  insertPragma: false,

  // 是否要求文件顶部存在 `@prettier` 注释才能进行格式化，默认为 false
  requirePragma: false,

  // 控制是否对嵌入的语言（如 HTML 中的 JavaScript 和 CSS）进行格式化，"auto"（默认设置，自动格式化）、"off"（禁用）
  embeddedLanguageFormatting: 'auto',

  // 控制对多行文本块（如 Markdown）是否换行，"preserve"（保留原样）、"never"（从不换行）、"always"（总是换行）
  proseWrap: 'always',
};
