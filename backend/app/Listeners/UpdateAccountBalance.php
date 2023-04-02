<?php

namespace App\Listeners;

use App\Events\MovementCreated;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;
use App\Models\Account;

class UpdateAccountBalance
{
    /**
     * Create the event listener.
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     */
    public function handle(MovementCreated $event): void
    {
        $movement = $event->movement;

        $account = Account::findOrFail($movement->account_id);

        if ($movement->type === 'income') {
            $account->amount += $movement->amount;
        } elseif ($movement->type === 'expense') {
            $account->amount -= $movement->amount;
        }

        $account->save();
    }
}
