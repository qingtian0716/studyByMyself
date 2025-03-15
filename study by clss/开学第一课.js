let str = "hello";
console.log(str.toUpperCase()); // HELLO（自动调用String对象方法） 小写变大写
let num = 123.456;
console.log(num.toExponential(2)); // 1.23e+2（自动调用Number对象方法）

// 严格和宽松不等于
console.log('5' == 5);  // true（类型转换）
console.log('5' === 5); // false（类型不同）

//函数定义方式
//特点：无自己的this、arguments、super，继承外层作用域的this。
// 适用场景：回调函数、需要绑定上下文的场景。
function square1(number) { return number * number; } //普通函数
const square2 = function(number) { return number * number; }; //函数表达式
const square3 = (number) => number * number; //箭头函数


//异步编程
function alarm(person, delay) {
    console.log('开始执行');
    return new Promise((resolve, reject) => {
      if (delay < 0) reject(new Error("Delay不能为负"));
      console.log('定时器开始');
      setTimeout(() => {
        console.log('定时器1触发');
        resolve(`Wake up, ${person}!`);
      }, delay);
      console.log('定时器设置完成');
    });
}

console.log('调用前');
alarm("张三", 1000)
    .then(result => {
        console.log('Promise完成:', result);
    })
    .catch(console.error);
console.log('调用后');

// 运行这段代码，你会看到输出顺序是：

// 1. "调用前"
// 2. "开始执行"
// 3. "定时器开始"
// 4. "定时器设置完成"
// 5. "调用后"
// 6. （1秒后）"定时器触发"
// 7. "Promise完成: Wake up, 张三!"
// 这个输出顺序清楚地展示了代码的异步执行特性：即使有等待 1 秒的操作，程序也不会阻塞，
// 而是继续执行后面的代码，等到定时器触发时才执行相应的回调函数。


function alarm22(person, delay) {
    console.log('开始执行');
    return new Promise((resolve, reject) => {
      if (delay < 0) reject(new Error("Delay不能为负"));
      console.log('定时器开始');
      setTimeout(() => {
        console.log('定时器1触发');
        resolve(`Wake up, ${person}!`);
      }, delay);
      console.log('定时器设置完成');
    });
}


async function asyncTask() {    // 声明异步函数
  
    try {
      const result = await alarm22("李四", 2000);  // 等待 Promise 完成
      console.log(result);  // 输出结果
    } catch (error) {      // 错误处理
      console.error(error);
    }
}
asyncTask(); //调用异步函数
const jsonText = `{"name": "John", "age": 30}`; // JSON 字符串
const obj = JSON.parse(jsonText);               // 解析为 JavaScript 对象
console.log(obj.name);                         // 访问对象属性



