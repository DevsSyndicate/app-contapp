import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { AuthenticationRepositoryInterface } from '../../domain/interfaces/authentication-repository.interface';

import { environment } from '@env/environment';

@Injectable()

/**
 * Logout use case
 */
export class LogoutUseCase {
    public ApiUrl = `${environment.ApiUrl}/logout`;

    constructor(@Inject('AuthenticationRepositoryInterface') private readonly authenticationRepository: AuthenticationRepositoryInterface) {

    }

    public logout(): Observable<void> {
        return this.authenticationRepository.logout(this.ApiUrl);
    }
}
