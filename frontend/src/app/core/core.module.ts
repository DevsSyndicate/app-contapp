import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClientXsrfModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { DatesService } from './application/services/dates.service';
import { TokenService } from './application/services/token.service';
import { CoreEffects } from './application/state/core..effects';
import { coreReducer } from './application/state/core.reducers';
import { AuthInterceptor } from './infrastructure/interceptors/auth.interceptor';
import { ApiRepository } from './infrastructure/repositories/api.repository';

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
        DatesService,
        TokenService,
    ],
})

/**
 * Core module
 */
export class CoreModule {}
