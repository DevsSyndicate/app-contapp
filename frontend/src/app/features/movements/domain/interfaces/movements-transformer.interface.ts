import { ApiMovement, ApiMovements } from '../models/movement-api.model';
import { Movement, MovementFormData, Movements } from '../models/movement.model';

/**
 * Movements transformer interface
 */
export interface MovementsTranformerInterface {
    /**
     * Transform lsit of all movements from Api response to frontend
     */
    getListFromApi: (apiMovements: ApiMovements) => Movements;

    /**
     * Transform one movement from Api response to frontend
     */
    getFromApi: (apiMovement: ApiMovement) => Movement;

    /**
     * Transform one movement from Api response to frontend form
     */
    getFormFromApi: (movement: Movement) => MovementFormData;
}
