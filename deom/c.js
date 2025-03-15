let str = "hello";
// 调用 String 对象的 toUpperCase 方法
let upperCaseStr = str.toUpperCase();
console.log(upperCaseStr); 
// 输出: HELLO

let num = 123.456;
// 调用 Number 对象的 toExponential 方法
let exponentialNum = num.toExponential(2);
console.log(exponentialNum); 
// 输出: 1.23e+2

// 调用 Number 对象的 toExponential 方法，将数字 num 转换为指数表示法。
// toExponential 方法接受一个参数，指定小数点后的位数。在这里，参数为 2，表示保留两位小数。
// console.log(exponentialNum);

// 输出转换后的指数表示法字符串 exponentialNum，结果为 1.23e+2，即 1.23 × 10^2。