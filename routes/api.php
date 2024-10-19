<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\FlightController;


    Route::get('/flights', [FlightController::class, 'index']);
    Route::post('/flights', [FlightController::class, 'store']);


