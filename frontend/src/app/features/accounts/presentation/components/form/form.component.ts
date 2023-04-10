import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { Account } from '../../../domain/models/account.model';
import { AccountsPresentationAdapter } from '../../adapters/accounts.adapter';

import { ValidationError } from '@shared/components/validation-errors/validation.model';

@Component({
    selector: 'app-accounts-form',
    templateUrl: './form.component.html',
})

/**
 * Accounts form component
 */
export class AccountsFormComponent {
    public submitted$: Observable<boolean> = this.accountsAdapter.getFormSubmitted();

    public isEditing$: Observable<boolean> = this.accountsAdapter.getIsEditing();

    public editingAccount$: Observable<Account> = this.accountsAdapter.getEditingAccount().pipe(
        tap((account: Account) => {
            this.accountForm.patchValue(account);
        })
    );

    public accountForm: FormGroup = this.createForm();

    public formErrors!: ValidationError;

    constructor(private readonly accountsAdapter: AccountsPresentationAdapter) {}

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
        this.accountsAdapter.submitForm(this.accountForm.value);
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
