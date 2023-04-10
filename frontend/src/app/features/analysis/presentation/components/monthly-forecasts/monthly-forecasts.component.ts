import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { AnalysisMonthlyForecastCategory } from '../../../domain/models/monthly';
import { MonthlyAnalysisPresentationFacade } from '../../facades/analysis-monthly.facade';

@Component({
    selector: 'app-analysis-monthly-forecasts',
    templateUrl: './monthly-forecasts.component.html',
})

/**
 * Analysys monthly forecasts component
 */
export class AnalysisMonthlyForecastsComponent {
    // eslint-disable-next-line max-len
    public monthlyForecastExpenses$: Observable<AnalysisMonthlyForecastCategory[]> = this.monthlyAnalysisFacade.getForecastExpenses();

    public forecastsCollapsed = false;

    constructor(private readonly monthlyAnalysisFacade: MonthlyAnalysisPresentationFacade) {

    }
}
