<?php

namespace App\Http\Controllers;

use App\Models\Order;
use Illuminate\Http\Request;

class OrderController extends Controller
{
  // ------------------------------------------

  public function createOrder(Request $request) {
    // return "/api/create-order [POST]";

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
}
