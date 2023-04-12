import { createSelector } from '@ngrx/store';

import { Account } from '../../domain/models/account.model';
import { AccountsState } from '../../domain/state/accounts.state';

import { getAccountsState } from './accounts.selectors';

export const getAccountsPublic = createSelector(getAccountsState, (state: AccountsState) => state.values?.data);

export const getAccountsForSelectPublic = createSelector(getAccountsState, (state: AccountsState) =>
    state.values?.data?.map((account: Account) => ({ label: account.name, value: account.id })));
