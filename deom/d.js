// const { console } = require("inspector");

// const jsonText = `{
//     "browsers": {
//       "firefox": {
//         "name": "Firefox",
//         "pref_url": "about:config",
//         "releases": {
//           "1": {
//             "release_date": "2004-11-09",
//             "status": "retired",
//             "engine": "Gecko",
//             "engine_version": "1.7"
//           }
//         }
//       }
//     }
//   }`;
//   //将上述 JSON 字符串转换为 JavaScript 对象
//   console.log(JSON.parse(jsonText));
  

  function myFunc(theObject) { 
    theObject.make = 'Toyota'; 
}

const myCar = {
  //  make: 'Honda',
    model: 'Accord',
    year: 1998


};
console.log(myCar.make);
