<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;

use Illuminate\Support\Facades\DB; // !!! ⚠️ !!!

class PostController extends Controller
{
    // ==========================================

    public function showCreateForm() {
      return view('create-post');
    }

    // ==========================================

    public function storeNewPost(Request $request) {
      $incomingFields = $request->validate([
        'title' => 'required',
        'body'  => 'required',
      ]);

      // strip out HTML tags that a malicious user may have added
      $incomingFields['title']   = strip_tags($incomingFields['title']);
      $incomingFields['body']    = strip_tags($incomingFields['body']);
      $incomingFields['user_id'] = auth()->id();

      // -Laravel will create a SQL query to insert into the table
      // -Post is imported from our model.
      Post::create($incomingFields);

      return 'success!';
    }

    // ==========================================

    // Type hinting:  Post $pizza
    public function viewSinglePost(Post $pizza) {

      // -By using type hinting Laravel can look up 
      //  the appropriate post in the DB based on the ID value ($pizza)
      // -We don't need to query the DB, Laravel will do it for us.
      // -To utlilize type hinting in the manner the name
      //  of this param needs to match the name of the 
      //  arg in the route.
      

      // // -Get all users:
      $users = DB::select('select * from users');
      // return $users;
      
      // // -Get product by ID:
      // $results = DB::select('select * from products where id = :id', ['id' => 1]);
      // return $results;

      // -Get all products
      $results = DB::select('select * from products');
      return $results;

      // return $pizza->title;
      return view('single-post', ['post' => $pizza]);

    }
    
    // ==========================================
}
