<?php

namespace App\Http\Controllers;

use App\Http\Requests\MovementsRequest;
use App\Models\Movement;
use Illuminate\Http\Request;

class MovementsController extends Controller
{
    /**
     * Get list of movements
     */
    public function index(Request $request)
    {
        $perPage = $request->input('perPage', 20);
        $page = $request->input('page', 1);

        return Movement::with('category', 'account')->orderBy('date')->paginate($perPage);       
    }


    /**
     * Create new movement
     */
    public function store(MovementsRequest $request)
    {
        return Movement::create($request->validated());
    }

    /**
     * Get one movement
     */
    public function show(int $id)
    {
        return Movement::with('category', 'account')->find($id);
    }

    /**
     * Update one movement
     */
    public function update(MovementsRequest $request, Movement $movement)
    {
        $movement->fill($request->all());

        return $movement->save();
    }

    /**
     * Delete movement
     */
    public function destroy(Movement $movement)
    {
        return $movement->delete();
    }
}
