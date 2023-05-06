import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { IDatePickerConfig } from 'ng2-date-picker';
import { Observable } from 'rxjs';
import { filter, tap } from 'rxjs/operators';

import { MovementFormData } from '../../../domain/models/movement.model';
import { MovementsPresentationAdapter } from '../../adapters/movements.adapter';

import { DatesUseCases } from '@core/application/services/dates.use-cases';
import { ValidationError } from '@shared/components/validation-errors/validation.model';

@Component({
    selector: 'app-movements-form',
    templateUrl: './form.component.html',
})

/**
 * Movements form component
 */
export class MovementsFormComponent {
    public submitted$: Observable<boolean> = this.movementsAdapter.getFormSubmitted();

    public isEditing$: Observable<boolean> = this.movementsAdapter.getIsEditing();

    public editingMovement$: Observable<MovementFormData> = this.movementsAdapter.getEditingMovement().pipe(
        filter((movement) => !!movement),
        tap((movement: MovementFormData) => {
            this.movementForm.patchValue(movement);
        })
    );

    public categories$: Observable<any[]> = this.movementsAdapter.getCategoriesForSelect();

    public accounts$: Observable<any[]> = this.movementsAdapter.getAcountsForSelect();

    public datePickerConfig: IDatePickerConfig = this.movementsAdapter.getDatePickerConfig();

    public movementForm: FormGroup = this.createForm();

    public formErrors!: ValidationError;

    constructor(
        private readonly datesUseCases: DatesUseCases,
        private readonly movementsAdapter: MovementsPresentationAdapter
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
        this.movementsAdapter.submitForm(this.movementForm.value);
    }

    /**
	 * Create the form
	 */
    private createForm() {
        return new FormGroup({
            name: new FormControl('', { nonNullable: true }),
            date: new FormControl(this.datesUseCases.getCurrentDtae(), { nonNullable: true }),
            type: new FormControl('', { nonNullable: true }),
            amount: new FormControl('', { nonNullable: true }),
            category: new FormControl('', { nonNullable: true }),
            account: new FormControl('', { nonNullable: true }),
        });
    }
}
