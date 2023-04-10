import { IDatePickerConfig } from 'ng2-date-picker';
import { Observable } from 'rxjs';

import { Movement, MovementFormData } from '../models/movement.model';

import { AccountsPublicModels } from '@features/accounts/public.api';

/**
 * Movements presentation adapter interface
 */
export interface MovementsPresentationAdapterInterface {
    /**
     * Get list of accounts
     */
    getAccounts: () => Observable<AccountsPublicModels.AccountPublic[]>;

    /**
     * Get list of accounts for selects
     */
    getAcountsForSelect: () => Observable<any[]>;

    /**
     * Get list of categories for selects
     */
    getCategoriesForSelect: () => Observable<any[]>;

    /**
     * Get form submuision status
     */
    getFormSubmitted: () => Observable<boolean>;

    /**
     * Get movement edition status
     */
    getIsEditing: () => Observable<boolean>;

    /**
     * Get editing movement
     */
    getEditingMovement: () => Observable<MovementFormData>;

    /**
     * Submit movement form
     */
    submitForm: (formValues: MovementFormData) => void;

    /**
     * Get datepicker configuration
     */
    getDatePickerConfig: () => IDatePickerConfig;

    /**
     * Get list of movements
     */
    getMovements: () => Observable<Movement[]>;

    /**
     * Get number of total movements
     */
    getTotalMovementItems: () => Observable<number>;

    /**
     * Delete movement
     */
    deleteMovement: (id: string) => void;

    /**
     * Change movements page
     */
    changeMovementsPage: (selectedPage: number) => void;
}
