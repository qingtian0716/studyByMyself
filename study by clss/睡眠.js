// 同步睡眠
function sleepSync(milliseconds) {
    const start = Date.now();
    while (Date.now() - start < milliseconds) {
        // 空循环，阻塞执行
    }
}

// 异步睡眠
function sleep(milliseconds) {
    return new Promise(resolve => setTimeout(resolve, milliseconds));   //异步睡眠多了一个promise
}

// 同步示例
console.log('同步示例开始');
console.log('准备吃饭');
sleepSync(2000);  // 暂停2秒，模拟吃饭过程
console.log('吃完饭了');
console.log('准备洗碗');
sleepSync(1000);  // 暂停1秒，模拟洗碗过程
console.log('洗完碗了');
console.log('同步示例结束\n');

// 异步示例
async function dailyRoutine() {
    console.log('异步示例开始');
    console.log('准备吃饭');
    await sleep(2000);  // 等待2秒，模拟吃饭过程
    console.log('吃完饭了');
    console.log('准备洗碗');
    await sleep(1000);  // 等待1秒，模拟洗碗过程
    console.log('洗完碗了');
    console.log('异步示例结束');
}

// 演示异步不阻塞的特性
console.log('主程序开始');
dailyRoutine();  // 异步函数开始执行
console.log('主程序继续运行');
console.log('主程序结束');

// 同步示例开始
// 准备吃饭
// （等待2秒）
// 吃完饭了
// 准备洗碗
// （等待1秒）
// 洗完碗了
// 同步示例结束

// 主程序开始
// 异步示例开始
// 准备吃饭
// 主程序继续运行
// 主程序结束
// （等待2秒）
// 吃完饭了
// 准备洗碗
// （等待1秒）
// 洗完碗了
// 异步示例结束