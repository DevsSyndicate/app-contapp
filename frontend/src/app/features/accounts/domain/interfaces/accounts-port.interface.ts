import { Observable } from 'rxjs';

import { Account } from '../models/account.model';

/**
 * Accounts port interface
 */
export interface AccountsPortInterface {
    /**
     * Call get accounts list Use Case
     */
    getList: () => Observable<Account[]>;

    /**
     * Call get account Use Case
     */
    get: (id: string) => Observable<Account>;

    /**
     * Call create new account Use Case
     */
    create: (accout: Account) => Observable<Account>;

    /**
     * Call update account Use Case
     */
    update: (accout: Account, id: string) => Observable<Account>;

    /**
     * Call delete account Use Case
     */
    delete: (id: string) => Observable<boolean>;

}
