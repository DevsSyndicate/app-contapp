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
    public ApiUrl = `${environment.ApiUrl}/movements`;

    constructor(protected apiService: ApiService) {}

    public getMonthlyAccountBalances(): Observable<AnalysisMonthly> {
        return this.apiService.get<AnalysisMonthly>(this.ApiUrl);
    }
}
