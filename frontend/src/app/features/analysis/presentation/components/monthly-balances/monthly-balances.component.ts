import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { AnalysisMonthly } from '../../../domain/models/monthly';
import { MonthlyAnalysisPresentationFacade } from '../../facades/analysis-monthly.facade';

@Component({
    selector: 'app-analysis-monthly-balances',
    templateUrl: './monthly-balances.component.html',
})

/**
 * Analysys monthly balances component
 */
export class AnalysisMonthlyBalancesComponent {
    public accountBalances$: Observable<AnalysisMonthly> = this.monthlyAnalysisFacade.getAccountBalances();

    constructor(private readonly monthlyAnalysisFacade: MonthlyAnalysisPresentationFacade) {

    }
}
