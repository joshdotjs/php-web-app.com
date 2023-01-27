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
      Schema::create('variants', function (Blueprint $table) {
        $table->id();
        $table->timestamps();
        $table->string('img'); // path
        $table->string('size');
        $table->string('color');
        $table->integer('qty');
        $table->foreignId('product_id')->constrained()->onDelete('cascade');
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
      Schema::dropIfExists('variants');
    }
};
