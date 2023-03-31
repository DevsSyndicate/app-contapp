import { Action } from '@ngrx/store';
import { Observable } from 'rxjs';

/**
 * Categories effects interface
 */
export interface CategoriesEffectsInterface {
    /**
	 * Dispatch action to load categories when enter to the section
	 */
    loadCategoriesOnRouteEnter$: Observable<Action>;

    /**
	 * Dispatch action to load one category when enter to the edit form
	 */
    loadCategoryOnEditingFormEnter$: Observable<Action>;

    /**
	 * Load categories
	 */
    loadCategories$: Observable<Action>;

    /**
	 * Load category
	 */
    loadCategory$: Observable<Action>;

    /**
	 * Delete category
	 */
    deleteCategory$: Observable<Action>;

    /**
	 * Add new category on submit form
	 */
    submitCategoryFormForAddNewCategory$: Observable<Action>;

    /**
	 * Edit category on submit form
	 */
    submitCategoryFormForEditCategory$: Observable<Action>;

    /**
	 * On submit form success, redirect to categories list
	 */
    redirectToListOnSubmitSuccess$: Observable<Action>;
}
