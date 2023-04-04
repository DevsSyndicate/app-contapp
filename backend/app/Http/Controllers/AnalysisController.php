<?php

namespace App\Http\Controllers;

use App\Models\Account;
use App\Models\Movement;
use Illuminate\Http\Request;

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
        $analysis->balance = $account->amount - $this->getMonthlyExpenses($account);
        $analysis->amount = $account->amount;
        $analysis->movements = $this->getMonthlyMovements($account);

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
}
