import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginFormLayoutComponent } from './layouts/form/form.component';

const routes: Routes = [
    {
        path: '',
        component: LoginFormLayoutComponent,
    },

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})

/**
 * Login page module routing
 */
export class LoginPageRoutingModule {}
