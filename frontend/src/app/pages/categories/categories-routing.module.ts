import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CategoriesPageFormLayoutComponent } from './layouts/form/form.component';
import { CategoriesPageListLayoutComponent } from './layouts/list/list.component';

const routes: Routes = [
    {
        path: '',
        component: CategoriesPageListLayoutComponent,
    },
    {
        path: 'add',
        component: CategoriesPageFormLayoutComponent,
    },
    {
        path: 'edit/:id',
        component: CategoriesPageFormLayoutComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})

/**
 * Categories page module routing
 */
export class CategoriesPageRoutingModule {}
