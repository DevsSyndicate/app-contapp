import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { GetUserUseCase } from '../../application/use-cases/get.use-case';
import { UserAdapterInterface } from '../../domain/interfaces/user-adapter.interface';
import { ApiUser } from '../../domain/models/user.model';

@Injectable()

/**
 * User adapter to intercat bewteen infrastructrue and application layer
 */
export class UserAdapter implements UserAdapterInterface {
    constructor(
        private readonly getUserUseCase: GetUserUseCase
    ) {}

    public getUser(): Observable<ApiUser> {
        return this.getUserUseCase.get();
    }
}
