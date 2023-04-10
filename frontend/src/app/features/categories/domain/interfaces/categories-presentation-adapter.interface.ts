import { Observable } from 'rxjs';

import { Category } from '../models/category.model';

/**
 * Categories presentation adapter interface
 */
export interface CategoriesPresentationAdapterInterface {
    /**
     * Get list of catyegories
     */
    getCategories: () => Observable<Category[]>;

    /**
     * Delete a category
     */
    deleteCategory: (id: string) => any;

    /**
     * Get form submit status
     */
    getFormSubmitted: () => Observable<boolean>;

    /**
     * Get category edition status
     */
    getIsEditing: () => Observable<boolean>;

    /**
     * Get editing category
     */
    getEditingCategory: () => Observable<Category>;

    /**
     * Submit category form
     */
    submitForm: (formValues: Category) => void;
}
