import { Component, OnInit } from '@angular/core';
import { HeadingService } from '@core/services/heading.service';
import { MovementsService } from '@core/services/movements.service';
import { Movement, Movements, MovementsFilter } from '@core/models/movement.model';

@Component({
    selector: 'sections-movements',
    templateUrl: './movements.component.html',
    styleUrls: ['./movements.component.scss'],
})

/**
 * Movements main component
 */
export class MovementsComponent implements OnInit {
    public movements!: Movement[];
    public movement!: number;

    constructor(private headingService: HeadingService, private movementsService: MovementsService) {}

    public ngOnInit(): void {
        // Set page heading
        this.headingService.setHeading('Movements');

        this.getMovements();
    }

    /**
     * Update the movements table
     */
    public updateMovementsTable(filters?: MovementsFilter): void {
        this.getMovements(filters);
    }

    /**
     * Update the form with editing movement
     */
    public updateMovementForm(id: number): void {
        this.movement = id;
    }

    /**
     * Get movements from the API
     */
    private getMovements(filters?: MovementsFilter): void {
        this.movementsService.index(filters).subscribe((movements: Movements) => {
            this.movements = movements.items.data;
        });
    }
}
