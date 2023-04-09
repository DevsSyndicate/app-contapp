import { Action } from '@ngrx/store';
import { Observable } from 'rxjs';

/**
 * User effects interface
 */
export interface UserEffectsInterface {

    /**
	 * Load user on restricted zone access
	 */
    loadUserOnRestrictedZoneAccess$: Observable<Action>;

    /**
	 * Load user from  Api
	 */
    loadUser$: Observable<Action>;

}
