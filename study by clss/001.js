function square(number) {
    console.log('调用 square 函数，参数:', number);
    return number * number;
}
  
console.log(square(4));

console.log('----------------------------------------------------------------------')
  
const square1 = function (number) {
    console.log('调用 square1 函数，参数:', number);
    return number * number;
};
  
console.log(square1(4));

console.log('---------------------------------------------------------------------')

const a = ["Hydrogen", "Helium", "Lithium"];
console.log('原始数组:', a);

const a2 = a.map(function (s) {
    console.log('正在处理元素:', s);
    return s.length;
});
    
console.log('map结果 a2:', a2);
    
const a3 = a.map((s) => {
    console.log('箭头函数处理元素:', s);
    return s.length;
});
    
console.log('map结果 a3:', a3);
    
    console.log('-----------------------------------------------------------------')
// // 立即调用的函数表达式 
// (function () {
//     // Do something
// })();

// const someValue = 42; // 确保 someValue 已定义
// const value = (function () {
//     // Do something
//     return someValue;
// })();

// console.log(value); // 42
  
// 修改 IIFE 的写法
;(function() {
    console.log("这是一个立即调用的函数表达式！");
})();

;(() => {
    console.log("这是一个更简单的 IIFE！");
})();