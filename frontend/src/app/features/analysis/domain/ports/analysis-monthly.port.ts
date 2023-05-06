import { Observable } from 'rxjs';

import { AnalysisMonthly, AnalysisMonthlyForecastCategory } from '../models/monthly';

import { MovementsPublicModels } from '@features/movements/public.api';

/**
 * Monthly analysis presentation adapter
 */
export interface MonthlyAnalysisPort {

    getAccountBalances: () => Observable<AnalysisMonthly>;

    getForecastExpenses: () => Observable<AnalysisMonthlyForecastCategory[]>;

    getMovements: () => Observable<MovementsPublicModels.MovementPublic[]>;

    /**
     * Call monthly account balances
     */
    getMonthlyAccountBalances: () => Observable<AnalysisMonthly>;
}
