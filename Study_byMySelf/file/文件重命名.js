const { Console } = require('console');
const fs = require('fs');

const files = fs.readdirSync("./");
console.log(files);

//遍历数组

files.forEach(item =>{
   //做判断
    // 跳过当前脚本文件
    if(item === '文件重命名.js')
       return;
   //拆分文件名
   let data = item.split("_");
   // console.log(data);
   let[num,name] = data;
   console.log(num,name);
   if (Number(num) < 10){
       num = "0" + num;
   }
   //拼接新的文件名
   let newName = num + "_" + name;
   // console.log(newName);
   fs.renameSync(`./${item}`,`./${newName}`);
})