import { Observable } from 'rxjs';

import { ApiUser } from '../models/user.model';

/**
 * User adapter interface
 */
export interface UserAdapterInterface {

    /**
     * Call get user Use Case
     */
    getUser: () => Observable<ApiUser>;

}
