import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { getMonthlyForecastExpenses } from '../../../application/state/analysis.selectors';
import { AnalysisMonthlyForecastCategory } from '../../../domain/models/monthly';
import { AnalysisState } from '../../../domain/state/analysis.state';

@Component({
    selector: 'app-analysis-monthly-forecasts',
    templateUrl: './monthly-forecasts.component.html',
})

/**
 * Analysys monthly forecasts component
 */
export class AnalysisMonthlyForecastsComponent {
    public monthlyForecastExpenses$: Observable<AnalysisMonthlyForecastCategory[]> = this.store.select(
        getMonthlyForecastExpenses
    );

    public forecastsCollapsed = false;

    constructor(private readonly store: Store<AnalysisState>) {

    }
}
