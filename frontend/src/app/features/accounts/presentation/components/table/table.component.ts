import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { getAccounts } from '../../../application/state/accounts.selectors';
import { Account } from '../../../domain/models/account.model';
import { DeleteAccount } from '../../../domain/state/accounts.actions';
import { AccountsState } from '../../../domain/state/accounts.state';

@Component({
    selector: 'app-accounts-table',
    templateUrl: './table.component.html',
})

/**
 * Accounts table component
 */
export class AccountsTableComponent {
    public accounts$: Observable<Account[]> = this.store.select(getAccounts);

    constructor(private readonly store: Store<AccountsState>) {}

    /**
	 * Delete account
	 */
    public delete(id: string): void {
        this.store.dispatch(DeleteAccount({ id }));
    }
}
