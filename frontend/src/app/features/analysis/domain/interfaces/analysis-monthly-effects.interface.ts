import { Action } from '@ngrx/store';
import { Observable } from 'rxjs';

/**
 * Monthly analysis effects interface
 */
export interface MonthlyAnalysisEffectsInterface {
    /**
	 * Dispatch action to load monthly account balances when enter to the section
	 */
    loadMonthlyAccountBalancesOnRouteEnter$: Observable<Action>;

    /**
	 *Load monthly account balances
	 */
    loadMonthlyAccountBalances$: Observable<Action>;

}
