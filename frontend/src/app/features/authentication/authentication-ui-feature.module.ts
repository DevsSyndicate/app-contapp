import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AuthenticationFeatureModule } from './authentication-feature.module';
import { AuthenticationPresentationAdapter } from './presentation/adapters/authentication.adapter';
import { AuthenticationFormComponent } from './presentation/components/form/form.component';

@NgModule({
    declarations: [AuthenticationFormComponent],
    exports: [AuthenticationFormComponent],
    imports: [AuthenticationFeatureModule, CommonModule, ReactiveFormsModule, RouterModule],
    providers: [AuthenticationPresentationAdapter],
})

/**
 * Authentication Ui feature module
 */
export class AuthenticationUiFeatureModule {}
