import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { userReducer } from './application/state/user.reducers';
import { UserTranformer } from './application/transformers/user.transformer';
import { GetUserUseCase } from './application/use-cases/get.use-case';
import { UserPort } from './infrastructure/ports/user.port';
import { UserRepository } from './infrastructure/repositories/user.repository';
import { UserEffects } from './infrastructure/state/user.effects';

@NgModule({
    imports: [
        EffectsModule.forFeature([UserEffects]),
        StoreModule.forFeature('user', userReducer),
    ],
    providers: [
        GetUserUseCase,
        UserPort,
        UserTranformer,
        { provide: 'UserRepositoryInterface', useClass: UserRepository },
    ],
})

/**
 * User feature module
 */
export class UserFeatureModule {

}
