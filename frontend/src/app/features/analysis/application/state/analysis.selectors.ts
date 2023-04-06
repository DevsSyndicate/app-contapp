import { createFeatureSelector, createSelector } from '@ngrx/store';

import { AnalysisState } from '../../domain/state/analysis.state';

export const getAnalysisState = createFeatureSelector<AnalysisState>('analysis');

export const getAccountBalances = createSelector(getAnalysisState, (state: AnalysisState) => state.values?.monthly);

export const getMonthlyAccountBalanceMovements = createSelector(getAnalysisState, (state: AnalysisState) =>
    state.values?.monthly?.movements);

export const getMonthlyForecastExpenses = createSelector(getAnalysisState, (state: AnalysisState) =>
    state.values?.monthly?.forecastExpenses);
