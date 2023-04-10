import { Observable } from 'rxjs';

import { Category } from '../models/category.model';

/**
 * Repository to interact with Categories
 */
export interface CategoriesRepositoryInterface {
    /**
     * Get list of categories
     */
    getList: (url: string) => Observable<Category[]>;

    /**
     * Get one category
     */
    get: (url: string, id: string) => Observable<Category>;

    /**
     * Create category
     */
    create: <Category>(url: string, body: any) => Observable<Category>;

    /**
     * Update category
     */
    update: <Category>(url: string, body: Category, id: string) => Observable<Category>;

    /**
     * Delete category
     */
    delete: (url: string, id: string) => Observable<boolean>;
}
