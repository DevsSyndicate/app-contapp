import { createFeatureSelector, createSelector } from '@ngrx/store';

import { Category } from '../../domain/models/category.model';
import { CategoriesState } from '../../domain/state/categories.state';

export const getCategoriesState = createFeatureSelector<CategoriesState>('categories');

export const getCategories = createSelector(getCategoriesState, (state: CategoriesState) => state.values?.data);

export const getCategoriesForSelect = createSelector(getCategoriesState, (state: CategoriesState) =>
    state.values?.data?.map((categegory: Category) => ({ label: categegory.name, value: categegory.id })));

export const getSubmittedFormStatus = createSelector(getCategoriesState, (state: CategoriesState) =>
    state.edition?.formIsSubmitted);

export const getIsEditingCategory = createSelector(getCategoriesState, (state: CategoriesState) => state.edition?.isEditing);

export const getEditingCategory = createSelector(getCategoriesState, (state: CategoriesState) =>
    state.edition?.editingCategory);
