import { createReducer, on } from '@ngrx/store';

import { LoadCategory, LoadCategories, LoadCategoriesSuccess, LoadCategorySuccess, SubmitCategoryForm } from '../../domain/state/categories.actions';
import { categoriesInitialState } from '../../domain/state/categories.state';

export const categoriesReducer = createReducer(
    categoriesInitialState,

    on(LoadCategories, (state) => ({
        ...state,
        loading: true,
        loaded: false,
        edition: {
            formIsSubmitted: false,
            isEditing: false,
            editingCategory: null,
        },
    })),

    on(LoadCategoriesSuccess, (state, { categories }) => ({
        ...state,
        loading: false,
        loaded: true,
        values: {
            data: categories,
        },
    })),

    on(SubmitCategoryForm, (state) => ({ ...state, edition: { ...state.edition, formIsSubmitted: true } })),

    on(LoadCategory, (state) => ({ ...state, edition: { ...state.edition, isEditing: true } })),

    on(LoadCategorySuccess, (state, { category }) => (
        { ...state, edition: { ...state.edition, editingCategory: category } }
    ))
);
