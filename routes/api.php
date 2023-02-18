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
// Route::post('/login',         function(Request $request) {
//     // return "/api/login [POST]";
//     // return $request;

//     $incoming_fields = $request-> validate([
//       'email'    => 'required',
//       'password' => 'required', 
//     ]);
//     // return $incoming_fields;


//     // attempt(): If the two hashed passwords match an authenticated session will be started for the user.
//     $is_valid_login = auth()->attempt([
//       'email' => $incoming_fields['email'], 
//       'password' => $incoming_fields['password']]
//     );
//     // return $is_valid_login;

//     if ($is_valid_login) {
//       $user = User::where('email', $incoming_fields['email'])->first();
//       $token = $user->createToken('ourapptoken')->plainTextToken;
//       return [
//         'token' => $token,
//         'user'  => $user,
//       ];
//     } else {
//       return false;
//     }  
// });
Route::get('/login',          function() {
  $x = 0;

  return 0;
});

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
  $status = $req['status'];

  $num_rows_affected = DB::table('orders')
    ->where('payment_intent_id', $payment_intent_id)
    ->update(['status' => $status]);

  
  return response(['status' => 'success'], 201);
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