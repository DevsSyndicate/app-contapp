import { Movement, MovementFormData } from '../models/movement.model';

export interface MovementsState {
    loaded: boolean;
    loading: boolean;
    values: {
        data: Movement[];
        total: number;
        currentPage?: number;
    };
    edition: {
        formIsSubmitted: boolean;
        isEditing: boolean;
        editingMovement: MovementFormData;
    };
}

export const movementsInitialState: MovementsState = {
    loaded: false,
    loading: false,
    values: {
        data: null,
        total: null,
        currentPage: null,
    },
    edition: {
        formIsSubmitted: false,
        isEditing: false,
        editingMovement: null,
    },
};
