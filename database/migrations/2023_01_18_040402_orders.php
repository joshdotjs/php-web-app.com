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

      Schema::create('orders', function (Blueprint $table) {
        $table->id();
        $table->timestamps();
        $table->integer('time_stamp'); // unix
        $table->integer('total');
        $table->integer('status');
        $table->string('payment_intent_id');
        $table->integer('card_last4');
        $table->string('card_brand');
        $table->integer('card_exp_month');
        $table->integer('card_exp_year');
        $table->foreignId('user_id')->constrained()->onDelete('cascade');
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
      Schema::dropIfExists('orders');
    }
};
