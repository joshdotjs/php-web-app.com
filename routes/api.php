<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\ProductController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
  return $request->user();
});

Route::post('/login',             [UserController::class, 'loginApi']);
Route::post('/create-order',      [OrderController::class, 'createOrder'])->middleware('auth:sanctum'); // Middleware: only allow logged in user
// Route::delete('/delete-order/{id}', [OrderController::class, 'createOrder'])->middleware('auth:sanctum', 'can:delete,post');


Route::post('/products', [ProductController::class, 'createProduct'])->middleware('auth:sanctum'); // Middleware: auth:sanctum allows us to extract the user info to authenticate admin in the callback function.
Route::delete('/product/{id}', [ProductController::class, 'deleteProduct'])->middleware('auth:sanctum')->middleware('can:delete,product');

// Scantrum => token based API (instead of cookie based)

// ==============================================

Route::get('/josh', function() {
  DB::table('products')->insert([
    'title'    => 'Addd', 
    'body'     => 'B', 
    'price'    => 100, 
    'category' => 'shirts', 
  ]);     
  return 'JOSH';
});

// ==============================================

Route::post('/josh', function(Request $req) {

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
})->middleware('auth:sanctum');