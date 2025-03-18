
const fs = require('fs');


//异步读取
fs.readFile("./古诗.txt",(err,data)=>{
    if(err){
        console.log("读取失败")
        return;
    }
    console.log(data.toString())  //如果不用tostring 输出的值为 buffer

})

//同步读取
let data = fs.readFileSync("./古诗.txt")

console.log(data.toString());