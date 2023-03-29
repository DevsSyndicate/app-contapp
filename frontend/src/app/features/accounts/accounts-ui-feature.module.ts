import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AccountsFeatureModule } from './accounts-feature.module';
import { LanguagesActionsComponent } from './presentation/components/actions/actions.component';
import { AccountsFormComponent } from './presentation/components/form/form.component';
import { AccountsTableComponent } from './presentation/components/table/table.component';

import { ValidationErrorsComponent } from '@shared/components/validation-errors/validation-errors.component';

@NgModule({
    declarations: [
        AccountsFormComponent,
        AccountsTableComponent,
        LanguagesActionsComponent,
    ],
    exports: [
        AccountsFormComponent,
        AccountsTableComponent,
        LanguagesActionsComponent,
    ],
    imports: [
        AccountsFeatureModule,
        CommonModule,
        ReactiveFormsModule,
        RouterModule,
        ValidationErrorsComponent,
    ],
})

/**
 * Accounts Ui feature module
 */
export class AccountsUiFeatureModule {}
