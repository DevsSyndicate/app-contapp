import { Observable } from 'rxjs';

import { AnalysisMonthly } from '../models/monthly';

/**
 * Analysis service interface
 */
export interface AnalysisServiceInterface {
    /**
	 * Get monthly account balances
	 */
    getMonthlyAccountBalances: () => Observable<AnalysisMonthly>;

}
