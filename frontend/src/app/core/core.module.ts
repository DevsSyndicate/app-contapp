import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { AuthInterceptor } from './application/interceptors/auth.interceptor';
import { CoreEffects } from './application/state/core..effects';
import { coreReducer } from './application/state/core.reducers';
import { ApiService } from './infrastructure/api/api.service';

@NgModule({
    imports: [CommonModule, HttpClientModule, StoreModule.forFeature('core', coreReducer), EffectsModule.forFeature([CoreEffects])],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AuthInterceptor,
            multi: true,
        },
        ApiService,
    ],
})

/**
 * Core module
 */
export class CoreModule {}
