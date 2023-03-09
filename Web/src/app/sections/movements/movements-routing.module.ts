import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovementsComponent } from './components/movements/movements.component';

/**
 * Movements route definition
 */
const routes: Routes = [
    {
        path: '',
        component: MovementsComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})

/**
 * Movements module
 */
export class MovementsRoutingModule {}
