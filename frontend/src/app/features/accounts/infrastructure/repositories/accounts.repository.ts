import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { AccountsRepositoryInterface } from '../../domain/interfaces/accounts-repository.interface';
import { Account } from '../../domain/models/account.model';

import { ApiRepository } from '@core/infrastructure/repositories/api.repository';

@Injectable()

/**
 * Repository to interact with Accounts
 */
export class AccountsRepository implements AccountsRepositoryInterface {
    constructor(private readonly apiRepository: ApiRepository) {}

    public getList(url: string): Observable<Account[]> {
        return this.apiRepository.get<Account[]>(url);
    }

    public get(url: string, id: string): Observable<Account> {
        return this.apiRepository.get<Account>(`${url}/${id}`);
    }

    public create<Account>(url: string, account: Account): Observable<Account> {
        return this.apiRepository.post<Account>(url, account);
    }

    public update<Account>(url: string, account: Account, id: string): any {
        return this.apiRepository.put(`${url}/${id}`, account);
    }

    public delete(url: string, id: string): Observable<boolean> {
        return this.apiRepository.delete(`${url}/${id}`);
    }
}
