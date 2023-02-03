const fs = require('fs');
// const HTMLParser = require('node-html-parser');

// ==============================================

const build = ({ products, cols }) => {

  const head_open = `<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

function seedProducts() {
`;
  
  const head_close = `
}
`;

  const product_rows = [];
  const variant_rows = [];
  for (let i = 0; i < products.length; ++i ) {
    product_rows.push(`  DB::table('products')->insert([
    '${cols[0]}'  =>  "${products[i].product[cols[0]]}",     
    '${cols[1]}'  =>  "${products[i].product[cols[1]]}",     
    '${cols[2]}'  =>  "${products[i].product[cols[2]]}",     
    '${cols[3]}'  =>  "${products[i].product[cols[3]]}",     
    '${cols[4]}'  =>  "${products[i].product[cols[4]]}",     
    '${cols[5]}'  =>   ${products[i].product[cols[5]] * 100},
    '${cols[6]}'  =>   ${products[i].product[cols[6]] * 100},
    'created_at'  =>  date("Y-m-d H:i:s")
  ]);`);


    for (let j = 0; j < products[i].variants.length; ++j) {
      variant_rows.push(`  DB::table('variants')->insert([
    'product_id'   =>  ${i},
    '${cols[7]}'   =>  "${products[i].variants[j][cols[7]]}",     
    '${cols[8]}'   =>  "${products[i].variants[j][cols[8]]}",     
    '${cols[9]}'   =>  "${products[i].variants[j][cols[9]]}",     
    '${cols[10]}'  =>  "${products[i].variants[j][cols[10]]}",     
    'created_at'   =>  date("Y-m-d H:i:s")
  ]);`);
  
    }
  }




  const output = `${head_open}

  // ==============================================

  // Products:

${product_rows.join('\r\n')}

  // ==============================================

  // Variants:

${variant_rows.join('\r\n')}

  // ==============================================

${head_close}
`;



  console.blue('Writing .php...');
  fs.writeFileSync('./dist/seedProducts.php', output, err => {
    if (err)  console.err(err);
    else      console.log('file written successfully!')
  });

  console.blue('Copying static files:\t/src/static  ->  /dist');
  fs.copyFile('./dist/seedProducts.php', '../database/seeders/seedProducts.php', () => {
    console.green('File copied successfully.');
  });
};

// ==============================================

module.exports = build;