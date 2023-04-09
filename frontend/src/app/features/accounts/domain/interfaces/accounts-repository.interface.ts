import { Observable } from 'rxjs';

import { Account } from '../models/account.model';

/**
 * Repository to interact with Accounts
 */
export interface AccountsRepositoryInterface {
    /**
     * Get list of accounts
     */
    getList: (url: string) => Observable<Account[]>;

    /**
     * Get one account
     */
    get: (url: string, id: string) => Observable<Account>;

    /**
     * Create account
     */
    create: <Account>(url: string, body: any) => Observable<Account>;

    /**
     * Update account
     */
    update: <Account>(url: string, body: Account, id: string) => Observable<Account>;

    /**
     * Delete account
     */
    delete: (url: string, id: string) => Observable<boolean>;
}
