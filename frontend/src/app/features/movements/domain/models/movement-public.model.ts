import { Movement } from './movement.model';

import { AccountsPublicModels } from '@features/accounts/public.api';
import { CategoriesPublicModels } from '@features/categories/public.api';

export interface MovementPublic extends Movement {
    id: string;
    name: string;
    date: string;
    type: string;
    amount: number;
    category: CategoriesPublicModels.CategoryPublic;
    account: AccountsPublicModels.AccountPublic;
}
