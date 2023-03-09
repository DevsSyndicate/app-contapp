<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\CreateCategoryRequest;
use App\Http\Requests\UpdateCategoryRequest;
use App\Repositories\CategoryRepository;

class CategoriesController extends Controller
{
    protected $repository;

    public function __construct(CategoryRepository $repository)
    {
        $this->middleware('auth:api');
        $this->repository = $repository;
    }

    /**
     * Get list of categories with pagination.
     * 
     * @param $request: Illuminate\Http\Request
     * 
     * @return json response
     */
    public function index(Request $request)
    {
        $items = $this->repository->paginate($request);

        return response()->json(['items' => $items]);
    }

    /**
     * Get list of all categories for selects.
     * 
     * @param $request: Illuminate\Http\Request
     * 
     * @return json response
     */
    public function select(Request $request)
    {
        $items = $this->repository->select($request);

        return response()->json($items);
    }

    /**
     * Store category data to database table.
     * 
     * @param $request: App\Http\Requests\CreateCategoryRequest
     * 
     * @return json response
     */
    public function store(CreateCategoryRequest $request)
    {
        $item = $this->repository->store($request);

        return response()->json(['item' => $item]);
    }

    /**
     * Update category data to database table.
     * 
     * @param $request: App\Http\Requests\UpdateCategoryRequest
     * @return json response
     */
    public function update($id, UpdateCategoryRequest $request)
    {
        $item = $this->repository->update($id, $request);

        return response()->json(['item' => $item]);
    }

    /**
     * Get single item by id.
     * 
     * @param integer $id: integer post id.
     * @return json response.
     */
    public function show($id)
    {
        $item = $this->repository->show($id);

        return response()->json(['item' => $item]);
    }

    /**
     * Delete category by id.
     * 
     * @param integer $id: integer post id.
     * 
     * @return json response.
     */
    public function delete($id)
    {
        $this->repository->delete($id);

        return response()->json([], 204);
    }
}
