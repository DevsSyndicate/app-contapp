import { createAction, props } from '@ngrx/store';

import { Category } from '../models/category.model';

export enum CategoriesActionTypes {
    LOAD_CATEGORIES = '[Categories] Load categories',
    LOAD_CATEGORIES_SUCCESS = '[Categories] Load categories success',
    LOAD_CATEGORIES_ERROR = '[Categories] Load categories error',

    LOAD_CATEGORY = '[Categories] Load category',
    LOAD_CATEGORY_SUCCESS = '[Categories] Load category success',
    LOAD_CATEGORY_ERROR = '[Categories] Load category error',

    DELETE_CATEGORY = '[Categories] Delete category',

    SUBMIT_CATEGORY_FORM = '[Categories] Submit category form',
    SUBMIT_CATEGORY_FORM_SUCCESS = '[Categories] Submit category form success',
}

export const LoadCategories = createAction(CategoriesActionTypes.LOAD_CATEGORIES);
export const LoadCategoriesSuccess = createAction(
    CategoriesActionTypes.LOAD_CATEGORIES_SUCCESS,
    props<{ categories: Category[] }>()
);
export const LoadCategoriesError = createAction(CategoriesActionTypes.LOAD_CATEGORIES_ERROR);

export const LoadCategory = createAction(CategoriesActionTypes.LOAD_CATEGORY, props<{ id: string }>());
export const LoadCategorySuccess = createAction(
    CategoriesActionTypes.LOAD_CATEGORY_SUCCESS,
    props<{ category: Category }>()
);
export const LoadCategoryError = createAction(CategoriesActionTypes.LOAD_CATEGORY_ERROR);

export const DeleteCategory = createAction(CategoriesActionTypes.DELETE_CATEGORY, props<{ id: string }>());

export const SubmitCategoryForm = createAction(
    CategoriesActionTypes.SUBMIT_CATEGORY_FORM,
    props<{ formValues: Category }>()
);
export const SubmitCategoryFormSuccess = createAction(CategoriesActionTypes.SUBMIT_CATEGORY_FORM_SUCCESS);
