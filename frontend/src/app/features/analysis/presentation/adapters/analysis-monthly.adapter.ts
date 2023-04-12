import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { MonthlyAnalysisPresentationAdapterInterface } from '../../domain/interfaces/analysis-monthly-presentation-adapter.interface';
import { AnalysisMonthly, AnalysisMonthlyForecastCategory } from '../../domain/models/monthly';
import { AnalysisState } from '../../domain/state/analysis.state';
import { getAccountBalances, getMonthlyAccountBalanceMovements, getMonthlyForecastExpenses } from '../../infrastructure/state/analysis.selectors';

import { MovementsPublicModels } from '@features/movements/public.api';

@Injectable()

/**
 * Monthly analysis presentation adapter
 */
export class MonthlyAnalysisPresentationAdapter implements MonthlyAnalysisPresentationAdapterInterface {
    constructor(private readonly store: Store<AnalysisState>) {}

    public getAccountBalances(): Observable<AnalysisMonthly> {
        return this.store.select(getAccountBalances);
    }

    public getForecastExpenses(): Observable<AnalysisMonthlyForecastCategory[]> {
        return this.store.select(getMonthlyForecastExpenses);
    }

    public getMovements(): Observable<MovementsPublicModels.MovementPublic[]> {
        return this.store.select(getMonthlyAccountBalanceMovements);
    }
}
