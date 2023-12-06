import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { AnalysisMonthly } from '../../domain/models/monthly';
import { AnalysisMonthlyRepositoryInterface } from '../../domain/repositories/analysis-monthly-repository.interface';

import { ApiRepository } from '@core/infrastructure/repositories/api.repository';

@Injectable()

/**
 * Repository to interact with monthly analsysis
 */
export class AnalysisMonthlyRepository implements AnalysisMonthlyRepositoryInterface {
    constructor(private readonly apiRepository: ApiRepository) {}

    public getMonthlyAccountBalances(url: string): Observable<AnalysisMonthly> {
        // TODO: hardocded account. Change this
        const params = new HttpParams().set('account', '2');

        return this.apiRepository.get<AnalysisMonthly>(url, params);
    }
}
