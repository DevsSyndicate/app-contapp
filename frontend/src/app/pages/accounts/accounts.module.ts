import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AccountsPageRoutingModule } from './accounts-routing.module';
import { AccountsPageFormLayoutComponent } from './layouts/form/form.component';
import { AccountsPageListLayoutComponent } from './layouts/list/list.component';

@NgModule({
    declarations: [
        AccountsPageFormLayoutComponent,
        AccountsPageListLayoutComponent,
    ],
    imports: [
        AccountsPageRoutingModule,
        CommonModule,
    ],
})

/**
 * Accounts page module
 */
export class AccountsPageModule {}
