import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { AnalysisMonthlyForecastCategory } from '../../../domain/models/monthly';
import { MonthlyAnalysisPresentationAdapter } from '../../adapters/analysis-monthly.adapter';

@Component({
    selector: 'app-analysis-monthly-forecasts',
    templateUrl: './monthly-forecasts.component.html',
})

/**
 * Analysys monthly forecasts component
 */
export class AnalysisMonthlyForecastsComponent {
    // eslint-disable-next-line max-len
    public monthlyForecastExpenses$: Observable<AnalysisMonthlyForecastCategory[]> = this.monthlyAnalysisAdapter.getForecastExpenses();

    public forecastsCollapsed = false;

    constructor(private readonly monthlyAnalysisAdapter: MonthlyAnalysisPresentationAdapter) {

    }
}
