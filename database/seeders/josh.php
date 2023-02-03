<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;


function seedProducts() {

  DB::table('products')->insert([ // 1 -> 8
    'title'         => 'Vaporfly 2',
    'sub_title'     => "Women's Road Racing Shoes",
    'body'          => "Continue the next evolution of speed with a racing shoe made to you help chase new goals and records. It helps improve comfort and breathability with a redesigned upper. From a 10K to a marathon, this model, like the previous version, has the responsive cushioning and secure support to push you towards your personal best.",
    'category'      => 'shoes',
    'gender'        => 'women',
    'price'         => 21297,
    'price_compare' => 25000,
    'created_at'    => date("Y-m-d H:i:s")
  ]);

  DB::table('products')->insert([ // 6 -> 2
    'title'         => 'Repel Miler',
    'sub_title'     => "Men's Running Jacket",
    'body'          => "An essential piece to your running game gets an update on the Nike Repel Miler Jacket. It's built to take on wet weather with a water-repellent design and a hood. The packable design features a look steeped in Nike's heritage. This product is made with 100% recycled polyester fibers.",
    'category'      => 'clothes',
    'gender'        => 'men',
    'price'         => 9000,
    'price_compare' => 9000,
    'created_at'    => date("Y-m-d H:i:s")
  ]);

  DB::table('products')->insert([
    'title'         => 'Flex Experience Run 11 Next Nature',
    'sub_title'     => "Men's Road Running Shoes",
    'body'          => "Comfortably zen, just like every run should be. With the Nike Flex Experience Run 11 Next Nature, we created a lightweight, clean design that feels as good as it looks. The shoes are supportive in all the right ways with movement so natural, you'll swear you've been wearing them for years.",
    'category'      => 'shoes',
    'gender'        => 'men',
    'price'         => 4197,
    'price_compare' => 7000,
    'created_at'    => date("Y-m-d H:i:s")
  ]);

  DB::table('products')->insert([ // 7 -> 4
    'title'         => 'Nike Sportswear',
    'sub_title'     => "Faux Fur Blanket",
    'body'          => "Celebrate the seasonal shift of weather by bundling up in this blanket. Made of the coziest faux fur fleece, this statement piece does double-duty as oversized layering piece or softest spot on your couch.",
    'category'      => 'accessories',
    'gender'        => 'unisex',
    'price'         => 17097,
    'price_compare' => 20000,
    'created_at'    => date("Y-m-d H:i:s")
  ]);

  DB::table('products')->insert([ // 5
    'title'         => 'Pegasus 38',
    'sub_title'     => "Men's Running Shoes",
    'body'          => "Your workhorse with wings returns. The Nike Air Zoom Pegasus 38 (NFL New Orleans Saints) puts a spring in your step while showing love for your team. Breathable mesh in the upper combines the comfort and durability you want with a wider fit at the toes.",
    'category'      => 'shoes',
    'gender'        => 'men',
    'price'         => 6500,
    'price_compare' => 13000,
    'created_at'    => date("Y-m-d H:i:s")
  ]);

  DB::table('products')->insert([ // 2 -> 6
    'title'         => 'Invincible 2',
    'sub_title'     => "Men's Road Running Shoes",
    'body'          => "The Nike Invincible 2 has the same supersoft feel that lets you feel the potential when your foot hits the pavement. We created the shoe with plenty of snappy responsiveness and incredible support to help keep you feeling secure and competitive. It's 1 of our most tested shoes, still designed for you to stay on the track and away from the sidelines.",
    'category'      => 'shoes',
    'gender'        => 'men',
    'price'         => 10497,
    'price_compare' => 18000,
    'created_at'    => date("Y-m-d H:i:s")
  ]);

  DB::table('products')->insert([ // 4 -> 7
    'title'         => 'Zegama',
    'sub_title'     => "Men's Trail Running Shoes",
    'body'          => "Navigate the up and downs of uncompromising terrain with the Nike Zegama. Developed with great grip and stability, it has you covered so you can keep climbing and reach greater personal heights when the going gets grimy and gritty. Whether it's a challenging, rocky landscape going uphill or a steep, slick decline down a treacherous trail, feel confident when you decide to off-road it.",
    'category'      => 'shoes',
    'gender'        => 'men',
    'price_compare' => 16000,
    'price'         => 11197,
    'created_at'    => date("Y-m-d H:i:s")
  ]);

  DB::table('products')->insert([ // 8 -> 1
    'title'         => 'Pegasus 39',
    'sub_title'     => "Men's Road Running Shoes",
    'body'          => "Let the Nike Pegasus 39 help you ascend to new heights. More lightweight up top than the Pegasus 38 and ideal to wear in any season, it has a supportive sensation to help keep your feet contained, while underfoot cushioning and double Zoom Air units (1 more than the Peg 38) give you an extra pop to your step. Your trusted workhorse with wings is back. Time to fly.",
    'category'      => 'shoes',
    'gender'        => 'men',
    'price'         => 10497,
    'price_compare' => 13900,
    'created_at'    => date("Y-m-d H:i:s")
  ]);


  DB::table('products')->insert([ // 9
    'title'         => 'Vaporfly 2',
    'sub_title'     => "Men's Road Racing Shoes",
    'body'          => "Continue the next evolution of speed with racing shoes designed to help you chase new goals and records. The Nike Vaporfly 2 builds on a model loved by racers everywhere with a redesigned upper that aims to improve comfort and breathability. From a 10K to a marathon, this version maintains the responsive cushioning and secure support of the original to help push you toward your personal best.",
    'category'      => 'shoes',
    'gender'        => 'men',
    'price'         => 26000,
    'price_compare' => 26000,
    'created_at'    => date("Y-m-d H:i:s")
  ]);

  // ========================================

  // - - - - - - - - - - - - - - - - - - - - 

  // Variants for product 8: 

    DB::table('variants')->insert([
      'product_id' => 8,
      'img'        => '/img/products/shoes/men/pegasus-white.webp',
      'size'       => 'sm',
      'color'      => 'blue',
      'qty'        => 1,
      'created_at' => date("Y-m-d H:i:s")
    ]);
      
    DB::table('variants')->insert([
      'product_id' => 8,
      'img'        => '/img/products/shoes/men/pegasus-pink.webp',
      'size'       => 'sm',
      'color'      => 'red',
      'qty'        => 1,
      'created_at' => date("Y-m-d H:i:s")
    ]);

    DB::table('variants')->insert([
      'product_id' => 8,
      'img'        => '/img/products/shoes/men/pegasus-purple.webp',
      'size'       => 'lg',
      'color'      => 'blue',
      'qty'        => 1,
      'created_at' => date("Y-m-d H:i:s")
    ]);
    
    DB::table('variants')->insert([
      'product_id' => 8,
      'img'        => '/img/products/shoes/men/pegasus-green.webp',
      'size'       => 'lg',
      'color'      => 'red',
      'qty'        => 1,
      'created_at' => date("Y-m-d H:i:s")
    ]);
    
    // - - - - - - - - - - - - - - - - - - - - 

    // Variants for product 2: 

    DB::table('variants')->insert([
      'product_id' => 6,
      'img'        => '/img/products/shoes/men/invincible-2-pink.webp',
      'size'       => 'lg',
      'color'      => 'red',
      'qty'        => 1,
      'created_at' => date("Y-m-d H:i:s")
    ]);

    DB::table('variants')->insert([
      'product_id' => 6,
      'img'        => '/img/products/shoes/men/invincible-2-grey.webp',
      'size'       => 'sm',
      'color'      => 'red',
      'qty'        => 1,
      'created_at' => date("Y-m-d H:i:s")
    ]);

    DB::table('variants')->insert([
      'product_id' => 6,
      'img'        => '/img/products/shoes/men/invincible-2-orange.webp',
      'size'       => 'lg',
      'color'      => 'blue',
      'qty'        => 1,
      'created_at' => date("Y-m-d H:i:s")
    ]);

    DB::table('variants')->insert([
      'product_id' => 6,
      'img'        => '/img/products/shoes/men/invincible-2-black.webp',
      'size'       => 'sm',
      'color'      => 'blue',
      'qty'        => 1,
      'created_at' => date("Y-m-d H:i:s")
    ]);

    // - - - - - - - - - - - - - - - - - - - - 

    // Variants for product 3: 

    DB::table('variants')->insert([
      'product_id' => 3,
      'img'        => '/img/products/shoes/men/Flex-Experience-Run-11-grey-1.webp',
      'size'       => 'lg',
      'color'      => 'red',
      'qty'        => 1,
      'created_at' => date("Y-m-d H:i:s")
    ]);

    DB::table('variants')->insert([
      'product_id' => 3,
      'img'        => '/img/products/shoes/men/Flex-Experience-Run-11-grey-2.webp',
      'size'       => 'sm',
      'color'      => 'red',
      'qty'        => 1,
      'created_at' => date("Y-m-d H:i:s")
    ]);
    
    DB::table('variants')->insert([
      'product_id' => 3,
      'img'        => '/img/products/shoes/men/Flex-Experience-Run-11-black.webp',
      'size'       => 'sm',
      'color'      => 'red',
      'qty'        => 1,
      'created_at' => date("Y-m-d H:i:s")
    ]);

    DB::table('variants')->insert([
      'product_id' => 3,
      'img'        => '/img/products/shoes/men/Flex-Experience-Run-11-blue.webp',
      'size'       => 'sm',
      'color'      => 'red',
      'qty'        => 1,
      'created_at' => date("Y-m-d H:i:s")
    ]);

    // - - - - - - - - - - - - - - - - - - - - 

    // Variants for product 4: 

    DB::table('variants')->insert([
      'product_id' => 7,
      'img'        => '/img/products/shoes/men/Zegama-1.webp',
      'size'       => 'lg',
      'color'      => 'red',
      'qty'        => 1,
      'created_at' => date("Y-m-d H:i:s")
    ]);

    DB::table('variants')->insert([
      'product_id' => 7,
      'img'        => '/img/products/shoes/men/Zegama-2.webp',
      'size'       => 'sm',
      'color'      => 'red',
      'qty'        => 1,
      'created_at' => date("Y-m-d H:i:s")
    ]);

    // - - - - - - - - - - - - - - - - - - - - 

    // Variants for product 5: 

    DB::table('variants')->insert([
      'product_id' => 5,
      'img'        => '/img/products/shoes/men/Pegasus-38-1.webp',
      'size'       => 'lg',
      'color'      => 'red',
      'qty'        => 1,
      'created_at' => date("Y-m-d H:i:s")
    ]);

    DB::table('variants')->insert([
      'product_id' => 5,
      'img'        => '/img/products/shoes/men/Pegasus-38-2.webp',
      'size'       => 'sm',
      'color'      => 'red',
      'qty'        => 1,
      'created_at' => date("Y-m-d H:i:s")
    ]);

    DB::table('variants')->insert([
      'product_id' => 5,
      'img'        => '/img/products/shoes/men/Pegasus-38-3.webp',
      'size'       => 'sm',
      'color'      => 'red',
      'qty'        => 1,
      'created_at' => date("Y-m-d H:i:s")
    ]);

    DB::table('variants')->insert([
      'product_id' => 5,
      'img'        => '/img/products/shoes/men/Pegasus-38-4.webp',
      'size'       => 'sm',
      'color'      => 'red',
      'qty'        => 1,
      'created_at' => date("Y-m-d H:i:s")
    ]);

    // - - - - - - - - - - - - - - - - - - - - 

    // Variants for product 6: 

    DB::table('variants')->insert([
      'product_id' => 2,
      'img'        => '/img/products/clothes/men/Repel-Miler-1.webp',
      'size'       => 'lg',
      'color'      => 'red',
      'qty'        => 1,
      'created_at' => date("Y-m-d H:i:s")
    ]);

    DB::table('variants')->insert([
      'product_id' => 2,
      'img'        => '/img/products/clothes/men/Repel-Miler-2.webp',
      'size'       => 'sm',
      'color'      => 'red',
      'qty'        => 1,
      'created_at' => date("Y-m-d H:i:s")
    ]);

    DB::table('variants')->insert([
      'product_id' => 2,
      'img'        => '/img/products/clothes/men/Repel-Miler-3.webp',
      'size'       => 'sm',
      'color'      => 'red',
      'qty'        => 1,
      'created_at' => date("Y-m-d H:i:s")
    ]);

    // - - - - - - - - - - - - - - - - - - - - 

    // Variants for product 7: 

    DB::table('variants')->insert([
      'product_id' => 4,
      'img'        => '/img/products/accessories/unisex/Faux-Fur-Blanket-1.webp',
      'size'       => 'lg',
      'color'      => 'red',
      'qty'        => 1,
      'created_at' => date("Y-m-d H:i:s")
    ]);

    DB::table('variants')->insert([
      'product_id' => 4,
      'img'        => '/img/products/accessories/unisex/Faux-Fur-Blanket-2.webp',
      'size'       => 'sm',
      'color'      => 'red',
      'qty'        => 1,
      'created_at' => date("Y-m-d H:i:s")
    ]);

    DB::table('variants')->insert([
      'product_id' => 4,
      'img'        => '/img/products/accessories/unisex/Faux-Fur-Blanket-3.webp',
      'size'       => 'sm',
      'color'      => 'red',
      'qty'        => 1,
      'created_at' => date("Y-m-d H:i:s")
    ]);

    // - - - - - - - - - - - - - - - - - - - - 

    // Variants for product 1: 

    DB::table('variants')->insert([
      'product_id' => 1,
      'img'        => 'img/products/shoes/women/vaporfly-2-1.avif',
      'size'       => 'lg',
      'color'      => 'red',
      'qty'        => 1,
      'created_at' => date("Y-m-d H:i:s")
    ]);

    DB::table('variants')->insert([
      'product_id' => 1,
      'img'        => 'img/products/shoes/women/vaporfly-2-2.jpeg',
      'size'       => 'sm',
      'color'      => 'red',
      'qty'        => 1,
      'created_at' => date("Y-m-d H:i:s")
    ]);

    DB::table('variants')->insert([
      'product_id' => 1,
      'img'        => 'img/products/shoes/women/vaporfly-2-3.jpeg',
      'size'       => 'sm',
      'color'      => 'red',
      'qty'        => 1,
      'created_at' => date("Y-m-d H:i:s")
    ]);

    DB::table('variants')->insert([
      'product_id' => 1,
      'img'        => 'img/products/shoes/women/vaporfly-2-4.jpeg',
      'size'       => 'sm',
      'color'      => 'red',
      'qty'        => 1,
      'created_at' => date("Y-m-d H:i:s")
    ]);

    // - - - - - - - - - - - - - - - - - - - - 

    // Variants for product 9: 

    DB::table('variants')->insert([
      'product_id' => 9,
      'img'        => 'img/products/shoes/men/Vaporfly-2-1.webp',
      'size'       => 'lg',
      'color'      => 'blue',
      'qty'        => 1,
      'created_at' => date("Y-m-d H:i:s")
    ]);
    DB::table('variants')->insert([
      'product_id' => 9,
      'img'        => 'img/products/shoes/men/Vaporfly-2-2.webp',
      'size'       => 'lg',
      'color'      => 'green',
      'qty'        => 1,
      'created_at' => date("Y-m-d H:i:s")
    ]);
    DB::table('variants')->insert([
      'product_id' => 9,
      'img'        => 'img/products/shoes/men/Vaporfly-2-3.webp',
      'size'       => 'lg',
      'color'      => 'white',
      'qty'        => 1,
      'created_at' => date("Y-m-d H:i:s")
    ]);
    DB::table('variants')->insert([
      'product_id' => 9,
      'img'        => 'img/products/shoes/men/Vaporfly-2-4.jpeg',
      'size'       => 'lg',
      'color'      => 'grey',
      'qty'        => 1,
      'created_at' => date("Y-m-d H:i:s")
    ]);

    // - - - - - - - - - - - - - - - - - - - - 

    // ========================================

}
