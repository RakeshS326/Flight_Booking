<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Flight;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;


class FlightController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //get all flights
        $flights = Flight::all();
        return response()->json($flights, 201);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        Log::info('Store method hit');
        //validating request
        $validatedData = $request->validate([
            'name' => 'required|string|max:255',
            'origin' => 'required|string|max:255',
            'destination' => 'required|string|max:255',
            'days' => 'required|array',  // Validate that days is an array
            'days.*' => 'string', // Each day should be a string
        ]);

        // Create a new flight with the validated data
        $flight = Flight::create([
            'name' => $validatedData['name'],
            'origin' => $validatedData['origin'],
            'destination' => $validatedData['destination'],
            'days' => json_encode($validatedData['days']), // Store days as JSON
        ]);

        // Return a JSON response with the newly created flight
        return response()->json($flight, 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
