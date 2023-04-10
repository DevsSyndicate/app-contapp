import { Observable } from 'rxjs';

import { AnalysisMonthly } from '../models/monthly';

/**
 * Monthly analysis port interface
 */
export interface AnalysisMonthlyPortInterface {
    /**
     * Call monthly account balances
     */
    getMonthlyAccountBalances: () => Observable<AnalysisMonthly>;

}
