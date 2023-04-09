import { Observable } from 'rxjs';

import { Account } from '../models/account.model';

/**
 * Accounts presentation facade interface
 */
export interface AccountsPresentationFacadeInterface {
    /**
     * Get list of accounts
     */
    getAccounts: () => Observable<Account[]>;

    /**
     * Delete an account
     */
    deleteAccount: (id: string) => any;

    /**
     * Get form submit status
     */
    getFormSubmitted: () => Observable<boolean>;

    /**
     * Get account edition status
     */
    getIsEditing: () => Observable<boolean>;

    /**
     * Get editing account
     */
    getEditingAccount: () => Observable<Account>;

    /**
     * Submit account form
     */
    submitForm: (formValues: Account) => void;
}
