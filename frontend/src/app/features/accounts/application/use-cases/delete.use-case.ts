import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { AccountsRepositoryInterface } from '../../domain/interfaces/accounts-repository.interface';

import { environment } from '@env/environment';

@Injectable()

/**
 * Create account use case
 */
export class DeleteAccountUseCase {
    public ApiUrl = `${environment.ApiUrl}/accounts`;

    constructor(@Inject('AccountsRepositoryInterface') private readonly accountsRepository: AccountsRepositoryInterface) {

    }

    public delete(id: string): Observable<boolean> {
        return this.accountsRepository.delete(this.ApiUrl, id);
    }
}
