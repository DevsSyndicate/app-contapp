import { Observable } from 'rxjs';

import { AuthenticationData, AuthenticationResponse } from '../models/authentication.models';

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
    login: (data: AuthenticationData) => Observable<AuthenticationResponse>;

    /**
	 * Logout
	 */
    logout: () => Observable<void>;
}
