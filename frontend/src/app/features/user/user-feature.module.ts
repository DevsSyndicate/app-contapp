import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { UserService } from './application/services/user.service';
import { UserEffects } from './application/state/user.effects';
import { userReducer } from './application/state/user.reducers';
import { UserTranformer } from './application/transformers/user.transformer';

@NgModule({
    imports: [
        EffectsModule.forFeature([UserEffects]),
        StoreModule.forFeature('user', userReducer),
    ],
    providers: [
        UserService,
        UserTranformer,
    ],
})

/**
 * User feature module
 */
export class UserFeatureModule {

}
