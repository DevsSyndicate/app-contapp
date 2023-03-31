import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClientXsrfModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { AuthInterceptor } from './application/interceptors/auth.interceptor';
import { DatesService } from './application/services/dates.service';
import { CoreEffects } from './application/state/core..effects';
import { coreReducer } from './application/state/core.reducers';
import { ApiService } from './infrastructure/api/api.service';

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
        ApiService,
        DatesService,
    ],
})

/**
 * Core module
 */
export class CoreModule {}
