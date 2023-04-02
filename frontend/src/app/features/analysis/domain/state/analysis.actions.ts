import { createAction, props } from '@ngrx/store';

import { AnalysisMonthly } from '../models/monthly';

export enum AnalysisActionTypes {
    LOAD_ACCONT_BALANCES = '[Analysis - Monthly] Load account balances',
    LOAD_ACCONT_BALANCES_SUCCESS = '[Analysis - Monthly] Load account balances success',
    LOAD_ACCONT_BALANCES_ERROR = '[Analysis - Monthly] Load account balances error',

}

export const LoadMonthlyAnalysisAccountBalances = createAction(AnalysisActionTypes.LOAD_ACCONT_BALANCES,);
export const LoadMonthlyAnalysisAccountBalancesSuccess = createAction(
    AnalysisActionTypes.LOAD_ACCONT_BALANCES_SUCCESS,
    props<{ monthlyAccountBalances: AnalysisMonthly }>()
);
export const LoadMonthlyAnalysisAccountBalancesError = createAction(AnalysisActionTypes.LOAD_ACCONT_BALANCES_ERROR,);
