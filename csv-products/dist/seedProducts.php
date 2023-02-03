<?php

namespace DatabaseSeeders;

// use IlluminateDatabaseConsoleSeedsWithoutModelEvents;
use IlluminateDatabaseSeeder;
use IlluminateSupportFacadesDB;
use IlluminateSupportFacadesHash;

function seedProducts() {


  // ==============================================

  // Products:

  DB::table('products')->insert([
    '﻿title'  =>  "undefined",     
    'sub_title'  =>  "Women's Road Racing Shoes",     
    'body'  =>  "Continue the next evolution of speed with a racing shoe made to you help chase new goals and records. It helps improve comfort and breathability with a redesigned upper. From a 10K to a marathon, this model, like the previous version, has the responsive cushioning and secure support to push you towards your personal best.",     
    'category'  =>  "shoes",     
    'gender'  =>  "women",     
    'price'  =>   21297,
    'price_compare'  =>   25000,
    'created_at'  =>  date("Y-m-d H:i:s")
  ]);
  DB::table('products')->insert([
    '﻿title'  =>  "undefined",     
    'sub_title'  =>  "Men's Running Jacket",     
    'body'  =>  "An essential piece to your running game gets an update on the Nike Repel Miler Jacket. It's built to take on wet weather with a water-repellent design and a hood. The packable design features a look steeped in Nike's heritage. This product is made with 100% recycled polyester fibers.",     
    'category'  =>  "clothes",     
    'gender'  =>  "men",     
    'price'  =>   9000,
    'price_compare'  =>   9000,
    'created_at'  =>  date("Y-m-d H:i:s")
  ]);

  // ==============================================

  // Variants:

  DB::table('variants')->insert([
    'product_id'   =>  0,
    'qty'   =>  "1",     
    'size'   =>  "sm",     
    'color'   =>  "red",     
    'img'  =>  "/img/products/shoes/women/vaporfly-2-1.avif",     
    'created_at'   =>  date("Y-m-d H:i:s")
  ]);
  DB::table('variants')->insert([
    'product_id'   =>  0,
    'qty'   =>  "1",     
    'size'   =>  "sm",     
    'color'   =>  "red",     
    'img'  =>  "/img/products/shoes/women/vaporfly-2-2.jpeg",     
    'created_at'   =>  date("Y-m-d H:i:s")
  ]);
  DB::table('variants')->insert([
    'product_id'   =>  1,
    'qty'   =>  "1",     
    'size'   =>  "sm",     
    'color'   =>  "red",     
    'img'  =>  "/img/products/clothes/men/Repel-Miler-1.webp",     
    'created_at'   =>  date("Y-m-d H:i:s")
  ]);
  DB::table('variants')->insert([
    'product_id'   =>  1,
    'qty'   =>  "1",     
    'size'   =>  "sm",     
    'color'   =>  "red",     
    'img'  =>  "/img/products/clothes/men/Repel-Miler-2.webp",     
    'created_at'   =>  date("Y-m-d H:i:s")
  ]);

  // ==============================================


}

