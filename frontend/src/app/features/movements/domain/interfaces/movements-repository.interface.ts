import { Observable } from 'rxjs';

import { ApiMovements } from '../models/movement-api.model';
import { Movement, MovementFormData } from '../models/movement.model';

/**
 * Repository to interact with Movements
 */
export interface MovementsRepositoryInterface {
    /**
     * Get list of accounts
     */
    getList: (url: string, page: string, perPage: string) => Observable<ApiMovements>;

    /**
     * Get one account
     */
    get: (url: string, id: string) => Observable<Movement>;

    /**
     * Create account
     */
    create: <Movement>(url: string, movement: MovementFormData) => Observable<Movement>;

    /**
     * Update account
     */
    update: <Movement>(url: string, body: MovementFormData, id: string) => Observable<Movement>;

    /**
     * Delete account
     */
    delete: (url: string, id: string) => Observable<boolean>;
}
