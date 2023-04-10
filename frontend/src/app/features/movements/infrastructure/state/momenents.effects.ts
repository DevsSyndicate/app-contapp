import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';
import { ROUTER_NAVIGATED, RouterNavigationAction } from '@ngrx/router-store';
import { of } from 'rxjs';
import { catchError, filter, map, mergeMap, switchMap, tap } from 'rxjs/operators';

import { MovementsTranformer } from '../../application/transformers/movements.transformer';
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
import { MovementsAdapter } from '../adapters/movements.adapter';

import { AccountsPublicActions } from '@features/accounts/public.api';
import { CategoriesPublicActions } from '@features/categories/public.api';

@Injectable()

/**
 * Movements effects
 */
export class MovementsEffects implements MovementsEffectsInterface {
    constructor(
        private readonly actions$: Actions,
        private readonly router: Router,
        private readonly movementsAdapter: MovementsAdapter,
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
            map(() => AccountsPublicActions.LoadAccountsPublic())
        ));

    public loadCategoriesOnAddOrEditFormEnter$ = createEffect(() =>
        this.actions$.pipe(
            ofType(ROUTER_NAVIGATED),
            filter((action: RouterNavigationAction) => /\/movements\/(add|edit\/\d+)$/.exec(action.payload.routerState.url) !== null),
            map(() => CategoriesPublicActions.LoadCategoriesPublic())
        ));

    public loadAccountsOnAddOrEditFormEnter$ = createEffect(() =>
        this.actions$.pipe(
            ofType(ROUTER_NAVIGATED),
            filter((action: RouterNavigationAction) => /\/movements\/(add|edit\/\d+)$/.exec(action.payload.routerState.url) !== null),
            map(() => AccountsPublicActions.LoadAccountsPublic())
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
                this.movementsAdapter.getList(page, perPage).pipe(
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
                this.movementsAdapter.get(id).pipe(
                    map((movement: Movement) => this.movementsTranformer.getFormFromApi(movement)),
                    map((movement: MovementFormData) => LoadMovementSuccess({ movement })),
                    catchError(() => of(LoadMovementError()))
                ))
        ));

    public deleteMovement$ = createEffect(() =>
        this.actions$.pipe(
            ofType(DeleteMovement),
            mergeMap(({ id }) => this.movementsAdapter.delete(id).pipe(
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
            map(() => AccountsPublicActions.LoadAccountsPublic())
        ));

    public submitMovementFormForAddNewMovement$ = createEffect(() =>
        this.actions$.pipe(
            ofType(SubmitMovementForm),
            filter(() => /\/movements\/edit\/\d+/.exec(this.router.url) === null),
            switchMap(({ formValues }) => this.movementsAdapter.create(formValues)),
            map(() => SubmitMovementFormSuccess())
        ));

    public submitMovementFormForEditMovement$ = createEffect(() =>
        this.actions$.pipe(
            ofType(SubmitMovementForm),
            filter(() => /\/movements\/edit\/\d+/.exec(this.router.url) !== null),
            concatLatestFrom(() => of(this.router.url.split('/')[3])),
            switchMap(([{ formValues }, id]) => this.movementsAdapter.update(formValues, id)),
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
