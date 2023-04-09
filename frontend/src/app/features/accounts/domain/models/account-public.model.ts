import { Account } from './account.model';

export interface AccountPublic extends Account {
    id: string;
    name: string;
    amount: number;
}
