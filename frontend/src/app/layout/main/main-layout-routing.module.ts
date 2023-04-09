import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainLayoutComponent } from './main-layout.component';

import { AuthGuard } from '@features/authentication/application/guards/auth.guard';

const routes: Routes = [
    {
        path: '',
        canActivate: [AuthGuard],
        component: MainLayoutComponent,
        children: [
            {
                path: '',
                loadChildren: () => import('@pages/dashboard/dashboard.module').then((m) => m.DashboardModule),
            },
            {
                path: 'movements',
                loadChildren: () => import('@pages/movements/movements.module').then((m) => m.MovementsPageModule),
            },
            {
                path: 'categories',
                loadChildren: () => import('@pages/categories/categories.module').then((m) => m.CategoriesPageModule),
            },
            {
                path: 'accounts',
                loadChildren: () => import('@pages/accounts/accounts.module').then((m) => m.AccountsPageModule),
            },
            {
                path: 'analysis',
                loadChildren: () => import('@pages/analysis/analysis.module').then((m) => m.AnalysisPageModule),
            },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})

/**
 * Main layout routing module
 */
export class MainLayoutRoutingModule {}
