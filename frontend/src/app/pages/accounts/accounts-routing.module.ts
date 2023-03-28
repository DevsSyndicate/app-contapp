import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AccountsPageFormLayoutComponent } from './layouts/form/form.component';
import { AccountsPageListLayoutComponent } from './layouts/list/list.component';

const routes: Routes = [
    {
        path: '',
        component: AccountsPageListLayoutComponent,
    },
    {
        path: 'add',
        component: AccountsPageFormLayoutComponent,
    },
    {
        path: 'edit/:id',
        component: AccountsPageFormLayoutComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})

/**
 * Accounts page module routing
 */
export class AccountsPageRoutingModule {}
