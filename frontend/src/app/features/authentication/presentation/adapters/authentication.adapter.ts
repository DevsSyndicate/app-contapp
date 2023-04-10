import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { AuthenticationPresentationAdapterInterface } from '../../domain/interfaces/authentication-presentation-adapter.interface';
import { AuthenticationData } from '../../domain/models/authentication.models';
import { Login } from '../../domain/state/authentication.actions';

@Injectable()

/**
 * Authentication presentation adapter
 */
export class AuthenticationPresentationAdapter implements AuthenticationPresentationAdapterInterface {
    constructor(private readonly store: Store) {}

    public login(data: AuthenticationData): void {
        this.store.dispatch(Login({ data }));
    }
}
