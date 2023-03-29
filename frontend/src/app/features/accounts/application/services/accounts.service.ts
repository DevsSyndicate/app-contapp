import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { AccountsServiceInterface } from '../../domain/interfaces/accounts-service.interface';
import { Account } from '../../domain/models/account.model';

import { ApiService } from '@core/infrastructure/api/api.service';
import { environment } from '@env/environment';

@Injectable()

/**
 * Accounts service
 */
export class AccountsService implements AccountsServiceInterface {
    public ApiUrl = `${environment.ApiUrl}/accounts`;

    constructor(protected apiService: ApiService) {}

    public getList(): Observable<Account[]> {
        return this.apiService.get<Account[]>(this.ApiUrl);
    }

    public get(id: string): Observable<Account> {
        return this.apiService.get<Account>(`${this.ApiUrl}/${id}`);
    }

    public add(resource: Account): Observable<Account> {
        return this.apiService.post<Account>(this.ApiUrl, resource);
    }

    public update(resource: Account, id: string) {
        return this.apiService.put(`${this.ApiUrl}/${id}`, resource);
    }

    public delete(id: string) {
        return this.apiService.delete(`${this.ApiUrl}/${id}`);
    }

    public getListSelect(): Observable<Array<{ id: string; text: string }>> {
        return this.apiService
            .get<Account[]>(`${this.ApiUrl}/select`)
            .pipe(map((response: Account[]) => response.map((element) => ({ id: element.id, text: element.name }))));
    }
}
