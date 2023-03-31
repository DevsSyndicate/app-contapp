import { Observable } from 'rxjs';

import { Category } from '../models/category.model';

/**
 * Categories service interface
 */
export interface CategoriesServiceInterface {
    /**
	 * Get all categories
	 */
    getList: () => Observable<Category[]>;

    /**
	 * Get category
	 */
    get: (id: string) => Observable<Category>;

    /**
	 * Add category
	 */
    add: (resource: Category) => Observable<Category>;

    /**
	 * Update category
	 */
    update: (resource: Category, id: string) => void;

    /**
	 * Delete category
	 */
    delete: (id: string) => void;

    /**
	 * Get categories list for selects
	 */
    getListSelect: () => Observable<Array<{ id: string; text: string }>>;
}
