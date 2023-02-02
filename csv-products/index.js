const csv = require('csv-parser');
const fs = require('fs');
require('./console');
const build = require('./build');

// ==============================================

console.magenta('building...');

// ==============================================

const results = [];
fs.createReadStream('data.csv')
  .pipe(csv())
  .on('data', (data) => results.push(data))
  .on('end', () => {
    console.log(results[0]);

    const objs = results;
    const obj = results[0];
    const keys = Object.keys(obj);
    const key = keys[0];


    const cols = keys;


    console.log('keys: ', keys);
    console.log('key: ', key);

    const value = obj[key];
    console.log('value: ', value);

    build(results);
  });

// ==============================================
