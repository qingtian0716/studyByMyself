/**
 * 数学工具模块
 * 
 * 提供基本的数学运算功能
 * 演示了如何创建和导出实用工具函数
 */

// 导出包含多个数学函数的对象
module.exports = {
    /**
     * 加法函数
     * @param {number} a - 第一个加数
     * @param {number} b - 第二个加数
     * @returns {number} 两数之和
     */
    add: (a, b) => a + b,
    
    /**
     * 减法函数
     * @param {number} a - 被减数
     * @param {number} b - 减数
     * @returns {number} 两数之差
     */
    subtract: (a, b) => a - b,
    
    /**
     * 乘法函数
     * @param {number} a - 第一个因数
     * @param {number} b - 第二个因数
     * @returns {number} 两数之积
     */
    multiply: (a, b) => a * b,
    
    /**
     * 除法函数
     * @param {number} a - 被除数
     * @param {number} b - 除数
     * @returns {number} 两数之商
     */
    divide: (a, b) => a / b
};