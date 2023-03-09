<?php

namespace App\Repositories;

use App\Models\GlobalPosition;
use App\Repositories\AppRepository;
use Illuminate\Http\Request;

class DashboardRepository extends AppRepository
{
    protected $globalPositionModel;

    public function __construct(GlobalPosition $globalPositionModel)
    {
        $this->globalPositionModel = $globalPositionModel;
    }

    /**
     * Get global position of account
     * 
     * @param Illuminate\Http\Request $request
     * @return json response
     */
    public function getGlobalPosition()
    {
        return $this->globalPositionModel->first();
    }

    /**
     * Update global position of account
     * @param Request $request Illuminate\Http\Request
     * @return send updated item object.
     */
    public function updateGlobalPosition(Request $request)
    {
        $data = $this->setDataPayload($request);
        $item = $this->globalPositionModel->first();

        $item->fill($data);
        $item->save();

        return $item;
    }

    /**
     * Add to global position
     * @param float $value
     */
    public function add(float $value)
    {
        $item = $this->globalPositionModel->first();
        $item->amount = $item->amount + $value;

        $item->save();
    }

    /**
     * Substract to global position
     * @param float $value
     */
    public function substract(float $value)
    {
        $item = $this->globalPositionModel->first();
        $item->amount = $item->amount - $value;

        $item->save();
    }
}
