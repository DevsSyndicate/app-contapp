import { Observable } from 'rxjs';

import { AuthenticationData, JwtResponse } from '../models/authentication.models';

/**
 * Authentication service interface
 */
export interface AuthenticationServiceInterface {
    /**
     * Get CSRF cookie protection
     */
    csrfCookie: () => Observable<any>;

    /**
	 * Login
	 */
    login: (data: AuthenticationData) => Observable<JwtResponse>;

    /**
	 * Logout
	 */
    logout: () => Observable<void>;
}
