import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup, UntypedFormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';

import { Login } from '../../../domain/state/authentication.actions';

@Component({
    selector: 'app-authentication-form',
    templateUrl: './form.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})

/**
 * Login form component
 */
export class AuthenticationFormComponent {
    public loginForm: FormGroup = this.createForm();

    public submitted: boolean = false;

    constructor(private readonly store: Store) {}

    /**
	 * Form getter
	 */
    public get form() {
        return this.loginForm.controls;
    }

    /**
	 * On form submit
	 */
    public onSubmit(): void {
        this.submitted = true;
        this.store.dispatch(Login({ data: this.loginForm.value }));
    }

    /**
	 * Function to create the form
	 */
    private createForm(): UntypedFormGroup {
        return new FormGroup({
            email: new FormControl('', { nonNullable: true }),
            password: new FormControl('', { nonNullable: true }),
        });
    }
}
