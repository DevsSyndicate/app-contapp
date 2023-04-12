import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { AccountsRepositoryInterface } from '../../domain/interfaces/accounts-repository.interface';
import { ACCOUNTS_API_URL } from '../constants/api.const';

@Injectable()

/**
 * Create account use case
 */
export class DeleteAccountUseCase {
    constructor(@Inject('AccountsRepositoryInterface') private readonly accountsRepository: AccountsRepositoryInterface) {

    }

    public delete(id: string): Observable<boolean> {
        return this.accountsRepository.delete(ACCOUNTS_API_URL, id);
    }
}
