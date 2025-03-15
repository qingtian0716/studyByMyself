// 创建  读取  删除

const fs = require('fs');
//创建文件夹
fs.mkdir("../2", err =>{
    if (err){
        console.log("创建失败")
        return;
    }
    console.log("创建成功")
});

// 递归 创建
fs.mkdir("../3/4/5",{recursive: true}, err =>{
    if (err){
        console.log("创建失败")
        return;
    }
    console.log("创建成功")
});



//读取文件夹

fs.readdir("./", (err, data) =>{
    if(err){
        console.log("读取失败")
        return;
    }
    console.log(data);
})


//删除文件夹
//只能删除空文件夹
fs.rmdir("../2", err =>{
    if(err){
        console.log("删除失败")
        return;
    }
    console.log("删除成功")
})


//递归删除
// fs.rmdir("../3", {recursive:true},err =>{  //不推荐使用，nodejs 可能会弃用这个功能
//     if(err){
//         console.log("删除失败")
//         return;
//     }
//     console.log("删除成功")
// })

fs.rm("../3", {recursive:true},err =>{   // 用rm 删除
    if(err){
        console.log("删除失败")
        return;
    }
    console.log("删除成功")
})