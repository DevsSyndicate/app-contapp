import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { AccountsRepositoryInterface } from '../../domain/interfaces/accounts-repository.interface';
import { Account } from '../../domain/models/account.model';
import { ACCOUNTS_API_URL } from '../constants/api.const';

@Injectable()

/**
 * Update account use case
 */
export class UpdateAccountUseCase {
    constructor(@Inject('AccountsRepositoryInterface') private readonly accountsRepository: AccountsRepositoryInterface) {

    }

    public update(account: Account, id: string): Observable<Account> {
        return this.accountsRepository.update<Account>(ACCOUNTS_API_URL, account, id);
    }
}
