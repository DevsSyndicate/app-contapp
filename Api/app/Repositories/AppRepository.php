<?php

namespace App\Repositories;

use Illuminate\Http\Request;
use Illuminate\Database\Eloquent\Model;


class AppRepository
{
    /**
     * Eloquent model instance.
     */
    protected $model;

    /**
     * Load default class dependencies.
     * @param Model $model Illuminate\Database\Eloquent\Model
     */
    public function __construct(Model $model)
    {
        $this->model = $model;
    }

    /**
     * Get all the items collection from database table using model.
     * @return Collection of items.
     */
    public function get()
    {
        return $this->model->get();
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

        return $model->paginate($request->input('limit', $request->perPage));
    }

    /**
     * Get collection of items in select format.
     * 
     * @return Collection of items.
     */
    public function select(Request $request)
    {
        return $this->model->where('type', $request->type)->get(['id', 'name as text'])->toArray();
    }

    /**
     * Create new record in database.
     * @param Illuminate\Http\Request $request
     * @param String $relation
     * @return saved model object with data.
     */
    public function store(Request $request, String $relation = null)
    {
        $data = $this->setDataPayload($request);
        $item = $this->model;

        $item->fill($data);
        $item->save();

        // Get new stored item
        $storedItem = $this->model;

        // Relations
        if ($relation) {
            $storedItem = $item->with($relation);
        }

        return $storedItem->find($item->id);
    }

    /**
     * Update existing item.
     * @param  Integer $id integer item primary key.
     * @param Request $request Illuminate\Http\Request
     * @param String $relation
     * @return send updated item object.
     */
    public function update($id, Request $request, String $relation = null)
    {
        $data = $this->setDataPayload($request);
        $item = $this->model->findOrFail($id);

        $item->fill($data);
        $item->save();

        // Get new updated item
        $updatedItem = $this->model;

        // Relations
        if ($relation) {
            $updatedItem = $item->with($relation);
        }

        return $updatedItem->find($item->id);
    }

    /**
     * Get requested item and send back.
     * @param  Integer $id: integer primary key value.
     * @param String $relation
     * @return send requested item data.
     */
    public function show($id, String $relation = null)
    {
        $model = $this->model;

        // Relations
        if ($relation) {
            $model = $model->with($relation);
        }

        return $model->find($id);
    }

    /**
     * Delete item by primary key id.
     * @param  Integer $id integer of primary key id.
     * @return boolean
     */
    public function delete($id)
    {
        return $this->model->destroy($id);
    }

    /**
     * Set data for saving
     * @param  Request $request Illuminate\Http\Request
     * @return array of data.
     */
    protected function setDataPayload(Request $request)
    {
        return $request->all();
    }
}
