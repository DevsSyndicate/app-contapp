import { Action } from '@ngrx/store';
import { Observable } from 'rxjs';

/**
 * Accounts effects interface
 */
export interface AccountsEffectsInterface {
    /**
	 * Dispatch action to load accounts when enter to the section
	 */
    loadAccountsOnRouteEnter$: Observable<Action>;

    /**
	 * Dispatch action to load one account when enter to the edit form
	 */
    loadAccountOnEditingFormEnter$: Observable<Action>;

    /**
	 * Load accounts
	 */
    loadAccounts$: Observable<Action>;

    /**
	 * Load account
	 */
    loadAccount$: Observable<Action>;

    /**
	 * Delete account
	 */
    deleteAccount$: Observable<Action>;

    /**
	 * Add new account on submit form
	 */
    submitAccountFormForAddNewAccount$: Observable<Action>;

    /**
	 * Edit account on submit form
	 */
    submitAccountFormForEditAccount$: Observable<Action>;

    /**
	 * On submit form success, redirect to accounts list
	 */
    redirectToListOnSubmitSuccess$: Observable<Action>;
}
