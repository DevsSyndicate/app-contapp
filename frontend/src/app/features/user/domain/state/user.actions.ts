import { createAction, props } from '@ngrx/store';

import { User } from '../models/user.model';

export enum UserActionTypes {
    LOAD_USER = '[User] Load user',
    LOAD_USER_SUCCESS = '[User] Load user success',
    LOAD_USER_ERROR = '[User] Load user error',
}

export const LoadUser = createAction(UserActionTypes.LOAD_USER);
export const LoadUserSuccess = createAction(UserActionTypes.LOAD_USER_SUCCESS, props<{ user: User }>());
export const LoadUserError = createAction(UserActionTypes.LOAD_USER_ERROR);
