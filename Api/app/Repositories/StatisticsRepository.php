<?php

namespace App\Repositories;

use Illuminate\Support\Facades\DB;
use Carbon\Carbon;
use App\Repositories\AppRepository;
use App\Models\Movement;

class StatisticsRepository extends AppRepository
{
    /**
     * Eloquent model instance.
     */
    protected $movements;

    /**
     * Load default class dependencies.
     * @param Model $statistics App\Models\Statistics
     */
    public function __construct(Movement $movements)
    {
        $this->movements = $movements;
    }

    /**
     * Get entries and expenses grouped by month
     * 
     * @return json response
     */
    public function entriesExpensesMonth()
    {
        return [];
    }

    /**
     * Get entries and expenses of month
     * 
     * @return json response
     */
    public function entriesExpensesCurrentMonth()
    {
        $entries = DB::table('movements')->where('type', 'entry')->whereMonth('date', Carbon::now()->month)->sum('movements.amount');
        $expenses = DB::table('movements')->where('type', 'expense')->whereMonth('date', Carbon::now()->month)->sum('movements.amount');

        $data = [
            [
                'name' => 'Entries',
                'value' => $entries,
            ],
            [
                'name' =>  'Expenses',
                'value' => $expenses,
            ]
        ];

        return $data;
    }
}
