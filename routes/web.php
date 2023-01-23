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
  ]);
})->name('login'); // middlewaure('auth') will redirect here if user not logged in

Route::get('/about', function () {
  return view('home-about', [
    'API_URL' => env('API_URL'), // Cart: Checkout
  ]);
});

Route::get('/about/contact', function () {
  return view('home-contact', [
    'API_URL' => env('API_URL'), // Cart: Checkout
  ]);
});

// ==============================================

Route::get('/admin', function () {
  return view('admin', [
    'API_URL' => env('API_URL'), // Cart: Checkout
  ]);
});

Route::get('/admin/products', function () {
  return view('admin-products', [
    'API_URL'         => env('API_URL_NODE'),     // Cart: Checkout (node-web-app.com)
    'API_URL_LARAVEL' => env('API_URL_LARAVEL'),  // Laravel REST API
  ]);
});

// ==============================================

Route::get('/anim', function () {
  return view('anim', [
    'API_URL' => env('API_URL'), // Cart: Checkout
  ]);
}); // middlewaure('auth') will redirect here if user not logged in

// ==============================================

Route::get('/auth/register', function () {
  return view('auth-register', [
    'API_URL' => env('API_URL'), // Cart: Checkout
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

  // DB::table('products')->insert([
  //   'title'    => 'A', 
  //   'body'     => 'B', 
  //   'price'    => 100, 
  //   'category' => 'shirts', 
  // ]);

  return view('store', [
    'products' => $products, 
    'API_URL' => env('API_URL'), // Cart: Checkout
  ]);
});

// ==============================================

Route::get('/products', function () {  
  $products = DB::table('products')->get();
  return $products;
});

// Protected route (any logged in user)
Route::get('/orders',  [OrderController::class, 'showOrders'])->middleware('auth'); // same as /profile/{user:email}

// ==============================================

// Protected route (admin)
Route::get('/admin-dashboard', [UserController::class, 'showAdminDashboard']);

// Route::post('/create-product', [ProductController::class, 'createProduct']);

// ==============================================

Route::get('/product/{id}',  [ProductController::class, 'getProductByID']);

// ==============================================

// User Controller:
Route::post('/register',                [UserController::class, 'register']);
Route::post('/login',                   [UserController::class, 'login']);
// TODDO: Route::post('/logout',        [UserController::class, 'logout']);
Route::get('/profile/{user:email}',     [UserController::class, 'profile'])->middleware('auth'); // same as /orders
