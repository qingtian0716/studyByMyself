/**
 * 主程序文件 (ESM 版本)
 * 
 * 演示如何导入和使用多个模块
 * 展示了模块系统如何解决命名冲突问题
 */

// 导入模块 A (ESM 语法)
import moduleA from './moduleA.mjs';
// 导入模块 B (ESM 语法)
import moduleB from './moduleB.mjs';

// 输出模块 A 中的 name 属性
console.log(moduleA.name);  // 输出: ModuleA
// 输出模块 B 中的 name 属性
console.log(moduleB.name);  // 输出: ModuleB
// 尽管两个模块都定义了同名变量，但由于模块系统的隔离性，它们不会相互干扰