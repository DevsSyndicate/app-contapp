import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { LoginFormLayoutComponent } from './layouts/form/form.component';
import { LoginPageRoutingModule } from './login-routing.module';

import { AuthenticationUiFeatureModule } from '@features/authentication/authentication-ui-feature.module';
import { SharedBreadcrumbsComponent } from '@shared/components/breadcrumbs/breadcrumbs.component';

@NgModule({
    declarations: [
        LoginFormLayoutComponent,
    ],
    imports: [
        AuthenticationUiFeatureModule,
        CommonModule,
        LoginPageRoutingModule,
        SharedBreadcrumbsComponent,
    ],
    exports: [

    ],
})

/**
 * Login page module
 */
export class LoginPageModule { }
