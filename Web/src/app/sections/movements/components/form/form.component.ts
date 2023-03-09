import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { CategoriesService } from '@core/services/categories.service';
import { MovementsService } from '@core/services/movements.service';
import { Category } from '@core/models/category.model';
import { Movement } from '@core/models/movement.model';

@Component({
    selector: 'sections-movements-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.scss'],
})

/**
 * Movements form component
 */
export class MovementsFormComponent implements OnInit, OnChanges {
    @Input() public movement!: Movement;
    @Output() public updateMovementsTable: EventEmitter<any>;

    public movementsForm!: FormGroup;
    public submitted!: boolean;
    public categories!: Category[];
    public isEditing: boolean;

    constructor(private categoryService: CategoriesService, private movementsService: MovementsService) {
        this.updateMovementsTable = new EventEmitter<null>();
        this.isEditing = false;
    }

    public ngOnInit(): void {
        this.movementsForm = this.movementsService.createForm();
    }

    /**
     * On refresh component
     */
    public ngOnChanges(changes: SimpleChanges): void {
        if (changes['movement'].currentValue !== changes['movement'].previousValue) {
            this.refresh(changes['movement'].currentValue);
        }
    }

    /**
     * Form getter
     */
    public get form(): any {
        return this.movementsForm.controls;
    }

    /**
     * On movement type change
     */
    public onMovementTypeChange(value: string): void {
        this.loadCategories(value);
    }

    /**
     * Form submission
     */
    public submit(): void {
        this.submitted = true;

        if (this.movementsForm.valid) {
            // Store
            if (!this.isEditing) {
                this.movementsService.store(this.movementsForm.value).subscribe(() => {
                    this.submittedActions();
                });

                // Update
            } else {
                const updatedMovement: Movement = {
                    id: this.movement.id,
                    name: this.movementsForm.value.name,
                    type: this.movement.type,
                    category: this.movement.category,
                    amount: this.movementsForm.value.amount,
                    date: this.movementsForm.value.date,
                };

                this.movementsService.update(this.movement.id, updatedMovement).subscribe(() => {
                    this.submittedActions();
                });
            }
        }
    }

    /**
     * Form reset
     */
    public reset(): void {
        this.movementsForm.reset();
        this.submitted = false;
        this.isEditing = false;
        // this.movement = null;
    }

    /**
     * Refresh form
     */
    private refresh(id: number): void {
        this.movementsService.show(id).subscribe((movement: Movement) => {
            this.isEditing = true;
            this.loadCategories(movement.type);
            this.movement = movement;
            this.movementsForm.patchValue(movement);
           /*  this.movementsForm.controls.type.disable();
            this.movementsForm.controls.category.disable(); */
        });
    }

    /**
     * Actions to perform once form is submitted and data is stored
     */
    private submittedActions(): void {
        // Update movements table
        this.updateMovementsTable.emit();

        // Reset form
        this.reset();
    }

    /**
     * Load categoryes based on movement type
     */
    public loadCategories(type: string): void {
        this.categoryService.getCategoriesForSelects(type).subscribe((categories: Category[]) => {
            this.categories = categories;
        });
    }
}
