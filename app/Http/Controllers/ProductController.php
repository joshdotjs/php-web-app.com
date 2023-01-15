<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;

use Illuminate\Support\Facades\DB; // !!! ⚠️ !!!

class ProductController extends Controller
{
    // ==========================================

    public function showCreateForm() {
      return view('create-product');
    }

    // ==========================================

    public function storeNewProduct(Request $request) {
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
      Product::create($incomingFields);

      return 'success!';
    }

    // ==========================================

    public function showProducts() {


      $products = DB::table('products')->get();

 
      return view('products', ['products' => $products]);
    }

    // ==========================================

    
    public function getProducts() {
      return DB::table('products')->get();
    }
    
    // ==========================================
    
    public function getProductByID($id) {
      return DB::table('products')->where('id', '=', $id)->get()[0];
    }
    
    // ==========================================
    
}
