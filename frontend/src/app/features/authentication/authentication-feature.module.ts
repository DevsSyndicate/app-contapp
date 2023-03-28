import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';

import { AuthenticationService } from './application/services/authentication.service';
import { AuthenticationEffects } from './application/state/authentication.effects';

@NgModule({
    imports: [EffectsModule.forFeature([AuthenticationEffects])],
    providers: [AuthenticationService],
})

/**
 * Authentication feature module
 */
export class AuthenticationFeatureModule {}
