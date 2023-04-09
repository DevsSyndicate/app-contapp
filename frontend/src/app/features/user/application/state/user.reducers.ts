import { createReducer, on } from '@ngrx/store';

import { LoadUserSuccess } from '../../domain/state/user.actions';
import { userInitialState } from '../../domain/state/user.state';

export const userReducer = createReducer(
    userInitialState,

    on(LoadUserSuccess, (state, { user }) => ({
        ...state,
        loading: false,
        loaded: true,
        value: {
            user,
            isLogged: true,
        },
    })),
);
