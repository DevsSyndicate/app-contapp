import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { IDatePickerConfig } from 'ng2-date-picker';
import { Observable } from 'rxjs';

import { getEditingMovement, getIsEditingMovement, getMovements, getSubmittedFormStatus, getTotalMovementsValue } from '../../application/state/momenents.selectors';
import { MovementsPresentationFacadeInterface } from '../../domain/interfaces/movements-presentation-facade.interface';
import { Movement, MovementFormData } from '../../domain/models/movement.model';
import { DeleteMovement, LoadMovements, SubmitMovementForm } from '../../domain/state/movements.actions';
import { MovementsState } from '../../domain/state/movements.state';

import { AccountsPublicModels, AccountsPublicSelectors } from '@features/accounts/public.api';
import { CategoriesPublicSelectors } from '@features/categories/public.api';

@Injectable()

/**
 * Movements presentation facade
 */
export class MovementsPresentationFacade implements MovementsPresentationFacadeInterface {
    constructor(private readonly store: Store<MovementsState>) {}

    public getAccounts(): Observable<AccountsPublicModels.AccountPublic[]> {
        return this.store.select(AccountsPublicSelectors.getAccountsPublic);
    }

    public getAcountsForSelect(): Observable<any[]> {
        return this.store.select(AccountsPublicSelectors.getAccountsForSelectPublic);
    }

    public getCategoriesForSelect(): Observable<any[]> {
        return this.store.select(CategoriesPublicSelectors.getCategoriesForSelectPublic);
    }

    public getFormSubmitted(): Observable<boolean> {
        return this.store.select(getSubmittedFormStatus);
    }

    public getIsEditing(): Observable<boolean> {
        return this.store.select(getIsEditingMovement);
    }

    public getEditingMovement(): Observable<MovementFormData> {
        return this.store.select(getEditingMovement);
    }

    public submitForm(formValues: MovementFormData): void {
        this.store.dispatch(SubmitMovementForm({ formValues }));
    }

    public getDatePickerConfig(): IDatePickerConfig {
        return {
            format: 'DD-MM-YYYY',
            firstDayOfWeek: 'mo',
        };
    }

    public getMovements(): Observable<Movement[]> {
        return this.store.select(getMovements);
    }

    public getTotalMovementItems(): Observable<number> {
        return this.store.select(getTotalMovementsValue);
    }

    public deleteMovement(id: string): void {
        this.store.dispatch(DeleteMovement({ id }));
    }

    public changeMovementsPage(selectedPage: number): void {
        this.store.dispatch(LoadMovements({ page: selectedPage.toString(), perPage: '20' }));
    }
}
