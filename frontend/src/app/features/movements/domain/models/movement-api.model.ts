import { AccountsPublicModels } from '@features/accounts/public.api';
import { CategoriesPublicModels } from '@features/categories/public.api';

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
    category: CategoriesPublicModels.CategoryPublic;
    account: AccountsPublicModels.AccountPublic;
    created_at: string;
    updated_at: string;
}

export interface ApiMovements {
    current_page: number;
    total: number;
    data: ApiMovement[];
}
