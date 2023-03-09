<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Repositories\StatisticsRepository;

class StatisticsController extends Controller
{
    protected $repository;

    public function __construct(StatisticsRepository $repository)
    {
        $this->middleware('auth:api');
        $this->repository = $repository;
    }

    /**
     * Get entries and expenses grouped by month
     * 
     * @return json response
     */
    public function entriesExpensesMonth()
    {
        $statistics = $this->repository->entriesExpensesMonth();

        return response()->json($statistics);
    }

    /**
     * Get entries and expenses of current month
     * 
     * @return json response
     */
    public function entriesExpensesCurrentMonth()
    {
        $statistics = $this->repository->entriesExpensesCurrentMonth();

        return response()->json($statistics);
    }
}
