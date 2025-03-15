/**
 * 模块 B
 * 
 * 演示模块作用域和命名空间隔离
 * 与 moduleA.js 一起展示了如何避免不同模块间的命名冲突
 */

// 在模块 B 中也定义名为 'name' 的变量，但值不同
const name = 'ModuleB';
// 导出包含 name 属性的对象
module.exports = { name };