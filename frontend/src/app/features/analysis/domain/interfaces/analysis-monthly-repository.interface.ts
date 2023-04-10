import { Observable } from 'rxjs';

import { AnalysisMonthly } from '../models/monthly';

/**
 * Repository to interact with monthly analysis
 */
export interface AnalysisMonthlyRepositoryInterface {
    /**
     * Get monthly account balances
     */
    getMonthlyAccountBalances: (url: string) => Observable<AnalysisMonthly>;

}
