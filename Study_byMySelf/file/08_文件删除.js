const fs = require('fs');

// 调用unlink 方法   unlinksync
fs.unlink("./古诗3.txt",(err)=>{
    if(err){
        console.log("文件删除失败")
        return;
    }
    console.log("文件删除成功")
})

//rm 方法   rmsync 同步删除
fs.rm("./古诗2.txt",(err)=>{
    if(err){
        console.log("删除失败")
    }
    console.log("删除成功")
})

