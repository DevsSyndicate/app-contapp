import { Observable } from 'rxjs';

import { ApiMovements } from '../models/movement-api.model';
import { Movement, MovementFormData } from '../models/movement.model';

/**
 * Movements port interface
 */
export interface MovementsPortInterface {
    /**
     * Call get movements list Use Case
     */
    getList: (page: string, perPage: string) => Observable<ApiMovements>;

    /**
     * Call get movement Use Case
     */
    get: (id: string) => Observable<Movement>;

    /**
     * Call create new movement Use Case
     */
    create: (movement: MovementFormData) => Observable<Movement>;

    /**
     * Call update movement Use Case
     */
    update: (movement: MovementFormData, id: string) => Observable<Movement>;

    /**
     * Call delete movement Use Case
     */
    delete: (id: string) => Observable<boolean>;

}
