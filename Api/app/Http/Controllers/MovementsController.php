<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\CreateMovementRequest;
use App\Http\Requests\UpdateMovementRequest;
use App\Repositories\MovementRepository;
use App\Events\CreateOrEditMovement;

class MovementsController extends Controller
{
    protected $repository;

    public function __construct(MovementRepository $repository)
    {
        $this->middleware('auth:api');
        $this->repository = $repository;
    }

    /**
     * Get list of movements with pagination.
     * 
     * @param $request: Illuminate\Http\Request
     * 
     * @return json response
     */
    public function index(Request $request)
    {
        $items = $this->repository->paginate($request, 'category');

        return response()->json(['items' => $items]);
    }

    /**
     * Store movement data to database table.
     * 
     * @param $request: App\Http\Requests\CreateMovementRequest
     * @return json response
     */
    public function store(CreateMovementRequest $request)
    {
        $item = $this->repository->store($request, 'category');

        event(new CreateOrEditMovement($item));

        return response()->json(['item' => $item]);
    }

    /**
     * Update movement data to database table.
     * 
     * @param $request: App\Http\Requests\UpdateMovementRequest
     * 
     * @return json response
     */
    public function update($id, UpdateMovementRequest $request)
    {
        // Get editing movement
        $movement = $this->repository->show($id, 'category');

        // If editing movement amount is different of request amount
        if ($movement->amount !== (float)$request->amount) {

            $movement->amount = -1 * abs($movement->amount) + (float)$request->amount;

            event(new CreateOrEditMovement($movement));
        }

        $updatedMovement = $this->repository->update($id, $request, 'category');

        return response()->json(['item' => $updatedMovement]);
    }

    /**
     * Get single item by id.
     * 
     * @param integer $id: movement id.
     * @return json response.
     */
    public function show($id)
    {
        $item = $this->repository->show($id, 'category');

        return response()->json(['item' => $item]);
    }

    /**
     * Delete movement by id.
     * 
     * @param integer $id: integer post id.
     * 
     * @return json response.
     */
    public function delete($id)
    {
        // Get movement and change type to update global position
        $movement = $this->repository->show($id, 'category');

        if ($movement->type === 'entry') {
            $movement->type = 'expense';
        } elseif ($movement->type === 'expense') {
            $movement->type = 'entry';
        }

        $this->repository->delete($id);

        event(new CreateOrEditMovement($movement));

        return response()->json([], 204);
    }
}
