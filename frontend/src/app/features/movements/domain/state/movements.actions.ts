import { createAction, props } from '@ngrx/store';

import { Movement, MovementFormData } from '../models/movement.model';

export enum MovementsActionTypes {
    LOAD_MOVEMENTS = '[Movements] Load movements',
    LOAD_MOVEMENTS_SUCCESS = '[Movements] Load movements success',
    LOAD_MOVEMENTS_ERROR = '[Movements] Load movements error',

    LOAD_MOVEMENT = '[Movements] Load movement',
    LOAD_MOVEMENT_SUCCESS = '[Movements] Load movement success',
    LOAD_MOVEMENT_ERROR = '[Movements] Load movement error',

    DELETE_MOVEMENT = '[Movements] Delete movement',
    DELETE_MOVEMENT_SUCCESS = '[Movements] Delete movement success',

    SUBMIT_MOVEMENT_FORM = '[Movements] Submit movement form',
    SUBMIT_MOVEMENT_FORM_SUCCESS = '[Movements] Submit movement form success',
}

export const LoadMovements = createAction(
    MovementsActionTypes.LOAD_MOVEMENTS,
    props<{ page: string; perPage: string }>()
);
export const LoadMovementsSuccess = createAction(
    MovementsActionTypes.LOAD_MOVEMENTS_SUCCESS,
    props<{ movements: Movement[]; total: number; currentPage: number }>()
);
export const LoadMovementsError = createAction(MovementsActionTypes.LOAD_MOVEMENTS_ERROR);

export const LoadMovement = createAction(MovementsActionTypes.LOAD_MOVEMENT, props<{ id: string }>());
export const LoadMovementSuccess = createAction(
    MovementsActionTypes.LOAD_MOVEMENT_SUCCESS,
    props<{ movement: MovementFormData }>()
);
export const LoadMovementError = createAction(MovementsActionTypes.LOAD_MOVEMENT_ERROR);

export const DeleteMovement = createAction(MovementsActionTypes.DELETE_MOVEMENT, props<{ id: string }>());
export const DeleteMovementSuccess = createAction(MovementsActionTypes.DELETE_MOVEMENT_SUCCESS);

export const SubmitMovementForm = createAction(
    MovementsActionTypes.SUBMIT_MOVEMENT_FORM,
    props<{ formValues: MovementFormData }>()
);
export const SubmitMovementFormSuccess = createAction(MovementsActionTypes.SUBMIT_MOVEMENT_FORM_SUCCESS);
