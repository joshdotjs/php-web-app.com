<?php

namespace DatabaseSeeders;

// use IlluminateDatabaseConsoleSeedsWithoutModelEvents;
use IlluminateDatabaseSeeder;
use IlluminateSupportFacadesDB;
use IlluminateSupportFacadesHash;

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

DB::table('products')->insert([
'﻿title'  =>  'Vaporfly 2',
'price'  =>  21297,
]);

    // ========================================
  }
}

  