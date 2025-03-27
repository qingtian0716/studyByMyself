//index.js

const request = require('request');
const path = require('path');
const config = require('./config');
const analyze = require('./analyze');

function start(){
    request(config.url, function (err, res, body) {
        console.log("start")
        if (!err&& res) {
            console.log("start");
            analyze.findImg(body);
        }
    
    })
}


function downLoad(imgUrl,i){
    let ext =imgUrl.split(".").pop();
    request(imgUrl).pipe(fs.createWriteStream(path.join(config.imgdir,i+"."+ext),{
        "encoding":"utf8"
    }))
    console.log("i")
}

start();