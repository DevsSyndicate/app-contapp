import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';
import { ROUTER_NAVIGATED, RouterNavigationAction } from '@ngrx/router-store';
import { of } from 'rxjs';
import { catchError, filter, map, mergeMap, switchMap, tap } from 'rxjs/operators';

import { MovementsEffectsInterface } from '../../domain/interfaces/movements-effects.interface';
import { ApiMovements } from '../../domain/models/movement-api.model';
import { Movement, MovementFormData, Movements } from '../../domain/models/movement.model';
import {
    DeleteMovement,
    DeleteMovementSuccess,
    LoadMovement,
    LoadMovementError,
    LoadMovements,
    LoadMovementsError,
    LoadMovementsSuccess,
    LoadMovementSuccess,
    SubmitMovementForm,
    SubmitMovementFormSuccess,
} from '../../domain/state/movements.actions';
import { MovementsService } from '../services/movements.service';
import { MovementsTranformer } from '../transformers/movements.transformer';

import { LoadAccounts } from '@features/accounts/domain/state/accounts.actions';
import { LoadCategories } from '@features/categories/domain/state/categories.actions';

@Injectable()

/**
 * Movements effects
 */
export class MovementsEffects implements MovementsEffectsInterface {
    constructor(
        private readonly actions$: Actions,
        private readonly router: Router,
        private readonly movementsService: MovementsService,
        private readonly movementsTranformer: MovementsTranformer
    ) {}

    public loadMovementsOnRouteEnter$ = createEffect(() =>
        this.actions$.pipe(
            ofType(ROUTER_NAVIGATED),
            filter((action: RouterNavigationAction) => /\/movements$/.exec(action.payload.routerState.url) !== null),
            map(() => LoadMovements({ page: '1', perPage: '20' }))
        ));

    public loadAccountsOnRouteEnter$ = createEffect(() =>
        this.actions$.pipe(
            ofType(ROUTER_NAVIGATED),
            filter((action: RouterNavigationAction) => /\/movements$/.exec(action.payload.routerState.url) !== null),
            map(() => LoadAccounts())
        ));

    public loadCategoriesOnAddOrEditFormEnter$ = createEffect(() =>
        this.actions$.pipe(
            ofType(ROUTER_NAVIGATED),
            filter((action: RouterNavigationAction) => /\/movements\/(add|edit\/\d+)$/.exec(action.payload.routerState.url) !== null),
            map(() => LoadCategories())
        ));

    public loadAccountsOnAddOrEditFormEnter$ = createEffect(() =>
        this.actions$.pipe(
            ofType(ROUTER_NAVIGATED),
            filter((action: RouterNavigationAction) => /\/movements\/(add|edit\/\d+)$/.exec(action.payload.routerState.url) !== null),
            map(() => LoadAccounts())
        ));

    public loadMovementOnEditingFormEnter$ = createEffect(() =>
        this.actions$.pipe(
            ofType(ROUTER_NAVIGATED),
            filter((action: RouterNavigationAction) => /\/movements\/edit\/\d+/.exec(action.payload.routerState.url) !== null),
            map(() => this.router.url.split('/')[3]),
            map((id: string) => LoadMovement({ id }))
        ));

    public loadMovements$ = createEffect(() =>
        this.actions$.pipe(
            ofType(LoadMovements),
            switchMap(({ page, perPage }) =>
                this.movementsService.getList(page, perPage).pipe(
                    map((apiMovements: ApiMovements) => this.movementsTranformer.getListFromApi(apiMovements)),
                    map((movements: Movements) =>
                        LoadMovementsSuccess({
                            movements: movements.data,
                            total: movements.total,
                            currentPage: movements.current_page,
                        })),
                    catchError(() => of(LoadMovementsError()))
                ))
        ));

    public loadMovement$ = createEffect(() =>
        this.actions$.pipe(
            ofType(LoadMovement),
            switchMap(({ id }) =>
                this.movementsService.get(id).pipe(
                    map((movement: Movement) => this.movementsTranformer.getFormFromApi(movement)),
                    map((movement: MovementFormData) => LoadMovementSuccess({ movement })),
                    catchError(() => of(LoadMovementError()))
                ))
        ));

    public deleteMovement$ = createEffect(() =>
        this.actions$.pipe(
            ofType(DeleteMovement),
            mergeMap(({ id }) => this.movementsService.delete(id).pipe(
                map(() => DeleteMovementSuccess())
            ))
        ));

    public refreshMovementsOnMovementDelete$ = createEffect(() =>
        this.actions$.pipe(
            ofType(DeleteMovementSuccess),
            map(() => LoadMovements({ page: '1', perPage: '20' }))
        ));

    public refreshAccountsOnMovementDelete$ = createEffect(() =>
        this.actions$.pipe(
            ofType(DeleteMovementSuccess),
            map(() => LoadAccounts())
        ));

    public submitMovementFormForAddNewMovement$ = createEffect(() =>
        this.actions$.pipe(
            ofType(SubmitMovementForm),
            filter(() => /\/movements\/edit\/\d+/.exec(this.router.url) === null),
            switchMap(({ formValues }) => this.movementsService.add(formValues)),
            map(() => SubmitMovementFormSuccess())
        ));

    public submitMovementFormForEditMovement$ = createEffect(() =>
        this.actions$.pipe(
            ofType(SubmitMovementForm),
            filter(() => /\/movements\/edit\/\d+/.exec(this.router.url) !== null),
            concatLatestFrom(() => of(this.router.url.split('/')[3])),
            switchMap(([{ formValues }, id]) => this.movementsService.update(formValues, id)),
            map(() => SubmitMovementFormSuccess())
        ));

    public redirectToListOnSubmitSuccess$ = createEffect(
        () =>
            this.actions$.pipe(
                ofType(SubmitMovementFormSuccess),
                tap(() => {
                    this.router.navigate(['movements']);
                })
            ),
        { dispatch: false }
    );
}
