

const fs = require('fs');

// 追加写入  异步
fs.appendFile("./座右铭.txt","\n晴天",err =>{
    if(err){
        console.log("追加写入失败")
        return;
    }
    console.log("追加写入成功")
});

// 追加写入  同步
fs.appendFileSync("./座右铭.txt","\n同步写入")

//--------------------------------
// writeFile实现追加写入
fs.writeFile("./座右铭.txt","\nlovelove",{flag:"a"},err =>{
    if(err){
        console.log("追加写入失败")
        return;
    }
    console.log("追加写入成功")
})
