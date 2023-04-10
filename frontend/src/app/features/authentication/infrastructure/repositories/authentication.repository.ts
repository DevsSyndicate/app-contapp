import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { AuthenticationRepositoryInterface } from '../../domain/interfaces/authentication-repository.interface';
import { AuthenticationData, AuthenticationResponse } from '../../domain/models/authentication.models';

import { ApiRepository } from '@core/infrastructure/repositories/api.repository';

@Injectable()

/**
 * Repository to interact with Authentication
 */
export class AuthenticationRepository implements AuthenticationRepositoryInterface {
    constructor(private readonly apiRepository: ApiRepository) {}

    public csrfCookie(url: string): Observable<any> {
        return this.apiRepository.get<any>(url, null);
    }

    public login(url: string, data: AuthenticationData): Observable<AuthenticationResponse> {
        return this.apiRepository.post<AuthenticationResponse>(url, data);
    }

    public logout(url: string): Observable<void> {
        return this.apiRepository.post(url, {});
    }
}
