import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { getCategories } from '../../../application/state/categories.selectors';
import { Category } from '../../../domain/models/category.model';
import { DeleteCategory } from '../../../domain/state/categories.actions';
import { CategoriesState } from '../../../domain/state/categories.state';

@Component({
    selector: 'app-categories-table',
    templateUrl: './table.component.html',
    styleUrls: ['./table.component.scss'],
})

/**
 * Categories table component
 */
export class CategoriesTableComponent {
    public categories$: Observable<Category[]> = this.store.select(getCategories);

    constructor(private readonly store: Store<CategoriesState>) {}

    /**
	 * Delete category
	 */
    public delete(id: string): void {
        this.store.dispatch(DeleteCategory({ id }));
    }
}
