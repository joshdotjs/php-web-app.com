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
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->timestamps();

            $table->string('title');
            $table->string('sub_title');
            $table->longText('body');
            $table->string('category');   // ['shoes', 'clothes', 'accessories']
            $table->string('gender');     // ['men', 'women', 'unisex']
            $table->string('tag');        // ['new', 'sale']
            $table->integer('price');
            $table->integer('price_compare');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('products');
    }
};
