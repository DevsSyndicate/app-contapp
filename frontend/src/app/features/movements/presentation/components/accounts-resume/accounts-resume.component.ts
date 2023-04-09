import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { AccountsPublicModels, AccountsPublicSelectors } from '@features/accounts/public.api';

@Component({
    selector: 'app-movements-accounts-resume',
    templateUrl: './accounts-resume.component.html',
})

/**
 * Movements accounts resume component
 */
export class MovementsAccountsComponent {
    public accounts$: Observable<AccountsPublicModels.AccountPublic[]> = this.store.select(
        AccountsPublicSelectors.getAccountsPublic
    );

    constructor(private readonly store: Store) {

    }
}
