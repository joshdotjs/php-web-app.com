const fs = require('fs');
// const HTMLParser = require('node-html-parser');

// ==============================================

const build = ({ products, cols }) => {

  console.log('cols: ', cols);
  console.log('cols[0]: ', cols);

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