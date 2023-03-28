import { createAction } from '@ngrx/store';

export enum AuthenticationPublicActionTypes {
    LOGOUT = '[Authentication] Logout',
}

export const Logout = createAction(AuthenticationPublicActionTypes.LOGOUT);
