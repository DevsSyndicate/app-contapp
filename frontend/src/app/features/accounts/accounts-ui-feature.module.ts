import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AccountsFeatureModule } from './accounts-feature.module';
import { AccountsPresentationAdapter } from './presentation/adapters/accounts.adapter';
import { AccountsFormComponent } from './presentation/components/form/form.component';
import { AccountsTableComponent } from './presentation/components/table/table.component';

import { ValidationErrorsComponent } from '@shared/components/validation-errors/validation-errors.component';

@NgModule({
    declarations: [
        AccountsFormComponent,
        AccountsTableComponent,
    ],
    exports: [
        AccountsFormComponent,
        AccountsTableComponent,
    ],
    imports: [
        AccountsFeatureModule,
        CommonModule,
        ReactiveFormsModule,
        RouterModule,
        ValidationErrorsComponent,
    ],
    providers: [
        AccountsPresentationAdapter,
    ],
})

/**
 * Accounts Ui feature module
 */
export class AccountsUiFeatureModule {}
