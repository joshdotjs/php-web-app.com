<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

require_once 'seedProducts.php';

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
      
      seedProducts();

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
