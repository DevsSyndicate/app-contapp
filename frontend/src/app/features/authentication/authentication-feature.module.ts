import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';

import { GetCsrfCookieUseCase } from './application/use-cases/csrf-cookie.use-case';
import { LoginUseCase } from './application/use-cases/login.use-case';
import { LogoutUseCase } from './application/use-cases/logout.use-case';
import { AuthenticationPort } from './infrastructure/ports/authentication.port';
import { AuthenticationRepository } from './infrastructure/repositories/authentication.repository';
import { AuthenticationEffects } from './infrastructure/state/authentication.effects';

@NgModule({
    imports: [
        EffectsModule.forFeature([AuthenticationEffects]),
    ],
    providers: [
        AuthenticationPort,
        GetCsrfCookieUseCase,
        LoginUseCase,
        LogoutUseCase,
        { provide: 'AuthenticationRepositoryInterface', useClass: AuthenticationRepository },
    ],
})

/**
 * Authentication feature module
 */
export class AuthenticationFeatureModule {}
