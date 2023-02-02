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

  public function filterProducts(Request $req) {

    $page_num       = $req['page_num'];
    $sort_col       = $req['sort_col'];
    $sort_direction = $req['sort_direction'];
    $categories     = $req['categories'];
    $genders        = $req['genders'];

    // SELECT * FROM ourlaravelapp.products
    // WHERE category IN ("shoes", "clothes");
    // $products = DB::table('products')
    //   ->whereIn('category', ['accessories', 'clothes'])
    //   ->get();
    $products = DB::table('products')
      ->whereIn('category', $categories)
      ->whereIn('gender', $genders)
      ->skip($page_num * 6)
      ->take(6)
      ->orderBy($sort_col, $sort_direction)
      ->get();

    // -Each row stores product data with an array storing the variants for that rows products
    $arr = [];
    foreach($products as $product) {
      $product_id = $product->id;
      $variants = DB::table('variants')
        ->where('product_id', '=', $product_id)
        ->get(); 
      array_push($arr, [
        'product'  => $product,
        'variants' => $variants,
      ]);
    };

    return $arr;
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
