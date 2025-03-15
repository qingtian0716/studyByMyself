//新建文件，写入内容
//导入fs模块
const fs = require('fs');
//异步写入
fs.writeFile("./座右铭.txt","三人行，必有我师", err => {
    //如果写入失败 err 的值就是错误对象
    //如果写入成功 err 的值就是 null
   if(err){
    console.log("文件写入失败")
   return
   }
   console.log("文件写入成功")
})

console.log(1+1)
//文件已经存在将会覆盖文件


//----------------------------------------------

//同步写入
fs.writeFileSync("./data.text","test")  //同步写入没有回调函数
