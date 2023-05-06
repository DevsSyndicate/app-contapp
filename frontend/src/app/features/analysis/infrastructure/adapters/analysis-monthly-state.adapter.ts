import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { GetAccountBalancesUseCase } from '../../application/use-cases/get-account-balances.use-case';
import { AnalysisMonthly, AnalysisMonthlyForecastCategory } from '../../domain/models/monthly';
import { MonthlyAnalysisPort } from '../../domain/ports/analysis-monthly.port';
import { AnalysisState } from '../../domain/state/analysis.state';
import { getAccountBalances, getMonthlyAccountBalanceMovements, getMonthlyForecastExpenses } from '../state/analysis.selectors';

import { MovementsPublicModels } from '@features/movements/public.api';

@Injectable()

/**
 * Monthly analysis State adapter
 */
export class MonthlyAnalysisStateAdapter implements MonthlyAnalysisPort {
    constructor(
        private readonly store: Store<AnalysisState>,
        private readonly getAccountBalancesUseCase: GetAccountBalancesUseCase
    ) {}

    public getAccountBalances(): Observable<AnalysisMonthly> {
        return this.store.select(getAccountBalances);
    }

    public getForecastExpenses(): Observable<AnalysisMonthlyForecastCategory[]> {
        return this.store.select(getMonthlyForecastExpenses);
    }

    public getMovements(): Observable<MovementsPublicModels.MovementPublic[]> {
        return this.store.select(getMonthlyAccountBalanceMovements);
    }

    public getMonthlyAccountBalances(): Observable<AnalysisMonthly> {
        return this.getAccountBalancesUseCase.getMonthlyAccountBalances();
    }
}
