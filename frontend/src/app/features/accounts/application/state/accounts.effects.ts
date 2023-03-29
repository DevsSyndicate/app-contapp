import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';
import { ROUTER_NAVIGATED, RouterNavigationAction } from '@ngrx/router-store';
import { of } from 'rxjs';
import { catchError, filter, map, mergeMap, switchMap, tap } from 'rxjs/operators';

import { AccountsEffectsInterface } from '../../domain/interfaces/accounts-effects.interface';
import { Account } from '../../domain/models/account.model';
import {
    DeleteAccount,
    LoadAccount,
    LoadAccountError,
    LoadAccounts,
    LoadAccountsError,
    LoadAccountsSuccess,
    LoadAccountSuccess,
    SubmitAccountForm,
    SubmitAccountFormSuccess,
} from '../../domain/state/accounts.actions';
import { AccountsService } from '../services/accounts.service';

@Injectable()

/**
 * Accounts effects
 */
export class AccountsEffects implements AccountsEffectsInterface {
    constructor(
        private readonly actions$: Actions,
        private readonly router: Router,
        private readonly accountsService: AccountsService
    ) {}

    public loadAccountsOnRouteEnter$ = createEffect(() =>
        this.actions$.pipe(
            ofType(ROUTER_NAVIGATED),
            filter((action: RouterNavigationAction) => /\/accounts$/.exec(action.payload.routerState.url) !== null),
            map(() => LoadAccounts())
        ));

    public loadAccountOnEditingFormEnter$ = createEffect(() =>
        this.actions$.pipe(
            ofType(ROUTER_NAVIGATED),
            filter((action: RouterNavigationAction) => /\/accounts\/edit\/\d+/.exec(action.payload.routerState.url) !== null),
            map(() => this.router.url.split('/')[3]),
            map((id: string) => LoadAccount({ id }))
        ));

    public loadAccounts$ = createEffect(() =>
        this.actions$.pipe(
            ofType(LoadAccounts),
            switchMap(() =>
                this.accountsService.getList().pipe(
                    map((accounts: Account[]) => LoadAccountsSuccess({ accounts })),
                    catchError(() => of(LoadAccountsError()))
                ))
        ));

    public loadAccount$ = createEffect(() =>
        this.actions$.pipe(
            ofType(LoadAccount),
            switchMap(({ id }) =>
                this.accountsService.get(id).pipe(
                    map((account: Account) => LoadAccountSuccess({ account })),
                    catchError(() => of(LoadAccountError()))
                ))
        ));

    public deleteAccount$ = createEffect(() =>
        this.actions$.pipe(
            ofType(DeleteAccount),
            mergeMap(({ id }) => this.accountsService.delete(id)),
            map(() => LoadAccounts())
        ));

    public submitAccountFormForAddNewAccount$ = createEffect(() =>
        this.actions$.pipe(
            ofType(SubmitAccountForm),
            filter(() => /\/accounts\/edit\/\d+/.exec(this.router.url) === null),
            switchMap(({ formValues }) => this.accountsService.add(formValues)),
            map(() => SubmitAccountFormSuccess())
        ));

    public submitAccountFormForEditAccount$ = createEffect(() =>
        this.actions$.pipe(
            ofType(SubmitAccountForm),
            filter(() => /\/accounts\/edit\/\d+/.exec(this.router.url) !== null),
            concatLatestFrom(() => of(this.router.url.split('/')[3])),
            switchMap(([{ formValues }, id]) => this.accountsService.update(formValues, id)),
            map(() => SubmitAccountFormSuccess())
        ));

    public redirectToListOnSubmitSuccess$ = createEffect(
        () =>
            this.actions$.pipe(
                ofType(SubmitAccountFormSuccess),
                tap(() => {
                    this.router.navigate(['accounts']);
                })
            ),
        { dispatch: false }
    );
}
