import { createSelector } from '@ngrx/store';

import { Category } from '../../domain/models/category.model';
import { CategoriesState } from '../../domain/state/categories.state';

import { getCategoriesState } from './categories.selectors';

export const getCategoriesForSelectPublic = createSelector(getCategoriesState, (state: CategoriesState) =>
    state.values?.data?.map((categegory: Category) => ({ label: categegory.name, value: categegory.id })));
