import { Injectable } from '@angular/core';
import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';
import { ROUTER_NAVIGATED, RouterNavigationAction } from '@ngrx/router-store';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { catchError, filter, map, switchMap } from 'rxjs/operators';

import { getUser } from './user.selectors';
import { UserTranformer } from '../../application/transformers/user.transformer';
import { UserEffectsInterface } from '../../domain/interfaces/user-effects.interface';
import { ApiUser, User } from '../../domain/models/user.model';
import { LoadUser, LoadUserError, LoadUserSuccess } from '../../domain/state/user.actions';
import { UserPort } from '../ports/user.port';

@Injectable()

/**
 * User effects
 */
export class UserEffects implements UserEffectsInterface {
    constructor(
        private readonly actions$: Actions,
        private readonly store: Store,
        private readonly userPort: UserPort,
        private readonly userTranformer: UserTranformer
    ) {}

    public loadUserOnRestrictedZoneAccess$ = createEffect(() =>
        this.actions$.pipe(
            ofType(ROUTER_NAVIGATED),
            filter((action: RouterNavigationAction) => !action.payload.routerState.url.includes('/auth')),
            concatLatestFrom(() => this.store.select(getUser)),
            filter(([_, currentUser]) => !currentUser),
            map(() => LoadUser())
        ));

    public loadUser$ = createEffect(() =>
        this.actions$.pipe(
            ofType(LoadUser),
            switchMap(() => {
                return this.userPort.getUser().pipe(
                    map((apiUser: ApiUser) => this.userTranformer.getUserFromApi(apiUser)),
                    map((user: User) => LoadUserSuccess({ user })),
                    catchError(() => of(LoadUserError()))

                );
            })
        ));
}
