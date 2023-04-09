import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AuthLayoutRoutingModule } from './auth-layout-routing.module';
import { AuthLayoutComponent } from './auth-layout.component';

@NgModule({
    declarations: [
        AuthLayoutComponent,
    ],
    imports: [
        AuthLayoutRoutingModule,
        CommonModule,
        RouterModule,
    ],
    exports: [
        AuthLayoutComponent,
    ],
})

/**
 * Auth layout module
 */
export class AuthLayoutModule { }
