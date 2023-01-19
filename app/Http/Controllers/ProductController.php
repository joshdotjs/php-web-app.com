<?php

namespace App\Http\Controllers;

use App\Models\Product;
use App\Models\Variant;
use Illuminate\Http\Request;

use Illuminate\Support\Facades\DB; // !!! ⚠️ !!!

class ProductController extends Controller
{
  // ------------------------------------------

  public function createProduct(Request $request) {
    // return "/api/create-order [POST]";

    // return '/api/create-product';

    $incoming_fields = $request-> validate([
      'title' => 'required', 
      'body'  => 'required', 
      'price' => 'required', 
    ]);

    $new_product = Product::create($incoming_fields);
    
    return $new_product;
  }

  // ------------------------------------------

  public function getProductByID($id) {

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

  // ------------------------------------------

}
