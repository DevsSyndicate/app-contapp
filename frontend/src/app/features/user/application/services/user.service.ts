import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { UserServiceInterface } from '../../domain/interfaces/user-service.interface';
import { ApiUser } from '../../domain/models/user.model';

import { ApiService } from '@core/infrastructure/api/api.service';
import { environment } from '@env/environment';

@Injectable()

/**
 * User service
 */
export class UserService implements UserServiceInterface {
    public ApiUrl: string = environment.ApiUrl;

    constructor(protected apiService: ApiService) {}

    public getUser(): Observable<ApiUser> {
        return this.apiService.get<ApiUser>(`${this.ApiUrl}/user`);
    }
}
