import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { getAccounts } from '@features/accounts/application/state/accounts.selectors';
import { Account } from '@features/accounts/domain/models/account.model';
import { AccountsState } from '@features/accounts/domain/state/accounts.state';

@Component({
    selector: 'app-movements-accounts-resume',
    templateUrl: './accounts-resume.component.html',
})

/**
 * Movements accounts resume component
 */
export class MovementsAccountsComponent {
    public accounts$: Observable<Account[]> = this.store.select(getAccounts);

    constructor(private readonly store: Store<AccountsState>) {

    }
}
