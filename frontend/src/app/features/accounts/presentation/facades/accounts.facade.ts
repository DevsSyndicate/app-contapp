import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { getAccounts, getEditingAccount, getIsEditingAccount, getSubmittedFormStatus } from '../../application/state/accounts.selectors';
import { AccountsPresentationFacadeInterface } from '../../domain/interfaces/accounts-presentation-facade.interface';
import { Account } from '../../domain/models/account.model';
import { DeleteAccount, SubmitAccountForm } from '../../domain/state/accounts.actions';
import { AccountsState } from '../../domain/state/accounts.state';

@Injectable()

/**
 * Accounts presentation facade
 */
export class AccountsPresentationFacade implements AccountsPresentationFacadeInterface {
    constructor(private readonly store: Store<AccountsState>) {}

    public getAccounts(): Observable<Account[]> {
        return this.store.select(getAccounts);
    }

    public deleteAccount(id: string) {
        this.store.dispatch(DeleteAccount({ id }));
    }

    public getFormSubmitted(): Observable<boolean> {
        return this.store.select(getSubmittedFormStatus);
    }

    public getIsEditing(): Observable<boolean> {
        return this.store.select(getIsEditingAccount);
    }

    public getEditingAccount(): Observable<Account> {
        return this.store.select(getEditingAccount);
    }

    public submitForm(formValues: Account): void {
        this.store.dispatch(SubmitAccountForm({ formValues }));
    }
}
