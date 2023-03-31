import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { getEditingCategory, getIsEditingCategory, getSubmittedFormStatus } from '../../../application/state/categories.selectors';
import { Category } from '../../../domain/models/category.model';
import { SubmitCategoryForm } from '../../../domain/state/categories.actions';
import { CategoriesState } from '../../../domain/state/categories.state';

import { ValidationError } from '@shared/components/validation-errors/validation.model';

@Component({
    selector: 'app-categories-form',
    templateUrl: './form.component.html',
})

/**
 * Categories form component
 */
export class CategoriesFormComponent {
    public submitted$: Observable<boolean> = this.store.select(getSubmittedFormStatus);

    public isEditing$: Observable<boolean> = this.store.select(getIsEditingCategory);

    public editingCategory$: Observable<Category> = this.store.select(getEditingCategory).pipe(
        tap((category: Category) => {
            this.categoryForm.patchValue(category);
        })
    );

    public categoryForm: FormGroup = this.createForm();

    public formErrors!: ValidationError;

    constructor(private readonly store: Store<CategoriesState>) {}

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
        this.store.dispatch(SubmitCategoryForm({ formValues: this.categoryForm.value }));
    }

    /**
	 * Create the form
	 */
    private createForm() {
        return new FormGroup({
            name: new FormControl('', { nonNullable: true }),
            color: new FormControl('', { nonNullable: true }),
            icon: new FormControl('', { nonNullable: true }),
        });
    }
}
