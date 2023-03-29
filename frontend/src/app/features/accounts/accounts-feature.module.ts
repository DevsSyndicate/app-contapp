import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { AccountsService } from './application/services/accounts.service';
import { AccountsEffects } from './application/state/accounts.effects';
import { accountsReducer } from './application/state/accounts.reducers';

@NgModule({
    imports: [
        StoreModule.forFeature('accounts', accountsReducer),
        EffectsModule.forFeature([AccountsEffects]),
    ],
    providers: [
        AccountsService,
    ],
})

/**
 * Accounts feature module
 */
export class AccountsFeatureModule {}
