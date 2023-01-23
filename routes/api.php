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

// ==============================================

// Auth:
Route::post('/login',             [UserController::class, 'loginApi']);

// ==============================================

// Orders:
Route::get('/orders',             [OrderController::class, 'getOrders'])->middleware('auth:sanctum');
Route::post('/create-order',      [OrderController::class, 'createOrder'])->middleware('auth:sanctum'); // Middleware: only allow logged in user
// Route::delete('/delete-order/{id}', [OrderController::class, 'createOrder'])->middleware('auth:sanctum', 'can:delete,post');


// ==============================================

// Products:
Route::get('/products', [ProductController::class, 'getProducts']);
Route::post('/products', [ProductController::class, 'createProduct'])->middleware('auth:sanctum'); // Middleware: auth:sanctum allows us to extract the user info to authenticate admin in the callback function.
Route::delete('/product/{id}', [ProductController::class, 'deleteProduct'])->middleware('auth:sanctum')->middleware('can:delete,product');

// Scantrum => token based API (instead of cookie based)

// ==============================================

// Dev:
Route::get('/josh', function() {
  DB::table('products')->insert([
    'title'    => 'Addd', 
    'body'     => 'B', 
    'price'    => 100, 
    'category' => 'shirts', 
  ]);     
  return 'JOSH';
});
Route::post('/josh', function(Request $req) {
  return 'PHP - createProduct()';
})->middleware('auth:sanctum');

// ==============================================
