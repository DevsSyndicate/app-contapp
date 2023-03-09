import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Category } from '@app/core/models/category.model';
import { CategoriesService } from '@core/services/categories.service';

@Component({
    selector: 'sections-categories-table',
    templateUrl: './table.component.html',
    styleUrls: ['./table.component.scss'],
})

/**
 * Categories table component
 */
export class CategoriesTableComponent implements OnInit {
    @Input() public categories!: Category[];
    @Output() public updateCategoryForm: EventEmitter<number>;
    @Output() public updateCategoriesTable: EventEmitter<any>;

    constructor(private categoryService: CategoriesService) {
        this.updateCategoryForm = new EventEmitter<number>();
        this.updateCategoriesTable = new EventEmitter<any>();
    }

    public ngOnInit(): void {}

    /**
     * On edit category send this to form
     */
    public edit(id: number): void {
        this.updateCategoryForm.emit(id);
    }

    /**
     * Delete cateory from the API and refresh table
     */
    public delete(id: number): void {
        this.categoryService.delete(id).subscribe(() => {
            this.updateCategoriesTable.emit();
        });
    }
}
