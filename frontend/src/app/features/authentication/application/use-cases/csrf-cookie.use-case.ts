import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { AuthenticationRepositoryInterface } from '../../domain/interfaces/authentication-repository.interface';

import { environment } from '@env/environment';

@Injectable()

/**
 * Get CRSF cookie use case
 */
export class GetCsrfCookieUseCase {
    public ApiUrl = `${environment.ApiUrl}`;

    constructor(@Inject('AuthenticationRepositoryInterface') private readonly authenticationRepository: AuthenticationRepositoryInterface) {

    }

    public csrfCookie(): Observable<any> {
        return this.authenticationRepository.csrfCookie(`${this.ApiUrl}/sanctum/csrf-cookie`);
    }
}
