import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { IDatePickerConfig } from 'ng2-date-picker';
import { Observable } from 'rxjs';
import { filter, tap } from 'rxjs/operators';

import { MovementFormData } from '../../../domain/models/movement.model';
import { MovementsPresentationFacade } from '../../facades/movements.facade';

import { DatesService } from '@core/application/services/dates.service';
import { ValidationError } from '@shared/components/validation-errors/validation.model';

@Component({
    selector: 'app-movements-form',
    templateUrl: './form.component.html',
})

/**
 * Movements form component
 */
export class MovementsFormComponent {
    public submitted$: Observable<boolean> = this.movementsFacade.getFormSubmitted();

    public isEditing$: Observable<boolean> = this.movementsFacade.getIsEditing();

    public editingMovement$: Observable<MovementFormData> = this.movementsFacade.getEditingMovement().pipe(
        filter((movement) => !!movement),
        tap((movement: MovementFormData) => {
            this.movementForm.patchValue(movement);
        })
    );

    public categories$: Observable<any[]> = this.movementsFacade.getCategoriesForSelect();

    public accounts$: Observable<any[]> = this.movementsFacade.getAcountsForSelect();

    public datePickerConfig: IDatePickerConfig = this.movementsFacade.getDatePickerConfig();

    public movementForm: FormGroup = this.createForm();

    public formErrors!: ValidationError;

    constructor(
        private readonly datesService: DatesService,
        private readonly movementsFacade: MovementsPresentationFacade
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
        this.movementsFacade.submitForm(this.movementForm.value);
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
