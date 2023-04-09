import { createAction } from '@ngrx/store';

export enum CategoriesPublicActionTypes {
    CATEGORIES_PUBLIC_API_LOAD_CATEGORIES = '[Categories Public Api] Load categories',
}

export const LoadCategoriesPublic = createAction(CategoriesPublicActionTypes.CATEGORIES_PUBLIC_API_LOAD_CATEGORIES);
