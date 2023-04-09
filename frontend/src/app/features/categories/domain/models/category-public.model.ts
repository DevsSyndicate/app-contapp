import { Category } from './category.model';

export interface CategoryPublic extends Category {
    id: string;
    name: string;
    color: string;
    icon: string;
    forecast: number;
}
