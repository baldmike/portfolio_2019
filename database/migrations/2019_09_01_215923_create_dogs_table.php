<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateDogsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('dogs', function (Blueprint $table) {
            $table->increments('id');
            $table->string('species');
            $table->string('status');
            $table->string('name');
            $table->date('date_of_birth')->nullable()->default(null);
            $table->integer('weight')->nullable()->default(null);
            $table->string('exam')->nullable()->default(null);
            $table->string('deworming_1')->nullable()->default(null);
            $table->string('deworming_2')->nullable()->default(null);
            $table->string('fecal_test')->nullable()->default(null);
            $table->string('heartworm_test')->nullable()->default(null);
            $table->string('heartworm_result')->nullable()->default(null);
            $table->string('spay_neuter')->nullable()->default(null);
            $table->string('distemper_1')->nullable()->default(null);
            $table->string('distemper_2')->nullable()->default(null);
            $table->string('distemper_3')->nullable()->default(null);
            $table->string('lepto_1')->nullable()->default(null);
            $table->string('lepto_2')->nullable()->default(null);
            $table->string('bord')->nullable()->default(null);
            $table->string('civ')->nullable()->default(null);
            $table->string('civ_booster')->nullable()->default(null);
            $table->string('rabies')->nullable()->default(null);
            $table->string('rabies_number')->nullable()->default(null);
            $table->string('vet')->nullable()->default(null);
            $table->string('microchip')->nullable()->default(null);
            $table->string('heartworm')->nullable()->default(null);
            $table->string('flea_tick')->nullable()->default(null);
            $table->string('image')->nullable()->default(null);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('dogs');
    }
}
