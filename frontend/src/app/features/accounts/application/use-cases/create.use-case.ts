import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { AccountsRepositoryInterface } from '../../domain/interfaces/accounts-repository.interface';
import { Account } from '../../domain/models/account.model';
import { ACCOUNTS_API_URL } from '../constants/api.const';

@Injectable()

/**
 * Create account use case
 */
export class CreateAccountUseCase {
    constructor(@Inject('AccountsRepositoryInterface') private readonly accountsRepository: AccountsRepositoryInterface) {

    }

    public create(account: Account): Observable<Account> {
        return this.accountsRepository.create<Account>(ACCOUNTS_API_URL, account);
    }
}
