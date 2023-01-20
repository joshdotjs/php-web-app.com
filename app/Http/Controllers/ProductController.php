<?php

namespace App\Http\Controllers;

// use App\Models\Product;
use App\Models\Variant;
use Illuminate\Http\Request;

use Illuminate\Support\Facades\DB; // !!! ⚠️ !!!

class ProductController extends Controller
{
  // ------------------------------------------

  public function createProduct(Request $request) {

    // Pass the request throught the sanctum middleware gives us access to ->user() decoded from token
    $user = $request->user();
    $id = $user->id;
    $email = $user->email;
    $is_admin = $user->is_admin;

    if (!$is_admin) {
      return "you are not an admin";
    }

    if ($is_admin) {
      return "*** you ARE an ADMIN!!!";
    }




    
    return "/api/create-order [POST]";

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

  public function deleteProduct($id) {
    
    
    // -This must not apply to me since I am making a request without cookies
    $x = auth()->user();

    
    return "/api/product/{id} [DELETE]";
    return $x;
  }

  // ------------------------------------------
}
