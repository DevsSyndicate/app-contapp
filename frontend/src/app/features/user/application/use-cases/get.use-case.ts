import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { UserRepositoryInterface } from '../../domain/interfaces/user-repository.interface';
import { ApiUser } from '../../domain/models/user.model';

import { environment } from '@env/environment';

@Injectable()

/**
 * Get movements use case
 */
export class GetUserUseCase {
    public ApiUrl = `${environment.ApiUrl}/user`;

    constructor(@Inject('UserRepositoryInterface') private readonly userRepository: UserRepositoryInterface) {

    }

    public get(): Observable<ApiUser> {
        return this.userRepository.get(this.ApiUrl);
    }
}
