import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { AccountsRepositoryInterface } from '../../domain/interfaces/accounts-repository.interface';
import { Account } from '../../domain/models/account.model';

import { environment } from '@env/environment';

@Injectable()

/**
 * Create account use case
 */
export class GetAccountsUseCase {
    public ApiUrl = `${environment.ApiUrl}/accounts`;

    constructor(@Inject('AccountsRepositoryInterface') private readonly accountsRepository: AccountsRepositoryInterface) {

    }

    public getList(): Observable<Account[]> {
        return this.accountsRepository.getList(this.ApiUrl);
    }

    public get(id: string): Observable<Account> {
        return this.accountsRepository.get(this.ApiUrl, id);
    }
}
