<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;

class UserController extends Controller
{

    // ------------------------------------------

    public function profile(User $user) {

      $thePosts = $user->posts()->latest()->get();
      $postCount = $user->posts()->count();

      // RETURN THIS AND REFRESH PAGE!!!
      // RETURN THIS AND REFRESH PAGE!!!
      // RETURN THIS AND REFRESH PAGE!!!
      // RETURN THIS AND REFRESH PAGE!!!
      // RETURN THIS AND REFRESH PAGE!!!
      // return $thePosts;

      return view('profile-posts', [
        'username' => $user->username, 
        'posts' => $thePosts, 
        'postCount' => $postCount,
      ]);
      // return view('profile-posts', ['username' => $user->username]);
    }

    // ------------------------------------------

    public function login(Request $request) {
      $incoming_fields = $request->validate([
        'loginusername' => 'required',
        'loginpassword' => 'required',
      ]);

      // -Hash and compare
      if (auth()->attempt(['username' => $incoming_fields['loginusername'], 'password' => $incoming_fields['loginpassword']])) {
        
        // Log user in if successful:
        $request->session()->regenerate();
        
        return 'Congrats!!!';
      } else {
          return 'Sorry!!!';
      }
    }

    // ------------------------------------------
    
    public function register(Request $request) {

      $incomingFields = $request->validate([
        'username' => ['required', 'min:3', 'max:30', Rule::unique('users', 'username') ], // (table, col)
        'email' => ['required', 'email', Rule::unique('users', 'email')],
        'password' => ['required', 'min:3', 'max:30', 'confirmed' ],
      ]);

      $incomingFields['password'] = bcrypt($incomingFields['password']);

      User::create($incomingFields);

      return 'Hello from register function';
    }

    // ------------------------------------------
}
