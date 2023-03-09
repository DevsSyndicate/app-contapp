import { Component, OnInit, Output, EventEmitter, OnChanges, Input, SimpleChanges } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { CategoriesService } from '@core/services/categories.service';
import { Category } from '@core/models/category.model';

@Component({
    selector: 'sections-categories-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.scss'],
})

/**
 * Categories form component
 */
export class CategoriesFormComponent implements OnInit, OnChanges {
    @Input() public category!: Category;
    @Output() public updateCategoriesTable: EventEmitter<any>;

    public categoryForm!: FormGroup;
    public submitted!: boolean;
    public isEditing: boolean;

    constructor(private categoryService: CategoriesService) {
        this.updateCategoriesTable = new EventEmitter<any>();
        this.isEditing = false;
    }

    public ngOnInit(): void {
        this.categoryForm = this.categoryService.createForm();
    }

    /**
     * On refresh component
     */
    public ngOnChanges(changes: SimpleChanges): void {
        if (changes['category'].currentValue !== changes['category'].previousValue) {
            this.refresh(changes['category'].currentValue);
        }
    }

    /**
     * Form getter
     */
    public get form(): any {
        return this.categoryForm.controls;
    }

    /**
     * Form submission
     */
    public submit(): void {
        this.submitted = true;

        if (this.categoryForm.valid) {
            // Store
            if (!this.isEditing) {
                this.categoryService.store(this.categoryForm.value).subscribe(() => {
                    this.submittedActions();
                });

                // Update
            } else {
                this.categoryService.update(this.category.id, this.categoryForm.value).subscribe(() => {
                    this.submittedActions();
                });
            }
        }
    }

    /**
     * Form reset
     */
    public reset(): void {
        this.categoryForm.reset();
        this.submitted = false;
        this.isEditing = false;
        // this.category = null;
    }

    /**
     * Refresh form
     */
    private refresh(id: number): void {
        this.categoryService.show(id).subscribe((category: Category) => {
            this.isEditing = true;
            this.category = category;
            this.categoryForm.patchValue(category);
        });
    }

    /**
     * Actions to perform once form is submitted and data is stored
     */
    private submittedActions(): void {
        // Update categories table
        this.updateCategoriesTable.emit();

        // Reset form
        this.reset();
    }
}
