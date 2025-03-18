/**
 * 用户服务类
 * 
 * 提供用户管理相关的功能，包括添加用户和获取用户列表
 * 采用面向对象的方式封装用户操作，便于维护和扩展
 */
class UserService {
    /**
     * 构造函数
     * 初始化用户数组，作为内存中的用户存储
     */
    constructor() {
        this.users = [];
    }

    /**
     * 添加用户方法
     * @param {Object} user - 用户对象，包含用户信息
     * 将新用户添加到用户数组中
     */
    addUser(user) {
        this.users.push(user);
    }

    /**
     * 获取所有用户方法
     * @returns {Array} 返回所有用户的数组
     */
    getUsers() {
        return this.users;
    }
}

// 导出 UserService 类，使其他模块可以使用
module.exports = UserService;