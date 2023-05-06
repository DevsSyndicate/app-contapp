import { Component, Inject } from '@angular/core';
import { Observable } from 'rxjs';

import { AnalysisMonthly } from '../../../domain/models/monthly';
import { MonthlyAnalysisPort } from '../../../domain/ports/analysis-monthly.port';

@Component({
    selector: 'app-analysis-monthly-balances',
    templateUrl: './monthly-balances.component.html',
})

/**
 * Analysys monthly balances component
 */
export class AnalysisMonthlyBalancesComponent {
    public accountBalances$: Observable<AnalysisMonthly> = this.monthlyAnalysisPort.getAccountBalances();

    constructor(@Inject('MonthlyAnalysisPort') private readonly monthlyAnalysisPort: MonthlyAnalysisPort) {

    }
}
