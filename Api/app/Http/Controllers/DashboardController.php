<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Repositories\DashboardRepository;
use App\Http\Requests\UpdateGlobalPositionRequest;

class DashboardController extends Controller
{
    protected $repository;

    public function __construct(DashboardRepository $repository)
    {
        $this->repository = $repository;
    }

    /**
     * Get global position of account
     * 
     * @return json response
     */
    public function globalPosition()
    {
        $globalPosition = $this->repository->getGlobalPosition();

        return response()->json($globalPosition);
    }

    /**
     * Update category data to database table.
     * 
     * @param $request: App\Http\Requests\UpdateGlobalPositionRequest
     * @return json response
     */
    public function updateGlobalPosition(UpdateGlobalPositionRequest $request)
    {
        $globalPosition = $this->repository->updateGlobalPosition($request);

        return response()->json($globalPosition);
    }
}
