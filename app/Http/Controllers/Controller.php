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

    // Join tables:
    // $product_variants = DB::table('products')
    //                       ->join('variants', 'products.id', '=', 'variants.product_id')
    //                       ->where('products.id', '=', $id)
    //                       ->get();

    $product  = DB::table('products')->where('id', '=', $id)->get();
    // return $product;
    $variants = DB::table('variants')->where('product_id', '=', $id)->get();
    // return $product_variants;
    return view('product', [
      'product'  => $product,
      'variants' => $variants,
      'API_URL'  => env('API_URL'),
    ]);
  }
  
  // ==========================================
}
