const fs = require('fs');

//查看文件状态  stat

fs.stat("./李白古诗.txt",(err,data) =>{
    if(err){
        console.log("查看失败")
        return;
    }

    console.log(data.isFile()) //判断是否是文件
    console.log(data.isDirectory()) //判断是否是文件夹
    console.log(data)
})