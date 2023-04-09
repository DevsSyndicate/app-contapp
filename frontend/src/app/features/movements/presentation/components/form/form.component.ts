import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { IDatePickerConfig } from 'ng2-date-picker';
import { Observable } from 'rxjs';
import { filter, tap } from 'rxjs/operators';

import { getEditingMovement, getIsEditingMovement, getSubmittedFormStatus } from '../../../application/state/momenents.selectors';
import { MovementFormData } from '../../../domain/models/movement.model';
import { SubmitMovementForm } from '../../../domain/state/movements.actions';
import { MovementsState } from '../../../domain/state/movements.state';

import { DatesService } from '@core/application/services/dates.service';
import { AccountsPublicSelectors } from '@features/accounts/public.api';
import { CategoriesPublicSelectors } from '@features/categories/public.api';
import { ValidationError } from '@shared/components/validation-errors/validation.model';

@Component({
    selector: 'app-movements-form',
    templateUrl: './form.component.html',
})

/**
 * Movements form component
 */
export class MovementsFormComponent {
    public submitted$: Observable<boolean> = this.store.select(getSubmittedFormStatus);

    public isEditing$: Observable<boolean> = this.store.select(getIsEditingMovement);

    public editingMovement$: Observable<MovementFormData> = this.store.select(getEditingMovement).pipe(
        filter((movement) => !!movement),
        tap((movement: MovementFormData) => {
            this.movementForm.patchValue(movement);
        })
    );

    public categories$: Observable<any[]> = this.store.select(CategoriesPublicSelectors.getCategoriesForSelectPublic);

    public accounts$: Observable<any[]> = this.store.select(AccountsPublicSelectors.getAccountsForSelectPublic);

    public movementForm: FormGroup = this.createForm();

    public formErrors!: ValidationError;

    public conf: IDatePickerConfig = {
        format: 'DD-MM-YYYY',
        firstDayOfWeek: 'mo',
    };

    public selectedDate = '';

    constructor(
        private readonly store: Store<MovementsState>,
        private readonly datesService: DatesService
    ) {}

    /**
	 * Form getter
	 */
    public get form() {
        return this.movementForm.controls;
    }

    /**
	 * On form submit
	 */
    public onSubmit(): void {
        this.store.dispatch(SubmitMovementForm({ formValues: this.movementForm.value }));
    }

    /**
	 * Create the form
	 */
    private createForm() {
        return new FormGroup({
            name: new FormControl('', { nonNullable: true }),
            date: new FormControl(this.datesService.getCurrentDtae(), { nonNullable: true }),
            type: new FormControl('', { nonNullable: true }),
            amount: new FormControl('', { nonNullable: true }),
            category: new FormControl('', { nonNullable: true }),
            account: new FormControl('', { nonNullable: true }),
        });
    }
}
