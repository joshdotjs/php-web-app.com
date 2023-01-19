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

Route::post('/login',               [UserController::class, 'loginApi']);
Route::post('/create-order',        [OrderController::class, 'createOrder'])->middleware('auth:sanctum'); // Middleware: only allow logged in user
// Route::delete('/delete-order/{id}', [OrderController::class, 'createOrder'])->middleware('auth:sanctum', 'can:delete,post');



// Route::post('/create-product', [PostController::class, 'createProduct'])->middleware('auth:sanctum', 'can:post');
Route::post('/create-product', [PostController::class, 'createProduct'])->middleware('auth:sanctum'); // Middleware: only logged in 
// Route::post('/create-product', [ProductController::class, 'createProduct']);


// -TODO:
//  --Set up endpoint for /api/create-product [POST]                                      Create-PRODUCT  (REST)
//  --Add check to show / not show form page to create product                            ADMIN-DASHBOARD (VIEW)
//      ---(what is middleware?) #28
//      ---Redirect if not valid user.
//  --Create form page to create product in view product-create                           ADMIN-DASHBOARD (VIEW)
//  --Add sanctum check for "can:delete,post" to endpoint to to delete product            Create-PRODUCT  (REST)
//    ---"Updating and deleteing posts (policy) - #30
//  --Finish endpoint to delete product                                                   Create-PRODUCT  (REST)
//    ---API Endpoints (part 2) #64

//  --Add protected routes:
//    ---1. Admin dashboard
//    [DONE]---2. Orders page (any user)


// -Put online to check for errors

// -If works then add in the order placement routes
// -If works then add in the order placement routes
// -If works then add in the order placement routes
// -If works then add in the order placement routes
// -If works then add in the order placement routes


// -If not works, then remove stuff till works
// -If not works, then remove stuff till works
// -If not works, then remove stuff till works
// -If not works, then remove stuff till works
// -If not works, then remove stuff till works
// -If not works, then remove stuff till works









// Scantrum => token based API (instead of cookie based)