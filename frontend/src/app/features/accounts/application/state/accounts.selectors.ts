import { createFeatureSelector, createSelector } from '@ngrx/store';

import { Account } from '../../domain/models/account.model';
import { AccountsState } from '../../domain/state/accounts.state';

export const getAccountsState = createFeatureSelector<AccountsState>('accounts');

export const getAccounts = createSelector(getAccountsState, (state: AccountsState) => state.values?.data);

export const getAccountsForSelect = createSelector(getAccountsState, (state: AccountsState) =>
    state.values?.data?.map((account: Account) => ({ label: account.name, value: account.id })));

export const getSubmittedFormStatus = createSelector(getAccountsState, (state: AccountsState) =>
    state.edition?.formIsSubmitted);

export const getIsEditingAccount = createSelector(getAccountsState, (state: AccountsState) => state.edition?.isEditing);

export const getEditingAccount = createSelector(getAccountsState, (state: AccountsState) =>
    state.edition?.editingAccount);
