const fs = require('fs');
// const HTMLParser = require('node-html-parser');

// ==============================================

const build = (results) => {
  // let html;
  // try { html = fs.readFileSync(`./src/index.html`, 'utf-8');} 
  // catch (err) { console.error(err); }

  // const html_parsed = HTMLParser.parse(html);
  // const body = html_parsed.querySelector('body');
  // const body_inner_html = body.innerHTML;

  // let css;
  // console.blue('Processing .css');
  // try { css = fs.readFileSync('./src/index.css', 'utf-8'); }
  // catch (err) { console.error(err); }


  // let js;
  // console.blue('Processing .js');
  // try { js = fs.readFileSync('./src/index.js', 'utf-8'); }
  // catch (err) { console.error(err); }

  const head_open = `<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
  /**
    * Seed the application's database.
    *
    * @return void
    */
  public function run()
  {
    // ========================================
`;
  
  const head_close = `
    // ========================================
  }
}
`;


  const cols = Object.keys(results[0]);
  const new_row = `DB::table('products')->insert([
'${cols[0]}'  =>  '${results[0][cols[0]]}',
'${cols[1]}'  =>  ${results[0][cols[1]]},
]);`

  const output = `${head_open}
${new_row}
${head_close}
  `;



  console.blue('Writing .php...');
  fs.writeFileSync('./dist/DatabaseSeeder.php', output, err => {
    if (err)  console.err(err);
    else      console.log('file written successfully!')
  });

  // console.blue('Copying static files:\t/src/static  ->  /dist');
  // fs.copyFile('./dist/index.html', './index.html', () => {
  //   console.green('File copied successfully.');
  // });
};

// ==============================================

module.exports = build;