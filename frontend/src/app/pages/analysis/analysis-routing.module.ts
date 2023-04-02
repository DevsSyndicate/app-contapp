import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AnalysisPageMenuLayoutComponent } from './layouts/menu/menu.component';
import { AnalysisPageMonthlyLayoutComponent } from './layouts/monthly/monthly.component';

const routes: Routes = [
    {
        path: '',
        component: AnalysisPageMenuLayoutComponent,
    },
    {
        path: 'monthly',
        component: AnalysisPageMonthlyLayoutComponent,
    },

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})

/**
 * Analysis page module routing
 */
export class AnalysisPageRoutingModule {}
