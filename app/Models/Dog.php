<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Dog extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'species', 'status', 'name', 'date_of_birth', 'weight', 'exam', 'deworming_1', 'deworming_2', 'fecal_test', 'heartworm_test', 'heartworm_result', 'spay_neuter', 'distemper_1', 'distemper_2', 'distemper_3', 'lepto_1', 'lepto_2', 'bord', 'civ', 'civ_booster', 'rabies', 'rabies_number', 'vet', 'microchip', 'heartworm', 'flea_tick', 'image'
    ];
}
