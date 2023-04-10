import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { Category } from '../../../domain/models/category.model';
import { CategoriesPresentationFacade } from '../../facades/categories.facade';

@Component({
    selector: 'app-categories-table',
    templateUrl: './table.component.html',
    styleUrls: ['./table.component.scss'],
})

/**
 * Categories table component
 */
export class CategoriesTableComponent {
    public categories$: Observable<Category[]> = this.categoriesFacade.getCategories();

    constructor(private readonly categoriesFacade: CategoriesPresentationFacade) {}

    /**
	 * Delete category
	 */
    public delete(id: string): void {
        this.categoriesFacade.deleteCategory(id);
    }
}
