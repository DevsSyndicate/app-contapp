import { createFeatureSelector, createSelector } from '@ngrx/store';

import { MovementsState } from '../../domain/state/movements.state';

export const getMovementsState = createFeatureSelector<MovementsState>('movements');

export const getMovements = createSelector(getMovementsState, (state: MovementsState) => state.values?.data);

export const getTotalMovementsValue = createSelector(getMovementsState, (state: MovementsState) => state.values.total);

export const getMovementsCurrentPage = createSelector(
    getMovementsState,
    (state: MovementsState) => state.values?.currentPage
);

export const getSubmittedFormStatus = createSelector(
    getMovementsState,
    (state: MovementsState) => state.edition?.formIsSubmitted
);

export const getIsEditingMovement = createSelector(getMovementsState, (state: MovementsState) => state.edition?.isEditing);

export const getEditingMovement = createSelector(
    getMovementsState,
    (state: MovementsState) => state.edition?.editingMovement
);
