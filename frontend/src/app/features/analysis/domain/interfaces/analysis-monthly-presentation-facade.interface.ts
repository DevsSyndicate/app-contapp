import { Observable } from 'rxjs';

import { AnalysisMonthly, AnalysisMonthlyForecastCategory } from '../models/monthly';

import { MovementsPublicModels } from '@features/movements/public.api';

/**
 * Monthly analysis presentation facade interface
 */
export interface MonthlyAnalysisPresentationFacadeInterface {
    /**
     * Get monthly account balances
     */
    getAccountBalances: () => Observable<AnalysisMonthly>;

    /**
     * Get monthly forecast expenses
     */
    getForecastExpenses: () => Observable<AnalysisMonthlyForecastCategory[]>;

    /**
     * Get monthly movements
     */
    getMovements: () => Observable<MovementsPublicModels.MovementPublic[]>;

}
