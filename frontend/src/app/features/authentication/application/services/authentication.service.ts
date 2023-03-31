import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { AuthenticationServiceInterface } from '../../domain/interfaces/authentication-service.interface';
import { AuthenticationData, JwtResponse } from '../../domain/models/authentication.models';

import { ApiService } from '@core/infrastructure/api/api.service';
import { environment } from '@env/environment';

@Injectable()

/**
 * Authentication service
 */
export class AuthenticationService implements AuthenticationServiceInterface {
    public ApiUrl: string = environment.ApiUrl;

    public baseUrl: string = environment.baseUrl;

    constructor(protected apiService: ApiService) {}

    public csrfCookie(): Observable<any> {
        return this.apiService.get<any>(`${this.baseUrl}/sanctum/csrf-cookie`, null);
    }

    public login(data: AuthenticationData): Observable<JwtResponse> {
        return this.apiService.post<JwtResponse>(`${this.ApiUrl}/login`, data);
    }

    public logout(): Observable<void> {
        return this.apiService.post<null>(`${this.ApiUrl}/logout`, {});
    }
}
