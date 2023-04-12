import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { AuthenticationRepositoryInterface } from '../../domain/interfaces/authentication-repository.interface';
import { AuthenticationData, AuthenticationResponse } from '../../domain/models/authentication.models';
import { AUTHENTICATION_API_URL } from '../constants/api.const';

@Injectable()

/**
 * Login use case
 */
export class LoginUseCase {
    constructor(@Inject('AuthenticationRepositoryInterface') private readonly authenticationRepository: AuthenticationRepositoryInterface) {

    }

    public login(data: AuthenticationData): Observable<AuthenticationResponse> {
        return this.authenticationRepository.login(`${AUTHENTICATION_API_URL}/login`, data);
    }
}
