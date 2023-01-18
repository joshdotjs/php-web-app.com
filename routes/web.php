<?php

use App\Http\Controllers\Product;
use App\Http\Controllers\UserController;
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
    'API_URL' => env('API_URL'),
  ]);
});

// ==============================================

Route::get('/auth-register', function () {
  return view('auth-register', [
    'API_URL' => env('API_URL'),
  ]);
});

Route::get('/auth-login', function () {
  return view('auth-login', [
    'API_URL' => env('API_URL'),
  ]);
});

// ==============================================

Route::get('/store', function () {  
  $products = DB::table('products')->get();
  return view('store', [
    'products' => $products, 
    'API_URL' => env('API_URL'),
  ]);
});

// ==============================================

Route::get('/products', function () {  
  $products = DB::table('products')->get();
  return $products;
});

// ==============================================

Route::get('/product/{id}',  [Product::class, 'getProductByID']);

// ==============================================

// User Controller:
Route::post('/register',                [UserController::class, 'register']);
Route::post('/login',                   [UserController::class, 'login']);
// TODDO: Route::post('/logout',        [UserController::class, 'logout']);
Route::get('/profile/{user:email}',     [UserController::class, 'profile']);
