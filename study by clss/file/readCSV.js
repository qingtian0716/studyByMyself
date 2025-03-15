const fs = require('fs');
const csv = require('fast-csv');

const data = [];
fs.createReadStream('output.csv')
   .pipe(csv.parse({ headers: false }))
   .on('error', error => console.error(error))
   .on('data', row => {
        data.push(row);
    })
   .on('end', rowCount => {
        console.log(`Parsed ${rowCount} rows`);
        console.log(data);
    });
    