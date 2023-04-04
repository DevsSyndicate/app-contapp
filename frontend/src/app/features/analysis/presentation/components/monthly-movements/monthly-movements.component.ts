import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { getAccountBalanceMovements } from '../../../application/state/analysis.selectors';
import { AnalysisState } from '../../../domain/state/analysis.state';

import { Movement } from '@features/movements/domain/models/movement.model';

@Component({
    selector: 'app-analysis-monthly-movements',
    templateUrl: './monthly-movements.component.html',
})

/**
 * Analysys monthly movements component
 */
export class AnalysisMonthlyMovementsComponent {
    public monthyMovements$: Observable<Movement[]> = this.store.select(getAccountBalanceMovements);

    constructor(private readonly store: Store<AnalysisState>) {

    }
}
