const userModel = require("../model/user");
const {add,query} = require("../model/user");

const users = userModel.query();
console.log(users);
const users2 = query();
console.log(users2);

