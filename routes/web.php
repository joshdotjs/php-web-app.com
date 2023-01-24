<?php

use App\Http\Controllers\ProductController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\OrderController;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\DB; // !!! ⚠️ !!!

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// ==============================================

Route::get('/', function () {
  return view('home', [
    'API_URL' => env('API_URL'), // Cart: Checkout
    'API_URL_LARAVEL' => env('API_URL_LARAVEL'),  // Laravel REST API
  ]);
})->name('login'); // middlewaure('auth') will redirect here if user not logged in

Route::get('/about', function () {
  return view('home-about', [
    'API_URL' => env('API_URL'), // Cart: Checkout
    'API_URL_LARAVEL' => env('API_URL_LARAVEL'),  // Laravel REST API
  ]);
});

Route::get('/about/contact', function () {
  return view('home-contact', [
    'API_URL' => env('API_URL'), // Cart: Checkout
    'API_URL_LARAVEL' => env('API_URL_LARAVEL'),  // Laravel REST API
  ]);
});

// ==============================================

Route::get('/admin', function () {
  return view('admin', [
    'API_URL' => env('API_URL'), // Cart: Checkout
    'API_URL_LARAVEL' => env('API_URL_LARAVEL'),  // Laravel REST API
  ]);
});

Route::get('/admin/products', function () {
  return view('admin-products', [
    'API_URL'         => env('API_URL_NODE'),     // Cart: Checkout (node-web-app.com)
    'API_URL_LARAVEL' => env('API_URL_LARAVEL'),  // Laravel REST API
  ]);
});

Route::get('/admin/orders', function () {
  return view('admin-orders', [
    'API_URL'         => env('API_URL_NODE'),     // Cart: Checkout (node-web-app.com)
    'API_URL_LARAVEL' => env('API_URL_LARAVEL'),  // Laravel REST API
  ]);
});

Route::get('/admin/orders/{id}', function ($id) {
  return view('admin-order-details', [
    'API_URL'         => env('API_URL_NODE'),     // Cart: Checkout (node-web-app.com)
    'API_URL_LARAVEL' => env('API_URL_LARAVEL'),  // Laravel REST API
    'id'              => $id,
  ]);
});

// ==============================================

Route::get('/anim', function () {
  $products = DB::table('products')->get();
  return view('anim', [
    'products' => $products, 
    'API_URL' => env('API_URL'), // Cart: Checkout
    'API_URL_LARAVEL' => env('API_URL_LARAVEL'),  // Laravel REST API
  ]);
});

// ==============================================

Route::get('/auth/register', function () {
  return view('auth-register', [
    'API_URL' => env('API_URL'), // Cart: Checkout
    'API_URL_LARAVEL' => env('API_URL_LARAVEL'),  // Laravel REST API
  ]);
});

Route::get('/auth/login', function () {
  return view('auth-login', [
    'API_URL'         => env('API_URL_NODE'),     // Cart: Checkout (node-web-app.com)
    'API_URL_LARAVEL' => env('API_URL_LARAVEL'),  // Laravel REST API
  ]);
});

// ==============================================

Route::get('/store', function () {  
  $products = DB::table('products')->get();
  return view('store', [
    'products' => $products, 
    'API_URL' => env('API_URL'), // Cart: Checkout
    'API_URL_LARAVEL' => env('API_URL_LARAVEL'),  // Laravel REST API
  ]);
});

// ==============================================

// Product:
Route::get('/store/product/{id}',  function($id) {
  $product  = DB::table('products')->where('id', '=', $id)->get();
  $variants = DB::table('variants')->where('product_id', '=', $id)->get();
  return view('store-product', [
    'product'  => $product,
    'variants' => $variants,
    'API_URL'  => env('API_URL'),
    'API_URL_LARAVEL' => env('API_URL_LARAVEL'),  // Laravel REST API
  ]);
});

// ==============================================

// User:
Route::post('/register',                [UserController::class, 'register']);