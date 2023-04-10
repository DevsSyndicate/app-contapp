import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { GetAccountBalancesUseCase } from '../../application/use-cases/get-account-balances.use-case';
import { AnalysisMonthlyPortInterface } from '../../domain/interfaces/analysis-monhtly-port.interface';
import { AnalysisMonthly } from '../../domain/models/monthly';

@Injectable()

/**
 * Monthly analysis port to intercat bewteen infrastructrue and application layer
 */
export class AnalysisMonthlyPort implements AnalysisMonthlyPortInterface {
    constructor(
        private readonly getAccountBalancesUseCase: GetAccountBalancesUseCase
    ) {}

    public getMonthlyAccountBalances(): Observable<AnalysisMonthly> {
        return this.getAccountBalancesUseCase.getMonthlyAccountBalances();
    }
}
