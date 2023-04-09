import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { AuthenticationServiceInterface } from '../../domain/interfaces/authentication-service.interface';
import { AuthenticationData, AuthenticationResponse } from '../../domain/models/authentication.models';

import { ApiRepository } from '@core/infrastructure/repositories/api.repository';
import { environment } from '@env/environment';

@Injectable()

/**
 * Authentication service
 */
export class AuthenticationService implements AuthenticationServiceInterface {
    public ApiUrl: string = environment.ApiUrl;

    public baseUrl: string = environment.baseUrl;

    constructor(protected apiService: ApiRepository) {}

    public csrfCookie(): Observable<any> {
        return this.apiService.get<any>(`${this.baseUrl}/sanctum/csrf-cookie`, null);
    }

    public login(data: AuthenticationData): Observable<AuthenticationResponse> {
        return this.apiService.post<AuthenticationResponse>(`${this.ApiUrl}/login`, data);
    }

    public logout(): Observable<void> {
        return this.apiService.post<null>(`${this.ApiUrl}/logout`, {});
    }
}
