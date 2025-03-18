# CommonJS 模块和 ECMAScript 模块的比较
Node.js 支持两种主要的模块系统：CommonJS (CJS) 和 ECMAScript 模块 (ESM)。您当前的代码使用的是 CommonJS 模块系统。下面我将详细介绍这两种模块系统的区别。

## CommonJS 模块 (您当前使用的)
CommonJS 是 Node.js 最初采用的模块系统，特点如下：

1. 导入导出语法 ：
   
   - 使用 require() 导入模块
   - 使用 module.exports 或 exports 导出模块
2. 动态加载 ：
   
   - 模块在运行时加载，可以在条件语句中使用
3. 文件标识 ：
   
   - 默认使用 .js 扩展名
   - 在 package.json 中设置 "type": "commonjs" 或不设置
## ECMAScript 模块 (ESM)
ESM 是 JavaScript 官方的标准模块系统，在较新版本的 Node.js 中得到支持：

1. 导入导出语法 ：
   
   - 使用 import 导入模块
   - 使用 export 导出模块
2. 静态加载 ：
   
   - 模块在解析阶段就确定依赖关系，有利于静态分析和优化
3. 文件标识 ：
   
   - 使用 .mjs 扩展名，或
   - 在 package.json 中设置 "type": "module"

## 两种模块系统的主要区别
1. 语法差异 ：
   
   - CJS: require() 和 module.exports
   - ESM: import 和 export
2. 加载机制 ：
   
   - CJS: 运行时动态加载
   - ESM: 静态加载，编译时确定模块关系
3. 顶级 this ：
   
   - CJS: 指向 module.exports
   - ESM: 指向 undefined
4. 模块缓存 ：
   
   - CJS: 基于文件路径缓存
   - ESM: 基于模块标识符和 URL 缓存
5. 循环依赖处理 ：
   
   - CJS: 返回未完成的导出对象
   - ESM: 通过链接绑定处理
6. 文件扩展名 ：
   
   - CJS: 通常为 .js
   - ESM: 通常为 .mjs 或在 package.json 中设置 "type": "module"