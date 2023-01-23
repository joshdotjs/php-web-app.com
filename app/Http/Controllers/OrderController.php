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

  public function createOrder(Request $request) {
    return "/api/create-order [POST]";

    $incoming_fields = $request-> validate([
      'total' => 'required', 
    ]);

    $new_order = Order::create([
      'total'   => $incoming_fields['total'],
      'user_id' => auth()->id(), 
    ]);

    return $new_order;
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
