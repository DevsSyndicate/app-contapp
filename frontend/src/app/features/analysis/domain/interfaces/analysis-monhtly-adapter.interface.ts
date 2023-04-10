import { Observable } from 'rxjs';

import { AnalysisMonthly } from '../models/monthly';

/**
 * Monthly analysis adapter interface
 */
export interface AnalysisMonthlyAdapterInterface {
    /**
     * Call monthly account balances
     */
    getMonthlyAccountBalances: () => Observable<AnalysisMonthly>;

}
