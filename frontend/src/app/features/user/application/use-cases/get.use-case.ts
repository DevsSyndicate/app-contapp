import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { UserRepositoryInterface } from '../../domain/interfaces/user-repository.interface';
import { ApiUser } from '../../domain/models/user.model';
import { USER_API_URL } from '../constants/api.const';

@Injectable()

/**
 * Get movements use case
 */
export class GetUserUseCase {
    constructor(@Inject('UserRepositoryInterface') private readonly userRepository: UserRepositoryInterface) {

    }

    public get(): Observable<ApiUser> {
        return this.userRepository.get(USER_API_URL);
    }
}
