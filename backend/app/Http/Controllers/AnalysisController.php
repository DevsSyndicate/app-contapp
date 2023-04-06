<?php

namespace App\Http\Controllers;

use App\Models\Account;
use App\Models\Movement;
use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class AnalysisController extends Controller
{
    /**
     * Get monthly analsys
     */
    public function getMonthlyAnalysis(Request $request)
    {
        $analysis = new \stdClass();
        $account = Account::findOrFail($request->query('account'));

        $analysis->expenses = $this->getMonthlyExpenses($account);
        $analysis->amount = $account->amount;
        $analysis->movements = $this->getMonthlyMovements($account);
        $analysis->forecast = $this->getMonthlyForecast();
        $analysis->expensePercent = round(($analysis->expenses / $analysis->forecast) * 100, 2);
        $analysis->forecastExpenses = $this->getMonthlyForecastExpenses($account);

        return response()->json($analysis);
    }

    /**
     * Get monthly expenses
     */
    private function getMonthlyExpenses($account): int
    {
        $now = \Carbon\Carbon::now();
        $startOfMonth = $now->startOfMonth()->toDateTimeString();
        $endOfMonth = $now->endOfMonth()->toDateTimeString();

        return Movement::where('type', 'expense')
            ->where('account_id', $account->id)
            ->whereBetween('date', [$startOfMonth, $endOfMonth])
            ->sum('amount');
    }

    /**
     * Get monthly movements
     */
    private function getMonthlyMovements($account)
    {
        $now = \Carbon\Carbon::now();
        $startOfMonth = $now->startOfMonth()->toDateTimeString();
        $endOfMonth = $now->endOfMonth()->toDateTimeString();

        return Movement::where('account_id', $account->id)
            ->whereBetween('date', [$startOfMonth, $endOfMonth])
            ->orderBy('date', 'desc')
            ->with('category', 'account')
            ->get();
    }

    /**
     * Get monthly forecast
     */
    private function getMonthlyForecast()
    {
        return Category::sum('forecast');
    }

    /**
     * Get monhtly forecast expenses
     */
    private function getMonthlyForecastExpenses($account)
    {
        $now = \Carbon\Carbon::now();
        $startOfMonth = $now->startOfMonth()->toDateTimeString();
        $endOfMonth = $now->endOfMonth()->toDateTimeString();

        return Movement::where('type', 'expense')
            ->where('account_id', $account->id)
            ->whereBetween('date', [$startOfMonth, $endOfMonth])
            ->join('categories', 'movements.category_id', '=', 'categories.id')
            ->groupBy('categories.id', 'categories.name', 'categories.forecast', 'categories.icon', 'categories.color')
            ->select('categories.name', DB::raw('SUM(movements.amount) as spent'), DB::raw('MAX(categories.forecast) as forecast'), 'categories.icon', 'categories.color', DB::raw('(MAX(categories.forecast) - SUM(movements.amount)) as remaining'))
            ->get();
    }
}
