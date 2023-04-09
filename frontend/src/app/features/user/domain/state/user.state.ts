import { User } from '../models/user.model';

export interface UserState {
    loaded: boolean;
    loading: boolean;
    value: {
        user: User;
        isLogged: boolean;
    };
}

export const userInitialState: UserState = {
    loaded: false,
    loading: false,
    value: {
        user: null,
        isLogged: null,
    },
};
