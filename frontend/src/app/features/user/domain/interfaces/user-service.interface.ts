import { Observable } from 'rxjs';

import { ApiUser } from '../models/user.model';

/**
 * User service interface
 */
export interface UserServiceInterface {
    /**
     * Get user
     */
    getUser: () => Observable<ApiUser>;
}
