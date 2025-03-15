

const fs = require('fs');

// 创建读取流对象

const rs = fs.createReadStream("古诗.txt");
// 监听data事件  当流中有数据可读时 会触发data事件
 rs.on("data", chunk =>{
     console.log(chunk.length)  //一块字节
 })

 rs.on("end",()=>{  //匿名函数
     console.log("读取完成")
 })