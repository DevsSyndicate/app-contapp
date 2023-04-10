import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { GetCsrfCookieUseCase } from '../../application/use-cases/csrf-cookie.use-case';
import { LoginUseCase } from '../../application/use-cases/login.use-case';
import { AuthenticationAdapterInterface } from '../../domain/interfaces/authentication-adapter.interface';
import { AuthenticationData, AuthenticationResponse } from '../../domain/models/authentication.models';

import { LogoutUseCase } from '@features/authentication/application/use-cases/logout.use-case';

@Injectable()

/**
 * Authentication adapter to intercat bewteen infrastructrue and application layer
 */
export class AuthenticationAdapter implements AuthenticationAdapterInterface {
    constructor(
        private readonly getCsrfCookieUseCase: GetCsrfCookieUseCase,
        private readonly loginUseCase: LoginUseCase,
        private readonly logoutUseCase: LogoutUseCase,
    ) {}

    public csrfCookie(): Observable<any> {
        return this.getCsrfCookieUseCase.csrfCookie();
    }

    public login(data: AuthenticationData): Observable<AuthenticationResponse> {
        return this.loginUseCase.login(data);
    }

    public logout(): Observable<void> {
        return this.logoutUseCase.logout();
    }
}
