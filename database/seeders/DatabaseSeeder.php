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
        'title'         => 'Pegasus 39',
        'sub_title'     => "Men's Road Running Shoes",
        'body'          => "Let the Nike Pegasus 39 help you ascend to new heights. More lightweight up top than the Pegasus 38 and ideal to wear in any season, it has a supportive sensation to help keep your feet contained, while underfoot cushioning and double Zoom Air units (1 more than the Peg 38) give you an extra pop to your step. Your trusted workhorse with wings is back. Time to fly.",
        'category'      => 'shoes',
        'price'         => 10497,
        'price_compare' => 13900,
        'created_at'    => date("Y-m-d H:i:s")
      ]);
      
      DB::table('products')->insert([ // 6 -> 2
        'title'         => 'Repel Miler',
        'sub_title'     => "Men's Running Jacket",
        'body'          => "An essential piece to your running game gets an update on the Nike Repel Miler Jacket. It's built to take on wet weather with a water-repellent design and a hood. The packable design features a look steeped in Nike's heritage. This product is made with 100% recycled polyester fibers.",
        'category'      => 'clothes',
        'price'         => 9000,
        'price_compare' => 9000,
        'created_at'    => date("Y-m-d H:i:s")
      ]);



      DB::table('products')->insert([
        'title'         => 'Flex Experience Run 11 Next Nature',
        'sub_title'     => "Men's Road Running Shoes",
        'body'          => "Comfortably zen, just like every run should be. With the Nike Flex Experience Run 11 Next Nature, we created a lightweight, clean design that feels as good as it looks. The shoes are supportive in all the right ways with movement so natural, you'll swear you've been wearing them for years.",
        'category'      => 'shoes',
        'price'         => 4197,
        'price_compare' => 7000,
        'created_at'    => date("Y-m-d H:i:s")
      ]);

      
      DB::table('products')->insert([ // 7 -> 4
        'title'         => 'Nike Sportswear',
        'sub_title'     => "Faux Fur Blanket",
        'body'          => "Celebrate the seasonal shift of weather by bundling up in this blanket. Made of the coziest faux fur fleece, this statement piece does double-duty as oversized layering piece or softest spot on your couch.",
        'category'      => 'accessories',
        'price'         => 17097,
        'price_compare' => 20000,
        'created_at'    => date("Y-m-d H:i:s")
      ]);
      
      DB::table('products')->insert([ // 5
        'title'         => 'Pegasus 38',
        'sub_title'     => "Men's Running Shoes",
        'body'          => "Your workhorse with wings returns. The Nike Air Zoom Pegasus 38 (NFL New Orleans Saints) puts a spring in your step while showing love for your team. Breathable mesh in the upper combines the comfort and durability you want with a wider fit at the toes.",
        'category'      => 'shoes',
        'price'         => 6500,
        'price_compare' => 13000,
        'created_at'    => date("Y-m-d H:i:s")
      ]);

      DB::table('products')->insert([ // 2 -> 6
        'title'         => 'Invincible 2',
        'sub_title'     => "Men's Road Running Shoes",
        'body'          => "The Nike Invincible 2 has the same supersoft feel that lets you feel the potential when your foot hits the pavement. We created the shoe with plenty of snappy responsiveness and incredible support to help keep you feeling secure and competitive. It's 1 of our most tested shoes, still designed for you to stay on the track and away from the sidelines.",
        'category'      => 'shoes',
        'price'         => 10497,
        'price_compare' => 18000,
        'created_at'    => date("Y-m-d H:i:s")
      ]);
      
      DB::table('products')->insert([ // 4 -> 7
        'title'         => 'Zegama',
        'sub_title'     => "Men's Trail Running Shoes",
        'body'          => "Navigate the up and downs of uncompromising terrain with the Nike Zegama. Developed with great grip and stability, it has you covered so you can keep climbing and reach greater personal heights when the going gets grimy and gritty. Whether it's a challenging, rocky landscape going uphill or a steep, slick decline down a treacherous trail, feel confident when you decide to off-road it.",
        'category'      => 'shoes',
        'price_compare' => 16000,
        'price'         => 11197,
        'created_at'    => date("Y-m-d H:i:s")
      ]);

      // DB::table('products')->insert([ // 5
      //   'title'         => 'Pegasus 38',
      //   'sub_title'     => "",
      //   'body'          => "",
      //   'category'      => 'shoes',
      //   'price'         => 0,
      //   'price_compare' => 0,
      //   'created_at'    => date("Y-m-d H:i:s")
      // ]);

      // ========================================

      // - - - - - - - - - - - - - - - - - - - - 

      // Variants for product 1: 

      DB::table('variants')->insert([
        'product_id' => 1,
        'img'        => '/img/products/shoes/pegasus-white.webp',
        'size'       => 'sm',
        'color'      => 'blue',
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
        'img'        => '/img/products/shoes/pegasus-green.webp',
        'size'       => 'lg',
        'color'      => 'red',
        'qty'        => 1,
        'created_at' => date("Y-m-d H:i:s")
      ]);
      
      // - - - - - - - - - - - - - - - - - - - - 

      // Variants for product 2: 

      DB::table('variants')->insert([
        'product_id' => 6,
        'img'        => '/img/products/shoes/invincible-2-pink.webp',
        'size'       => 'lg',
        'color'      => 'red',
        'qty'        => 1,
        'created_at' => date("Y-m-d H:i:s")
      ]);

      DB::table('variants')->insert([
        'product_id' => 6,
        'img'        => '/img/products/shoes/invincible-2-grey.webp',
        'size'       => 'sm',
        'color'      => 'red',
        'qty'        => 1,
        'created_at' => date("Y-m-d H:i:s")
      ]);

      DB::table('variants')->insert([
        'product_id' => 6,
        'img'        => '/img/products/shoes/invincible-2-orange.webp',
        'size'       => 'lg',
        'color'      => 'blue',
        'qty'        => 1,
        'created_at' => date("Y-m-d H:i:s")
      ]);

      DB::table('variants')->insert([
        'product_id' => 6,
        'img'        => '/img/products/shoes/invincible-2-black.webp',
        'size'       => 'sm',
        'color'      => 'blue',
        'qty'        => 1,
        'created_at' => date("Y-m-d H:i:s")
      ]);

      // - - - - - - - - - - - - - - - - - - - - 

      // Variants for product 3: 

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

      // Variants for product 4: 

      DB::table('variants')->insert([
        'product_id' => 7,
        'img'        => '/img/products/shoes/Zegama-1.webp',
        'size'       => 'lg',
        'color'      => 'red',
        'qty'        => 1,
        'created_at' => date("Y-m-d H:i:s")
      ]);

      DB::table('variants')->insert([
        'product_id' => 7,
        'img'        => '/img/products/shoes/Zegama-2.webp',
        'size'       => 'sm',
        'color'      => 'red',
        'qty'        => 1,
        'created_at' => date("Y-m-d H:i:s")
      ]);
    
      // - - - - - - - - - - - - - - - - - - - - 

      // Variants for product 5: 

      DB::table('variants')->insert([
        'product_id' => 5,
        'img'        => '/img/products/shoes/Pegasus-38-1.webp',
        'size'       => 'lg',
        'color'      => 'red',
        'qty'        => 1,
        'created_at' => date("Y-m-d H:i:s")
      ]);

      DB::table('variants')->insert([
        'product_id' => 5,
        'img'        => '/img/products/shoes/Pegasus-38-2.webp',
        'size'       => 'sm',
        'color'      => 'red',
        'qty'        => 1,
        'created_at' => date("Y-m-d H:i:s")
      ]);

      DB::table('variants')->insert([
        'product_id' => 5,
        'img'        => '/img/products/shoes/Pegasus-38-3.webp',
        'size'       => 'sm',
        'color'      => 'red',
        'qty'        => 1,
        'created_at' => date("Y-m-d H:i:s")
      ]);

      DB::table('variants')->insert([
        'product_id' => 5,
        'img'        => '/img/products/shoes/Pegasus-38-4.webp',
        'size'       => 'sm',
        'color'      => 'red',
        'qty'        => 1,
        'created_at' => date("Y-m-d H:i:s")
      ]);
    
      // - - - - - - - - - - - - - - - - - - - - 

      // Variants for product 6: 

      DB::table('variants')->insert([
        'product_id' => 2,
        'img'        => '/img/clothes/men/Repel-Miler-1.webp',
        'size'       => 'lg',
        'color'      => 'red',
        'qty'        => 1,
        'created_at' => date("Y-m-d H:i:s")
      ]);

      DB::table('variants')->insert([
        'product_id' => 2,
        'img'        => '/img/clothes/men/Repel-Miler-2.webp',
        'size'       => 'sm',
        'color'      => 'red',
        'qty'        => 1,
        'created_at' => date("Y-m-d H:i:s")
      ]);

      DB::table('variants')->insert([
        'product_id' => 2,
        'img'        => '/img/clothes/men/Repel-Miler-1.webp',
        'size'       => 'sm',
        'color'      => 'red',
        'qty'        => 1,
        'created_at' => date("Y-m-d H:i:s")
      ]);

      // - - - - - - - - - - - - - - - - - - - - 

      // Variants for product 7: 

      DB::table('variants')->insert([
        'product_id' => 4,
        'img'        => '/img/accessories/Faux-Fur-Blanket-1.webp',
        'size'       => 'lg',
        'color'      => 'red',
        'qty'        => 1,
        'created_at' => date("Y-m-d H:i:s")
      ]);

      DB::table('variants')->insert([
        'product_id' => 4,
        'img'        => '/img/accessories/Faux-Fur-Blanket-2.webp',
        'size'       => 'sm',
        'color'      => 'red',
        'qty'        => 1,
        'created_at' => date("Y-m-d H:i:s")
      ]);

      DB::table('variants')->insert([
        'product_id' => 4,
        'img'        => '/img/accessories/Faux-Fur-Blanket-3.webp',
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
