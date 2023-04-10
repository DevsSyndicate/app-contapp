import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { GetUserUseCase } from '../../application/use-cases/get.use-case';
import { UserPortInterface } from '../../domain/interfaces/user-port.interface';
import { ApiUser } from '../../domain/models/user.model';

@Injectable()

/**
 * User port to intercat bewteen infrastructrue and application layer
 */
export class UserPort implements UserPortInterface {
    constructor(
        private readonly getUserUseCase: GetUserUseCase
    ) {}

    public getUser(): Observable<ApiUser> {
        return this.getUserUseCase.get();
    }
}
