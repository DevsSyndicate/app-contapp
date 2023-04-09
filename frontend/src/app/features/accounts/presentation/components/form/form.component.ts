import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { Account } from '../../../domain/models/account.model';
import { AccountsPresentationFacade } from '../../facades/accounts.facade';

import { ValidationError } from '@shared/components/validation-errors/validation.model';

@Component({
    selector: 'app-accounts-form',
    templateUrl: './form.component.html',
})

/**
 * Accounts form component
 */
export class AccountsFormComponent {
    public submitted$: Observable<boolean> = this.accountsFacade.getFormSubmitted();

    public isEditing$: Observable<boolean> = this.accountsFacade.getIsEditing();

    public editingAccount$: Observable<Account> = this.accountsFacade.getEditingAccount().pipe(
        tap((account: Account) => {
            this.accountForm.patchValue(account);
        })
    );

    public accountForm: FormGroup = this.createForm();

    public formErrors!: ValidationError;

    constructor(private readonly accountsFacade: AccountsPresentationFacade) {}

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
        this.accountsFacade.submitForm(this.accountForm.value);
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
