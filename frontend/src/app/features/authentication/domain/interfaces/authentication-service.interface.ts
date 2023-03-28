import { Observable } from 'rxjs';

import { AuthenticationData, JwtResponse } from '../models/authentication.models';

/**
 * Authentication service interface
 */
export interface AuthenticationServiceInterface {
    /**
	 * Login
	 */
    login: (data: AuthenticationData) => Observable<JwtResponse>;

    /**
	 * Logout
	 */
    logout: () => Observable<void>;
}
