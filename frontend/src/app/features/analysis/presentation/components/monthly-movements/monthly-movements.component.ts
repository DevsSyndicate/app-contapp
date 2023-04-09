import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { getMonthlyAccountBalanceMovements } from '../../../application/state/analysis.selectors';
import { AnalysisState } from '../../../domain/state/analysis.state';

import { MovementsPublicModels } from '@features/movements/public.api';

@Component({
    selector: 'app-analysis-monthly-movements',
    templateUrl: './monthly-movements.component.html',
    styleUrls: ['./monthly-movements.component.scss'],
})

/**
 * Analysys monthly movements component
 */
export class AnalysisMonthlyMovementsComponent {
    public monthyMovements$: Observable<MovementsPublicModels.MovementPublic[]> = this.store.select(
        getMonthlyAccountBalanceMovements
    );

    public movementsCollapsed = false;

    constructor(private readonly store: Store<AnalysisState>) {

    }
}
