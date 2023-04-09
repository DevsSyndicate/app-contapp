import { createFeatureSelector, createSelector } from '@ngrx/store';

import { UserState } from '../../domain/state/user.state';

export const getUserState = createFeatureSelector<UserState>('user');

export const getUser = createSelector(getUserState, (state: UserState) => state.value?.user);
