import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Movement, MovementsFilter } from '@core/models/movement.model';
import { MovementsService } from '@core/services/movements.service';

@Component({
    selector: 'sections-movements-table',
    templateUrl: './table.component.html',
    styleUrls: ['./table.component.scss'],
})

/**
 * Movements table component
 */
export class MovementsTableComponent implements OnInit {
    @Input() public movements!: Movement[];
    @Output() public updateMovementForm: EventEmitter<number>;
    @Output() public updateMovementsTable: EventEmitter<any>;

    constructor(private movementService: MovementsService) {
        this.updateMovementForm = new EventEmitter<number>();
        this.updateMovementsTable = new EventEmitter<any>();
    }

    public ngOnInit(): void {}

    /**
     * On edit movement send this to form
     */
    public edit(id: number): void {
        this.updateMovementForm.emit(id);
    }

    /**
     * Delete movement from the API and refresh table
     */
    public delete(id: number): void {
        this.movementService.delete(id).subscribe(() => {
            this.updateMovementsTable.emit();
        });
    }

    /**
     * Update the movements table
     */
    public updateMovementsTableFromFilters(filters: MovementsFilter): void {
        this.updateMovementsTable.emit(filters);
    }
}
