import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { Movement } from '../../../domain/models/movement.model';
import { MovementsPresentationFacade } from '../../facades/movements.facade';

@Component({
    selector: 'app-movements-table',
    templateUrl: './table.component.html',
    styleUrls: ['./table.component.scss'],
})

/**
 * Movements table component
 */
export class MovementsTableComponent {
    public movements$: Observable<Movement[]> = this.movementsFacade.getMovements();

    public totalMovementItems$: Observable<number> = this.movementsFacade.getTotalMovementItems();

    public page = 1;

    constructor(private readonly movementsFacade: MovementsPresentationFacade) {}

    /**
	 * Delete movement
	 */
    public delete(id: string): void {
        this.movementsFacade.deleteMovement(id);
    }

    /**
	 * On page change
	 */
    public changePage(selectedPage: number): void {
        this.movementsFacade.changeMovementsPage(selectedPage);
    }
}
