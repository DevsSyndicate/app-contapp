import { Account } from '@features/accounts/domain/models/account.model';
import { Category } from '@features/categories/domain/models/category.model';

export enum MovementType {
    'expense',
    'income',
}

export interface ApiMovement {
    id: string;
    name: string;
    date: string;
    type: MovementType;
    amount: number;
    category: Category;
    account: Account;
    created_at: string;
    updated_at: string;
}

export interface ApiMovements {
    current_page: number;
    total: number;
    data: ApiMovement[];
}
