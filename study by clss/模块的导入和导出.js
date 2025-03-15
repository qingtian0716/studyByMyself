// 模块导出（Module Exports）是 Node.js 中一个非常重要的概念，它有以下几个主要用途：

// ### 1. 代码复用
// 通过模块导出，我们可以将常用的功能封装到独立的文件中，然后在其他文件中重复使用。

// 例如：
// ```javascript:d:\code\nodejs\mathUtils.js
// // 数学工具模块
// module.exports = {
//     add: (a, b) => a + b,
//     subtract: (a, b) => a - b,
//     multiply: (a, b) => a * b,
//     divide: (a, b) => a / b
// };
// ```

// 在其他文件中使用：
// ```javascript:d:\code\nodejs\app.js
// const mathUtils = require('./mathUtils');

// console.log(mathUtils.add(5, 3));      // 8
// console.log(mathUtils.multiply(4, 2));  // 8
// ```

// ### 2. 代码组织
// 模块导出帮助我们更好地组织代码，将相关的功能组织在一起，提高代码的可维护性。

// 例如：
// ```javascript:d:\code\nodejs\userService.js
// class UserService {
//     constructor() {
//         this.users = [];
//     }

//     addUser(user) {
//         this.users.push(user);
//     }

//     getUsers() {
//         return this.users;
//     }
// }

// module.exports = UserService;
// ```

// ### 3. 封装和隐藏实现细节
// 模块系统允许我们只导出需要公开的接口，将内部实现细节隐藏起来。

// 例如：
// ```javascript:d:\code\nodejs\database.js
// const privatePassword = 'secret123';  // 私有变量，外部无法访问

// function connect() {
//     // 内部实现细节
// }

// // 只导出需要公开的接口
// module.exports = {
//     query: function(sql) {
//         connect();
//         // 执行查询
//     },
//     insert: function(data) {
//         connect();
//         // 执行插入
//     }
// };
// ```

// ### 4. 避免命名冲突
// 每个模块都有自己的作用域，可以避免不同模块之间的变量名冲突。

// 例如：
// ```javascript:d:\code\nodejs\moduleA.js
// const name = 'ModuleA';
// module.exports = { name };
// ```

// ```javascript:d:\code\nodejs\moduleB.js
// const name = 'ModuleB';
// module.exports = { name };
// ```

// ```javascript:d:\code\nodejs\main.js
// const moduleA = require('./moduleA');
// const moduleB = require('./moduleB');

// console.log(moduleA.name);  // 输出: ModuleA
// console.log(moduleB.name);  // 输出: ModuleB
// ```

// ### 5. 依赖管理
// 模块系统使得依赖关系更加清晰，便于管理项目依赖。

// 例如：
// ```javascript:d:\code\nodejs\api.js
// const express = require('express');
// const UserService = require('./userService');
// const DatabaseService = require('./database');

// const app = express();
// const userService = new UserService();
// // ... 其他代码
// ```

// 通过模块导出，我们可以：
// 1. 提高代码的可重用性
// 2. 更好地组织和维护代码
// 3. 实现信息隐藏
// 4. 避免全局命名空间污染
// 5. 清晰地管理项目依赖

// 这些特性使得我们能够构建更加模块化、可维护的应用程序。