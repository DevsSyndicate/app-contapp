import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MovementsService } from '@core/services/movements.service';
import { UtilsService } from '@core/services/utils.service';

@Component({
    selector: 'sections-movements-filters',
    templateUrl: './filters.component.html',
    styleUrls: ['./filters.component.scss'],
})

/**
 * Movements filters component
 */
export class MovementsFiltersComponent implements OnInit {
    @Output() public updateMovementsTable: EventEmitter<any>;

    public months!: Array<string>;
    public movementsFiltersForm!: FormGroup;

    constructor(private utilsService: UtilsService, private movementsService: MovementsService) {
        this.updateMovementsTable = new EventEmitter<null>();
    }

    public ngOnInit(): void {
        // Generate filters form
        this.movementsFiltersForm = this.movementsService.createFiltersForm();

        // Get months for select
        this.months = this.utilsService.getMonthsArray();
    }

    /**
     * Form getter
     */
    public get form(): any {
        return this.movementsFiltersForm.controls;
    }

    /**
     * Form submission
     */
    public submit(): void {
        // Refresh table with filters
        // Update movements table
        this.updateMovementsTable.emit(this.movementsFiltersForm.value);
    }

    /**
     * Clean filters
     */
    public clean(): void {
        this.movementsFiltersForm.reset();

        // Update movements table
        this.updateMovementsTable.emit();
    }
}
