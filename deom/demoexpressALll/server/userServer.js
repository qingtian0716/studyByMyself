const userModel = require("../model/user")
/**
 * 查询用户数据
 * @returns 
 */
function query(name){
   let users =  userModel.query();
//    users = users.map((user)=>{
//     if(user.age>=30){

//         return user;
//     }else{
//         return "";
//     }
//    })
  return users;
}


module.exports={
    query
}