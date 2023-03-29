import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, concatMap, map, switchMap, tap } from 'rxjs/operators';

import { AuthenticationEffectsInterface } from '../../domain/interfaces/authentication-effects.interface';
import { Login, LoginError, LoginSuccess, LogoutError, LogoutSuccess } from '../../domain/state/authentication.actions';
import { AuthenticationService } from '../services/authentication.service';

import { Logout } from '@features/authentication/domain/state/authentication-public.actions';

@Injectable()
export class AuthenticationEffects implements AuthenticationEffectsInterface {
    constructor(
        private readonly actions$: Actions,
        private readonly router: Router,
        private readonly authenticationService: AuthenticationService
    ) {}

    public login$ = createEffect(() =>
        this.actions$.pipe(
            ofType(Login),
            switchMap(({ data }) => {
                return this.authenticationService.csrfCookie().pipe(
                    concatMap(() => {
                        return this.authenticationService.login(data).pipe(
                            map(() => LoginSuccess()),
                            catchError(() => of(LoginError()))
                        );
                    })

                );
            })
        ));

    public redirectToDashboardOnLoginSuccess$ = createEffect(
        () =>
            this.actions$.pipe(
                ofType(LoginSuccess),
                tap(() => {
                    this.router.navigate(['/']);
                })
            ),
        { dispatch: false }
    );

    public logout$ = createEffect(() =>
        this.actions$.pipe(
            ofType(Logout),
            switchMap(() =>
                this.authenticationService.logout().pipe(
                    map(() => LogoutSuccess()),
                    catchError(() => of(LogoutError()))
                ))
        ));

    public redirectToLoginOnLogoutSuccess$ = createEffect(
        () =>
            this.actions$.pipe(
                ofType(LogoutSuccess),
                tap(() => {
                    this.router.navigate(['/auth/login']);
                })
            ),
        { dispatch: false }
    );
}
