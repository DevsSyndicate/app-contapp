<?php

namespace App\Accounts\Infrastructure\Listeners;

use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;
use App\Movements\Infrastructure\Events\MovementCreated;
use App\Accounts\Domain\Models\Account;

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
