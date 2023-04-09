import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { accountsReducer } from './application/state/accounts.reducers';
import { CreateAccountUseCase } from './application/use-cases/create.use-case';
import { DeleteAccountUseCase } from './application/use-cases/delete.use-case';
import { GetAccountsUseCase } from './application/use-cases/get.use-case';
import { UpdateAccountUseCase } from './application/use-cases/update.use-case';
import { AccountsAdapter } from './infrastructure/adapters/accounts.adapter';
import { AccountsRepository } from './infrastructure/repositories/accounts.repository';
import { AccountsEffects } from './infrastructure/state/accounts.effects';

@NgModule({
    imports: [
        StoreModule.forFeature('accounts', accountsReducer),
        EffectsModule.forFeature([AccountsEffects]),
    ],
    providers: [
        AccountsAdapter,
        CreateAccountUseCase,
        DeleteAccountUseCase,
        GetAccountsUseCase,
        UpdateAccountUseCase,
        { provide: 'AccountsRepositoryInterface', useClass: AccountsRepository },
    ],
})

/**
 * Accounts feature module
 */
export class AccountsFeatureModule {}
