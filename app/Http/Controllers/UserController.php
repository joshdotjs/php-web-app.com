<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;

class UserController extends Controller
{
  // ------------------------------------------

  public function profile(User $user) {

    $orders = $user->orders()->latest()->get();

    return view('orders', [
      'email' => $user->email, 
      'user'   => $user,
      'orders' => $orders, 
      'API_URL' => env('API_URL'), // Cart: Checkout
    ]);
  }

  // ------------------------------------------

  // public function login(Request $request) { { // NOT USED SINCE WE USE TOKEN BASED API ENDPOINTS ONLY 
  //   $incoming_fields = $request->validate([
  //     'loginusername' => 'required',
  //     'loginpassword' => 'required',
  //   ]);
  //
  //   // -Hash and compare
  //   // if (auth()->attempt(['username' => $incoming_fields['loginusername'], 'password' => $incoming_fields['loginpassword']])) {
  //   if (auth()->attempt([
  //     'email' => $incoming_fields['loginusername'], 
  //     'password' => $incoming_fields['loginpassword']]
  //   )) {
  //    
  //     // Log user in if successful:
  //     $request->session()->regenerate();
  //    
  //     return redirect('/');
  //   } else {
  //       return 'TODO: Handle unsuccessful login';
  //   }
  // }

  // ------------------------------------------

  public function loginApi(Request $request) {
    // return "/api/login [POST]";
    // return $request;

    $incoming_fields = $request-> validate([
      'email'    => 'required',
      'password' => 'required', 
    ]);
    // return $incoming_fields;

    $is_valid_login = auth()->attempt([
      'email' => $incoming_fields['email'], 
      'password' => $incoming_fields['password']]
    );
    // return $is_valid_login;

    if ($is_valid_login) {
      $user = User::where('email', $incoming_fields['email'])->first();
      $token = $user->createToken('ourapptoken')->plainTextToken;
      return [
        'token' => $token,
        'user'  => $user,
      ];
    } else {
      return false;
    }
  }

  // ------------------------------------------

  // public function logout() { // NOT USED SINCE WE USE TOKEN BASED API ENDPOINTS ONLY 
  //   auth()->logout();
  // }

  // ------------------------------------------

  public function register(Request $request) {

    $incomingFields = $request->validate([
      // 'username' => ['required', 'min:3', 'max:30', Rule::unique('users', 'username') ], // (table, col)
      'email' => ['required', 'email', Rule::unique('users', 'email')],
      'password' => ['required', 'min:3', 'max:30', 'confirmed' ],
    ]);

    $incomingFields['password'] = bcrypt($incomingFields['password']);

    User::create($incomingFields);

    return 'Hello from register function';
  }

  // ------------------------------------------

  public function showAdminDashboard() {  
  
    $user_id = auth()->id();
    $user = User::where('id', $user_id)->first();
  
    return view('admin-dashboard', [
      'user' => $user,
    ]);

  }
  // ------------------------------------------
}
