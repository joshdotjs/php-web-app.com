<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

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

    }
}
