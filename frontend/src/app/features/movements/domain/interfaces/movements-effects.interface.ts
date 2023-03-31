import { Action } from '@ngrx/store';
import { Observable } from 'rxjs';

/**
 * Movements effects interface
 */
export interface MovementsEffectsInterface {
    /**
	 * Dispatch action to load movements when enter to the section
	 */
    loadMovementsOnRouteEnter$: Observable<Action>;

    /**
	 * Dispatch action to load categories when enter to the add or add form
	 */
    loadCategoriesOnAddOrEditFormEnter$: Observable<Action>;

    /**
	 * Dispatch action to load accounts when enter to the add or edit form
	 */
    loadAccountsOnAddOrEditFormEnter$: Observable<Action>;

    /**
	 * Dispatch action to load one movement when enter to the edit form
	 */
    loadMovementOnEditingFormEnter$: Observable<Action>;

    /**
	 * Load movements
	 */
    loadMovements$: Observable<Action>;

    /**
	 * Load movement
	 */
    loadMovement$: Observable<Action>;

    /**
	 * Delete movement
	 */
    deleteMovement$: Observable<Action>;

    /**
	 * Add new movement on submit form
	 */
    submitMovementFormForAddNewMovement$: Observable<Action>;

    /**
	 * Edit movement on submit form
	 */
    submitMovementFormForEditMovement$: Observable<Action>;

    /**
	 * On submit form success, redirecto to movements list
	 */
    redirectToListOnSubmitSuccess$: Observable<Action>;

}
