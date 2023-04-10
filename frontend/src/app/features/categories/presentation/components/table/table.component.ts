import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { Category } from '../../../domain/models/category.model';
import { CategoriesPresentationAdapter } from '../../adapters/categories.adapter';

@Component({
    selector: 'app-categories-table',
    templateUrl: './table.component.html',
    styleUrls: ['./table.component.scss'],
})

/**
 * Categories table component
 */
export class CategoriesTableComponent {
    public categories$: Observable<Category[]> = this.categoriesAdapter.getCategories();

    constructor(private readonly categoriesAdapter: CategoriesPresentationAdapter,) {}

    /**
	 * Delete category
	 */
    public delete(id: string): void {
        this.categoriesAdapter.deleteCategory(id);
    }
}
