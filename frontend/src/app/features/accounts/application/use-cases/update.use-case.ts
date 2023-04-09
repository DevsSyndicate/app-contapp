import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { AccountsRepositoryInterface } from '../../domain/interfaces/accounts-repository.interface';
import { Account } from '../../domain/models/account.model';

import { environment } from '@env/environment';

@Injectable()

/**
 * Update account use case
 */
export class UpdateAccountUseCase {
    public ApiUrl = `${environment.ApiUrl}/accounts`;

    constructor(@Inject('AccountsRepositoryInterface') private readonly accountsRepository: AccountsRepositoryInterface) {

    }

    public update(account: Account, id: string): Observable<Account> {
        return this.accountsRepository.update<Account>(this.ApiUrl, account, id);
    }
}
