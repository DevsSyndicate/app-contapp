import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { Account } from '../../../domain/models/account.model';
import { AccountsPresentationFacade } from '../../facades/accounts.facade';

@Component({
    selector: 'app-accounts-table',
    templateUrl: './table.component.html',
})

/**
 * Accounts table component
 */
export class AccountsTableComponent {
    public accounts$: Observable<Account[]> = this.accountsFacade.getAccounts();

    constructor(private readonly accountsFacade: AccountsPresentationFacade) {}

    /**
	 * Delete account
	 */
    public delete(id: string): void {
        this.accountsFacade.deleteAccount(id);
    }
}
