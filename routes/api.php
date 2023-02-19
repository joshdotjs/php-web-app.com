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
Route::post('/login',         [UserController::class, 'loginApi']);

// ==============================================

// Orders:
// Route::get('/orders',             [OrderController::class, 'getOrders']);//->middleware('auth:sanctum');
Route::get('/orders/{id}',        [OrderController::class, 'getOrderByID']);//->middleware('auth:sanctum');
Route::get('/user/orders',        [OrderController::class, 'getOrdersByUserID'])->middleware('auth:sanctum');
// OLD: Route::post('/create-order',      [OrderController::class, 'createOrder'])->middleware('auth:sanctum'); // Middleware: only allow logged in user
// Route::post('/orders',            [OrderController::class, 'createOrder'])->middleware('auth:sanctum');
Route::post('/orders',            [OrderController::class, 'createOrder']);
// Route::delete('/delete-order/{id}', [OrderController::class, 'createOrder'])->middleware('auth:sanctum', 'can:delete,post');
Route::post('/orders/update-status', function(Request $req) {

  $payment_intent_id = $req['payment_intent_id'];
  $card_last4        = $req['card_last4'];
  $card_brand        = $req['card_brand'];
  $card_exp_month    = $req['card_exp_month'];
  $card_exp_year     = $req['card_exp_year'];

  $status = $req['status'];

  $num_rows_affected = DB::table('orders')
    ->where('payment_intent_id', $payment_intent_id)
    ->update(['status'     => $status])
  ;

  $num_rows_affected = DB::table('orders')
    ->where('payment_intent_id', $payment_intent_id)
    ->update(['card_last4' => $card_last4]);

  $num_rows_affected = DB::table('orders')
    ->where('payment_intent_id', $payment_intent_id)
    ->update(['card_brand' => $card_brand]);

  $num_rows_affected = DB::table('orders')
    ->where('payment_intent_id', $payment_intent_id)
    ->update(['card_exp_month' => $card_exp_month]);

  $num_rows_affected = DB::table('orders')
    ->where('payment_intent_id', $payment_intent_id)
    ->update(['card_exp_year' => $card_exp_year]);

  return response(['status' => 'success'], 201);
});

Route::post('/get-order-by-payment-intent-id', function(Request $req) {

  $payment_intent_id = $req['payment_intent_id'];

  $order = DB::table('orders')
    ->where('payment_intent_id', $payment_intent_id)
    ->first();

  $products = DB::table('order_2_variants')
    ->join('variants', 'variants.id', 'order_2_variants.variant_id')
    ->join('products', 'products.id', 'variants.product_id')
    ->select(
      'products.id as product_id',
      'variants.id as variant_id',
      'products.title',
      'products.body',
      'products.price',
      'order_2_variants.qty',
      'variants.size',
      'variants.color',
      'variants.img',
    )
    ->where('order_2_variants.order_id', '=', $order->id)
    ->get();


  return response([
    'order' => $order,
    'products' => $products,
  ], 201);
});

// ==============================================

// Products:
Route::get('/products',         [ProductController::class, 'getProducts']);
Route::post('/products',        [ProductController::class, 'createProduct'])->middleware('auth:sanctum'); // Middleware: auth:sanctum allows us to extract the user info to authenticate admin in the callback function.
Route::post('/filter-products', [ProductController::class, 'filterProducts']);
// TODO: Route::put('/product/{id}', [ProductController::class, 'updateProduct'])->middleware('auth:sanctum');
// TODO: Route::delete('/product/{id}', [ProductController::class, 'deleteProduct'])->middleware('auth:sanctum');

// Scantrum => token based API (instead of cookie based)

// ==============================================

// Dev:
// Route::get('/josh', function() {
//   DB::table('products')->insert([
//     'title'    => 'Addd', 
//     'body'     => 'B', 
//     'price'    => 100, 
//     'category' => 'shirts', 
//   ]);
//   return 'JOSH';
// });
// Route::post('/josh', function(Request $req) {
//   return 'PHP - createProduct()';
// })->middleware('auth:sanctum');

// ==============================================