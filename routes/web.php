<?php

use App\Http\Controllers\ProductController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\OrderController;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\DB; // !!! ⚠️ !!!
use  Illuminate\Support\Arr;

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
    'API_URL_NODE' => env('API_URL_NODE'), // Cart: Checkout
    'API_URL_LARAVEL' => env('API_URL_LARAVEL'),  // Laravel REST API - SHOULD NOT NEED - CORS NOT ISSUE SINCE FRONTEND ON SAME DOMAIN!!
  ]);
})->name('login'); // middlewaure('auth') will redirect here if user not logged in

Route::get('/about', function () {
  return view('home-about', [
    'API_URL_NODE' => env('API_URL_NODE'), // Cart: Checkout
    'API_URL_LARAVEL' => env('API_URL_LARAVEL'),  // Laravel REST API - SHOULD NOT NEED - CORS NOT ISSUE SINCE FRONTEND ON SAME DOMAIN!!
  ]);
});

Route::get('/about/contact', function () {
  return view('home-contact', [
    'API_URL_NODE' => env('API_URL_NODE'), // Cart: Checkout
    'API_URL_LARAVEL' => env('API_URL_LARAVEL'),  // Laravel REST API - SHOULD NOT NEED - CORS NOT ISSUE SINCE FRONTEND ON SAME DOMAIN!!
  ]);
});

Route::get('/debug', function () {
  return view('home-debug', [
    'API_URL_NODE'    => env('API_URL_NODE'),     // Cart: Checkout
    'API_URL_LARAVEL' => env('API_URL_LARAVEL'),  // Laravel REST API - SHOULD NOT NEED - CORS NOT ISSUE SINCE FRONTEND ON SAME DOMAIN!!
  ]);
});

// ==============================================

Route::get('/admin', function () {
  return view('admin', [
    'API_URL_NODE' => env('API_URL_NODE'), // Cart: Checkout
    'API_URL_LARAVEL' => env('API_URL_LARAVEL'),  // Laravel REST API - SHOULD NOT NEED - CORS NOT ISSUE SINCE FRONTEND ON SAME DOMAIN!!
  ]);
});

Route::get('/admin/products', function () {
  return view('admin-products', [
    'API_URL_NODE'         => env('API_URL_NODE'),     // Cart: Checkout (node-web-app.com)
    'API_URL_LARAVEL' => env('API_URL_LARAVEL'),  // Laravel REST API - SHOULD NOT NEED - CORS NOT ISSUE SINCE FRONTEND ON SAME DOMAIN!!
  ]);
});

Route::get('/admin/orders', function () {

  $orderController = new OrderController();
  $orders = $orderController->getOrders();

  return view('admin-orders', [
    'orders'          => $orders,
    'API_URL_NODE'    => env('API_URL_NODE'),     // Cart: Checkout (node-web-app.com)
    'API_URL_LARAVEL' => env('API_URL_LARAVEL'),  // Laravel REST API - SHOULD NOT NEED - CORS NOT ISSUE SINCE FRONTEND ON SAME DOMAIN!!
  ]);
});

Route::get('/admin/orders/{id}', function ($id) {
  return view('admin-order-details', [
    'API_URL_NODE'    => env('API_URL_NODE'),     // Cart: Checkout (node-web-app.com)
    'API_URL_LARAVEL' => env('API_URL_LARAVEL'),  // Laravel REST API - SHOULD NOT NEED - CORS NOT ISSUE SINCE FRONTEND ON SAME DOMAIN!!
    'id'              => $id,
  ]);
});

// ==============================================

Route::get('/user/orders', function () {

  // $orderController = new OrderController();
  // $orders = $orderController->getOrders();

  return view('user-orders', [
    // 'orders'          => $orders,
    'API_URL_NODE'    => env('API_URL_NODE'),     // Cart: Checkout (node-web-app.com)
    'API_URL_LARAVEL' => env('API_URL_LARAVEL'),  // Laravel REST API - SHOULD NOT NEED - CORS NOT ISSUE SINCE FRONTEND ON SAME DOMAIN!!
  ]);
});

Route::get('/user/orders/{id}', function ($id) {
  return view('user-order-details', [
    'API_URL_NODE'    => env('API_URL_NODE'),     // Cart: Checkout (node-web-app.com)
    'API_URL_LARAVEL' => env('API_URL_LARAVEL'),  // Laravel REST API - SHOULD NOT NEED - CORS NOT ISSUE SINCE FRONTEND ON SAME DOMAIN!!
    'id'              => $id,
  ]);
});

// ==============================================

Route::get('/store', function () {
  $products = DB::table('products')->skip(0)->take(6)->get();

  // -Each row stores product data with an array storing the variants for that rows products
  $arr = [];
  foreach($products as $product) {
    $product_id = $product->id;
    $variants = DB::table('variants')
      ->where('product_id', '=', $product_id)
      ->get(); 
    array_push($arr, [
      'product'  => $product,
      'variants' => $variants
    ]);
  };
  
  $num_products = DB::table('products')->count();

  return view('store', [
    'products'         =>  json_encode($arr),
    'num_products'     =>  $num_products,
    'API_URL_NODE'     =>  env('API_URL_NODE'),     // Cart: Checkout
    'API_URL_LARAVEL'  =>  env('API_URL_LARAVEL'),  // Laravel REST API - SHOULD NOT NEED - CORS NOT ISSUE SINCE FRONTEND ON SAME DOMAIN!!
  ]);
});

// ==============================================

// -Same as /admin/orders!!!
Route::get('/anim-orders', function () {
  $orderController = new OrderController();
  $orders = $orderController->getOrders();

  return view('anim-orders', [
    'orders'          => $orders,
    'API_URL_NODE'    => env('API_URL_NODE'),     // Cart: Checkout (node-web-app.com)
    'API_URL_LARAVEL' => env('API_URL_LARAVEL'),  // Laravel REST API - SHOULD NOT NEED - CORS NOT ISSUE SINCE FRONTEND ON SAME DOMAIN!!
  ]);
});

// ==============================================

Route::get('/auth/register', function () {
  return view('auth', [
    'API_URL_NODE' => env('API_URL_NODE'),        // Cart: Checkout
    'API_URL_LARAVEL' => env('API_URL_LARAVEL'),  // Laravel REST API - SHOULD NOT NEED - CORS NOT ISSUE SINCE FRONTEND ON SAME DOMAIN!!
    'AUTH_TYPE'    => 'register',
  ]);
});

Route::get('/auth/login', function () {
  return view('auth', [
    'API_URL_NODE' => env('API_URL_NODE'),     // Cart: Checkout (node-web-app.com)
    'API_URL_LARAVEL' => env('API_URL_LARAVEL'),  // Laravel REST API - SHOULD NOT NEED - CORS NOT ISSUE SINCE FRONTEND ON SAME DOMAIN!!
    'AUTH_TYPE'    => 'login',
  ]);
});

// ==============================================

// Route::get('/store', function () {  
//   $products = DB::table('products')->get();
//   return view('store', [
//     'products' => $products, 
//     'API_URL_NODE' => env('API_URL_NODE'), // Cart: Checkout
//     'API_URL_LARAVEL' => env('API_URL_LARAVEL'),  // Laravel REST API - SHOULD NOT NEED - CORS NOT ISSUE SINCE FRONTEND ON SAME DOMAIN!!
//   ]);
// });

// ==============================================

// Product:
Route::get('/store/product/{id}',  function($id) {
  $product  = DB::table('products')->where('id', '=', $id)->get();
  $variants = DB::table('variants')->where('product_id', '=', $id)->get();
  return view('store-product', [
    'product'  => $product,
    'variants' => $variants,
    'API_URL_NODE'  => env('API_URL_NODE'),
    'API_URL_LARAVEL' => env('API_URL_LARAVEL'),  // Laravel REST API - SHOULD NOT NEED - CORS NOT ISSUE SINCE FRONTEND ON SAME DOMAIN!!
  ]);
});

// ==============================================

// User:
Route::post('/register',                [UserController::class, 'register']);

// ==============================================

// Checkout:
Route::get('/checkout-success', function () {
  return view('checkout-success', [
    'API_URL_NODE'    => env('API_URL_NODE'),     // Cart: Checkout
    'API_URL_LARAVEL' => env('API_URL_LARAVEL'),  // Laravel REST API - SHOULD NOT NEED - CORS NOT ISSUE SINCE FRONTEND ON SAME DOMAIN!!
  ]);
});

Route::get('/checkout-fail', function () {
  return view('checkout-fail', [
    'API_URL_NODE'    => env('API_URL_NODE'),     // Cart: Checkout
    'API_URL_LARAVEL' => env('API_URL_LARAVEL'),  // Laravel REST API - SHOULD NOT NEED - CORS NOT ISSUE SINCE FRONTEND ON SAME DOMAIN!!
  ]);
});