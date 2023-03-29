import { Observable } from 'rxjs';

import { Account } from '../models/account.model';

/**
 * Accounts service interface
 */
export interface AccountsServiceInterface {
    /**
	 * Get all accounts
	 */
    getList: () => Observable<Account[]>;

    /**
	 * Get account
	 */
    get: (id: string) => Observable<Account>;

    /**
	 * Add account
	 */
    add: (resource: Account) => Observable<Account>;

    /**
	 * Update account
	 */
    update: (resource: Account, id: string) => void;

    /**
	 * Delete account
	 */
    delete: (id: string) => void;

    /**
	 * Get accounts list for selects
	 */
    getListSelect: () => Observable<Array<{ id: string; text: string }>>;
}
