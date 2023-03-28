import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AccountsPageRoutingModule } from './accounts-routing.module';
import { AccountsPageFormLayoutComponent } from './layouts/form/form.component';
import { AccountsPageListLayoutComponent } from './layouts/list/list.component';

import { SharedBreadcrumbsComponent } from '@shared/components/breadcrumbs/breadcrumbs.component';

@NgModule({
    declarations: [
        AccountsPageFormLayoutComponent,
        AccountsPageListLayoutComponent,
    ],
    imports: [
        AccountsPageRoutingModule,
        CommonModule,
        SharedBreadcrumbsComponent,
    ],
})

/**
 * Accounts page module
 */
export class AccountsPageModule {}
