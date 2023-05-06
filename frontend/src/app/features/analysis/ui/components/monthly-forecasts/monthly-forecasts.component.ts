import { Component, Inject } from '@angular/core';
import { Observable } from 'rxjs';

import { AnalysisMonthlyForecastCategory } from '../../../domain/models/monthly';
import { MonthlyAnalysisPort } from '../../../domain/ports/analysis-monthly.port';

@Component({
    selector: 'app-analysis-monthly-forecasts',
    templateUrl: './monthly-forecasts.component.html',
})

/**
 * Analysys monthly forecasts component
 */
export class AnalysisMonthlyForecastsComponent {
    // eslint-disable-next-line max-len
    public monthlyForecastExpenses$: Observable<AnalysisMonthlyForecastCategory[]> = this.monthlyAnalysisPort.getForecastExpenses();

    public forecastsCollapsed = false;

    constructor(@Inject('MonthlyAnalysisPort') private readonly monthlyAnalysisPort: MonthlyAnalysisPort) {

    }
}
