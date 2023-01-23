<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up()
  {

    Schema::create('order_2_variants', function (Blueprint $table) {
      $table->id();
      $table->timestamps();
      $table->integer('qty');
      $table->foreignId('order_id')->constrained()->onDelete('cascade');
      $table->foreignId('variant_id')->constrained()->onDelete('cascade');
      // -constrained stops you from creating a row if this foreign key does not exist.
      // -if user with user_id creates x blog posts, and user with user_id is deleted then the users' created blog posts are also deleted.
    });


  }

  /**
   * Reverse the migrations.
   *
   * @return void
   */
  public function down()
  {
    Schema::dropIfExists('order_2_variants');
  }
};
