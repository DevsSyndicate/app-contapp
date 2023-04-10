import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { AuthenticationPresentationFacadeInterface } from '../../domain/interfaces/authentication-presentation-facade.interface';
import { AuthenticationData } from '../../domain/models/authentication.models';
import { Login } from '../../domain/state/authentication.actions';

@Injectable()

/**
 * Authentication presentation facade
 */
export class AuthenticationPresentationFacade implements AuthenticationPresentationFacadeInterface {
    constructor(private readonly store: Store) {}

    public login(data: AuthenticationData): void {
        this.store.dispatch(Login({ data }));
    }
}
