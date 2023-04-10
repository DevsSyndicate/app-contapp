import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { AuthenticationRepositoryInterface } from '../../domain/interfaces/authentication-repository.interface';
import { AuthenticationData, AuthenticationResponse } from '../../domain/models/authentication.models';

import { environment } from '@env/environment';

@Injectable()

/**
 * Login use case
 */
export class LoginUseCase {
    public ApiUrl = `${environment.ApiUrl}/login`;

    constructor(@Inject('AuthenticationRepositoryInterface') private readonly authenticationRepository: AuthenticationRepositoryInterface) {

    }

    public login(data: AuthenticationData): Observable<AuthenticationResponse> {
        return this.authenticationRepository.login(this.ApiUrl, data);
    }
}
