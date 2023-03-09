<?php

namespace App\Repositories;

use App\Models\Movement;
use App\Repositories\AppRepository;
use Illuminate\Http\Request;

class MovementRepository extends AppRepository
{
    protected $model;

    public function __construct(Movement $model)
    {
        $this->model = $model;
    }

    /**
     * Get collection of items in paginate format.
     * 
     * @param Illuminate\Http\Request $request
     * @param String $relation
     * @return Collection of items.
     */
    public function paginate(Request $request, String $relation = null)
    {
        $model = $this->model;

        // Relations
        if ($relation) {
            $model = $model->with($relation);
        }

        // Order
        if ($request->orderBy) {
            $model = $model->orderBy($request->orderBy);
        }

        // Type
        if ($request->type) {
            $model = $model->where('type', $request->type);
        }

        // Month
        if ($request->month) {
            $model = $model->whereMonth('date', $request->month + 1);
        }

        return $model->paginate($request->input('limit', $request->perPage));
    }

    /**
     * Set payload data for movements table.
     * @param Request $request [description]
     * @return array of data for saving.
     */
    protected function setDataPayload(Request $request)
    {
        return [
            'name' => $request->input('name'),
            'type' => $request->input('type'),
            'category' => $request->input('category'),
            'amount' => $request->input('amount'),
            'date' => $request->input('date')
        ];
    }
}
