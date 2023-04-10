import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { getCategories, getEditingCategory, getIsEditingCategory, getSubmittedFormStatus } from '../../application/state/categories.selectors';
import { CategoriesPresentationFacadeInterface } from '../../domain/interfaces/categories-presentation-facade.interface';
import { Category } from '../../domain/models/category.model';
import { DeleteCategory, SubmitCategoryForm } from '../../domain/state/categories.actions';
import { CategoriesState } from '../../domain/state/categories.state';

@Injectable()

/**
 * Categories presentation facade
 */
export class CategoriesPresentationFacade implements CategoriesPresentationFacadeInterface {
    constructor(private readonly store: Store<CategoriesState>) {}

    public getCategories(): Observable<Category[]> {
        return this.store.select(getCategories);
    }

    public deleteCategory(id: string) {
        this.store.dispatch(DeleteCategory({ id }));
    }

    public getFormSubmitted(): Observable<boolean> {
        return this.store.select(getSubmittedFormStatus);
    }

    public getIsEditing(): Observable<boolean> {
        return this.store.select(getIsEditingCategory);
    }

    public getEditingCategory(): Observable<Category> {
        return this.store.select(getEditingCategory);
    }

    public submitForm(formValues: Category): void {
        this.store.dispatch(SubmitCategoryForm({ formValues }));
    }
}
