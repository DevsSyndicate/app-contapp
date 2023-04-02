<?php

namespace App\Listeners;

use App\Events\MovementDeleted;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;
use App\Models\Account;

class UpdateAccountOnMovementDelete
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
    public function handle(MovementDeleted $event): void
    {
        $isIncome = $event->movement->type == 'income';
        $amount = $event->movement->amount;
        $accountId = $event->movement->account_id;

        if ($isIncome) {
            Account::where('id', $accountId)->decrement('amount', $amount);
        } else {
            Account::where('id', $accountId)->increment('amount', $amount);
        }
    }
}
