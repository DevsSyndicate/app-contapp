<?php

namespace App\Categories\Infrastructure\Controllers;

use App\Core\Infrastructure\Controllers\Controller;
use App\Categories\Infrastructure\Requests\CategoriesRequest;
use App\Categories\Domain\Models\Category;

class CategoriesController extends Controller
{
    /**
     * Get list of categories
     */
    public function index()
    {
        return Category::all();
    }


    /**
     * Create new category
     */
    public function store(CategoriesRequest $request)
    {
        return Category::create($request->validated());
    }

    /**
     * Get one category
     */
    public function show(int $id)
    {
        return Category::find($id);
    }

    /**
     * Update one category
     */
    public function update(CategoriesRequest $request, Category $category)
    {
        $category->fill($request->all());

        return $category->save();
    }

    /**
     * Delete category
     */
    public function destroy(Category $category)
    {
        return $category->delete();
    }
}
