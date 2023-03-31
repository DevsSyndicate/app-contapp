import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { getMovements, getTotalMovementsValue } from '../../../application/state/momenents.selectors';
import { Movement } from '../../../domain/models/movement.model';
import { DeleteMovement, LoadMovements } from '../../../domain/state/movements.actions';
import { MovementsState } from '../../../domain/state/movements.state';

@Component({
    selector: 'app-movements-table',
    templateUrl: './table.component.html',
})

/**
 * Movements table component
 */
export class MovementsTableComponent {
    public movements$: Observable<Movement[]> = this.store.select(getMovements);

    public totalMovementItems$: Observable<number> = this.store.select(getTotalMovementsValue);

    public page = 1;

    constructor(private readonly store: Store<MovementsState>) {}

    /**
	 * Delete movement
	 */
    public delete(id: string): void {
        this.store.dispatch(DeleteMovement({ id }));
    }

    /**
	 * On page change
	 */
    public changePage(selectedPage: number): void {
        this.store.dispatch(LoadMovements({ page: selectedPage.toString(), perPage: '20' }));
    }
}
