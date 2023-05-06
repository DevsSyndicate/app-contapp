import { createReducer, on } from '@ngrx/store';

import { LoadMonthlyAnalysisAccountBalancesSuccess } from '../../domain/state/analysis.actions';
import { analysisInitialState } from '../../domain/state/analysis.state';

export const analysisReducer = createReducer(
    analysisInitialState,

    on(LoadMonthlyAnalysisAccountBalancesSuccess, (state, { monthlyAccountBalances }) => ({
        ...state,
        values: {
            ...state.values, monthly: monthlyAccountBalances,
        },
    })),

);
