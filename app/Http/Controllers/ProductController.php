<?php

namespace App\Http\Controllers;

use App\Models\Product;
use App\Models\Variant;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

use Illuminate\Support\Facades\DB; // !!! ⚠️ !!!

class ProductController extends Controller
{
  // ------------------------------------------

  public function getProducts() {  
    $products = DB::table('products')->get();
    return $products;
  }

  // ------------------------------------------

  public function createProduct(Request $req) {

    $user = $req->user();
    $id = $user->id;
    $email = $user->email;
    $is_admin = $user->is_admin;
  
    if (!$is_admin) {
      return response([ 'message' => 'unauthorized' ], 401);
    }
  
    $product_id = DB::table('products')->insertGetId([
      'title'    => $req['title'], 
      'body'     => $req['body'], 
      'price'    => $req['price'], 
      'category' => $req['category'], 
      'created_at' => date("Y-m-d H:i:s")
    ]);
  
    $variants = $req['variants'];
  
    foreach ($variants as &$variant) {
      $variant_id = DB::table('variants')->insertGetId([
        'product_id' => $product_id,
        'color'      => $variant['color'], 
        'size'       => $variant['size'], 
        'qty'        => $variant['qty'], 
        'created_at' => date("Y-m-d H:i:s")
      ]); 
    }
    
    return response([ 
      'message'    => 'success', 
      'user'       => $user,
      'product_id' => $product_id, 
      'variants'   => $req['variants']
     ], 201);
  }

  // ------------------------------------------

  public function deleteProduct($id) {
    return "/api/product/{id} [DELETE]";
  }

  // ------------------------------------------
}
