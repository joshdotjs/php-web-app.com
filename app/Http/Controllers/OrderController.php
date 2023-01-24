<?php

namespace App\Http\Controllers;

use App\Models\Order;
use App\Models\User;
use Illuminate\Http\Request;

use Illuminate\Support\Facades\DB; // !!! ⚠️ !!!

class OrderController extends Controller
{

  // ------------------------------------------

  public function getOrders() {  
    $orders = DB::table('orders')->get();
    $users = DB::table('users')->get();

    $orders = DB::table('users')
      ->join('orders', 'users.id', 'orders.user_id')
      ->select(
        'orders.id', 
        'orders.status', 
        'orders.total',
        'users.email',
        'orders.created_at'
      )
      ->get();

    return response($orders, 201);
  }

  // ------------------------------------------
  
  public function getOrderByID($id) {

    $order = DB::table('users')
      ->join('orders', 'users.id', 'orders.user_id')
      ->select(
        'orders.id', 
        'orders.status', 
        'orders.total',
        'users.email',
        'orders.created_at'
      )
      ->where('orders.id', '=', $id)
      ->get();

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
      )
      ->where('order_2_variants.order_id', '=', $id)
      ->get();

    return response([ 
      'order'    => $order[0], 
      'products' => $products,
    ],
    201);
  }

  // ------------------------------------------

  // OLD:
  // public function createOrder(Request $request) {
  //   return "/api/create-order [POST]";

  //   $incoming_fields = $request-> validate([
  //     'total' => 'required', 
  //   ]);

  //   $new_order = Order::create([
  //     'total'   => $incoming_fields['total'],
  //     'user_id' => auth()->id(), 
  //   ]);

  //   return $new_order;
  // }

  // ------------------------------------------

  public function createOrder(Request $req) {

    // -Step 0: Get user_id from the decoded token
    // -Step 1: Insert into orders table with { user_id, status}
    // -Step 2: Loop over line_items (elements of cart array) and insert into order_2_variants
    //          inserting a row with { order_id, variant_id, qty }, while accumulating the total.
    // -Step 3: Update orders row with total

    // Step 0:
    $user_id = $req->user()->id;

    // Step 1: 
    $order_id = DB::table('orders')->insertGetId([
      'user_id'    => $user_id, 
      'total'      => 0, 
      'status'     => 1, 
      'created_at' => date("Y-m-d H:i:s")
    ]);

    $cart = $req['cart'];

    // Step 2: 
    $total = 0;
    for ($i = 0; $i < count($cart); $i++) {

      $qty     = $cart[$i]['qty'];
      $product = $cart[$i]['product'];
      $variant = $cart[$i]['variant'];
      
      $price = $product['price'];
      $total += $price * $qty;

      $variant_id = $variant['id'];
      
      $line_item = [ 
        'order_id'   => $order_id,
        'variant_id' => $variant_id,
        'qty'        => $qty,
        'created_at' => date("Y-m-d H:i:s")
      ];


      $order_2_variants_id = DB::table('order_2_variants')
        ->insertGetId($line_item);
    }

    // Step 3:
    $num_rows_affected = DB::table('orders')
      ->where('id', $order_id)
      ->update(['total' => $total]);

    // Return the order...
    return $this->getOrderByID($order_id);
  }

  // ------------------------------------------

  // Protected route (logged in users)
  public function showOrders() {

    // navigate away if not logged in
    // $is_logged_in = auth()->check();
    // if (!$is_logged_in) {
    //   return redirect('/');
    // }
   
    // if logged in then retreive orders and pass into view
    $user_id = auth()->id();
    $user = User::where('id', $user_id)->first();

    // Get orders:
    $orders = Order::where('user_id', $user_id)->get();

    return view('orders', [
      'email' => $user->email, 
      'user'   => $user,
      'orders' => $orders, 
      'API_URL' => env('API_URL'), // Cart: Checkout
    ]);
  }

  // ------------------------------------------
}
