import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardMainLayoutComponent } from './layouts/main/main-layout.component';

const routes: Routes = [
    {
        path: '',
        component: DashboardMainLayoutComponent,
    },

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})

/**
 * Dashboard page module routing
 */
export class DashboardPageRoutingModule {}
