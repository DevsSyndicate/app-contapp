import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { AnalysisMonthlyRepositoryInterface } from '../../domain/interfaces/analysis-monthly-repository.interface';
import { AnalysisMonthly } from '../../domain/models/monthly';

import { environment } from '@env/environment';

@Injectable()

/**
 * Create account use case
 */
export class GetAccountBalancesUseCase {
    public ApiUrl = `${environment.ApiUrl}/analysis/monthly`;

    // eslint-disable-next-line no-secrets/no-secrets
    constructor(@Inject('AnalysisMonthlyRepositoryInterface') private readonly analysisMonthlyRepository: AnalysisMonthlyRepositoryInterface) {

    }

    public getMonthlyAccountBalances(): Observable<AnalysisMonthly> {
        return this.analysisMonthlyRepository.getMonthlyAccountBalances(this.ApiUrl);
    }
}
