/**
 * 模块 A
 * 
 * 演示模块作用域和命名空间隔离
 * 展示了如何避免不同模块间的命名冲突
 */

// 在模块 A 中定义名为 'name' 的变量
const name = 'ModuleA';
// 导出包含 name 属性的对象
module.exports = { name };