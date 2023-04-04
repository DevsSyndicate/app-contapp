import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { getAccountBalances } from '../../../application/state/analysis.selectors';
import { AnalysisMonthly } from '../../../domain/models/monthly';
import { AnalysisState } from '../../../domain/state/analysis.state';

@Component({
    selector: 'app-analysis-monthly-balances',
    templateUrl: './monthly-balances.component.html',
})

/**
 * Analysys monthly balances component
 */
export class AnalysisMonthlyBalancesComponent {
    public accountBalances$: Observable<AnalysisMonthly> = this.store.select(getAccountBalances);

    constructor(private readonly store: Store<AnalysisState>) {

    }
}
