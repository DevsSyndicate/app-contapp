import { createAction, props } from '@ngrx/store';

import { AuthenticationData } from '../models/authentication.models';

export enum AuthenticationActionTypes {
    LOGIN = '[Authentication] Login',
    LOGIN_SUCCESS = '[Authentication] Login success',
    LOGIN_ERROR = '[Authentication] Login error',

    LOGOUT_SUCCESS = '[Authentication] Logout success',
    LOGOUT_ERROR = '[Authentication] Logout error',
}

export const Login = createAction(AuthenticationActionTypes.LOGIN, props<{ data: AuthenticationData }>());
export const LoginSuccess = createAction(AuthenticationActionTypes.LOGIN_SUCCESS, props<{ authToken: string }>());
export const LoginError = createAction(AuthenticationActionTypes.LOGIN_ERROR);

export const LogoutSuccess = createAction(AuthenticationActionTypes.LOGOUT_SUCCESS);
export const LogoutError = createAction(AuthenticationActionTypes.LOGOUT_ERROR);
