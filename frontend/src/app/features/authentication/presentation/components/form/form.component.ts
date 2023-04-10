import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup, UntypedFormGroup } from '@angular/forms';

import { AuthenticationPresentationAdapter } from '../../adapters/authentication.adapter';

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

    constructor(private readonly authenticationAdapter: AuthenticationPresentationAdapter) {}

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
        this.authenticationAdapter.login(this.loginForm.value);
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
