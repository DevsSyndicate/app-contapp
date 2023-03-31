import { Account } from '@features/accounts/domain/models/account.model';
import { Category } from '@features/categories/domain/models/category.model';

export interface Movement {
    id: string;
    name: string;
    date: string;
    type: string;
    amount: number;
    category: Category;
    account: Account;
}

export interface Movements {
    current_page: number;
    total: number;
    data: Movement[];
}

export interface MovementFormData {
    id: string;
    name: string;
    date: string;
    type: string;
    amount: number;
    category: number;
    account: number;
}
