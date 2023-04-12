import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { AccountsRepositoryInterface } from '../../domain/interfaces/accounts-repository.interface';
import { Account } from '../../domain/models/account.model';
import { ACCOUNTS_API_URL } from '../constants/api.const';

@Injectable()

/**
 * Create account use case
 */
export class GetAccountsUseCase {
    constructor(@Inject('AccountsRepositoryInterface') private readonly accountsRepository: AccountsRepositoryInterface) {

    }

    public getList(): Observable<Account[]> {
        return this.accountsRepository.getList(ACCOUNTS_API_URL);
    }

    public get(id: string): Observable<Account> {
        return this.accountsRepository.get(ACCOUNTS_API_URL, id);
    }
}
