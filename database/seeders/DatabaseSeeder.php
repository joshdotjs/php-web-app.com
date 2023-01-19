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
        'title' => 'Product A',
        'body' => 'Description of product A...',
        'price' => 100,
        'created_at' => date("Y-m-d H:i:s")
      ]);

      DB::table('products')->insert([
        'title' => 'Product B',
        'body' => 'Description of product B...',
        'price' => 200,
        'created_at' => date("Y-m-d H:i:s")
      ]);

      // ========================================

      // - - - - - - - - - - - - - - - - - - - - 

      // Variants for product A: 

      DB::table('variants')->insert([
        'product_id' => 1,
        'size'  => 'lg',
        'color' => 'red',
        'qty'   => 1,
        'created_at' => date("Y-m-d H:i:s")
      ]);

      DB::table('variants')->insert([
        'product_id' => 1,
        'size'  => 'sm',
        'color' => 'red',
        'qty'   => 1,
        'created_at' => date("Y-m-d H:i:s")
      ]);

      DB::table('variants')->insert([
        'product_id' => 1,
        'size'  => 'lg',
        'color' => 'blue',
        'qty'   => 1,
        'created_at' => date("Y-m-d H:i:s")
      ]);

      DB::table('variants')->insert([
        'product_id' => 1,
        'size'  => 'lg',
        'color' => 'blue',
        'qty'   => 1,
        'created_at' => date("Y-m-d H:i:s")
      ]);

      // - - - - - - - - - - - - - - - - - - - - 

      // Variants for product B: 

      DB::table('variants')->insert([
        'product_id' => 2,
        'size'  => 'lg',
        'color' => 'red',
        'qty'   => 1,
        'created_at' => date("Y-m-d H:i:s")
      ]);

      DB::table('variants')->insert([
        'product_id' => 2,
        'size'  => 'sm',
        'color' => 'red',
        'qty'   => 1,
        'created_at' => date("Y-m-d H:i:s")
      ]);

      DB::table('variants')->insert([
        'product_id' => 2,
        'size'  => 'lg',
        'color' => 'blue',
        'qty'   => 1,
        'created_at' => date("Y-m-d H:i:s")
      ]);

      DB::table('variants')->insert([
        'product_id' => 2,
        'size'  => 'lg',
        'color' => 'blue',
        'qty'   => 1,
        'created_at' => date("Y-m-d H:i:s")
      ]);

      // - - - - - - - - - - - - - - - - - - - - 

      // ========================================

      DB::table('orders')->insert([
        'user_id' => 1,
        'total' => 300,
        'created_at' => date("Y-m-d H:i:s")
      ]);

      // ========================================

    }
}
