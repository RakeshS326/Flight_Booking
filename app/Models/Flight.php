<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Flight extends Model
{
    protected $fillable = ['name', 'origin', 'destination', 'days'];

    protected $casts = [
        'days' => 'array',  //  cast 'days' to an array
    ];
}
