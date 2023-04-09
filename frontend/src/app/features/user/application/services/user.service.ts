import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { UserServiceInterface } from '../../domain/interfaces/user-service.interface';
import { ApiUser } from '../../domain/models/user.model';

import { ApiRepository } from '@core/infrastructure/repositories/api.repository';
import { environment } from '@env/environment';

@Injectable()

/**
 * User service
 */
export class UserService implements UserServiceInterface {
    public ApiUrl: string = environment.ApiUrl;

    constructor(protected apiService: ApiRepository) {}

    public getUser(): Observable<ApiUser> {
        return this.apiService.get<ApiUser>(`${this.ApiUrl}/user`);
    }
}
