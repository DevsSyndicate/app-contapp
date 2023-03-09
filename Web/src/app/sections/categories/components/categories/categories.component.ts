import { Component, OnInit } from '@angular/core';
import { HeadingService } from '@core/services/heading.service';
import { Category, Categories } from '@core/models/category.model';
import { CategoriesService } from '@core/services/categories.service';

@Component({
    selector: 'sections-categories',
    templateUrl: './categories.component.html',
    styleUrls: ['./categories.component.scss'],
})

/**
 * Categories main component
 */
export class CategoriesComponent implements OnInit {
    public categories!: Category[];
    public category!: Category;

    constructor(private headingService: HeadingService, private categoryService: CategoriesService) {}

    public ngOnInit(): void {
        // Set page heading
        this.headingService.setHeading('Categories');

        this.getCategories();
    }

    /**
     * Update categories table
     */
    public updateCategoriesTable(): void {
        this.getCategories();
    }

    /**
     * Update form with editing category
     */
    public updateCategoryForm(category: Category): void {
        this.category = category;
    }

    /**
     * Get categories from the API
     */
    private getCategories(): void {
        this.categoryService.index().subscribe((categories: Categories) => {
            this.categories = categories.items.data;
        });
    }
}
