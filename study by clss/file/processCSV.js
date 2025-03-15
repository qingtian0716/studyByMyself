const fs = require('fs');
const path = require('path');
const { parse, format } = require('fast-csv');

// 存储解析后的数据
const rows = [];

// 创建读取流并处理数据
fs.createReadStream(path.resolve(__dirname, 'output.csv'))
  .pipe(parse({ headers: true }))
  .on('error', error => console.error('解析CSV时出错:', error))
  .on('data', row => rows.push(row))
  .on('end', () => {
    console.log('CSV文件解析完成');
    
    // 处理数据：将年龄增加5，城市名称转为大写
    const processedData = rows.map(row => {
      return {
        Name: row.Name,
        Age: parseInt(row.Age) + 5,
        City: row.City.toUpperCase(),
        
      };
    });
    
    console.log('处理后的数据:');
    console.log(processedData);
    
    // 将处理后的数据写入新文件
    const ws = fs.createWriteStream(path.resolve(__dirname, 'processed_output.csv'));
    
    // 创建CSV格式化流
    const csvStream = format({ headers: true });
    csvStream.pipe(ws)
      .on('finish', () => console.log('处理后的CSV文件已成功写入'))
      .on('error', err => console.error('写入处理后的CSV文件时出错:', err));
    
    // 写入数据
    processedData.forEach(row => csvStream.write(row));
    csvStream.end();
  });