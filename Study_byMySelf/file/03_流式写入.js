

const fs = require('fs');

const ws = fs.createWriteStream("./古诗.txt");
ws.write("窗前明月光");
ws.write("\n疑是地上霜");
ws.write("\n举头望明月");
ws.write("\n低头思故乡");

// 关闭通道  不关也可以 ，码德i问题
ws.close();