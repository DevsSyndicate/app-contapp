import { Action } from '@ngrx/store';
import { Observable } from 'rxjs';

/**
 * Authentication effects interface
 */
export interface AuthenticationEffectsInterface {
    /**
	 * Login user to the application
	 */
    login$: Observable<Action>;

    /**
	 * Set authentication token in LocalStorage
	 */
    setAuthenticationTokenInLocalStorage$: Observable<Action>;

    /**
	 * Redirect to dashboard on login success
	 */
    redirectToDashboardOnLoginSuccess$: Observable<Action>;

    /**
	 * Logout user off the application
	 */
    logout$: Observable<Action>;

    /**
	 * Redirecto to login on logout success
	 */
    redirectToLoginOnLogoutSuccess$: Observable<Action>;
}
