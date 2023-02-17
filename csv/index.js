const csv = require('csv-parser');
const fs = require('fs');
const path = require("path");
require('./console');
const build = require('./build');

// ==============================================

const read_path = path.join(__dirname);

console.magenta('building...');


// ==============================================

const results = [];
fs.createReadStream(`${read_path}/data.csv`)
  .pipe(csv())
  .on('data', (data) => results.push(data))
  .on('end', () => {

    const first_row = results[0];
    const cols = Object.keys(first_row);

    // 0:   title
    // 1:   sub_title
    // 2:   body
    // 3:   category
    // 4:   gender
    // 5:   tag
    // 6:   price
    // 7:   price_compare
    // 8:   qty
    // 9:   size
    // 10:  color
    // 11:  img

    const title = cols[0]; 

    const products = [];
    let count = -1;
    results.forEach((result, idx) => {

      if (result[title]) { // New product
        count++;

        products[count] = { product: {}, variants: [] };

        products[count]['product'] = {
          title:         result[cols[0]],
          sub_title:     result[cols[1]],
          body:          result[cols[2]],
          category:      result[cols[3]],
          gender:        result[cols[4]],
          tag:           result[cols[5]],
          price:         result[cols[6]],
          price_compare: result[cols[7]],
        };

        products[count]['variants'] = [{
            qty:   result[cols[8]],
            size:  result[cols[9]],
            color: result[cols[10]],
            img:   result[cols[11]],
          }];
        
      } else {
        products[count]['variants'].push({
          qty:   result[cols[8]],
          size:  result[cols[9]],
          color: result[cols[10]],
          img:   result[cols[11]],
        });
      }
    });

    build({ products, cols });
  });

// ==============================================
