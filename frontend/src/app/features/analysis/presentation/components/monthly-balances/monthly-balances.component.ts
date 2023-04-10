import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { AnalysisMonthly } from '../../../domain/models/monthly';
import { MonthlyAnalysisPresentationAdapter } from '../../adapters/analysis-monthly.adapter';

@Component({
    selector: 'app-analysis-monthly-balances',
    templateUrl: './monthly-balances.component.html',
})

/**
 * Analysys monthly balances component
 */
export class AnalysisMonthlyBalancesComponent {
    public accountBalances$: Observable<AnalysisMonthly> = this.monthlyAnalysisAdapter.getAccountBalances();

    constructor(private readonly monthlyAnalysisAdapter: MonthlyAnalysisPresentationAdapter) {

    }
}
