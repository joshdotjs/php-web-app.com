<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;

class UserController extends Controller
{
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
