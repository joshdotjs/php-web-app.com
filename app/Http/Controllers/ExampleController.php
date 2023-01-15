<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ExampleController extends Controller
{
    // ==========================================

    public function testPage() {
      $x = 15;
      $arr = ['a', 'b'];

      return view('test', ['x' => $x, 'arr' => $arr]);
    }

    // ==========================================

    // public function homePage() {
    //   return '
    //     <div>
    //       <h1>home</h1>
    //       <a href="/about">About</a>
    //     </div>
    //   ';
    // }
    public function homePage() {
      $x = 15;
      $arr = ['a', 'b'];

      return view('homepage');
    }

    // ==========================================

    public function aboutPage() {
      return view('single-post');
    }

    // ==========================================
}
