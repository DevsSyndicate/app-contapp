import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@auth0/auth0-angular';

const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('@sections/dashboard/dashboard.module').then((m) => m.DashboardModule),
        // canLoad: [AuthGuard],
    },
    {
        path: 'categories',
        loadChildren: () => import('@sections/categories/categories.module').then((m) => m.CategoriesModule),
        // canLoad: [AuthGuard],
    },
    {
        path: 'movements',
        loadChildren: () => import('@sections/movements/movements.module').then((m) => m.MovementsModule),
        canLoad: [AuthGuard],
    },
    {
        path: 'statistics',
        loadChildren: () => import('@sections/statistics/statistics.module').then((m) => m.StatisticsModule),
        canLoad: [AuthGuard],
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})

/**
 * Main application routing module
 */
export class AppRoutingModule {}
