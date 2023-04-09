import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('@layout/main/main-layout.module').then((m) => m.MainLayoutModule),
    },
    {
        path: 'auth',
        loadChildren: () => import('@layout/auth/auth-layout.module').then((m) => m.AuthLayoutModule),
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
