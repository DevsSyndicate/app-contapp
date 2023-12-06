<?php

namespace App\Accounts\Infrastructure\Controllers;

use App\Core\Infrastructure\Controllers\Controller;
use App\Accounts\Infrastructure\Requests\AccountsRequest;
use App\Models\Account;

class AccountsController extends Controller
{
    /**
     * Get list of accounts
     */
    public function index()
    {
        return Account::all();
    }


    /**
     * Create new account
     */
    public function store(AccountsRequest $request)
    {
        return Account::create($request->validated());
    }

    /**
     * Get one account
     */
    public function show(int $id)
    {
        return Account::find($id);
    }

    /**
     * Update one account
     */
    public function update(AccountsRequest $request, Account $account)
    {
        $account->fill($request->all());

        return $account->save();
    }

    /**
     * Delete account
     */
    public function destroy(Account $account)
    {
        return $account->delete();
    }
}
