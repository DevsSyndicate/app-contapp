import { Account } from '../models/account.model';

export interface AccountsState {
    loaded: boolean;
    loading: boolean;
    values: {
        data: Account[];
    };
    edition: {
        formIsSubmitted: boolean;
        isEditing: boolean;
        editingAccount: Account;
    };
}

export const accountsInitialState: AccountsState = {
    loaded: false,
    loading: false,
    values: {
        data: null,
    },
    edition: {
        formIsSubmitted: false,
        isEditing: false,
        editingAccount: null,
    },
};
