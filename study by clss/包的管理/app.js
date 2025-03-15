/**
 * 应用程序示例文件
 * 
 * 演示如何使用导入的模块功能
 * 展示了模块复用的实际应用
 */

// 导入数学工具模块
const mathUtils = require('./mathUtils');

// 使用模块中的加法函数，计算 5+3
console.log(mathUtils.add(5, 3));      // 8
// 使用模块中的乘法函数，计算 4×2
console.log(mathUtils.multiply(4, 2));  // 8