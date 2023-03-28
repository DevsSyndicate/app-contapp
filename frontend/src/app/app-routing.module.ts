import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthLayoutComponent } from '@layout/layouts/auth/auth-layout.component';
import { MainLayoutComponent } from '@layout/layouts/main/main-layout.component';

const routes: Routes = [
    {
        path: '',
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
        ],
    },
    {
        path: 'auth',
        component: AuthLayoutComponent,
        children: [
            {
                path: 'login',
                loadChildren: () => import('@pages/login/login.module').then((m) => m.LoginPageModule),
            },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})

/**
 * Main routing module
 */
export class AppRoutingModule {}
