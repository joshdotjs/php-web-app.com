<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;

use Illuminate\Support\Facades\DB; // !!! ⚠️ !!!

class UserController extends Controller
{
  // ------------------------------------------

  public function profile(User $user) {

    $orders = $user->orders()->latest()->get();

    return view('orders', [
      'email' => $user->email, 
      'user'   => $user,
      'orders' => $orders, 
      'API_URL_NODE' => env('API_URL_NODE'), // Cart: Checkout
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

  public function loginApi(Request $req) {
    // return "/api/login [POST]";
    // return $req;

    $incoming_fields = $req-> validate([
      'email'    => [],
      'password' => [], 
    ]);
    $email = $incoming_fields['email'];
    $password = $incoming_fields['password'];

    if (empty($email)) {
      return [
        'status' => 1,
        'message' => 'email cannot be blank',
        'validation_failure' => 'email'
      ];
    }

    if (empty($password)) {
      return [
        'status' => 1,
        'message' => 'password cannot be blank',
        'validation_failure' => 'password'
      ];
    }


    // attempt(): If the two hashed passwords match an authenticated session will be started for the user.
    $is_valid_login = auth()->attempt([
      'email' => $email, 
      'password' => $password
    ]);
    // return $is_valid_login;

    if ($is_valid_login) {
      $user = User::where('email', $email)->first();
      $token = $user->createToken('ourapptoken')->plainTextToken;
      return [
        'status' => 2,
        'message' => 'login successful',
        'token'  => $token,
        'user'   => $user,
      ];
    } else {
      return [
        'status' => 1,
        'message' => 'login failed'
      ];
    }
  }

  // ------------------------------------------

  public function logoutApi() { // NOT USED SINCE WE USE TOKEN BASED API ENDPOINTS ONLY 
    auth()->logout();
    return "logged out";
  }

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
      'user'     => $user,
      'API_URL_NODE'  => env('API_URL_NODE'),
    ]);
  }
  // ------------------------------------------
}
