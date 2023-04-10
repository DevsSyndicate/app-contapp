import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { Account } from '../../../domain/models/account.model';
import { AccountsPresentationAdapter } from '../../adapters/accounts.adapter';

@Component({
    selector: 'app-accounts-table',
    templateUrl: './table.component.html',
})

/**
 * Accounts table component
 */
export class AccountsTableComponent {
    public accounts$: Observable<Account[]> = this.accountsAdapter.getAccounts();

    constructor(private readonly accountsAdapter: AccountsPresentationAdapter) {}

    /**
	 * Delete account
	 */
    public delete(id: string): void {
        this.accountsAdapter.deleteAccount(id);
    }
}
