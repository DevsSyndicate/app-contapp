import { createAction, props } from '@ngrx/store';

import { Account } from '../models/account.model';

export enum AccountsActionTypes {
    LOAD_ACCOUNTS = '[Accounts] Load accounts',
    LOAD_ACCOUNTS_SUCCESS = '[Accounts] Load accounts success',
    LOAD_ACCOUNTS_ERROR = '[Accounts] Load accounts error',

    LOAD_ACCOUNT = '[Accounts] Load account',
    LOAD_ACCOUNT_SUCCESS = '[Accounts] Load account success',
    LOAD_ACCOUNT_ERROR = '[Accounts] Load account error',

    DELETE_ACCOUNT = '[Accounts] Delete account',

    SUBMIT_ACCOUNT_FORM = '[Accounts] Submit account form',
    SUBMIT_ACCOUNT_FORM_SUCCESS = '[Accounts] Submit account form success',
}

export const LoadAccounts = createAction(AccountsActionTypes.LOAD_ACCOUNTS);
export const LoadAccountsSuccess = createAction(
    AccountsActionTypes.LOAD_ACCOUNTS_SUCCESS,
    props<{ accounts: Account[] }>()
);
export const LoadAccountsError = createAction(AccountsActionTypes.LOAD_ACCOUNTS_ERROR);

export const LoadAccount = createAction(AccountsActionTypes.LOAD_ACCOUNT, props<{ id: string }>());
export const LoadAccountSuccess = createAction(AccountsActionTypes.LOAD_ACCOUNT_SUCCESS, props<{ account: Account }>());
export const LoadAccountError = createAction(AccountsActionTypes.LOAD_ACCOUNT_ERROR);

export const DeleteAccount = createAction(AccountsActionTypes.DELETE_ACCOUNT, props<{ id: string }>());

export const SubmitAccountForm = createAction(AccountsActionTypes.SUBMIT_ACCOUNT_FORM, props<{ formValues: Account }>());
export const SubmitAccountFormSuccess = createAction(AccountsActionTypes.SUBMIT_ACCOUNT_FORM_SUCCESS);
