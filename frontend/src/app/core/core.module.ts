import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClientXsrfModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { DatesUseCases } from './application/services/dates.use-cases';
import { TokenService } from './application/services/token.service';
import { CoreEffects } from './application/state/core..effects';
import { coreReducer } from './application/state/core.reducers';
import { ApiRepository } from './infrastructure/repositories/api.repository';
import { AuthInterceptor } from './ui/interceptors/auth.interceptor';

@NgModule({
    imports: [
        CommonModule,
        HttpClientModule,
        StoreModule.forFeature('core', coreReducer),
        EffectsModule.forFeature([CoreEffects]),
        HttpClientXsrfModule.withOptions({
            cookieName: 'XSRF-TOKEN',
            headerName: 'X-XSRF-TOKEN',
        }),
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AuthInterceptor,
            multi: true,
        },
        ApiRepository,
        DatesUseCases,
        TokenService,
    ],
})

/**
 * Core module
 */
export class CoreModule {}
