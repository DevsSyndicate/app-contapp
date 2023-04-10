import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { GetAccountBalancesUseCase } from '../../application/use-cases/get-account-balances.use-case';
import { AnalysisMonthlyAdapterInterface } from '../../domain/interfaces/analysis-monhtly-adapter.interface';
import { AnalysisMonthly } from '../../domain/models/monthly';

@Injectable()

/**
 * Monthly analysis adapter to intercat bewteen infrastructrue and application layer
 */
export class AnalysisMonthlyAdapter implements AnalysisMonthlyAdapterInterface {
    constructor(
        private readonly getAccountBalancesUseCase: GetAccountBalancesUseCase
    ) {}

    public getMonthlyAccountBalances(): Observable<AnalysisMonthly> {
        return this.getAccountBalancesUseCase.getMonthlyAccountBalances();
    }
}
