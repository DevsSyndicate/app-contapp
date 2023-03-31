import { Observable } from 'rxjs';

import { ApiMovements } from '../models/movement-api.model';
import { Movement, MovementFormData } from '../models/movement.model';

/**
 * Movements service interface
 */
export interface MovementsServiceInterface {
    /**
	 * Get all movements
	 */
    getList: (page: string, perPage: string) => Observable<ApiMovements>;

    /**
	 * Get movement
	 */
    get: (id: string) => Observable<Movement>;

    /**
	 * Add movement
	 */
    add: (resource: MovementFormData) => Observable<Movement>;

    /**
	 * Update movement
	 */
    update: (resource: MovementFormData, id: string) => void;

    /**
	 * Delete movement
	 */
    delete: (id: string) => void;

    /**
	 * Get movements list for selects
	 */
    getListSelect: () => Observable<Array<{ id: string; text: string }>>;
}
