import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';
import { ROUTER_NAVIGATED, RouterNavigationAction } from '@ngrx/router-store';
import { of } from 'rxjs';
import { catchError, filter, map, mergeMap, switchMap, tap } from 'rxjs/operators';

import { CategoriesEffectsInterface } from '../../domain/interfaces/categories-effects.interface';
import { Category } from '../../domain/models/category.model';
import { LoadCategoriesPublic } from '../../domain/state/categories-public.actions';
import {
    DeleteCategory,
    LoadCategory,
    LoadCategoryError,
    LoadCategories,
    LoadCategoriesError,
    LoadCategoriesSuccess,
    LoadCategorySuccess,
    SubmitCategoryForm,
    SubmitCategoryFormSuccess,
} from '../../domain/state/categories.actions';
import { CategoriesAdapter } from '../adapters/categories.adapter';

@Injectable()

/**
 * Categories effects
 */
export class CategoriesEffects implements CategoriesEffectsInterface {
    constructor(
        private readonly actions$: Actions,
        private readonly router: Router,
        private readonly categoriesAdapter: CategoriesAdapter
    ) {}

    public loadCategoriesFromPublicApi$ = createEffect(() =>
        this.actions$.pipe(
            ofType(LoadCategoriesPublic),
            map(() => LoadCategories())
        ));

    public loadCategoriesOnRouteEnter$ = createEffect(() =>
        this.actions$.pipe(
            ofType(ROUTER_NAVIGATED),
            filter((action: RouterNavigationAction) => /\/categories$/.exec(action.payload.routerState.url) !== null),
            map(() => LoadCategories())
        ));

    public loadCategoryOnEditingFormEnter$ = createEffect(() =>
        this.actions$.pipe(
            ofType(ROUTER_NAVIGATED),
            filter((action: RouterNavigationAction) => /\/categories\/edit\/\d+/.exec(action.payload.routerState.url) !== null),
            map(() => this.router.url.split('/')[3]),
            map((id: string) => LoadCategory({ id }))
        ));

    public loadCategories$ = createEffect(() =>
        this.actions$.pipe(
            ofType(LoadCategories),
            switchMap(() =>
                this.categoriesAdapter.getList().pipe(
                    map((categories: Category[]) => LoadCategoriesSuccess({ categories })),
                    catchError(() => of(LoadCategoriesError()))
                ))
        ));

    public loadCategory$ = createEffect(() =>
        this.actions$.pipe(
            ofType(LoadCategory),
            switchMap(({ id }) =>
                this.categoriesAdapter.get(id).pipe(
                    map((category: Category) => LoadCategorySuccess({ category })),
                    catchError(() => of(LoadCategoryError()))
                ))
        ));

    public deleteCategory$ = createEffect(() =>
        this.actions$.pipe(
            ofType(DeleteCategory),
            mergeMap(({ id }) => this.categoriesAdapter.delete(id)),
            map(() => LoadCategories())
        ));

    public submitCategoryFormForAddNewCategory$ = createEffect(() =>
        this.actions$.pipe(
            ofType(SubmitCategoryForm),
            filter(() => /\/categories\/edit\/\d+/.exec(this.router.url) === null),
            switchMap(({ formValues }) => this.categoriesAdapter.create(formValues)),
            map(() => SubmitCategoryFormSuccess())
        ));

    public submitCategoryFormForEditCategory$ = createEffect(() =>
        this.actions$.pipe(
            ofType(SubmitCategoryForm),
            filter(() => /\/categories\/edit\/\d+/.exec(this.router.url) !== null),
            concatLatestFrom(() => of(this.router.url.split('/')[3])),
            switchMap(([{ formValues }, id]) => this.categoriesAdapter.update(formValues, id)),
            map(() => SubmitCategoryFormSuccess())
        ));

    public redirectToListOnSubmitSuccess$ = createEffect(
        () =>
            this.actions$.pipe(
                ofType(SubmitCategoryFormSuccess),
                tap(() => {
                    this.router.navigate(['categories']);
                })
            ),
        { dispatch: false }
    );
}
