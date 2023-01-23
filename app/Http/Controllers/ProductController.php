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

  public function createProduct_PORT(Request $request) {

    // Pass the request throught the sanctum middleware gives us access to ->user() decoded from token
    $user = $request->user();
    $id = $user->id;
    $email = $user->email;
    $is_admin = $user->is_admin;


    // 200: the request has succeeded.
    // 201: the request has succeeded and has led to the creation of a resource.  
    // 400: Bad Request response status code indicates that the server cannot or will not process the request due to something that is perceived to be a client error.
    // 401: Unauthorized response status code indicates that the client request has not been completed because it lacks valid authentication credentials for the requested resource.
    // 404: Not Found response status code indicates that the server cannot find the requested resource.
    // 422: Unprocessable Entity response status code indicates that the server understands the content type of the request entity, and the syntax of the request entity is correct, but it was unable to process the contained instructions.
    // 500: Internal Server Error server error response code indicates that the server encountered an unexpected condition that prevented it from fulfilling the request.
    // 501: Not Implemented server error response code means that the server does not support the functionality required to fulfill the request.
    
    if (!$is_admin) {
      return response([ 'message' => 'unauthorized' ], 401);
    }



    

    // return '/api/create-product';

    $incoming_fields = $request->validate([
      'title'    => 'required', 
      'body'     => 'required', 
      'price'    => 'required', 
      'category' => 'required', 
    ]);
  

    //$new_product = Product::create($incoming_fields);
    DB::table('products')->insert([
      'title'    => 'A', 
      'body'     => 'B', 
      'price'    => 100, 
      'category' => 'shirts', 
    ]);
    

    
    
    return response([ 
      'message'     => 'success',
      'new_product' => $new_product, 
    ], 201);
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
