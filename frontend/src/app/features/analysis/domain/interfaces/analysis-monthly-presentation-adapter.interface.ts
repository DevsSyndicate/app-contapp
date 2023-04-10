import { Observable } from 'rxjs';

import { AnalysisMonthly, AnalysisMonthlyForecastCategory } from '../models/monthly';

import { MovementsPublicModels } from '@features/movements/public.api';

/**
 * Monthly analysis presentation adapter interface
 */
export interface MonthlyAnalysisPresentationAdapterInterface {
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
