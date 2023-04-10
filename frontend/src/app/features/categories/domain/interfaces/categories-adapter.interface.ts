import { Observable } from 'rxjs';

import { Category } from '../models/category.model';

/**
 * Categories adapter interface
 */
export interface CategoriesAdapterInterface {
    /**
     * Call get categories list Use Case
     */
    getList: () => Observable<Category[]>;

    /**
     * Call get category Use Case
     */
    get: (id: string) => Observable<Category>;

    /**
     * Call create new category Use Case
     */
    create: (category: Category) => Observable<Category>;

    /**
     * Call update category Use Case
     */
    update: (category: Category, id: string) => Observable<Category>;

    /**
     * Call delete category Use Case
     */
    delete: (id: string) => Observable<boolean>;

}
