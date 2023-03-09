import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StatisticsComponent } from './components/statistics/statistics.component';

/**
 * Statistics route definition
 */
const routes: Routes = [
    {
        path: '',
        component: StatisticsComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})

/**
 * Statistics module
 */
export class StatisticsRoutingModule {}
