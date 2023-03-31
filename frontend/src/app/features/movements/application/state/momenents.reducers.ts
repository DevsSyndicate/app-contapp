import { createReducer, on } from '@ngrx/store';

import { LoadMovement, LoadMovements, LoadMovementSuccess, LoadMovementsSuccess, SubmitMovementForm } from '../../domain/state/movements.actions';
import { movementsInitialState } from '../../domain/state/movements.state';

export const movementsReducer = createReducer(
    movementsInitialState,

    on(LoadMovements, (state) => ({
        ...state,
        loading: true,
        loaded: false,
        edition: {
            formIsSubmitted: false,
            isEditing: false,
            editingMovement: null,
        },
    })),

    on(LoadMovementsSuccess, (state, { movements, total }) => ({
        ...state,
        loading: false,
        loaded: true,
        values: {
            data: movements,
            total,
        },
    })),

    on(SubmitMovementForm, (state) => ({ ...state, edition: { ...state.edition, formIsSubmitted: true } })),

    on(LoadMovement, (state) => ({ ...state, edition: { ...state.edition, isEditing: true } })),

    on(LoadMovementSuccess, (state, { movement }) => ({
        ...state,
        edition: { ...state.edition, editingMovement: movement },
    })),

);
