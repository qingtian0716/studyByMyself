const process = require('process');

const fs = require('fs');
const { resolveSoa } = require('dns');

// readfile  这种操作要占满操作文件大小的内存空间
// let data = fs.readFileSync("./古诗.txt");
// //文件写入
// fs.writeFileSync("./古诗2.txt",data);

// console.log(process.memoryUsage()); // rss 整个占用大小  =》31490048/1024

//流式操作
// 理想状态下只要64kb空间，因为流式读取每只取64kb
//实际操作，读取比写入更快，实际占用会更高


let rs = fs.createReadStream("./古诗.txt");

// //创建写入流对象
const ws = fs.createWriteStream("./古诗3.txt");

// //监听读取流的data事件
rs.on("data",(chunk)=>{
    ws.write(chunk);
})
console.log(process.memoryUsage());


//------------------
 rs.pipe(ws);