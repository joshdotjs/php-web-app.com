<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PostController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\ExampleController;
use App\Http\Controllers\ProductController;

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

// Route::get('/', function () {
//     return view('welcome');
// });

// ==============================================

Route::get('/test', [ExampleController::class, 'testPage']);

// ==============================================

Route::get('/', [ExampleController::class, 'homePage']);

// ==============================================

Route::get('/about', [ExampleController::class, 'aboutPage']);

// ==============================================

// User related routes
Route::post('/register', [UserController::class, 'register']);
Route::post('/login',    [UserController::class, 'login']);
// TODDO: Route::post('/logout',    [UserController::class, 'logout']);

// ==============================================

// Blog post related routes:
Route::get('/create-post',  [PostController::class, 'showCreateForm']);
Route::post('/create-post', [PostController::class, 'storeNewPost']);
Route::get('/post/{pizza}',  [PostController::class, 'viewSinglePost']);

// ==============================================

// Product related routes:
Route::get('/create-product',    [ProductController::class, 'showCreateForm']);
Route::post('/create-product',   [ProductController::class, 'storeNewProduct']);
Route::get('/products',          [ProductController::class, 'showProducts']);
Route::get('/get-products',      [ProductController::class, 'getProducts']);
Route::get('/get-product/{id}',  [ProductController::class, 'getProductByID']);

// GOAL of my app here:
//  -simplified version of store
//  -Products without filtering and without variants
//  -Just have an add to cart button
//  -Insert product into cart
//  -Checkout button utilizing Stripe API sending to same deployed app as the Node and WP versions.
//  -Order summary page
//  -Nothing else!
//    --Can add more in future


// ==============================================

// Route::get('/profile/{pizza}',         [ UserController::class, 'profile' ]);
Route::get('/profile/{user:username}', [ UserController::class, 'profile']);