import { Category } from '../models/category.model';

export interface CategoriesState {
    loaded: boolean;
    loading: boolean;
    values: {
        data: Category[];
    };
    edition: {
        formIsSubmitted: boolean;
        isEditing: boolean;
        editingCategory: Category;
    };
}

export const categoriesInitialState: CategoriesState = {
    loaded: false,
    loading: false,
    values: {
        data: null,
    },
    edition: {
        formIsSubmitted: false,
        isEditing: false,
        editingCategory: null,
    },
};
