<?php

namespace App\Repositories;

use App\Models\Category;
use App\Repositories\AppRepository;
use Illuminate\Http\Request;

class CategoryRepository extends AppRepository
{
    protected $model;

    public function __construct(Category $model)
    {
        $this->model = $model;
    }

    /**
     * Set payload data for categories table.
     * @param Request $request [description]
     * @return array of data for saving.
     */
    protected function setDataPayload(Request $request)
    {
        return [
            'name' => $request->input('name'),
            'type' => $request->input('type')
        ];
    }
}
