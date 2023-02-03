<?php

  namespace Database\Seeders;
  
  // use IlluminateDatabase\Console\Seeds\WithoutModelEvents;
  use Illuminate\Database\Seeder;
  use Illuminate\Support\Facades\DB;
  use Illuminate\Support\Facades\Hash;
  
  function seedProducts() {


  // ==============================================

  // Products:

  DB::table('products')->insert([
    'title'         =>  "Vaporfly 2",     
    'sub_title'     =>  "Women's Road Racing Shoes",     
    'body'          =>  "Continue the next evolution of speed with a racing shoe made to you help chase new goals and records. It helps improve comfort and breathability with a redesigned upper. From a 10K to a marathon, this model, like the previous version, has the responsive cushioning and secure support to push you towards your personal best.",     
    'category'      =>  "shoes",     
    'gender'        =>  "women",     
    'price'         =>   21297,
    'price_compare' =>   25000,
    'created_at'    =>  date("Y-m-d H:i:s")
  ]);
  DB::table('products')->insert([
    'title'         =>  "Repel Miler",     
    'sub_title'     =>  "Men's Running Jacket",     
    'body'          =>  "An essential piece to your running game gets an update on the Nike Repel Miler Jacket. It's built to take on wet weather with a water-repellent design and a hood. The packable design features a look steeped in Nike's heritage. This product is made with 100% recycled polyester fibers.",     
    'category'      =>  "clothes",     
    'gender'        =>  "men",     
    'price'         =>   9000,
    'price_compare' =>   9000,
    'created_at'    =>  date("Y-m-d H:i:s")
  ]);
  DB::table('products')->insert([
    'title'         =>  "Flex Experience Run 11 Next Nature",     
    'sub_title'     =>  "Men's Road Running Shoes",     
    'body'          =>  "Comfortably zen, just like every run should be. With the Nike Flex Experience Run 11 Next Nature, we created a lightweight, clean design that feels as good as it looks. The shoes are supportive in all the right ways with movement so natural, you'll swear you've been wearing them for years.",     
    'category'      =>  "shoes",     
    'gender'        =>  "men",     
    'price'         =>   4197,
    'price_compare' =>   7000,
    'created_at'    =>  date("Y-m-d H:i:s")
  ]);
  DB::table('products')->insert([
    'title'         =>  "Nike Sportswear",     
    'sub_title'     =>  "Faux Fur Blanket",     
    'body'          =>  "Celebrate the seasonal shift of weather by bundling up in this blanket. Made of the coziest faux fur fleece, this statement piece does double-duty as oversized layering piece or softest spot on your couch.",     
    'category'      =>  "accessories",     
    'gender'        =>  "unisex",     
    'price'         =>   17097,
    'price_compare' =>   20000,
    'created_at'    =>  date("Y-m-d H:i:s")
  ]);
  DB::table('products')->insert([
    'title'         =>  "Pegasus 38",     
    'sub_title'     =>  "Men's Running Shoes",     
    'body'          =>  "Your workhorse with wings returns. The Nike Air Zoom Pegasus 38 (NFL New Orleans Saints) puts a spring in your step while showing love for your team. Breathable mesh in the upper combines the comfort and durability you want with a wider fit at the toes.",     
    'category'      =>  "shoes",     
    'gender'        =>  "men",     
    'price'         =>   6500,
    'price_compare' =>   13000,
    'created_at'    =>  date("Y-m-d H:i:s")
  ]);
  DB::table('products')->insert([
    'title'         =>  "Invincible 2",     
    'sub_title'     =>  "Men's Road Running Shoes",     
    'body'          =>  "The Nike Invincible 2 has the same supersoft feel that lets you feel the potential when your foot hits the pavement. We created the shoe with plenty of snappy responsiveness and incredible support to help keep you feeling secure and competitive. It's 1 of our most tested shoes, still designed for you to stay on the track and away from the sidelines.",     
    'category'      =>  "shoes",     
    'gender'        =>  "men",     
    'price'         =>   10497,
    'price_compare' =>   18000,
    'created_at'    =>  date("Y-m-d H:i:s")
  ]);
  DB::table('products')->insert([
    'title'         =>  "Zegama",     
    'sub_title'     =>  "Men's Trail Running Shoes",     
    'body'          =>  "Navigate the up and downs of uncompromising terrain with the Nike Zegama. Developed with great grip and stability, it has you covered so you can keep climbing and reach greater personal heights when the going gets grimy and gritty. Whether it's a challenging, rocky landscape going uphill or a steep, slick decline down a treacherous trail, feel confident when you decide to off-road it.",     
    'category'      =>  "shoes",     
    'gender'        =>  "men",     
    'price'         =>   16000,
    'price_compare' =>   11197,
    'created_at'    =>  date("Y-m-d H:i:s")
  ]);
  DB::table('products')->insert([
    'title'         =>  "Pegasus 39",     
    'sub_title'     =>  "Men's Road Running Shoes",     
    'body'          =>  "Let the Nike Pegasus 39 help you ascend to new heights. More lightweight up top than the Pegasus 38 and ideal to wear in any season, it has a supportive sensation to help keep your feet contained, while underfoot cushioning and double Zoom Air units (1 more than the Peg 38) give you an extra pop to your step. Your trusted workhorse with wings is back. Time to fly.",     
    'category'      =>  "shoes",     
    'gender'        =>  "men",     
    'price'         =>   10497,
    'price_compare' =>   13900,
    'created_at'    =>  date("Y-m-d H:i:s")
  ]);
  DB::table('products')->insert([
    'title'         =>  "Vaporfly 2",     
    'sub_title'     =>  "Men's Road Racing Shoes",     
    'body'          =>  "Continue the next evolution of speed with racing shoes designed to help you chase new goals and records. The Nike Vaporfly 2 builds on a model loved by racers everywhere with a redesigned upper that aims to improve comfort and breathability. From a 10K to a marathon, this version maintains the responsive cushioning and secure support of the original to help push you toward your personal best.",     
    'category'      =>  "shoes",     
    'gender'        =>  "men",     
    'price'         =>   26000,
    'price_compare' =>   26000,
    'created_at'    =>  date("Y-m-d H:i:s")
  ]);
  DB::table('products')->insert([
    'title'         =>  "Alphafly 2",     
    'sub_title'     =>  "Men's Road Racing Shoes",     
    'body'          =>  "Once you take a few strides in the Nike Alphafly 2, you’ll never look at your favorite pair of old racing shoes the same. These rocket ships are made to help shave precious time off your personal records without surrendering the foundation you need to go the full distance. A thick, lightweight support system brings comfort and speed together so you can enjoy our greatest energy return yet while you chase your personal bests.",     
    'category'      =>  "shoes",     
    'gender'        =>  "men",     
    'price'         =>   28500,
    'price_compare' =>   28500,
    'created_at'    =>  date("Y-m-d H:i:s")
  ]);
  DB::table('products')->insert([
    'title'         =>  "Pegasus Trail 4",     
    'sub_title'     =>  "Women's Trail Running Shoes",     
    'body'          =>  "It's time to get outside. Running is your daily ritual, taking you from road to trail as you seek out new routes and goals. With a supportive, springy feel, these trail runners can take you there and back again. Underfoot traction helps keep you going over rocky terrain while still providing a smooth ride for the road. Your trusted workhorse with wings is back and ready for an off-road adventure.",     
    'category'      =>  "shoes",     
    'gender'        =>  "women",     
    'price'         =>   14500,
    'price_compare' =>   14500,
    'created_at'    =>  date("Y-m-d H:i:s")
  ]);
  DB::table('products')->insert([
    'title'         =>  "Infinity React 3",     
    'sub_title'     =>  "Women's Road Running Shoes",     
    'body'          =>  "Celebrate every mile with these festive road runners. With soft and supportive cushioning, the Nike Infinity React 3 is built to help keep you on the run. A wider forefoot and higher foam stacks help shield you from recurring attrition so you can make running a daily habit. The springy responsiveness surprises you too, adding an element of pure speed to 1 of our most tested shoes. Plus, colorful confetti-inspired graphic accents add fresh energy to your run.",     
    'category'      =>  "shoes",     
    'gender'        =>  "women",     
    'price'         =>   16500,
    'price_compare' =>   16500,
    'created_at'    =>  date("Y-m-d H:i:s")
  ]);
  DB::table('products')->insert([
    'title'         =>  "Structure 24",     
    'sub_title'     =>  "Women's Road Running Shoes",     
    'body'          =>  "The Nike Structure 24 has you ready to hit the road. We tested hundreds of runners to design the crash pad under your heel that creates a cushioned, smooth transition from heel to toe. Those insights also created an airy upper with breathability right where you need it.",     
    'category'      =>  "shoes",     
    'gender'        =>  "women",     
    'price'         =>   11097,
    'price_compare' =>   13000,
    'created_at'    =>  date("Y-m-d H:i:s")
  ]);

  // ==============================================

  // Variants:

  DB::table('variants')->insert([
    'product_id'  =>  1,
    'qty'         =>  1,
    'size'        =>  "null",     
    'color'       =>  "orange",     
    'img'         =>  "/img/products/shoes/women/vaporfly-2-1.avif",     
    'created_at'  =>  date("Y-m-d H:i:s")
  ]);
  DB::table('variants')->insert([
    'product_id'  =>  1,
    'qty'         =>  1,
    'size'        =>  "null",     
    'color'       =>  "black",     
    'img'         =>  "/img/products/shoes/women/vaporfly-2-2.jpeg",     
    'created_at'  =>  date("Y-m-d H:i:s")
  ]);
  DB::table('variants')->insert([
    'product_id'  =>  1,
    'qty'         =>  1,
    'size'        =>  "null",     
    'color'       =>  "pink",     
    'img'         =>  "/img/products/shoes/women/vaporfly-2-3.jpeg",     
    'created_at'  =>  date("Y-m-d H:i:s")
  ]);
  DB::table('variants')->insert([
    'product_id'  =>  1,
    'qty'         =>  1,
    'size'        =>  "null",     
    'color'       =>  "yellow",     
    'img'         =>  "/img/products/shoes/women/vaporfly-2-4.jpeg",     
    'created_at'  =>  date("Y-m-d H:i:s")
  ]);
  DB::table('variants')->insert([
    'product_id'  =>  2,
    'qty'         =>  1,
    'size'        =>  "null",     
    'color'       =>  "green",     
    'img'         =>  "/img/products/clothes/men/Repel-Miler-1.webp",     
    'created_at'  =>  date("Y-m-d H:i:s")
  ]);
  DB::table('variants')->insert([
    'product_id'  =>  2,
    'qty'         =>  1,
    'size'        =>  "null",     
    'color'       =>  "black",     
    'img'         =>  "/img/products/clothes/men/Repel-Miler-2.webp",     
    'created_at'  =>  date("Y-m-d H:i:s")
  ]);
  DB::table('variants')->insert([
    'product_id'  =>  2,
    'qty'         =>  1,
    'size'        =>  "null",     
    'color'       =>  "grey",     
    'img'         =>  "/img/products/clothes/men/Repel-Miler-3.webp",     
    'created_at'  =>  date("Y-m-d H:i:s")
  ]);
  DB::table('variants')->insert([
    'product_id'  =>  3,
    'qty'         =>  1,
    'size'        =>  "null",     
    'color'       =>  "grey",     
    'img'         =>  "/img/products/shoes/men/Flex-Experience-Run-11-grey-1.webp",     
    'created_at'  =>  date("Y-m-d H:i:s")
  ]);
  DB::table('variants')->insert([
    'product_id'  =>  3,
    'qty'         =>  1,
    'size'        =>  "null",     
    'color'       =>  "grey",     
    'img'         =>  "/img/products/shoes/men/Flex-Experience-Run-11-grey-2.webp",     
    'created_at'  =>  date("Y-m-d H:i:s")
  ]);
  DB::table('variants')->insert([
    'product_id'  =>  3,
    'qty'         =>  1,
    'size'        =>  "null",     
    'color'       =>  "black",     
    'img'         =>  "/img/products/shoes/men/Flex-Experience-Run-11-black.webp",     
    'created_at'  =>  date("Y-m-d H:i:s")
  ]);
  DB::table('variants')->insert([
    'product_id'  =>  3,
    'qty'         =>  1,
    'size'        =>  "null",     
    'color'       =>  "blue",     
    'img'         =>  "/img/products/shoes/men/Flex-Experience-Run-11-blue.webp",     
    'created_at'  =>  date("Y-m-d H:i:s")
  ]);
  DB::table('variants')->insert([
    'product_id'  =>  4,
    'qty'         =>  1,
    'size'        =>  "null",     
    'color'       =>  "white",     
    'img'         =>  "/img/products/accessories/unisex/Faux-Fur-Blanket-1.webp",     
    'created_at'  =>  date("Y-m-d H:i:s")
  ]);
  DB::table('variants')->insert([
    'product_id'  =>  4,
    'qty'         =>  1,
    'size'        =>  "null",     
    'color'       =>  "brown",     
    'img'         =>  "/img/products/accessories/unisex/Faux-Fur-Blanket-2.webp",     
    'created_at'  =>  date("Y-m-d H:i:s")
  ]);
  DB::table('variants')->insert([
    'product_id'  =>  4,
    'qty'         =>  1,
    'size'        =>  "null",     
    'color'       =>  "black",     
    'img'         =>  "/img/products/accessories/unisex/Faux-Fur-Blanket-3.webp",     
    'created_at'  =>  date("Y-m-d H:i:s")
  ]);
  DB::table('variants')->insert([
    'product_id'  =>  5,
    'qty'         =>  1,
    'size'        =>  "null",     
    'color'       =>  "grey",     
    'img'         =>  "/img/products/shoes/men/Pegasus-38-3.webp",     
    'created_at'  =>  date("Y-m-d H:i:s")
  ]);
  DB::table('variants')->insert([
    'product_id'  =>  5,
    'qty'         =>  1,
    'size'        =>  "null",     
    'color'       =>  "red",     
    'img'         =>  "/img/products/shoes/men/Pegasus-38-2.webp",     
    'created_at'  =>  date("Y-m-d H:i:s")
  ]);
  DB::table('variants')->insert([
    'product_id'  =>  5,
    'qty'         =>  1,
    'size'        =>  "null",     
    'color'       =>  "grey",     
    'img'         =>  "/img/products/shoes/men/Pegasus-38-1.webp",     
    'created_at'  =>  date("Y-m-d H:i:s")
  ]);
  DB::table('variants')->insert([
    'product_id'  =>  5,
    'qty'         =>  1,
    'size'        =>  "null",     
    'color'       =>  "black",     
    'img'         =>  "/img/products/shoes/men/Pegasus-38-4.webp",     
    'created_at'  =>  date("Y-m-d H:i:s")
  ]);
  DB::table('variants')->insert([
    'product_id'  =>  6,
    'qty'         =>  1,
    'size'        =>  "null",     
    'color'       =>  "pink",     
    'img'         =>  "/img/products/shoes/men/invincible-2-pink.webp",     
    'created_at'  =>  date("Y-m-d H:i:s")
  ]);
  DB::table('variants')->insert([
    'product_id'  =>  6,
    'qty'         =>  1,
    'size'        =>  "null",     
    'color'       =>  "grey",     
    'img'         =>  "/img/products/shoes/men/invincible-2-grey.webp",     
    'created_at'  =>  date("Y-m-d H:i:s")
  ]);
  DB::table('variants')->insert([
    'product_id'  =>  6,
    'qty'         =>  1,
    'size'        =>  "null",     
    'color'       =>  "orange",     
    'img'         =>  "/img/products/shoes/men/invincible-2-orange.webp",     
    'created_at'  =>  date("Y-m-d H:i:s")
  ]);
  DB::table('variants')->insert([
    'product_id'  =>  6,
    'qty'         =>  1,
    'size'        =>  "null",     
    'color'       =>  "black",     
    'img'         =>  "/img/products/shoes/men/invincible-2-black.webp",     
    'created_at'  =>  date("Y-m-d H:i:s")
  ]);
  DB::table('variants')->insert([
    'product_id'  =>  7,
    'qty'         =>  1,
    'size'        =>  "null",     
    'color'       =>  "blue",     
    'img'         =>  "/img/products/shoes/men/Zegama-1.webp",     
    'created_at'  =>  date("Y-m-d H:i:s")
  ]);
  DB::table('variants')->insert([
    'product_id'  =>  7,
    'qty'         =>  1,
    'size'        =>  "null",     
    'color'       =>  "green",     
    'img'         =>  "/img/products/shoes/men/Zegama-2.webp",     
    'created_at'  =>  date("Y-m-d H:i:s")
  ]);
  DB::table('variants')->insert([
    'product_id'  =>  8,
    'qty'         =>  1,
    'size'        =>  "null",     
    'color'       =>  "white",     
    'img'         =>  "/img/products/shoes/men/pegasus-39-white.webp",     
    'created_at'  =>  date("Y-m-d H:i:s")
  ]);
  DB::table('variants')->insert([
    'product_id'  =>  8,
    'qty'         =>  1,
    'size'        =>  "null",     
    'color'       =>  "green",     
    'img'         =>  "/img/products/shoes/men/pegasus-39-green.webp",     
    'created_at'  =>  date("Y-m-d H:i:s")
  ]);
  DB::table('variants')->insert([
    'product_id'  =>  8,
    'qty'         =>  1,
    'size'        =>  "null",     
    'color'       =>  "pink",     
    'img'         =>  "/img/products/shoes/men/pegasus-39-pink.webp",     
    'created_at'  =>  date("Y-m-d H:i:s")
  ]);
  DB::table('variants')->insert([
    'product_id'  =>  8,
    'qty'         =>  1,
    'size'        =>  "null",     
    'color'       =>  "purple",     
    'img'         =>  "/img/products/shoes/men/pegasus-39-purple.webp",     
    'created_at'  =>  date("Y-m-d H:i:s")
  ]);
  DB::table('variants')->insert([
    'product_id'  =>  9,
    'qty'         =>  1,
    'size'        =>  "null",     
    'color'       =>  "blue",     
    'img'         =>  "/img/products/shoes/men/Vaporfly-2-1.webp",     
    'created_at'  =>  date("Y-m-d H:i:s")
  ]);
  DB::table('variants')->insert([
    'product_id'  =>  9,
    'qty'         =>  1,
    'size'        =>  "null",     
    'color'       =>  "green",     
    'img'         =>  "/img/products/shoes/men/Vaporfly-2-2.webp",     
    'created_at'  =>  date("Y-m-d H:i:s")
  ]);
  DB::table('variants')->insert([
    'product_id'  =>  9,
    'qty'         =>  1,
    'size'        =>  "null",     
    'color'       =>  "white",     
    'img'         =>  "/img/products/shoes/men/Vaporfly-2-3.webp",     
    'created_at'  =>  date("Y-m-d H:i:s")
  ]);
  DB::table('variants')->insert([
    'product_id'  =>  9,
    'qty'         =>  1,
    'size'        =>  "null",     
    'color'       =>  "grey",     
    'img'         =>  "/img/products/shoes/men/Vaporfly-2-4.jpeg",     
    'created_at'  =>  date("Y-m-d H:i:s")
  ]);
  DB::table('variants')->insert([
    'product_id'  =>  10,
    'qty'         =>  1,
    'size'        =>  "null",     
    'color'       =>  "green",     
    'img'         =>  "/img/products/shoes/men/alphafly-2-green.webp",     
    'created_at'  =>  date("Y-m-d H:i:s")
  ]);
  DB::table('variants')->insert([
    'product_id'  =>  10,
    'qty'         =>  1,
    'size'        =>  "null",     
    'color'       =>  "orange",     
    'img'         =>  "/img/products/shoes/men/alphafly-2-orange.webp",     
    'created_at'  =>  date("Y-m-d H:i:s")
  ]);
  DB::table('variants')->insert([
    'product_id'  =>  11,
    'qty'         =>  1,
    'size'        =>  "null",     
    'color'       =>  "pink",     
    'img'         =>  "/img/products/shoes/women/Pegasus-Trail-4-pink.webp",     
    'created_at'  =>  date("Y-m-d H:i:s")
  ]);
  DB::table('variants')->insert([
    'product_id'  =>  11,
    'qty'         =>  1,
    'size'        =>  "null",     
    'color'       =>  "purple",     
    'img'         =>  "/img/products/shoes/women/Pegasus-Trail-4-purple.webp",     
    'created_at'  =>  date("Y-m-d H:i:s")
  ]);
  DB::table('variants')->insert([
    'product_id'  =>  11,
    'qty'         =>  1,
    'size'        =>  "null",     
    'color'       =>  "red",     
    'img'         =>  "/img/products/shoes/women/Pegasus-Trail-4-red.webp",     
    'created_at'  =>  date("Y-m-d H:i:s")
  ]);
  DB::table('variants')->insert([
    'product_id'  =>  11,
    'qty'         =>  1,
    'size'        =>  "null",     
    'color'       =>  "brown",     
    'img'         =>  "/img/products/shoes/women/Pegasus-Trail-4-brown.webp",     
    'created_at'  =>  date("Y-m-d H:i:s")
  ]);
  DB::table('variants')->insert([
    'product_id'  =>  12,
    'qty'         =>  1,
    'size'        =>  "null",     
    'color'       =>  "purple",     
    'img'         =>  "/img/products/shoes/women/Infinity-React-3-purple.webp",     
    'created_at'  =>  date("Y-m-d H:i:s")
  ]);
  DB::table('variants')->insert([
    'product_id'  =>  12,
    'qty'         =>  1,
    'size'        =>  "null",     
    'color'       =>  "pink",     
    'img'         =>  "/img/products/shoes/women/Infinity-React-3-pink.webp",     
    'created_at'  =>  date("Y-m-d H:i:s")
  ]);
  DB::table('variants')->insert([
    'product_id'  =>  12,
    'qty'         =>  1,
    'size'        =>  "null",     
    'color'       =>  "grey",     
    'img'         =>  "/img/products/shoes/women/Infinity-React-3-grey.webp",     
    'created_at'  =>  date("Y-m-d H:i:s")
  ]);
  DB::table('variants')->insert([
    'product_id'  =>  12,
    'qty'         =>  1,
    'size'        =>  "null",     
    'color'       =>  "white",     
    'img'         =>  "/img/products/shoes/women/Infinity-React-3-white.webp",     
    'created_at'  =>  date("Y-m-d H:i:s")
  ]);
  DB::table('variants')->insert([
    'product_id'  =>  13,
    'qty'         =>  1,
    'size'        =>  "null",     
    'color'       =>  "white",     
    'img'         =>  "/img/products/shoes/women/Structure-24-white.webp",     
    'created_at'  =>  date("Y-m-d H:i:s")
  ]);
  DB::table('variants')->insert([
    'product_id'  =>  13,
    'qty'         =>  1,
    'size'        =>  "null",     
    'color'       =>  "pink",     
    'img'         =>  "/img/products/shoes/women/Structure-24-pink.webp",     
    'created_at'  =>  date("Y-m-d H:i:s")
  ]);
  DB::table('variants')->insert([
    'product_id'  =>  13,
    'qty'         =>  1,
    'size'        =>  "null",     
    'color'       =>  "pink",     
    'img'         =>  "/img/products/shoes/women/Structure-24-pink-2.webp",     
    'created_at'  =>  date("Y-m-d H:i:s")
  ]);
  DB::table('variants')->insert([
    'product_id'  =>  13,
    'qty'         =>  1,
    'size'        =>  "null",     
    'color'       =>  "black",     
    'img'         =>  "/img/products/shoes/women/Structure-24-black.webp",     
    'created_at'  =>  date("Y-m-d H:i:s")
  ]);
  DB::table('variants')->insert([
    'product_id'  =>  13,
    'qty'         =>  0,
    'size'        =>  "",     
    'color'       =>  "",     
    'img'         =>  "",     
    'created_at'  =>  date("Y-m-d H:i:s")
  ]);

  // ==============================================


}

