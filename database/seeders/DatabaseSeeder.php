<?php

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
      // \App\Models\User::factory(10)->create();

      // \App\Models\User::factory()->create([
      //     'name' => 'Test User',
      //     'email' => 'test@example.com',
      // ]);

      // ========================================

      DB::table('users')->insert([
        'email' => 'josh@josh.com',
        'password' => Hash::make('josh'),
        'is_admin' => 1
      ]);

      DB::table('users')->insert([
        'email' => 'steve@steve.com',
        'password' => Hash::make('steve'),
        'is_admin' => 0
      ]);

      // ========================================

      DB::table('products')->insert([
        'title'      => 'Product A',
        'body'       => 'Description of product A...',
        'category'   => 'shirts',
        'price'      => 100,
        'created_at' => date("Y-m-d H:i:s")
      ]);

      DB::table('products')->insert([
        'title'      => 'Product B',
        'body'       => 'Description of product B...',
        'category'   => 'shoes',
        'price'      => 200,
        'created_at' => date("Y-m-d H:i:s")
      ]);

      DB::table('products')->insert([
        'title'      => 'Product C',
        'body'       => 'Description of product C...',
        'category'   => 'pants',
        'price'      => 300,
        'created_at' => date("Y-m-d H:i:s")
      ]);

      // ========================================

      // - - - - - - - - - - - - - - - - - - - - 

      // Variants for product A: 

      DB::table('variants')->insert([
        'product_id' => 1,
        'img'        => '/img/products/shoes/pegasus-green.webp',
        'size'       => 'lg',
        'color'      => 'red',
        'qty'        => 1,
        'created_at' => date("Y-m-d H:i:s")
      ]);

      DB::table('variants')->insert([
        'product_id' => 1,
        'img'        => '/img/products/shoes/pegasus-pink.webp',
        'size'       => 'sm',
        'color'      => 'red',
        'qty'        => 1,
        'created_at' => date("Y-m-d H:i:s")
      ]);

      DB::table('variants')->insert([
        'product_id' => 1,
        'img'        => '/img/products/shoes/pegasus-purple.webp',
        'size'       => 'lg',
        'color'      => 'blue',
        'qty'        => 1,
        'created_at' => date("Y-m-d H:i:s")
      ]);

      DB::table('variants')->insert([
        'product_id' => 1,
        'img'        => '/img/products/shoes/pegasus-white.webp',
        'size'       => 'sm',
        'color'      => 'blue',
        'qty'        => 1,
        'created_at' => date("Y-m-d H:i:s")
      ]);

      // - - - - - - - - - - - - - - - - - - - - 

      // Variants for product B: 

      DB::table('variants')->insert([
        'product_id' => 2,
        'img'        => '/img/products/shoes/invincible-2-pink.webp',
        'size'       => 'lg',
        'color'      => 'red',
        'qty'        => 1,
        'created_at' => date("Y-m-d H:i:s")
      ]);

      DB::table('variants')->insert([
        'product_id' => 2,
        'img'        => '/img/products/shoes/invincible-2-grey.webp',
        'size'       => 'sm',
        'color'      => 'red',
        'qty'        => 1,
        'created_at' => date("Y-m-d H:i:s")
      ]);

      DB::table('variants')->insert([
        'product_id' => 2,
        'img'        => '/img/products/shoes/invincible-2-orange.webp',
        'size'       => 'lg',
        'color'      => 'blue',
        'qty'        => 1,
        'created_at' => date("Y-m-d H:i:s")
      ]);

      DB::table('variants')->insert([
        'product_id' => 2,
        'img'        => '/img/products/shoes/invincible-2-black.webp',
        'size'       => 'sm',
        'color'      => 'blue',
        'qty'        => 1,
        'created_at' => date("Y-m-d H:i:s")
      ]);

      // - - - - - - - - - - - - - - - - - - - - 

      // Variants for product C: 

      DB::table('variants')->insert([
        'product_id' => 3,
        'img'        => '/img/products/shoes/Flex-Experience-Run-11-grey-1.webp',
        'size'       => 'lg',
        'color'      => 'red',
        'qty'        => 1,
        'created_at' => date("Y-m-d H:i:s")
      ]);

      DB::table('variants')->insert([
        'product_id' => 3,
        'img'        => '/img/products/shoes/Flex-Experience-Run-11-grey-2.webp',
        'size'       => 'sm',
        'color'      => 'red',
        'qty'        => 1,
        'created_at' => date("Y-m-d H:i:s")
      ]);
      
      DB::table('variants')->insert([
        'product_id' => 3,
        'img'        => '/img/products/shoes/Flex-Experience-Run-11-black.webp',
        'size'       => 'sm',
        'color'      => 'red',
        'qty'        => 1,
        'created_at' => date("Y-m-d H:i:s")
      ]);
      DB::table('variants')->insert([
        'product_id' => 3,
        'img'        => '/img/products/shoes/Flex-Experience-Run-11-blue.webp',
        'size'       => 'sm',
        'color'      => 'red',
        'qty'        => 1,
        'created_at' => date("Y-m-d H:i:s")
      ]);
   
      // - - - - - - - - - - - - - - - - - - - - 

      // ========================================

      DB::table('orders')->insert([
        'user_id'    => 1,
        'total'      => 100, // 1 * product A = 1 * 100 = 100
        'status'     => 1,
        'created_at' => date("Y-m-d H:i:s", 1673463600), //https://www.site24x7.com/tools/time-stamp-converter.html
        'time_stamp' => 1673463600, // time()
        // Jan 11 2023 @ 1pm (Central)
      ]);

      DB::table('orders')->insert([
        'user_id'    => 1,
        'total'      => 200, // 2 * product A = 2 * 100 = 200
        'status'     => 1,
        'created_at' => date("Y-m-d H:i:s", 1674068400), // https://www.site24x7.com/tools/time-stamp-converter.html
        'time_stamp' => 1674068400, // time()
        // Jan 18 2023 @ 1pm (Central)
      ]);

      DB::table('orders')->insert([
        'user_id'    => 2,
        'total'      => 300, // product A + product B = 100 + 200 = 300
        'status'     => 2,
        'created_at' => date("Y-m-d H:i:s", 1674673200), // https://www.site24x7.com/tools/time-stamp-converter.html
        'time_stamp' => 1674673200, // time()
        // Jan 25 2023 @ 1pm (Central)
      ]);

      // ========================================

      // - - - - - - - - - - - - - - - - - - - - 
      // Variants for Order 1: 

      DB::table('order_2_variants')->insert([
        'order_id'    => 1, 
        'variant_id'  => 1,
        'qty'         => 1,
        'created_at' => date("Y-m-d H:i:s"),
      ]);

      // - - - - - - - - - - - - - - - - - - - - 
      // Variants for Order 2: 

      DB::table('order_2_variants')->insert([
        'order_id'    => 2, 
        'variant_id'  => 1,
        'qty'         => 2,
        'created_at' => date("Y-m-d H:i:s"),
      ]);

      // - - - - - - - - - - - - - - - - - - - - 
      // Variants for Order 3: 

      DB::table('order_2_variants')->insert([
        'order_id'    => 3, 
        'variant_id'  => 1,
        'qty'         => 1,
        'created_at' => date("Y-m-d H:i:s"), 
      ]);

      DB::table('order_2_variants')->insert([
        'order_id'    => 3, 
        'variant_id'  => 2,
        'qty'         => 1,
        'created_at' => date("Y-m-d H:i:s"), 
      ]);

      // - - - - - - - - - - - - - - - - - - - - 

      // ========================================

    }
}
