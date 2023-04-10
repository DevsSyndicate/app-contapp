import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { Movement } from '../../../domain/models/movement.model';
import { MovementsPresentationAdapter } from '../../adapters/movements.adapter';

@Component({
    selector: 'app-movements-table',
    templateUrl: './table.component.html',
    styleUrls: ['./table.component.scss'],
})

/**
 * Movements table component
 */
export class MovementsTableComponent {
    public movements$: Observable<Movement[]> = this.movementsAdapter.getMovements();

    public totalMovementItems$: Observable<number> = this.movementsAdapter.getTotalMovementItems();

    public page = 1;

    constructor(private readonly movementsAdapter: MovementsPresentationAdapter) {}

    /**
	 * Delete movement
	 */
    public delete(id: string): void {
        this.movementsAdapter.deleteMovement(id);
    }

    /**
	 * On page change
	 */
    public changePage(selectedPage: number): void {
        this.movementsAdapter.changeMovementsPage(selectedPage);
    }
}
