<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;

use Illuminate\Support\Facades\DB; // !!! ⚠️ !!!

class Controller extends BaseController
{
  use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

  // ==========================================
  
  public function getProductByID($id) {

    $product_variants = DB::table('products')
                          ->join('variants', 'products.id', '=', 'variants.product_id')
                          ->where('products.id', '=', $id)
                          ->get();

    // return DB::table('products')->where('id', '=', $id)->get()[0];
    // return $product_variants;
    return view('product', [
      'variants' => $product_variants,
      'API_URL'  => env('API_URL'),
    ]);
  }
  
  // ==========================================
}
