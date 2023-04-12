import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { AnalysisMonthlyRepositoryInterface } from '../../domain/interfaces/analysis-monthly-repository.interface';
import { AnalysisMonthly } from '../../domain/models/monthly';
import { MONTHLY_ANALYSIS_API_URL } from '../constants/api.const';

@Injectable()

/**
 * Create account use case
 */
export class GetAccountBalancesUseCase {
    // eslint-disable-next-line no-secrets/no-secrets
    constructor(@Inject('AnalysisMonthlyRepositoryInterface') private readonly analysisMonthlyRepository: AnalysisMonthlyRepositoryInterface) {

    }

    public getMonthlyAccountBalances(): Observable<AnalysisMonthly> {
        return this.analysisMonthlyRepository.getMonthlyAccountBalances(MONTHLY_ANALYSIS_API_URL);
    }
}
