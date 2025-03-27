const { json } = require("express");

const jsonData = [
    { "name": "Alice", "age": 55, "city": "New York" },
    { "name": "Bob", "age": 30, "city": "Los Angeles" },
    { "name": "Charlie", "age": 35, "city": "Chicago" }
  ];

function addUser(user){
    jsonData.push(user);

}
function deleteUser(name){
    jsonData.forEach((user)=>{
       user={};
    })
}
function query(name){
   if(name === null || name === undefined){
       return jsonData;   
   } else {
      return jsonData.filter(user => user.name === name);
   }
}


  module.exports ={
    add:addUser,deleteUser,query
  }