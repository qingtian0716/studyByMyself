//analyze.js

const cheerio = require('cheerio');
const config = require('./config');

function findImg(dom,callback){
    let $ = cheerio.load(dom);
   $("img").each(function(i,elem){
    let imgSrc = config.url+$(this).attr("src");
    callback(imgSrc,i);
   });
}

module.exports.findImg = findImg;