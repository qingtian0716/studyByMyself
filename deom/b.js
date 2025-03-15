// 检测字符串类型
let str = "Hello";
console.log(typeof str); 
// 输出: "string"

// 检测数字类型
let num = 42;
console.log(typeof num); 
// 输出: "number"

// 检测布尔类型
let bool = true;
console.log(typeof bool); 
// 输出: "boolean"


// 检测未定义类型
let undef;
console.log(typeof undef); 
// 输出: "undefined"

// 尝试检测null类型，会得到 "object"
let myNull = null;
console.log(typeof myNull); 
// 输出: "object"

// 正确检测null值
if (myNull === null) {  
    console.log('这是null值');
}


console.log('5jj' === 5); //比较时不进行类型转换，只有类型和值都相等时才返回 true
//输出：false 
console.log('5' == 5);   //比较时会进行类型转换，只要转换后的值相等就返回 true
//输出：true
