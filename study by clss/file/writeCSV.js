const fs = require('fs');
const csv = require('fast-csv');

const data = [
   ['Name', 'Age', 'City'],
   ['Alice', 30, 'New York'],
   ['Bob', 25, 'Los Angeles'],
   ['Charlie', 35, 'Chicago']
];

const ws = fs.createWriteStream('output.csv');
csv.write(data, { headers: false })
   .on('finish', () => {
        console.log('Data written to output.csv');
    })
   .pipe(ws);