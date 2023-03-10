const fs = require('fs');
const path = require("path");
// const HTMLParser = require('node-html-parser');

// ==============================================

const build = ({ products, cols }) => {

  const head_open = `<?php

  namespace Database\\Seeders;
  
  // use Illuminate\Database\\Console\\Seeds\\WithoutModelEvents;
  use Illuminate\\Database\\Seeder;
  use Illuminate\\Support\\Facades\\DB;
  use Illuminate\\Support\\Facades\\Hash;
  
  function seedProducts() {
`;
  
  const head_close = `
}
`;

  const product_rows = [];
  const variant_rows = [];
  for (let i = 0; i < products.length; ++i ) {
    product_rows.push(`  DB::table('products')->insert([
    'title'         =>  "${products[i].product['title']}",     
    'sub_title'     =>  "${products[i].product['sub_title']}",     
    'body'          =>  "${products[i].product['body']}",     
    'category'      =>  "${products[i].product['category']}",     
    'gender'        =>  "${products[i].product['gender']}",     
    'tag'           =>  "${products[i].product['tag']}",     
    'price'         =>   ${products[i].product['price'] * 100},
    'price_compare' =>   ${products[i].product['price_compare'] * 100},
    'created_at'    =>  date("Y-m-d H:i:s")
  ]);`);


    for (let j = 0; j < products[i].variants.length; ++j) {
      variant_rows.push(`  DB::table('variants')->insert([
    'product_id'  =>  ${i + 1},
    'qty'         =>  ${Number(products[i].variants[j]['qty'])},
    'size'        =>  "${products[i].variants[j]['size']}",     
    'color'       =>  "${products[i].variants[j]['color']}",     
    'img'         =>  "${products[i].variants[j]['img']}",     
    'created_at'  =>  date("Y-m-d H:i:s")
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
  const write_path = path.join(__dirname, "dist");
  if (!fs.existsSync(write_path))
    fs.mkdirSync(write_path);

  fs.writeFileSync(`${write_path}/seedProducts.php`, output, err => {
    if (err)  console.err(err);
    else      console.log('file written successfully!')
  });

  console.yellow('Copying file:\t/csv/dist  ->  /database/seeders');
  fs.copyFile(`${write_path}/seedProducts.php`, `${write_path}/../../database/seeders/seedProducts.php`, () => {
    console.green('File copied successfully.');
  });
};

// ==============================================

module.exports = build;