const fs = require('fs');

//rename 重命名
// 三个参数   文件旧路径      新路径或名字   回调函数
fs.rename("./古诗.txt","./李白古诗.txt",err =>{
 if(err){
     console.log("重命名失败")
     return;
 }  
 console.log("重命名成功")
})