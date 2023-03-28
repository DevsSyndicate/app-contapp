import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MovementsPageFormLayoutComponent } from './layouts/form/form.component';
import { MovementsPageListLayoutComponent } from './layouts/list/list.component';

const routes: Routes = [
    {
        path: '',
        component: MovementsPageListLayoutComponent,
    },
    {
        path: 'add',
        component: MovementsPageFormLayoutComponent,
    },
    {
        path: 'edit/:id',
        component: MovementsPageFormLayoutComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})

/**
 * Movements page module routing
 */
export class MovementsPageRoutingModule {}
