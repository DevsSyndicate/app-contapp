import { Observable } from 'rxjs';

import { ApiUser } from '../models/user.model';

/**
 * User port interface
 */
export interface UserPortInterface {

    /**
     * Call get user Use Case
     */
    getUser: () => Observable<ApiUser>;

}
