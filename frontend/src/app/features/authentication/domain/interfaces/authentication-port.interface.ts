import { Observable } from 'rxjs';

import { AuthenticationData, AuthenticationResponse } from '../models/authentication.models';

/**
 * Authentication port interface
 */
export interface AuthenticationPortInterface {
    /**
     * Call get CSRF Cookie Use Case
     */
    csrfCookie: () => Observable<any>;

    /**
     * Call login Use Case
     */
    login: (data: AuthenticationData) => Observable<AuthenticationResponse>;

    /**
     * Call logout Use Case
     */
    logout: () => Observable<void>;

}
