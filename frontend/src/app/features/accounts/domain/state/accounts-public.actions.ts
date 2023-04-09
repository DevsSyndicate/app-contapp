import { createAction } from '@ngrx/store';

export enum AccountsPublicActionTypes {
    ACCOUNTS_PUBLIC_API_LOAD_ACCOUNTS = '[Accounts Public API] Load accounts',
}

export const LoadAccountsPublic = createAction(AccountsPublicActionTypes.ACCOUNTS_PUBLIC_API_LOAD_ACCOUNTS);
