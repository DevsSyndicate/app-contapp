import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { getEditingAccount, getIsEditingAccount, getSubmittedFormStatus } from '../../../application/state/accounts.selectors';
import { Account } from '../../../domain/models/account.model';
import { SubmitAccountForm } from '../../../domain/state/accounts.actions';
import { AccountsState } from '../../../domain/state/accounts.state';

import { ValidationError } from '@shared/components/validation-errors/validation.model';

@Component({
    selector: 'app-accounts-form',
    templateUrl: './form.component.html',
})

/**
 * Accounts form component
 */
export class AccountsFormComponent {
    public submitted$: Observable<boolean> = this.store.select(getSubmittedFormStatus);

    public isEditing$: Observable<boolean> = this.store.select(getIsEditingAccount);

    public editingAccount$: Observable<Account> = this.store.select(getEditingAccount).pipe(
        tap((account: Account) => {
            this.accountForm.patchValue(account);
        })
    );

    public accountForm: FormGroup = this.createForm();

    public formErrors!: ValidationError;

    constructor(private readonly store: Store<AccountsState>) {}

    /**
	 * Form getter
	 */
    public get form() {
        return this.accountForm.controls;
    }

    /**
	 * On form submit
	 */
    public onSubmit(): void {
        this.store.dispatch(SubmitAccountForm({ formValues: this.accountForm.value }));
    }

    /**
	 * Create the form
	 */
    private createForm() {
        return new FormGroup({
            name: new FormControl('', { nonNullable: true }),
        });
    }
}
