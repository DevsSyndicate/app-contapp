import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { UserRepositoryInterface } from '../../domain/interfaces/user-repository.interface';
import { ApiUser } from '../../domain/models/user.model';

import { ApiRepository } from '@core/infrastructure/repositories/api.repository';

@Injectable()

/**
 * Repistory to interact with Users
 */
export class UserRepository implements UserRepositoryInterface {
    constructor(private readonly apiRepository: ApiRepository) {}

    public get(url: string): Observable<ApiUser> {
        return this.apiRepository.get<ApiUser>(url);
    }
}
