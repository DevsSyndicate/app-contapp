import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { Category } from '../../../domain/models/category.model';
import { CategoriesPresentationFacade } from '../../facades/categories.facade';

import { ValidationError } from '@shared/components/validation-errors/validation.model';

@Component({
    selector: 'app-categories-form',
    templateUrl: './form.component.html',
})

/**
 * Categories form component
 */
export class CategoriesFormComponent {
    public submitted$: Observable<boolean> = this.categoriesFacade.getFormSubmitted();

    public isEditing$: Observable<boolean> = this.categoriesFacade.getIsEditing();

    public editingCategory$: Observable<Category> = this.categoriesFacade.getEditingCategory().pipe(
        tap((category: Category) => {
            this.categoryForm.patchValue(category);
        })
    );

    public categoryForm: FormGroup = this.createForm();

    public formErrors!: ValidationError;

    constructor(
        private readonly categoriesFacade: CategoriesPresentationFacade,
    ) {}

    /**
	 * Form getter
	 */
    public get form() {
        return this.categoryForm.controls;
    }

    /**
     * On color change
     */
    public onColorChange(color: string): void {
        this.categoryForm.patchValue({ color });
    }

    /**
	 * On form submit
	 */
    public onSubmit(): void {
        this.categoriesFacade.submitForm(this.categoryForm.value);
    }

    /**
	 * Create the form
	 */
    private createForm() {
        return new FormGroup({
            name: new FormControl('', { nonNullable: true }),
            color: new FormControl('', { nonNullable: true }),
            icon: new FormControl('', { nonNullable: true }),
            forecast: new FormControl('', { nonNullable: true }),
        });
    }
}
