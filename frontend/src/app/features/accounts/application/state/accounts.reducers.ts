import { createReducer, on } from '@ngrx/store';

import { LoadAccount, LoadAccounts, LoadAccountsSuccess, LoadAccountSuccess, SubmitAccountForm } from '../../domain/state/accounts.actions';
import { accountsInitialState } from '../../domain/state/accounts.state';

export const accountsReducer = createReducer(
    accountsInitialState,

    on(LoadAccounts, (state) => ({
        ...state,
        loading: true,
        loaded: false,
        edition: {
            formIsSubmitted: false,
            isEditing: false,
            editingAccount: null,
        },
    })),

    on(LoadAccountsSuccess, (state, { accounts }) => ({
        ...state,
        loading: false,
        loaded: true,
        values: {
            data: accounts,
        },
    })),

    on(SubmitAccountForm, (state) => ({ ...state, edition: { ...state.edition, formIsSubmitted: true } })),

    on(LoadAccount, (state) => ({ ...state, edition: { ...state.edition, isEditing: true } })),

    on(LoadAccountSuccess, (state, { account }) => (
        { ...state, edition: { ...state.edition, editingAccount: account } }
    ))
);
