<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;

class UserController extends Controller
{
  // ------------------------------------------

  public function profile(User $user) {

    // $thePosts = $user->posts()->latest()->get();
    // $postCount = $user->posts()->count();
    $theOrders = $user->orders()->latest()->get();
    $orderCount = $user->orders()->count();

    // RETURN THIS AND REFRESH PAGE!!!
    // RETURN THIS AND REFRESH PAGE!!!
    // RETURN THIS AND REFRESH PAGE!!!
    // RETURN THIS AND REFRESH PAGE!!!
    // RETURN THIS AND REFRESH PAGE!!!
    // return $theOrders;

    return view('profile-posts', [
      // 'username' => $user->username, 
      'email' => $user->email, 
      // 'posts' => $thePosts, 
      'posts' => $theOrders, 
      // 'postCount' => $postCount,
      'postCount' => $orderCount,
    ]);
    // return view('profile-posts', ['username' => $user->username]);
  }

  // ------------------------------------------

  public function login(Request $request) {
    $incoming_fields = $request->validate([
      'loginusername' => 'required',
      'loginpassword' => 'required',
    ]);


    return "/api/login";

    // -Hash and compare
    // if (auth()->attempt(['username' => $incoming_fields['loginusername'], 'password' => $incoming_fields['loginpassword']])) {
    if (auth()->attempt([
      'email' => $incoming_fields['loginusername'], 
      'password' => $incoming_fields['loginpassword']]
    )) {
      
      // Log user in if successful:
      $request->session()->regenerate();
      
      return 'Congrats!!!';
    } else {
        return 'Sorry!!!';
    }
  }

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
      return $token;
    } else {
      return false;
    }
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
}
