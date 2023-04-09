import { createSelector } from '@ngrx/store';

import { UserState } from '../../domain/state/user.state';

import { getUserState } from './user.selectors';

export const getUserPublic = createSelector(getUserState, (state: UserState) => state.value?.user);
