import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { AnalysisServiceInterface } from '../../domain/interfaces/analysis-service.interface';
import { AnalysisMonthly } from '../../domain/models/monthly';

import { ApiService } from '@core/infrastructure/api/api.service';
import { environment } from '@env/environment';

@Injectable()

/**
 * Analysis service
 */
export class AnalysisService implements AnalysisServiceInterface {
    public ApiUrl = `${environment.ApiUrl}/analysis/monthly`;

    constructor(protected apiService: ApiService) {}

    public getMonthlyAccountBalances(): Observable<AnalysisMonthly> {
        // TODO: hardocded account. Change this
        const params = new HttpParams().set('account', '2');

        return this.apiService.get<AnalysisMonthly>(this.ApiUrl, params);
    }
}
