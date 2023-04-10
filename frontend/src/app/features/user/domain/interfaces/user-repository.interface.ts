import { Observable } from 'rxjs';

import { ApiUser } from '../models/user.model';

/**
 * Repository to interact with User
 */
export interface UserRepositoryInterface {

    /**
     * Get one user
     */
    get: (url: string) => Observable<ApiUser>;

}
