import { AccountsPublicModels } from '@features/accounts/public.api';
import { CategoriesPublicModels } from '@features/categories/public.api';

export interface Movement {
    id: string;
    name: string;
    date: string;
    type: string;
    amount: number;
    category: CategoriesPublicModels.CategoryPublic;
    account: AccountsPublicModels.AccountPublic;
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
