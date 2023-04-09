import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { CreateAccountUseCase } from '../../application/use-cases/create.use-case';
import { DeleteAccountUseCase } from '../../application/use-cases/delete.use-case';
import { GetAccountsUseCase } from '../../application/use-cases/get.use-case';
import { UpdateAccountUseCase } from '../../application/use-cases/update.use-case';
import { AccountsAdapterInterface } from '../../domain/interfaces/accounts-adapter.interface';
import { Account } from '../../domain/models/account.model';

@Injectable()

/**
 * Accounts adapter to intercat bewteen infrastructrue and application layer
 */
export class AccountsAdapter implements AccountsAdapterInterface {
    constructor(
        private readonly createAccountUseCase: CreateAccountUseCase,
        private readonly updateAccountUseCase: UpdateAccountUseCase,
        private readonly deleteAccountUseCase: DeleteAccountUseCase,
        private readonly getAccountUseCase: GetAccountsUseCase
    ) {}

    public getList(): Observable<Account[]> {
        return this.getAccountUseCase.getList();
    }

    public get(id: string): Observable<Account> {
        return this.getAccountUseCase.get(id);
    }

    public create(account: Account): Observable<Account> {
        return this.createAccountUseCase.create(account);
    }

    public update(account: Account, id: string): Observable<Account> {
        return this.updateAccountUseCase.update(account, id);
    }

    public delete(id: string): Observable<boolean> {
        return this.deleteAccountUseCase.delete(id);
    }
}
