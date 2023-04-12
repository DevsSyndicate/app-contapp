import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { AuthenticationRepositoryInterface } from '../../domain/interfaces/authentication-repository.interface';
import { AUTHENTICATION_API_URL } from '../constants/api.const';

@Injectable()

/**
 * Logout use case
 */
export class LogoutUseCase {
    constructor(@Inject('AuthenticationRepositoryInterface') private readonly authenticationRepository: AuthenticationRepositoryInterface) {

    }

    public logout(): Observable<void> {
        return this.authenticationRepository.logout(`${AUTHENTICATION_API_URL}/logout`);
    }
}
