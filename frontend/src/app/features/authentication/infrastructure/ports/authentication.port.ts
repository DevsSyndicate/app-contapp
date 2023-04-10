import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { GetCsrfCookieUseCase } from '../../application/use-cases/csrf-cookie.use-case';
import { LoginUseCase } from '../../application/use-cases/login.use-case';
import { AuthenticationPortInterface } from '../../domain/interfaces/authentication-port.interface';
import { AuthenticationData, AuthenticationResponse } from '../../domain/models/authentication.models';

import { LogoutUseCase } from '@features/authentication/application/use-cases/logout.use-case';

@Injectable()

/**
 * Authentication port to intercat bewteen infrastructrue and application layer
 */
export class AuthenticationPort implements AuthenticationPortInterface {
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
