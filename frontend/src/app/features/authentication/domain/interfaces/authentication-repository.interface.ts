import { Observable } from 'rxjs';

import { AuthenticationData, AuthenticationResponse } from '../models/authentication.models';

/**
 * Repository to interact with Authentication
 */
export interface AuthenticationRepositoryInterface {
    /**
     * Get CSRF Cookie
     */
    csrfCookie: (url: string) => Observable<any>;

    /**
     * Login user
     */
    login: (url: string, data: AuthenticationData) => Observable<AuthenticationResponse>;

    /**
     * Logout user
     */
    logout: (url: string) => Observable<void>;

}
